import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echart-options'
import { px } from '../shared/px'

export const Chart7 = () => {
  const divRef = useRef(null)

  useEffect(() => {
    console.log(divRef.current)
    var myChart = echarts.init(divRef.current)
    const color = ['#8D70F8', '#33A4FA']
    const option = createEchartsOptions({
      color: color,
      xAxis: { show: false },
      yAxis: { show: false },
      legend: {
        bottom: px(10),
        itemWidth: px(20),
        itemHeight: px(10),
        itemGap: px(20),
        textStyle: {
          fontSize: px(16),
          lineHeight: px(16),
          color: '#a1d1f1',
        },
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '60%'],
          // 图例位置
          center: ['50%', '45%'],
          avoidLabelOverlap: false,
          labelLine: { show: false },
          label: {
            distanceToLabelLine: -px(23), // label距离引导线距离
            show: true,
            position: 'outside',
            textStyle: { color: '#a1d1f1', fontSize: px(16) },
            formatter(options) {
              return options.value * 100 + '%'
            },
          },
          itemStyle: {
            borderColor: '#052831',
            borderWidth: px(4),
          },
          data: [
            { value: 0.2, name: '女' },
            { value: 0.8, name: '男' },
          ].map((item, index) => {
            return { ...item, label: { color: color[index] } }
          }),
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
    <div className="年龄段-图1">
      <div className="chart">
        <div className="main" ref={divRef} />
        <div className="text">性别</div>
      </div>
    </div>
  )
}
