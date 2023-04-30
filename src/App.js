import './App.css';
import { GridItem, Grid, List, ListItem, Text, Flex, Box, Spacer } from "@chakra-ui/react"
import { Route, Routes } from 'react-router-dom';
import SignIN from './signin';
import SignUP from './signup';

function App() {
  return (
    <>
      <Grid templateColumns='repeat(5, 1fr)' gap={2}>
        <GridItem w='50vw' h='100vh' bg='blue.500' >


          <Flex>
            <Box p='4' >
            </Box>
            <Spacer />
            <Box p='4' >
              <div className="text-placer">
                <List spacing={3}>
                  <ListItem>
                    <Text fontSize='5xl'> No</Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize='5xl'> Delay in</Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize='5xl'> Healthcare</Text>
                  </ListItem>
                </List>
              </div>
            </Box>
          </Flex>




        </GridItem>
        <GridItem w='48vw' h='100vh'  >
          <Routes>
            <Route path='/signin' element={<SignIN />}></Route>
            <Route path='/signup' element={<SignUP />}></Route>
          </Routes>
        </GridItem>

      </Grid >


    </>
  );
}

export default App;
