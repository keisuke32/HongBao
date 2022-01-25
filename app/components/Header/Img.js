import styled from 'styled-components';

import NormalImg from 'components/Img';

const Img = styled(NormalImg)`
  width: 100%;
  margin: 0 auto;
  display: block;
  @media only screen and (max-width: 768px) {
    width: 50%;
  }
`;

export default Img;
