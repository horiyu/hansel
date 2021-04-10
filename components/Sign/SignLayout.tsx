import styled from 'styled-components'
import Link from 'next/link'
import { Head } from '../index'

const copyrightYear: Number = 2021;

export default function SignLayout({ children, noneSearch = false, home = false }) {
  return (
    <Container>

      <Head/>

      <Header>
        <h1>
          <Link href='/'>
            <a>
              <img src="/img/logo/logo.svg" alt="Hansel"/>
            </a>
          </Link>
        </h1>
      </Header>

      <Main>
        <SignButtonRoot>
          {children}
        </SignButtonRoot>
      </Main>

      <Footer>
        <nav>
          <li>
            <Link href='/'>
              <a>プライバシーポリシー</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>利用規約</a>
            </Link>
          </li>
        </nav>
        {/* <Copyright>
          <img src="/img/logo/logo.svg" alt=""/>
          © { copyrightYear } Hansel
        </Copyright> */}
      </Footer>

    </Container>
  )
}

const Container = styled.div`
  background-color: #f7f7f7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  width: 100%;
  height: 150px;
  text-align: center;
  & a {
    display: inline-block;
  }
  & img {
    margin-top: 70px;
    height: 40px;
  }
`;

const Main = styled.main`
  flex: 1;
  margin: 20px;
  margin-top: 70px;
`;

const SignButtonRoot = styled.div`
  background-color: #fff;
  text-align: center;
  /* border: #979797 solid 1px; */
  border-radius: 5px;
  padding: 50px;
  margin: auto;
  width: 30%;
`;

const Footer = styled.footer`
  margin: auto;
  width: 50%;
  height: 70px;
  align-items: center;
  & nav {
    display: flex;
    flex-wrap: wrap;
  }
  & li {
    margin: auto;
    list-style: none;
  }
  & a {
    font-size: 12px;
    color: #88888b;
  }
`;

const Copyright = styled.div`
  margin-top: 40px;
  text-align: center;
  & img {
  margin: auto;
    height: 30px;
  }
`;