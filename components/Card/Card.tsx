import styled from 'styled-components'
import Link from 'next/link'

export default function Card({ title, description, favicon, url, img }) {
  return (
    <CardRoot>
      <Link href={ url }>
        <a target='_blank' rel='noopener noreferrer'>
          <div>

            <CardLeft>
              <CardTitle>
                { title }
              </CardTitle>

              <CardDescription>
                { description }
              </CardDescription>

              <CardURLRoot>
                <CardFaviconRoot>
                  <CardFavicon src={ favicon } alt=""/>
                </CardFaviconRoot>
                <CardURL>
                  { url }
                </CardURL>
              </CardURLRoot>
            </CardLeft>

            <CardRight>
              <CardImg src={ img } alt={ title }/>
            </CardRight>

          </div>
        </a>
      </Link>
    </CardRoot>
  )
}

const CardRoot = styled.div`
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

const CardTitle = styled.h1`
  font-size: 20px;
`;

const CardDescription = styled.p`
  font-size: 15px;
`;

const CardURLRoot = styled.div`
  display: flex;
`;

const CardFaviconRoot = styled.div`

`;

const CardFavicon = styled.img`
  height: 16px;
  width: 16px;
  margin-right: 10px;
`;

const CardURL = styled.a`
  color: gray;
  font-size: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const CardImg = styled.img`
  height: 150px;
  min-width: 150px;
  max-width: 150px;
  object-fit: cover;
  margin-left: auto;
`;

const CardLeft = styled.div`
  -webkit-flex-grow: 1;
  flex-grow: 1;
  padding: 30px;
`;

const CardRight = styled.div`
  -webkit-flex-grow: 1;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;

`;