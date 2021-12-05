import { gql, useQuery } from '@apollo/client';
import { useFormContext } from 'react-hook-form';

import Spinner from '../Spinner';
import { GetGrapesFromSelect } from './__generated__/GetGrapesFromSelect';

const GET_GRAPES = gql`
  query GetGrapesFromSelect {
    grapesConnection(findGrapesInput: {}) {
      items {
        id
        variety
      }
    }
  }
`;

interface GrapesMultiSelectProps {
  className?: string;
  name: string;
  required?: boolean;
}

function GrapesMultiSelect(props: GrapesMultiSelectProps) {
  const { name, required = false, ...rest } = props;
  const { register } = useFormContext();
  const { data, loading } = useQuery<GetGrapesFromSelect>(GET_GRAPES);

  if (loading) {
    return <Spinner text="loading grapes" />;
  }
  //TODO: error span
  // if (!data?.authorsConnection || error) {
  //   return <SpanError text={error?.message || ''} />;
  // }

  const grapes = data?.grapesConnection.items || [];

  return (
    <select {...register(name, { required })} {...rest} multiple>
      {grapes.map((grape) => (
        <option key={grape.id} value={grape.id}>
          {grape.variety}
        </option>
      ))}
    </select>
  );
}

export default GrapesMultiSelect;
