import styled from 'styled-components'
import { Materialicon } from '../index'

const CloseAlert = () => {
  
}

export default function Alert({ severity, children, title, close: boolean = true }) {
  return (
    <AlertRoot>

      <AlertIcon>
        { severity === 'error' ? (
          <Materialicon className = {'outlined'} name = {'highlight_off'} />
        ) : severity === 'warning' ? (
          <Materialicon className = {'outlined'} name = {'report_problem'} />
        ) : severity === 'info' ? (
          <Materialicon className = {'outlined'} name = {'info'} />
        ) : severity === 'success' ? (
          <Materialicon className = {'outlined'} name = {'task_alt'} />
        ) : (
          <div></div>
        )}
      </AlertIcon>

      <div>
        { title && (
          <AlertTitle>
            { title }
          </AlertTitle>
        )}

        { children }
      </div>

      { close && (
        <CloseButton onClick = {CloseAlert}>
          <Materialicon className = {'outlined'} name = {'highlight_off'} />
        </CloseButton>
      )}

    </AlertRoot>
  )
}

const AlertRoot = styled.div`
  display: flex;
  color: #1e4620;
  background-color: #edf7ed;
  padding: 20px;
  border-radius: 5px;
  & > * {
  }
`;

const AlertIcon = styled.div`
  font-size: 30px;
  margin-right: 50px;
  & > * {
    font-size: 40px;
  }
`;

const AlertTitle = styled.div`
  font-weight: bold;
`;

const CloseButton = styled.a`
  margin-left: auto;
  color: gray;
  cursor: pointer;
  & > * {
    font-size: 30px;
  }
`;