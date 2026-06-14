import React, { useState, useEffect } from 'react';
import styles from './Pricing.module.css';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';
const PLATFORM_URL = import.meta.env.VITE_PLATFORM_URL || 'http://localhost:4321';

const FALLBACK_PLANS = [
  {
    slug: 'mensal',
    name: 'Plano Mensal',
    description: 'Acesso completo à plataforma com cobrança mensal. Cancele a qualquer momento, sem multas.',
    price_brl: 149,
    is_featured: false,
    trial_days: 0,
    features: [
      'Diagnóstico de elegibilidade',
      'Simulação financeira completa',
      'Chat FAQ com 179+ respostas',
      'Projetos ilimitados',
      'Relatórios em PDF',
      'Suporte por e-mail',
    ],
  },
  {
    slug: 'semestral',
    name: 'Plano Semestral',
    description: 'Economia de 2 meses pagando por 6 meses. O melhor custo-benefício para quem está em processo ativo.',
    price_brl: 779,
    is_featured: true,
    trial_days: 0,
    features: [
      'Tudo do Plano Mensal',
      'Acesso a consultores especializados',
      'Análise de viabilidade detalhada',
      'Suporte prioritário',
      'Economia equivalente a 2 meses',
    ],
  },
  {
    slug: 'anual',
    name: 'Plano Anual',
    description: 'Máxima economia com 12 meses de acesso. Inclui consultoria dedicada e SLA de suporte.',
    price_brl: 1429,
    is_featured: false,
    trial_days: 0,
    features: [
      'Tudo do Plano Semestral',
      'Consultoria dedicada mensal',
      'Múltiplos CNPJs',
      'SLA de suporte 4h',
      'Onboarding personalizado',
      'Economia equivalente a 4 meses',
    ],
  },
];

const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/stripe/plans`)
      .then(res => {
        if (!res.ok) throw new Error('API indisponível');
        return res.json();
      })
      .then(data => {
        const apiPlans = data.plans || [];
        setPlans(apiPlans.length > 0 ? apiPlans : FALLBACK_PLANS);
      })
      .catch(() => {
        setPlans(FALLBACK_PLANS);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleAssinar = async (slug) => {
    try {
      const res = await fetch(`${API_BASE}/stripe/checkout/public`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan_slug: slug }),
      });
      if (!res.ok) throw new Error('Erro ao iniciar checkout');
      const { checkout_url } = await res.json();
      window.location.href = checkout_url;
    } catch (err) {
      console.error(err);
      alert('Não foi possível iniciar o checkout. Tente novamente em instantes.');
    }
  };

  const formatPrice = (priceBrl) => {
    const val = parseFloat(priceBrl);
    return isNaN(val) ? '—' : val.toFixed(0);
  };

  return (
    <section id="planos" className={`section ${styles.pricingSection}`}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>💎 Planos e Preços</span>
          <h2>Escolha o Plano Ideal para Sua Empresa</h2>
          <p>
            Comece agora e descubra o potencial fiscal do seu negócio com ferramentas
            profissionais de análise, simulação e acompanhamento do ProGoiás.
          </p>
        </div>

        {loading ? (
          <div className={styles.loadingWrapper}>
            <div className={styles.spinner}></div>
            <p>Carregando planos...</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {plans.map((plan) => (
              <div
                key={plan.slug}
                className={`${styles.card} ${plan.is_featured ? styles.featured : ''}`}
              >
                {plan.is_featured && (
                  <div className={styles.featuredBadge}>⭐ Mais Popular</div>
                )}

                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <p className={styles.planDescription}>{plan.description}</p>
                </div>

                <div className={styles.priceBlock}>
                  <span className={styles.currency}>R$</span>
                  <span className={styles.amount}>{formatPrice(plan.price_brl)}</span>
                  <span className={styles.period}>
                    {plan.slug === 'semestral' ? '/semestre' : plan.slug === 'anual' ? '/ano' : '/mês'}
                  </span>
                </div>

                {plan.trial_days > 0 && (
                  <div className={styles.trial}>
                    🎁 {plan.trial_days} dias grátis para testar
                  </div>
                )}

                <ul className={styles.features}>
                  {(Array.isArray(plan.features) ? plan.features : []).map((f, i) => (
                    <li key={i}>
                      <span className={styles.check}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={`btn ${plan.is_featured ? 'btn-accent' : 'btn-primary'} ${styles.ctaBtn}`}
                  onClick={() => handleAssinar(plan.slug)}
                >
                  Assinar {plan.name}
                </button>
              </div>
            ))}
          </div>
        )}

        <p className={styles.disclaimer}>
          Pagamento seguro via Stripe. Cancele a qualquer momento, sem multas.
          <br />
          <a
            href={`${PLATFORM_URL}/planos`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver comparativo completo dos planos →
          </a>
        </p>
      </div>
    </section>
  );
};

export default Pricing;
