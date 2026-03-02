import { useState, useEffect, useCallback } from "react";
import api from "../api/api";

export function useRealtimeSnapshot(refreshInterval = 1000) {
  // Default 60 seconds
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchSnapshot = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get("/realtime-snapshot");

      if (response.data.status === "success") {
        // Organize data by source_table for easy access
        const organizedData = response.data.data.reduce((acc, item) => {
          acc[item.source_table] = {
            ...item.payload,
            updated_at: item.updated_at,
          };
          return acc;
        }, {});

        setData(organizedData);
        setLastUpdated(new Date());
        setError(null);
      }
    } catch (err) {
      setError(err.message);
      console.error("Error fetching snapshot data:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSnapshot();

    // Set up interval for real-time updates
    const intervalId = setInterval(fetchSnapshot, refreshInterval);

    return () => clearInterval(intervalId);
  }, [fetchSnapshot, refreshInterval]);

  return { data, loading, error, lastUpdated, refetch: fetchSnapshot };
}
