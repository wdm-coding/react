import EchartContainer from '@/components/Echarts/index'
import { useRef,useState,useEffect } from 'react';
const Home = () => {
    const chartRef = useRef(null);
    const [options] = useState({
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data: ['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 1, 10]
        }]
    })
    const printInstance = () => {
        console.log('图表实例:', chartRef.current);
    }
    return (
        <>
        <button onClick={printInstance}>打印实例</button>
        <EchartContainer ref={chartRef} option={options} style={{width:'100%',height:'400px'}}></EchartContainer></>
    );
}

export default Home;