import React from 'react';
import { Upload } from '@openmrs/react-components';
import { message } from 'antd';
import ComponentContainer from '../demo/ComponentContainer';

const UploadComponent = () => {

  const onChangeHandler = (info) => {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  return (

    <Upload
      onChange = {onChangeHandler}
      action = 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
    />
  );
};

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
        <UploadComponent />
      </div>
    );
  }

  const DemoContainer = () => {
  
    return (
        <ComponentContainer 
            OverviewComponent={OverviewComponent}
            CodeComponent={CodeComponent}
            DemoComponent={DemoComponent}
            componentName="Upload Component"
        />
    );
  }

export default DemoContainer;
