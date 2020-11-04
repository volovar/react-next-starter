import React, { ReactElement } from "react";
import {
  cardCss,
  descriptionCss,
  heroCss,
  rowCss,
  titleCss
} from "./home.style";

const Home: React.FC = (): ReactElement => (
  <div css={heroCss}>
    <h1 css={titleCss}>Welcome to Next.js!</h1>
    <p css={descriptionCss}>
      To get started, edit <code>pages/index.js</code> and save to reload.
    </p>

    <div css={rowCss}>
      <a href="https://nextjs.org/docs" css={cardCss}>
        <h3>Documentation &rarr;</h3>
        <p>Learn more about Next.js in the documentation.</p>
      </a>
      <a href="https://nextjs.org/learn" css={cardCss}>
        <h3>Next.js Learn &rarr;</h3>
        <p>Learn about Next.js by following an interactive tutorial!</p>
      </a>
      <a
        href="https://github.com/zeit/next.js/tree/master/examples"
        css={cardCss}
      >
        <h3>Examples &rarr;</h3>
        <p>Find other example boilerplates on the Next.js GitHub.</p>
      </a>
    </div>
  </div>
);

export default Home;
