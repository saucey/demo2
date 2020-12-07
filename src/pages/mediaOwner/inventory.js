
import React, { useState, useEffect, useRef, createRef, useMemo } from 'react';
import { makeStyles, fade, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//Button
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';
//Icon
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ControlPointTwoToneIcon from '@material-ui/icons/ControlPointTwoTone';

//TextField
import TextField from '@material-ui/core/TextField'
import { useForm, Controller } from 'react-hook-form'
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { useSelector } from 'react-redux'

import AddPersona from '../addPersona/index'
import { useDispatch } from 'react-redux'
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import IconButton from '@material-ui/core/IconButton'
import MainLayout from '../../layouts/newMainLayout'
import StepWrapper from './stepWrapper'
import { useHistory } from 'react-router-dom';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

const print = [{
    name: 'Inside_front_cover(IFC)',
    value: 'Inside front cover(IFC)'
},
{
    name: 'Outside back cover(OBC)',
    value: 'Outside back cover(OBC)'
},
{
    name: 'Inside_Back _cover(IBC)',
    value: 'Inside Back cover(IBC)'
},
{
    name: 'Quarter_page',
    value: '1 / 4 page'
},
{
    name: 'Half_page_vertical',
    value: '1 / 2 page vertical'
},
{
    name: 'Half_page_landscape',
    value: '1 / 2 page landscape'
},
{
    name: 'Single_page',
    value: 'Single page'
},
{
    name: 'Double_page_spread',
    value: 'Double page spread'
},
{
    name: 'Fold_out_cover',
    value: 'Fold out cover'
},
{
    name: 'Sponsored_articles',
    value: 'Sponsored articles'
},
{
    name: 'Flyers',
    value: 'Flyers'
},
{
    name: 'Stickers',
    value: 'Stickers'
},
{
    name: 'Promotional_Products',
    value: 'Promotional Products'
}]


const radio = [
    {
        name: 'Jingle',
        value: 'Jingle'
    },
    {
        name: 'Spoken_ad',
        value: 'Spoken ad'
    },
    {
        name: 'Channel_Sponsor',
        value: 'Channel Sponsor'
    },
    {
        name: 'Show_Sponsor',
        value: 'Show Sponsor'
    },
    {
        name: 'Segment_Sponsor',
        value: 'Segment Sponsor'
    },
    {
        name: 'Live_read',
        value: 'Live read'
    },
]

const television = [
    {
        name: 'ident',
        value: 'ident'
    },
    {
        name: 'Product_Placement',
        value: 'Product Placement'
    },
    {
        name: 'Channel_Sponsor',
        value: 'Channel Sponsor'
    },
    {
        name: 'Show_Sponsor',
        value: 'Show Sponsor'
    },
    {
        name: 'Segment_Sponsor',
        value: 'Segment Sponsor'
    },
    {
        name: 'Ten_Second_Ad',
        value: '10 Second Ad'
    },
    {
        name: 'Thirty_Second_Ad',
        value: '30 Second Ad'
    },
    {
        name: 'Sixty_Second_Ad',
        value: '60 Second Ad'
    },
    {
        name: 'Full_ad_break_takeover',
        value: 'Full ad break takeover'
    },
]

const ooh = [
    {
        name: 'Digital_screens',
        value: 'Digital screens'
    },
    {
        name: 'Billboards',
        value: 'Billboards'
    },
    {
        name: 'Posters',
        value: 'Posters'
    },
    {
        name: 'Public_transport',
        value: 'Public transport'
    },
    {
        name: 'Street_furniture',
        value: 'Street furniture'
    },
    {
        name: 'Escalator_Treads',
        value: 'Escalator Treads'
    },
    {
        name: 'Point_of_Sale',
        value: 'Point of Sale'
    },
    {
        name: 'Vehicle_Wraps',
        value: 'Vehicle Wraps'
    },
    {
        name: 'Lift_Graphics',
        value: 'Lift Graphics'
    },
    {
        name: 'Floor_Graphics',
        value: 'Floor Graphics'
    },
    {
        name: 'Bus_Ads',
        value: 'Bus Ads'
    },
    {
        name: 'Scaffolding_Wraps',
        value: 'Scaffolding Wraps'
    },
    {
        name: 'Aerial_Banners',
        value: 'Aerial Banners'
    },
]

const social = [
    {
        name: 'Sponsored_Posts',
        value: 'Sponsored Posts'
    },
    {
        name: 'Sponsored_Stories',
        value: 'Sponsored Stories'
    },
    {
        name: 'Live_streams',
        value: 'Live streams'
    },
    {
        name: 'Affiliate_Links',
        value: 'Affiliate Links'
    },
    {
        name: 'Email_Blast',
        value: 'Email Blast'
    },
    {
        name: 'Whatsapp_mailing_list',
        value: 'Whatsapp mailing list'
    },
    {
        name: 'Branded_filters',
        value: 'Branded filters'
    },
    {
        name: 'Sponsored_Videos',
        value: 'Sponsored Videos'
    },
]

const digital = [
    {
        name: 'Display(IAB_Sizes)',
        value: 'Display (IAB Sizes)'
    },
    {
        name: 'Video_In_Slide',
        value: 'Video In Slide'
    },
    {
        name: 'Video_In_Content',
        value: 'Video In Content'
    },
    {
        name: 'Video_Pre_roll',
        value: 'Video Pre roll'
    },
    {
        name: 'Native_Content',
        value: 'Native Content'
    },
    {
        name: 'Text_ad',
        value: 'Text ad'
    },
    {
        name: 'Livestreams',
        value: 'Livestreams'
    },
    {
        name: 'Paid_google_search',
        value: 'Paid google search'
    },
    {
        name: 'Spotify_ad',
        value: 'Spotify ad'
    },
]

const partnerships = [
    {
        name: 'Influencer_Partnership',
        value: 'Influencer Partnership'
    },
    {
        name: 'Celebrity_Partnership',
        value: 'Celebrity Partnership'
    },
    {
        name: 'Brand_Partnerships',
        value: 'Brand Partnerships'
    },
    {
        name: 'Shared_stores',
        value: 'Shared stores'
    },
    {
        name: 'Pop_up_stores',
        value: 'Pop-up stores'
    },
    {
        name: 'Licensing',
        value: 'Licensing'
    },
    {
        name: 'Takeovers',
        value: 'Takeovers'
    },
]

const useStyles = makeStyles((theme) => ({
    pageTitle: {
        color: '#e96941',
        fontWeight: 'normal'
    },
    nextButton: {
        marginLeft: 'auto',
        backgroundColor: "#1d8bf7",
        color: 'white',
        display: 'block',
        padding: '5px 40px'
    },
    checkNRadio: {
        padding: 0,
        '& .MuiFormLabel-root': {
            color: '#1d8bf7',
            marginBottom: '8px',
            textTransform: 'capitalize',
        },
        '& .MuiFormControlLabel-root': {
            '& span': {
                paddingTop: '1px',
                paddingBottom: '1px',
            }
        }
    }

}));

const Inventory = () => {

    const searchInput = useRef(null);
    const inputRef = useRef([]);
    const dispatch = useDispatch()
    const history = useHistory()

    const classes = useStyles();

    const { control, register, handleSubmit, errors } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' })
    const createMedia = useSelector((state) => state.createMedia);
    const [selected, setSelected] = useState('')
    const [channel, setChannel] = useState('')
    const [inventoryList, setInventoryList] = useState([])
    const [createMediaCopy, setCreateMediaCopy] = useState({})


    useEffect(() => {
        console.log(createMedia, 'createMedia')
        setCreateMediaCopy(createMedia)
        setChannel(createMedia.profile.channel.name)
        setInventory(createMedia.profile.channel.name)
    }, [createMedia])


    const handleChange = (event) => {
        console.log(event, 'the event')
    };

    const onSubmit = (data) => {
        data.inventory.name = channel;
        const inventory = data.inventory;
        createMediaCopy.inventory = inventory

        dispatch({
            type: 'ADD_INVENTORY',
            createMedia: createMediaCopy
        })
    }



    const setInventory = (val) => {
        switch (val) {
            case 'television':
                return setInventoryList(television)
            case 'radio':
                return setInventoryList(radio)
            case 'print':
                return setInventoryList(print)
            case 'digital':
                return setInventoryList(digital)
            case 'ooh':
                return setInventoryList(ooh)
            case 'social':
                return setInventoryList(social)
            case 'partnership':
                return setInventoryList(partnership)
            // you can have as many case statements as you need
            default:
                return false
        }
    }


    return (
        <div>
            <StepWrapper step={2} />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper style={{ padding: '16px' }}>
                        <h1 className={classes.pageTitle}>Inventory</h1>
                        <form
                            className={classes.form}
                            onSubmit={handleSubmit(onSubmit)}>
                            <FormControl component="fieldset" error={Boolean(errors.inventory && errors.inventory.value)} className={classes.checkNRadio}>
                                <FormLabel component="legend">{channel}</FormLabel>
                                {inventoryList.map(val => {
                                    return (
                                        <FormControlLabel
                                            key={val.name}
                                            label={val.value}
                                            control={<Controller
                                                name={`inventory[value][${val.name}]`}
                                                control={control}
                                                defaultValue={false}
                                                // rules={{ required: true }}
                                                render={props =>
                                                    <Checkbox
                                                        onChange={e => props.onChange(e.target.checked)}
                                                        checked={props.value}
                                                    />
                                                } // props contains: onChange, onBlur and value
                                            />}
                                        >
                                        </FormControlLabel>
                                    )
                                })}
                            </FormControl>
                            <Button className={classes.nextButton} type="submit">Next</Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
export default MainLayout(Inventory);
