<script lang="ts">
  import { Chart } from 'svelte-echarts';
  import { init, use } from 'echarts/core';
  import { LineChart } from 'echarts/charts';
  import { TitleComponent, TooltipComponent } from 'echarts/components';
  import { SVGRenderer } from 'echarts/renderers';
  import type { EChartsOption } from 'echarts';

  // let { title: marketName = 'Market Name' } = $props();

  use([LineChart, SVGRenderer, TooltipComponent, TitleComponent]);

  let options: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      axisTick: { show: false },
      axisLabel: { interval: 5 },
    },
    yAxis: {
      type: 'value',
      max: 1,
      interval: 0.5,
      splitLine: { show: false },
      axisLine: { show: true},
    },
    tooltip: {
      show: true,
    },
    series: [
      {
        type: 'line',
        smooth: true,
        areaStyle: { color: 'rgba(0, 177, 114, 0.8)' },
        lineStyle: { width: 3, color: 'rgb(0, 177, 114)' },
        data: [0.5, 0.5, 0.45, 0.42, 0.66, 0.70],
        showSymbol: false,
      }
    ]
  };
</script>

<div class="chart">
  <Chart {init} {options} />
</div>

<style>
  .chart {
    width: 500px;
    height: 300px;
  }
</style>
