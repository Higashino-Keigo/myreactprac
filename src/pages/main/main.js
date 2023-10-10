import Header from "../../components/header";
import Value from "../../components/value";
import styled from "styled-components";
import React, { useState } from 'react';


export default function Main() {

    const [value, setValue] = useState(0);
    
    const handleP = () => {
      setValue(Value => Value + 1);
    }

    const handleM = () => {
      setValue(Value => Value - 1);
    }

    return (
        <>
        <Header />
        <Value value={value}/>
        <button onClick={handleP}>메인1</button>
        <Btn onClick={handleM}>메인2</Btn>
        </>
    );
}

const Btn = styled.button`
  color: white;
`;