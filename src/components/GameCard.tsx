import React from 'react'
import { Game } from '../hook/useGames'
import { Card, CardBody, HStack, Heading, Image, Stack, Text } from '@chakra-ui/react'
import PlatFormsIconList from './PlatFormsIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'
interface Props {
    games: Game
}
const GameCard = ({ games }: Props) => {
    return (
        <Card maxW='sm'   overflow={'hidden'} borderRadius={10}>
            <Image src={ getCroppedImageUrl( games.background_image)} />
            <Stack spacing='3'>
                <CardBody>
                   
                  <HStack justifyContent={'space-between'}  marginBottom={3}>
                        <PlatFormsIconList platforms={games.parent_platforms.map(p => p.platform)} />
                        <CriticScore score={games.metacritic}/>
                  </HStack>
                  <Heading size='md'>{games.name}</Heading>
                </CardBody>
            </Stack>
        </Card>
    )
}

export default GameCard