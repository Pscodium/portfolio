import React from "react";
import { Flex, Icon, Button } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaDev, FaInstagram, FaFileAlt } from 'react-icons/fa';

export default function Footer() {
    return (
        <Flex
            h="60px"
            w="100%"
            justifyContent="center"
            alignItems="center"
        >
            <Button borderRadius="5px 0px 0px 5px" onClick={() => window.open("https://github.com/Pscodium")}>
                <Icon as={FaGithub} />
            </Button>
            <Button borderRadius="0px" onClick={() => window.open("https://www.linkedin.com/in/peterson-larson-3b4209182/")}>
                <Icon as={FaLinkedin} />
            </Button>
            <Button borderRadius="0px" onClick={() => window.open("https://dev.to/pscodium")}>
                <Icon as={FaDev} />
            </Button>
            <Button borderRadius="0px" onClick={() => window.open("https://www.instagram.com/pscodium/")}>
                <Icon as={FaInstagram} />
            </Button>
            <a href={require("../assets/Peterson_Larson_Resume.pdf")} download="Peterson-Resume.pdf">
                <Button borderRadius="0px 5px 5px 0px">
                    <Icon as={FaFileAlt} />
                </Button>
            </a>
        </Flex>
    );
}