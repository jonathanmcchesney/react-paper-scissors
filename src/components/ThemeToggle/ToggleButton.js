

import styled from 'styled-components';

export const ToggleButton = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  outline: none;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    &:first-child {
      transform: ${({ darkTheme }) => darkTheme ? 'translateY(-5rem)' : 'translateY(0)'};
    }
    &:nth-child(2) {
      transform: ${({ darkTheme }) => darkTheme ? 'translateY(0)' : 'translateY(5rem)'};
    }
    
  }
`;