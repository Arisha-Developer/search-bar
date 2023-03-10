import axios from "axios"
import { useEffect, useState } from "react"

function Posts() {
    let api = "https://jsonplaceholder.typicode.com/photos"
    const [listData, setListData] = useState()
    const getData = () => {
        axios
            .get(api)
            .then((res) => {
                console.log(res)
                setListData(...res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
      getData()
    }, []);
return(
    <>
    <h1>Posts</h1>
    {listData.map((x,i)=>{
        <div key={i}>
            <img src={x.thumbnailUrl} alt="" />
            <p>{x.title}</p>
        </div>
    })}
    </>
)
}
export default Posts