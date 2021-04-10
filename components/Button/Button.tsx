import styled from 'styled-components'

export default function Button({ children, onClick }) {
  return (
    <ButtonRoot onClick = { onClick }>

      { children }

    </ButtonRoot>
  )
}

const ButtonRoot = styled.a`
  color: #000;
  border: solid 1px #000;
  /* padding: 20px; */
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;