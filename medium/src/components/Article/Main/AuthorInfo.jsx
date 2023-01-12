import authorpro from "../../../IMGS/authorpro.png";
import fb from "../../../IMGS/socialIcons/fb.svg";
import linkin from "../../../IMGS/socialIcons/linkin.svg";
import twitter from "../../../IMGS/socialIcons/twitter.svg";
import share from "../../../IMGS/socialIcons/share.svg";

export default function AuthorInfo() {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <img src={authorpro} alt="" />
        <div>
          <div className="author-name">Cassie Kozyrkov</div>
          <div className="d-flex justify-content-between date-post">
            <div>Dec 27, 2022</div>
            <div>9 min read</div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center social-icons">
        <img src={fb} />
        <img src={twitter} />
        <img src={linkin} />
        <img src={share} />
      </div>
    </div>
  );
}
