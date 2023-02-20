import React, { useContext, useEffect } from 'react';
import MDEditor, { commands, ICommand, EditorContext } from '@uiw/react-md-editor';
import '../styles/markdown-editor.css';
import '../styles/markdown-container.css';
import '../styles/markdown-preview.css';
import { Button } from '@chakra-ui/react';


const ButtonPreview = () => {
    const { preview ,dispatch } = useContext(EditorContext);
    const click = () => {
        dispatch?.({
            preview: preview === "edit" ? "preview" : "edit"
        });
    };

    if (preview === "preview") {
        return (
            <Button onClick={click}>Edit</Button>
        );
    }
    return (
        <Button onClick={click}>Preview</Button>
    );
        
};

  
const codePreview: ICommand = {
    name: "preview",
    keyCommand: "preview",
    value: "preview",
    icon: <ButtonPreview />
};


export default function Markdown() {
    const [value, setValue] = React.useState<string | undefined>("***Hello World***");
    const [viewHeight, setViewHeight] = React.useState(0);
    const [text, setText] = React.useState('');

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
            <div data-color-mode="dark" className="container" style={{height: viewHeight}}>
                <MDEditor
                    visibleDragbar={false}
                    style={{ width: "80%" }}
                    value={value}
                    height={viewHeight / 1}
                    onChange={setValue}
                    preview="preview"
                    extraCommands={[codePreview]}
                />
            </div>
        </>
    );
}