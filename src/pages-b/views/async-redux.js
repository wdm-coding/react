import { useSelector,useDispatch } from "react-redux";
import {getList} from '../../store/modules/paramsStore.js'
import { useEffect } from "react";
function AsyncRedux(){
    const {list} = useSelector(state=>state.params)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getList())
    },[dispatch])
    return (
      <div>
        <h3>AsyncRedux</h3>
        {
          list.map(item=>{
            return <div key={item.id}>{item.name}-{item.content}</div>
          })
        }
      </div>
    );
}

export default AsyncRedux;