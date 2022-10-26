
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
      sales: 145,
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
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
    minColumnWidth: 20,
    maxColumnWidth: 20,
  };
  return <Column {...config} />;
};

