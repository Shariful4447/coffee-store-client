

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import axios from "axios";


const SignUp = () => {
    
        
        const {createUser}  = useContext(AuthContext);
    const handleRegister = e =>{
        e.preventDefault();
        
        const form = new FormData(e.currentTarget)
        const fullName = form.get('fullName');
        const photoUrl = form.get('photoUrl');
        const email = form.get('email');
        const password = form.get('password');
        console.log(fullName, photoUrl, email, password);
        createUser(email, password)
        .then(result =>{
            console.log(result.user);

            const user = {fullName, email, password}
            // using axios
            axios.post('http://localhost:8000/user', user)
            .then(data => {
                console.log(data.data);
                if(data.data.insertedId){
                            Swal.fire(
                                "Success!",
                                "User Created Success",
                                "success"
                         )
            
                        }
            })

            // // using fetch
            // fetch('http://localhost:3000/user', {
            //     method: 'POST',
            //     headers: {
            //         'content-type' : 'application/json',
            //     },
            //     body: JSON.stringify(user)
            // })
            // .then(res =>res.json())
            // .then(data => {
            //     console.log(data);
            //      if(data.insertedId){
            //         Swal.fire(
            //             "Success!",
            //             "User Created Success",
            //             "success"
            //      )
    
            //     }
            // })
            
                
            

        })
        .catch(error =>{
            console.error(error);
        });
    }
    return (
        <div>
           
                    

                <div className="max-w-96 mx-auto text-center">
                    <div>
                        <h2>Please Register</h2>
                    </div>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>  
                        <input type="text" name="fullName" placeholder="Eneter your full name" className="input input-bordered" required />
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>  
                        <input type="text" name="photoUrl" placeholder="Eneter your Photo url" className="input input-bordered" required />                            
  
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Create Account</button>
                        </div>
                    </form>
                    <p>Already have an account, <Link className="text-lime-500" to='/login'>Login now</Link></p>   
                </div>    

        </div>
    );
    
};

export default SignUp;