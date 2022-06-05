import { useEffect, useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {
  const [visible, setVisible] = useState<"table" | "form">("table");
  const [client, setClient] = useState(Client.empty());
  const[clients, setClients] = useState<Client[]>([]);


  function selectClient(client: Client) {
    setClient(client);
    setVisible("form");
  }
  function removeClient(client: Client) {
    setClients(array => {
      return array.filter(el => el.id !== client.id);
    });
  }
  function saveClient(client: Client) {
    setClients(array => {
      let newArray = array;
      for(let i = 0; i < newArray.length; i++){
        if(client.id === newArray[i].id){
          newArray[i] = client;
          return newArray;
        }
      }
      client.id = (clients.length + 1).toString();
      newArray.push(client);
      return newArray;
    });
    setVisible("table");
  }
  function newClient() {
    setClient(Client.empty());
    setVisible("form");
  }
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout titulo="Cadastro">
        {visible === "table" ? (
          <>
            <div className="flex justify-end">
              <Button
                color="green"
                className="mb-4"
                onClick={newClient}
              >
                Novo Cliente
              </Button>
            </div>
            <Table
              clients={clients}
              clientSelect={selectClient}
              clientRemove={removeClient}
            ></Table>
          </>
        ) : (
          <Form
            client={client}
            cancel={() => setVisible("table")}
            clientChange={saveClient}
          ></Form>
        )}
      </Layout>
    </div>
  );
}
