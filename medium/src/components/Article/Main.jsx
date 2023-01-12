import AuthorInfo from "./Main/AuthorInfo";
import News from "./Main/News";
import Sidebar from "./Main/Sidebar";

export default function Main() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <AuthorInfo />
          <News />
        </div>
        <div className="col-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
