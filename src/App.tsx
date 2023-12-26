import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'

function App() {


  return (
    <Grid templateAreas={{
      base: `"nav " " main"`,
      lg: `"nav nav" "aside main "`, //1024px
    }}>
      <GridItem area={"nav"} bg={"coral"}>
        Nav

      </GridItem>
      <Show above='lg'>
        <GridItem area={"aside"} bg={"blue"}>
          Aside

        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"gray"}>
        Main

      </GridItem>
    </Grid>
  )
}

export default App
