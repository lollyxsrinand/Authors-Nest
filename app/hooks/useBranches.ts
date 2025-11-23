"use client";

import { useEffect, useState } from "react";

interface Branch {
  id: string;
  name: string;
  head: string;
  storyID: string;
  authorId: string;
  createdAt?: string;
  updatedAt?: string;
}

export function useBranches() {
  const [branches, setBranches] = useState<Branch[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBranches() {
      try {
        const response = await fetch("/api/branches"); // assuming API path
        if (!response.ok) {
          throw new Error("Failed to fetch branches");
        }
        const data = await response.json();
        setBranches(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBranches();
  }, []);

  return { branches, loading, error };
}
