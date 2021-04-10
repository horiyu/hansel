import styled from 'styled-components'
import Link from 'next/link'

export default function Bookmark({ title, description, favicon, url, img }) {
  return (
    <BookmarkRoot>
      <Link href={ url }>
        <a target='_blank' rel='noopener noreferrer'>
          <div>

            <BookmarkLeft>
              <BookmarkTitle>
                { title }
              </BookmarkTitle>

              <BookmarkDescription>
                { description }
              </BookmarkDescription>

              <BookmarkURLRoot>
                <BookmarkFaviconRoot>
                  <BookmarkFavicon src={ favicon } alt=""/>
                </BookmarkFaviconRoot>
                <BookmarkURL>
                  { url }
                </BookmarkURL>
              </BookmarkURLRoot>
            </BookmarkLeft>

            <BookmarkRight>
              <BookmarkImg src={ img } alt={ title }/>
            </BookmarkRight>

          </div>
        </a>
      </Link>
    </BookmarkRoot>
  )
}

const BookmarkRoot = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  /* border: #979797 solid 1px; */
  /* border-radius: 5px; */
  &:hover {
    opacity: .5;
  }
  & * {
    color: #000;
  }
  & *:hover {
    text-decoration: none;
  }
  & a > div {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
  }
`;

const BookmarkTitle = styled.h1`
  font-size: 20px;
`;

const BookmarkDescription = styled.p`
  font-size: 15px;
`;

const BookmarkURLRoot = styled.div`
  display: flex;
`;

const BookmarkFaviconRoot = styled.div`

`;

const BookmarkFavicon = styled.img`
  height: 16px;
  width: 16px;
  margin-right: 10px;
`;

const BookmarkURL = styled.a`
  color: gray;
  font-size: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const BookmarkImg = styled.img`
  height: 150px;
  min-width: 150px;
  max-width: 150px;
  object-fit: cover;
  margin-left: auto;
`;

const BookmarkLeft = styled.div`
  -webkit-flex-grow: 1;
  flex-grow: 1;
  padding: 30px;
`;

const BookmarkRight = styled.div`
  -webkit-flex-grow: 1;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;

`;