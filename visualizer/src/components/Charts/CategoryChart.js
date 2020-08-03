import React from 'react';

import Charts from 'react-apexcharts';

const pieChartOptions = (id, labels, title, color, yQuantity) => {
  return {
    chart: {
      id: id,
      type: 'pie',
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
      },
    },
    labels: labels,
    theme: {
      monochrome: { enabled: true, color: color },
    },
    title: {
      text: title,
      align: 'center',
    },
    dataLabels: {
      formatter(val, opts) {
        return [val.toFixed(1) + '%'];
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      x: {
        formatter: (i) => labels[i - 1],
      },
      y: {
        formatter: (i) => `${i} ${yQuantity}`,
      },
      enabled: true,
    },
  };
};

export const PieChart = ({
  title,
  series,
  labels,
  height,
  width,
  color,
  id,
  yQuantity,
}) => {
  return (
    <Charts
      type="pie"
      series={series}
      height={height}
      width={width}
      options={pieChartOptions(id, labels, title, color, yQuantity)}
    />
  );
};

const barChartOptions = (id, labels, title, color, yQuantity) => {
  return {
    chart: {
      type: 'bar',
      id: id,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      formatter: (i) => `${i} ${yQuantity}`,
    },
    xaxis: {
      categories: labels,
    },
    colors: [color],
    title: {
      text: title,
      align: 'center',
    },
    tooltip: {
      enabled: false,
    },
  };
};

export const BarChart = ({
  title,
  series,
  labels,
  height,
  width,
  color,
  id,
  yQuantity,
}) => {
  return (
    <Charts
      type="bar"
      series={[{ data: series }]}
      height={height}
      width={width}
      options={barChartOptions(id, labels, title, color, yQuantity)}
    />
  );
};
