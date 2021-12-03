import CreateWineButton from '../Components/Buttons/CreateWineButton';
import WinesList from '../Components/Lists/WinesList';

function WinesView() {
  return (
    <div className="space-y-2">
      <CreateWineButton />
      <WinesList />
    </div>
  );
}

export default WinesView;
