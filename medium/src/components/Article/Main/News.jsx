import newsImg from "../../../IMGS/newsImg.png";
import NewsContent from "./NewsContent";

export default function News() {
  return (
    <div>
      <h1 className="news-title">
        The best New Year's resolutions you can make
      </h1>
      <div style={{ color: "#706E72", fontSize: "21px" }}>
        Resolutions that actually work, according to a decision scientist
      </div>
      <div>
        Happy almost-2023! Chances are that you’re contemplating making some New
        Year’s resolutions, so let’s get you set up for success with a few
        resolutions that will unlock the best version of you.
      </div>
      <img src={newsImg} />
      <NewsContent />
    </div>
  );
}
