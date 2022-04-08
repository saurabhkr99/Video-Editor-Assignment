import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GetUserBtn from './GetUserBtn';
import UserinfoCard from './UserinfoCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from './Spinner';



function App() {
  const [usersData, setusersData] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  



  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=${page}`)
      .then((response) => {
        console.log("reponce logged--->", response)
         setTotalPages(response.data.total_pages) 
        setusersData([...usersData, ...response.data.data]);
      });
  }, [page]);

  console.log("usersData logged-->", usersData,totalPages)

  if (usersData.length == 0) {
    return <Spinner />
  }

  const getNextUsers = () => {
    setPage(page+1)
  }

  return (
    <>
      <UserinfoCard />

      <div className='d-flex justify-content-center align-items-center flex-wrap'>
        {
          usersData.map((user) => {
            console.log("each btn",user.id)
            return (
              <GetUserBtn userId={user.id} key={user.id} />
            )
          })
        }
      </div>

      {totalPages !== page && <div className='text-center mt-4'>
        <button onClick={getNextUsers} className='btn btn-primary text-center' >Next USERS</button>
      </div> }
    </>
  );
}

export default App;
