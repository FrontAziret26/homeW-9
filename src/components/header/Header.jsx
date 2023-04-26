import styled from "styled-components"
import Button from "../UI/button/Button"

const Header=({logOutHandler,isLogin,showUsers,showExpenses})=>{
    return(
        <Headers>
{isLogin && 
    <WrapperButtons>
      <Button onClick={showExpenses}>Expenses</Button>
      <Button onClick={showUsers}>Users</Button>
      <Button onClick={logOutHandler}>Log Out</Button>
      </WrapperButtons>
}
        </Headers>
    )
}
export default Header
const Headers=styled.div`
    width: 100%;
    height: 80px;
    background-color: aqua;
    margin-bottom:80px;
`
const WrapperButtons=styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-right: 20px;
`