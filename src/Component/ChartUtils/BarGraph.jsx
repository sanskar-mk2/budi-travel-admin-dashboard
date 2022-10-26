import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/plots';

export const BarGraph = ({customeConfig}) => {
  const data = [
    {
      type: 'A ',
      sales: 38,
    },
    {
      type: 'B',
      sales: 52,
    },
    {
      type: 'C',
      sales: 61,
    },
    {
      type: 'C',
      sales: 145,
    },
    {
      type: 'C',
      sales: 48,
    },
    {
      type: 'C',
      sales: 38,
    },
    {
      type: 'L',
      sales: 38,
    },
    {
      type: 'k',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'sales',
    yField: 'type',
    meta: {
      type: {
        alias: 'alias',
      },
      sales: {
        alias: 'alias',
      },
    },
    minBarWidth: 20,
    maxBarWidth: 20,
  };
  return customeConfig?(<Bar {...customeConfig} />):(<Bar {...config} />);
};


