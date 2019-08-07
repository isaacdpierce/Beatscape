import styled from 'styled-components';

const StyledTextBlock = styled.section`
  width: 50vw;
  padding: 2rem 7rem;
  background: rgba(0, 0, 0, 0.406);
  text-shadow: 1px 1px 2px black;
  border-radius: 6px;

  li {
    margin-bottom: 1rem;
  }

  .personal-link {
    color: rgb(255, 81, 0);
    text-align: center;
    transition: color 0.2s ease-in-out;
    :hover {
      color: rgb(255, 102, 31);
    }
  }

  h5,
  .list-label {
    text-transform: uppercase;
    font-weight: 300;
  }

  .icon-arrow {
    height: 2rem;
    padding-right: 1.5rem;
    transform: translateY(2px);
  }
`;

export default StyledTextBlock;
