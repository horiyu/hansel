import styled from 'styled-components'
import { Header, Footer, Head } from '../index'

export default function Layout({ children }) {
  return (
    <Container>

      <Head/>

      <Header/>

      <Main>
        { children }
      </Main>

      <Footer/>

    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  margin-top: 70px;
  margin: 20px;
`;
