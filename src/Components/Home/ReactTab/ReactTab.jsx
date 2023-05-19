import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ReactTab = () => {
    return (
        <div className='mx-auto'>
             <Tabs>
   <div >
   <TabList>
      <Tab>sports car</Tab>
      <Tab>truck</Tab>
      <Tab>police car</Tab>
    </TabList>
   </div>

    <TabPanel>
      <h2>Sport car: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nihil ipsam et laudantium officia tenetur ullam eveniet quos vitae quod fuga distinctio vero adipisci cumque, voluptates molestias consectetur, nisi assumenda.</p></h2>
    </TabPanel>
    <TabPanel>
      <h2>Truck :<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nihil ipsam et laudantium officia tenetur ullam eveniet quos vitae quod fuga distinctio vero adipisci cumque, voluptates molestias consectetur, nisi assumenda.</p></h2>
    </TabPanel>
    <TabPanel>
      <h2>Police car :<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nihil ipsam et laudantium officia tenetur ullam eveniet quos vitae quod fuga distinctio vero adipisci cumque, voluptates molestias consectetur, nisi assumenda.</p></h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReactTab;