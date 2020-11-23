import React from 'react'
import styled from 'styled-components'
import '../style/root.css'

const Container = styled.div`
    display: grid;
    grid-template-rows: 300px 300px;
    grid-template-columns: 350px 350px;
`;
const Wrapper = styled.div`
  padding: 1em;
  text-align: center;
`;

const Grid4 = ({ children }) => (
    <Container>
        {children}
    </Container>
)

const Grid1 = ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
)



export { Grid4, Grid1 }