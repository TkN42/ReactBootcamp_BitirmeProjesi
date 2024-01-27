import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GrCart } from 'react-icons/gr';
import { ShopContext } from '../../context/ShopContext';
import { HeaderContainer, HeaderBar, LogoContainer, HeaderLinksContainer, StyledLink, LogoImage, EKitapText } from './HeaderStyles';
import meramLogo from '../../logo/meramlogo.jpg';

const CartButton = {
  fontSize: '24px',
  filter: 'invert(100%)'
};

export const Header = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <HeaderContainer>
      <HeaderBar>
        <LogoContainer>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StyledLink to='https://www.meram.bel.tr/'>
              <LogoImage src={meramLogo} alt="Meram Belediyesi" />
            </StyledLink>
            <EKitapText to='/e-commerce-react/'>E-Kitap</EKitapText>
          </div>
        </LogoContainer>
        <HeaderLinksContainer>
          <Link to='/e-commerce-react/cart'>
            <GrCart style={CartButton} />
            {Object.values(cartItems).reduce((acc, count) => acc + count, 0)}
          </Link>
        </HeaderLinksContainer>
      </HeaderBar>
    </HeaderContainer>
  );
};
