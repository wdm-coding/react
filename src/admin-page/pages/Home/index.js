import EchartContainer from "@/components/Echarts/index"
import { useRef, useState } from "react"
import { Button } from "antd"
const Home = () => {
	const chartRef = useRef(null)
	const [options, setOption] = useState({
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
				data: [5, 20, 36, 10, 1, 10],
			},
		],
	})
	const printInstance = () => {
		console.log("图表实例:", chartRef.current.getInstance())
	}
	const resetHandler = () => {
		chartRef.current.resetChart()
	}
	const updateHandler = () => {
		setOption({
			...options,
			title: {
				text: "ECharts 更新示例"
			},
            series: [
                {
                    name: "销量",
                    type: "bar",
                    data: [15, 10, 26, 30, 15, 10],
                }
            ]
		})
	}
	return (
		<>
			<EchartContainer ref={chartRef} option={options} style={{ width: "500px", height: "400px" }} />
			<div>
				<Button color="primary" variant="solid" onClick={printInstance} style={{ marginRight: "15px" }}>
					打印实例
				</Button>
				<Button color="default" variant="solid" onClick={resetHandler}>
					重新渲染
				</Button>
				<Button color="danger" variant="solid" onClick={updateHandler} style={{ marginLeft: "15px" }}>
					更新图表
				</Button>
			</div>
		</>
	)
}

export default Home
