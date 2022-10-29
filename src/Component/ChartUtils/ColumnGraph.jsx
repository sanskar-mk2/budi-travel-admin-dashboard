
import { Column } from '@ant-design/plots';

export const ColumnGraph = () => {
  const data = [
    {
      type: 'India ',
      sales: 38,
    },
    {
      type: 'China',
      sales: 52,
    },
    {
      type: 'Pakistan',
      sales: 61,
    },
    {
      type: 'Nepal',
      sales: 80,
    },
    {
      type: 'Bhutan',
      sales: 48,
    },
    {
      type: 'Bangladesh',
      sales: 38,
    },
    {
      type: 'Shrilamka',
      sales: 38,
    },
    {
      type: 'Canada',
      sales: 38,
    },
    
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'dd',
      },
      sales: {
        alias: 'd',
      },
    },
    minColumnWidth: 10,
    maxColumnWidth: 10,
    height:260,
    color: ' #27AE60'
  };
  return <Column {...config} />;
};

