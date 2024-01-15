
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hook/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

import { GameQuery } from '../App';



interface Props{
  gameQuery:GameQuery
}
const GameGrids = ({gameQuery}:Props) => {
    const { data, error, isLoading } = useGames(gameQuery)
    const skeletons = [1, 2, 3, 4, 5, 6,7,8]
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={'10px'} spacing={6}>
                {isLoading && skeletons.map((skeleton) => (
                    <GameCardContainer  key={skeleton}>
                        <GameCardSkeleton />

                    </GameCardContainer>))}
                { !isLoading && data.map(game => (

                    <GameCardContainer  key={game.id} >
                        <GameCard games={game}/>

                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrids