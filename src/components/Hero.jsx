import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <div className={styles.textContent}>
          <h1 className={styles.headline}>
            Desbloqueie até <span className={styles.highlight}>67% de Economia</span> no ICMS da Sua Empresa com o ProGoiás!
          </h1>
          <p className={styles.subheadline}>
            Descubra como sua indústria pode reduzir custos e impulsionar o crescimento com o principal incentivo fiscal de Goiás.
          </p>
          <p className={styles.bodyText}>
            Cansado da alta carga tributária e da burocracia? O ProGoiás é a resposta de Goiás para empresas que buscam otimização fiscal com segurança jurídica e processos simplificados. Não perca a chance de transformar a realidade financeira do seu negócio.
          </p>
          <div className={styles.ctaGroup}>
            <button 
              className={`btn btn-primary ${styles.mainCta}`}
              onClick={() => document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              Simule Sua Economia Agora!
            </button>
            <a href="#about" className={styles.secondaryLink}>Saiba Mais Sobre o ProGoiás</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
