import styled from 'styled-components';

export default styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  height: 60px;
  background-color: RGB(200, 200, 200);
  padding-left: 12em;

  @media screen and (max-width: 600px) {
    padding-left: 0;
    justify-content: center;
  }
`;
