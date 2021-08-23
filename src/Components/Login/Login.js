import { FormControlLabel, FormGroup, Switch, withStyles } from '@material-ui/core';
import React from 'react'
import './Login.css'
import Student from './Student';
import Teacher from './Teacher';

function Login() {

    const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
            backgroundColor: '#52d869',
            opacity: 1,
            border: 'none',
        },
        },
        '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
    }))(({ classes, ...props }) => {
    return (
        <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
            root: classes.root,
            switchBase: classes.switchBase,
            thumb: classes.thumb,
            track: classes.track,
            checked: classes.checked,
        }}
        {...props}
        />
    );
    });

    const [state, setState] = React.useState({
        checked: true,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div className="login">
            <div className="stud-tech">
                <FormGroup style={{alignItems: "center", flexDirection: "row"}}>
                    Teacher   
                    <FormControlLabel style={{margin: '0'}}
                        control={<IOSSwitch checked={state.checked} onChange={handleChange} name="checked" />}
                    />
                    Students
                </FormGroup>
            </div>
            {state.checked? <Student/>:<Teacher/>}
        </div>
    )
}

export default Login
