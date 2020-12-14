import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useForm } from 'react-hook-form'
import MediaLoginForm from '../../../components/mediaLoginForm'
import MainLayout from '../../../layouts/newMainLayout'
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import Overview from './overview';
import Insight from './insight';
import Inventory from './inventory';

const useStyles = makeStyles((theme) => ({
	tab1: {
		marginRight: '10px',
		color: red[500],
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
		color: green[500],
		'&.selected': {
			zIndex: 10
		}
	},

	tabWrapper: {
		display: 'flex',
		justifyContent: 'flex-start',
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

const OverviewIndex = () => {
	const { register, handleSubmit, errors } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' })
	const classes = useStyles()
	const [mediaState, setMediaState] = useState('overview')


	useEffect(() => {
	}, [])

	const toggleMedia = (type) => {
		setMediaState(type)
	}

	const ToggleMediaSwitch = () => {

		switch (mediaState) {
			case 'overview':
				return (
					<Overview />
				)
			case 'insight':
				return (
					<Insight />
				)
			case 'inventory':
				return (
					<Inventory />
				)
			default:
			// code block
		}
	}

	return (
		<div>
			<Container maxWidth="g">
				<div className={classes.tabWrapper}>
					<span onClick={() => toggleMedia('overview')} className={[classes.tab1, mediaState === 'overview' ? 'selected' : ''].join(' ')}>Overview</span>
					<span onClick={() => toggleMedia('insight')} className={[classes.tab2, mediaState === 'insight' ? 'selected' : ''].join(' ')}>Insight</span>
					<span onClick={() => toggleMedia('inventory')} className={[classes.tab3, mediaState === 'inventory' ? 'selected' : ''].join(' ')}>Inventory</span>
				</div>
				<ToggleMediaSwitch />
			</Container>
		</div>
	)
}

export default MainLayout(OverviewIndex)