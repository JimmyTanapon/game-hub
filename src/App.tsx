import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'
import Nav from './components/Nav'
import GameGrids from './components/GameGrids'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hook/useGeneres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hook/usePlatforms'


function App() {
  const [selectedgenre, setSelectedgenre] = useState<Genre | null>(null)
    const [selectedPlatforms , setSelectedPlatforms]= useState<Platform | null >(null)
  return (
    <Grid templateAreas={{
      base: `"nav " " main"`,
      lg: `"nav nav" "aside main "`, //1024px
    }}
      templateColumns={{
        base: '1fr',
        lg: "200px 1fr"
      }}
    >
      <GridItem area={"nav"}>
        <Nav />

      </GridItem>
      <Show above='lg'>
        <GridItem area={"aside"} paddingX={'5px'} >
          <GenreList
            selectedGenre={selectedgenre}
            
            onSelectedGenre={(genre) => setSelectedgenre(genre)} />

        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector selectedPlatforms={selectedPlatforms} onSelectedPlatforms={(platform)=>setSelectedPlatforms(platform)} />

        <GameGrids  selectedPlatforms={selectedPlatforms}  selectedGenre={selectedgenre} />

      </GridItem>
    </Grid>
  )
}

export default App
