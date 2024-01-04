import { useCallback } from 'react';
import ReactFlow, {  useReactFlow } from 'reactflow';
import 'reactflow/dist/style.css';

import defaultNodes from './node2.js';
import defaultEdges from './edge2.js';
import './button.css';


const edgeOptions = {
//   animated: true,
  style: {
    stroke: 'red',
  },
};

const connectionLineStyle = { stroke: 'blue' };

let nodeId = 0;

export const UncontrolledFlow=()=> {
  const reactFlowInstance = useReactFlow();
  const onClick = useCallback(() => {
    const id = `${++nodeId}`;
    const newNode = {
      id,
      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
      data: {
        label: `Node ${id}`,
      },
    };
    reactFlowInstance.addNodes(newNode);
  }, []);

  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <ReactFlow
        defaultNodes={defaultNodes}
        defaultEdges={defaultEdges}
        defaultEdgeOptions={edgeOptions}
        fitView
        style={{
          backgroundColor: '#FFFFFF',
        }}
        connectionLineStyle={connectionLineStyle}
      />
      <button onClick={onClick} className="btn-add">
        add node
      </button>
    </div>
  );
}


