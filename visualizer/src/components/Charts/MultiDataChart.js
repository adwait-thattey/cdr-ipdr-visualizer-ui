import React from 'react';

import Charts from 'react-apexcharts';

const chartOptions = (id, labels, title) => {
  return {
    chart: {
      id: id,
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: true,
        tools: {
          selection: false,
        },
      },
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: title,
      align: 'left',
    },
    xaxis: {
      type: 'date',
      tooltip: {
        enabled: false,
      },
      datetimeFormatter: {
        year: 'yyyy',
        month: 'mm-yy',
        day: 'mm-yy',
        hour: '',
      },
      labels: {
        trim: true,
        maxHeight: 40,
      },
    },
    labels: labels,
    tooltip: {
      enabled: true,
      marker: {
        show: false,
      },
      x: {
        formatter: (value) => new Date(labels[value - 1]).toLocaleDateString(),
      },
      y: {
        title: {
          formatter: () => '',
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: false,
      },
    },
  };
};

const MultiDataChart = ({ data, id, title, height, width }) => {
  const labels = [];
  const seriesMap = {};
  for (const i in data) {
    labels.push(i);

    for (const j in data[i]) {
      !seriesMap[j] && (seriesMap[j] = []);

      seriesMap[j].push(data[i][j]);
    }
  }

  const series = [];

  for (const i in seriesMap) {
    series.push({
      name: i,
      data: seriesMap[i],
    });
  }

  console.log(labels, series);

  return (
    <Charts
      type="line"
      series={series}
      height={height}
      width={width}
      options={chartOptions(id, labels, title)}
    />
  );
};

export default MultiDataChart;
