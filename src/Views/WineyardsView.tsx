import CreateWineyardButton from '../Components/Buttons/CreateWineyardButton';
import GetWineyards from '../Components/Lists/WineyardsList';

function WineyardsView() {
  return (
    <div className="space-y-4">
      <CreateWineyardButton />
      <GetWineyards />
    </div>
  );
}

export default WineyardsView;
