import * as echarts from  'echarts';
import { useEffect,useRef,useImperativeHandle  } from 'react';
function EchartContainer(props,ref) {
  const { option, className, style } = props;
  const myChart = useRef(null);
  const domRef = useRef(null);
  // 暴露方法，用于外部调用更新图表配置
  // 暴露图表方法给父组件
  useImperativeHandle(ref, () => ({
    // 获取 ECharts 实例
    getInstance: () => myChart.current,
    // 手动触发 resize
    resize: () => {
      if (myChart.current) {
        myChart.current.resize();
      }
    }
  }));

  // 初始化图表实例
  useEffect(()=>{
    if (!domRef.current) return;
    // 销毁旧实例
    if (myChart.current) {
      myChart.current.dispose();
    }
    // 创建新实例
    myChart.current = echarts.init(domRef.current);
    myChart.current.setOption(option);
    // 窗口 resize 监听
    const resizeHandler = ()=>{
      myChart.current?.resize();
    }
    window.addEventListener('resize', resizeHandler);
    return ()=>{
      window.removeEventListener('resize', resizeHandler);
      myChart.current && myChart.current.dispose();
      myChart.current = null;
    }
  },[]);
  // 更新图表配置
  useEffect(()=>{
    myChart.current && myChart.current.setOption(option);
  },[option]);
  return <div ref={domRef} className={className} style={{width:'100%',height:'100%',...style}}></div>;
}

export default EchartContainer;