
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hook/useGames';
import GameCard from './GameCard';


const GameGrids = () => {
    const { games, error } = useGames()
    console.log('g:', games)
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm:1 ,md:2,lg:3 ,xl:5}} padding={'10px'} spacing={10}>
                {games.map(game => (

                    <GameCard games={game} key={game.id} />

                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrids