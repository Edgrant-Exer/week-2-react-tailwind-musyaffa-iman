import { Component, useState } from 'react'

function MyComponent(props) {
    return (
    <div className="flex flex-col items-center justify-center">
        <button className="bg-slate-950 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-lg"
                onClick={() => props.setCount(props.count + 1)}>
            {props.name}
        </button>
        <p className="mt-2 text-lg font-semibold">{props.count}</p>
    </div>    
    )
}

export default MyComponent
