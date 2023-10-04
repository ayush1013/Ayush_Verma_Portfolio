import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const projects = [
  {
    title: "Tech World",
    discription:
      "The TechWorld is an details oriented website. Through this website, user can process orders, accept payments and logistics, and provide customer services. User Friendly UI ....",
    techStacks: [
      "React",
      "Redux",
      "Chakra UI",
      "Node JS",
      "Express JS",
      "MongoDB",
    ],
    image: "techworld.png",
    githubLink: "https://github.com/Raj-1313/TechWorld",
    liveLink: "https://techworld-tau.vercel.app/",
  },
  {
    title: "KFC Clone",
    discription:
      "KFC (Kentucky Fried Chicken) is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken.",
    techStacks: ["HTML", "CSS", "Javascript"],
    image: "kfc.png",
    githubLink: "https://github.com/naveenSaini1/KFC-2.O",
    liveLink: "https://clever-kitsune-a5635e.netlify.app/",
  },
  {
    title: "Medicine Store",
    discription:
      "Medicine store is an e-commerce website. The site is focused on providing a market place mainly for medicines and other hygiene related products.",
    techStacks: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Chakra UI",
      "JSON Server",
    ],
    image: "medicinestore.png",
    githubLink: "https://github.com/Adii1707/medicine-store-project",
    liveLink: "https://ephemeral-quokka-680438.netlify.app/",
  },
  {
    title: "Kimaye Clone",
    discription:
      "Hassle free online fruit ordering platform in Mumbai, Kimaye is a promise of consistently delivering the safest and superior quality fruits.",
    techStacks: ["HTML", "CSS", "Javascript"],
    image: "kimaye.png",
    githubLink: "https://github.com/Ajay470/Team-squalid-wire",
    liveLink: "https://boisterous-hotteok-75bc34.netlify.app/index.html",
  },
];

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

      <Flex></Flex>
    </Box>
  );
};

export default Projects;
