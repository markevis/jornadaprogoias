import React, { useState } from 'react';
import styles from './Simulator.module.css';

const Simulator = () => {
  const [formData, setFormData] = useState({
    empresa: '',
    faturamento: '',
    icms: '',
    setor: 'Indústria de Transformação',
    investimento: ''
  });

  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [email, setEmail] = useState('');

  const formatCurrencyInput = (value) => {
    let num = value.replace(/\D/g, '');
    if (!num) return '';
    num = (parseFloat(num) / 100).toFixed(2);
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num);
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (['faturamento', 'icms', 'investimento'].includes(name)) {
      value = formatCurrencyInput(value);
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calcularEconomia = (e) => {
    e.preventDefault();
    if (!formData.icms) return;
    
    setLoading(true);
    // Simulating loading for effect
    setTimeout(() => {
      const icmsNum = parseFloat(formData.icms.replace(/[R$\s.,]/g, '') || '0') / 100;
      const investNum = parseFloat(formData.investimento.replace(/[R$\s.,]/g, '') || '0') / 100;

      // Base de 60% conservadora
      const economiaMensal = icmsNum * 0.60;
      const economiaAnual = economiaMensal * 12;
      let roi = null;

      if (investNum > 0 && economiaAnual > 0) {
        roi = ((economiaAnual / investNum) * 100).toFixed(0);
      }

      setResultado({
        mensal: economiaMensal,
        anual: economiaAnual,
        roi: roi
      });

      setFormData({
        empresa: '',
        faturamento: '',
        icms: '',
        setor: 'Indústria de Transformação',
        investimento: ''
      });

      setLoading(false);
      setLeadCaptured(false);
    }, 1200);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulação de Integração com Firebase/CRM via console.log
    console.log('--- LEAD CAPTURADO ---');
    console.log('Email:', email);
    console.log('Dados do Simulador:', formData);
    console.log('Resultado Simulação:', resultado);
    console.log('Plataforma simulada: Mailchimp/Salesforce API (OK)');
    
    setLeadCaptured(true);
  };

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  return (
    <section id="simulator" className={`section ${styles.simulatorSection}`}>
      <div className={`container`}>
        <div className={styles.header}>
          <h2>Simule Sua Economia no ICMS com o ProGoiás</h2>
          <p>Descubra em poucos segundos o potencial de redução de custos para sua empresa. É rápido, fácil e gratuito!</p>
        </div>

        <div className={styles.simulatorWrapper}>
          <div className={styles.formPanel}>
            <form onSubmit={calcularEconomia}>
              <div className={styles.formGroup}>
                <label>Nome da Empresa</label>
                <input required type="text" name="empresa" value={formData.empresa} onChange={handleInputChange} placeholder="Ex: Indústria Alpha LTDA"/>
              </div>

              <div className={styles.formGroup}>
                <label>Faturamento Mensal Médio</label>
                <input required type="text" name="faturamento" value={formData.faturamento} onChange={handleInputChange} placeholder="R$ 0,00"/>
              </div>

              <div className={styles.formGroup}>
                <label>ICMS Médio Pago Mensalmente</label>
                <input required type="text" name="icms" value={formData.icms} onChange={handleInputChange} placeholder="R$ 0,00"/>
              </div>

              <div className={styles.formGroup}>
                <label>Setor de Atuação</label>
                <select name="setor" value={formData.setor} onChange={handleInputChange}>
                  <option value="Indústria de Transformação">Indústria de Transformação</option>
                  <option value="Agronegócio/Agroindústria">Agronegócio/Agroindústria</option>
                  <option value="Indústria Farmacêutica">Indústria Farmacêutica</option>
                  <option value="Tecnologia">Tecnologia</option>
                  <option value="Comércio Atacadista">Comércio Atacadista</option>
                  <option value="Transporte/Logística">Transporte/Logística</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>Investimento Planejado em Goiás (Opcional)</label>
                <input type="text" name="investimento" value={formData.investimento} onChange={handleInputChange} placeholder="R$ 0,00"/>
              </div>

              <button type="submit" className={`btn btn-primary ${styles.calcBtn}`} disabled={loading}>
                {loading ? 'Calculando...' : 'Calcular Minha Economia'}
              </button>
            </form>
          </div>

          <div className={styles.resultPanel}>
            {!resultado && !loading && (
              <div className={styles.emptyState}>
                <div className={styles.iconCalc}>📊</div>
                <h3>Preencha os dados ao lado</h3>
                <p>Para obter uma análise personalizada da sua economia tributária em tempo real.</p>
              </div>
            )}

            {loading && (
              <div className={styles.loadingState}>
                <div className={styles.spinner}></div>
                <p>Processando base de dados do ProGoiás...</p>
              </div>
            )}

            {resultado && !loading && (
              <div className={styles.resultsBox}>
                <h3>Seu Potencial de Economia</h3>
                
                <div className={styles.resultItem}>
                  <span className={styles.label}>Economia Mensal Estimada</span>
                  <span className={styles.valueHighlight}>{formatCurrency(resultado.mensal)}</span>
                </div>
                
                <div className={styles.resultItem}>
                  <span className={styles.label}>Economia Anual Estimada</span>
                  <span className={styles.valueHighlight}>{formatCurrency(resultado.anual)}</span>
                </div>

                {resultado.roi && (
                  <div className={styles.resultItem}>
                    <span className={styles.label}>Potencial de ROI Anual</span>
                    <span className={styles.valueAccent}>{resultado.roi}%</span>
                  </div>
                )}

                <div className={styles.leadCaptureBox}>
                  {!leadCaptured ? (
                    <>
                      <h4>Receber Relatório Completo</h4>
                      <p>Digite seu e-mail para receber a simulação completa e dar o primeiro passo na consultoria.</p>
                      <form onSubmit={handleEmailSubmit} className={styles.leadForm}>
                        <input 
                          type="email" 
                          required 
                          placeholder="Seu melhor e-mail" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                        />
                        <button type="submit" className="btn btn-accent">Enviar</button>
                      </form>
                    </>
                  ) : (
                    <div className={styles.successMsg}>
                      <span className={styles.iconCheck}>✓</span>
                      <h4>Enviado com sucesso!</h4>
                      <p>Sua simulação foi gerada. Nossa equipe técnica entrará em contato em breve.</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simulator;
