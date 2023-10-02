import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";

const Navbar = () => {
  const [section, setSection] = useState("");

  const handleSection = (sec) => {
    setSection(sec);
  };

  return (
    <Box position="relative" >
        <Flex
            h={{ base: "50px", md: "65px", lg: "65px" }}
            w="100%"
            alignItems={"center"}
            pl={{ base: "10px", md: "80px", lg: "80px" }}
            pr={{ base: "10px", md: "80px", lg: "80px" }}
            bgColor="white"
            boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
            zIndex={10}
            position={"fixed"}
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
                href="#home"
                color={section === "sec1" ? "teal" : "black"}
                onClick={() => handleSection("sec1")}
            >
                Home
            </Link>
            <Link
                href="#about"
                color={section === "sec2" ? "teal" : "black"}
                onClick={() => handleSection("sec2")}
            >
                About
            </Link>
            <Link
                href="#skills"
                color={section === "sec3" ? "teal" : "black"}
                onClick={() => handleSection("sec3")}
            >
                Skills
            </Link>
            <Link
                href="#projects"
                color={section === "sec4" ? "teal" : "black"}
                onClick={() => handleSection("sec4")}
            >
                Projects
            </Link>
            <Link
                href="#contact"
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

        <Box >
            <section id="home">
            <Home />
            </section>
            <section id="about">
            <About />
            </section>
            <section id="skills">
            <Skills />
            </section>
            <section id="projects">
            <Projects />
            </section>
            <section id="contact">
            <Contact />
            </section>
        </Box>
    </Box>
  );
};

export default Navbar;
