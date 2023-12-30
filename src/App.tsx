import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'
import Nav from './components/Nav'
import GameGrids from './components/GameGrids'
import GenreList from './components/GenreList'

function App() {


  return (
    <Grid templateAreas={{
      base: `"nav " " main"`,
      lg: `"nav nav" "aside main "`, //1024px
    }}>
      <GridItem area={"nav"}>
        <Nav/>

      </GridItem>
      <Show above='lg'>
        <GridItem area={"aside"} >
          <GenreList/>

        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrids/>

      </GridItem>
    </Grid>
  )
}

export default App
