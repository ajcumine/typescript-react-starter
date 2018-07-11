import React from 'react';

import styles from './App.css';
import logo from './logo.svg';

const App = () => (
  <div className={styles.app}>
    <header className={styles.appHeader}>
      <img alt="logo" className={styles.appLogo} src={logo} />
      <h1 className={styles.appTitle}>Welcome to React</h1>
    </header>
    <p className={styles.appIntro}>
      To get started, edit <code>src/App.tsx</code> and save to reload.
    </p>
  </div>
);

export default App;
