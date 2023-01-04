import { CiTrash } from "react-icons/ci";

function TableHeader() {
  return (
    <thead>
      <tr>
        <th width="1">#</th>
        <th>Name</th>
        <th>Description</th>
        <th width="1">Actions</th>
      </tr>
    </thead>
  );
}

function TableRow({ index, item }) {
  return (
    <tr key={`${index}`}>
      <td scope="row">{index + 1}</td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td style={{ whiteSpace: "nowrap" }}>
        <button className="btn btn-sm btn-outline-primary me-3">Edit</button>
        <button className="btn btn-sm btn-outline-danger">
          Delete <CiTrash />
        </button>
      </td>
    </tr>
  );
}

function TableBody() {
  const items = [
    {
      title: "how to becom",
      description: "blaa22",
    },
    {
      title: "how to become",
      description: "blaa22",
    },
    {
      title: "how to become developer",
      description: "hi",
    },
  ];

  return (
    <tbody>
      {items.map((item, index) => {
        return <TableRow item={item} index={index} />;
      })}
    </tbody>
  );
}

export default function MainContentTable() {
  return (
    <div>
      <table className="table table-bordered  table-hover">
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
}
