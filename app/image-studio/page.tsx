"use client";
import React, { useState } from "react";
import Icon from "../components/Icon";

const ImageStudio = () => {
  const [image64, setImage64] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");

  const genImage = async () => {
    setLoading(true);
    setError(null);
    setImage64("");
    try {
      const res = await fetch("/api/gen-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt || "midnight bright moon silhouette girl illustration",
          seed: Math.floor(Math.random() * 99999),
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || `Error: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      if (!data.success) throw new Error(data.errors?.[0]?.message || "Unknown error");
      if (!data.result?.image) throw new Error("No image returned");

      setImage64(data.result.image);
    } catch (err) {
      console.error("Image generation error:", err);
      setError((err as any).message || "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!image64) return;
    const link = document.createElement("a");
    link.href = `data:image/png;base64,${image64}`;
    link.download = "generated-image.png";
    link.click();
  };

  return (
    <div className="h-screen w-full bg-black text-white flex justify-center items-center flex-col">
      <div className="relative h-96 w-96 flex justify-center items-center mb-4">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-gray-700 via-gray-900 to-gray-700 animate-pulse opacity-80 flex items-center justify-center">
              <Icon name="photo" size={64} />
            </div>
          </div>
        )}
        {!loading && image64 ? (
          <img
            alt="generated"
            className="h-full w-full rounded-lg object-contain bg-gray-900"
            src={`data:image/png;base64,${image64}`}
          />
        ) : !loading ? (
          <div className="h-full w-full flex justify-center items-center opacity-50 bg-gray-4 rounded-lg">
            <Icon name="photo" size={64} />
          </div>
        ) : null}
      </div>
      <div className="w-96 flex flex-col gap-2">
        <input
          className="bg-gray-4 focus:outline-0 text-sm text-white-pitch p-2.5 rounded-lg w-full"
          type="text"
          placeholder="Describe your image prompt..."
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          disabled={loading}
        />
        {error && <p style={{ color: "red" }} className="mb-2">Error: {error}</p>}
        <div className="flex flex-row gap-2 w-full">
          <button
            type="button"
            onClick={genImage}
            disabled={loading || !prompt.trim()}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-all disabled:opacity-50 w-full"
          >
            {loading ? "Generating..." : "Generate Image"}
          </button>
          {image64 && !loading && (
            <button
              onClick={handleDownload}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-all w-full"
            >
              Download
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageStudio;
