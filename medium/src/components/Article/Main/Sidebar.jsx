import authorProBig from "../../../IMGS/authorProBig.png";
import mail from "../../../IMGS/mail.svg";
import SuggestedArticles from "./SuggestedArticles";
import MainButton from "../MainButton";

export default function Sidebar() {
  return (
    <div className="container">
      <div>
        <img src={authorProBig} alt="" />
        <div className="little-title">Cassie Kozyrkov</div>
        <div className="followers" style={{ color: "#706e72" }}>
          115K Followers
        </div>
        <p className="authorDesc">
          Chief Decision Scientist, Google. ❤️ Stats, ML/AI, data, puns, art,
          theatre, decision science. All views are my own.
          <a href="twitter.com/quaesita" style={{ color: "#706e72" }}>
            twitter.com/quaesita
          </a>
        </p>
        <div className="d-flex align-items-center">
          <button className="btn authorBtn1 ">Follow</button>
          <div className="btn">
            <img src={mail} alt="" className="authorBtn2" />
          </div>
        </div>
        <div>
          <div className="little-title">More from Medium</div>
          <SuggestedArticles />
        </div>
      </div>
    </div>
  );
}
