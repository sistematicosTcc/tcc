import axios from "axios"
import { response } from "express";
import { sessionService } from 'redux-react-session';


const remoteUrl = "http://localhost:3333/";
const localUrl = "http://localhost:3000";
const currentUrl = localUrl;


export const loginUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {
  return () =>{
    axios.post(`${currentUrl}/login`,credentials,{
      Headers:{
        "Context-Type":"application/json"
      },
    })
    .then((response) => {
      const {data} = response;

      if (data.status === "FAILED"){
        const {message} = data;
        //check error
        if(message.includes("credentials")){
          setFieldError("email",message);
          setFieldError("password", message);
        } else if (message.includes("password")){
          setFieldError("password", message)
        }
      } else if (data.status === "SUCCESS"){
        const userData = data.data[0]

        const token = userData._id;

        sessionService.saveSession(token)
        .then(()=>{
          sessionService.saveUser(userData).then(()=> {
            history.push("/dashboard");
          }).catch((err) => console.log(err));
        }).catch((err) => console.log(err));
      }

      setSubmitting(false);
    }).catch((err) => console.log(err));

  }
};

export const signupUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
  ) => {
    return (dispatch) => {
      axios.post(`${currentUrl}/cad`,credentials,
      {
        Headers:{
          "Context-Type":"application/json"
        },
      })
      .then((response)=>{
        const {data} = response;

        if (data.status === "FAILED"){
          const { message } = data;
          
          //check err
          if(message.includes("name")){
            setFieldError("name",message);
          } else if (message.includes("email")){
            setFieldError("email", message)
          } else if (message.includes("passowrd")){
            setFieldError("passowrd", message)
          }

        } else if (data.status === "PENDING"){
          const {email} = credentials;
          history.push(`/emailsent/${email}`)
        }
        
        setSubmitting(false);

      }).catch((err) => console.error(err));

    }
  }