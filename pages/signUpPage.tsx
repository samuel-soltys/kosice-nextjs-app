import { InputField } from "../components/InputField";
import { Button } from "../components/button";

import Router from "next/router";

function submitOutputInput(users: any) {
  const usersArr = JSON.parse(users.users);
  //   console.log(usersArr);
  usersArr.map((user: any) => {
    const input_email = document.getElementById("input-login-email").value;
    const input_username = document.getElementById("input-login-username").value;
    const input_password = document.getElementById("input-login-password").value;
    if (input_email && input_password && input_username) {
      console.log("Sme tu!");
    }
  });
}

const SignUp = ({ props }: { props: any }) => {
  const users = props;
  return (
    <div className="container mt-5" id="login-container">
      <svg id="space-filler-1" width="290" height="213" viewBox="0 0 290 213" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_33_12)">
          <path
            d="M0.5 0L299.5 5.04632e-06L299.5 46L299.5 87L299.5 113.5L299.5 245.5C299.5 245.5 275 145.5 238 98.5C201 51.5 170.486 72.7928 133.5 46C70 -2.83439e-07 0.5 0 0.5 0Z"
            fill="#191645"
          />
          <path
            opacity="0.5"
            d="M52.0064 -4.25867L332.047 -23.1305L332.047 22.8695L332.047 63.8695L306.006 245.241C306.006 245.241 282.015 193.206 260.006 164.241C217.988 108.942 198.67 150.813 133.006 63.8696C67.3426 -23.0742 52.0064 -4.25867 52.0064 -4.25867Z"
            fill="#191645"
          />
        </g>
        <defs>
          <clipPath id="clip0_33_12">
            <rect width="290" height="213" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg id="space-filler-2" width="226" height="208" viewBox="0 0 226 208" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_33_16)">
          <path
            d="M-48.5889 144.428L-1.50055 -1.50002C42.9995 56 44.4995 65 69.4998 134.5C94.5 204 162.5 144.428 154.411 217.753C146.323 291.079 33.4998 288 33.4998 288L-48.5889 144.428Z"
            fill="#00E0A1"
          />
          <path
            opacity="0.4"
            d="M0.311781 134.608L-30.5886 22.9408C-16.9244 68.8184 64.1934 28.2175 99.7591 95.8647C135.325 163.512 192.5 169 232.5 215C272.5 261 83.7012 277.324 83.7012 277.324L0.311781 134.608Z"
            fill="#00E0A1"
          />
        </g>
        <defs>
          <clipPath id="clip0_33_16">
            <rect width="226" height="208" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <div className="heading-container">
        <h1>Welcome to</h1>
        <h1 className="headline">Kids Banking</h1>
      </div>
      <h4>Sign Up</h4>
      <InputField identifier="input-signup-email" type="text" textValue="Email:" />
      <InputField identifier="input-signup-username" type="text" textValue="Username:" />
      <InputField identifier="input-signup-password" type="password" textValue="Password:" />
      <div className="align-end-container">
        <Button
          value="Sign Up"
          color="primary"
          chevron={true}
          onClick={() => {
            submitOutputInput(users);
          }}
        />
      </div>
      <div className="line-divider">
        <hr className="line"></hr>
        <span>OR</span>
        <hr className="line"></hr>
      </div>
      <div className="redirect-login-text">
        <p>Already have an account?</p>
        <a href="#" onClick={() => Router.push("/")}>
          Log In here
        </a>
      </div>
    </div>
  );
};

export default SignUp;
