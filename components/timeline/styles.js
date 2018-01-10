import css from 'styled-jsx/css';

export const timeline = css`
  .timeline {
    padding: 30vh 0 0 80px;
    width: 40vw;
  }
`;

export const item = css`
  .item {
    display: grid;
    grid-template-columns: 70px auto;
    line-height: 1em;
  }

  .item .time {
    color: #fff;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    border-right: 2px solid #fff;
    padding-right: 30px;
  }

  .item.separator .time {
    border-right: 2px dotted #aaa;
  }

  .item .time .start,
  .item .time .end {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  .item .time .end {
    align-items: flex-end;
  }

  .item .content {
    padding-left: 24px;
  }

  h2 a {
    font-size: 20px;
    font-weight: 500;
    color: #fff;
  }

  .item.separator h2 a {
    color: #aaa;
    font-size: 13px;
    font-weight: 300;
  }

  .list {
    margin-top: 10px;
    overflow: hidden;
  }

  .list h3 {
    float: left;
    margin-right: 20px;
    font-size: 15px;
  }

  .list ul {
    list-style: none;
    overflow: hidden;
    float: left;
  }

  .list li {
    float: left;
    margin-right: 20px;
  }

  .list li a {
    color: #aaa;
    font-size: 15px;
  }

  .list li a:hover {
    color: #fff;
  }
`;
