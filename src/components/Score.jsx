import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Button, Flex, Text } from '@chakra-ui/react';
import "../components/SliderSectionOne.css";

function SliderSectionOne() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 24;
    const slidesPerView = 4;
    const containerRef = useRef(null);

    const slideData = [
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgN8EBXLAiWMLZ6Wl-JOXmxBrbgVQZIT-PFroAACSy3cfTPcen7r290vjBDM1bk99q4zM&usqp=CAU",title:"LOVESTICH", price: '$19.99 -$29.97 (50% off)', rating: '4.5' },
        { img: "https://n.nordstrommedia.com/id/sr3/f4dcdef7-fff8-46a8-a1d9-bc87f6b9c09c.jpeg?h=365&w=240&dpr=2", title: "NATORI", price: '$16.48 (75% off)', rating: '4.0', link: 'https://example.com/item2' },
        { img: "https://n.nordstrommedia.com/id/sr3/b075c4b6-1f2b-404a-a1e8-02eeb934195c.jpeg?trim=color&w=350&h=536", title: 'MAX STUDIO', price: ' $26.97 (53% off)', rating: '4.7', link: 'https://example.com/item3' },
        { img: "https://n.nordstrommedia.com/id/sr3/738b93eb-cf72-4316-8d11-d4b8cd07bca1.jpeg?h=365&w=240&dpr=2", title: 'LUCKY BRAND', price: '$44.99(54% off)', rating: '4.2', link: 'https://example.com/item4' },
        { img: "https://n.nordstrommedia.com/id/sr3/b4527acf-7c6a-4f94-a3f0-897eaa9f92c0.jpeg?h=365&w=240&dpr=2", title: 'MADEWELL', price: '$16.97 (12% off)', rating: '4.3', link: 'https://example.com/item5' },
        { img: "https://n.nordstrommedia.com/id/sr3/5edd15ce-471e-48f8-91f7-02b4a7772a2e.jpeg?h=365&w=240&dpr=2", title: 'CROCS', price: '$49.97(67% off)', rating: '4.1', link: 'https://example.com/item6' },
        { img: "https://n.nordstrommedia.com/id/sr3/8bb0a029-f87d-477b-86c0-293444bcc57f.jpeg?h=365&w=240&dpr=2", title: 'NIKE', price: '$89.95', rating: '4.6', link: 'https://example.com/item7' },
        { img: "https://n.nordstrommedia.com/id/sr3/7090ae95-3982-4777-9bd3-589bd1b66fd2.jpeg?h=365&w=240&dpr=2", title: 'BGBGENERATION ', price: '$160', rating: '4.8', link: 'https://example.com/item8' },
        { img: "https://n.nordstrommedia.com/id/sr3/27dda56a-7d3d-46f7-b420-38b26a90bf2f.jpeg?h=365&w=240&dpr=2", title: 'THRAVISHMATHEW', price: '$179.97(up to 65% off)', rating: '4.9', link: 'https://example.com/item9' },
        { img: "https://n.nordstrommedia.com/id/sr3/184deeb2-822d-4653-9bbd-d4d14e96d800.jpeg?h=365&w=240&dpr=2", title: 'NATORI', price: '$89.97 -$109.97', rating: '4.4', link: 'https://example.com/item10' },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVWHG87EPBWTay0b6ACf7a8jg10TeXNi3Ig&s", title: 'HOKA', price: '$24.97 (upt to 68% off select items)', rating: '4.5', link: 'https://example.com/item11' },
        { img: "https://n.nordstrommedia.com/id/sr3/6db8004c-3df7-4a8d-ae5e-ce6db1abfa97.jpeg?trim=color&w=350&h=536", title: "NATORI", price: '$99.95', rating: '4.0', link: 'https://example.com/item12' },
        { img: "https://n.nordstrommedia.com/id/sr3/070d30a9-f1fa-433b-a161-81da6ab5f7d0.jpeg?q=45&dpr=2&h=365.31&w=230", title: 'LUCKY BRAND', price: '$89.97 (50% off)', rating: '4.2', link: 'https://example.com/item13' },
        { img: "https://n.nordstrommedia.com/id/sr3/bd1efe71-00de-4213-ba94-1503ff157ef9.jpeg?h=365&w=240&dpr=2", title: 'TOMMY BHAMA', price: '$26.97', rating: '4.3', link: 'https://example.com/item14' },
        { img: "https://n.nordstrommedia.com/id/sr3/2d6b81c1-bfd6-4378-bd92-e6644e733d65.jpeg?h=365&w=240&dpr=2", title: "SAM EDELEM", price: '$16.97 (12% off)', rating: '4.4', link: 'https://example.com/item15' },
        { img: "https://n.nordstrommedia.com/id/sr3/a64c420f-9a93-4f01-acaf-222be858b536.jpeg?h=365&w=240&dpr=2", title: 'Madewell', price: '$15.97', rating: '4.5', link: 'https://example.com/item16' },
        { img: "https://n.nordstrommedia.com/id/sr3/cd081a4d-947a-4bf6-a703-5baefcd135e4.jpeg?h=365&w=240&dpr=2", title: 'TAILOR BRYID', price: '$119.97 (59% off)', rating: '4.6', link: 'https://example.com/item17' },
        { img: "https://n.nordstrommedia.com/id/sr3/beccb771-2b38-4bbc-827b-79caeadfce0b.jpeg?h=365&w=240&dpr=2", title: 'SAM EDELEMA', price: '$39.97-$39.99(59% off)', rating: '4.7', link: 'https://example.com/item18' },
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
                <h1 className="slider-h1" >Bestsellers</h1>
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
