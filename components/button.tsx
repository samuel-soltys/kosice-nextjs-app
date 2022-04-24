import { MouseEventHandler } from "react";
export const Button = ({
  color,
  value,
  chevron,
  onClick,
}: {
  color: string;
  value: string;
  chevron?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button className={`button ${color}`} onClick={onClick}>
      {value}
      {chevron && (
        <div className="ms-3 d-flex">
          <svg
            width="11"
            height="15"
            viewBox="0 0 11 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 14L10 7.5L0.999999 1"
              stroke="#191645"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      )}
    </button>
  );
};
