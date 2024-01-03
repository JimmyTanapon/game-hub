import React from 'react'
import { GameQuery } from '../App'
import { Heading } from '@chakra-ui/react'


interface Props{
    gameType:GameQuery
}
const GameHeading = ({gameType}:Props) => {

    const heading  =`${gameType.platform?.name || ''} ${gameType.genre?.name || ''} Games`
  return (
    <Heading as={'h1'} marginY={5} fontSize={'5xl'}>
        {heading}
    </Heading>
  )
}

export default GameHeading