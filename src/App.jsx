import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import MainContainer from './components/MainContainer';


function App() {
    return (
        <ChakraProvider>
            <Header />
            <MainContainer/>
        </ChakraProvider>
    );
}

export default App;
