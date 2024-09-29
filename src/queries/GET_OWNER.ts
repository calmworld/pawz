import { gql } from "@apollo/client";

  export const GET_OWNER = gql `
    query getOwner {
        getOwner(id: "") {
          id
        }
      }
  `