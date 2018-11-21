import React from 'react'
import footerStyles from './footer.module.css';
import scaffoldingStyles from '../../scaffolding.module.css';
import { getCurrentYear } from '../../utils/dateUtils';

const Footer = () => (
    <nav className={footerStyles.footer}>
        <ul className={footerStyles.socialLinks}>
            <li className={footerStyles.socialLink}><a href="https://github.com/zedonkey" target="_blank" rel="noreferrer noopener">github</a></li>
            <li className={footerStyles.socialLink}><a href="https://www.strava.com/athletes/matthewdove" target="_blank" rel="noreferrer noopener">strava</a></li>
            <li className={footerStyles.socialLink}><a href="https://www.instagram.com/mcdovington" target="_blank" rel="noreferrer noopener">instagram</a></li>
        </ul>
        <div className={scaffoldingStyles.container}>
            <span className={footerStyles.copyright}>Copyright Matthew Dove {getCurrentYear()}</span>
        </div>
    </nav>
);

export default Footer
