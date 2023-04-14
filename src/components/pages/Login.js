import { Grid, Card, Tabs, Tab, Box } from '@mui/material';
import { useState } from 'react';
import Registration from './Registration';
import UserLogin from './UserLogin';
import Footer from '../Footer';
 

const Login = (props) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return <>
    <Grid container sx={{ height: '90vh' }}>
      <Grid item lg={5} sm={7} xs={12}>
        <Card sx={{ width: '100%', height: '100%' }}>
          <Box sx={{ mx: 3, height: 450 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
              {props.value === 0? <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab> :  <Tab label='Registration' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>}
              </Tabs>
            </Box>
            {props.value === 0? <UserLogin /> :  <Registration />}
          </Box>
        </Card>
      </Grid>
    </Grid>
    <Footer></Footer>
  </>;
};

export default Login;