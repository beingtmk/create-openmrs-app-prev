import React from 'react';
import { Row, Col, Tabs } from 'antd';

const { TabPane } = Tabs;

const ComponentContainer = (props) => {
  const OverviewComponent = props.OverviewComponent;
  const CodeComponent = props.CodeComponent;
  const DemoComponent = props.DemoComponent;
  const componentName = props.componentName;

  return (
    <div style={{margin: "1%", border: "1px solid #4C3C1B", padding: "2%"}}>
      <h2>{componentName}</h2><hr/>
      <Row>
        <Col span={8} >
          <Tabs defaultActiveKey="1">
            <TabPane tab="Overview" key="1">
              <OverviewComponent />
            </TabPane>
            <TabPane tab="View Code" key="2">
              <CodeComponent />
            </TabPane>
          </Tabs>
        </Col>
        <Col span={16}>
          <h3>Demo</h3><hr/>
          <DemoComponent />
        </Col>
      </Row>
    </div>
  );

};

export default ComponentContainer;
