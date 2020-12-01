import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom';
import { LOGIN_USER } from '../store/actions';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import mediaRegisteredApi from '../api/mediaRegisteredApi'

const useStyles = props => makeStyles((theme) => ({
	selectControl: {
		width: '100%',
		marginBottom: '8px',
	},
	paper: {
	},
	form: {
		width: '100%', // Fix IE 11 issue.
	},
	customfield: {
		paddingTop: '0',
		marginTop: '0',
		'& .MuiInputLabel-root.Mui-shrink': {
			color: 'red'
			// "& .Mui-shrink": {
			// 	color: 'red'
			// },
		},
		'& .MuiOutlinedInput-input': {
			padding: '8.5px 14px',
		},
		'& .MuiOutlinedInput-root': {
			borderRadius: '0',

			'& fieldset': {
				borderColor: 'grey',
			},
			'&:hover fieldset': {
			},
		},
		"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
			color: props.colorTheme
		},
		"& .MuiInputLabel-root.Mui-focused": {
			color: props.colorTheme
		},
		"& .MuiInputLabel-root.MuiInputLabel-shrink": {
			margin: '0!important'
		},
		"& .MuiInputLabel-root.MuiInputLabel-animated": {
			marginTop: '-8px'
		},
		"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
			borderColor: props.colorTheme
		}
	},

	boxShadow: {
		position: 'relative',
		padding: '80px 100px 0',
		boxShadow: '0px 0px 20px rgba(0,0,0,0.30), 0 20px 20px rgba(0,0,0,0.22)',
		borderRadius: '30px',
		backgroundColor: 'white',
		marginTop: '-30px'
	},

	actionWrapper: {
		textAlign: 'right',
		padding: '12px 0 20px',
		'& p': {
			color: props.colorTheme,
			fontSize: '2em',
			margin: 0,
			marginBottom: '5px'
		},
		'& button': {
			marginLeft: '10px'
		},
	},
	joinBtn: {
		backgroundColor: props.colorTheme
	},
	loginBtn: {
		backgroundColor: 'transparent',
		color: props.colorTheme,
	},
	errorMsg: {
		color: 'red',
		marginBottom: '8px',
		marginTop: '-4px',
		display: 'block',
		fontSize: '.8em'

	}
}))

export default function MediaLoginForm(props) {

	const { type } = props
	const { control, register, handleSubmit, errors } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' })
	const classes = useStyles(props)()
	const [name, setName] = useState('')
	const [mediaBuyer, setMediaBuyer] = useState('')
	const [email, setEmail] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [channel, setChannel] = useState('')
	const [errorReps, setErrorReps] = useState('')
	const [errorMessaging, setErrorMessaging] = useState(null)
	const [isLogin, setIsLogin] = useState(false);



	useEffect(() => {
	}, [])

	const dispatch = useDispatch()

	const onRegister = data => {
		console.log(data, 'data')

		mediaRegisteredApi('http://18.191.199.214:5000/api/v1/register', data)
			.then((response) => {
				console.log(response);
			})
			.catch(error => {
				setErrorReps(error.message)
			});
	}

	const onLogin = data => {
		console.log(data, 'data')
		mediaRegisteredApi('http://18.191.199.214:5000/api/v1/login', data)
			.then((response) => {
				console.log(response);
			})
			.catch(error => {
				setErrorReps(error.message)
				// setErrorReps(error.error)
			});
	}


	const loginUser = (user) => {
		dispatch(LOGIN_USER(user))
	}

	const channelOnChange = (event) => {
		const channel = event.target.value
	}

	return (

		<div className={classes.boxShadow}>
			<div className={classes.paper}>
				{/* <Registeration /> */}
				{props.type === 'Brand' || isLogin ? <form
					className={classes.form}
					onSubmit={handleSubmit(onLogin)}
				>
					<TextField
						className={classes.customfield}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						variant="outlined"
						margin="normal"
						fullWidth
						id="email"
						label="Email"
						name="email"
						autoComplete="email"
						inputRef={register({ required: true })}
					/>
					{errors.email?.type === 'required' && <span className={classes.errorMsg}>This field is required</span>}
					<TextField
						className={classes.customfield}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						variant="outlined"
						margin="normal"
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						inputRef={register({ required: true })}
						error={errors.password?.type === 'required' || errors.password?.type === 'validate'}
					/>
					{errors.password?.type === 'required' && <span className={classes.errorMsg}>This field is required</span>}
					{errorReps !== '' && <span className={classes.errorMsg}>{errorReps}</span>}


					<div className={classes.actionWrapper}>
						<p style={{ display: 'block' }}>Media {type}</p>
						<div>
							<Button
								type="submit"
								variant="contained"
								color="primary"
								className={classes.loginBtn}
							>login</Button>

							{props.type !== 'Brand' && <Button
								onClick={() => setIsLogin(false)}
								variant="contained"
								color="primary"
								className={classes.joinBtn}
							>Join
							</Button>}
						</div>
					</div>
				</form> : <form className={classes.form}
					onSubmit={handleSubmit(onRegister)}
				>
						<TextField
							className={classes.customfield}
							value={name}
							onChange={(e) => setName(e.target.value)}
							variant="outlined"
							margin="normal"
							fullWidth
							id="name"
							label="Name"
							name="name"
							autoComplete="name"
							inputRef={register({ required: true })}
							error={errors.name?.type === 'required' || errors.name?.type === 'validate'}
						/>
						{errors.name?.type === 'required' && <span className={classes.errorMsg}>This field is required</span>}
						{errors.name?.type === 'validate' && <span className={classes.errorMsg}>{errorMessaging}</span>}

						<TextField
							className={classes.customfield}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							variant="outlined"
							margin="normal"
							fullWidth
							id="email"
							label="Email"
							name="email"
							autoComplete="email"
							inputRef={register({ required: true })}
							error={errors.email?.type === 'required' || errors.email?.type === 'validate'}
						/>
						{errors.email?.type === 'required' && <span className={classes.errorMsg}>This field is required</span>}
						{errors.email?.type === 'validate' && <span className={classes.errorMsg}>{errorMessaging}</span>}
						<TextField
							className={classes.customfield}
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							variant="outlined"
							margin="normal"
							fullWidth
							id="username"
							label="Username"
							name="username"
							autoComplete="username"
							inputRef={register()}
						/>
						<TextField
							className={classes.customfield}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							variant="outlined"
							margin="normal"
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							inputRef={register({ required: true })}
							error={errors.password?.type === 'required' || errors.password?.type === 'validate'}
						/>
						{errors.password?.type === 'required' && <span className={classes.errorMsg}>This field is required</span>}
						{errors.password?.type === 'validate' && <span className={classes.errorMsg}>{errorMessaging}</span>}
						{errorReps !== '' && <span className={classes.errorMsg}>{errorReps}</span>}

						<div className={classes.actionWrapper}>
							<p style={{ display: 'block' }}>Media {type}</p>
							<div>
								<Button
									type="submit"
									variant="contained"
									color="primary"
									className={classes.joinBtn}
								>Join
							</Button>
								<Button
									type="submit"
									variant="contained"
									color="primary"
									className={classes.loginBtn}
									onClick={() => setIsLogin(true)}
								>login</Button></div>
						</div>
						<TextField
							value={props.role}
							name="role"
							type="hidden"
							id="role"
							inputRef={register()}
						/>
					</form>}
			</div>
		</div >
	)
}
