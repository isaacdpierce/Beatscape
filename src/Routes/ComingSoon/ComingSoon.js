import React from 'react';
import TextBlock from 'Components/themes/TextBlock/TextBlock';
import arrow from 'Assets/images/icon-arrow.png';

const ComingSoon = () => (
  <TextBlock>
    <h4>What's next?</h4>
    <p>So glad you asked.</p>
    <h4>We have big plans for Beatscape.</h4>
    <ul>
      <li>
        <img className='icon-arrow' src={arrow} alt='' />
        Adding new soundscapes on a regular basis.
      </li>
      <li>
        <img className='icon-arrow' src={arrow} alt='' />
        Creating a login area for you to save and share your machine settings.
      </li>
      <li>
        <img className='icon-arrow' src={arrow} alt='' />
        Creating a live chat area to connect with other listeners around the
        world.
      </li>
      <li>
        <img className='icon-arrow' src={arrow} alt='' />
        Creating a purchase option for you to buy and download high quality
        versions of each soundscape.
      </li>
    </ul>
  </TextBlock>
);

export default ComingSoon;
