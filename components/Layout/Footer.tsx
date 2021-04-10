import styled from 'styled-components'
import { ListsProps, Sitemaps } from './Sitemaps'

const listAbout: ListsProps[] = [
  { id: 100, link: '/about', name: "ヘンゼルとは" },
  { id: 200, link: '/news', name: "おしらせ" },
  { id: 300, link: '/about', name: "ヘンゼルをはじめる" },
  { id: 400, link: '/about', name: "ヘンゼルを応援する" },
  { id: 500, link: '/', name: "運営組織" },
];

const listHelp: ListsProps[] = [
  { id: 100, link: '/help', name: "ヘルプ一覧" },
  { id: 200, link: '/about', name: "ご利用ガイド" },
  { id: 300, link: '/about', name: "よくあるご質問" },
  { id: 400, link: '/about', name: "お問い合わせ" },
  { id: 500, link: '/', name: "引用元の方" },
];

const listPrivacy: ListsProps[] = [
  { id: 100, link: '/about', name: "プライバシーポリシー" },
  { id: 200, link: '/about', name: "利用規約" },
  { id: 300, link: '/about', name: "セキュリティ" },
];

const copyrightYear: Number = 2021;

export default function Footer () {
  return (
    <FooterRoot>
      <FooterNav>
        <Sitemaps
          title = {"ヘンゼルについて"} lists = { listAbout }
        />
        <Sitemaps
          title = {"ヘルプ"} lists = { listHelp }
        />
        <Sitemaps
          title = {"プライバシーと利用規約"} lists = { listPrivacy }
        />
      </FooterNav>
      <Copyright>
        <img src="/img/logo/logo.svg" alt=""/>
        © { copyrightYear } Hansel
      </Copyright>
    </FooterRoot>
  )
}

const FooterRoot = styled.footer`
  font-size: 14px;
  background-color: #f5f5f5;
  padding: clamp(70px, 10%, 300px);
  padding-top: 20px;
  padding-bottom: 50px;
  & h2 {
    font-size: 14px;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & ul {
    padding: 0;
  }
  & li {
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

// const Button = styled.button<{primary: boolean}>`
//   color: ${({primary}) => primary ? 'skyblue' };
// `