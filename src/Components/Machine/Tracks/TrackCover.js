import styled from 'styled-components';

export const TrackCover = styled.section`
  padding-top: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  color: transparent;
  background-color: transparent;
  background-color: rgba(0, 0, 0, 0.392);
  z-index: 999;

  p {
    text-transform: uppercase;
    color: var(--main-brown);
    margin: 0;
    font-weight: 100;
    font-size: 2rem;
    text-shadow: 0px 0px 3px black;
  }
`;

export const errorColor = {
  color: 'FireBrick',
};
