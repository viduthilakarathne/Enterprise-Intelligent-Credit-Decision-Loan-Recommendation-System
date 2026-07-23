import React from 'react';
import { 
  Database, Cpu, GitBranch, Workflow, Activity, Layers, Radio, Server, 
  Smartphone, Monitor, ArrowRight, ShieldCheck, Zap, Award, Gauge, 
  Calculator, Percent, LayoutDashboard, LineChart, Bell, UserPlus, 
  Building2, Contact, Wallet, Briefcase, CreditCard, PiggyBank, 
  Landmark, TrendingUp, MessageSquare, ChevronDown, Check, Star,
  Shield, Sparkles, RefreshCw, GitCommit, Lock, Cloud
} from 'lucide-react';

import { 
  DATA_SOURCES, KAFKA_TOPICS, SPARK_PIPELINE, FEATURE_STORE_DETAILS, 
  STORAGE_NODES, CICD_PIPELINE, AIRFLOW_WORKFLOW, MLFLOW_CAPABILITIES, 
  ML_MODELS, EXPLAINABLE_AI, FASTAPI_ENDPOINTS, FEEDBACK_LOOP, 
  SECURITY_CLOUD_LAYER, MONITORING_ITEMS, ALERT_CHANNELS, 
  FRONTEND_APPS, INFRASTRUCTURE_LOGOS 
} from '../data/architectureData';

const iconMap = {
  UserPlus: <UserPlus size={14} />,
  Building2: <Building2 size={14} />,
  Contact: <Contact size={14} />,
  Wallet: <Wallet size={14} />,
  Briefcase: <Briefcase size={14} />,
  ShieldCheck: <ShieldCheck size={14} />,
  CreditCard: <CreditCard size={14} />,
  PiggyBank: <PiggyBank size={14} />,
  Landmark: <Landmark size={14} />,
  TrendingUp: <TrendingUp size={14} />,
  MessageSquare: <MessageSquare size={14} />
};

export default function ArchitectureCanvas({ onSelectNode, isAnimating }) {
  return (
    <div className="diagram-canvas-container" id="architecture-diagram">
      <div className="architecture-grid">

        {/* 1. DATA SOURCES (Blue) */}
        <div className="arch-column column-blue">
          <div className="column-header">
            <div className="column-icon-badge">1</div>
            <div className="column-title">Data Sources</div>
          </div>
          
          <div className="card-subtitle" style={{ fontSize: '0.72rem', fontStyle: 'italic' }}>
            Banking Systems & Customer Touchpoints
          </div>

          <div className="card-list">
            {DATA_SOURCES.map((ds) => (
              <div 
                key={ds.id} 
                className="component-card"
                onClick={() => onSelectNode({ title: ds.name, type: 'Data Source', desc: ds.desc })}
              >
                <div className="card-name">
                  {iconMap[ds.icon] || <Database size={14} />}
                  <span>{ds.name}</span>
                </div>
                <div className="card-desc">{ds.desc}</div>
              </div>
            ))}
          </div>

          <div className="column-arrow-next"><ArrowRight size={14} /></div>
        </div>

        {/* 2. STREAMING LAYER (Purple) */}
        <div className="arch-column column-purple">
          <div className="column-header">
            <div className="column-icon-badge">2</div>
            <div className="column-title">Streaming Layer</div>
          </div>

          <div className="component-card" onClick={() => onSelectNode({ title: 'Apache Kafka Event Bus', type: 'Streaming Cluster', desc: 'Distributed real-time streaming engine with 10 event topic partitions' })}>
            <div className="card-name" style={{ color: 'var(--purple-primary)', fontSize: '0.88rem' }}>
              <Radio size={16} />
              <span>Apache Kafka</span>
            </div>
            <div className="card-desc">Real-Time Event Stream Bus</div>
          </div>

          <div className="card-subtitle" style={{ fontSize: '0.72rem', fontWeight: 700 }}>
            Kafka Event Topics:
          </div>

          <div className="card-list">
            {KAFKA_TOPICS.map((topic) => (
              <div 
                key={topic} 
                className={`card-list-item ${topic.includes('Feedback') ? 'highlight-prod' : ''}`}
                onClick={() => onSelectNode({ title: `Kafka Topic: ${topic}`, type: 'Kafka Event Stream', desc: 'Pub/Sub topic streaming live financial updates' })}
              >
                <span style={{ color: 'var(--purple-primary)' }}>•</span>
                <span>{topic}</span>
              </div>
            ))}
          </div>

          {/* Feedback Loop Indicator */}
          <div className="component-card" style={{ marginTop: '0.4rem', border: '1px dashed var(--purple-primary)', background: 'var(--purple-light)' }} onClick={() => onSelectNode({ title: FEEDBACK_LOOP.title, type: 'Feedback Mechanism', desc: FEEDBACK_LOOP.desc })}>
            <div className="card-name" style={{ color: 'var(--purple-primary)', fontSize: '0.78rem' }}>
              <RefreshCw size={14} />
              <span>Feedback Stream</span>
            </div>
            <div className="card-desc">Customer Acceptances ➔ Kafka Topic</div>
          </div>

          <div className="column-arrow-next"><ArrowRight size={14} /></div>
        </div>

        {/* 3. DEDICATED FEATURE STORE & PROCESSING (Green) */}
        <div className="arch-column column-green">
          <div className="column-header">
            <div className="column-icon-badge">3</div>
            <div className="column-title">Feature Store & Spark</div>
          </div>

          <div className="component-card" onClick={() => onSelectNode({ title: FEATURE_STORE_DETAILS.name, type: 'Dedicated Feature Store', desc: `${FEATURE_STORE_DETAILS.desc}. Online: ${FEATURE_STORE_DETAILS.onlineStore}, Offline: ${FEATURE_STORE_DETAILS.offlineStore}` })}>
            <div className="card-name" style={{ color: 'var(--green-primary)', fontSize: '0.88rem' }}>
              <Layers size={16} />
              <span>Feast Feature Store</span>
            </div>
            <div className="card-desc">Online Redis Cache + Offline Lake</div>
          </div>

          <div className="component-card" onClick={() => onSelectNode({ title: 'Apache Spark (PySpark)', type: 'Data Engine', desc: 'Distributed feature engineering & PySpark ETL pipeline' })}>
            <div className="card-name" style={{ fontSize: '0.82rem' }}>
              <Cpu size={14} style={{ color: 'var(--green-primary)' }} />
              <span>Apache Spark Pipeline</span>
            </div>
            <div className="card-desc">Distributed Feature Extraction</div>
          </div>

          <div className="pipeline-steps">
            {SPARK_PIPELINE.map((p, idx) => (
              <React.Fragment key={p.step}>
                <div 
                  className="pipeline-step"
                  onClick={() => onSelectNode({ title: p.step, type: 'Spark Processing Step', desc: p.desc })}
                >
                  <span>{p.step}</span>
                </div>
                {idx < SPARK_PIPELINE.length - 1 && (
                  <div className="pipeline-step-arrow"><ChevronDown size={10} /></div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="card-subtitle" style={{ fontSize: '0.72rem', fontWeight: 700, marginTop: '0.4rem' }}>
            Feature Store Features (12):
          </div>
          <div className="feature-cards-grid">
            {FEATURE_STORE_DETAILS.features.map((f) => (
              <div key={f.name} className="feature-pill" title={f.name}>{f.name}</div>
            ))}
          </div>

          <div className="card-subtitle" style={{ fontSize: '0.72rem', fontWeight: 700, marginTop: '0.5rem' }}>
            Enterprise Warehouses:
          </div>

          <div className="component-card" onClick={() => onSelectNode({ title: 'Snowflake Data Warehouse', type: 'Data Warehouse', desc: 'Stores Customer 360, Historical Transactions & Analytics' })}>
            <div className="card-name" style={{ fontSize: '0.76rem' }}>
              <Database size={14} style={{ color: '#0ea5e9' }} />
              <span>Snowflake DW</span>
            </div>
            <div className="card-desc">Customer 360 & Analytics</div>
          </div>

          <div className="component-card" onClick={() => onSelectNode({ title: 'PostgreSQL DB', type: 'Operational DB', desc: 'Stores Users, Loan Schemes, Eligibility Rules & Audit Logs' })}>
            <div className="card-name" style={{ fontSize: '0.76rem' }}>
              <Server size={14} style={{ color: '#3b82f6' }} />
              <span>PostgreSQL DB</span>
            </div>
            <div className="card-desc">Operational RDBMS</div>
          </div>

          <div className="column-arrow-next"><ArrowRight size={14} /></div>
        </div>

        {/* 4. CI/CD & ORCHESTRATION (Blue) */}
        <div className="arch-column column-blue">
          <div className="column-header">
            <div className="column-icon-badge">4</div>
            <div className="column-title">CI/CD & Airflow</div>
          </div>

          <div className="component-card" onClick={() => onSelectNode({ title: CICD_PIPELINE.title, type: 'CI/CD MLOps Engine', desc: 'Automated linting, drift testing, model retraining & canary deployment' })}>
            <div className="card-name" style={{ color: 'var(--blue-primary)', fontSize: '0.85rem' }}>
              <GitCommit size={16} />
              <span>GitHub Actions CI/CD</span>
            </div>
            <div className="card-desc">Automated Testing & Deployment</div>
          </div>

          <div className="component-card" onClick={() => onSelectNode({ title: 'Apache Airflow', type: 'Workflow Scheduler', desc: 'Automated DAG orchestration for end-to-end MLOps pipeline' })}>
            <div className="card-name" style={{ fontSize: '0.82rem' }}>
              <Workflow size={14} style={{ color: 'var(--blue-primary)' }} />
              <span>Apache Airflow DAG</span>
            </div>
            <div className="card-desc">Automated MLOps Scheduler</div>
          </div>

          <div className="card-subtitle" style={{ fontSize: '0.72rem', fontWeight: 700 }}>
            DAG Workflow Steps:
          </div>

          <div className="pipeline-steps">
            {AIRFLOW_WORKFLOW.map((wf, idx) => (
              <React.Fragment key={wf}>
                <div 
                  className="pipeline-step"
                  onClick={() => onSelectNode({ title: wf, type: 'Airflow Task', desc: `DAG Task Step #${idx+1} execution node` })}
                >
                  <span>{wf}</span>
                </div>
                {idx < AIRFLOW_WORKFLOW.length - 1 && (
                  <div className="pipeline-step-arrow"><ChevronDown size={10} /></div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="column-arrow-next"><ArrowRight size={14} /></div>
        </div>

        {/* 5. MODEL LIFECYCLE (Orange) */}
        <div className="arch-column column-orange">
          <div className="column-header">
            <div className="column-icon-badge">5</div>
            <div className="column-title">Model Lifecycle</div>
          </div>

          <div className="component-card" onClick={() => onSelectNode({ title: 'MLflow Ecosystem', type: 'MLOps Registry', desc: 'Experiment tracking, registry, auditing & lineage for XGBoost model' })}>
            <div className="card-name" style={{ color: 'var(--orange-primary)', fontSize: '0.88rem' }}>
              <GitBranch size={16} />
              <span>MLflow Registry</span>
            </div>
            <div className="card-desc">ML Management & Versioning</div>
          </div>

          <div className="card-subtitle" style={{ fontSize: '0.72rem', fontWeight: 700 }}>
            Lifecycle Modules:
          </div>

          <div className="card-list">
            {MLFLOW_CAPABILITIES.map((cap) => (
              <div 
                key={cap} 
                className="card-list-item"
                onClick={() => onSelectNode({ title: cap, type: 'MLflow Module', desc: `Automated lifecycle component: ${cap}` })}
              >
                <span style={{ color: 'var(--orange-primary)' }}>✓</span>
                <span>{cap}</span>
              </div>
            ))}
          </div>

          <div className="column-arrow-next"><ArrowRight size={14} /></div>
        </div>

        {/* 6. ML RECOMMENDATION & SERVING (Teal - XGBoost Highlighted) */}
        <div className="arch-column column-teal">
          <div className="column-header">
            <div className="column-icon-badge">6</div>
            <div className="column-title">ML Serving & Models</div>
          </div>

          <div className="card-subtitle" style={{ fontSize: '0.72rem', fontWeight: 700 }}>
            Model Candidates & Prod:
          </div>

          <div className="card-list">
            {ML_MODELS.map((model) => (
              <div 
                key={model.name} 
                className={`card-list-item ${model.isProduction ? 'highlight-prod' : ''}`}
                onClick={() => onSelectNode({ title: `${model.name} Model`, type: 'ML Model', desc: `Model accuracy: ${model.accuracy}, ROC-AUC: ${model.roc_auc}. ${model.isProduction ? 'PRODUCTION MODEL LOADED IN FASTAPI (XGBoost v2.4)' : 'Candidate Model'}` })}
              >
                <span>{model.name}</span>
                {model.isProduction && <span className="prod-badge">XGBoost PROD</span>}
              </div>
            ))}
          </div>

          <div className="component-card" style={{ marginTop: '0.5rem', border: '1.5px solid var(--teal-primary)' }} onClick={() => onSelectNode({ title: 'FastAPI REST API', type: 'Prediction Service', desc: 'Asynchronous sub-15ms REST API serving the XGBoost model' })}>
            <div className="card-name" style={{ color: 'var(--teal-primary)', fontSize: '0.85rem' }}>
              <Zap size={16} />
              <span>FastAPI REST API</span>
            </div>
            <div className="card-desc">Loads XGBoost Model from MLflow</div>
          </div>

          <div className="card-subtitle" style={{ fontSize: '0.7rem', fontWeight: 700 }}>
            API Endpoints:
          </div>

          <div className="card-list">
            {FASTAPI_ENDPOINTS.slice(0, 5).map((ep) => (
              <div 
                key={ep.path} 
                className="card-list-item"
                onClick={() => onSelectNode({ title: `${ep.method} ${ep.path}`, type: 'FastAPI Endpoint', desc: ep.desc })}
              >
                <span style={{ fontWeight: 800, color: ep.method === 'POST' ? 'var(--blue-primary)' : 'var(--green-primary)' }}>{ep.method}</span>
                <span>{ep.path}</span>
              </div>
            ))}
          </div>

          <div className="column-arrow-next"><ArrowRight size={14} /></div>
        </div>

        {/* 7. EXPLAINABLE AI & MONITORING (Red) */}
        <div className="arch-column column-red">
          <div className="column-header">
            <div className="column-icon-badge">7</div>
            <div className="column-title">Explainable AI & Mon.</div>
          </div>

          {/* Explainable AI Highlight Card */}
          <div className="component-card" style={{ border: '1.5px solid var(--red-primary)', background: 'var(--red-light)' }} onClick={() => onSelectNode({ title: EXPLAINABLE_AI.title, type: 'XAI Engine', desc: `${EXPLAINABLE_AI.desc} (${EXPLAINABLE_AI.tech})` })}>
            <div className="card-name" style={{ color: 'var(--red-primary)', fontSize: '0.85rem' }}>
              <Sparkles size={16} />
              <span>Explainable AI (SHAP)</span>
            </div>
            <div className="card-desc">SHAP & LIME Feature Attribution</div>
          </div>

          <div className="component-card" onClick={() => onSelectNode({ title: 'Grafana & Prometheus', type: 'Monitoring Stack', desc: 'Real-time telemetry, model drift & API latency monitoring' })}>
            <div className="card-name" style={{ fontSize: '0.82rem' }}>
              <Activity size={14} style={{ color: 'var(--red-primary)' }} />
              <span>Grafana & Prometheus</span>
            </div>
            <div className="card-desc">Real-Time Metrics & SLA</div>
          </div>

          <div className="card-list">
            {MONITORING_ITEMS.map((item) => (
              <div 
                key={item.name} 
                className="card-list-item"
                onClick={() => onSelectNode({ title: item.name, type: 'Monitoring Metric', desc: item.desc })}
              >
                <span style={{ color: 'var(--red-primary)' }}>•</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          <div className="column-arrow-next"><ArrowRight size={14} /></div>
        </div>

        {/* 8. FEEDBACK LOOP & FRONTEND (Pink) */}
        <div className="arch-column column-pink">
          <div className="column-header">
            <div className="column-icon-badge">8</div>
            <div className="column-title">Frontend & Feedback</div>
          </div>

          <div className="component-card" onClick={() => onSelectNode({ title: FRONTEND_APPS.web.title, type: 'Web Dashboard', desc: FRONTEND_APPS.web.tech })}>
            <div className="card-name" style={{ color: 'var(--pink-primary)', fontSize: '0.85rem' }}>
              <Monitor size={16} />
              <span>{FRONTEND_APPS.web.title}</span>
            </div>
            <div className="card-desc">{FRONTEND_APPS.web.tech}</div>
          </div>

          <div className="card-list">
            {FRONTEND_APPS.web.features.slice(0, 5).map((feat) => (
              <div key={feat} className="card-list-item" onClick={() => onSelectNode({ title: feat, type: 'Web Feature', desc: 'Customer dashboard capability' })}>
                <span style={{ color: 'var(--pink-primary)' }}>›</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <div className="component-card" style={{ marginTop: '0.4rem' }} onClick={() => onSelectNode({ title: FRONTEND_APPS.mobile.title, type: 'Mobile App', desc: FRONTEND_APPS.mobile.tech })}>
            <div className="card-name" style={{ color: 'var(--pink-primary)', fontSize: '0.85rem' }}>
              <Smartphone size={16} />
              <span>{FRONTEND_APPS.mobile.title}</span>
            </div>
            <div className="card-desc">{FRONTEND_APPS.mobile.tech}</div>
          </div>

          {/* Feedback loop arrow indicator */}
          <div className="component-card" style={{ marginTop: '0.4rem', border: '1px dashed var(--pink-primary)', background: 'var(--pink-light)' }} onClick={() => onSelectNode({ title: 'Feedback Loop Trigger', type: 'Closed-Loop MLOps', desc: 'Streams loan acceptance/rejection events back to Kafka feedback_events' })}>
            <div className="card-name" style={{ color: 'var(--pink-primary)', fontSize: '0.78rem' }}>
              <RefreshCw size={14} />
              <span>Closed Feedback Loop</span>
            </div>
            <div className="card-desc">Streams Conversion back to Kafka</div>
          </div>

          <div className="column-arrow-next"><ArrowRight size={14} /></div>
        </div>

        {/* 9. INFRASTRUCTURE, SECURITY & CLOUD (Dark Blue) */}
        <div className="arch-column column-darkblue">
          <div className="column-header">
            <div className="column-icon-badge">9</div>
            <div className="column-title">Security & Cloud</div>
          </div>

          {/* Security Layer Card */}
          <div className="component-card" style={{ border: '1px solid var(--darkblue-border)', background: 'var(--darkblue-light)' }} onClick={() => onSelectNode({ title: SECURITY_CLOUD_LAYER.title, type: 'Security Architecture', desc: SECURITY_CLOUD_LAYER.securityFeatures.join('; ') })}>
            <div className="card-name" style={{ color: 'var(--darkblue-primary)', fontSize: '0.82rem' }}>
              <Lock size={14} />
              <span>Bank-Grade Security</span>
            </div>
            <div className="card-desc">OAuth2, TLS 1.3, KMS, RBAC</div>
          </div>

          <div className="card-subtitle" style={{ fontSize: '0.72rem', fontWeight: 700, marginTop: '0.4rem' }}>
            Cloud & Stack Badges:
          </div>

          <div className="card-list">
            {INFRASTRUCTURE_LOGOS.map((infra) => (
              <div 
                key={infra.name} 
                className="card-list-item"
                style={{ justifyContent: 'space-between' }}
                onClick={() => onSelectNode({ title: infra.name, type: 'Infrastructure Component', desc: `Enterprise Tech Stack component: ${infra.tag}` })}
              >
                <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{infra.name}</span>
                <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>{infra.tag}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
