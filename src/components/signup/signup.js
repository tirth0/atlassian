import React,{useRef,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './signup.module.css';
import Form from '../form/form';
import {useAuth} from '../../contexts/AuthContext';
import {useHistory} from 'react-router-dom';

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
    const {signup,login} = useAuth();
    const history = useHistory();
    

    const [err,setErr] = useState();
    const [loading,setLoading] = useState(false);
    const [page,setPage] = useState(true);
    const msg = page?"Already Have an Account?" :"Don't Have an account?"

    async function handleSignup(e){
        e.preventDefault();
        console.log('hello')
        if (passwordRef.current.value !== confpasswordRef.current.value){
            return setErr("Passwords do not match");
        }

        try{
            setLoading(true);
            setErr('');
            await signup(emailRef.current.value,passwordRef.current.value);
            history.push("/");
        }
        catch(error){
            return setErr("failed to create account");
        }

        setLoading(false);
    }

    async function handleLogin(e){
        e.preventDefault();
        console.log('hello')
        try{
            setLoading(true);
            setErr('');
            await login(emailRef.current.value,passwordRef.current.value);
            history.push("/");
        }
        catch(error){
            return setErr("failed to Login");
        }
        setLoading(false);
    }

    const handlePage = () => {
        setPage(!page);
    }

    const props = {emailRef,passwordRef,confpasswordRef,loading,err,handleSignup,handleLogin};
    return (
    <div className={styles.form}>
            <Form signup={page} props={props} />
            <p>{msg}<button className={styles.toggle} onClick={handlePage}>Click Here</button></p>
      </div>
    );
  }