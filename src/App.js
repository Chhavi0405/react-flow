import React from 'react';
import { BasicIntro } from './components/BasicIntro';
import  { CoreConcepts } from './components/CoreConcepts';
import { Plugins } from './components/Plugins';
import { Flow } from './components/Flow';
import { Custom } from './components/Custom';
import { CusEdge } from './components/CustomEdgess';
import  { ReactFlowProvider} from 'reactflow';
import { UncontrolledFlow } from './components/UncontrolledFlow';


 
export default function App() {



  return (
   <div>
    <BasicIntro />
    {/* <CoreConcepts/> */}
    {/* <Plugins/> */}
   {/* <Flow/> */}
  {/* <Custom/> */}
{/* <CusEdge/> */}
{/* <ReactFlowProvider>
        <UncontrolledFlow/>
       </ReactFlowProvider> */}
   </div>
   
  )
}