import React from 'react';

import './About.css';
import arrow from '../../assets/images/icon-arrow.png';

const About = () => {
  return (
    <section className='about'>
      <h4>Who is Beatscape for?</h4>
      <p>
        Beatscape is for those who study endless days and nights.Those who drink
        far too much coffee.Those committed to academia.And those willing to
        explore the potentials of the human mind.It's for those who love
        instrumental lo-fi Hip-Hop. It's for those who appreciate the
        possibilities of Binaural Beats.And anyone who loves to listen to simple
        sound structures that keep the mind engaged for long periods of time.
      </p>
      <h4>What does it do?</h4>
      <p>
        Beatscape is an animated soundscape generator.It is meant to mimic the
        audio landscape one experiences while moving through a living
        environment.
      </p>
      <p>
        It dynamically renders the individual tracks of a completed music
        composition.Then overlays specific 3 dimensional sounds that give the
        user a spirited and unpredictable audio experience.
      </p>
      <p>You have control over all individual levels of each track.</p>
      <p>The binaural tracks are designed for stimulating memory and focus.</p>
      <p>You can choose to animate the soundscape.</p>
      <h4>Animate mode</h4>
      <p>
        When in animate mode the user experiences a dynamic and changing
        atmosphere.It simulates the way one would experience sound when walking
        through a landscape.
      </p>
      <ul>
        <li>
          <img className='icon-arrow' src={arrow} />
          Sounds will be added and removed from the soundscape in a random and
          natural way.
        </li>
        <li>
          <img className='icon-arrow' src={arrow} />
          Individual tracks will fade and gain.
        </li>
        <li>
          <img className='icon-arrow' src={arrow} />
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
        background for a while then suddenly the song changes ? Or an irritating
        sound comes into an otherwise great song.
      </p>
      <p>
        With Beatscape you control every level of the track.If you don't like a
        certain sound you can mute it or turn it down. If you want no music you
        can turn it all down and leave only the atmosphere tracks or only the
        Binaural beat. It's your soundscape - do what you want.
      </p>
      <h4>Us</h4>
      <p>
        The sound designs for Beatscape are done by the right honorable -- the
        very reverent
        <a href={'http://www.thewoodsmanmusic.io'}>
          <h5 className='personal-link'>
            Michael Jaques of The Woodsman Sound Co.
          </h5>
        </a>
      </p>
      <p>
        The web designs and code composition are done by the dishonorable and
        very irrelevant
        <a href={'http://www.isaacpierce.io'}>
          <h5 className='personal-link'>
            Isaac Pierce of The Lockstone Web Agency
          </h5>
        </a>
      </p>
      <h5>Thanks for coming.</h5>
    </section>
  );
};

export default About;
