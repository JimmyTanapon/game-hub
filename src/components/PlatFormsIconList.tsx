import{
    FaApple,
    FaPlaystation,
    FaXbox,
    FaLinux,
    FaAndroid,
    FaWindows
} from 'react-icons/fa'
import {SiNintendo} from'react-icons/si'
import {BsGlobe} from'react-icons/Bs'
import {MdPhoneIphone} from'react-icons/Md'
import { Platform } from '../hook/useGames'
import {  HStack, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'

interface Props {
    platforms: Platform[]
}
const PlatFormsIconList = ({ platforms }: Props) => {
    const iconsMap :{[key:string]:IconType}={
        pc:FaWindows,
        mac:FaApple,
        xbox:FaXbox,
        nintendo:SiNintendo,
        playstation:FaPlaystation,
        linux:FaLinux,
        web:BsGlobe,
        ios:MdPhoneIphone,
        android:FaAndroid
    }
    return (
        <HStack marginY={'10px'}>
            {platforms.map(( platform ) => 
          <Icon key={platform.id} as={iconsMap[platform.slug]} color={'gray.500'}/>)}

        </HStack>
    )
}

export default PlatFormsIconList