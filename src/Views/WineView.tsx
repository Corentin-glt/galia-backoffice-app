import { gql, useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import Button from '../Components/Buttons/Button';
import RemoveWineButton from '../Components/Buttons/RemoveWineButton';
import WineCard from '../Components/Cards/WineCard';
import Form from '../Components/Forms/Form';
import { Input } from '../Components/Inputs/Input';
import { TextArea } from '../Components/Inputs/TextAreaInput';
import GrapesMultiSelect from '../Components/Selects/GrapesMultiSelect';
import WineyardsSelect from '../Components/Selects/WineyardsSelect';
import Span, { Size } from '../Components/Span';
import Spinner from '../Components/Spinner';
import { GetWine, GetWineVariables } from './__generated__/GetWine';
import { UpdateWine, UpdateWineVariables } from './__generated__/UpdateWine';

const GET_WINE = gql`
  query GetWine($id: String!) {
    wine(id: $id) {
      id
      ...WineCardFragment
    }
  }
  ${WineCard.fragment}
`;

const UPDATE_WINE = gql`
  mutation UpdateWine($input: UpdateWineInput!) {
    updateWine(updateWineInput: $input) {
      id
      ...WineCardFragment
    }
  }
  ${WineCard.fragment}
`;

const schema = yup.object().shape({
  description: yup.string().required(),
  grapeIds: yup.array().of(yup.string()).required(),
  millenisme: yup.number().required(),
  name: yup.string().required(),
  wineyardId: yup.string().required(),
});

function WineView() {
  const { wineId } = useParams<string>();
  const {
    data,
    loading: loadingWine,
    error,
  } = useQuery<GetWine, GetWineVariables>(GET_WINE, {
    variables: { id: wineId || '' },
  });
  const [updateWine, { loading }] = useMutation<
    UpdateWine,
    UpdateWineVariables
  >(UPDATE_WINE, {
    onCompleted() {
      toast.success(`Wine has been updated`);
    },
  });

  if (loadingWine) {
    return <Spinner />;
  }

  if (error || !data) {
    return <Span text="Something wrong happened" />;
  }

  const wine = data.wine;

  return (
    <div>
      <Form
        defaultValues={{
          description: wine.description,
          grapeIds: wine.grapes.map((id) => id),
          millenisme: wine.millenisme,
          name: wine.name,
          wineyardId: wine.wineyard.id,
        }}
        schema={schema}
        onSubmit={(value) => {
          return updateWine({
            variables: {
              input: {
                id: wine.id,
                description: value.description,
                grapeIds: value.grapeIds,
                millenisme: value.millenisme,
                name: value.name,
                wineyardId: value.wineyardId,
              },
            },
          });
        }}
        className="flex flex-col space-y-2"
      >
        <div className="flex space-x-2">
          <div>
            <Span text="Name:" active size={Size.SMALL} />
            <Input type="text" name="name" required />
          </div>
          <div>
            <Span text="Millenisme:" active size={Size.SMALL} />
            <Input type="number" name="millenisme" required />
          </div>
        </div>
        <div>
          <Span text="Description:" active size={Size.SMALL} />
          <TextArea name="description" />
        </div>
        <div>
          <Span text="Grapes:" active size={Size.SMALL} />
          <GrapesMultiSelect
            className="form-multiselect"
            name="grapeIds"
            defaultValue={wine.grapes.map((grape) => ({
              value: grape.id,
              label: grape.variety,
            }))}
          />
        </div>
        <div>
          <Span text="Domaine:" active size={Size.SMALL} />
          <WineyardsSelect name="wineyardId" required />
        </div>
        <div>
          <div className="mt-2 flex justify-between">
            <RemoveWineButton id={wine.id} />
            <Button loading={loading} text="Save" type="submit" />
          </div>
        </div>
      </Form>
    </div>
  );
}

export default WineView;
