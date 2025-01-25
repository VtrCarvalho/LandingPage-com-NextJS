'use client';

import styles from './welcome.module.css';
import Buttons from '../buttons/button';
import Image from 'next/image';
import CardsLeads from '../../../public/images/CardsLeads.png';

const Welcome = () => {

    const scrollToCases = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const element = document.getElementById('contact-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="welcome-section" className={styles.container}>
            <article className={styles.info}>
                <h1>Melhor agência de <br/>marketing do bairro</h1>
                <p>Somos uma agência de performance digital, aceleramos <br/>vendas e aquisição de leads para grandes marcas.</p>
                <Buttons title="Aumentar vendas" kind="secundary" onClick={scrollToCases}/>
            </article>
            <aside className={styles.cards}>
                <Image className={styles.cardsLeads} src={CardsLeads} alt="Cards" />
            </aside>
        </div>
    );
};

export default Welcome;
