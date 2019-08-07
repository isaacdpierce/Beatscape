import React from 'react';
import TextBlock from 'Assets/themes/TextBlock/TextBlock';
import arrow from 'Assets/images/icon-arrow.png';

const About = () => (
  <TextBlock>
    <h4>Who is Beatscape for?</h4>
    <p>
      Beatscape is for those who are eager to explore the potentials of the
      human mind. Those who study endless days and nights. Who drink too much
      coffee and hunger for knowledge. Those who love beautiful soundscapes and
      appreciate the possibilities of binaural beats.
    </p>
    <h4>What does it do?</h4>
    <p>
      Beatscape is a soundscape generator. With music, scenery and binaural
      options to keep your mind activated and focused for extended periods of
      time.
    </p>
    <p>
      It dynamically renders the individual tracks of a completed music
      composition. You have control over all individual levels of each track.
    </p>
    <p>
      The binaural tracks are in the range of 20 - 100hz. Ideal for stimulating
      memory and focus.
    </p>
    <p>You can also choose to animate the soundscape.</p>
    <h4>Animate mode</h4>
    <p>
      When in animate mode you experience a dynamic and changing atmosphere. It
      simulates the experience of sound when walking through a landscape. It
      overlays specific 3 dimensional sounds at random intervals. Giving you a
      spirited and unpredictable audio experience. It keeps your mind sharp and
      engaged without distracting you from the task at hand.
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
      Because you need perfect control over your study environment so you can
      optimize focus and productivity.
    </p>
    <p>
      With Beatscape you control every level of the track. If you don't like a
      certain sound you can mute it or turn it down. If you want no music you
      can turn it all down and leave only the atmosphere tracks or only the
      Binaural beat. It's your soundscape - do what you want.
    </p>
    <p>Maximum focus comes from removing distractions.</p>

    <h4>When should I use it?</h4>
    <p>
      The soundscapes are designed to stimulate focus, memory and cognition.
    </p>
    <p>Suggestions include but are not limited to the following:</p>
    <p>
      <img className='icon-arrow' src={arrow} alt='' />
      Studying, coding, designing, reading, writing, playing chess, driving,
      meditating, climbing trees, building forts, cleaning, dancing,
      snowboarding, skateboarding, base jumping, taming wild animals, wrestling
      alligators and building igloos.
    </p>
    <h4>Us</h4>
    <div>
      The sound designs for Beatscape are done by
      <a href='http://www.thewoodsmanmusic.io'>
        <h5 className='personal-link'>
          Michael Jaques of The Woodsman Sound Co.
        </h5>
      </a>
    </div>
    <div>
      The web designs and code composition are done by
      <a href='http://www.isaacpierce.io'>
        <h5 className='personal-link'>
          Isaac Pierce of The Lockstone Web Agency
        </h5>
      </a>
    </div>
    <h5>Thanks for coming.</h5>
  </TextBlock>
);

export default About;
