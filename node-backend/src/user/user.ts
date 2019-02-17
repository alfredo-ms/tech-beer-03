export interface User {
    id: number;
    name: string;
    login: string;
    password: string;
    phone?: string;
    address?: string;
}