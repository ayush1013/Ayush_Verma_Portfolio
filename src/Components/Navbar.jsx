import { Button, Flex, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Navbar = () => {
  const [section, setSection] = useState("");

  const handleSection = (sec) => {
    setSection(sec);
  };

  return (
    <Flex
      h={{ base: "50px", md: "65px", lg: "65px" }}
      w="100%"
      alignItems={"center"}
      pl={{ base: "10px", md: "80px", lg: "80px" }}
      pr={{ base: "10px", md: "80px", lg: "80px" }}
      bgColor="white"
      boxSizing="borderBox"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
      zIndex={10}
      position={"sticky"}
      top="0"
      justifyContent={"space-between"}
    >
      <Link fontWeight="500" fontSize={"lg"}>
        Ayush Verma
      </Link>
      <Flex
        display={{ base: "none", md: "flex", lg: "flex" }}
        justifyContent={"space-around"}
        ml={{ base: "10%", md: "10%", lg: "16%" }}
        cursor={"pointer"}
        w={{ base: "40%", md: "45%", lg: "50%" }}
        fontWeight="500"
        // border="1px solid black"
        alignItems={"center"}
      >
        <Link
          to="#home"
          color={section === "sec1" ? "teal" : "black"}
          onClick={() => handleSection("sec1")}
        >
          Home
        </Link>
        <Link
          to="#about"
          color={section === "sec2" ? "teal" : "black"}
          onClick={() => handleSection("sec2")}
        >
          About
        </Link>
        <Link
          to="#skills"
          color={section === "sec3" ? "teal" : "black"}
          onClick={() => handleSection("sec3")}
        >
          Skills
        </Link>
        <Link
          to="#projects"
          color={section === "sec4" ? "teal" : "black"}
          onClick={() => handleSection("sec4")}
        >
          Projects
        </Link>
        <Link
          to="#contact"
          color={section === "sec5" ? "teal" : "black"}
          onClick={() => handleSection("sec5")}
        >
          Contact
        </Link>
        <Link to="https://drive.google.com/u/0/uc?id=1wmufWjrLaIsUqdE_0nBDweoFlVvtq_as&export=download">
          <Button
            variant={"none"}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1wmufWjrLaIsUqdE_0nBDweoFlVvtq_as/view?usp=sharing",
                "_blank",
                "noreferrer"
              )
            }
          >
            Resume
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
