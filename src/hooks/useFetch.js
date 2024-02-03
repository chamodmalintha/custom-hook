import { useCallback, useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        try{
            setIsLoading(true);
            const response = await fetch(url);
            const result = await response.json();
            setItems(result.results);
        }catch(error){
            setError(error)
        }finally{
            setIsLoading(false);
        }
    }, [url]) 

    const clickMe = async () => {
        try{
            setIsLoading(true);
            const response = await fetch(url);
            const result = await response.json();
            setItems(result.results);
        }catch(error){
            setError(error)
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url, fetchData])

  return {items, isLoading, error, clickMe};
}
