import SignupForm from "./SignupForm.jsx";
import "./Signup.css";

export default function Signup() {
  const showModal = true;
  const fullscreen = true;
  return (
      <div className="container-fluid bg-black signup-container">
          <div className="card signup-body">
            <div className="text-center">
              <h1>NEWS+</h1>
              <h6>Manage your account, explore personalised content and discover our newsletters.</h6>
            </div>
              <SignupForm />
            </div>
      </div>
  );
}
