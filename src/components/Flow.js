import ReactFlow, { Controls, Background,applyEdgeChanges,applyNodeChanges,addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import initialNodes from './nodes1';
// import initialEdges from "./edges1" 
import { useState,useCallback } from 'react';
export const Flow =()=>{
const initialEdges=[]
    const [nodes,setNodes]= useState(initialNodes);
    const [edges,setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [],
      );
      const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [],
      );
      const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [],
      );
    
    return(
        <div style={{ width: '100vw', height: '100vh'}}>
            <ReactFlow 
            nodes={nodes} 
            onNodesChange={onNodesChange} 
            edges={edges}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            >
                <Controls/>
                <Background/>
            </ReactFlow>
        </div>
    )
}