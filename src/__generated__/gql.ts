/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n      query getOwner($id: ID!) {\n        getOwner(id: $id) {\n          id\n          firstName\n          lastName\n          email\n        }\n      }\n    ": types.GetOwnerDocument,
    "\n  query GetOwner($id: ID!) {\n    getOwner(id: $id) {\n      id\n      firstName\n      lastName\n      email\n      pets {\n        id\n        name\n        species\n        breed\n        dob\n        owner {\n          id\n          email\n        }\n        allergies {\n          id\n          petId\n          type\n          reaction\n        }\n        vaccinations {\n          id\n          petId\n          type\n          date\n        }\n      }\n    }\n  }\n": types.GetOwnerDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query getOwner($id: ID!) {\n        getOwner(id: $id) {\n          id\n          firstName\n          lastName\n          email\n        }\n      }\n    "): (typeof documents)["\n      query getOwner($id: ID!) {\n        getOwner(id: $id) {\n          id\n          firstName\n          lastName\n          email\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetOwner($id: ID!) {\n    getOwner(id: $id) {\n      id\n      firstName\n      lastName\n      email\n      pets {\n        id\n        name\n        species\n        breed\n        dob\n        owner {\n          id\n          email\n        }\n        allergies {\n          id\n          petId\n          type\n          reaction\n        }\n        vaccinations {\n          id\n          petId\n          type\n          date\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetOwner($id: ID!) {\n    getOwner(id: $id) {\n      id\n      firstName\n      lastName\n      email\n      pets {\n        id\n        name\n        species\n        breed\n        dob\n        owner {\n          id\n          email\n        }\n        allergies {\n          id\n          petId\n          type\n          reaction\n        }\n        vaccinations {\n          id\n          petId\n          type\n          date\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;