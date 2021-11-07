import styled from 'styled-components';

const OompaWrapper = styled.div`
  width: 73vw;
  margin: 12px auto;
  display: flex;
  min-height: 100%;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

export default OompaWrapper;
