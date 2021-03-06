import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echart-options'
import { px } from '../shared/px'

export const Chart4 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    var myChart = echarts.init(divRef.current)
    const option = createEchartsOptions({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        splitLine: { show: true, lineStyle: { color: '#074f78' } },
        axisTick: { show: false },
        axisLine: { show: false },
      },
      yAxis: {
        type: 'value',
        splitLine: { lineStyle: { color: '#074f78' } },
        axisLabel: {
          formatter(val) {
            return val * 100 + '%'
          },
        },
      },
      series: [
        {
          name: '故意伤人',
          type: 'line',
          data: [
            0.15, 0.13, 0.11, 0.13, 0.14, 0.15, 0.18, 0.24, 0.27, 0.26, 0.25,
            0.21, 0.14,
          ],
          symbol: 'circle',
          symbolSize: px(12),
          lineStyle: { width: px(2) },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#41849f',
              },
              {
                offset: 1,
                color: '#1b1d52',
              },
            ]),
          },
        },
      ],
    })

    myChart.setOption(option)

    setInterval(() => {
      myChart.clear()
      myChart.setOption(option)
    }, 4000)
  }, [])

  return (
    <div className="bordered 案发时段">
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart" />
    </div>
  )
}
