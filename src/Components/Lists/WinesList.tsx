import { gql, useQuery } from '@apollo/client';
import { useMemo } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import WineCard from '../Cards/WineCard';
import Span, { Font } from '../Span';
import Spinner from '../Spinner';
import { GetWines, GetWinesVariables } from './__generated__/GetWines';

const GET_WINES = gql`
  query GetWines($pagination: PaginationInput!) {
    winesConnection(findWinesInput: {}) {
      count
      items(paginationInput: $pagination) {
        id
        ...WineCardFragment
      }
    }
  }
  ${WineCard.fragment}
`;

function WinesList() {
  const { data, error, loading, fetchMore } = useQuery<
    GetWines,
    GetWinesVariables
  >(GET_WINES, {
    variables: { pagination: { limit: 20, offset: 0 } },
  });

  const wines = useMemo(() => data?.winesConnection.items ?? [], [data]);
  const count = data?.winesConnection.count ?? 0;

  if (loading) {
    return <Spinner text="loading wines ..." />;
  }
  if (error) {
    return null;
  }

  return (
    <div>
      <div className="py-2">
        <Span text={`Total: ${count}`} active font={Font.BOLD} />
      </div>
      <div className="flex flex-col space-y-2">
        <div className="grid xl:grid-cols-5 grid-cols-3 gap-4">
          {wines.length > 0 &&
            wines.map((wine) => {
              return <WineCard key={wine.id} wine={wine} />;
            })}
        </div>
        {wines.length < count && (
          <VisibilitySensor
            partialVisibility
            onChange={(isVisible) => {
              if (isVisible)
                fetchMore({
                  variables: {
                    pagination: { offset: wines.length },
                  },
                });
            }}
          >
            <Spinner />
          </VisibilitySensor>
        )}
      </div>
    </div>
  );
}

export default WinesList;
