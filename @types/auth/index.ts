export interface IAuthCreateFetchBody {
    name: string,
    email: string,
    password: string,
    policy: boolean,
}
export interface IAuthLoginFetchBody {
    email: string,
    password: string,
}


interface IAuth {
    errorType: Nullable<string>,
    errorMessage: Nullable<string>,
    result: boolean,
}

export interface IAuthCreateResult extends IAuth {}

export interface IAuthLoginResult extends IAuth {}
