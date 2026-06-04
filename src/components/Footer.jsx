import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>Bi4YOU Consultoria</h2>
          <p className={styles.desc}>Sua parceira estratégica em otimização fiscal e incentivos do ProGoiás.</p>
          <div className={styles.socials}>
            <a href="#">in</a>
            <a href="#">f</a>
            <a href="#">ig</a>
          </div>
        </div>
        
        <div className={styles.links}>
          <h4>Links Úteis</h4>
          <ul>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Termos de Uso</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        
        <div className={styles.contact}>
          <h4>Contato</h4>
          <p>📧 contato@bi4you.com.br</p>
          <p>📞 (62) 99999-9999</p>
          <p>📍 Goiânia, GO</p>
        </div>
      </div>
      
      <div className={styles.copy}>
        &copy; 2026 Bi4YOU Consultoria. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
