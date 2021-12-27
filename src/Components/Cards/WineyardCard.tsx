import { gql } from '@apollo/client';

import RemoveWineyardButton from '../Buttons/RemoveWineyardButton';
import Span, { Font, Size } from '../Span';
import { WineyardCardFragment } from './__generated__/WineyardCardFragment';

interface WineyardCardProps {
  wineyard: WineyardCardFragment;
}

function WineyardCard(props: WineyardCardProps) {
  const { wineyard } = props;
  return (
    <div className="bg-white flex flex-col shadow-lg rounded-md p-2 space-y-1 relative">
      <div className="flex-1 flex flex-nowrap">
        <div className="flex-1 flex flex-col px-2">
          <Span text={wineyard.name} font={Font.BOLD} />
          <div>
            <Span
              text={`Wines: ${wineyard.wines?.length ?? 0}`}
              size={Size.SMALL}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <RemoveWineyardButton id={wineyard.id} />
      </div>
    </div>
  );
}

WineyardCard.fragment = gql`
  fragment WineyardCardFragment on Wineyard {
    id
    name
    wines {
      id
    }
  }
`;

export default WineyardCard;
