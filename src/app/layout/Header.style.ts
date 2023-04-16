import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.color.bg[1]};
//   border-bottom: 1px solid ${({ theme }) => theme.color.border[1]};
`;
