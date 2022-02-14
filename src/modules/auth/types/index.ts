
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
}


export type {
    CreateAccountState,
    PersonalInfoState
}