import React from 'react';

import Charts from 'react-apexcharts';

const chartOptions = (id, titleY, color, shadowColor, yQuantity, labels) => {
  return {
    legend: { show: false },
    chart: {
      id: id,
      toolbar: {
        show: true,
        autoSelected: 'pan',
        tools: {
          selection: false,
        },
      },
      dropShadow: {
        enabled: true,
        top: 3,
        left: 3,
        color: shadowColor,
      },
    },
    tooltip: {
      enabled: true,
      marker: {
        show: false,
      },
      x: {
        formatter: (value) => new Date(labels[value - 1]).toLocaleDateString(),
      },
      y: {
        formatter: (value) => `${value} ${yQuantity}`,
        title: {
          formatter: () => '',
        },
      },
    },
    xaxis: {
      type: 'date',
      tooltip: {
        enabled: false,
      },
      datetimeFormatter: {
        year: 'yyyy',
        month: 'mm-yyyy',
        day: 'dd-mm-yyyy',
      },
    },
    yaxis: {
      tooltip: {
        enabled: false,
      },
      title: {
        text: titleY,
      },
    },
    colors: [color],
    labels: labels,
  };
};

const brushOptions = (id, color, labels, height) => {
  return {
    chart: {
      brush: {
        target: id,
        enabled: true,
      },
      selection: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
      offsetY: -Math.round(height / 16),
    },
    yaxis: {
      show: false,
    },
    xasis: {
      type: 'date',
      tooltip: {
        enabled: false,
      },
      datetimeFormatter: {
        year: 'yyyy',
        month: 'mm-yyyy',
        day: 'dd-mm-yyyy',
      },
    },
    fill: {
      type: 'gradient',
      opacity: {
        from: 1,
        to: 0.2,
      },
    },
    colors: [color],
    labels: labels,
  };
};

const DataChart = ({
  titleY,
  series,
  labels,
  height,
  width,
  color,
  shadowColor,
  yQuantity,
  id,
  name,
}) => {
  return (
    <>
      <Charts
        type="line"
        series={[{ name: name, data: series }]}
        height={Math.round((height * 2) / 3)}
        width={width}
        options={chartOptions(
          id,
          titleY,
          color,
          shadowColor,
          yQuantity,
          labels,
        )}
      />
      <Charts
        type="area"
        series={[{ name: name, data: series }]}
        height={Math.round(height / 3)}
        width={width}
        options={brushOptions(id, color, labels, height)}
      />
    </>
  );
};

export default DataChart;
