import { Link } from "react-router-dom";

import style from "./404.module.scss";

const Page_404 = () => (
  <div className={style.page_404}>
    <h1 className="text-center ">404</h1>
    <img
      src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
      alt=""
    />
    <h2>Look like you are lost</h2>
    <h3>the page you are looking for not avaible!</h3>
    <Link to="/" className={style.link}>
      <h4>Go to Home</h4>
    </Link>
  </div>
);

export default Page_404;
