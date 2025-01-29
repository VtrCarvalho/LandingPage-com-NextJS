import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "../../../public/images/instagramIcon.svg";
import FacebookIcon from "../../../public/images/facebookIcon.svg";
import LinkedinIcon from "../../../public/images/linkedinIcon.svg";
import YoutubeIcon from "../../../public/images/youtubeIcon.svg";


export default function Footer() {

    return (
        <div className={styles.container}>
            <div className={styles.agencia}>
                <h2>agência</h2>
                <h3>0800 800 800</h3>
                <Link href="comercial@agencia.com.br"> comercial@agencia.com.br</Link>
            </div>
            <div className={styles.menu}>
                <h3>Menu</h3>
                <Link href="">Quem somos</Link>
                <Link href="">Cases</Link>
            </div>
            <div className={styles.conteudo}>
                <h3>Conteúdo</h3>
                <Link href="">E-books</Link>
                <Link href="">Fórmulas prontas</Link>
            </div>
            <div className={styles.social}>
                <h3>Social</h3>
                <div className={styles.iconsSocial}>
                <Link href="https://www.instagram.com.br"><Image className={styles.icons} src={InstagramIcon} alt="Ícone do Instagram"/></Link>
                <Link href="https://www.facebook.com.br"><Image className={styles.icons} src={FacebookIcon} alt="Ícone do Facebook"/></Link>
                <Link href="https://www.linkedin.com.br"><Image className={styles.icons} src={LinkedinIcon} alt="Ícone do Linkedin"/></Link>
                <Link href="https://www.youtube.com.br"><Image className={styles.icons} src={YoutubeIcon} alt="Ícone do Youtube"/></Link>
                </div>
            </div>
            <p className={styles.direitosReservados}>©2022 AGENCIA - Todos os direitos reservados.</p>
        </div>
    )

}