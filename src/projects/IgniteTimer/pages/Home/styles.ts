import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
  height: 80vh;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    max-width: 100vw;
  }
`

export const BaseCountdownButton = styled.button`
  width: 90%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  color: ${(props) => props.theme['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (min-width: 600px) {
    width: 100%;
    max-width: 90vw;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    font-weight: bold;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`
export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
