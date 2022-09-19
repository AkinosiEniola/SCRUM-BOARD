import React from "react";
import'./Sign-in.css';
import content from "../Static";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link} from 'react-router-dom';

const schema = yup.object().shape({
    fullname: yup.string().required().min(6),
    email: yup.string().required('Please enter a valid email').email(),
    password: yup.string().required('please enter a password').min(6),
});

const Signin = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => console.log(data);

    return(
    <div className="signin">
       <div className="already">
        <h1>Already have an account?</h1>
        <p>Sign in here!</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='inform'>
            {content.inputs.map((input, key) => {
                return(
                    <div key = {key}>
                        <label htmlFor={input.name}>{input.label}:</label>
                        <br />
                        <input type={input.type} name={input.name} placeholder={input.placeholder} {...register(input.name)}/>
                        <br />
                        <span className='messages'>{errors[input.name]?.message}</span>
                    </div>
                );
            })}
            <label>Project Name:</label>
              <select className='mr'>
                  <option>Srumboard</option>
              </select> <br />
             <Link to='/scrumboard'><button className='inbutton'>SIGN IN</button></Link>
             <p>Don't have an account? <Link to='/Signup'>Signup</Link></p>
             <p><Link to='/'>Back to home</Link></p> 
        </form>
        </div>
    );
};


export default Signin;
