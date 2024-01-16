import useGeneres, { Genre } from '../hook/useGeneres'
import { HStack, List, ListItem ,Image, Text, Spinner, Button, Heading } from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url'



interface Props {
  onSelectedGenre:(genre:Genre) => void
  selectedGenre:Genre |null

}

const GenreList = ({onSelectedGenre,selectedGenre}:Props) => {
    const{data,isLoading,error} =useGeneres()
    if(error) return null

    if(isLoading) return <Spinner/>
  return (
    <>
      <Heading  fontSize='2xl'  marginBottom={3}>Genres</Heading>
      <List>
          {data.map((genre,index)=>(
              <ListItem key={genre.id}>
                <HStack paddingY={'5px'}>
                  <Image boxSize={'32px'}   
                  borderRadius={8} 
                  objectFit='cover'
                  src={getCroppedImageUrl(genre.image_background)}/>
                  <Button 
                  whiteSpace='normal'
                  textAlign='left'
                  fontSize='base' variant='link'
                  fontWeight={selectedGenre?.id === genre.id ?" bold" :"normal"}
                  onClick={()=>onSelectedGenre(genre)}
                  >{genre.name}</Button>
                </HStack>
                </ListItem>
          ))}
      </List>
    </>
   
  )
}

export default GenreList