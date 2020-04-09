import React, {FC} from "react"

const MyComponent : FC = () => {
    return <div>
        <button onClick={() => alert("HELLO")}>Hello World</button>
    </div>
}

export default MyComponent