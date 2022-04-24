import Router from "next/router";
export const FooterMenu = () => {
  return (
    <div className="footer-menu-wrap">
      <div className="footer-menu">
        <a href="#" onClick={() => Router.push("./dashboard")}>
          <div className="icon-container">
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 1.2915V29.7082" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M21.9583 6.4585H12.2708C11.0718 6.4585 9.92194 6.9348 9.07412 7.78262C8.2263 8.63044 7.75 9.78033 7.75 10.9793C7.75 12.1783 8.2263 13.3282 9.07412 14.176C9.92194 15.0239 11.0718 15.5002 12.2708 15.5002H18.7292C19.9282 15.5002 21.0781 15.9765 21.9259 16.8243C22.7737 17.6721 23.25 18.822 23.25 20.021C23.25 21.22 22.7737 22.3699 21.9259 23.2177C21.0781 24.0655 19.9282 24.5418 18.7292 24.5418H7.75"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </a>
        <a href="#" onClick={() => Router.push("./education")}>
          <div className="icon-container">
            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 25.1877C5 24.3312 5.32924 23.5099 5.91529 22.9043C6.50134 22.2987 7.2962 21.9585 8.125 21.9585H25"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.125 2.5835H25V28.4168H8.125C7.2962 28.4168 6.50134 28.0766 5.91529 27.471C5.32924 26.8654 5 26.0441 5 25.1877V5.81266C5 4.95623 5.32924 4.13488 5.91529 3.5293C6.50134 2.92371 7.2962 2.5835 8.125 2.5835V2.5835Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </a>
        {/* <a href="#" onClick={() => Router.push("./profile")}> */}
        <div className="icon-container">
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M25.8332 27.125V24.5417C25.8332 23.1714 25.2888 21.8572 24.3199 20.8883C23.3509 19.9193 22.0368 19.375 20.6665 19.375H10.3332C8.96288 19.375 7.64872 19.9193 6.67979 20.8883C5.71085 21.8572 5.1665 23.1714 5.1665 24.5417V27.125"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.5002 14.2083C18.3536 14.2083 20.6668 11.8951 20.6668 9.04167C20.6668 6.1882 18.3536 3.875 15.5002 3.875C12.6467 3.875 10.3335 6.1882 10.3335 9.04167C10.3335 11.8951 12.6467 14.2083 15.5002 14.2083Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
