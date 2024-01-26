import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";



const Login = () => {
    const {signIn} = useContext(AuthContext)
    
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result =>{
                console.log(result);
                Swal.fire(
                    "Success!",
                    "User Created Success",
                    "success"
             )
                //navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(err =>{
                console.log(err);
            })

      
    }
    return (
        <div>
            
                    

                <div className="max-w-96 mx-auto text-center">
                    <div>
                        <h2>Please login</h2>
                    </div>
                    <form onSubmit={handleLogin}  className="card-body">
                        <div className="form-control">
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
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>Dont have a account, <Link className="text-lime-500" to='/signup'>Register Now</Link></p>   
                </div>    

        </div>
    );
};

export default Login;