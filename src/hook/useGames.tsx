import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface Game {
    id: number;
    name: string;
}

interface FetchGameResponse {

    count: number;
    results: Game[]
}const useGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        apiClient.get<FetchGameResponse>('/games')
            .then(res => setGames(res.data.results))
            .catch((error)=>{
                if(error instanceof CanceledError) return;
                setError(error.message)
            })
    }, [])

    return {games,error}
}
export default useGames