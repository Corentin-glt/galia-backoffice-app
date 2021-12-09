import { gql, useQuery } from '@apollo/client';

import Spinner from '../Spinner';
import { GetGrapesFromSelect } from './__generated__/GetGrapesFromSelect';
import MultiSelect, { MultiSelectProps } from './MultiSelect';

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

interface GrapesMultiSelectProps extends Omit<MultiSelectProps, 'options'> {
  className?: string;
  name: string;
  required?: boolean;
}

function GrapesMultiSelect(props: GrapesMultiSelectProps) {
  const { name, required = false, ...rest } = props;
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
    <MultiSelect
      {...rest}
      name={name}
      required={required}
      options={grapes.map((grape) => ({
        value: grape.id,
        label: grape.variety,
      }))}
    />
  );
}

export default GrapesMultiSelect;
