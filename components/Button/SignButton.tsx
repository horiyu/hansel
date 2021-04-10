import styled from 'styled-components'

export default function SignButton({ children, onClick }) {
  return (
    <ButtonRoot onClick = { onClick }>

      { children }

    </ButtonRoot>
  )
}

const ButtonRoot = styled.a`
  display: block;
  padding: 10px 20px 10px 50px;
  cursor: pointer;
  margin: 30px 0 30px;
  background: #fff url(/img/common/google.svg) no-repeat 3px top;
  border: #979797 solid 1px;
  border-radius: 5px;
  color: #333;
  position: relative;
  &:hover {
    text-decoration: none;
  }
`;