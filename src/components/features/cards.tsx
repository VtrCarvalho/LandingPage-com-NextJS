import styles from "./cards.module.css"
import Image from "next/image"
import IconCard from "../../../public/images/iconCard.svg"

export default function Cards() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <Image src={IconCard} alt="Icone de cartão" />
                <h2>Digital Strategy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna.</p>
            </div>
            <div className={styles.card}>
                <Image src={IconCard} alt="Icone de cartão" />
                <h2>Digital Strategy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna.</p>
            </div>
            <div className={styles.card}>
                <Image src={IconCard} alt="Icone de cartão" />
                <h2>Digital Strategy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna.</p>
            </div>
            <div className={styles.card}>
                <Image src={IconCard} alt="Icone de cartão" />
                <h2>Digital Strategy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna.</p>
            </div>
        </div>
    )
}