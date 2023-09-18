"use client";

import React from "react";
import { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Button,
  Text,
  Container,
  Center,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import Link from "next/link";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function SlideShow() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(<Slider />);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  const title = "Austin Landscaping";
  const text = "Irrigation & Landscaping Services Serving The Austin Area";

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: title,
      text: text,
      image: "/front-yard-1.jpg",
    },

    {
      title: title,
      text: text,
      image: "/front-yard-2.jpg",
    },
    {
      title: title,
      text: text,
      image: "/front-yard-3.jpg",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"80vh"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Center>
                  <div className="bg-white p-4 rounded-xl">
                    <div className=" text-center font-bold text-2xl  text-[#126180]">
                      {card.title}
                    </div>
                    <div className=" text-center pt-2  text-lg text-[#126180]">
                      {card.text}
                    </div>
                  </div>
                </Center>
                <Center></Center>

                <div>
                  <Center>
                    <Link href={"/contact"}>
                      {" "}
                      <button className="bg-blue-300 font-bold hover:bg-blue-400 text-gray-600 duration-500 transition p-4 rounded-xl hover:shadow-xl">
                        Get An Estimate Now{" "}
                      </button>
                    </Link>
                  </Center>
                </div>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
