import React, { useEffect } from 'react';
import Markdown from '../components/Markdown';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {

    useEffect(() => {
        document.title = "Peterson Larson";
    }, []);

    return (
        <div style={{backgroundColor: "#1a202c"}}>
            <Header />
            <Markdown />
            <Footer />
        </div>
    );
}