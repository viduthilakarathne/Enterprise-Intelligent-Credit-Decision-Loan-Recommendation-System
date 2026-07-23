import React from 'react';
import { X, Code, Terminal, Info } from 'lucide-react';

export default function NodeModal({ node, onClose }) {
  if (!node) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Info size={20} style={{ color: 'var(--blue-primary)' }} />
            <span className="modal-title">{node.title}</span>
          </div>
          <button className="modal-close" onClick={onClose}><X size={20} /></button>
        </div>

        <div>
          <span className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>{node.type}</span>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            {node.desc}
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Terminal size={14} />
            <span>Sample Implementation Snippet</span>
          </h4>
          <pre className="code-block">
{`# Enterprise ML Architecture Spec: ${node.title}
# Category: ${node.type}

def process_node_event(payload: dict):
    """
    Automated processing block for ${node.title}.
    Ensures strict schema validation, Feast feature store lookup,
    and sub-15ms inference serving contract.
    """
    status = "OK"
    latency_ms = 4.2
    return {
        "component": "${node.title}",
        "status": status,
        "latency_ms": latency_ms,
        "active_schema_version": "v2.4.1"
    }`}
          </pre>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
          <button className="btn btn-primary" onClick={onClose}>Close Inspector</button>
        </div>
      </div>
    </div>
  );
}
