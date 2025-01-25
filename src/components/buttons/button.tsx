'use client';

import styles from "./button.module.css";

interface ButtonProps {
    title: string;
    kind: 'primary' | 'secundary';
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Buttons: React.FC<ButtonProps> = ({ title, kind, onClick }) => {
    return (
        <button className={`${styles.botao} ${styles[kind]}`} onClick={onClick}>
            {title}
        </button>
    );
};

export default Buttons;
