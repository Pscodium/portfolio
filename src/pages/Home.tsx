import React, { useEffect } from 'react';
import Markdown from '../components/Markdown';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useColorMode } from '@chakra-ui/react';

export default function Home() {
    const { colorMode } = useColorMode();

    useEffect(() => {
        document.title = "Peterson Larson";
    }, []);

    return (
        <div style={{ backgroundColor: colorMode == 'dark'? "#1a202c":"#edf2f7"}}>
            <Header />
            <Markdown />
            <Footer />
        </div>
    );
}