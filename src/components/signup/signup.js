import React,{useRef,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './signup.module.css';
import Form from '../form/form';
import {useAuth} from '../../contexts/AuthContext'
 

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    minHeight : 300,
    maxWidth : 400,
    maxHeight : 500
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Signup() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const emailRef = useRef();
    const passwordRef = useRef();
    const confpasswordRef = useRef();
    const {signup} = useAuth();
    

    const [err,setErr] = useState();
    const [loading,setLoading] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        console.log('hello')
        if (!passwordRef.current.value) return setErr("password is required")
        if (passwordRef.current.value !== confpasswordRef.current.value){
            return setErr("Passwords do not match");
        }
        if (!emailRef.current.value) return setErr("Email is required");
        try{
            setLoading(true);
            setErr('');
            await signup(emailRef.current.value,passwordRef.current.value);
        }
        catch(error){
            return setErr("failed to create account");
        }

        setLoading(false);
    }

    const props = {emailRef,passwordRef,confpasswordRef,loading,err,handleSubmit};
    return (
    <div className={styles.form}>
            <Form signup={true} props={props} />
      </div>
    );
  }