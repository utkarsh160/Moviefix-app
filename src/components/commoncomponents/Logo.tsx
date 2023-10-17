import React from 'react';
import MoviefixLogo from '../../assets/images/moviefixLogo.svg'
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to={`/`}>
    <div className="logo-main">
      <img src={MoviefixLogo} alt='Moviefix Logo' />
    </div>
    </Link>
  );
};

export default Logo;