import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Navigate } from 'react-router-dom';

// me is a query from the schema > Query > me
const IS_LOGGED_IN_QUERY = gql`
  {
    me {
      id
    }
  }
`;

interface Props {
  children?: React.ReactNode;
}

export default function IsAuthenticated({ children }: Props) {
  const { data, loading, error } = useQuery(IS_LOGGED_IN_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data.me) {
    return <Navigate to={{ pathname: '/' }} />;
  }

  return <>{children}</>;
}
