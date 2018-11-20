import { getJwt } from '../../../api/global';

export const isAuthorized = () => {
    // to do
    return true;
}

export function isAuthenticated()  {
    // to do
    // check validity of jwt
    const token = getJwt();
    return token?true:false;
}