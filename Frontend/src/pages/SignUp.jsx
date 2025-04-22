import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./SignUp.css";
import {register, login} from '@/store/slices/userSlice.js';
import Back from '@/components/Back';

const SignUp = () => {

	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [profileImage, setProfileImage] = useState("");
	const [profileImagePreview, setProfileImagePreview] = useState("");

	const { loading, isAuthenticated } = useSelector(state => state.user);
	const navigateTo = useNavigate();
	const dispatch = useDispatch();

	const handleRegister = (e) => {
		e.preventDefault(); // taaki page refresh na ho jaaye 
		const formData = new formData();
		formData.append("fullName", fullName); // Backend ke jaise naam hona chahiyee 
		// Talk to avani

		dispatch(register(formData));

	}

	const handleLogin = (e) => {
		e.preventDefault();
		const formData = new formData();
		formData.append("email", email);
		formData.append("password", password);
		// talk to avani here also
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
		reader.onLoad = () => {
			setProfileImagePreview(reader.result);
			setProfileImage(file);

		};
	};

	return (
		<div className="section pb-5 pt-5  text-center">
			<div className='back-component'><Back /></div>
			
			<h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
			<input className="checkbox-signup" type="checkbox" id="reg-log" name="reg-log" />
			<label for="reg-log"></label>

			<div className="card-3d-wrap mx-auto">
				<div className="card-3d-wrapper">
					<div className="card-front">
						<div className=" center-wrap text-center">
							<div className='login-box'>
							<h4 class="mb-4 pb-3">Log In</h4>
							<form onSubmit={handleLogin}>
								<div className="form-group">
									<input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
									<i className="input-icon uil uil-at"></i>

								</div>
								<div className="form-group mt-2">
									<input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
									<i className="input-icon uil uil-lock-alt"></i>
								</div>
								<a href="/" className="btn mt-4" type='submit' disabled={loading}>{loading && 'Logging In...'}
								{!loading && "Login"}
								</a>
								<p class="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
							</form>
							</div>
							
							
						</div>
					</div>
					<div className="card-back">
						<div className="center-wrap text-center ayush ">
							<h4 class="mb-4 pb-3 ">Sign Up</h4>
							<form onSubmit={handleRegister}>
								<div className="form-group mt-2 mb-2 profile-box">
									<img src={
										profileImagePreview ? profileImagePreview : "/images/dogs.jpg"
									} alt="profileImagePreview" className='profileImage' />
									<input type="file" className='form-style' onChange={imageHandler} />

								</div>

								<div className="form-group">
									<input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autocomplete="off" value={fullName} onChange={(e) => { setFullName(e.target.value) }} />
									<i className="input-icon uil uil-user"></i>
								</div>
								<div class="form-group mt-2">
									<input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off" value={email} onChange={(e) => { setEmail(e.target.value) }} />
									<i className="input-icon uil uil-at"></i>
								</div>
								<div className="form-group mt-2">
									<input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off" value={password} onChange={(e) => { setPassword(e.target.value) }} />
									<i class="input-icon uil uil-lock-alt"></i>
								</div>

								<a href="#" className="btn mt-4" type='submit' disabled={loading}>{loading && 'Registering...'}
									{!loading && "Register"}
								</a>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default SignUp
