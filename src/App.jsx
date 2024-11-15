import Table from "./components/table/Table";
import { useEffect, useState } from "react";
import { HttpService } from "./libs/http/service";

function App() {
  const headers = ["name", "url"];
  const httpService = new HttpService();

  const [Berries, setBerries] = useState([]);

  useEffect(() => {
    const fetchBerries = async () => {
      try {
        const response = await httpService.get("berry");

        if (response.status == 200) {
          setBerries(response.data.results);
          return;
        }

        return [];
      } catch (e) {
        console.log(e);
      }
    };

    fetchBerries();
  }, []);

  const handleClick = () => {
    console.log('clickeado');
  }

  return (
    <>
      <div className="items-center justify-center h-screen bg-gray-200">
        <div className="text-center p-4 bg-white rounded-lg shadow-lg">
          asefasfas
          <Table headers={headers} data={Berries}>
            {Berries.map((row, index) => (
              <tr 
                key={index} 
                className="bg-blue-50 hover:bg-blue-100"
              >
                {headers.map((header) => (
                  <td
                    onClick={() => handleClick}
                    key={header}
                    className="px-4 py-2 border-b border-gray-200 text-center"
                  >
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </Table>
        </div>
      </div>
    </>
  );
}

export default App;
