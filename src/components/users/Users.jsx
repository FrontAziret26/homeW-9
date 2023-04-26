import React,{useState,useEffect} from "react";
import styled from "styled-components";
const Users=()=>{
    const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);
    return(
        <div>
        {users.map((user) => (
          <BlockUsers key={user.id}>
           <BlockCard>
           <h3>{user.name}</h3>
            <p>{user.email}</p>
           </BlockCard>
          </BlockUsers>
        ))}
      </div>
    )
}
export default Users

const BlockUsers=styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const BlockCard=styled.div`
width: 500px;
height: 100px;
background-color: aqua;
margin-top: 30px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-radius: 10px;
background-image: url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1016-c-08_1-ksh6mza3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f584d8501c27c5f649bc2cfce50705c0');
color: white;
    
`