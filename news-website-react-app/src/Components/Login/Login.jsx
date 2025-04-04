import LoginForm from "./LoginForm.jsx";
import "./Login.css"
export default function Login() {
  const showModal = true;
  const fullscreen = true;
  return (
    <div className="container-fluid bg-black signup-container">
    <div className="card signup-body">
      <div className="text-center">
        <h1>NEWS+</h1>
        <h6>Manage your account, explore personalised content and discover our newsletters.</h6>
      </div>
        <LoginForm />
      </div>
</div>
      
  );
}
