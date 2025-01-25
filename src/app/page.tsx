import styles from "./page.module.css";
import Header from "../components/header/header"
import Welcome from "../components/welcome/welcome"
import About from "../components/about/about"
import Contact from "../components/contact/contact"

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Welcome />
      <About />
      <Contact />
    </div>
  );
}
