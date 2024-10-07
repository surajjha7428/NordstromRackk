import React from 'react'
import MainHolder from "../components/MainHolder";
import SliderOne from "../components/SliderOne";
import Brands from "../components/Brands";
import "../components/MainContainer.css";
import SliderSectionOne from './SliderSectionOne';
import MadeWellContainer from './MadeWellContainer';
import MadewellContainer from './MadewellBottom';
import Flash from './Flash';
import Collection from './Collection';
import Rack from './Rack';
import Divein from './Divein'
import Summer from './Summer'
import Score from './Score';
import More from './More';
import Email from './Email';
import Signin from './Signin'
import Footer from './Footer'
import { Container } from '@chakra-ui/react'

function MainContainer () {
    return (
        <Container 
        className="main-container"
        maxW="95%"
        // height={"5452px"}
        centerContent
        // border="5px solid blue"
        ml={5}
        >
            <MainHolder />
            <SliderOne />
            <Brands />
            <SliderSectionOne />
            <MadeWellContainer />
            <MadewellContainer />
            <Flash />
            <Collection />
            <Rack />
            <Divein />
            <Summer />
            <Score />
            <More />
            <Email />
            <Signin />
            <Footer />
        </Container>
    )
}
export default MainContainer