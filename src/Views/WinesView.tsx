import { gql, useQuery } from '@apollo/client';

import { GetWines, GetWinesVariables } from './__generated__/GetWines';

const GET_WINES = gql`
  query GetWines($findWinesInput: FindWinesInput!) {
    winesConnection(findWinesInput: $findWinesInput) {
      count
      items {
        id
      }
    }
  }
`;

function WinesView() {
  const { data } = useQuery<GetWines, GetWinesVariables>(GET_WINES, {
    variables: { findWinesInput: { pagination: { limit: 20 } } },
  });
  const wines = data?.winesConnection.items || [];
  const count = data?.winesConnection.count || 0;

  return (
    <div>
      {wines.length > 0 &&
        wines.map((wine) => {
          return <div key={wine.id}>{wine.id}</div>;
        })}
    </div>
  );
}

export default WinesView;
