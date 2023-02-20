import React from "react";
import { Flex, Icon, Button} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaDev, FaInstagram, FaFileAlt } from 'react-icons/fa';

export default function Footer() {
    return (
        <Flex
            h="60px"
            w="100%"
            justifyContent="center"
            alignItems="center"
        >
            <Button backgroundColor="#1a202c" onClick={() => window.open("https://github.com/Pscodium")}>
                <Icon as={FaGithub} />
            </Button>
            <Button backgroundColor="#1a202c" onClick={() => window.open("https://www.linkedin.com/in/peterson-larson-3b4209182/")}>
                <Icon as={FaLinkedin} />
            </Button>
            <Button backgroundColor="#1a202c" onClick={() => window.open("https://dev.to/pscodium")}>
                <Icon as={FaDev} />
            </Button>
            <Button backgroundColor="#1a202c" onClick={() => window.open("https://www.instagram.com/pscodium/")}>
                <Icon as={FaInstagram} />
            </Button>
            <a href={require("../assets/Peterson_Larson_Resume.pdf")} download="Peterson-Resume.pdf">
                <Button backgroundColor="#1a202c">
                    <Icon as={FaFileAlt} />
                </Button>
            </a>
        </Flex>
    );
}