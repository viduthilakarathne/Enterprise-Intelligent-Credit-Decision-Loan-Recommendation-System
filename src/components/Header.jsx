import React from 'react';
import { Download, Moon, Sun, Play, Pause, Calculator, Database } from 'lucide-react';

export default function Header({ 
  theme, 
  setTheme, 
  isAnimating, 
  setIsAnimating, 
  onExportPNG, 
  onOpenSimulator,
  onOpenSchema
}) {
  return (
    <header className="app-header">
      <div className="header-title-group">
        <h1>AI-Powered Loan Scheme Recommendation System – Enterprise ML Architecture</h1>
        <div className="header-badges">
          <span className="badge badge-blue">Enterprise ML Architecture</span>
          <span className="badge badge-purple">Real-Time & Batch MLOps</span>
          <span className="badge badge-green">Snowflake + Spark + XGBoost</span>
          <span className="badge badge-dark">4K High-Resolution Ready</span>
        </div>
      </div>

      <div className="header-controls">
        <button 
          className="btn"
          onClick={() => setIsAnimating(!isAnimating)}
          title="Toggle Data Flow Animation"
        >
          {isAnimating ? <Pause size={16} /> : <Play size={16} />}
          <span>{isAnimating ? 'Pause Flow' : 'Animate Flow'}</span>
        </button>

        <button 
          className="btn"
          onClick={onOpenSchema}
          title="View Data Warehouse & Feature Store Database Schema"
        >
          <Database size={16} style={{ color: '#0ea5e9' }} />
          <span>View Schema</span>
        </button>

        <button 
          className="btn btn-purple"
          onClick={onOpenSimulator}
          title="Test ML Recommendation Inference Simulator"
        >
          <Calculator size={16} />
          <span>ML Simulator</span>
        </button>

        <button 
          className="btn btn-primary"
          onClick={onExportPNG}
          title="Export 4K High-Resolution Diagram Image"
        >
          <Download size={16} />
          <span>Export 4K PNG</span>
        </button>

        <button 
          className="btn"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          title="Switch Dark/Light Theme"
        >
          {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        </button>
      </div>
    </header>
  );
}
