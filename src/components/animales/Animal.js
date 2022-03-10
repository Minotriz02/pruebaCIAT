import React, { useEffect, useState } from "react";
import styled, { css } from 'styled-components';

const Animal = function () {

    const AnimalCon = styled.div`
                                display:flex;
                                flex-direction:column;
                                padding: 0rem 10rem;
                                align-items:center;
                            `
    const AnimaltCon = styled.div`                           
                            display:flex;
                            justify-content:space-around;
                            width:100%;
                            margin-bottom:1rem;
                            flex-flow: wrap;
                        `
    const Text = styled.h2`
                            float:left;
                            height:124px;
                            width:400px;
                            box-shadow:-70px 70px 0 -60px #3A8DA8;
                            align-self: flex-start;
    
                `

    const [type, setType] = useState(null);
    const [animals, setAnimals] = useState(null);
    const [zonas, setZonas] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/animales')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setAnimals(data);
            });
        fetch('http://localhost:8001/zonas')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setZonas(data);
            });

    }, []);



    useEffect(() => {
        console.log({ type });
    }, [type])



    return (

        <AnimalCon>
            <button onClick={() => { setType(1); }}>Animales en zonas de deforestación</button>
            <button onClick={() => { setType(2); }}>Animales en zonas que no hay deforestación</button>
            <Text>Animales</Text>
            {animals && type == 1 && <AnimaltCon>
                {animals.map((animals) => (
                    < h4 > {animals.animal}</h4>
                ))}
            </AnimaltCon>}
            {
                zonas && type == 2 && <AnimaltCon>
                    {zonas.map((zonas) => (
                        <h4>{zonas.latitud}</h4>
                    ))}
                </AnimaltCon>
            }
        </AnimalCon >
    );
}

export default Animal;


