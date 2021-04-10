import styled from 'styled-components'
import Link from 'next/link'
import { AccountButton, Materialicon } from '../index'
import checkAuth from '../../src/helpers/checkAuth'

export default function Header () {
  return (
    <HeaderRoot>
      <Logo>
        <Link href='/'>
          <a>
            <img src="/img/logo/logo.svg" alt="Hansel"/>
          </a>
        </Link>
      </Logo>
      <HeaderLeft>
        <ul>
          <li>
            <Link href='/'>
              <a>ヘンゼルとは</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>ヘンゼルをはじめる</a>
            </Link>
          </li>
        </ul>
      </HeaderLeft>
      <HeaderRight>

        { checkAuth ? (
          <>
            {/* <p>{ checkAuth }</p> */}
            <Materialicon className = 'outlined' name = 'notifications' />
            {/* <Materialicon className = 'outlined' name = 'notifications_active' /> */}
            <AccountButton/>
          </>
        ) : (
          <>
            <Link href='/signup'>
              <a>
                新規登録
              </a>
            </Link>
            <Link href='/signup'>
              <a>
                ログイン
              </a>
            </Link>
          </>
        )}

      </HeaderRight>
    </HeaderRoot>
  )
}

const HeaderRoot = styled.header`
  display: flex;
  width: 100%;
  height: 70px;
  box-shadow: rgb(0 0 0 / 18%) 0px 2px 4px;
  align-items: center;
`;

const Logo = styled.h1`
  margin: 0;
  margin-right: 30px;
  margin-left: 50px;
  & img {
    height: 35px;
  }
`;

const HeaderLeft = styled.nav`
  margin: 0;
  & ul {
    display: flex;
  }
  & li {
    list-style: none;
    padding-right: 30px;
  }
`;

const HeaderRight = styled.nav`
  display: flex;
  margin: 0 50px 0 auto;
  & > * {
    margin-left: 40px;
  }
`;