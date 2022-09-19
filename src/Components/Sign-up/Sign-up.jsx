import React from 'react';
import './Sign-up.css';
import content from '../Static';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

const schema = yup.object().shape({
    fullname: yup.string().required().min(6),
    email: yup.string().required('Please enter a valid email').email(),
    password: yup.string().required('please enter a password').min(6),
});

const Signup = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        console.log('Signup successful')
    }

    return(
    <div className="sign-up">
        <h1>Welcome to CHATSCRUM!</h1>

        <form onSubmit={handleSubmit(onSubmit)} className='upform'>
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

            <label>Usertype:</label>
            <select className="mr" name="title">
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
            </select> <br /> <br />

            <div>
            <input className="agree" type="checkbox" /> 
            <label htmlFor="terms"> I agree to the Terms and Conditions</label>
            </div>

            <button className='upbutton'>SIGN UP</button>
             <p>Already have an account? <Link to='/Signin'>SignIn</Link></p>
             <p><Link to='/'>Back to home</Link></p> 
        </form>
        </div>
    );
};


export default Signup;