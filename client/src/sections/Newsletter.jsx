import { useState} from "react";
import emailjs from "@emailjs/browser";

function Newsletter() {
  const [mail, setMail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState("success");

  const templateParams = {
    email: mail,
    shopUrl: import.meta.env.VITE_SHOP_URL,
  };

  const sendMail = async () => {
    try {
      emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_USER_ID
      );
      setAlertMsg(
        "Thank you for subscribing! Check your inbox for your 10% off code."
      );
      setAlertType("success");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 4000);
    } catch (error) {
      console.log(error);
      setAlertMsg("There was an error. Please try again later.");
      setAlertType("error");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 4000);
    }
  };

  return (
    <div className="px-3 py-4 flex flex-col items-center bg-background relative">
      {showAlert && (
        <div className="toast toast-top toast-end z-50">
          <div
            className={`alert ${
              alertType === "success" ? "alert-success" : "alert-error"
            } shadow-lg`}
          >
            <span>{alertMsg}</span>
          </div>
        </div>
      )}
      <p className="font-bold italic text-[22px]">
        GET 10% OFF YOUR FIRST ORDER
      </p>
      <p className="text-center text-base my-2">
        Subscribe to get special offers, free giveaways, and once-in-a-lifetime
        deals.
      </p>
      <p className="text-center text-xs mt-2 mb-4">
        Premium-quality, patterned tees designed for comfort and style. Order
        yours today and make simplicity your signature.
      </p>
      <form
        action="post"
        onSubmit={(e) => {
          e.preventDefault();
          sendMail();
        }}
        className="w-full flex flex-col items-center"
      >
        <div className="w-full flex flex-col items-center">
          <label className="rounded-sm focus-within:outline-0 input validator w-full max-w-[20rem]">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              placeholder="mail@site.com"
              required
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </label>
          <div className="validator-hint hidden text-left w-full max-w-[20rem]">
            Enter valid email address
          </div>
        </div>
        <button className="font-bold text-white py-2 px-6 bg-orange rounded-sm mt-4 w-[clamp(3rem,20rem,100%)]">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
