import { gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import Button from '../Buttons/Button';
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
            <div className="flex flex-wrap space-x-1 justify-start content-start">
              {wine.grapes.map((grape) => (
                <div
                  key={grape.id}
                  className="text-left p-1 h-8 rounded-md bg-blueGray-600"
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
        <Span text={wine.description} font={Font.LIGHT} />
      </div>
      <div className="absolute bottom-0 right-0">
        <Button text="Edit" onClick={redirect} disableHover />
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
