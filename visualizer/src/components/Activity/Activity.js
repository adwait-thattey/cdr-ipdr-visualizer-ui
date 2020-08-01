import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

const Activity = () => {
    return (  
        <h1>    
        <Steps progressDot current={5} direction="vertical">
            <Step title="Called 827374741" description="At 5PM on 27/07/11. Duration - 15 min" />
            <Step title="Called 827374311" description="At 10:31PM on 27/08/11. Duration - 11 min" />
            <Step title="Visited WhatsApp" description="At 10:40PM on 27/08/11. Duration - 4 min" />
            <Step title="Visited Messenger" description="At 7:01AM on 28/08/11. Duration - 11 min" />
        </Steps>
      </h1>
    );
}
 
export default Activity;