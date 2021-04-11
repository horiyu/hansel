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
        {/* <ul>
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
        </ul> */}
      </HeaderLeft>
      <HeaderRight>

        { checkAuth ? (
          <>
            {/* <p>{ checkAuth }</p> */}
            <Link href='/news'>
              <a>
                <Materialicon className = 'outlined' name = 'notifications'/>
                <NotificationsActive>1</NotificationsActive>
              </a>
            </Link>
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
  & * {
    color: #000;
  }
`;

const Logo = styled.h1`
  margin: 0;
  margin-right: 30px;
  margin-left: 50px;
  & img {
    height: 30px;
    width: auto;
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
  & a {
    &:hover {
      text-decoration: none;
    }
  }
  & span {
    font-size: 30px;
  }
`;

const NotificationsActive = styled.div`
  position: absolute;
  top: 10px;
  right: 80px;
  height: 23px;
  width: 23px;
  color: #fff;
  background-color: #c33;
  border: solid 3px #fff;
  border-radius: 50%;
  z-index: 10;
`;