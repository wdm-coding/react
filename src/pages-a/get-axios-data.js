import useGetList from "./hooks/useGetList.js"
function GetAxiosData(){
  const [list] = useGetList('comment')
  return (
      <div>
        <p>GetAxiosData</p>
        {
          list.map((item,index)=>(
            <div key={index}>
              <span>{item.id}</span>.
              <span>{item.content}</span>----
              <span>{item.name}</span>
            </div>
          ))
        }
      </div>
  )
}

export default GetAxiosData