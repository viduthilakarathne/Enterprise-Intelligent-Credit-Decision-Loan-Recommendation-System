export const DATA_SOURCES = [
  { id: 'ds1', name: 'Customer Onboarding', desc: 'Web & Mobile Apps', icon: 'UserPlus' },
  { id: 'ds2', name: 'Branch Information', desc: 'Core Banking System (CBS)', icon: 'Building2' },
  { id: 'ds3', name: 'Customer Profile', desc: 'Enterprise CRM System', icon: 'Contact' },
  { id: 'ds4', name: 'Income & Salary Data', desc: 'Payroll & Tax Directives', icon: 'Wallet' },
  { id: 'ds5', name: 'Employment Details', desc: 'Employer & Industry Grade', icon: 'Briefcase' },
  { id: 'ds6', name: 'Credit Bureau Score', desc: 'Equifax / Experian Stream', icon: 'ShieldCheck' },
  { id: 'ds7', name: 'Transaction History', desc: 'Card & Transfer Ledger', icon: 'CreditCard' },
  { id: 'ds8', name: 'Savings & Deposits', desc: 'FD / RD & Balance Records', icon: 'PiggyBank' },
  { id: 'ds9', name: 'Existing Loans', desc: 'Active Liabilities & Repayments', icon: 'Landmark' },
  { id: 'ds10', name: 'Market Interest Rates', desc: 'Central Bank Policy Stream', icon: 'TrendingUp' },
  { id: 'ds11', name: 'Customer Feedback', desc: 'CSAT & NPS Survey Data', icon: 'MessageSquare' }
];

export const KAFKA_TOPICS = [
  'customer_events',
  'profile_updates',
  'salary_updates',
  'transaction_events',
  'credit_score_updates',
  'loan_applications',
  'branch_updates',
  'market_updates',
  'recommendation_requests',
  'feedback_events (Feedback Loop)'
];

export const FEATURE_STORE_DETAILS = {
  name: 'Feast / Hopsworks Feature Store',
  desc: 'Centralized Enterprise Feature Management',
  onlineStore: 'Redis Low-Latency Cache (<2ms)',
  offlineStore: 'Snowflake Parquet Feature Lake',
  features: [
    { name: 'Branch Category', type: 'Categorical' },
    { name: 'Customer Age', type: 'Numeric' },
    { name: 'Monthly Salary', type: 'Numeric' },
    { name: 'Employment Type', type: 'Categorical' },
    { name: 'Credit Score', type: 'Numeric' },
    { name: 'Existing Loans', type: 'Numeric' },
    { name: 'Monthly Expenses', type: 'Numeric' },
    { name: 'Debt-to-Income Ratio', type: 'Numeric' },
    { name: 'Savings Balance', type: 'Numeric' },
    { name: 'Transaction Behaviour', type: 'Vector' },
    { name: 'Loan History', type: 'Categorical' },
    { name: 'Customer Risk Score', type: 'Numeric' }
  ]
};

export const SPARK_PIPELINE = [
  { step: '1. Data Ingestion', desc: 'Streaming & Batch Kafka Ingestion' },
  { step: '2. Data Validation', desc: 'Great Expectations & Schema Enforcer' },
  { step: '3. Data Cleaning', desc: 'Deduplication & Missing Value Imputation' },
  { step: '4. Feature Engineering', desc: 'PySpark Windowing & Vector Aggregations' },
  { step: '5. Sync to Feature Store', desc: 'Feast Online Redis + Offline Snowflake' }
];

export const STORAGE_NODES = {
  snowflakeDW: [
    'Customer 360 Analytics',
    'Historical Transactions',
    'Recommendation Analytics',
    'Loan Scheme Performance',
    'Business Reports',
    'Aggregated Data'
  ],
  snowflakeDL: [
    'Raw Data Lake',
    'Processed Parquet Data',
    'Feast Feature Store',
    'ML Features Matrix',
    'Model Artifacts Store'
  ],
  postgres: [
    'Users & Roles',
    'Loan Schemes Master',
    'Eligibility Rules',
    'Recommendations Log',
    'Audit Logs'
  ]
};

export const CICD_PIPELINE = {
  title: 'CI/CD MLOps Automation',
  tech: 'GitHub Actions / GitLab CI',
  steps: [
    '1. Automated Code Linting & Unit Tests',
    '2. Data & Model Drift Validation',
    '3. Automated Model Retraining Trigger',
    '4. MLflow Artifact Registration',
    '5. Zero-Downtime Blue/Green Canary Deployment'
  ]
};

export const AIRFLOW_WORKFLOW = [
  '1. Ingest Customer Data',
  '2. Validate Data',
  '3. Feature Engineering',
  '4. Update Feature Store',
  '5. Train ML Models (XGBoost)',
  '6. Evaluate Models',
  '7. Log Metrics to MLflow',
  '8. Register Model in Registry',
  '9. Deploy Model to FastAPI',
  '10. Run Batch Predictions',
  '11. Generate Reports',
  '12. Trigger Feedback Retraining'
];

export const MLFLOW_CAPABILITIES = [
  'Experiment Tracking',
  'Model Registry',
  'Model Versioning',
  'Hyperparameter Tracking (XGBoost)',
  'Model Evaluation & Metrics',
  'Stage Management (Staging / Prod)',
  'Model Lineage Tracking',
  'Model Governance & Auditing'
];

export const ML_MODELS = [
  { name: 'XGBoost (Production)', isProduction: true, accuracy: '96.8%', roc_auc: '0.984' },
  { name: 'LightGBM', isProduction: false, accuracy: '95.4%', roc_auc: '0.971' },
  { name: 'CatBoost', isProduction: false, accuracy: '95.1%', roc_auc: '0.968' },
  { name: 'Random Forest', isProduction: false, accuracy: '92.3%', roc_auc: '0.942' },
  { name: 'Logistic Regression', isProduction: false, accuracy: '86.5%', roc_auc: '0.880' },
  { name: 'Neural Network', isProduction: false, accuracy: '94.8%', roc_auc: '0.965' },
  { name: 'Collaborative Filtering', isProduction: false, accuracy: '91.2%', roc_auc: '0.931' },
  { name: 'Hybrid Recommendation Model', isProduction: false, accuracy: '95.9%', roc_auc: '0.976' }
];

export const EXPLAINABLE_AI = {
  title: 'Explainable AI (XAI Engine)',
  tech: 'SHAP (SHapley Additive exPlanations) + LIME',
  desc: 'Provides transparent feature attribution & decision breakdown for every loan recommendation.',
  shapFeatures: [
    { feature: 'Credit Score', impact: '+35%', direction: 'Positive' },
    { feature: 'Monthly Salary', impact: '+28%', direction: 'Positive' },
    { feature: 'Savings Balance', impact: '+15%', direction: 'Positive' },
    { feature: 'Debt-to-Income (DTI)', impact: '-14%', direction: 'Negative' },
    { feature: 'Existing Loans Count', impact: '-8%', direction: 'Negative' }
  ]
};

export const FASTAPI_ENDPOINTS = [
  { method: 'POST', path: '/predict', desc: 'Predict loan eligibility & risk score' },
  { method: 'POST', path: '/recommend', desc: 'XGBoost personalized scheme recommendation' },
  { method: 'POST', path: '/explain', desc: 'SHAP Explainable AI feature attribution waterfall' },
  { method: 'POST', path: '/feedback', desc: 'Ingest customer conversion feedback loop event' },
  { method: 'POST', path: '/eligibility', desc: 'Rule-based compliance & bank policy check' },
  { method: 'GET', path: '/schema', desc: 'Enterprise Data Warehouse & Feature Store Schema' },
  { method: 'GET', path: '/health', desc: 'Liveness & readiness health probe' },
  { method: 'GET', path: '/metrics', desc: 'Prometheus metrics & SLA telemetry' }
];

export const FEEDBACK_LOOP = {
  title: 'Continuous Feedback Loop',
  desc: 'Real-time feedback cycle streaming customer loan acceptances, rejections, and repayment events back into Kafka.',
  steps: [
    '1. Customer accepts / rejects recommended scheme',
    '2. Event published to Kafka `feedback_events` topic',
    '3. Real-time conversion metric logged to Prometheus',
    '4. Airflow triggers automated retraining when drift > 0.05',
    '5. Updated XGBoost model deployed seamlessly via MLflow'
  ]
};

export const SECURITY_CLOUD_LAYER = {
  title: 'Security & Cloud Infrastructure',
  cloudProviders: ['AWS (Amazon Web Services)', 'Microsoft Azure', 'GCP'],
  securityFeatures: [
    'OAuth 2.0 / OIDC Identity Authentication',
    'TLS 1.3 End-to-End In-Transit Encryption',
    'AWS KMS / Azure Key Vault At-Rest Encryption',
    'Role-Based Access Control (RBAC) & IAM Policies',
    'Virtual Private Cloud (VPC) Peering & WAF Firewall',
    'SOC 2 & PCI-DSS Banking Compliance'
  ]
};

export const MONITORING_ITEMS = [
  { name: 'Grafana Dashboard', desc: 'Real-time telemetry & latency graphs' },
  { name: 'Prometheus Metrics', desc: 'Scrape targets & counter monitors' },
  { name: 'XGBoost Performance', desc: 'Precision, Recall, ROC-AUC (0.984)' },
  { name: 'SHAP Explainability', desc: 'Real-time feature attribution tracking' },
  { name: 'Data Drift Monitoring', desc: 'KS-test & PSI distribution shifts' },
  { name: 'Feature Drift Monitoring', desc: 'Feature importance & value drift' },
  { name: 'API Latency SLA', desc: 'p95 & p99 SLA response times (<15ms)' },
  { name: 'Feedback Conversion', desc: 'Recommendation acceptance rate' }
];

export const ALERT_CHANNELS = ['Email', 'SMS', 'Push Notifications', 'Slack Webhook'];

export const FRONTEND_APPS = {
  web: {
    title: 'Web Dashboard',
    tech: 'Next.js + React',
    features: [
      'Customer Search',
      'Customer 360 View',
      'Recommended Loan Schemes',
      'Eligibility Checker',
      'Loan Comparison',
      'Explainable AI (SHAP Waterfall)',
      'Analytics Dashboard',
      'Feedback & Conversion Tracker'
    ]
  },
  mobile: {
    title: 'Mobile App',
    tech: 'React Native',
    features: [
      'Customer Login',
      'Eligibility Check',
      'View Recommended Schemes',
      'Apply for Loan',
      'Notifications & Alerts',
      'Application Tracking'
    ]
  }
};

export const INFRASTRUCTURE_LOGOS = [
  { name: 'Docker', tag: 'Containerization' },
  { name: 'Apache Kafka', tag: 'Streaming' },
  { name: 'Apache Spark', tag: 'Data Engine' },
  { name: 'Feast Feature Store', tag: 'Feature Store' },
  { name: 'Apache Airflow', tag: 'Orchestration' },
  { name: 'MLflow', tag: 'MLOps' },
  { name: 'XGBoost', tag: 'Production ML' },
  { name: 'SHAP / LIME', tag: 'Explainable AI' },
  { name: 'FastAPI', tag: 'Serving REST' },
  { name: 'Snowflake', tag: 'Data Cloud' },
  { name: 'PostgreSQL', tag: 'RDBMS' },
  { name: 'GitHub Actions', tag: 'CI/CD' },
  { name: 'Prometheus & Grafana', tag: 'Monitoring' },
  { name: 'AWS / Azure KMS', tag: 'Cloud Security' },
  { name: 'React & Next.js', tag: 'Frontend UI' }
];

export const SYSTEM_OVERVIEW_POINTS = [
  'Customer data arrives from multiple banking systems.',
  'Kafka streams customer events & feedback in real time.',
  'Spark cleans and registers features in Feast Feature Store.',
  'Snowflake DW stores Customer 360 enterprise analytics.',
  'XGBoost ML model generates personalized recommendations.',
  'SHAP Explainable AI provides transparent feature attributions.',
  'MLflow & CI/CD manage model lifecycle, versioning, and deployment.',
  'FastAPI serves low-latency predictions (<15ms).',
  'React and Next.js dashboards display recommendations & XAI.',
  'Monitoring & Feedback Loop trigger automated retraining.'
];

export const KEY_BENEFITS = [
  'Personalized Loan Recommendations (XGBoost)',
  'Dedicated Feast Feature Store (Redis + Snowflake)',
  'Explainable AI (SHAP Feature Attributions)',
  'Automated MLOps & CI/CD Pipelines',
  'Continuous Customer Feedback Loop',
  'Bank-Grade Security (TLS 1.3, KMS, OAuth2)',
  'Real-Time Eligibility & Risk Scoring',
  'Low-Latency Predictions (<15ms SLA)',
  'Cloud-Native Multi-Region Architecture',
  'Enterprise Data Warehouse & Analytics'
];

export const SNOWFLAKE_PLATFORM_ITEMS = [
  'Enterprise Data Warehouse',
  'Customer 360 Analytics',
  'Historical Loan Analytics',
  'Business Intelligence',
  'Integration with Power BI, Tableau, Looker',
  'Secure Data Sharing',
  'Batch and Real-Time Analytics'
];

export const OUTPUTS_ITEMS = [
  { title: 'Recommended Loan Schemes', icon: 'Award' },
  { title: 'Eligibility Score', icon: 'Gauge' },
  { title: 'Approval Probability', icon: 'CheckCircle2' },
  { title: 'EMI Estimation', icon: 'Calculator' },
  { title: 'Interest Rate Recommendation', icon: 'Percent' },
  { title: 'SHAP Explainable AI Breakdown', icon: 'Sparkles' },
  { title: 'Customer & Analytics Dashboard', icon: 'LayoutDashboard' },
  { title: 'Feedback Loop & Alerts', icon: 'Bell' }
];
