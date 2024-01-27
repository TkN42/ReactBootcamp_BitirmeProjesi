import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
    width: 100%;
    box-shadow: 0 13px 18px -14px #888888;
    background: linear-gradient(to right, #82c43a, #096468);
`;

export const HeaderBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 70vw;
    height: 100px;
    margin: 0 auto;
`;

export const LogoContainer = styled.div`
    font-size: 24px;
    a {
        color: #FFFFFF;
    }
`;

export const StyledLink = styled(Link)`
     text-decoration: none;
     font-weight: 600;
`;

export const HeaderLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const LogoImage = styled.img`
  max-width: 10%;
  margin-top: 0px;
`;

// export const EKitapText = styled(Link)`
//   font-size: 42px;
//   margin-left: 8px;
//   margin-top: 0px;
//   font-weight: bold;
// `;

export const EKitapText = styled(Link)`
  font-size: 42px;
  margin-left: -40%;  
  margin-top: 0;
  font-weight: bold;
  display: flex;  
  align-items: center;  
`;