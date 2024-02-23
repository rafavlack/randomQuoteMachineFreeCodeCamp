import { useState } from 'react';
import  {marked} from 'marked';
import { Card, Textarea } from "@nextui-org/react";

function App() {
    const [markdown, setMarkdown] = useState(`
# Welcome to my Markdown previewer
## This is a subtitle

You can see my code on GitHub

\`This is an inline code\`

\`\`\`
This is a code block
\`\`\`

- This is a list item

> This is a block quote

!React Logo

**This is bold text**
`);

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    }

    return (
        <div className="App mt-20" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card
                hoverable
                className="border-none bg-background/60 dark:bg-default-100/50 w-[80vw] h-[80vh] min-h-[500px]"
                shadow="sm"
            >
                <div className="grid grid-cols-2 gap-4 h-full">

                    <div className="grid p-4">
                        <h3 className="text-3xl font-semibold">Markdown Editor</h3>
                        <div className="my-4 flex-grow">
                            <Textarea id="editor" value={markdown} onChange={handleChange} placeholder="Write your Markdown here..." className="h-full" />
                        </div>
                    </div>

                    <div className="grid p-4">
                        <h3 className="text-3xl font-semibold">Preview</h3>
                        <div className="my-4 flex-grow">
                            <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdown)}} className="p-4 border rounded-md h-full overflow-auto" />
                        </div>
                    </div>

                </div>
            </Card>
        </div>
    )
}

export default App;
