import css from 'styled-jsx/css';

export default css`
  .container {
    background: #232121;
    position: relative;
  }

  .logo {
    position: absolute;
    top: 30px;
    right: 30px;
    color: #fff;
    font-size: 24px;
    font-weight: 500;
  }

  ul {
    margin: 40vh 30px 0 0;
    list-style: none;
  }

  li {
    text-align: right;
    margin-bottom: 12px;
  }

  li a {
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #aaa;
    display: inline-block;
    position: relative;

    transition: color 0.2s ease-in-out;
    -webkit-transition: color 0.2s ease-in-out;
    -moz-transition: color 0.2s ease-in-out;
  }

  li a:hover,
  li a.active {
    color: #fff;
  }

  li a::before {
    display: block;
    content: '';
    width: 0;
    height: 1px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;

    transition: width 0.2s ease-in-out;
    -webkit-transition: width 0.2s ease-in-out;
    -moz-transition: width 0.2s ease-in-out;
  }

  li a.active::before,
  li a:hover::before {
    width: 100%;
  }

  .year {
    color: #aaa;
    font-size: 12px;
    position: absolute;
    bottom: 30px;
    right: 30px;
  }
`;
