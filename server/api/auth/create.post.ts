import logins from '~/server/constant/logins';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const foundLogin = logins.find(login => login.email === body?.email)

    await new Promise<void>(res => {
        setTimeout(() => {
            res();
        }, 2000);
    })

    if (!body?.name?.length) return {
        errorType: 'name',
        errorMessage: 'Name must be filled',
        result: false,
    }

    if (!body?.email?.length) return {
        errorType: 'email',
        errorMessage: 'Email must be filled',
        result: false,
    }

    if (!body?.password || body?.password?.length <= 3) return {
        errorType: 'password',
        errorMessage: 'Password must be at least 4 characters',
        result: false,
    }

    if (!body?.policy) return {
        errorType: 'policy',
        errorMessage: 'Policy and Term must be agreed',
        result: false,
    }

    if (foundLogin) return {
        errorType: 'email',
        errorMessage: 'Email is already exist',
        result: false,
    };

    return {
        errorType: '',
        errorMessage: '',
        result: true,
    };
})
