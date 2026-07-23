import React, { useState } from 'react';
import { toPng } from 'html-to-image';

import Header from './components/Header';
import ArchitectureCanvas from './components/ArchitectureCanvas';
import BottomPanels from './components/BottomPanels';
import NodeModal from './components/NodeModal';
import SimulatorModal from './components/SimulatorModal';
import SchemaModal from './components/SchemaModal';

import './styles/architecture.css';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [isAnimating, setIsAnimating] = useState(true);
  const [selectedNode, setSelectedNode] = useState(null);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [isSchemaOpen, setIsSchemaOpen] = useState(false);

  const handleExportPNG = () => {
    const node = document.getElementById('full-app-export');
    if (!node) return;

    toPng(node, { 
      quality: 0.95,
      pixelRatio: 2,
      backgroundColor: theme === 'dark' ? '#090d16' : '#f8fafc'
    })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'AI_Powered_Loan_Scheme_Recommendation_System_ML_Architecture.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('PNG export failed:', err);
      });
  };

  return (
    <div className="app-container" data-theme={theme} id="full-app-export">
      <Header 
        theme={theme} 
        setTheme={setTheme} 
        isAnimating={isAnimating} 
        setIsAnimating={setIsAnimating} 
        onExportPNG={handleExportPNG} 
        onOpenSimulator={() => setIsSimulatorOpen(true)} 
        onOpenSchema={() => setIsSchemaOpen(true)}
      />

      <main>
        <ArchitectureCanvas 
          onSelectNode={(node) => setSelectedNode(node)} 
          isAnimating={isAnimating} 
        />

        <BottomPanels />
      </main>

      {/* Node Inspector Modal */}
      {selectedNode && (
        <NodeModal 
          node={selectedNode} 
          onClose={() => setSelectedNode(null)} 
        />
      )}

      {/* ML Recommendation Simulator Modal */}
      {isSimulatorOpen && (
        <SimulatorModal 
          onClose={() => setIsSimulatorOpen(false)} 
        />
      )}

      {/* Enterprise Schema Viewer Modal */}
      {isSchemaOpen && (
        <SchemaModal 
          onClose={() => setIsSchemaOpen(false)} 
        />
      )}
    </div>
  );
}
