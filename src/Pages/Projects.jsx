import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Projects = () => {
  return (
    <Box
      h={{ base: "380px", md: "500px", lg: "100vh" }}
      w="100%"
      pt={{ base: "50px", md: "60px", lg: "75px" }}
      // border="1px solid red"
      borderBottom={{
        base: "none",
        md: "1px dashed #0BC5EA",
        lg: "1px dashed #0BC5EA",
      }}
    >
      <Heading fontSize={{ base: "20px", md: "20px", lg: "30px" }}>
        Projects
      </Heading>
    </Box>
  );
};

export default Projects;
