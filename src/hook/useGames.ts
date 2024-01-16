
import { GameQuery } from "../App";
import useData from "./useDate";
import { Platform } from "./usePlatforms";



export interface Game {
    id: number;
    name: string;
    description:string;
    background_image:string;
    parent_platforms:{platform:Platform}[]
    metacritic:number;
    rating_top:number;
   
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
const useGames =(gameQuery:GameQuery)=>
 useData<Game>('/games',{
    params:{
        genres:gameQuery.genre?.id,
        platforms:gameQuery.platform?.id,
        ordering:gameQuery.sortOrder,
        search:gameQuery.searchText,
    }
},
 [gameQuery])
export default useGames
