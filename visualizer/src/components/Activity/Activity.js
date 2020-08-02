import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

const Activity = ({
  data,
  cdr,
  ipdr,
  detailedCdr,
  detailedIpdr,
  servicesData,
}) => {
  let finalValues = [];
  if (data) {
    const cdrIds = []
      .concat(
        ...cdr
          .filter((item) => item.from === data.id)
          .map((item) => item.calls),
      )
      .map((item) => detailedCdr.find((obj) => obj.id === item));

    const ipdrIds = []
      .concat(
        ...ipdr
          .filter((item) => item.from === data.id)
          .map((item) => item.calls),
      )
      .map((item) => detailedIpdr.find((obj) => obj.id === item));

    finalValues = [].concat(cdrIds, ipdrIds).sort((a, b) => {
      const d1 = a.timestamp ? a.timestamp : a.start_time;
      const d2 = b.timestamp ? b.timestamp : b.start_time;
      return new Date(d2) - new Date(d1);
    });
  }
  console.log('==');
  console.log(data);
  return (
    <h1>
      {data ? (
        finalValues.length > 0 ? (
          <Steps progressDot current={finalValues.length} direction="vertical">
            {finalValues.map((item) => {
              const date = new Date(
                item.timestamp ? item.timestamp : item.start_time,
              );
              const months = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
              ];
              let title = '';
              const description = `At ${
                date.toTimeString().split(' ')[0]
              } on ${date.getDate()} ${
                months[date.getMonth()]
              } ${date.getFullYear()}. Duration - ${Math.ceil(
                item.duration / 60,
              )} min `;
              if (item.destination_port) {
                const service = servicesData.find(
                  (obj) => obj.port === item.destination_port,
                );
                title = `Visited ${service.name}`;
              } else {
                title = `Called ${item.to_number}`;
              }
              return <Step title={title} description={description} />;
            })}
          </Steps>
        ) : (
          <div>No activity found in the database</div>
        )
      ) : (
        <div>Please select a person to view activity</div>
      )}
    </h1>
  );
};

export default Activity;
