import { useLoaderData } from "react-router-dom"
import Coffee from "./components/Coffee/Coffee";



function App() {
  const coffees = useLoaderData();
  

  return (
    <div className="m-20">

      <h1 className="text-2xl">Coffee making client : {coffees.length}</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {
          coffees.map(coffee => <Coffee key={coffee._id} coffee={coffee}></Coffee>)
        }
      </div>
      

    </div>
  )
}

export default App
