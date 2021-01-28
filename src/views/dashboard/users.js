import React, { useState, useEffect } from 'react';
import axios from "axios"

const Users = () => {




    return (
        <div>
            {
                users.map((user) => {
                    <p>{user.email}</p>
                })
            }
        </div>
    )
}

export default Users
