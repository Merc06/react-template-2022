
interface CreateAccountState {
    username: string;
    password: string;
    password_confirmation: string;
    email: string;
    code: string;
}

interface LanguageInfo {
    language: string;
    proficiency: string;
}

interface PersonalInfoState {
    first_name: string;
    last_name: string;
    photo: string;
    languages: Array<LanguageInfo>;
    description: string;
}


export type {
    CreateAccountState,
    PersonalInfoState,
    LanguageInfo
}