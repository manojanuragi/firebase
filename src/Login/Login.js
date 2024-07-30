
import React, { useState } from "react"
import styles from "./Login.module.css"
import {  signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";
import InputControl from "../components/InputControl/InputControl";
import { Link ,useNavigate} from "react-router-dom";
export default function Login(){
    const [values , setValues]= useState({
        
        email:"",
        password:""
    });
    const navigate=useNavigate();
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const [errmsg,setErrmsg]=useState("");
    const HandleSubmission = ()=>{
        if ( !values.email || !values.password){
            setErrmsg("Error: All fields required !!");
            return;
        }
        setSubmitButtonDisabled(true);
        setErrmsg("");
        signInWithEmailAndPassword(auth,values.email,values.password).then(async (res)=>{
            
            navigate('/');
            setSubmitButtonDisabled(false);
        }).catch((err)=>{
           setErrmsg(err.message);
            setSubmitButtonDisabled(false);

        });
            
        
        

    }
    return(
        <div className={styles.container}>
            <div className={styles.innerbox}>
                <h1 className={styles.heading}>Login</h1>
                <InputControl onChange={(event)=>setValues((prev)=>({...prev,email:event.target.value}))} label="Email" placeholder="Enter email address" />
                <InputControl onChange={(event)=>setValues((prev)=>({...prev,password:event.target.value}))} label="Password"  type="password" placeholder="Enter Password"/>
                <div className={styles.footer}>
                    <b className={styles.error}>{errmsg}</b>
                    <button disabled={submitButtonDisabled} onClick={HandleSubmission}>Login</button>
                    <p>
                        Don't have an account? {" "}
                        <span>
                            <Link to="/signup">Sign up</Link>
                        </span>
                    </p>

                </div>
            </div>
           
   
        </div>
    );
}