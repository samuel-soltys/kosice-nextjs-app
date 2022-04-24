export const PopUp = ({ heading, content, id }: { heading: string; content: any; id: string }) => {
  return (
    <div id={id} className="popup-wrap">
      <span className="shadow"></span>
      <div className="popup">
        <div className="deco">
          <svg width="390" height="160" viewBox="0 0 390 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_95_39)">
              <path
                d="M97.5 72C51.1109 73.4046 -2 61.5 -2 61.5V-12.5L391.5 -6.5V76.5C391.5 76.5 380 93.5 333 76.5C292.56 61.8727 269.396 51.5467 226.5 48.5C170.5 44.5226 146.796 70.5074 97.5 72Z"
                fill="#00E0A1"
              />
              <path
                opacity="0.4"
                d="M274.531 81.9317C244.324 50.7911 171 43 171 43H415V174C415 174 390.405 158.456 373.38 151.151C348.039 140.278 326.687 150.395 305.226 132.964C287.242 118.357 290.684 98.5841 274.531 81.9317Z"
                fill="#00E0A1"
              />
            </g>
            <defs>
              <clipPath id="clip0_95_39">
                <rect width="390" height="160" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          onClick={() => {
            document.getElementById(id).style.display = "none";
          }}
          className="mark-x"
        >
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.25 8.75L8.75 26.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.75 8.75L26.25 26.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <h2>{heading}</h2>
        {content}
      </div>
    </div>
  );
};
