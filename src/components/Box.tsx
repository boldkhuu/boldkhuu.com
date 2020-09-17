import { COLORS } from '../constants/styles';

interface ListItem {
  text: string;
  link?: string;
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
        {items.map(({ text }, index) => (
          <li key={`${text}-${index}`}>{text}</li>
        ))}
      </ul>

      <style jsx>{`
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
      `}</style>
    </div>
  );
};
