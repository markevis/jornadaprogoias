import React from 'react';
import styles from './FinalCTA.module.css';

const FinalCTA = () => {
  return (
    <section className={`section ${styles.ctaSection}`}>
      <div className={`container ${styles.containerCentered}`}>
        <h2>Não Deixe Seu Dinheiro na Mesa.<br/> Comece a Economizar Agora!</h2>
        <p className={styles.subheadline}>
          O futuro financeiro da sua empresa começa com uma decisão inteligente. Dê o primeiro passo rumo à otimização fiscal.
        </p>
        <p className={styles.bodyText}>
          Milhares de empresas já estão se beneficiando do ProGoiás. Sua empresa pode ser a próxima. Use nosso simulador ou entre em contato para uma consultoria personalizada.
        </p>
        
        <div className={styles.btnAction}>
          <div className={styles.arrowIcon}>↓</div>
          <button 
            className="btn btn-primary" 
            style={{ fontSize: '1.25rem', padding: '18px 40px', borderRadius: '50px', background: 'var(--accent)' }}
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            Simule Sua Economia e Transforme Seu Negócio!
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
