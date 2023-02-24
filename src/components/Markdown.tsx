import React, { useEffect } from 'react';
import MDEditor, { ICommand } from '@uiw/react-md-editor';
import '../styles/markdown-editor.css';
import '../styles/markdown-container.css';
import '../styles/markdown-preview.css';
import { Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const codePreview: ICommand = {
    name: "removed",
    keyCommand: "removed",
    value: "removed",
};


export default function Markdown() {
    const [value, setValue] = React.useState<string | undefined>("***Hello World***");
    const [viewHeight, setViewHeight] = React.useState(0);
    const [text, setText] = React.useState('');
    const [editMode, setEditMode] = React.useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    
    useEffect(() => {
        setViewHeight(window.innerHeight - 120);

        getReadme();

        function handleResize() {
            setViewHeight(window.innerHeight - 120);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setValue(text);
    }, [text]);

    async function getReadme() {
        fetch(`https://raw.githubusercontent.com/Pscodium/portfolio/master/src/assets/README.md`)
            .then(response => response.text())
            .then(result => setText(result))
            .catch(error => console.log(error)); 
    }

    return (
        <>
            <Button 
                position="absolute" 
                top="10px" 
                right="80px" 
                onClick={() => setEditMode(!editMode)}
            >{editMode? "Preview" : "Edit"}
            </Button>
            <Button position="absolute" top="10px" right="15px" onClick={() => toggleColorMode()}>
                {colorMode === "dark" ? <SunIcon/> : <MoonIcon/>}
            </Button>
            <div data-color-mode={colorMode == "dark"? "dark" : "light"} className="container" style={{height: viewHeight}}>
                <MDEditor
                    visibleDragbar={false}
                    style={{ width: "80%" }}
                    value={value}
                    hideToolbar={editMode? false : true}
                    height={viewHeight / 1}
                    onChange={setValue}
                    preview={editMode? "edit" : "preview"}
                    extraCommands={[codePreview]}
                />
            </div>
        </>
    );
}