
import { useEffect,useState } from "react"
import styled from "styled-components"

 const Login=( {onLogin})=>{

    const [entredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [entredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const emailInput = (e) => {
    setEnteredEmail(e.target.value) ;
    setFormIsValid(
      e.target.value.includes("@") && entredPassword.trim().length >= 6
    );
  };
  const passwordInput = (e) => {
    setEnteredPassword(e.target.value);
    setFormIsValid(
      e.target.value.trim().length >= 6 && entredEmail.includes("@")
    );
  };
  const vlaidatePassword = () => {
    setEmailIsValid(entredEmail.includes("@"));
  };
  const validateEmail = () => {
    setPasswordIsValid(entredPassword.trim().length >= 6);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    onLogin(entredEmail.entredPassword);
  };

  return (
    <div>
      <DivLogin onSubmit={submitHandler}>
        <ContainerLogin>
          <LabelEmail htmlFor="email">E-mail</LabelEmail>
          <Input
            onBlur={validateEmail}
            id="email"
            onChange={emailInput}
            type="email"
            value={entredEmail}
            style={
              emailIsValid === false
                ? { backgroundColor: "#ff000072" }
                : { backgroundColor: "#0026ff71" }
            }
          />
          <br />
          <LabelPass htmlFor="password">Password</LabelPass>
          <Input
            onBlur={vlaidatePassword}
            id="password"
            onChange={passwordInput}
            type="password"
            value={entredPassword}
            style={
              passwordIsValid === false
                ? { backgroundColor: "#ff000072" }
                : { backgroundColor: "#0026ff71" }
            }
          />
          <br />
          <DivBtn>
            <ButtonLogin disabled={!formIsValid} onClick={onLogin}>
              Login
            </ButtonLogin>
          </DivBtn>
        </ContainerLogin>
      </DivLogin>
    </div>
  );
};
export default Login
const ContainerLogin = styled.div`
  background-color: #FFFFFF;
  width: 650px;
  height: 280px;
  border-radius: 12px;
  padding: 40px 20px;
  box-shadow: 0px 0px 4px 0.4px;
`;
const DivLogin = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const LabelEmail = styled.label`
  margin-right: 70px;
  margin-left: 10px;
  font-weight: 600;
`;
const LabelPass = styled.label`
  margin-right: 48px;
  margin-left: 10px;
  font-weight: 600;
`;
const Input = styled.input`
  /* width: 550px;
  border-radius: 6px;
  border: 1px solid #B7B4B4;
  height: 30px;
  margin-top: 15px; */
  padding: 10px 18px 9px 18px;
  background: #FFFFFF;
  border-radius: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #222222;
  border: none;
  outline: none;
  margin-top: 15px;
  width: 550px;
`;
const ButtonLogin = styled.button`
  background-color: #4A026B;
  color: #fff;
  border-radius: 10px;
  width: 90px;
  height: 50px;
  font-size: 17px;
  border: 0;
`;
const DivBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;





