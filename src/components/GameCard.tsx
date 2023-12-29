import React from 'react'
import { Game } from '../hook/useGames'
import { Card, CardBody, HStack, Heading, Image, Stack, Text } from '@chakra-ui/react'
import PlatFormsIconList from './PlatFormsIconList'
import CriticScore from './CriticScore'
interface Props {
    games: Game
}
const GameCard = ({ games }: Props) => {
    return (
        <Card maxW='sm' overflow={'hidden'} borderRadius={10}>
            <Image src={games.background_image} />
            <Stack mt='6' spacing='3'>
                <CardBody>
                    <Heading size='md'>{games.name}</Heading>
                  <HStack justifyContent={'space-between'} >
                        <PlatFormsIconList platforms={games.parent_platforms.map(p => p.platform)} />
                        <CriticScore score={games.metacritic}/>
    
                  </HStack>

                </CardBody>
            </Stack>
        </Card>
    )
}

export default GameCard