import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useAuth} from '../../contexts/AuthContext'



export default function Dashboard() {
    const {logout} = useAuth();
    const [err,setErr] = useState('');
    const history = useHistory();

    async function handleLogout(){
        setErr('');
        try{
            await logout();
            history.push('/signup');
        }
        catch{
            setErr('Failed to Logout');
        }
    }
    return (
        <div>
            Dashboard Niggo
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
