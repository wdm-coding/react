import React,{Component} from 'react';

class Son extends Component{
  componentDidMount(){
    console.log('Son组件挂载完成',this.props.count)
  }
  componentDidUpdate (prevProps, prevState){
    console.log('Son组件更新完成',prevProps, prevState)
  }
  componentWillUnmount(){
    console.log('Son组件即将卸载')
  }
  render() {
    return <div style={{marginTop:'10px'}}>
      <h3>我是Son组件</h3>
      <button onClick={()=>{this.props.onGetSonData('我是来自子组件数据')}}>点击传递数据给父组件</button>
    </div>
  }
}

class PagesClass extends Component{
  state = {
    count:0
  }
  addHandler = () =>{
    this.setState({
      count:this.state.count+1
    })
  }
  getSonData = (data) =>{
    console.log('获取到子组件数据：',data);
  }
  render() {
    return (
      <div>
          <h1 style={{fontSize:'32px'}}>react类组件</h1>
          <h2>当前计数为：{this.state.count}</h2>
          <button onClick={this.addHandler}>点击增加</button>
          {this.state.count > 5 && this.state.count< 10 ? <Son count={this.state.count} onGetSonData={this.getSonData}/> : null}
      </div>
  )
  }
  
}
export default PagesClass;