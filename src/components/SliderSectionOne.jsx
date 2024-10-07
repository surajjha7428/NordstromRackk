import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Button, Flex, Text } from '@chakra-ui/react';
import "../components/SliderSectionOne.css";

function SliderSectionOne() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 24;
    const slidesPerView = 4;
    const containerRef = useRef(null);

    const slideData = [
        { img: "https://n.nordstrommedia.com/id/sr3/28c6040f-2317-4c9e-80dc-cfa793dfaac1.jpeg?q=45&dpr=2&h=262&w=170",title:"BirkenStock", price: '$49.95', rating: '4.5', link: 'https://example.com/item1' },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZSavmlXh3B4FW7VUOaPToBB-yEaeHSvvK-NNIrX6CXyuntOjE03VbCrg278CMGgy3CLk&usqp=CAU", title: "90 DEGREE BY REFLEX", price: '$24.97 (67% off)', rating: '4.0', link: 'https://example.com/item2' },
        { img: "https://www.sheknows.com/wp-content/uploads/2021/03/ray-ban-highstreet-cat-eye.jpeg?w=683", title: 'Ray-Ban', price: '$89.97 (53% off)', rating: '4.7', link: 'https://example.com/item3' },
        { img: "https://n.nordstrommedia.com/id/sr3/d1f3df17-0a7d-4ab6-a03a-cd9bccd6aa31.jpeg?h=365&w=240&dpr=2", title: 'Levis', price: '$49.99(15% off)', rating: '4.2', link: 'https://example.com/item4' },
        { img: "https://n.nordstrommedia.com/id/sr3/276d5410-4d38-4770-9a7e-90799de2fde6.jpeg?h=365&w=240&dpr=2", title: 'BirkenStock', price: '$110', rating: '4.3', link: 'https://example.com/item5' },
        { img: "https://n.nordstrommedia.com/id/sr3/40c39db0-d5eb-4b6a-af19-763506b7db41.jpeg?h=365&w=240&dpr=2", title: 'LongChamp', price: '$49.97(67% off)', rating: '4.1', link: 'https://example.com/item6' },
        { img: "https://n.nordstrommedia.com/id/sr3/a1000b46-763c-40e9-ad97-94ecfe64aef1.jpeg?h=365&w=240&dpr=2", title: 'BirkenStock', price: '$89.95', rating: '4.6', link: 'https://example.com/item7' },
        { img: "https://n.nordstrommedia.com/id/sr3/2cdd670c-bb92-4d9d-8064-9154ab415eda.jpeg?q=45&dpr=2&h=262&w=170", title: 'Nike ', price: '$160', rating: '4.8', link: 'https://example.com/item8' },
        { img: "https://n.nordstrommedia.com/id/sr3/fced1720-8da2-4dca-a194-d06d95a76c8b.jpeg?h=365&w=240&dpr=2", title: 'TOM FORD', price: '$179.97(up to 65% off)', rating: '4.9', link: 'https://example.com/item9' },
        { img: "https://n.nordstrommedia.com/id/sr3/82265ab3-3f2d-47d5-9670-95662fe54aca.jpeg?h=365&w=240&dpr=2", title: 'Cole Haan', price: '$89.97 -$109.97', rating: '4.4', link: 'https://example.com/item10' },
        { img: "https://n.nordstrommedia.com/id/sr3/fe647640-b00a-4d62-a659-02c375f79b74.jpeg?h=365&w=240&dpr=2", title: 'DKNY', price: '$24.97 (upt to 68% off select items)', rating: '4.5', link: 'https://example.com/item11' },
        { img: "https://n.nordstrommedia.com/id/sr3/d74d8f7b-0675-4bef-a18f-81d7a04637fc.jpeg?h=365&w=240&dpr=2", title: 'BirkenStock', price: '$99.95', rating: '4.0', link: 'https://example.com/item12' },
        { img: "https://n.nordstrommedia.com/id/sr3/560ae5a1-fbb3-40ce-a780-d765679ebd80.jpeg?h=365&w=240&dpr=2", title: 'MicracleStock', price: '$89.97 (50% off)', rating: '4.2', link: 'https://example.com/item13' },
        { img: "https://n.nordstrommedia.com/id/sr3/2ab7cb4e-776f-437e-8e3e-f89088aa23d9.jpeg?h=365&w=240&dpr=2", title: 'BeachlunchLounge', price: '$26.97', rating: '4.3', link: 'https://example.com/item14' },
        { img: "https://n.nordstrommedia.com/id/sr3/4a6a995d-1a01-40be-89e4-b1f567d1c5a4.jpeg?trim=color&w=350&h=536", title: 'Madewell', price: '$16.97 (12% off)', rating: '4.4', link: 'https://example.com/item15' },
        { img: "https://n.nordstrommedia.com/id/sr3/1f45fd4d-4919-4b11-8a89-f4577d0c3d0b.jpeg?trim=color&w=350&h=536", title: 'Madewell', price: '$15.97', rating: '4.5', link: 'https://example.com/item16' },
        { img: "https://n.nordstrommedia.com/id/sr3/cd081a4d-947a-4bf6-a703-5baefcd135e4.jpeg?h=365&w=240&dpr=2", title: 'Vince', price: '$119.97 (59% off)', rating: '4.6', link: 'https://example.com/item17' },
        { img: "https://n.nordstrommedia.com/id/sr3/093f43e5-1b0e-4646-b7f9-535bf1421950.jpeg?trim=color&w=350&h=536", title: 'Tommy Bhama', price: '$39.97-$39.99(59% off)', rating: '4.7', link: 'https://example.com/item18' },
        { img: "https://n.nordstrommedia.com/id/sr3/58d0cf39-4cf6-4f7f-b883-013bb7bfd09b.jpeg?q=45&dpr=2&h=365.31&w=230", title: 'Joes', price: '$39.97 (71% off)', rating: '4.8', link: 'https://example.com/item19' },
        { img: "https://n.nordstrommedia.com/id/sr3/c4dd5bb9-d43b-4aed-a8fc-aa1a12bd6206.jpeg?q=45&dpr=2&h=262&w=170", title: 'AG', price: '$79.97 (65% off)', rating: '4.9', link: 'https://example.com/item20' },
        { img: "https://n.nordstrommedia.com/id/sr3/d7cf2372-da0f-4c18-b4ff-01b90c0bdcc2.jpeg?q=45&dpr=2&h=262&w=170", title: 'Nike', price: '$16.97 (57% off)', rating: '5.0', link: 'https://example.com/item21' },
        { img: "https://n.nordstrommedia.com/id/sr3/c62ddc10-5cbb-4a9f-9ff1-4dd1d29e3411.jpeg?h=365&w=240&dpr=2", title: 'Callway Golf', price: '$34.97 (55% off)', rating: '5.0', link: 'https://example.com/item22' },
        { img: "https://n.nordstrommedia.com/id/sr3/fa3ac70f-c7dc-4267-a169-4b053d2f399e.jpeg?h=365&w=240&dpr=2", title: 'Volcom', price: '$32.97 (34% off)', rating: '5.0', link: 'https://example.com/item23' },
        { img: "https://n.nordstrommedia.com/id/sr3/1c882b91-702c-473f-ac0f-004b4837d952.jpeg?h=365&w=240&dpr=2", title: 'FERRAGAMO', price: '$89.97 (74% off)', rating: '5.0', link: 'https://example.com/item24' },
    ];

    const nextSlide = () => {
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
                <Text fontSize="16px" fontWeight="minimal" mt={2} color={"black"}> {slideData[index % slideData.length].title}</Text>
                <Text fontSize="16px" color="black" fontWeight="bold" >{slideData[index % slideData.length].price}</Text>
                <Text fontSize="16px" color="#186adc">★★★★★ ({slideData[index % slideData.length].rating})</Text>
            </Box>
        </a>
    ));

    return (
        <Container maxW="container.xl" className="slider-section-one">
            <div className="slider-section-one-h1">
                <h1 className="slider-h1" >Top 100 Deals</h1>
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
