import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  padding: 30px 0;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

export const HeaderContent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
