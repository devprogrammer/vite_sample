import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

export const MainContent = styled.div`
  display: flex;
  // flex: 1;
  flex-direction: row;
  background-color: ${({ theme }) => theme.color.bg[1]};
`;