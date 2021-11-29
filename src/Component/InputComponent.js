import react, { useEffect } from "react";
import "./inputComponent.css";
import { useRef } from "react";

const InputOtpComponent = () => {
  const digits = [];

  digits[0] = useRef(null);
  digits[1] = useRef(null);
  digits[2] = useRef(null);
  digits[3] = useRef(null);

  const inputHandler = (current, next, previous, event) => {
    digits[current].current.focus();
    console.log(event);

    if (event.code == "Backspace") {
      if (previous == null) {
        return;
      }
      digits[previous].current.focus();
      return;
    }
    if (digits[current].current.value.length) {
      if (next == null) {
        return;
      }
      digits[next].current.focus();
    }
  };
  useEffect(() => {
    digits[0].current.focus();
  });

  return (
    <div className="input-container">
      <div className="input-box">
        <input
          maxLength="1"
          id="1"
          className="otp-input-field"
          onKeyUp={(event) => inputHandler(0, 1, null, event)}
          ref={digits[0]}
        />
        <input
          maxLength="1"
          id="2"
          className="otp-input-field"
          onKeyUp={(event) => inputHandler(1, 2, 0, event)}
          ref={digits[1]}
        />
        <input
          maxLength="1"
          id="3"
          className="otp-input-field"
          onKeyUp={(event) => inputHandler(2, 3, 1, event)}
          ref={digits[2]}
        />
        <input
          maxLength="1"
          id="4"
          className="otp-input-field"
          ref={digits[3]}
          onKeyUp={(event) => inputHandler(3, null, 2, event)}
        />
      </div>
      <div>
        <button className="btn-submit">Submit</button>
      </div>
    </div>
  );
};

export default InputOtpComponent;
