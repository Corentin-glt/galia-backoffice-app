import { gql, useQuery } from '@apollo/client';

import WineCard from '../Cards/WineCard';
import { GetWines, GetWinesVariables } from './__generated__/GetWines';

const GET_WINES = gql`
  query GetWines($findWinesInput: FindWinesInput!) {
    winesConnection(findWinesInput: $findWinesInput) {
      count
      items {
        id
        ...WineCardFragment
      }
    }
  }
  ${WineCard.fragment}
`;

function WinesList() {
  const { data } = useQuery<GetWines, GetWinesVariables>(GET_WINES, {
    variables: { findWinesInput: { pagination: { limit: 20, offset: 0 } } },
  });
  const wines = data?.winesConnection.items || [];
  const count = data?.winesConnection.count || 0;

  return (
    <div className="grid grid-cols-5 gap-4">
      {wines.length > 0 &&
        wines.map((wine) => {
          return <WineCard key={wine.id} wine={wine} />;
        })}
    </div>
  );
}

export default WinesList;
