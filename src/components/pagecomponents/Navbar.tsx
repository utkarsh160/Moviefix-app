import React, { ReactNode } from 'react';
import Logo from '../commoncomponents/Logo';
import SearchBar from '../commoncomponents/SearchBar';

interface NavbarProps {
  children?: ReactNode; 
  handleSearch: (query: string) => void; 
}

const Navbar: React.FC<NavbarProps> = ({children,handleSearch}) => {

  return (
    <section className="main-navbar">
      <div className="main-navbar-first-section">
      <div className="main-navbar-first">
        <Logo />
      </div>
      <div className="main-navbar-second">
        <SearchBar onSearch={handleSearch}/>
      </div>
      </div>
      <div className="main-navbar-second-section">
        {children}
      </div>
    </section>
  );
};

export default Navbar;