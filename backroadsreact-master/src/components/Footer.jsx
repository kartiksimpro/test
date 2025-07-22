import React from 'react'
import { footerLinks, navIcons } from './Constants'

const Footer = () => {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {footerLinks.map((footerLink) => {
                    return (
                        <li key={footerLink.id}>
                            <a href={footerLink.href} className="footer-link"> {footerLink.text}</a>
                        </li>
                    )
                }
                )}
            </ul>
            <ul className="footer-icons">
                {navIcons.map((navIcon) => {
                    return (
                        <li key={navIcon.id}>
                            <a href={navIcon.link} target="_blank" className="footer-icon"><i className={navIcon.class}></i></a>
                        </li>
                    )
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved
            </p>
        </footer>
    )
}

export default Footer