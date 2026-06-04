import React from 'react';
import styles from './ProblemOpportunity.module.css';

const ProblemOpportunity = () => {
  return (
    <section id="about" className={`section ${styles.container}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageCol}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>Cenário Tradicional</div>
            <div className={styles.cardBody}>
              <ul>
                <li><span className={styles.iconCross}>✕</span> Alta carga tributária</li>
                <li><span className={styles.iconCross}>✕</span> Burocracia excessiva</li>
                <li><span className={styles.iconCross}>✕</span> Insegurança jurídica (Fomentar/Produzir)</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardPro}`}>
            <div className={styles.cardHeaderPro}>Oportunidade ProGoiás</div>
            <div className={styles.cardBody}>
              <ul>
                <li><span className={styles.iconCheck}>✓</span> Redução significativa de ICMS</li>
                <li><span className={styles.iconCheck}>✓</span> Desburocratização total</li>
                <li><span className={styles.iconCheck}>✓</span> Segurança jurídica e previsibilidade</li>
              </ul>
            </div>
            <div className={styles.badge}>A Melhor Escolha</div>
          </div>
        </div>
        
        <div className={styles.textCol}>
          <h2>Sua Empresa Paga <span className={styles.dangerText}>Impostos Demais?</span><br /> O ProGoiás é a Solução!</h2>
          <p className={styles.subheadline}>
            Entenda os desafios da alta carga tributária e como o novo programa de incentivos fiscais de Goiás transforma esse cenário.
          </p>
          <p className={styles.bodyText}>
            A complexidade tributária e a burocracia dos antigos programas de incentivo fiscal em Goiás (Fomentar/Produzir) geraram insegurança e litígios. O ProGoiás surge como um novo modelo, desburocratizado e transparente, oferecendo uma oportunidade real de redução significativa do ICMS para empresas que investem no estado.
          </p>
          <button className={`btn btn-accent ${styles.ctaBtn}`}>
            Quero Reduzir Meus Impostos!
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProblemOpportunity;
