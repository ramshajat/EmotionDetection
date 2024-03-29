import React from 'react';
import {Grid, Card, Tabs, Tab, Box} from '@mui/material';
import {useState} from 'react';
import Registration from './Registration';
import Footer from '../Footer';



const RegistrationForm = (props) => {
    const [value] = useState(0);
    const handleChange = (event) => {
        event.preventDefault();
        console.log('registration successful');

    }
    return <>
        <Grid container sx={{height: '90vh'}}>
            <Grid item lg={5} sm={7} xs={12}>
                <Card sx={{width: '100%', height: '100%'}}>
                    <Box sx={{mx: 3, height: 450}}>
                        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                            <Tabs value={value} textColor='secondary' indicatorColor='secondary'
                                  onChange={handleChange}>
                        
                                    <Tab label='Registration' sx={{textTransform: 'none', fontWeight: 'bold'}}></Tab>                            </Tabs>
                        </Box>
                        <Registration/>
                    </Box>
                </Card>
            </Grid>
        </Grid>
        <Footer></Footer>
    </>;
};

export default RegistrationForm;