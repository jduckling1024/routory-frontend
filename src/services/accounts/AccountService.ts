import axios from "axios";
import SignupRequest from "./SignUpRequest";

const signUp = async (body: SignupRequest) => {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/api/accounts/sign-up', body);

    if (response.status !== 201) {
        throw new Error('Failed to sign up');
    }

    return response.data;
}

export default signUp;