import { gql } from "@apollo/client";

export const GET_USERS = gql`
    query {
        users {
            id
            name
            email
            password
            birth_date
            phone_number
            photo
            gender
            address
        }
    }
`;