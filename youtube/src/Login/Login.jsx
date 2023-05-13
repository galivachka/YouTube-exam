import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import "../Login/Login.css"
import { Navigate, parsePath, Route, useNavigate} from 'react-router-dom';

// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const navigate = useNavigate();
// const [submitted, setSubmitted] = useState(false);
// const [error, setError] = useState(false);

// const handleEmail = (e) => {
// 	console.log(e.target);
// 	setEmail(e.target.value);
// 	setSubmitted(false);
// };

// const handlePassword = (e) => {
// 	setPassword(e.target.value);
// 	setSubmitted(false);
// };

// const handleSubmit = async(e) => {
// 	e.preventDefault();
// 	if (email === '' || password === '') {
// 	// setError(true);
// 	} else {
// 	setSubmitted(true);
// 	// setError(false);
// 	if(successMessage  ){
// 		navigate("/")
// 	}
// 	}
// }

// const successMessage = () => {
// 	return (
// 	<div
// 		className="success"
// 		style={{
// 		display: submitted ? '' : 'none',
// 		}}>
// 		<h1>User successfully log inned!!</h1>


// 	</div>

// 	);

// };
// const errorMessage = () => {
// 	return (
// 	<div
// 		className="error"
// 		style={{
// 		display: error ? '' : 'none',
// 		}}>
// 		<h1>Please enter all the fields</h1>
// 	</div>
// 	);
// };
function BasicExample() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);
	
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	};
	
	const handlePassword = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	};
	
	const handleSubmit = async(e) => {
		e.preventDefault();
		if (email === '' || password === '') {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
			if(successMessage  ){
				navigate("/")
			}
		}
	}
	
	const successMessage = () => {
		return (
			<div
			className="success"
			style={{
				display: submitted ? '' : 'none',
			}}>
			<h1>User successfully log inned!!</h1>
			
			
			</div>
			
			);
			
		};
		const errorMessage = () => {
			return (
				<div
				className="error"
				style={{
					display: error ? '' : 'none',
				}}>
				<h1>Please enter all the fields</h1>
				</div>
				);
			};
			<div className="messages">
				{errorMessage()}
				{successMessage()}
				</div>
			return (
				
				<form className='Register'>
				
				
				<label className="label">Email</label>
				<input onChange={handleEmail} className="input"
				value={email} type="email" />
				
				<label className="label">Password</label>
				<input onChange={handlePassword} className="input"
				value={password} type="password" />
				
				
				
			
				<Button onClick={handleSubmit} variant="primary" type="submit">
				Submit
				</Button>
			
				</form>
				);
			}
			
			export default BasicExample;