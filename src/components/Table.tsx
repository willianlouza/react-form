import Client from "../core/Client";
import { IconEdit, IconTrash } from "./Icons";

interface TableProps {
  clients: Client[];
  clientSelect?: (Client: Client) => void;
  clientRemove?: (Client: Client) => void;
}
export default function Table(props: TableProps) {
  const showActions = props.clientSelect || props.clientRemove;
  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {showActions ? <th className="text-center p-4">Ação</th> : false}
      </tr>
    );
  }
  function renderActions(client: Client) {
    return (
      <td className="flex justify-center">
        {props.clientSelect ? (
          <button
            onClick={() => props.clientSelect?.(client)}
            className="flex justify-center items-center text-green-600 
        rounded-full hover:bg-purple-50 p-2 m-1"
          >
            {IconEdit}
          </button>
        ) : (
          false
        )}
        {props.clientRemove ? (
          <button
            onClick={() => props.clientRemove?.(client)}
            className="flex justify-center items-center text-red-500 
        rounded-full hover:bg-purple-50 p-2 m-1"
          >
            {IconTrash}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }
  function renderData() {
    return props.clients?.map((client, index) => {
      return (
        <tr
          key={client.id}
          className={index % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}
        >
          <td className="texeft p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {showActions ? renderActions(client) : false}
        </tr>
      );
    });
  }
  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="bg-gradient-to-r from-purple-500 top-purple-800 text-gray-100">
        {renderHeader()}
      </thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
}
