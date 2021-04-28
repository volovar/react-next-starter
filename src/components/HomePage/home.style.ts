import { css } from "@emotion/react";

export const heroCss = css`
  color: #333;
  width: 100%;
`;

export const titleCss = css`
  font-size: 48px;
  line-height: 1.15;
  margin: 0;
  padding-top: 80px;
  text-align: center;
  width: 100%;
`;

export const descriptionCss = css`
  text-align: center;
`;

export const rowCss = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 80px auto 40px;
  max-width: 880px;
`;

export const cardCss = css`
  border: 1px solid #9b9b9b;
  color: #434343;
  padding: 18px 18px 24px;
  text-align: left;
  text-decoration: none;
  width: 220px;

  &:hover {
    border-color: #067df7;
  }

  & h3 {
    color: #067df7;
    font-size: 18px;
    margin: 0;
  }

  & p {
    color: #333;
    font-size: 13px;
    margin: 0;
    padding: 12px 0 0;
  }
`;
