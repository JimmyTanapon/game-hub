import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()


    return (

        <HStack  whiteSpace={'nowrap'}>
            {colorMode == 'dark' ?
                <SunIcon onClick={toggleColorMode} cursor={'pointer'} /> :
                <MoonIcon onClick={toggleColorMode} cursor={'pointer'} />
            }

        </HStack>
    )
}

export default ColorModeSwitch