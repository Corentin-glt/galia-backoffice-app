import { gql, useMutation } from '@apollo/client';
import { CloudUploadIcon } from '@heroicons/react/solid';
import Span, { Font } from '../Span';

import {
  UploadWinePicture,
  UploadWinePictureVariables,
} from './__generated__/UploadWinePicture';

const UPLOAD_WINE_PICTURE = gql`
  mutation UploadWinePicture($file: Upload!, $uploadWinePictureId: String!) {
    uploadWinePicture(file: $file, id: $uploadWinePictureId) {
      id
    }
  }
`;

interface UploadWinePictureInputProps {
  wineId: string;
}

function UploadWinePictureInput(props: UploadWinePictureInputProps) {
  const { wineId } = props;
  const [upload, { loading, error }] = useMutation<
    UploadWinePicture,
    UploadWinePictureVariables
  >(UPLOAD_WINE_PICTURE);

  //TODO: if(loading){}
  //TODO: if(error){}

  return (
    <>
      <label
        className="
            flex flex-col
            p-2
            rounded-md 
            border border-blueGray-600 border-dotted 
            w-full 
            h-full 
            justify-center 
            content-center 
            cursor-pointer
            items-center text-center"
      >
        <CloudUploadIcon className="h-4 w-4 sm:w-8 sm:h-8 text-blueGray-600" />
        <Span text={'Upload image'} active font={Font.LIGHT} />
        <input
          type="file"
          className="hidden"
          onChange={({ target: { validity, files } }) => {
            if (validity.valid && files) {
              return upload({
                variables: { file: files[0], uploadWinePictureId: wineId },
              });
            }
          }}
        />
      </label>
    </>
  );
}

export default UploadWinePictureInput;
