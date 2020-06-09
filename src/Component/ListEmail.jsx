import React, { useState, useEffect } from 'react';
import firebase from '../firebase.js';

function useEmail(){
    const [emails,setEmails] = useState([])
    useEffect(() => {
        firebase
            .firestore()
            .collection('time')
            .onSnapshot((snapshot) => {
                const newEmails = snapshot.docs.map((docs) => ({
                    id: docs.id,
                    ...docs.data()   
                }))

                setEmails(newEmails)
            })
    }, [])
    return emails
}
const ListEmail = () => {
    const emails = useEmail();
    return(
        <div className='listEmail'>
            <ul>
                {emails.map((email) => 
                <li key={email.id}>
                    <div>
                        <h2>{email.email}</h2>
                        <p>{email.password}</p>
                    </div>
                </li>
                )}
            </ul>
        </div>
    )
}
export default ListEmail;