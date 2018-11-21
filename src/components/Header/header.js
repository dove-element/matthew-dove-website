import React from 'react';
import { Link } from 'gatsby';
import headerStyles from './header.module.css';
import scaffoldingStyles from '../../scaffolding.module.css';

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={scaffoldingStyles.container}>
      <h1 className={headerStyles.brand}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <ul className={headerStyles.links}>
        <li className={headerStyles.link}><Link to="/">Home</Link></li>
        <li className={headerStyles.link}><Link to="/adventures/">Adventures</Link></li>
        <li className={headerStyles.link}><Link to="/about/">About</Link></li>
        <li className={headerStyles.link}><Link to="/contact/">Contact</Link></li>
      </ul>
    </div>
  </header>
);

export default Header;
