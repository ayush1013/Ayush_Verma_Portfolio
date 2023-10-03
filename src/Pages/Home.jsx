import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Box
      h={{ base: "650px", md: "450px", lg: "100vh" }}
      w="100%"
      pt={{ base: "50px", md: "60px", lg: "65px" }}
      // border="1px solid red"
    >
      <Flex
        w="100%"
        h="100%"
        flexDirection={{ base: "column", md: "row", lg: "row" }}
      >
        <Box
          w={{ base: "100%", md: "50%", lg: "50%" }}
          h={{ base: "40%", md: "100%", lg: "100%" }}
          borderBottom={{
            base: "none",
            md: "1px dashed #0BC5EA",
            lg: "1px dashed #0BC5EA",
          }}
          position="relative"
        >
          <Box
            display="inline-block"
            whiteSpace={"nowrap"}
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            fontWeight="500"
            textAlign={"left"}
            // border="1px solid black"
          >
            <Text fontSize={{ base: "32px", md: "32px", lg: "50px" }}>
              I'm Ayush Verma
            </Text>
            <Text
              fontSize={{ base: "14px", md: "14px", lg: "20px" }}
              color={"#00ACD5"}
            >
              Aspiring Full Stack Web Developer
            </Text>
            <Text
              fontSize={{ base: "14px", md: "14px", lg: "20px" }}
              color={"#00ACD5"}
            >
              at Masai School, Banglore
            </Text>

            <Flex m="auto" mt="20px">
              <Link href="#about">
                <Button
                  // w="fit-content"
                  size="sm"
                  borderRightRadius={"none"}
                  colorScheme="cyan"
                  shadow={"md"}
                >
                  MORE ABOUT ME →
                </Button>
              </Link>
              <Button
                // w="fit-content"
                size="sm"
                borderLeftRadius={"none"}
                variant={"outline"}
                colorScheme="cyan"
                shadow={"md"}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1wmufWjrLaIsUqdE_0nBDweoFlVvtq_as/view?usp=sharing",
                    "_blank",
                    "noreferrer"
                  )
                }
              >
                RESUME →
              </Button>
            </Flex>
          </Box>
        </Box>

        <Box
          bgColor="#0BC5EA"
          w={{ base: "100%", md: "50%", lg: "50%" }}
          h={{ base: "60%", md: "100%", lg: "100%" }}
          overflow={"hidden"}
          boxShadow={"lg"}
          position={"relative"}
        >
          <Image
            src="avhomeimage.png"
            w="87%"
            // w={{ base: "100%", md: "87%", lg: "87%" }}
            // border="1px solid black"
            position="absolute"
            bottom="0"
            left="50%"
            transform="translateX(-50%)"
            m="auto"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
