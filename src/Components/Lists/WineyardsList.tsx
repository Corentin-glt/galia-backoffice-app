import { gql, useQuery } from '@apollo/client';
import { useMemo } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import WineyardCard from '../Cards/WineyardCard';
import Span, { Font } from '../Span';
import Spinner from '../Spinner';
import {
  GetWineyards,
  GetWineyardsVariables,
} from './__generated__/GetWineyards';

const GET_WINEYARDS = gql`
  query GetWineyards($pagination: PaginationInput!) {
    wineyardsConnection(findWineyardsInput: {}) {
      count
      items(paginationInput: $pagination) {
        id
        ...WineyardCardFragment
      }
    }
  }
  ${WineyardCard.fragment}
`;

function WineyardsList() {
  const { data, error, loading, fetchMore } = useQuery<
    GetWineyards,
    GetWineyardsVariables
  >(GET_WINEYARDS, {
    variables: {
      pagination: {
        limit: 20,
        offset: 0,
      },
    },
  });

  const wineyards = useMemo(
    () => data?.wineyardsConnection.items ?? [],
    [data],
  );
  const count = data?.wineyardsConnection.count ?? 0;

  if (loading) {
    return <Spinner text="loading wineyards ..." />;
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
          {wineyards.length > 0 &&
            wineyards.map((wineyard) => {
              return <WineyardCard key={wineyard.id} wineyard={wineyard} />;
            })}
        </div>
        {wineyards.length < count && (
          <VisibilitySensor
            partialVisibility
            onChange={(isVisible) => {
              if (isVisible)
                fetchMore({
                  variables: {
                    pagination: { offset: wineyards.length },
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

export default WineyardsList;
