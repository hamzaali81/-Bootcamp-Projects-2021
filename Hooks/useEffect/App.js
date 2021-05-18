import React, {useEffect,useState} from 'react'
import axios from 'axios';

function App() {
   
    const [posts, setPosts] = useState({});
    // Assignment Button click
    // const [posts, setPosts] = useState([]);
    const [id, setId] = useState(1);
    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => {
            // console.log(res.data)
            setPosts(res.data)
            // setPosts(res.data.slice(0, 10))
        })
        .catch((err) => {
            console.log(err)
        })
    }, [id])
   
//  console.log(posts);
    return (
        <div>
            <input type="text" value={id} onChange={(e)=> setId(e.target.value)}/>
         {/* <ul>
             {posts.map((post)=> {
               console.log(post.title);
                 return <li>{post.title}</li>
             })}
         </ul> */}
         <div>
             {posts.title}
         </div>
        
        </div>
    )
}

export default App;
