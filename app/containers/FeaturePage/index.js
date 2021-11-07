/*
 * FeaturePage
 *
 * List all the features
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import OompaDetail from 'components/OompaDetail';
import useLocalStorageState from 'use-local-storage-state';

export default function FeaturePage({ match }) {
  const {
    params: { id },
  } = match;
  const [oompaData, setOompaData] = useLocalStorageState(
    `oompasDetail-${id}`,
    localStorage.getItem(`oompasDetail-${id}`) || {},
  );

  const [oompaDataChecked, setOompaDataChecked] = useState(false);

  function isDateBeforeToday(date) {
    if (!date) return true;
    return new Date(date) < new Date(new Date().toDateString());
  }
  const mainUrl =
    'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/';

  const fetchData = async () => {
    const response = await fetch(`${mainUrl}${id}`);
    const data = await response.json();
    setOompaDataChecked(true);
    setOompaData({ ...data, createdAt: new Date(new Date()).toDateString() });
  };

  useEffect(() => {
    if (
      !Object.keys(oompaData).length ||
      isDateBeforeToday(oompaData.createdAt)
    ) {
      fetchData();
    } else {
      setOompaDataChecked(true);
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>Detail Page</title>
        <meta
          name="description"
          content="Detail page of React.js Boilerplate application"
        />
      </Helmet>
      {oompaDataChecked && <OompaDetail {...oompaData} />}
    </div>
  );
}

FeaturePage.propTypes = {
  match: PropTypes.any,
};
