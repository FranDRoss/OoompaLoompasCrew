/*
 * HomePage
 *
 * This is the were the users will see at the '/' route.
 */

import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import InfiniteScroll from 'react-infinite-scroll-component';

import useLocalStorageState from 'use-local-storage-state';
import styled from 'styled-components';
import MainTitle from './MainTitle';
import Subtitle from './Subtitle';
import CenteredSection from './CenteredSection';
import OompaCard from '../../components/OompaCard';
import OompaWrapper from './oompaWrapper';
import Search from './Search';

const SearchWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 10em;

  @media screen and (max-width: 850px) {
    justify-content: center;
    padding-right: 0;
  }
`;

export function HomePage() {
  const [hasMore, setHasMore] = useState(true);
  const [oompasResults, setOompasResults] = useState([]);

  const [oompasList, setOompasList] = useLocalStorageState(
    'oompasList',
    localStorage.getItem('oompasList') || [],
  );

  const [oompasSearch, setOompasSearch] = useLocalStorageState(
    'oompasSearch',
    localStorage.getItem('oompasSearch') || '',
  );

  const [oompasListPage, setOompasListPage] = useLocalStorageState(
    'oompasListPage',
    localStorage.getItem('oompasListPage') || 0,
  );

  const mainUrl =
    'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=';

  function isDateBeforeToday(date) {
    if (!date) return true;
    return new Date(date) < new Date(new Date().toDateString());
  }

  const [oompasListOutdated, setOompasListOutdated] = useLocalStorageState(
    'oompasListOutdated',
    oompasListOutdated || new Date().setDate(new Date().getDate() + 1),
  );

  const fetchMoreData = async () => {
    if (oompasSearch) return;
    if (isDateBeforeToday(oompasListOutdated) || !oompasList.length) {
      const response = await fetch(`${mainUrl}1`);
      const dataList = await response.json();
      setOompasListPage(1);
      setOompasList([...dataList.results]);
      setOompasListOutdated(new Date().setDate(new Date().getDate() + 1));
      if (!hasMore) setHasMore(true);
    } else if (oompasListPage !== 20) {
      const response = await fetch(`${mainUrl}${Number(oompasListPage) + 1}`);
      const dataList = await response.json();
      setOompasListPage(Number(oompasListPage) + 1);
      setOompasList([...oompasList, ...dataList.results]);
      if (!hasMore) setHasMore(true);
    } else {
      setHasMore(false);
    }
  };

  const handleSearchInput = e => {
    setOompasSearch(
      e.target.value ? e.target.value.toLocaleLowerCase() : e.target.value,
    );
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  const oompaFilter = oompa => {
    if (oompa.last_name.toLocaleLowerCase().startsWith(oompasSearch))
      return oompa;
    if (oompa.first_name.toLocaleLowerCase().startsWith(oompasSearch))
      return oompa;
    if (oompa.profession.toLocaleLowerCase().startsWith(oompasSearch))
      return oompa;
    return false;
  };

  useEffect(() => {
    if (oompasSearch) {
      const filtered = oompasList.filter(oompaFilter);
      setOompasResults(filtered);
      setHasMore(false);
    } else if (oompasListPage !== 20) {
      setHasMore(true);
    }
  }, [oompasSearch]);

  const mainTitle = 'Find your Oompa Loompa';
  const listMessage = 'There are more than 100k';

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta name="Main List" content="On scroll down Oompa Loompas list" />
      </Helmet>
      <div>
        <SearchWrap>
          <Search search={oompasSearch} onChange={handleSearchInput} />
        </SearchWrap>
        <CenteredSection>
          <MainTitle>{mainTitle}</MainTitle>
          <Subtitle>{listMessage}</Subtitle>
        </CenteredSection>
        <InfiniteScroll
          dataLength={oompasList.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <p style={{ textAlign: 'center' }}>
              <b>Finding them...</b>
            </p>
          }
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>That&apos;s all folks!</b>
            </p>
          }
        >
          <OompaWrapper>
            {!oompasSearch &&
              oompasList.map(oompa => (
                <OompaCard
                  key={`Oompa-List-${oompa.first_name}-${oompa.second_name}-${
                    oompa.id
                  }`}
                  {...oompa}
                />
              ))}
            {oompasSearch &&
              oompasResults.map(oompa => (
                <OompaCard
                  key={`Oompa-Results-${oompa.first_name}-${
                    oompa.second_name
                  }-${oompa.id}`}
                  {...oompa}
                />
              ))}
          </OompaWrapper>
        </InfiniteScroll>
      </div>
    </article>
  );
}

HomePage.propTypes = {};

export default HomePage;
