import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useForm } from 'react-hook-form'
import MediaLoginForm from '../../components/mediaLoginForm'
import MainLayout from '../../layouts/newMainLayout'

const useStyles = makeStyles((theme) => ({
	tab1: {
		marginRight: '10px',
		color: '#e96941',
		'&.selected': {
			zIndex: 10
		}
	},

	tab2: {
		marginRight: '10px',
		color: '#6a5fcd',
		'&.selected': {
			zIndex: 10
		}
	},

	tab3: {
		color: '#e502ba',
		'&.selected': {
			zIndex: 10
		}
	},


	tabWrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		marginTop: '50px',
		'& span': {
			'border-top-right-radius': '25px',
			'border-top-left-radius': '25px',
			fontWeight: 'bold',
			display: 'inline-block',
			padding: '20px 30px 50px',
			backgroundColor: 'white',
			position: 'relative',
			cursor: 'pointer'
		},
	},
}))

const MediaLogin = () => {
	const { register, handleSubmit, errors } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' })
	const classes = useStyles()
	const [mediaState, setMediaState] = useState('planner')


	useEffect(() => {
	}, [])

	const toggleMedia = (type) => {
		setMediaState(type)
	}

	const ToggleMediaSwitch = () => {

		switch (mediaState) {
			case 'owner':
				return (
					<MediaLoginForm type="Owner" colorTheme="#6a5fcd" role="media_owner" />
				)
			case 'planner':
				return (
					<MediaLoginForm type="Planner" colorTheme="#e96941" role="media_agency" />
				)
			case 'brand':
				return (
					<MediaLoginForm type="Brand" colorTheme="#e502ba" role="admin" />
				)
			default:
			// code block
		}
	}

	return (
		<div className={classes.bg}>
			<Container maxWidth="sm">
				<div className={classes.tabWrapper}>
					<span onClick={() => toggleMedia('planner')} className={[classes.tab1, mediaState === 'planner' ? 'selected' : ''].join(' ')}>Media Planner</span>
					<span onClick={() => toggleMedia('owner')} className={[classes.tab2, mediaState === 'owner' ? 'selected' : ''].join(' ')}>Media Owner</span>
					<span onClick={() => toggleMedia('brand')} className={[classes.tab3, mediaState === 'brand' ? 'selected' : ''].join(' ')}>Brand Advance</span>
				</div>
				<ToggleMediaSwitch />
			</Container>
		</div>
	)
}

export default MainLayout(MediaLogin)