import React from 'react'
import classes from './form.module.css'
import {Alert} from "react-bootstrap";
//pattern="(?=.*\d)(?=.*[a-z])(?=.*[!$%&(-/:-?_{}~])(?=.*[A-Z]).{8,}"
const Sign = ({emailRef,passwordRef,confpasswordRef,loading,err,handleSignup}) => {
    
    return(
        <div className={classes.formContainer}>
            
            <form className={classes.form} onSubmit={handleSignup}>
                <div id="email" className={classes.inp}>
                    <label htmlFor="email" className={classes.label}>Email Address</label>
                    <input type="email" ref={emailRef} className={classes.input1} placeholder="abc@xyz.pqr" required></input> 
                </div>
                <div id="password" className={classes.inp}>
                    <label htmlFor="password1" className={classes.label}>Password</label>
                    <input type="password" ref={passwordRef} className={classes.input1} id="password1" required></input> 
                </div>
                <div id="conpassword" className={classes.inp}>
                    <label htmlFor="confpassword" className={classes.label}>Confirm Password</label>
                    <input type="password" ref={confpasswordRef} className={classes.input1} id="confpassword" required></input> 
                </div>
                {err && <Alert variant="danger">{err}</Alert>}
                <div id="button">
                    <button type="submit" className={classes.button} disabled={loading}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

const Login = ({emailRef,passwordRef,loading,err,handleLogin}) => {
    return (
    <div className={classes.formContainer}>
        <form className={classes.form} onSubmit = {handleLogin}>
            <div id="email" className={classes.inp}>
                <label htmlFor="email" className={classes.label}>Email Address</label><br></br>
                <input type="email" ref={emailRef} className={classes.input1} placeholder="abc@xyz.pqr"></input> 
            </div>
            <div id="password" className={classes.inp}>
                <label htmlFor="password1" className={classes.label}>Password</label><br></br>
                <input type="password" ref={passwordRef} className={classes.input1} id="password1" ></input> 
            </div>
            {err && <Alert variant="danger">{err}</Alert>}
            <div id="button">
                    <button type="submit" className={classes.button} disabled={loading}>
                        Submit
                    </button>
            </div>
        </form>
    </div>
    );
}


export default function Form({signup,props}) {
    if (signup){
        return <Sign {...props}/>
    }
    else{
        return <Login {...props}/>
    }
}
