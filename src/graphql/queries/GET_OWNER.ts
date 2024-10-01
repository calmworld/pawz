import { gql } from "@apollo/client";

export const GET_OWNER = gql`
  query GetOwner($id: ID!) {
    getOwner(id: $id) {
      id
      firstName
      lastName
      email
      pets {
        id
        name
        species
        breed
        dob
        owner {
          id
          email
        }
        allergies {
          id
          petId
          type
          reaction
        }
        vaccinations {
          id
          petId
          type
          date
        }
      }
    }
  }
`;