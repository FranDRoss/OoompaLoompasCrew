import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const DetailWrapper = styled.div`
  width: 75vw;
  height: 100%;
  margin: 48px auto 24px;
  padding: 8px;
  display: flex;

  @media screen and (max-width: 800px) {
    justify-items: center;
    flex-direction: column;
    width: 80vw;
    margin: auto;
  }
`;

const MainDataWrapper = styled.div`
  width: 50%;
  padding: 0 8px 0 24px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-top: 24px;
  }
`;

const H3Name = styled.h3`
  margin: 0 0 0 0;
`;

const PGender = styled.p`
  margin: 0;
  font-weight: normal;
  color: gray;
`;

const PProfession = styled.p`
  margin: 0;
  font-style: italic;
  color: gray;
`;

const PDescription = styled.p`
  margin: 24px 0 0 0;
`;

function OompaCard(props) {
  const oompaData = {
    name: `${props.first_name} ${props.last_name}`,
    gender: props.gender === 'M' ? 'Male' : 'Female',
    description: props.description,
    profession: props.profession,
    id: props.id,
  };

  const ImageDiv = styled.div`
    width: 50%;
    max-width: 500px;
    max-height: 36vh;

    background-image: url(${props.image});
    background-size: cover;
    background-position: 50% 30%;
    @media screen and (max-width: 800px) {
      width: 100%;
      height: 30vh;
      margin-top: 16px;
    }
  `;

  return (
    <DetailWrapper>
      <ImageDiv />
      <MainDataWrapper>
        <H3Name>{oompaData.name}</H3Name>
        <PGender>{oompaData.gender}</PGender>
        <PProfession>{oompaData.profession}</PProfession>
        <PDescription>{ReactHtmlParser(oompaData.description)}</PDescription>
      </MainDataWrapper>
    </DetailWrapper>
  );
}

export default OompaCard;

OompaCard.propTypes = {
  image: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  gender: PropTypes.string,
  description: PropTypes.string,
  profession: PropTypes.string,
  id: PropTypes.number,
};
