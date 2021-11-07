import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from '../Img';

const CardWrapper = styled.div`
  width: 21rem;
  margin: 0 auto 24px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
  }
`;

const A = styled.a`
  text-decoration: none;
  color: inherit;
  // &:hover {
  //   color: #6cc0e5;
  // }
`;

const TextWrapper = styled.div`
  width: 21rem;
  margin: 0 auto 24px;
  padding: 8px 8px 0 0;
  display: flex;
  flex-direction: column;
`;

const H3Name = styled.h3`
  margin: 8px 0 0 0;
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

function OompaCard(props) {
  const oompaData = {
    name: `${props.first_name} ${props.last_name}`,
    gender: props.gender === 'M' ? 'Male' : 'Female',
    image: props.image,
    profession: props.profession,
    id: props.id,
  };

  return (
    <A href={`/${oompaData.id}`}>
      <CardWrapper>
        <Img src={oompaData.image} alt={`${oompaData.name}-photo`} />
        <TextWrapper>
          <H3Name>{oompaData.name}</H3Name>
          <PGender>{oompaData.gender}</PGender>
          <PProfession>{oompaData.profession}</PProfession>
        </TextWrapper>
      </CardWrapper>
    </A>
  );
}

export default OompaCard;

OompaCard.propTypes = {
  image: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  gender: PropTypes.string,
  profession: PropTypes.string,
  id: PropTypes.number,
};
