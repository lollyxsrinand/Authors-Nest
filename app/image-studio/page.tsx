"use client";
import React, { useContext, useState } from "react";


const ImageStudio = () => {
  const [image64, setImage64] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const accountId = process.env.NEXT_PUBLIC_IMG_GEN_ACC_ID
  const apiToken = process.env.NEXT_PUBLIC_IMG_GEN_API_TOKEN


  const genImage = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/gen-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: "midnight bright moon silhouette girl llustration",
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
      setError(err.message || "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <img
        alt="generated"
        className="h-100 w-100"
        src={image64 ? `data:image/png;base64,${image64}` : undefined}
      />
      <button type="button" onClick={genImage} disabled={loading}>
        {loading ? "Generating..." : "Generate Image"}
      </button>
    </div>
  );
};

export default ImageStudio;
