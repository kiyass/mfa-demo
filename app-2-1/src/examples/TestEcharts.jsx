import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const getOption = () => {
  return {
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    legend: {
      data: ["销量"],
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };
};
export default () => {
  const [option, setOption] = useState({});

  useEffect(() => {
    setOption(getOption());
  }, []);

  return (
    <ReactECharts
      //   echarts={echarts}
      option={option}
      style={{ width: "100%", height: "500px" }}
    />
  );
};
