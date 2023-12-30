import useGeneres, { Genre } from '../hook/useGeneres'
import { HStack, List, ListItem ,Image, Text, Spinner, Button } from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url'



interface Props {
  onSelectedGenre:(genre:Genre) => void
}

const GenreList = ({onSelectedGenre}:Props) => {
    const{data,isLoading,error} =useGeneres()
    if(error) return null

    if(isLoading) return <Spinner/>
  return (
    <List>
        {data.map((genre,index)=>(
            <ListItem key={genre.id}>
              <HStack paddingY={'5px'}>
                <Image boxSize={'32px'}   borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                <Button fontSize='base' variant='link'
                onClick={()=>onSelectedGenre(genre)}
                >{genre.name}</Button>
              </HStack>
              </ListItem>
        ))}
    </List>
  )
}

export default GenreList