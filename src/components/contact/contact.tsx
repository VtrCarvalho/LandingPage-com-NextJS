import styles from "./contact.module.css";

export default function Contact() {
    return (
        <div id='contact-section' className={styles.container}>
            <article className={styles.texts}>
                <h2 className={styles.contactUs}>ENTRE EM CONTATO</h2>
                <h1 className={styles.title}>Aumente seu resultado <br/>de vendas e performance</h1>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/>do eiusmod tempor incididunt ut labore et dolore magna</p>
            </article>
            <aside className={styles.formContainer}>
                <form className={styles.form}>
                    <h1 className={styles.titleForm}>Fale com um especialista</h1>
                    <input type="text" placeholder="Nome completo"  required className={styles.input} />
                    <input type="email" placeholder="Email profissional" required className={styles.input} />
                    <input type="tel" placeholder="Celular/WhatsApp" required className={styles.input} />
                    <input type="url" placeholder="Site"  required className={styles.input} />
                    <select name="Orçamento para mídia">
                        <option value="" className={styles.options}>Orçamento para mídia</option>
                        <option value="Opção 01" className={styles.options}>Opção 01</option>
                        <option value="Opção 02" className={styles.options}>Opção 02</option>
                        <option value="Opção 03" className={styles.options}>Opção 03</option>
                        <option value="Opção 04" className={styles.options}>Opção 04</option>
                        <option value="Opção 05" className={styles.options}>Opção 05</option>
                    </select>
                    <button className={styles.button}>Enviar</button>
                </form>
                <p className={styles.descriptionForm}>Ao enviar esse formulário, você reconhece que leu <br/>e concorda com a nossa <strong className={styles.descriptionFormStrong}>Política de Privacidade.</strong></p>
            </aside>
        </div>
    )
}