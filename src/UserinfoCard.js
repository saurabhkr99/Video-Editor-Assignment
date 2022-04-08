import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';





function UserinfoCard(props) {
    const { userInfoData } = props
    console.log("Userifocard props:-", userInfoData);

    

    return (

        <div className='d-flex justify-content-center align-items-center mb-5' >
            <div className="card my-card">
                {
                    !userInfoData.avatar ?
                       <div className='p-5'> 
                       <h1>click on below button</h1> 
                       </div>:
                        <>
                            <img src={userInfoData.avatar} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h1> {userInfoData.first_name} {userInfoData.last_name}</h1>
                                <h5 className="card-title">{userInfoData.email}</h5>
                            </div>
                        </>

                }
            </div>
        </div>


    )

}
function mapStateToProps(store) {
    console.log("checking store in userinfocard:-", store);
    return {
        userInfoData: store.users.user
    }
}

export default connect(mapStateToProps)(UserinfoCard)