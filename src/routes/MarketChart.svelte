<script lang="ts">
  import { Chart } from 'svelte-echarts';
  import { init, use } from 'echarts/core';
  import { LineChart } from 'echarts/charts';
  import { TitleComponent, GridComponent, TooltipComponent } from 'echarts/components';
  import { SVGRenderer } from 'echarts/renderers';
  import type { EChartsOption } from 'echarts';

  let { class: className } = $props();

  const formatter = (val: number | string) => `${Math.floor(Number(val) * 100)}%`;

  use([LineChart, SVGRenderer, TooltipComponent, GridComponent, TitleComponent]);

  let options: EChartsOption = {
    grid: {
      top: 20,
      bottom: 20,
      left: 40,
      right: 20
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      axisTick: { show: false },
      axisLabel: { interval: 5 }
    },
    yAxis: {
      type: 'value',
      max: 1,
      interval: 0.5,
      splitLine: { show: false },
      axisLine: { show: true },
      axisLabel: { formatter }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'line' }
    },
    series: [
      {
        type: 'line',
        smooth: true,
        areaStyle: { color: 'rgba(0, 177, 114, 0.8)' },
        lineStyle: { width: 3, color: 'rgb(0, 177, 114)' },
        itemStyle: { color: 'rgb(0, 177, 114)' },
        data: [0.5, 0.5, 0.45, 0.42, 0.66, 0.7],
        showSymbol: false
      }
    ]
  };
</script>

<div class="chart v-full my-2 w-full {className}">
  <Chart {init} {options} />
</div>
