import React,{useState,useEffect} from 'react'
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
            {elem.description}
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
    const url = "http://localhost:8080"
    const [data,setData] = useState([]);
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
    useEffect(()=>{
        axios.post(`${url}/classroomList`,{
            user : currentUser.currentUser.email
        })
        .then(res=>{
            console.log(res.data);
            setData(res.data);
        })
        .catch(error=>{
            console.log(error);
        });
    },[]);

    const addClassroom = () => {
        let newData = data;
        let body = {
            user : currentUser.currentUser.email
        }
        axios.post(`${url}/addclassRoom`,body)
        .then(res=>{
            console.log(res.data);
            setData([...data,res.data]);

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
