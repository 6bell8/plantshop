import React from "react";
import Link from "next/link";

const FooterBanner = () => {
  return (
    <div id="footer">
      <Link href={"/"}>
        <span class="nameLogo" alt=""></span>
      </Link>
      <p class="email">email.&nbsp; parkgutime@gmail.com</p>
      <span class="gitLogo"></span>
      <p class="copyright">Copyright © parkjinsung. All Rights Reserved.</p>
    </div>
  );
};

export default FooterBanner;
