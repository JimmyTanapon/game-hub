import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props{
    onSearch:(searchText:string)=>void
}
const Nav = ({onSearch}:Props) => {
  return (
        <HStack padding={'10px'}>
            <Image src={logo} boxSize='60px'  />
            <SearchInput onSearchInput={onSearch} />
            <ColorModeSwitch/>
        </HStack>
    )
}

export default Nav