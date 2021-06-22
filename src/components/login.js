import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); //Comme le status et sa son

  const signIn = (e) => {
    e.preventDefault();
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(
          auth
        ); /**si la creation de lemail et du mot de passe a reussi  */
      })
      .catch((error) => alert(error.message));
  };
  return (
    <Container>
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <LoginForm>
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)} //on aura maintenant acces a la valeur de linput lors du changement
          />

          <h5>Password</h5>
          <input
            type="password"
            value={email}
            onChnage={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn}>
            Sign-in
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Condition of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <Register onClick={register}>Create your account</Register>
      </LoginForm>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: white;

  .login_logo {
    margin: 20px auto;
    width: 100px;
    object-fit: contain;
  }
`;
const LoginForm = styled.div`
  width: 300px;
  border: solid lightgray 1px;
  border-radius: 5px;
  padding: 20px;
  height: fit-content; //(LA PLUS GRANDE HAUTEUR ENTRE CELLE MINIMAL INTRESEQUE ET LE MINIMUM ENTRE LA HAUTEUR INTRESEQUE PREFERE ET CELLE DISPONIBLE)
  display: flex;
  flex-direction: column;
  h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }
  form > h5 {
    margin-bottom: 5px;
  }
  form > input {
    height: 30px;
    margin-bottom: 10px;
    background-color: white;
    width: 98%;
  }
  form > button {
    border: 1px solid;
    background-color: #f0c14b;
    color: #111;
    border-color: #a88734 #9c7e31 #846a29;
    margin-top: 10px;
    width: 100%;
    height: 30px;
    border-radius: 2px;
  }
  p {
    margin-top: 15px;
    font-size: 12px;
  }
`;

const Register = styled.button`
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: darkgray;
`;
export default Login;
