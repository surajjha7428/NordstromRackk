import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Button, Flex, Text } from '@chakra-ui/react';
import "../components/Divein.css";

function SliderSectionOne() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 24;
    const slidesPerView = 4;
    const containerRef = useRef(null);

    const slideData = [
        {img:"https://n.nordstrommedia.com/it/dbf42fe6-1fdb-415e-ad6a-35fb06afaf14.png?h=429&w=279",title:"All Swimwear"},
        {img :"https://n.nordstrommedia.com/id/sr3/ddb2c387-ca54-472b-875c-104675a29524.jpeg?h=365&w=240&dpr=2", title:"DKNY", price:"$39.97 (50% off)"},
        {img:"https://n.nordstrommedia.com/id/sr3/21574676-c162-4eab-a948-d07a6371fb9e.jpeg?h=365&w=240&dpr=2", title:"La Blanca ", price:"$39.97 (57% off)"},
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBg8M0GTsDxvCpeK5_3jg-nrtbcTMLVBq_vJ3H5R6yO_O8nNky_x4eFaRchekcA-pqprU&usqp=CAU", title:"Sea Level ", price:"$44.97 (50% off)"},
        {img:"https://n.nordstrommedia.com/id/sr3/fded7261-a08d-4fe1-9964-4ccb1a5202ce.jpeg?h=365&w=240&dpr=2", title:"DKNY", price:"$39.97 (50% off)"},
        {img:"https://n.nordstrommedia.com/id/sr3/52dc4d01-e55b-42c8-9aaa-0dd16eb126e6.jpeg?h=365&w=240&dpr=2",title:"DKNY", price:"$39.97 (50% off)"},
        {img:"https://n.nordstrommedia.com/id/sr3/411669d0-6403-42b3-8bdc-b3183c58e17f.jpeg?h=365&w=240&dpr=2",title:"Sea Level", price:"$44.97 (50% off)"},
        {img:"https://n.nordstrommedia.com/id/sr3/1c570227-430c-4d14-8ea1-187d78b9e29b.jpeg?trim=color&width=185&height=370",  title:"DKNY", price:"$39.97 (50% off)"},
        {img:"https://gottex-swimwear.com/cdn/shop/products/ETTR2160-410.jpg?v=1702044433",tilte:"Profile by Gottex",price :"$39.97 (50% off)"},
        {img:"https://m.media-amazon.com/images/I/71rIGTn4VAL._AC_UY1000_DpWeblab_.jpg",title:"La Blanca ", price:"$39.97 (57% off)"},
        {img:"https://n.nordstrommedia.com/id/sr3/a644ebaa-5643-4451-bada-258df3e58777.jpeg?q=45&dpr=2&h=262&w=170",title:"Jantzen" , price:"$44.97 (50% off)"},
    ]
;    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + slidesPerView) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - slidesPerView + totalSlides) % totalSlides);
    };

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollLeft = (251 + 21) * currentSlide;
        }
    }, [currentSlide]);

    const sliders = Array.from({ length: totalSlides }, (_, index) => (
        <a href={slideData[index % slideData.length].link} key={index} target="_blank" rel="noopener noreferrer">
            <Box
                width="251px"
                height="477px"
                padding="0px 21px 0px 0px"
                display="flex"
                marginTop={"20px"}
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                flex="0 0 auto"
            >
                <img
                    src={slideData[index % slideData.length].img}
                    alt={`Slider ${index + 1}`}
                    style={{ width:"240px", height:"361px",marginLeft:"20px" }}
                />
                <Text fontSize="16px" fontWeight="minimal" mt={2} color={"#186adc"}> {slideData[index % slideData.length].title}</Text>
                <Text fontSize="16px" color="black" fontWeight="medium" >{slideData[index % slideData.length].price}</Text>
                <Text fontSize="16px" color="#186adc">★★★★★ {slideData[index % slideData.length].rating }</Text>
            </Box>
        </a>
    ));

    return (
        <Container maxW="container.xl" className="slider-section-one">
            <div className="slider-section-one-h1">
                <h1 className="slider-h1" >Dive in.</h1>
            </div>
            <Flex position="relative" alignItems="center">
                <Button
                    onClick={prevSlide}
                    position="absolute"
                    left="0"
                    zIndex="1"
                    color={"#186adc"}
                    background="none"
                    _hover={{ background: "none" }}
                    height="100%"
                    padding="0"
                    outline="none"
                    border="none"
                >
                    &#10094;
                </Button>
                <Box
                    ref={containerRef}
                    overflow="hidden"
                    display="flex"
                    flexWrap="nowrap"
                    width="100%"
                    className="slider-container"
                >
                    {sliders}
                </Box>
                <Button
                    onClick={nextSlide}
                    position="absolute"
                    right="0"
                    zIndex="1"
                    color={"#186adc"}
                    background="none"
                    _hover={{ background: "none" }}
                    height="100%"
                    padding="0"
                    outline="none"
                    
                >
                    &#10095;
                </Button>
            </Flex>
        </Container>
    );
}

export default SliderSectionOne;
