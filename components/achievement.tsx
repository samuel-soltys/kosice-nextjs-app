export const Achievement = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="achievement">
      <svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 18.75C14.8325 18.75 18.75 14.8325 18.75 10C18.75 5.16751 14.8325 1.25 10 1.25C5.16751 1.25 1.25 5.16751 1.25 10C1.25 14.8325 5.16751 18.75 10 18.75Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.2625 17.3626L3.75 28.7501L10 25.0001L16.25 28.7501L14.7375 17.3501"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div>
        <div className="achievement-title">{title}</div>
        <div className="achievement-description">{description}</div>
      </div>
      <div></div>
    </div>
  );
};
