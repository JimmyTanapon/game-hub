import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useDate";


export interface Platform{
    id:number;
    name:string;
    slug:string;
}
export interface Game {
    id: number;
    name: string;
    description:string;
    background_image:string;
    parent_platforms:{platform:Platform}[]
    metacritic:number;
}

interface FetchGameResponse {

    count: number;
    results: Game[]
}
// const useGames = () => {
//     const [games, setGames] = useState<Game[]>([])
//     const [error, setError] = useState('')
//     const  [isLoading ,setLoading] = useState(false);

//     useEffect(() => {
//         const controller = new AbortController()
//         setLoading(true)
//         apiClient.get<FetchGameResponse>('/games',{signal: controller.signal})
//             .then((res) => {
//                 setGames(res.data.results)
//                 setLoading(false)
//             })
//             .catch((error)=>{
//                 if(error instanceof CanceledError) return;
//                 setError(error.message)
//                 setLoading(false)
//             })
//             return ()=>controller.abort()
//     }, [])
//     return {games,error,isLoading}
// }
const useGames =()=> useData<Game>('/games')
export default useGames