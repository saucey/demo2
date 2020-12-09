
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//Button
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux'
import MainLayout from '../../layouts/newMainLayout'
import StepWrapper from './stepWrapper'
import { useHistory } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import covidPic from '../../assets/covid.jpg';
import green from '@material-ui/core/colors/green';
import Modal from '../../components/modal'

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
        backgroundColor: green[500],
        color: 'white',
        display: 'block',
        padding: '5px 40px',
        '&:hover': {
            border: 'none',
            background: green[100],
        }
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
    },
    title: {
        color: '#e96941',
        fontSize: '1.4em'
    },

    text: {
        color: '#136cc3',
        marginTop: '0'
    }



}));

const Confirmation = () => {

    const location = useLocation();
    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyles();
    const state = useSelector((state) => state);
    const mediaOwner = useSelector((state) => state.mediaOwner);
    const [audience, setAudience] = useState(Object.keys(mediaOwner.profile?.channel?.audience))
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        setAudience(Object.keys(mediaOwner.profile.channel.audience));

    }, [mediaOwner])

    const handleChange = (event) => {
        console.log(event, 'the event')
    };

    const saveList = () => {
        setModalOpen(true)
    }

    const onSubmit = () => {
        dispatch({
            type: 'CONFIRM_MEDIA_OWNER',
            confirmMediaOwner: wrapper
        })
    }

    return (
        <div>
            <StepWrapper step={3} />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper style={{ padding: '16px' }}>
                        <Grid container spacing={3}>
                            <Grid item md={7} sm={7} xs={7}>
                                <Grid container>
                                    <Grid item md={4} sm={4} xs={4}>
                                        <img src={covidPic} style={{ maxWidth: '150px' }} />
                                    </Grid>
                                    <Grid item md={8} sm={8} xs={8}>
                                        <span className={classes.title}>Name</span>
                                        <p className={classes.text}>{mediaOwner.profile?.title?.name}</p>
                                        <span className={classes.title}>Description</span>
                                        <p className={classes.text}>{mediaOwner.profile?.title?.description}</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={5} sm={5} xs={5}>
                                <span className={classes.title}>Channel</span>
                                <p className={classes.text}>{mediaOwner.profile?.channel?.name}</p>
                                <hr />
                                <Grid container>
                                    {audience.map(name => {
                                        return (
                                            <Grid item md={6} sm={6} xs={6}>
                                                <span className={classes.title}>{name}</span>
                                                <p className={classes.text}>{mediaOwner.profile?.channel?.audience[name]}</p>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Button onClick={() => saveList()} className={classes.nextButton} type="submit">SAVE</Button>
                    </Paper>
                </Grid>
            </Grid>
            <Modal isModalOpen={modalOpen} redirect="/media-owner/confirmation" message="Your new title has saved"></Modal>
        </div >
    );
}
export default MainLayout(Confirmation);
