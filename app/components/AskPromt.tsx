"use client";
import { useState } from "react";

export const AskPrompt = ({ token }: { token: string }) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:4000/set-user-name", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name }),
      });
      if (!res.ok) {
        throw new Error("Failed to set username");
      }
      window.location.reload(); // reload to fetch new user data
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-black">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-gray-900 p-8 rounded-lg shadow-lg">
        <label className="text-white text-lg font-semibold">Enter your username:</label>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white focus:outline-none"
          required
          disabled={loading}
        />
        {error && <span className="text-red-500">{error}</span>}
        <button
          type="submit"
          className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded transition-all disabled:opacity-50"
          disabled={loading || !name.trim()}
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
};