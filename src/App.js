import React, { useState } from "react";
import "./style.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [step, setStep] = useState("create");

  // reset the form
  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirm("");
  };

  return (
    <>
      <div className="container">
        <h1>{step === "results" ? "Results" : "Create account"}</h1>
        <div>
          {step === "results" ? (
            <div>
              <p>{`Name: ${name}`}</p>
              <p>{`Email: ${email}`}</p>
              <p>{`Password: ${password}`}</p>
              <button
                onClick={event => {
                  event.preventDefault();
                  setStep("create");
                  console.log(step);
                }}
              >
                Edit your information
              </button>
            </div>
          ) : (
            <div>
              <form
                onSubmit={event => {
                  event.preventDefault();
                  if (password !== confirm) {
                    alert("Vos deux mots de passe ne sont pas identiques");
                    reset();
                  } else {
                    setStep("results");
                  }
                }}
                className="form"
              >
                <p>Name</p>
                <input
                  type="text"
                  placeholder="Jean Dupont"
                  value={name}
                  onChange={event => {
                    setName(event.target.value);
                  }}
                ></input>
                <p>Email</p>
                <input
                  type="email"
                  placeholder="jeandupont@lereacteur.io"
                  value={email}
                  onChange={event => {
                    setEmail(event.target.value);
                  }}
                ></input>
                <p>Password</p>
                <input
                  type="password"
                  placeholder="IErEACtEuR2020"
                  value={password}
                  onChange={event => {
                    setPassword(event.target.value);
                  }}
                ></input>
                <p>Confirm your password</p>
                <input
                  type="password"
                  placeholder="IErEACtEuR2020"
                  value={confirm}
                  onChange={event => {
                    setConfirm(event.target.value);
                  }}
                ></input>
                <button type="submit" className="button">
                  Register
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
