import React, { ReactElement } from "react";
import Link from "next/link";
import { navCss, ulCss, liCss, aCss } from "./nav.style";

const links = [
  { href: "https://zeit.co/now", label: "ZEIT" },
  { href: "https://github.com/zeit/next.js", label: "GitHub" }
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav: React.FC = (): ReactElement => (
  <nav css={navCss}>
    <ul css={ulCss}>
      <li css={liCss}>
        <Link href="/">
          <a css={aCss}>Home</a>
        </Link>
      </li>

      {links.map(({ key, href, label }) => (
        <li css={liCss} key={key}>
          <a css={aCss} href={href}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
