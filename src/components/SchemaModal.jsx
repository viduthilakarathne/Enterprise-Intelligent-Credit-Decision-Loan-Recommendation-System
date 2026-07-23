import React, { useState, useEffect } from 'react';
import { X, Database, Table, Layers, Radio, Key, Tag } from 'lucide-react';

export default function SchemaModal({ onClose }) {
  const [schemaData, setSchemaData] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8001/schema')
      .then((res) => res.json())
      .then((data) => setSchemaData(data))
      .catch((err) => console.error('Failed to fetch schema:', err));
  }, []);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '850px' }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Database size={20} style={{ color: 'var(--blue-primary)' }} />
            <span className="modal-title">Enterprise Data Warehouse & Feature Store Schema</span>
          </div>
          <button className="modal-close" onClick={onClose}><X size={20} /></button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Snowflake & Postgres Tables */}
          <div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Table size={16} style={{ color: '#0ea5e9' }} />
              <span>1. Snowflake Data Warehouse & Relational DB Tables</span>
            </h3>
            
            <div className="panel-row">
              <div className="panel-card" style={{ padding: '0.85rem' }}>
                <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#0ea5e9', marginBottom: '0.4rem' }}>
                  Snowflake DW (Analytics & Customer 360)
                </div>
                <div className="card-list">
                  <div className="card-list-item">
                    <Key size={12} style={{ color: '#0ea5e9' }} />
                    <span><b>customer_360</b>: [customer_id, age, salary, credit_score, savings, risk_score]</span>
                  </div>
                  <div className="card-list-item">
                    <Key size={12} style={{ color: '#0ea5e9' }} />
                    <span><b>historical_transactions</b>: [tx_id, customer_id, amount, merchant_cat, timestamp]</span>
                  </div>
                  <div className="card-list-item">
                    <Key size={12} style={{ color: '#0ea5e9' }} />
                    <span><b>loan_scheme_performance</b>: [scheme_id, total_disbursed, default_rate, avg_rate]</span>
                  </div>
                </div>
              </div>

              <div className="panel-card" style={{ padding: '0.85rem' }}>
                <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#3b82f6', marginBottom: '0.4rem' }}>
                  PostgreSQL (Operational RDBMS)
                </div>
                <div className="card-list">
                  <div className="card-list-item">
                    <Key size={12} style={{ color: '#3b82f6' }} />
                    <span><b>users</b>: [user_id, email, hashed_password, role, created_at]</span>
                  </div>
                  <div className="card-list-item">
                    <Key size={12} style={{ color: '#3b82f6' }} />
                    <span><b>loan_schemes</b>: [scheme_id, scheme_name, base_interest_rate, min_score]</span>
                  </div>
                  <div className="card-list-item">
                    <Key size={12} style={{ color: '#3b82f6' }} />
                    <span><b>eligibility_rules</b>: [rule_id, scheme_id, min_income, max_dti, active_flag]</span>
                  </div>
                  <div className="card-list-item">
                    <Key size={12} style={{ color: '#3b82f6' }} />
                    <span><b>audit_logs</b>: [log_id, customer_id, predicted_scheme, approval_prob]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Store Schema */}
          <div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Layers size={16} style={{ color: 'var(--green-primary)' }} />
              <span>2. Feast / Hopsworks Feature Store Schema</span>
            </h3>
            <div className="outputs-grid">
              {schemaData?.feature_store_features ? (
                schemaData.feature_store_features.map((f) => (
                  <div key={f.name} className="output-card" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--green-badge)' }}>{f.name}</span>
                      <span className="badge badge-green">{f.type}</span>
                    </div>
                    <span style={{ fontSize: '0.68rem', color: 'var(--text-secondary)' }}>{f.desc}</span>
                  </div>
                ))
              ) : (
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Loading live feature schema...</div>
              )}
            </div>
          </div>

          {/* Streaming Kafka Topics */}
          <div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Radio size={16} style={{ color: 'var(--purple-primary)' }} />
              <span>3. Streaming Kafka Event Topics (10 Partitions)</span>
            </h3>
            <div className="feature-cards-grid">
              {schemaData?.kafka_topics?.map((topic) => (
                <div key={topic} className="feature-pill" style={{ background: 'var(--purple-light)', color: 'var(--purple-primary)', borderColor: 'var(--purple-border)' }}>
                  {topic}
                </div>
              ))}
            </div>
          </div>

        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
          <button className="btn btn-primary" onClick={onClose}>Close Schema Viewer</button>
        </div>
      </div>
    </div>
  );
}
