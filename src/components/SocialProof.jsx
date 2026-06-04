import React from 'react';
import styles from './SocialProof.module.css';

const SocialProof = () => {
  const testimonials = [
    {
      text: "Com a consultoria especializada, conseguimos uma redução de 55% no nosso ICMS mensal. O processo foi muito mais simples do que imaginávamos, e o impacto no nosso fluxo de caixa foi imediato. Recomendo!",
      author: "João Silva",
      role: "Diretor Financeiro, Indústria Alpha"
    },
    {
      text: "A migração do Produzir para o ProGoiás nos trouxe a segurança jurídica que precisávamos para expandir nossas operações no estado sem medo de passivos fiscais futuros.",
      author: "Mariana Costa",
      role: "CEO, AgroTech Goiás"
    }
  ];

  return (
    <section className={`section ${styles.proofSection}`}>
      <div className={`container`}>
        <div className={styles.header}>
          <h2>Quem Já Confiou e Colheu Resultados</h2>
          <p>Veja o que nossos clientes dizem sobre a transformação que o ProGoiás trouxe para seus negócios.</p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((test, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.quoteText}>{test.text}</p>
              <div className={styles.authorInfo}>
                <div className={styles.avatar}>{test.author.charAt(0)}</div>
                <div>
                  <div className={styles.authorName}>{test.author}</div>
                  <div className={styles.authorRole}>{test.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <button className="btn btn-accent">Fale com um Especialista</button>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
