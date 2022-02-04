export type Users = {
    users: UsersType[]
}

export type User = {
    user: UsersType
}

interface UsersType {
    id: number
    name: string
    email: string
    password: string
    birth_date: string | Date
    phone_number: string | number
    photo: string
    gender: string
    address: string
}