import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Loading, Header, ReportTile } from '../../components';
// import { REPORT_TILE_DATA } from '../reports';


export const GET_MY_REPORTS = gql`
  query GetMyReports {
    me {
      id
      email
      // reports {
      //   ...ReportTile
      // }
    }
  }
  ${REPORT_TILE_DATA}
`;


const Profile = () => {
  const { 
    data, 
    loading, 
    error 
  } = useQuery(
    GET_MY_REPORTS,
    { fetchPolicy: "network-only" }
  );
  if (loading) return <Loading />;
  if (error) return <p>ERROR: {error.message}</p>;
  if (data === undefined) return <p>ERROR</p>;

  return (
    <Fragment>
      <Header>My Sadhana Reports</Header>
      {/* {data.me && data.me.reports.length ? (
        data.me.reports.map((report) => (
          <ReportTile key={report.id} report={report} />
        ))
      ) : (
        <p>You haven't filled any reports</p>
      )} */}
    </Fragment>
  );
}

export default Profile;