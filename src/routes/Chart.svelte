<script lang="ts">
  import { Chart, Axis, Svg, Spline } from 'layerchart';
  import { formatDate, PeriodType } from '@layerstack/utils';
  import { scaleTime } from 'd3-scale';

  let dateSeriesData = [
    {
      date: new Date('2025-01-23T00:00:00.000Z'),
      value: 86
    },
    {
      date: new Date('2025-01-24T00:00:00.000Z'),
      value: 74
    },
    {
      date: new Date('2025-01-25T00:00:00.000Z'),
      value: 93
    },
    {
      date: new Date('2025-01-26T00:00:00.000Z'),
      value: 55
    },
    {
      date: new Date('2025-01-27T00:00:00.000Z'),
      value: 82
    },
    {
      date: new Date('2025-01-28T00:00:00.000Z'),
      value: 90
    },
    {
      date: new Date('2025-01-29T00:00:00.000Z'),
      value: 84
    },
    {
      date: new Date('2025-01-30T00:00:00.000Z'),
      value: 64
    },
    {
      date: new Date('2025-01-31T00:00:00.000Z'),
      value: 88
    },
    {
      date: new Date('2025-02-01T00:00:00.000Z'),
      value: 98
    },
    {
      date: new Date('2025-02-02T00:00:00.000Z'),
      value: 91
    },
    {
      date: new Date('2025-02-03T00:00:00.000Z'),
      value: 89
    },
    {
      date: new Date('2025-02-04T00:00:00.000Z'),
      value: 76
    },
    {
      date: new Date('2025-02-05T00:00:00.000Z'),
      value: 64
    },
    {
      date: new Date('2025-02-06T00:00:00.000Z'),
      value: 95
    },
    {
      date: new Date('2025-02-07T00:00:00.000Z'),
      value: 85
    },
    {
      date: new Date('2025-02-08T00:00:00.000Z'),
      value: 98
    },
    {
      date: new Date('2025-02-09T00:00:00.000Z'),
      value: 100
    },
    {
      date: new Date('2025-02-10T00:00:00.000Z'),
      value: 100
    },
    {
      date: new Date('2025-02-11T00:00:00.000Z'),
      value: 80
    },
    {
      date: new Date('2025-02-12T00:00:00.000Z'),
      value: 96
    },
    {
      date: new Date('2025-02-13T00:00:00.000Z'),
      value: 55
    },
    {
      date: new Date('2025-02-14T00:00:00.000Z'),
      value: 62
    },
    {
      date: new Date('2025-02-15T00:00:00.000Z'),
      value: 62
    },
    {
      date: new Date('2025-02-16T00:00:00.000Z'),
      value: 98
    },
    {
      date: new Date('2025-02-17T00:00:00.000Z'),
      value: 78
    },
    {
      date: new Date('2025-02-18T00:00:00.000Z'),
      value: 88
    },
    {
      date: new Date('2025-02-19T00:00:00.000Z'),
      value: 51
    },
    {
      date: new Date('2025-02-20T00:00:00.000Z'),
      value: 56
    },
    {
      date: new Date('2025-02-21T00:00:00.000Z'),
      value: 60
    }
  ];
</script>

<div class="chart h-[300px] w-[400px] rounded border p-4">
  <Chart
    data={dateSeriesData}
    x="date"
    xScale={scaleTime()}
    y="value"
    yDomain={[0, null]}
    yNice
    padding={{ left: 16, bottom: 24 }}
  >
    <Svg>
      <Axis placement="left" grid rule />
      <Axis
        placement="bottom"
        format={(d) => formatDate(d, PeriodType.Day, { variant: 'short' })}
        rule
      />
      <Spline class="stroke-primary stroke-2" />
    </Svg>
  </Chart>
</div>

<style>
  .chart {
    display: flex;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin: 1rem 0;
  }

  .chart button {
    width: 2em;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: transparent;
    touch-action: manipulation;
    font-size: 2rem;
  }

  .chart button:hover {
    background-color: var(--color-bg-1);
  }

  svg {
    width: 25%;
    height: 25%;
  }

  path {
    vector-effect: non-scaling-stroke;
    stroke-width: 2px;
    stroke: #444;
  }

  .chart-viewport {
    width: 8em;
    height: 4em;
    overflow: hidden;
    text-align: center;
    position: relative;
  }

  .chart-viewport strong {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    font-weight: 400;
    color: var(--color-theme-1);
    font-size: 4rem;
    align-items: center;
    justify-content: center;
  }

  .chart-digits {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .hidden {
    top: -100%;
    user-select: none;
  }
</style>
