import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(true);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `https://urlshortener-3bwd.onrender.com/${param.id}/verify/${param.token}`;
                const response = await fetch(url, {
                method: "GET"
            });
            const data = await response.json();
            console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);

	return (
		<div>
			{validUrl ? (
				<div >
					<h1>Email verified successfully</h1>
					<Link to="/login">
						<button >Login</button>
					</Link>
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
	</div>
	);
};

export default EmailVerify;