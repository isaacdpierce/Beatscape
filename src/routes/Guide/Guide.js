import React from 'react';
import TextBlock from '../../components/themes/TextBlock/TextBlock';
import TrackGuide from './TrackGuide';

import tracksList from '../../context/tracksList';

const Guide = () => {
  return (
    <TextBlock>
      <h4>Getting Started</h4>
      <p>
        First things first - click <strong>PLAY</strong>!
      </p>
      <p>
        The machine will load a default Soundscape when it first loads. To
        change the default Soundscape click the <strong> SOUNDSCAPES </strong>
        button at the bottom of the machine. A drawer will open with all your
        possible journeys.
      </p>

      <h4>Tracks defined</h4>
      <ul style={{ marginBottom: '2rem' }}>
        {tracksList.map((track, i) => (
          <TrackGuide key={i} id={i} tracks={tracksList} />
        ))}
      </ul>

      <h4>Modes</h4>
      <strong>Play Mode</strong>

      <p>
        In play mode everything starts exactly how The Woodsman designed it to
        be. Now you're in the driver's seat. Make adjustments to your hearts
        content. Mute sounds or crank them up. Find the settings the suit your
        ear. Once you find what you like hit the save button and add them to
        your lists.
      </p>

      <strong>Animate mode</strong>
      <p>
        Click the Animate button to begin your dynamic journey. Here the sounds
        will fluctuate beyond the original design. They remain within parameters
        that are easy to absorb but keep the mind from getting bored. If you get
        to a point where things feel just right click Stop Animate to continue
        playing the current settings.
      </p>

      <h5>Thanks for coming.</h5>
    </TextBlock>
  );
};

export default Guide;
