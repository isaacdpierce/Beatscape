import React from 'react';
import TextBlock from '../../components/themes/TextBlock/TextBlock';

import './About.css';
import arrow from '../../assets/images/icon-arrow.png';

const About = () => {
  return (
    <TextBlock>
      <h4>Who is Beatscape for?</h4>
      <p>
        Beatscape is for those who are eager to explore the potentials of the
        human mind. Those who study endless days and nights. Who drink too much
        coffee and hunger for knowledge. The ones who love instrumental Hip-Hop
        and appreciate the possibilities of binaural beats. And anyone who loves
        simple soundscapes that keep the mind activated for extended periods of
        time.
      </p>
      <h4>What does it do?</h4>
      <p>
        Beatscape is a soundscape generator. It mimics the audio landscape one
        experiences while moving through a living environment.
      </p>
      <p>
        It dynamically renders the individual tracks of a completed music
        composition. You have control over all individual levels of each track.
      </p>
      <p>The binaural tracks are designed for stimulating memory and focus.</p>
      <p>You can choose to animate the soundscape.</p>
      <h4>Animate mode</h4>
      <p>
        When in animate mode you experience a dynamic and changing atmosphere.
        It simulates the experience of sound when walking through a landscape.
        It overlays specific 3 dimensional sounds at random intervals. Giving
        you a spirited and unpredictable audio experience. It keeps your mind
        sharp and engaged without distracting you from the task at hand.
      </p>
      <ul>
        <li>
          <img className='icon-arrow' src={arrow} alt='' />
          Sounds will be added and removed from the soundscape in a random and
          natural way.
        </li>
        <li>
          <img className='icon-arrow' src={arrow} alt='' />
          Individual tracks will fade and gain.
        </li>
        <li>
          <img className='icon-arrow' src={arrow} alt='' />
          Tracks will fade from left to right simulating movement.
        </li>
      </ul>
      <h4>Why does it exist?</h4>
      <p>
        Because you need perfect control over your atmosphere so you can
        optimize focus and productivity.
      </p>
      <p>
        Because listening to an 8 hour live YouTube feed of someone playing
        unrelated tracks can be distracting and break concentration. Maximum
        focus comes from removing distractions.
      </p>

      <p>
        How many times have you been listening to music that was great
        background for a while then suddenly the song changes? Or an irritating
        sound comes into an otherwise great song. Beatscape give you the power.'
      </p>
      <p>
        With Beatscape you control every level of the track. If you don't like a
        certain sound you can mute it or turn it down. If you want no music you
        can turn it all down and leave only the atmosphere tracks or only the
        Binaural beat. It's your soundscape - do what you want.
      </p>
      <h4>Us</h4>
      <div>
        The sound designs for Beatscape are done by the right honorable and very
        reverent
        <a href={'http://www.thewoodsmanmusic.io'}>
          <h5 className='personal-link'>
            Michael Jaques of The Woodsman Sound Co.
          </h5>
        </a>
      </div>
      <div>
        The web designs and code composition are done by the dishonorable and
        very irrelevant
        <a href={'http://www.isaacpierce.io'}>
          <h5 className='personal-link'>
            Isaac Pierce of The Lockstone Web Agency
          </h5>
        </a>
      </div>
      <h5>Thanks for coming.</h5>
    </TextBlock>
  );
};

export default About;
