import { gql } from '@apollo/client';

import Span, { Font, Size } from '../Span';
import { WineCardFragment } from './__generated__/WineCardFragment';

interface WineCardProps {
  wine: WineCardFragment;
}

function WineCard(props: WineCardProps) {
  const { wine } = props;

  return (
    <div className="flex flex-col">
      <div className="flex-1 flex flex-nowrap">
        <div className="flex-1"></div>
        <div className="flex-1 flex flex-col">
          <Span text={wine.name} font={Font.BOLD} />
          <Span text={wine.millenisme.toString()} />
          <div>
            <Span text="Grapes: " size={Size.SMALL} />
            <div className="grid grid-cols-3 gap-4">
              {wine.grapes.map((grape) => (
                <div key={grape.id} className="rounded-md">
                  <Span text={grape.variety} size={Size.SMALL} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-2 flex flex-col">
        <Span text={wine.wineyard.name} font={Font.BOLD} />
        <Span text={wine.description} />
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
      url
      key
    }
    wineyard {
      id
      name
    }
  }
`;

export default WineCard;
