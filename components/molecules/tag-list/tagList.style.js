import styled from 'styled-components';

export const List = styled.div`
  display: inline-flex;
  overflow-y: auto;
  flex-wrap: wrap;

  ${props => props.customStyle}
`;

export default List;
