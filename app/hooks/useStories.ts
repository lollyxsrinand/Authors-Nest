"use client";

import { useEffect, useState } from "react";

interface Story {
  id: string;
  title: string;
  description: string;
  authorId: string;
  createdAt?: string;
  updatedAt?: string;
}

export function useStories() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStories() {
      try {
        const response = await fetch("/api/story"); // assuming API path
        if (!response.ok) {
          throw new Error("Failed to fetch stories");
        }
        const data = await response.json();
        setStories(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchStories();
  }, []);

  return { stories, loading, error };
}
