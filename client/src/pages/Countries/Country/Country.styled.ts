import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 15px;
  margin: 7vh 0;

  @media screen and (max-width: 700px) {
    margin-top: 25px;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  background-color: var(--white);
  padding: 10px;
  border-radius: 9px;
  box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.15);
  max-width: 450px;

  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

export const Gray = styled.span`
  color: #4f4f4f;
`;

export const Flag = styled.img`
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 2px;
  box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 980px) {
    max-width: 300px;
    max-height: 300px;
  }

  @media screen and (max-width: 700px) {
    margin-bottom: 15px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;

  // Add comma between elements except first and last
  span:not(:last-child):not(:first-child):after {
    content: ',';
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
`;
