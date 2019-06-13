import React from 'components/Machine/Tracks/Audio/Accessory/node_modules/react';
import Slider from '../../Slider';
import MachineContext from 'components/Machine/Tracks/Audio/Accessory/node_modules/context/MachineContext';

const Accessory = () => {
  const { masterVolume, isPlaying } = useContext(MachineContext);
  const [volume, setVolume] = useState(0.5);

  const changeVolume = value => {
    setVolume(value);
  };

  return <Slider changeVolume={changeVolume} />;
};

export default Accessory;
