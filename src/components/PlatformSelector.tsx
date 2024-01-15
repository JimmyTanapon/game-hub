import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/Bs'
import usePlatforms, { Platform } from '../hook/usePlatforms'


interface Props {
    onSelectedPlatforms: (Platform: Platform) => void
    selectedPlatforms:  Platform | null

    }

const PlatformSelector = ({ onSelectedPlatforms ,selectedPlatforms}: Props) => {
    const { data, error } = usePlatforms();
    if (error) return null
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatforms?.name || "Platforms" }</MenuButton>
            <MenuList>
                {data.map((platform) => (
                    <MenuItem key={platform.id} onClick={
                        () => onSelectedPlatforms(platform)}
                        >
                        {platform.name}
                    </MenuItem>
                ))}


            </MenuList>
        </Menu>
    )
}

export default PlatformSelector