import React,{Component} from 'react';

class PagesClass extends Component{
  state = {
    count:0
  }
  addHandler = () =>{
    this.setState({
      count:this.state.count+1
    })
  }
  render() {
    return (
      <div>
          <h1 style={{fontSize:'32px'}}>react类组件</h1>
          <h2>当前计数为：{this.state.count}</h2>
          <button onClick={this.addHandler}>点击增加</button>
      </div>
  )
  }
  
}
export default PagesClass;