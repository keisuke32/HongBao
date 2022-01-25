import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  margin: 1em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  color: white;
  font-size: 22px;
  padding-bottom: 5px;
  &.active {
    border-bottom: 5px solid #FFDC9D;
  }
`;
