/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
const { useEffect,useState } = require("react");
function useGetList(url){
  const [list,setList] = useState([]);
  const getList = async ()=>{
    const {data} = await axios.get(`http://localhost:3004/${url}`)
    const {code, result} = data
    if(code === 0){
      setList(result)
    }
  }
  useEffect(()=>{
    getList()
  },[])
  return [list,setList]
}

export default useGetList;