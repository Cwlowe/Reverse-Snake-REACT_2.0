import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

const ScoreBoard = () => {
    const counter = useSelector(state => state.counter);

    const TitleStyle = styled.h1`
        color:white;
        display:inline;
        letter-spacing: 5px;
        margin-left: 2vh;
    `
    const ScoreBStyle = styled.section`
        border:2px solid white;
        margin: auto;
        width: 700px;
        text-align:left;
    `
    const ScoreStyle = styled.p`
        color: white;
        margin-left: 2vh;
        display:inline;
    `
    return(
        <ScoreBStyle>
            <TitleStyle>Reverse Snake</TitleStyle>
            <ScoreStyle>Score: {counter}</ScoreStyle>
        </ScoreBStyle>
    )
}

export default ScoreBoard;