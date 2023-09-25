import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
function UserList() {
  const [isloading, setIsLoading ]= useState(false)
    const [data, setData]= useState([])
    //const [charger,setCharer] = useState(true)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response =>{ 
            console.log(response.data)
            setData(response.data)
           setIsLoading(true)
        }) 
        .catch(err=> console.log("Une erreur c'est produit" + err))
    }
      , [])
   
    return (
    <div className="">
      {!isloading      &&    <div className="is">La liste Des utilisteur n'est pas pu etre recuperer </div>}
    <Table striped="columns">
    <thead>
    <tr>
      <th>#</th>
      <th> Name</th>
      <th>User Name</th>
      <th>email</th>
      <th>adresse</th>
      <th>Nom de company</th>
    </tr>
  </thead>
  
  <tbody>
 {
     
     data.map(donnee=>(
    <tr key={donnee.id}>
      <td>{donnee.id}</td>
      <td>{donnee.name}</td>
      <td>{donnee.username}</td>
      <td>{donnee.email}</td>
      <td>{donnee.address.street}</td>
      <td>{donnee.company.name}</td>
    </tr>
        ))
    }
  </tbody>
</Table>
      </div>
    );
  }
  
  export default UserList;