
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hook/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hook/useGeneres';
import { Platform } from '../hook/usePlatforms';



interface Props{
    selectedGenre :Genre | null;
    selectedPlatforms:Platform | null
}
const GameGrids = ({selectedGenre,selectedPlatforms}:Props) => {
    const { data, error, isLoading } = useGames(selectedGenre,selectedPlatforms)
    const skeletons = [1, 2, 3, 4, 5, 6,7,8]
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={'10px'} spacing={3}>
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