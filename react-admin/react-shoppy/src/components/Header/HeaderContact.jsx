import { GoLocation } from "react-icons/go";
import { FaTruck } from "react-icons/fa";
export default function HeaderContact() {
  return (
    <div className="container contact">
      <div className="thinText">Need help? Call us: (+98) 0234 456 789</div>
      <div className="order">
        <div className="location">
          <GoLocation />
          <a className="thinText">Our store</a>
        </div>
        <div className="truck">
          <FaTruck />
          <a className="thinText">Track your order</a>
        </div>
      </div>
    </div>
  );
}
