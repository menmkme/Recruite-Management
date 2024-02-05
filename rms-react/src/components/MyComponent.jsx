// MyComponent.js
import styled from 'styled-components';

const MyComponent = styled.div`
  /* Styles for larger screens */

    font-size: 16px;

  @media only screen and (max-width: 600px) {
    /* Styles for small screens */

        font-size: 14px;
  }
`;

export default MyComponent;
