import Button from '@mui/material/Button';
export function Firstpage() {
    return (
        <div  style={{backgroundColor:"royalblue",textAlign:"center",height:"100vh"}}>
            <p style={{fontSize:'40px'}}>SignUP your Account</p>
            <h2>WELCOME TO URLSHORTENER APP</h2>
         
            <Button href='/signup' variant="contained" color="success" style={{width:"350px",height:"350px",borderRadius:"30px"}}>
                Sign UP
            </Button>
            <img style={{width:"350px",height:"350px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTElLNcVP_n8Y8qnBle0I3y1I81mIOn7jJCl_sOXCZU&s'></img>
        </div>
    )
}