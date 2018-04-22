<template>
  <div>
    <LineChart
      :data="lineData"
    />
    <RingChart
      :data="ringData.data"
      :options="ringData.options"
    />
  </div>
</template>
<script>

import createG2 from 'g2-vue';
import { DataView } from '@antv/data-set';

const lineData = [
  {time: '3-21', pm25: 10},
  {time: '3-22', pm25: 40},
  {time: '3-23', pm25: 30},
  {time: '3-24', pm25: 50},
];

const ringData = [
  { item: 'Orange', count: 40 },
  { item: 'Banana', count: 21 },
  { item: 'Apple', count: 17 },
  { item: 'Kiwi', count: 13 },
  { item: 'Melon', count: 9 },
];

const LineChart = createG2((chart) => {
  chart.line().position('time*pm25').color('pm25').shape('spline').size(2);
  chart.render();
});

const RingChart = createG2((chart) => {
  chart.coord('theta', {
    radius: 0.75,
    innerRadius: 0.6,
  });
  chart.tooltip({
    showTitle: false,
    itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>',
  });
  chart.guide().html({
    position: [ '50%', '50%' ],
    html: '<div style="color:#a6bdd4;font-size: 14px;text-align: center;width: 10em;">Fruits<br><span style="color:#a6bdd4;font-size:20px">100</span>items</div>',
    alignX: 'middle',
    alignY: 'middle',
  });
  chart.intervalStack()
    .position('percent')
    .color('item')
    .label('percent', {
      formatter: (val, item) => {
        return item.point.item + ': ' + val;
      },
      textStyle: {
        fill: '#fff',
        shadowBlur: 2,
        shadowColor: 'rgba(0, 0, 0, .45)',
      },
    })
    .tooltip('item*percent', (item, percent) => {
      percent = percent * 100 + '%';
      return {
        name: item,
        value: percent,
      };
    })
    .style({
      lineWidth: 1,
      stroke: '#42b983',
    });
  chart.render();
});

export default {
  components: {
    LineChart,
    RingChart,
  },
  data() {
    return {
      lineData,
      ringData: {
        data: {},
        options: {
          percent: {
            formatter: (val) => {
              val = (val * 100) + '%';
              return val;
            },
          },
        },
      },
    };
  },
  created() {
    const dv = new DataView();
    dv.source(ringData).transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent',
    });
    this.ringData.data = dv;
  },
};
</script>
