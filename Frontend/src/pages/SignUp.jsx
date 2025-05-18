import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./SignUp.css";
import {register, login, logout} from '@/store/slices/userSlice.js';
import Back from '@/components/Back';

const SignUp = () => {

	const [username, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [profilePic, setProfilePic] = useState("");
	const [profileImagePreview, setProfileImagePreview] = useState("");

	const { loading, isAuthenticated } = useSelector(state => state.user);
	const navigateTo = useNavigate();
	const dispatch = useDispatch();

	const handleRegister = (e) => {
		e.preventDefault(); // taaki page refresh na ho jaaye 
		const formData = new FormData();
		formData.append("username", username);
		formData.append("email", email);
		formData.append("password", password);
		formData.append("profilePic", profilePic);
		dispatch(register(formData));

	}

	const handleLogin = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("email", email);
		formData.append("password", password);
		dispatch(login(formData));
	}

	useEffect(() => {
		if (isAuthenticated) {
			navigateTo('/');
		} 
	}, [dispatch, loading, isAuthenticated]);

	const imageHandler = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			setProfileImagePreview(reader.result);
			setProfilePic(file);

		};
	};

	return (
		<div className="section pb-5 pt-5  text-center">
			<div className='back-component'><Back /></div>
			
			<h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
			<input className="checkbox-signup" type="checkbox" id="reg-log" name="reg-log" />
			<label htmlFor="reg-log"></label>

			<div className="card-3d-wrap mx-auto">
				<div className="card-3d-wrapper">
					<div className="card-front">
						<div className=" center-wrap text-center">
							<div className='login-box'>
							<h4 className="mb-4 pb-3">Log In</h4>
							<form onSubmit={handleLogin}>
								<div className="form-group">
									<input type="email" className="form-style" placeholder="Your Email" autoComplete='off' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
									<i className="input-icon uil uil-at"></i>

								</div>
								<div className="form-group mt-2">
									<input type="password" name="logpass" autoComplete='off' className="form-style" placeholder="Your Password" id="logpass" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
									<i className="input-icon uil uil-lock-alt"></i>
								</div>
								<button className="btn mt-4" type='submit' disabled={loading}>{loading && 'Logging In...'}
								{!loading && "Login"}
								</button>
								<p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
							</form>
							</div>
							
							
						</div>
					</div>
					<div className="card-back">
						<div className="center-wrap text-center ayush ">
							<h4 className="mb-4 pb-3 ">Sign Up</h4>
							<form onSubmit={handleRegister}>
								<div className="form-group mt-2 mb-2 profile-box">
									<img src={
										profileImagePreview ? profileImagePreview : "/images/upload-profile-png.png"
									} alt="profileImagePreview" className='profileImage' />
									<input type="file" className='form-style' onChange={imageHandler} />

								</div>

								<div className="form-group">
									<input type="text" className="form-style" placeholder="Your Full Name"  autoComplete="off" value={username} onChange={(e) => { setUserName(e.target.value) }} />
									<i className="input-icon uil uil-user"></i>
								</div>
								<div className="form-group mt-2">
									<input type="email"  className="form-style" placeholder="Your Email"  autoComplete="off" value={email} onChange={(e) => { setEmail(e.target.value) }} />
									<i className="input-icon uil uil-at"></i>
								</div>
								<div className="form-group mt-2">
									<input type="password"  className="form-style" placeholder="Your Password"  autoComplete="off" value={password} onChange={(e) => { setPassword(e.target.value) }} />
									<i className="input-icon uil uil-lock-alt"></i>
								</div>

								<button className="btn mt-4" type='submit' disabled={loading}>{loading && 'Registering...'}
									{!loading && "Register"}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default SignUp
