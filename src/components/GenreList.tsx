import useGeneres from '../hook/useGeneres'
import { HStack, List, ListItem ,Image, Text } from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url'

const GenreList = () => {
    const{data} =useGeneres()
  return (
    <List>
        {data.map((genre,index)=>(
            <ListItem key={genre.id}>
              <HStack paddingY={'5px'}>
                <Image boxSize={'32px'}   borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                <Text>{genre.name}</Text>
              </HStack>
              </ListItem>
        ))}
    </List>
  )
}

export default GenreList