<script lang="ts">
  import { Chart } from 'svelte-echarts';
  import { init, use } from 'echarts/core';
  import { LineChart } from 'echarts/charts';
  import { TitleComponent, GridComponent, TooltipComponent } from 'echarts/components';
  import { SVGRenderer } from 'echarts/renderers';
  import type { EChartsOption } from 'echarts';

  const formatter = (val: number | string) => `${Math.floor(Number(val) * 100)}%`;

  let { class: className, history }: { class: string; history: MarketData['history'] } = $props();

  use([LineChart, SVGRenderer, TooltipComponent, GridComponent, TitleComponent]);

  let options: EChartsOption = $derived({
    grid: {
      top: 20,
      bottom: 20,
      left: 40,
      right: 20
    },
    xAxis: {
      type: 'time',
      axisLabel: {
        formatter: (value, index) => {
          const date = new Date(value);
          if (index === 0 || index === history.length - 1) {
            return date.toISOString().split('T')[0];
          }
          return '';
        }
      }
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
        data:
          history.length > 100
            ? history.filter((_, i) => i % Math.floor(history.length / 100) === 0) // get every 100th data point
            : history,
        showSymbol: false
      }
    ]
  });
</script>

<div class="chart v-full my-2 w-full {className}">
  <Chart {init} {options} />
</div>
