import { useEffect, useState } from "react"

const useFetch = () => {
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);

    const fetchData = async () => {
        setLoading(true);
        try {
            fetch('https://api.quotable.io/random')
                .then(res => res.json())
                .then(data => {
                    setData(data)
                    setLoading(false)
                })
        } 
        catch (error) {
            setError(error);
        }
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    return { data, fetchData, error, loading }
}

export default useFetch;