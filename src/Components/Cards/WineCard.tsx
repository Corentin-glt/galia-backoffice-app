import { gql } from '@apollo/client';
import { PencilIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

import UploadWinePictureInput from '../Inputs/UploadWinePictureInput';
import Span, { Font, Size } from '../Span';
import { WineCardFragment } from './__generated__/WineCardFragment';

interface WineCardProps {
  wine: WineCardFragment;
}

function WineCard(props: WineCardProps) {
  const { wine } = props;
  const navigate = useNavigate();
  const redirect = () => navigate(`/wines/${wine.id}`);

  return (
    <div className="bg-white flex flex-col shadow-lg rounded-md p-2 space-y-1 relative">
      <div className="flex-1 flex flex-nowrap">
        <div className="flex-1">
          {wine.picture ? (
            <img
              className="object-scale-down h-60 w-full"
              src={wine.picture.signedUrl || ''}
              alt={wine.picture.id}
            />
          ) : (
            <UploadWinePictureInput wineId={wine.id} />
          )}
        </div>
        <div className="flex-1 flex flex-col px-2">
          <Span text={wine.name} font={Font.BOLD} />
          <Span text={wine.millenisme.toString()} />
          <div>
            <Span text="Grapes: " size={Size.SMALL} />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-2">
              {wine.grapes.map((grape) => (
                <div
                  key={grape.id}
                  className="text-center rounded-md bg-blueGray-600"
                >
                  <Span
                    text={`#${grape.variety}`}
                    size={Size.SMALL}
                    font={Font.LIGHT}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-2 flex flex-col p-2">
        <Span text={wine.wineyard.name} font={Font.BOLD} />
        <Span
          text={`${
            wine.description.length > 30
              ? wine.description.slice(0, 30) + '...'
              : wine.description
          }`}
          font={Font.LIGHT}
        />
      </div>
      <div
        className="absolute top-0 right-0 p-1 cursor-pointer"
        onClick={redirect}
      >
        <PencilIcon className="w-4 h-4 text-blueGray-600" />
      </div>
    </div>
  );
}

WineCard.fragment = gql`
  fragment WineCardFragment on Wine {
    id
    description
    grapes {
      id
      variety
    }
    millenisme
    name
    picture {
      id
      signedUrl
      key
    }
    wineyard {
      id
      name
    }
  }
`;

export default WineCard;
