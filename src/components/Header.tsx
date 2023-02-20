import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import '../styles/header.css';

export default function Header() {
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            w="100%"
            h="60px"
        >
            <Text 
                align="center"
                fontSize="25px"
                className="header-title"
                color="#fff"
            >Pscodium.dev</Text>
        </Flex>
    );
}