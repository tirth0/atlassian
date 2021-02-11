import React,{useState} from 'react'
import {useHistory,Link} from 'react-router-dom'
import {useAuth} from '../../contexts/AuthContext'
import {Card,Button} from 'react-bootstrap'
import classes from './dashboard.module.css'
import axios from 'axios';


const CardTable = ({data}) =>{
    const CardList = data.map((elem,id)=>{
        console.log(data.length)
        return <Card className={classes.card}  key={id}>
        <Card.Img variant="top" src="/card.jpg" alt="img"/>
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
        </div>
    )
}


export default function Dashboard() {
    const {logout} = useAuth();
    const [err,setErr] = useState('');
    const [ct,setCt] = useState(0);
    const [data,setData] = useState([
        {
            title : "Discrete Maths",
            content : `Assignments for the session 2021-2022`,
            link : '/',
            key : 'ASDCSWDS'
        },
        {
            title : "Data Structures",
            content : `Assignments for the session 2021-2022`,
            link : '/',
            key : 'ASWESDS'
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
    ]);
    const history = useHistory();
    const currentUser = useAuth();

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

    const addClassroom = () => {
        
        let newData = data;
        let body = {
            currentUser : currentUser.currentUser.email
        }
        axios.post('http://localhost:8080/addclassRoom',body)
        .then(res=>{
            console.log(res.statusText);
        })
        .catch(error=>{
            console.log(error);
        });
        
    }
    return (
        <div>
            <CardTable data={data}/>
            <button onClick={addClassroom}>Add Classroom</button>
        </div>
    )
}
