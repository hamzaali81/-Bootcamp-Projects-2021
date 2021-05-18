import React, {useState} from 'react'

function App() {
    const [name, setName] = useState({firstName: '', lastName: ''});
    return (
        <div>
            <h1>hello</h1>
            <input type="text" onChange={(e)=> setName({...name,firstName: e.target.value})}/>
            <input type="text" onChange={(e)=> setName({...name,lastName: e.target.value})}/>
            <h1>{JSON.stringify(name)}</h1>
            {/* <h2>{name}</h2> */}
        </div>
    )
}

export default App
