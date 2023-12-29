import React, {useContext} from "react";
import {Button} from "semantic-ui-react";
import {AuthContext} from "../../contexts/authContext";
function Login() {
	const authContext = useContext(AuthContext);

	return (
		<div>
			<Button
				onClick={() => {
					authContext.setIsAuthenticated(true);
				}}
			>
				Giriş Yap
			</Button>
		</div>
	);
}

export default Login;
