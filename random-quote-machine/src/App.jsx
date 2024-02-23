import React, {useEffect, useState} from 'react';
import {obtenerFrase} from './services/api';
import {obtenerPerro} from './services/api';
import {Button, Card, CardBody, CardFooter, CardHeader, Divider, Image} from "@nextui-org/react";
import {FaTwitter} from 'react-icons/fa';

function App() {
    const colores = ['#336699', '#339991', '#469C34', '#339991', '#B1AB3B', '#6A3399', '#2a9d8f', '#f4a261'];
    const [colorIndex, setColorIndex] = useState(0);
    const [frase, setFrase] = useState({ frase: '', autor: '' });
    const [imagenPerro, setImagenPerro] = useState('https://avatars.githubusercontent.com/u/86160567?s=200&v=4');

    const cambiarFrase = async () => {
        const idAleatorio = Math.floor(Math.random() * 86) + 2;
        const nuevaFrase = await obtenerFrase(idAleatorio);
        setFrase(nuevaFrase);

        const nuevaImagenPerro = await obtenerPerro();
        setImagenPerro(nuevaImagenPerro.message);

        setColorIndex((colorIndex + 1) % colores.length);
    }

    useEffect(() => {
        cambiarFrase();
    }, []);

    useEffect(() => {

        document.body.style.backgroundColor = colores[colorIndex];
    }, [colorIndex]);

    return (
        <div className="flex justify-center items-center min-h-screen" id="quote-box">
            <Card className="max-w-[500px]">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={100}
                        radius="sm"
                        src={imagenPerro}
                        width={100}
                    />
                </CardHeader>
                <Divider/>
                <CardBody>
                    <h5 id="text" className="text-3xl font-bold my-8" style={{color: colores[colorIndex]}}>{frase && frase.frase}</h5>
                    <p id="author" className="text-right text-sm italic">{frase && frase.autor}</p>
                </CardBody>

                <Divider/>
                <CardFooter style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <Button color="primary" auto>
                        <a
                            id="tweet-quote"
                            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(frase ? frase.frase : '')} - ${encodeURIComponent(frase ? frase.autor : '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter />
                        </a>
                    </Button>

                    <Button id="new-quote" onClick={cambiarFrase} color="secondary">
                        Nueva frase
                    </Button>
                </CardFooter>

            </Card>
        </div>
    )
}

export default App;
