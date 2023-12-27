import React from 'react'
import { Game } from '../hook/useGames'
import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'
interface Props {
    games: Game
}
const GameCard = ({ games }: Props) => {
    return (
        <Card maxW='sm' overflow={'hidden'} borderRadius={10}>
            <Image src={games.background_image}  />
            <Stack mt='6' spacing='3'>
                <CardBody>
                    <Heading size='md'>{games.name}</Heading>



                </CardBody>
            </Stack>
        </Card>
    )
}

export default GameCard