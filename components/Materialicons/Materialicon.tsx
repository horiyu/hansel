import styled from 'styled-components'

export default function Materialicon({ className, name }) {
  return (
    <MaterialiconRoot className={"material-icons-" + className + " " + "material-icons"} >

      { name }

    </MaterialiconRoot>
  )
}

const MaterialiconRoot = styled.span`
  /* font-size: 40px; */
`;
