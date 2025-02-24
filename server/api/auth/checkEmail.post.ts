import logins from '~/server/constant/logins';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const foundLogin = logins.find(login => login.email === body?.email)

    if (foundLogin) return {
        errorType: 'email',
        errorMessage: 'Email is already exist',
        result: false,
    };

    return true;
})
