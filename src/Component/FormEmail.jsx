import React, { useState } from 'react';

import firebase from 'firebase';

const FormEmail = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
function onSubmit(e){
    e.preventDefault()

    firebase
        .firestore()
        .collection('time')
        .add({
            email,
            password
        })
        .then(() => {
            setEmail('')
            setPassword('')
        })
}

        return(
            <div className="formEmail">
                <form onSubmit={onSubmit}>
                    <h4>Add email</h4>
                    <div>
                        <label>Email</label>
                        <input type="text" value={email} onChange={e => setEmail(e.currentTarget.value)}></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="text" value={password} onChange={e => setPassword(e.currentTarget.value)}></input>
                    </div>
                    <button>Add</button>
                </form>
            </div>
        )
        }
export default FormEmail;