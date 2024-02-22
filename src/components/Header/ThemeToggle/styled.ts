import styled from 'styled-components';

export const ToggleWrapper = styled.button`
  width: 50px;
  height: 28px;
  border: 2px solid;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: left;
  position: relative;
  cursor: pointer;
  outline: none;

  &:hover {
    box-shadow: 0 0 10px 5px rgba(26, 255, 0, 0.2);
  }
`;

export const Toggle = styled.div`
  width: 27px;
  height: 27px;
  border: 2px solid;
  border-radius: 50%;
  position: absolute;
  left: -1px;
  transition: 0.3s ease;
`;
