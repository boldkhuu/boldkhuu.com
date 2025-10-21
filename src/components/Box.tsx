import { COLORS } from '../constants/styles';

interface ListItem {
  text: string;
  link?: string;
  tag?: string;
}

interface BoxProps {
  title: string;
  items: ListItem[];
}

export const Box: React.FC<BoxProps> = ({ title, items }) => {
  return (
    <div className="box">
      <h2>{title}</h2>
      <ul>
        {items.map(({ text, link, tag }, index) => (
          <li key={`${text}-${index}`}>
            {link ? (
              <a href={link} target="_blank" rel="noreferrer">
                {text}
              </a>
            ) : (
              text
            )}
            {tag && <span className="tag">{tag}</span>}
          </li>
        ))}
      </ul>

      <style jsx>
        {`
          h2 {
            font-size: 2.4rem;
            color: ${COLORS.THIRD};
            margin-bottom: 2.4rem;
          }

          ul {
            list-style: none;
          }

          li {
            font-size: 2.4rem;
            margin-bottom: 1.2rem;
          }

          a {
            color: ${COLORS.SECOND};
            text-decoration: none;
            transition: color 0.3s ease;
          }

          a:hover {
            color: ${COLORS.THIRD};
          }

          .tag {
            font-size: 1.5rem;
            padding: 0.2rem 0.6rem;
            border-radius: 4px;
            margin-left: 1.5rem;
          }
        `}
      </style>
    </div>
  );
};
