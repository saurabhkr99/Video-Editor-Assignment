import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";

import { setUsers } from "./redux/users/action";
import Spinner from "./Spinner";

const getUserInfoData = async (userId) => {

    const url = `https://reqres.in/api/users/${userId}`
    try {
        const response = await axios.get(url)
        console.log('response:-', response);
        return response.data.data
    } catch (error) {
        console.log(error);
    }
}

const GetUserBtn = (props) => {
    const { userId,setUsers } = props
    const [loading,setLoading] = useState(false)
    console.log("GetUserBtn props--", props);

    const handleClick = () => {
        setLoading(true)
        getUserInfoData(userId).then((data) => {
            setLoading(false)
            setUsers(data)
        })
        .catch((e)=>{
            setLoading(false)
        })
    }

    
    return (
         <>
             {loading  && <Spinner />}
          <div className="me-2">
              <button className="btn btn-primary"  onClick={handleClick}>
                  userId:{userId}
              </button>
          </div>
         </>
    )
}

export default connect(null,{setUsers}) (GetUserBtn);