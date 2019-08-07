import React from 'react';
import TextBlock from 'Assets/themes/TextBlock/TextBlock';
import TrackGuide from './TrackGuide';
import trackList from './trackList';

const Guide = () => (
  <TextBlock>
    <h4>Getting Started</h4>
    <p>First things first - click PLAY!</p>
    <p>
      The machine will load a default Soundscape when it first loads. To change
      the default Soundscape click the SOUNDSCAPES button at the bottom of the
      machine. A drawer will open with all your possible journeys.
    </p>

    <h4>Tracks defined</h4>
    <ul style={{ marginBottom: '2rem' }}>
      {trackList.map((track, i) => (
        <TrackGuide key={i} type={track.type} description={track.description} />
      ))}
    </ul>

    <h4>Modes</h4>
    <h5>Play Mode</h5>

    <p>
      In play mode everything starts exactly how The Woodsman designed it to be.
      Now you're in the driver's seat. Make adjustments to suit your ear. Mute
      sounds or crank them up. Find the settings that will maximize your focus.
    </p>

    <h5>Animate mode</h5>
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

export default Guide;
