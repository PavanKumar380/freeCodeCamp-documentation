const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [otp, setOtp] = useState(null);
  const [cd, setCd] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const timer = useRef();

  const handleClick = () => {
    setOtp(Math.round(100000 + (90000 * Math.random())));
    setCd(5);
    setButtonDisabled(true);

    timer.current = setInterval(() => {
      setCd(prev => {
        if(prev === 1) {
          setButtonDisabled(false);
          clearInterval(timer.current);
        }

        return prev - 1;
      })
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if(timer.current) clearInterval(timer.current);
    }
  }, []);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        {
          !otp
            ? `Click 'Generate OTP' to get a code`
            : otp
        }
      </h2>
      <p id="otp-timer" aria-live="assertive">
        {
          cd !== null
            ? cd === 0
              ? `OTP expired. Click the button to generate a new OTP.`
              : `Expires in: ${cd} seconds`
            : ''
        }
      </p>
      <button
        id="generate-otp-button"
        onClick={handleClick}
        disabled={buttonDisabled}
      >
        Generate OTP
      </button>
    </div>
  );
};