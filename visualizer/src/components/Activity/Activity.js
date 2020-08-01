import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

const Activity = () => {
    return (  
        <h1 style={{ paddingLeft: '20px' }}>    
        <Steps progressDot current={5} direction="vertical">
            <Step title="Called 82737474" description="At 5PM on 27/07/11. Duration - 15 min" />
            <Step title="Finished" description="This is a description. This is a description." />
            <Step title="In Progress" description="This is a description. This is a description." />
            <Step title="Waiting" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
        </Steps>
      </h1>
    );
}
 
export default Activity;