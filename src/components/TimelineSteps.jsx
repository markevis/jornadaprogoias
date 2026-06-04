import React from 'react';
import styles from './TimelineSteps.module.css';

const TimelineSteps = () => {
  const steps = [
    {
      title: 'Análise de Elegibilidade',
      desc: 'Verificamos se sua empresa se qualifica para o ProGoiás, sem compromisso.'
    },
    {
      title: 'Diagnóstico Fiscal Detalhado',
      desc: 'Calculamos o potencial exato de economia e o impacto financeiro.'
    },
    {
      title: 'Plano de Ação Personalizado',
      desc: 'Criamos a estratégia ideal para adesão e otimização dos benefícios.'
    },
    {
      title: 'Suporte na Implementação',
      desc: 'Acompanhamos e orientamos em todo o processo burocrático e fiscal.'
    },
    {
      title: 'Monitoramento e Conformidade',
      desc: 'Garantimos que sua empresa mantenha os benefícios e esteja sempre em dia.'
    }
  ];

  return (
    <section className={`section ${styles.timelineSection}`}>
      <div className={`container`}>
        <div className={styles.header}>
          <h2>Sua Jornada para a Economia Fiscal em 5 Passos Simples</h2>
          <p>Nosso processo de consultoria é claro, transparente e focado em resultados para sua empresa.</p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.stepItem}>
              <div className={styles.stepNumber}>{idx + 1}</div>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <button className="btn btn-primary">Comece Sua Jornada Agora!</button>
        </div>
      </div>
    </section>
  );
};

export default TimelineSteps;
