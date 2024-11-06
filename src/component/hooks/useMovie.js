import { useEffect, useState } from "react";
import { Services } from "../config/Services";

export function useMovie(endpoint) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading,setLoading]=useState(true)

  async function LoadDetail() {
     
    try {
      const result = await Services.get(endpoint);
      setData(result.data);
      setLoading(false)
    } catch (error) {
      setError(error);
    }
  }
  useEffect(() => {
    LoadDetail();
  }, [endpoint]);
  return [data, error,loading];
}
