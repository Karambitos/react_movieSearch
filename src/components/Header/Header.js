import React, { useState } from 'react'
import logo from '../../logo.svg';

// import { ReactComponent as SearchIcon } from '../../icons/search.svg'
import styles from '../Header/Header.module.css';

function Header() {

    // const handleInputChange = (event) => setTextMessage(event.currentTarget.value);

    return (
        <header className={styles.Header}>
            <div className={styles.HeaderInner}>
                <img src={logo} className={styles.HeaderLogo} alt="logo" />
                <ul className={styles.HeaderList}>
                    <li className={styles.HeaderItem}>
                        <a href="">Home</a>
                    </li>
                    <li className={styles.HeaderItem}>
                        <a href="">Movie</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export { Header }

