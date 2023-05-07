import Button from '@mui/material/Button';
export function Firstpage() {
    return (
        <div  style={{backgroundColor:"royalblue",textAlign:"center",height:"100vh"}}>
            <p style={{fontSize:'40px'}}>SignUP your Account</p>
            <Button href='/signup' variant="contained" color="success" style={{width:"200px",height:"200px",borderRadius:"30px"}}>
                Sign UP
            </Button>

        </div>
    )
}