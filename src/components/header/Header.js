import React from "react";
import styled, { css } from 'styled-components';
import Animal from '../animales/Animal'
import { useState, useEffect } from "react";

const Header = function ({ text, alter }) {
    const HeaderCon = styled.div`                           
                            display:flex;
                            align-items: center;
                            justify-content: space-between;
                            padding: 0rem 10rem;
                            height: 840px;
                            background-repeat:no-repeat;
                            background-size: cover;
                            background-position-y:bottom;
                        `
    const TextCon = styled.div`
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                        `
    const SubText = styled.h3`
                            margin-bottom:8rem;
                        `




    return (
        <HeaderCon>
            <TextCon>
                <h2>{text}</h2>
                <SubText>{alter}</SubText>

                <Animal></Animal>
            </TextCon>
        </HeaderCon>);
}

export default Header;