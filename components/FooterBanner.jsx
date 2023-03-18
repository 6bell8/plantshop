import React from "react";
import Link from "next/link";

const FooterBanner = () => {
  return (
    <div id="footer">
      <Link href={"/"}>
        <span className="nameLogo" alt=""></span>
      </Link>
      <p className="email">email.&nbsp; parkgutime@gmail.com</p>
      <span className="gitLogo"></span>
      <p className="copyright">Copyright © parkjinsung. All Rights Reserved.</p>
    </div>
  );
};

export default FooterBanner;
