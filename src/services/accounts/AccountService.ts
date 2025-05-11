import instance from '../../utils/interceptor';
import SignInRequest from './SignInRequest';
import SignupRequest from "./SignUpRequest";

const signUp = async (body: SignupRequest) => {
    return await instance.post('/api/accounts/sign-up', body);
}

const signIn = async (body: SignInRequest) => {
    return await instance.post('/api/accounts/sign-in', body);
}

const api = {
    signUp,
    signIn
}

export default api;