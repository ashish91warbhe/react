import React from 'react'
import { FormControl,Input,InputLabel } from '@mui/material';
const Forgot = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='col-md-7'>
                    <FormControl>
                        <InputLabel>New Password</InputLabel>
                        <Input type='text' id='password' />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Confirm Password</InputLabel>
                        <Input type='text' id='password' />
                    </FormControl>
                </div>
            </div>
        </>
    );
}
export default Forgot;