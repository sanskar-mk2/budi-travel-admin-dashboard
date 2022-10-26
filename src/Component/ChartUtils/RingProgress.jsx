
import { RingProgress } from '@ant-design/plots';

export const RingProgressCmp = ({customeConfig}) => {
  const config = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.6,
    color: ['#F4664A', '#E8EDF3'],
    innerRadius: 0.9,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: '#363636',
          fontSize: '12px',
          lineHeight: '14px',
        },
        formatter: () => 'ah',
      },
    },
  };
  return customeConfig?(<RingProgress {...customeConfig} />):(<RingProgress {...config} />);
};
