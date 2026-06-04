import React from 'react';
import styles from './Benefits.module.css';

const Benefits = () => {
  const benefitsList = [
    {
      icon: '💰',
      title: 'Redução de ICMS Substancial',
      desc: 'Crédito outorgado de até 67% sobre o saldo devedor do ICMS.'
    },
    {
      icon: '⚡',
      title: 'Processos Desburocratizados',
      desc: 'Adeus à complexidade! Adesão e gestão simplificadas e 100% digitais.'
    },
    {
      icon: '🛡️',
      title: 'Segurança Jurídica Total',
      desc: 'Benefícios concedidos com prazos fixos e previsíveis de até 2032.'
    },
    {
      icon: '📉',
      title: 'Alívio no Protege',
      desc: 'Redução significativa da contribuição para o Fundo de Proteção Social.'
    },
    {
      icon: '🏭',
      title: 'Ampla Abrangência Setorial',
      desc: 'Benefícios para indústrias, agronegócio, tecnologia, comércio e logística.'
    }
  ];

  return (
    <section className={`section ${styles.benefitsSection}`}>
      <div className={`container`}>
        <div className={styles.header}>
          <h2>Por Que o ProGoiás é o Melhor Caminho para Sua Empresa?</h2>
          <p>Conheça as vantagens exclusivas que transformam a realidade fiscal e operacional do seu negócio.</p>
        </div>

        <div className={styles.grid}>
          {benefitsList.map((ben, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconWrapper}>{ben.icon}</div>
              <h3>{ben.title}</h3>
              <p>{ben.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <button className="btn btn-secondary">Entenda Todos os Benefícios</button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
