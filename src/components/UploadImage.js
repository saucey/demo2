import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import { UPLOAD_AVATAR } from '../store/actions/index';

const useStyles = makeStyles((theme) => ({
  formTitle: {
      color: "#1d8bf7",
      fontWeight: 'normal'
  },
  selectImgBtn: {
      marginTop: '10px',
      display: 'block',
      margin: '0 auto',
      color: '#ba54f5',
      border: '1px solid #ba54f5',
      padding: '5px 30px'
  },
}));

const UploadImage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(null);
  const avatarUrlStore = useSelector((state) => state.avatarUrl);

  const handleImageSelection = (e) => {
    const file = e.target.files[0];
   
    if(file) { 
       setIsLoading(true);
       dispatch({
        type: UPLOAD_AVATAR,
        avatar: { avatar: file }
      })
    }
  }

  useEffect(() => {
    if(avatarUrlStore) {
      setIsLoading(false);
    }
  }, [avatarUrlStore])

  return (
    <div>
      <h2 className={classes.formTitle}>Cover / Thumb</h2>
      { avatarUrlStore && 
        <div style={{ height: "150px", backgroundImage: "url(" + avatarUrlStore + ")"}} />  
      }
      <input
        onChange={handleImageSelection}
        accept="image/*"
        className={classes.input}
        style={{ display: 'none' }}
        id="raised-button-file"
        multiple
        type="file"
      />
        
      <CloudUploadIcon style={{ color: '#ba54f5', fontSize: '3em' }} />
      <label htmlFor="raised-button-file">
        <Button component="span" style={{width: "180px"}} className={classes.selectImgBtn}>
          SELECT IMAGE
        </Button>
      </label> 

      { isLoading === true ?
      <div style={{paddingLeft: "40px",
        paddingRight: "40px",
        paddingTop: "8px"}}
      >
        <LinearProgress color="primary" />   
      </div> : null }
    </div>
  )
};

export default UploadImage;
