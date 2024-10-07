import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Button, Flex, Text } from '@chakra-ui/react';
import "../components/Collection.css";

function SliderSectionOne() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesPerView = 3;
    const slideWidth = 304;
    const slideGap = 21;

    const slideData = [
        { img: "https://n.nordstrommedia.com/it/ef410756-d20c-40ac-b959-5d48e028f38a.jpeg?h=1224&w=1224",title:"A.L.C up to 65% Off", text:"Event ends in 3 days, 22 hours, and 18 minutes",link: 'https://example.com/item1' },
        { img: "https://n.nordstrommedia.com/it/ba0ad82c-3b2b-486b-8ead-467916ede705.jpeg?h=1224&w=1224", title: "Sandal Shop: Casual Summer Sandals Up to 60% Off", text:"Event ends in 3 days, 22 hours, and 18 minutes",  link: 'https://example.com/item2' },
        { img: "https://n.nordstrommedia.com/it/d55f9cd9-4c2b-4144-8a4a-7c730f03442c.jpeg?h=1224&w=1224", title: 'Sandal Shop: Mens Summer Sandals Up to 50% Off', text:"Event ends in 3 days, 22 hours, and 18 minutes", link: 'https://example.com/item3' },
        { img: "https://n.nordstrommedia.com/it/170c0a77-6800-4c6a-9846-da261f12fdfc.jpeg?h=1224&w=1224", title: "Sandal Shop: Summer Occasion Styles Up to 60% Off",text:"Event ends in 3 days, 22 hours, and 10 minutes", link: 'https://example.com/item4' },
        { img: "https://n.nordstrommedia.com/it/18067f26-a41f-4f7c-a347-26408c89f771.jpeg?h=1224&w=1224", title: 'Sandal Shop: Adventure Sandals For the Fam Featuring Teva',text:"Event ends in 3 days, 22 hours, and 10 minutes", link: 'https://example.com/item5' },
        { img:"https://n.nordstrommedia.com/it/46ba645d-fddb-4ce2-ac70-702660100f89.jpeg?h=1224&w=1224", title: "Sandal Shop: Kids' Favorite Styles Up to 50% Off", text:"Event ends in 3 days, 22 hours, and 10 minutes", link: 'https://example.com/item6' },
        { img: "https://n.nordstrommedia.com/it/8d437bf2-33b6-4344-be08-3219c612f179.jpeg?h=1224&w=1224", title: "New-In Trendy Sunglasses Starting at $35", text:"Event ends in 3 days, 22 hours, and 8 minutes", link: 'https://example.com/item7' },
        { img: "https://n.nordstrommedia.com/it/6555c23e-87e8-4e6d-ad3c-495ca080c8cd.jpeg?h=1224&w=1224", title: "New-In EFFY Diamonds & Fine Jewelry Up to 50% Off",text:"Event ends in 2 days, 22 hours, and 8 minutes", link: 'https://example.com/item8' },
        { img: "https://n.nordstrommedia.com/it/1b102651-eff1-4505-821d-57286316e109.jpeg?h=1224&w=1224", title: "Cinq A Sept Up to 70% Off", text:"Event ends in 2 days, 22 hours, and 8 minutes", link: 'https://example.com/item9' },
        { img: "https://n.nordstrommedia.com/it/24cca3ff-6e83-4cdd-bf9e-3b598df8fbd3.jpeg?h=1224&w=1224", title: "Sale On Now: 25% Off Herschel Supply Co.", text:"Event has ended", link: 'https://example.com/item10' },
        { img: "https://n.nordstrommedia.com/it/7300c244-1e33-4eb5-be65-a02598b7879f.jpeg?h=1224&w=1224", title: 'Designer Sunglasses & Watches Up to 65% Off', text:"Event ends in 2 days, 22 hours, and 7 minutes", link: 'https://example.com/item11' },
        { img: "https://n.nordstrommedia.com/it/1110c205-8a3f-482b-a797-4d0b3dd0b56c.jpeg?h=1224&w=1224", title: 'Ted Baker London Up to 60% Off', text:"Event ends in 2 days, 22 hours, and 7 minutes", link: 'https://example.com/item13' },
        { img: "https://n.nordstrommedia.com/it/65b4137b-2b56-4877-adc9-c32917d67f09.jpeg?h=1224&w=1224", title: 'Run Club Essentials Up to 50% Off', text:"Event ends in 2 days, 22 hours, and 5 minutes", link: 'https://example.com/item14' },
        { img: "https://n.nordstrommedia.com/it/c508c68a-0429-47c4-ab17-c6ef496541ca.jpeg?h=1224&w=1224", title: "Sam Edelman Shoes Up to 60% Off", text:"Event ends in 2 days, 22 hours, and 5 minutes", link: 'https://example.com/item15' },
        { img: "https://n.nordstrommedia.com/it/83a18aa5-095f-4238-8084-6e7c16f9cc6c.jpeg?h=1224&w=1224", title: "Women's Bestsellers Up to 65% Off", text:"Event ends in 2 days, 22 hours, and 5 minutes", link: 'https://example.com/item16' },
        { img: "https://n.nordstrommedia.com/it/86c755c4-ac9d-4fac-9b6d-810049fbed92.jpeg?h=1224&w=1224",title:"Bruno Magli Shoes Up to 50% Off", text:"Event ends in 2 days, 22 hours, and 4 minutes", link: 'https://example.com/item17' },
        { img: "https://n.nordstrommedia.com/it/b0b035a8-6088-4d6b-a200-2a6f3153e3e4.jpeg?h=1224&w=1224", title: 'Womens Contemporary Styles Up to 65% Off',text:"Event ends in 2 days, 22 hours, and 4 minutes", link: 'https://example.com/item18' },
        { img: "https://n.nordstrommedia.com/it/9b0ce545-633d-4787-a5a7-21036218ee41.jpeg?h=1224&w=1224", title: 'Pistola Up to 70% Off', text:"Event ends in 2 days, 21 hours, and 58 minutes" ,link: 'https://example.com/item19' },
        { img: "https://n.nordstrommedia.com/it/bb4aae27-0a99-40e2-b597-454d5acabe5f.jpeg?h=1224&w=1224", title: 'Mens Bestsellers Up to 60% Off', text:"Event ends in 2 days, 21 hours, and 58 minutes", link: 'https://example.com/item20' },
        { img: "https://n.nordstrommedia.com/it/36d46c64-b29b-4ace-8d5c-c9840f9f3908.jpeg?h=1224&w=1224", title:"Summer Swimwear Up to 65% Off", text:"Event ends in 1 day, 21 hours, and 58 minutes", link: 'https://example.com/item21' },
        { img: "https://n.nordstrommedia.com/it/34a43a8c-1b1e-4d5c-b7b8-f5e36b63efe8.jpeg?h=1224&w=1224", title: "Curly & Textured Hair Care Feat. Pattern Beauty", text:"Event ends in 2 days, 21 hours, and 57 minutes", link: 'https://example.com/item22' },
        { img: "https://n.nordstrommedia.com/it/0057be26-f959-4b6b-8ffd-0e290254a9f0.jpeg?h=1224&w=1224", title: "Topman from $30",text:"Event ends in 2 days, 21 hours, and 57 minutes", link: 'https://example.com/item23' },
        { img: "https://n.nordstrommedia.com/it/708a74d8-0a0a-4b58-b2b2-e21eb719f102.jpeg?h=1224&w=1224", title: "NN07 Up to 65% Off", text:"Event ends in 2 days, 21 hours, and 57 minutes", link: 'https://example.com/item24' },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(slideData.length / slidesPerView));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + Math.ceil(slideData.length / slidesPerView)) % Math.ceil(slideData.length / slidesPerView));
    };

    const sliders = slideData.slice(currentSlide * slidesPerView, (currentSlide + 1) * slidesPerView).map((slide, index) => (
        <a href={slide.link} key={index} target="_blank" rel="noopener noreferrer">
            <Box
                width="304px"
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
                    src={slide.img}
                    alt={`Slider ${index + 1}`}
                    style={{ width:"404px", height:"304px", marginLeft:"20px" }}
                />
                <Text fontSize="13px" fontWeight="bold" mt={2} color={"black"}> {slide.title}</Text>
                <Text fontSize="13px" fontWeight="minimum" mt={2} color={"black"}>{slide.text}</Text>
            </Box>
        </a>
    ));

    return (
        <Container maxW="container.xl" className="slider-section-one" margin={"0"} mt={"5px"}>
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
                    display="flex"
                    flexWrap="nowrap"
                    width="100%"
                    justifyContent="center"
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
