/**
 *
 * Search.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from '../../components/Img';

const Input = styled.input`
  border: none;
  border-right: 1px solid gray;
  margin-right: 8px;
  width: 160px;
  background-color: transparent;
`;

const Wrap = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  width: fit-content;
  padding: 8px;
  display: flex;
  align-items: center;
  margin: 1.5em 0;
`;

function Search(props) {
  //   return <Input value={props.search} onChange={props.onChange} />;
  return (
    <Wrap>
      <Input
        placeholder="Search"
        value={props.search}
        onChange={props.onChange}
      />
      <Img
        src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/ic_search.png"
        alt="search-icon"
        height="24px"
        width="24px"
      />
    </Wrap>
  );
}

// We require the use of src and alt, only enforced by react in dev mode
Search.propTypes = {
  search: PropTypes.string,
  onChange: PropTypes.func,
};

export default Search;
