import { gql, useQuery } from '@apollo/client';
import { useFormContext } from 'react-hook-form';

import Spinner from '../Spinner';
import { GetWineyardsFromSelect } from './__generated__/GetWineyardsFromSelect';

const GET_AUTHORS = gql`
  query GetWineyardsFromSelect {
    wineyardsConnection(findWineyardsInput: {}) {
      items {
        id
        name
      }
    }
  }
`;

interface WineyardsSelectProps {
  className?: string;
  name: string;
}

function WineyardsSelect(props: WineyardsSelectProps) {
  const { name, ...rest } = props;
  const { register } = useFormContext();
  const { data, loading } = useQuery<GetWineyardsFromSelect>(GET_AUTHORS);

  if (loading) {
    return <Spinner text="loading wineyards" />;
  }
  //TODO: error span
  // if (!data?.authorsConnection || error) {
  //   return <SpanError text={error?.message || ''} />;
  // }

  const wineyards = data?.wineyardsConnection.items || [];

  return (
    <select {...register(name)} {...rest}>
      {wineyards.map((wineyard) => (
        <option key={wineyard.id} value={wineyard.id}>
          {wineyard.name}
        </option>
      ))}
    </select>
  );
}

export default WineyardsSelect;
