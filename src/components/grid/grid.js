import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: ${({ margins }) => (margins && margins.top ? margins.top : 0)}px;
  margin-bottom: ${({ margins }) =>
    margins && margins.bottom ? margins.bottom : 0}px;
  margin-left: ${({ margins }) =>
    margins && margins.left ? margins.left : 0}px;
  margin-right: ${({ margins }) =>
    margins && margins.right ? margins.right : 0}px;
`;

const Column = styled.div`
  width: ${({ size }) =>
    size === 2 ? '50%' : size === 3 ? '33.333%' : size === 4 ? '25%' : '100%'};
  margin-right: ${({ margin }) =>
    margin && margin.right ? margin.right : '10'}px;
  &:last-child {
    margin-right: 0;
  }
`;

export default Grid;
export { Column };
