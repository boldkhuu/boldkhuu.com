import css from 'styled-jsx/css';

export const skillsList = css`
  padding: 30vh 0 0 80px;
`;

export const skill = css`
  .skill {
    width: 40vw;
    display: grid;
    grid-template-columns: 140px auto;
    grid-template-rows: 44px auto;
    margin-bottom: 40px;
  }

  h2 {
    font-size: 16px;
    color: #fff;
    float: left;
  }

  ul {
    float: right;
    list-style: none;
    overflow: hidden;
  }

  ul li {
    color: #aaa;
    font-size: 14px;
    float: left;
    margin-right: 24px;
  }
`;

export const meter = css`
  .meter {
    height: 1px;
    background-color: #333;
    grid-column: 1 / 3;
    position: relative;
  }

  .meter > div {
    background-color: #fff;
    width: 0;
    position: absolute;
    height: 1px;

    transition: width 0.2s ease-in-out;
    -webkit-transition: width 0.2s ease-in-out;
    -moz-transition: width 0.2s ease-in-out;
  }
`;
