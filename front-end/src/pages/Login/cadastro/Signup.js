//formik
import {Formik, Form} from "formik";
import * as Yup from "yup";

//redux & auth
import {connect} from "react-redux";
import {signupUser} from "./userActions";
import {useHistory} from "react-router-dom;"

const Signup =({ signupUser }) => {
  const history = useHistory();
  return(
    <div>
      <p>MemeberSignup</p>
      <Formik 
        initialValues={{
          email:"",
          password:"",
          repeatPassword:"",
          name:"",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("email invalido")
            .required("Required"),
          password: Yup.string()
          .min(8,"Senha muito curta")
          .max(30, "Senha muito larga")
          .required("Required"),
          name: Yup.string().required("Required"),
          repeatPassword: Yup.string()
            .required("Required")
            .oneOf([Yup.red("password")],"Senha diferentes"),
        })}
        onSubmit={(values, {setSubmitting, setFieldError}) =>{
          signupUser(values,history,setFieldError, setSubmitting);
        }}
      >
        {({isSubmitting})} =>(
          <Form>
            <TextInput></TextInput>
          </Form>
        )
      </Formik>
    </div>
  )
}