import { useLoaderData } from "react-router-dom"
import Coffee from "./components/Coffee/Coffee";



function App() {
  const coffees = useLoaderData();
  

  return (
    <>

      <h1 className="text-2xl">Coffee making client : {coffees.length}</h1>

      {
        coffees.map(coffee => <Coffee key={coffee._id} coffee={coffee}></Coffee>)
      }
      

    </>
  )
}

export default App
