import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ReactTab = () => {
    return (
        <div>
             <Tabs>
    <TabList>
      <Tab>sports car</Tab>
      <Tab>truck</Tab>
      <Tab>police car</Tab>
    </TabList>

    <TabPanel>
      <h2>Sport car</h2>
    </TabPanel>
    <TabPanel>
      <h2>Truck</h2>
    </TabPanel>
    <TabPanel>
      <h2>Police car</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReactTab;