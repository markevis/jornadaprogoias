import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const faqs = [
    {
      q: 'O que é o ProGoiás e qual a principal diferença para o Fomentar/Produzir?',
      a: 'O ProGoiás é o novo programa de incentivos fiscais de Goiás, focado em desburocratização e segurança jurídica. A principal diferença é a concessão de crédito outorgado de ICMS de forma mais transparente e com prazos definidos, eliminando as complexidades e litígios dos programas anteriores.'
    },
    {
      q: 'Minha empresa se qualifica para o ProGoiás?',
      a: 'Empresas de diversos setores, como indústrias de transformação, agronegócio, tecnologia, comércio atacadista e transporte/logística, podem se qualificar. Nossa consultoria realiza uma análise de elegibilidade detalhada para confirmar o enquadramento.'
    },
    {
      q: 'Qual o valor mínimo de investimento para aderir ao ProGoiás?',
      a: 'O programa exige um investimento mínimo em Goiás, que varia conforme o porte e o setor da empresa. Nosso simulador e consultoria inicial podem ajudar a determinar os requisitos específicos para o seu caso.'
    },
    {
      q: 'Quanto tempo leva para minha empresa começar a usufruir dos benefícios?',
      a: 'O tempo pode variar dependendo da complexidade do caso e da agilidade na apresentação da documentação. Com nossa consultoria, agilizamos o processo para que sua empresa comece a economizar o mais rápido possível.'
    },
    {
      q: 'Como funciona a consultoria após a simulação?',
      a: 'Após a simulação e o envio do seu e-mail, entraremos em contato para uma análise mais aprofundada, um diagnóstico fiscal completo e a elaboração de um plano de ação personalizado para a adesão ao ProGoiás.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`section ${styles.faqSection}`}>
      <div className="container">
        <div className={styles.header}>
          <h2>Dúvidas Comuns Sobre o ProGoiás e Nossa Consultoria</h2>
          <p>Encontre as respostas para as perguntas mais frequentes e tome uma decisão informada.</p>
        </div>

        <div className={styles.accordionContainer}>
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`${styles.accordionItem} ${activeIndex === idx ? styles.active : ''}`}
            >
              <button 
                className={styles.accordionTitle} 
                onClick={() => toggleAccordion(idx)}
              >
                {faq.q}
                <span className={styles.icon}>{activeIndex === idx ? '−' : '+'}</span>
              </button>
              <div 
                className={styles.accordionContent} 
                style={{ maxHeight: activeIndex === idx ? '500px' : '0' }}
              >
                <div className={styles.innerContent}>
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <button className="btn btn-secondary">Ainda Tem Dúvidas? Fale Conosco!</button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
