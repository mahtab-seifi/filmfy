import { useEffect, useState } from "react";
import { Services } from "../config/Services";


export function useMovie( endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function LoadDetail() {
    
      if (!loading) setLoading(true);
      const result = await Services.get(endpoint);
      setData(result.data);
      setLoading(false);
   
  }
  useEffect(() => {
    LoadDetail();
  }, [endpoint]);
  return [data, loading]  ;
}
