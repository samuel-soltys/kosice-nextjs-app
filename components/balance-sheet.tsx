export const BalanceSheet = ({ balance }: { balance: number }) => {
  return (
    <div className="balance-sheet">
      <span>Balance:</span>
      <h2>{balance} €</h2>
      <span className="balance-deco">
        <svg width="116" height="122" viewBox="0 0 116 122" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_60_199)">
            <path
              d="M42.158 29.5202L15.3389 38.6045L24.3107 65.0917L51.1298 56.0074L42.158 29.5202Z"
              stroke="#191645"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M84.3025 15.2448L57.4834 24.3291L66.4553 50.8163L93.2744 41.732L84.3025 15.2448Z"
              stroke="#191645"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M98.4011 56.8674L71.582 65.9517L80.5539 92.4389L107.373 83.3546L98.4011 56.8674Z"
              stroke="#191645"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M56.2566 71.1428L29.4375 80.2271L38.4094 106.714L65.2285 97.63L56.2566 71.1428Z"
              stroke="#191645"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_60_199">
              <rect width="97.083" height="95.8816" fill="white" transform="translate(0 31.146) rotate(-18.7125)" />
            </clipPath>
          </defs>
        </svg>
      </span>
    </div>
  );
};
