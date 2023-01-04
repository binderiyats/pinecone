export default function MainContentTitle({ title }) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <button className="btn btn-sm btn-primary">Create</button>
      </div>
    </div>
  );
}
