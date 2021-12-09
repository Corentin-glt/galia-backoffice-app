import { gql, useQuery } from '@apollo/client';
import { useFormContext } from 'react-hook-form';

import Spinner from '../Spinner';
import { GetWineyardsFromSelect } from './__generated__/GetWineyardsFromSelect';

const GET_WINEYARDS = gql`
  query GetWineyardsFromSelect {
    wineyardsConnection(findWineyardsInput: {}) {
      items(paginationInput: {}) {
        id
        name
      }
    }
  }
`;

interface WineyardsSelectProps {
  className?: string;
  name: string;
  required?: boolean;
}

function WineyardsSelect(props: WineyardsSelectProps) {
  const { name, required = false, ...rest } = props;
  const { register } = useFormContext();
  const { data, loading } = useQuery<GetWineyardsFromSelect>(GET_WINEYARDS);

  if (loading) {
    return <Spinner text="loading wineyards ..." />;
  }
  //TODO: error span
  // if (!data?.authorsConnection || error) {
  //   return <SpanError text={error?.message || ''} />;
  // }

  const wineyards = data?.wineyardsConnection.items || [];

  return (
    <select {...register(name, { required })} {...rest}>
      {wineyards.map((wineyard) => (
        <option key={wineyard.id} value={wineyard.id}>
          {wineyard.name}
        </option>
      ))}
    </select>
  );
}

export default WineyardsSelect;
