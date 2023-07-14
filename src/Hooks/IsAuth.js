import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const IsAuth = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();


  useEffect(()=>{

    const getUser = async() =>{
        await axios({
            method: 'POST',
            withCredentials: true,
            url: 'http://localhost:5001/api/users/user'
        }).then( (res) =>{
            if(res.status ===200 && pathname === '/login'){
                navigate('/TicketConsole')
            }
            // console.log(res.data.user)
        }).catch(e => {
            navigate('/login', {replace: true});
            console.log(e)
        })
    }
    
    getUser().catch(console.error)
  }, [])

  
};

export default IsAuth;
