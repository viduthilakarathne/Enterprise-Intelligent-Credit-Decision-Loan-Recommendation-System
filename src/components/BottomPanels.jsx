import React from 'react';
import { 
  CheckCircle2, Award, Gauge, Calculator, Percent, LayoutDashboard, 
  LineChart, Bell, Layers, Database, ArrowRight, Activity, ShieldCheck, Zap
} from 'lucide-react';

import { 
  SYSTEM_OVERVIEW_POINTS, KEY_BENEFITS, SNOWFLAKE_PLATFORM_ITEMS, OUTPUTS_ITEMS 
} from '../data/architectureData';

const outputIconMap = {
  Award: <Award size={16} />,
  Gauge: <Gauge size={16} />,
  CheckCircle2: <CheckCircle2 size={16} />,
  Calculator: <Calculator size={16} />,
  Percent: <Percent size={16} />,
  LayoutDashboard: <LayoutDashboard size={16} />,
  LineChart: <LineChart size={16} />,
  Bell: <Bell size={16} />
};

export default function BottomPanels() {
  return (
    <div className="bottom-panels-container">
      
      {/* Top Row: Legend + System Overview */}
      <div className="panel-row">
        
        {/* Flow Legend Panel */}
        <div className="panel-card" style={{ flex: '1 1 300px' }}>
          <div className="panel-header">
            <Activity size={18} style={{ color: 'var(--blue-primary)' }} />
            <h3 className="panel-title">Flow Legend</h3>
          </div>
          <div className="legend-list">
            <div className="legend-item">
              <div className="legend-line legend-line-solid"></div>
              <span>Data Flow (Solid Arrow)</span>
            </div>
            <div className="legend-item">
              <div className="legend-line legend-line-dashed"></div>
              <span>Control Flow (Dashed Arrow)</span>
            </div>
            <div className="legend-item">
              <div className="legend-line legend-line-purple"></div>
              <span>Feedback Flow (Purple Arrow)</span>
            </div>
          </div>
        </div>

        {/* 10-Point System Overview Panel */}
        <div className="panel-card" style={{ flex: '2 1 600px' }}>
          <div className="panel-header">
            <Zap size={18} style={{ color: 'var(--purple-primary)' }} />
            <h3 className="panel-title">System Overview (Architecture Execution Steps)</h3>
          </div>
          <div className="overview-grid">
            {SYSTEM_OVERVIEW_POINTS.map((pt, idx) => (
              <div key={idx} className="overview-point">
                <div className="point-num">{idx + 1}</div>
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Middle Row: Key Benefits + Snowflake Platform */}
      <div className="panel-row">

        {/* Key Benefits Panel */}
        <div className="panel-card" style={{ flex: '1.2 1 450px' }}>
          <div className="panel-header">
            <ShieldCheck size={18} style={{ color: 'var(--green-primary)' }} />
            <h3 className="panel-title">Key Enterprise Benefits</h3>
          </div>
          <div className="benefits-grid">
            {KEY_BENEFITS.map((b) => (
              <div key={b} className="benefit-item">
                <span className="check-icon">✓</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Snowflake Platform Deep-Dive */}
        <div className="panel-card" style={{ flex: '1 1 400px' }}>
          <div className="panel-header">
            <Database size={18} style={{ color: '#0ea5e9' }} />
            <h3 className="panel-title">Snowflake Data Platform</h3>
          </div>
          <div className="card-list">
            {SNOWFLAKE_PLATFORM_ITEMS.map((item) => (
              <div key={item} className="card-list-item">
                <span style={{ color: '#0ea5e9', fontWeight: 800 }}>❖</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Row: Outputs Grid */}
      <div className="panel-card">
        <div className="panel-header">
          <Award size={18} style={{ color: 'var(--teal-primary)' }} />
          <h3 className="panel-title">System Outputs & Deliverables</h3>
        </div>
        <div className="outputs-grid">
          {OUTPUTS_ITEMS.map((out) => (
            <div key={out.title} className="output-card">
              <div className="output-icon">
                {outputIconMap[out.icon] || <Award size={16} />}
              </div>
              <span>{out.title}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
