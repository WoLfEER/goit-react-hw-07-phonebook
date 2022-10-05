import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(last-child) {
    margin-bottom: 20px;
  }

  span {
    margin-left: 10px;
  }

  button {
    border-radius: 4px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-style: none;
    color: #ffffff;
    background: linear-gradient(to right, #88f2f2, #056cf2, #0420bf);

    &:hover,
    &:focus {
      transform: scale(1.1);
      transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`;
