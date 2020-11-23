import React from 'react'
import styled from 'styled-components'
import '../style/root.css'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`;
const Wrapper = styled.div`
  padding: 4em;
`;

export default ({ children }) => (
    <Container>
        <Wrapper>
            {children}
        </Wrapper>
    </Container>
)