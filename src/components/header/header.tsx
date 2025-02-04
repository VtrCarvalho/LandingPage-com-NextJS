'use client';

import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo.png";
import Buttons from "../buttons/button";

const Header = () => {
    const scrollInto = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = '/';
        }
    };

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const element = document.getElementById('contact-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.container}>
            <Image className={styles.logotipo} src={Logo} alt="logo"/>
            <div className={styles.menu}>
                <Link href="http://localhost:3000/">Home</Link>
                <Link href="#about-section" onClick={(e) => scrollInto(e, 'welcome-section')}>Quem somos</Link>
                <Link href="#case-section" onClick={(e) => scrollInto(e, 'about-section')}>Cases</Link>
            </div>
            <Buttons title="Fale conosco" kind="primary" onClick={handleButtonClick} />
        </div>
    );
};

export default Header;
