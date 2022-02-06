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

export const GET_LOGIN = gql`
    query ($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            code
            token
        }
    }
`;

export const SET_REGISTER = gql`
mutation ($name: String!, $email: String!, $password: String!) {
    createUser(input: {name: $name, email: $email, password: $password}){
        id
        name
    }
  }
`;