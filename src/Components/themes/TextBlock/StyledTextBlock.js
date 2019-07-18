import styled from 'styled-components';

const StyledTextBlock = styled.section`
  width: 50vw;
  padding: 1rem 2rem;
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
  }

  .personal-link:hover {
    color: rgb(255, 102, 31);
  }

  .icon-arrow {
    height: 20px;
    padding-right: 0.5rem;
    transform: translateY(2px);
  }
`;

export default StyledTextBlock;
