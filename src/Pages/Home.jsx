import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Box
      h="100vh"
      w="100%"
      pt={{ base: "50px", md: "65px", lg: "65px" }}
      // border="1px solid red"
    >
      <Flex w="100%" h="100%">
        <Box w="50%" h="100%" borderBottom="1px dashed #0BC5EA">
          <Box mt="150px" fontWeight="500" textAlign={"left"} ml="25%">
            <Text fontSize={{ base: "", md: "", lg: "50px" }}>
              I'm Ayush Verma
            </Text>
            <Text fontSize={{ base: "", md: "", lg: "20px" }} color={"#00ACD5"}>
              Aspiring Full Stack Web Developer
            </Text>
            <Text fontSize={{ base: "", md: "", lg: "20px" }} color={"#00ACD5"}>
              at Masai School, Banglore
            </Text>
          </Box>
          <Flex ml="25%" mt="20px">
            <Button
              w="fit-content"
              size="sm"
              borderRightRadius={"none"}
              colorScheme="cyan"
              shadow={"md"}
            >
              MORE ABOUT ME →
            </Button>
            <Button
              w="fit-content"
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

        <Box
          bgColor="#0BC5EA"
          w="50%"
          overflow={"hidden"}
          boxShadow={"lg"}
          position={"relative"}
        >
          <Image src="avhomeimage.png" w="590px" m="auto" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
