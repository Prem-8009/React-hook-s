import { useEffect, useState } from 'react'

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>(); 
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      let fetchedData = await response.json();
      setData(fetchedData);
    } catch (error) {
      console.log("Error", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    data,
    error,
    loading    
  }
}

export default useFetch;