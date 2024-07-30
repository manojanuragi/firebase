
import React, { useState } from "react"
import styles from "./Signup.module.css"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../firebase"
import { Link , useNavigate} from "react-router-dom";
import InputControl from "../components/InputControl/InputControl";
export default function Signup(){
    const [values , setValues]= useState({
        name:"",
        email:"",
        password:""
    });
    const navigate=useNavigate();
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const [errmsg,setErrmsg]=useState("");
    const HandleSubmission = ()=>{
        if ( !values.name || !values.email || !values.password){
            setErrmsg("Error: All fields required !!");
            return;
        }
        setSubmitButtonDisabled(true);
        setErrmsg("");
        createUserWithEmailAndPassword(auth,values.email,values.password).then(async (res)=>{
            const user=res.user;
            
           await updateProfile(user,{
                displayName:values.name,
            });
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
                <h1 className={styles.heading}>Signup</h1>
                <InputControl onChange={(event)=>setValues((prev)=>({...prev,name:event.target.value}))} label="Name" placeholder="Enter Name" />
                <InputControl onChange={(event)=>setValues((prev)=>({...prev,email:event.target.value}))} label="Email" placeholder="Enter email address"/>
                <InputControl onChange={(event)=>setValues((prev)=>({...prev,password:event.target.value}))} label="Password"  type="password" placeholder="Enter Password"/>
                <div className={styles.footer}>
                    <b className={styles.error}>{errmsg && errmsg}</b>
                    <button onClick={HandleSubmission} disabled={submitButtonDisabled}>Sign up</button>
                    <p>
                        Already have an account? {" "}
                        <span>
                            <Link to="/login">Login</Link>
                        </span>
                    </p>

                </div>
            </div>
        </div>
    );
}