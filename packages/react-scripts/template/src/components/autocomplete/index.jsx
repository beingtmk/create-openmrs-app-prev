import React from 'react';

import { Autocomplete } from '@openmrs/react-components';
import ComponentContainer from '../demo/ComponentContainer';

function onSelect(value) {
  console.log('onSelect', value);
}

class Autcomplete extends React.Component {
  state = {
    dataSource: [],
  };

  handleSearch = value => {
    console.log(value);
    this.setState({
      dataSource: !value ? [] : [value, value + value, value + value + value],
    });
  };

  render() {
    const { dataSource } = this.state;
    return (
      <div>
        <Autocomplete
          dataSource={dataSource}
          handleSearch={this.handleSearch}
          onSelect={onSelect}
          placeholder="input here"
          style={{ width: 200 }}
        />
      </div>
    );
  }
}

const OverviewComponent = () => {

    return (
      <div>
        Overview of the Component
      </div>
    );
  }
  
  const CodeComponent = () => {
  
    return (
      <div>
        Code of the Component
      </div>
    );
  }
  
  
  const DemoComponent = () => {
  
    return (
      <div>
        <Autcomplete />
      </div>
    );
  }

  const DemoContainer = () => {
  
    return (
        <ComponentContainer 
            OverviewComponent={OverviewComponent}
            CodeComponent={CodeComponent}
            DemoComponent={DemoComponent}
            componentName="Autocomplete Component"
        />
    );
  }

export default DemoContainer;
