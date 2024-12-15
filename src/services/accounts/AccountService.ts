import axios from "axios";
import SignupRequest from "./SignUpRequest";

const signUp = async (body: SignupRequest) => {
    const response = await axios.post('/api/accounts/sign-up', body);

    return response.data;
}

export default signUp;