export interface SignInData {
    token: string;
    user: User;
}
interface User {
    id: string;
    login: string;
    email: string;
}
