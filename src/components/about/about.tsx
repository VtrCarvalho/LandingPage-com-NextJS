import styles from './about.module.css';
import Cards from "../features/cards";

export default function About() {
    return (
        <div id='about-section' className={styles.container}>
            <h1 className={styles.title}>Neste bairro, não há agência <br/>melhor. Garantimos.</h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Cards />
        </div>
    )
}