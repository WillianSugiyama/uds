import { Provider } from "./components/ui/provider";
import TableUDS from "./components/table/table";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setIsLoading] = useState(true);


  useEffect(() => {
    async function fetchPeople() {
      try {
        const response = await fetch('http://localhost:3009/people?page=1');
        const result = await response.json();

        setIsLoading(false);
        setItems(result);
      } catch (e) {
        console.log('error', e);
      }
    }

    fetchPeople();
  }, [])

  if(loading) {
    return "Carregando"
  }


  return (
    <Provider>
      <TableUDS data={items} />
    </Provider>
  );
}

export default App;
