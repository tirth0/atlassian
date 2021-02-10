import React,{useState} from 'react'
import {useHistory,Link} from 'react-router-dom'
import {useAuth} from '../../contexts/AuthContext'
import {Card,Button} from 'react-bootstrap'
import classes from './dashboard.module.css'



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
    const data = [
        {
            title : "Discrete Maths",
            content : `Assignments for the session 2021-2022`,
            link : '/'
        },
        {
            title : "Data Structures",
            content : `Assignments for the session 2021-2022`,
            link : '/'
        },
        {
            title : "Data Communications",
            content : `Assignments for the session 2021-2022`,
            link : '/'
        },
        {
            title : "Mathematics",
            content : `Assignments for the session 2021-2022`,
            link : '/'
        },
        {
            title : "Computer Organisation",
            content : `Assignments for the session 2021-2022`,
            link : '/'
        }
    ]
    const CardList = data.map((elem,id)=>{
        return <Card className={classes.card}  key={id}>
        <Card.Img variant="top" src="" alt="img"/>
        <Card.Body>
          <Card.Title>{elem.title}</Card.Title>
          <Card.Text>
            {elem.content}
          </Card.Text>
          <Link to={elem.link} variant="btn-primary primary">Go somewhere</Link>
        </Card.Body>
      </Card>
    });
    return (
        <div>
            <div className={classes.cardContainer}>
                {CardList}
            </div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
