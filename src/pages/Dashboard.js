import { useEffect, useState } from "react";

export function Dashboard() {
    const [image, setImage] = useState('');
    
    useEffect(() => {
        const getDetails = async () => {
            try {
                const response = await fetch("https://urlshortener-3bwd.onrender.com", {
                    method: "GET"
                });
                const data = await response.json()
                const setdata =data.users;
                setImage(setdata)
            } catch (error) {
                console.log(error);
            }
        }
        getDetails();
    }, [])

    return (
        <div style={{background:"#8deb90",height:"100vh"}}>

            <h1>Forgot password app</h1>
            <h3>WELCOME</h3>
            <img style={{width:"500px",height:"500px"}} src={image} title="welcom" alt="welcom"></img>
            
        </div>
    )
}