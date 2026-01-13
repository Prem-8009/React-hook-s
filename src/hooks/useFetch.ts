import { useEffect, useState } from 'react'

const useFetch = (url: string) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(url);
      let fetchedData = await response.json();
      setData(fetchedData)
    } catch (error) {
      console.log("Error", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {fetchData()},[]);
  return {
    data,
    error,
    loading    
  }
}

export default useFetch