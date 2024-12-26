import instance from '../../utils/interceptor';
import SignupRequest from "./SignUpRequest";

const signUp = async (body: SignupRequest) => {
    const response = await instance.post('/api/accounts/sign-up', body);

    return response.data;
}

export default signUp;