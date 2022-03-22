
interface CreateAccountState {
    username: string;
    password: string;
    password_confirmation: string;
    email: string;
    code: string;
}

interface PersonalInfoState {
    first_name: string;
    last_name: string;
    photo: string;
    description: string;
    country: string;
}


export type {
    CreateAccountState,
    PersonalInfoState
}