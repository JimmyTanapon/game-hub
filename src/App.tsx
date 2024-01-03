import { Button, ButtonGroup, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import './App.css'
import Nav from './components/Nav'
import GameGrids from './components/GameGrids'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hook/useGeneres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hook/usePlatforms'
import SortSelector from './components/SortSelector'


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder:string;
  searchText:string;
}

function App() { 

  const [gameQurey, setGameQurey] = useState<GameQuery>({ } as GameQuery)
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
        <Nav  onSearch={(searchText)=>setGameQurey({...gameQurey,searchText})}/>

      </GridItem>
      <Show above='lg'>
        <GridItem area={"aside"} paddingX={'5px'} >
          <GenreList
            selectedGenre={gameQurey.genre}

            onSelectedGenre={(genre) => setGameQurey({...gameQurey,genre})} />

        </GridItem>
      </Show>
      <GridItem area={"main"}>
       <Flex gap={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector selectedPlatforms={gameQurey.platform} onSelectedPlatforms={(platform) => setGameQurey({...gameQurey,platform})} />
          <SortSelector  sortOrder={gameQurey.sortOrder} onSelectOrder={(sortOrder)=>setGameQurey({...gameQurey,sortOrder})}/>
       </Flex>
        <GameGrids  gameQuery={gameQurey}/>

      </GridItem>
    </Grid>
  )
}

export default App
