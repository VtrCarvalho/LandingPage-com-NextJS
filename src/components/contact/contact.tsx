import styles from "./contact.module.css";

export default function Contact() {
    return (
        <div id='contact-section' className={styles.container}>
            <h1 className={styles.title}>Fale conosco</h1>
            <form className={styles.form}>
                <input type="text" placeholder="Nome" className={styles.input}/>
                <input type="email" placeholder="Email" className={styles.input}/>
                <input type="text" placeholder="Assunto" className={styles.input}/>
                <textarea placeholder="Mensagem" className={styles.input}></textarea>
                <button className={styles.button}>Enviar</button>
            </form>
        </div>
    )
}