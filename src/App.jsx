import reactLogo from './assets/react.svg'
import Component from './Component.jsx'

function App() {
  return (
    <div className="flex flex-col items-center v-screen">
      <img src={reactLogo} className="h-16 w-16"/>
      <Component />


    </div>
  )
}

export default App
