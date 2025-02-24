import logins from '~/server/constant/logins';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const foundLogin = logins.find(login => login.email === body?.email)

    await new Promise<void>(res => {
        setTimeout(() => {
            res();
        }, 2000);
    })

    if (!foundLogin) return {
        errorType: 'email',
        errorMessage: 'Email doesn\'t exist',
        result: false,
    };

    return foundLogin.password === body?.password ? { errorMessage: null, result: true } : { errorType: 'password', errorMessage: 'Incorrect Password', result: false }
})
