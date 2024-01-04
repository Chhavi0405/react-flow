import ReactFlow, { MiniMap,Controls,Background, Panel  } from 'reactflow';
import 'reactflow/dist/style.css';
import { useState } from 'react';
import defaultNodes from './nodes.js';
import defaultEdges from './edges.js';

const nodeColor = (node) => {
  switch (node.type) {
    case 'input':
      return '#6ede87';
    case 'output':
      return '#6865A5';
    default:
      return '#ff0072';
  }
};

export const Plugins=()=> {
    const [variant, setVariant] = useState('cross');
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
    <ReactFlow defaultNodes={defaultNodes} defaultEdges={defaultEdges} fitView>
    <Background color="#ccc" variant={variant} />
      <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable />
      <Controls/>
      {/* <Panel>
        <div>variant:</div>
        <button onClick={() => setVariant('dots')}>dots</button>
        <button onClick={() => setVariant('lines')}>lines</button>
        <button onClick={() => setVariant('cross')}>cross</button>
      </Panel> */}
      <Panel position="top-left">top-left</Panel>
      <Panel position="top-center">top-center</Panel>
      <Panel position="top-right">top-right</Panel>
      <Panel position="bottom-left">bottom-left</Panel>
      <Panel position="bottom-center">bottom-center</Panel>
      <Panel position="bottom-right">bottom-right</Panel>
    </ReactFlow>
    </div>
  );
}


