/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `AWSDate` scalar type provided by AWS AppSync, represents a valid ***extended*** [ISO 8601 Date](https://en.wikipedia.org/wiki/ISO_8601#Calendar_dates) string. In other words, this scalar type accepts date strings of the form `YYYY-MM-DD`.  The scalar can also accept "negative years" of the form `-YYYY` which correspond to years before `0000`. For example, "**-2017-05-01**" and "**-9999-01-01**" are both valid dates.  This scalar type can also accept an optional [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators). For example, "**1970-01-01**", "**1970-01-01Z**", "**1970-01-01-07:00**" and "**1970-01-01+05:30**" are all valid dates. The time zone offset must either be `Z` (representing the UTC time zone) or be in the format `±hh:mm:ss`. The seconds field in the timezone offset will be considered valid even though it is not part of the ISO 8601 standard. */
  AWSDate: { input: any; output: any; }
};

export type Allergy = {
  __typename?: 'Allergy';
  id: Scalars['ID']['output'];
  petId: Scalars['ID']['output'];
  reaction: Scalars['String']['output'];
  severity: Severity;
  type: Scalars['String']['output'];
};

export type AllergyConnection = {
  __typename?: 'AllergyConnection';
  items?: Maybe<Array<Maybe<Allergy>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type CreateAllergyInput = {
  petId: Scalars['ID']['input'];
  reaction: Scalars['String']['input'];
  severity: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateOwnerInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type CreatePetInput = {
  breed?: InputMaybe<Scalars['String']['input']>;
  dob: Scalars['AWSDate']['input'];
  name: Scalars['String']['input'];
  owner: Scalars['ID']['input'];
  species: Species;
};

export type CreateVaccinationInput = {
  date: Scalars['AWSDate']['input'];
  petId: Scalars['ID']['input'];
  type: Scalars['String']['input'];
};

export type DeleteAllergyInput = {
  id: Scalars['ID']['input'];
};

export type DeleteOwnerInput = {
  id: Scalars['ID']['input'];
};

export type DeletePetInput = {
  id: Scalars['ID']['input'];
};

export type DeleteVaccinationInput = {
  id: Scalars['ID']['input'];
};

export type ModelSizeInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAllergy?: Maybe<Allergy>;
  createOwner?: Maybe<Owner>;
  createPet?: Maybe<Pet>;
  createVaccination?: Maybe<Vaccination>;
  deleteAllergy?: Maybe<Allergy>;
  deleteOwner?: Maybe<Owner>;
  deletePet?: Maybe<Pet>;
  deleteVaccination?: Maybe<Vaccination>;
  updateAllergy?: Maybe<Allergy>;
  updateOwner?: Maybe<Owner>;
  updatePet?: Maybe<Pet>;
  updateVaccination?: Maybe<Vaccination>;
};


export type MutationCreateAllergyArgs = {
  input: CreateAllergyInput;
};


export type MutationCreateOwnerArgs = {
  input: CreateOwnerInput;
};


export type MutationCreatePetArgs = {
  input: CreatePetInput;
};


export type MutationCreateVaccinationArgs = {
  input: CreateVaccinationInput;
};


export type MutationDeleteAllergyArgs = {
  input: DeleteAllergyInput;
};


export type MutationDeleteOwnerArgs = {
  input: DeleteOwnerInput;
};


export type MutationDeletePetArgs = {
  input: DeletePetInput;
};


export type MutationDeleteVaccinationArgs = {
  input: DeleteVaccinationInput;
};


export type MutationUpdateAllergyArgs = {
  input: UpdateAllergyInput;
};


export type MutationUpdateOwnerArgs = {
  input: UpdateOwnerInput;
};


export type MutationUpdatePetArgs = {
  input: UpdatePetInput;
};


export type MutationUpdateVaccinationArgs = {
  input: UpdateVaccinationInput;
};

export type Owner = {
  __typename?: 'Owner';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  pets: Array<Maybe<Pet>>;
};

export type OwnerConnection = {
  __typename?: 'OwnerConnection';
  items?: Maybe<Array<Maybe<Owner>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type Pet = {
  __typename?: 'Pet';
  allergies?: Maybe<Array<Maybe<Allergy>>>;
  breed?: Maybe<Scalars['String']['output']>;
  dob: Scalars['AWSDate']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  owner: Owner;
  species: Species;
  vaccinations?: Maybe<Array<Maybe<Vaccination>>>;
};

export type PetConnection = {
  __typename?: 'PetConnection';
  items?: Maybe<Array<Maybe<Pet>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getAllergy?: Maybe<Allergy>;
  getOwner?: Maybe<Owner>;
  getPet?: Maybe<Pet>;
  getVaccination?: Maybe<Vaccination>;
  listAllergies?: Maybe<AllergyConnection>;
  listOwners?: Maybe<OwnerConnection>;
  listPets?: Maybe<PetConnection>;
  listVaccinations?: Maybe<VaccinationConnection>;
};


export type QueryGetAllergyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetOwnerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetVaccinationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryListAllergiesArgs = {
  filter?: InputMaybe<TableAllergyFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListOwnersArgs = {
  filter?: InputMaybe<TableOwnerFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListPetsArgs = {
  filter?: InputMaybe<TablePetFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListVaccinationsArgs = {
  filter?: InputMaybe<TableVaccinationFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export enum Severity {
  Mild = 'MILD',
  Moderate = 'MODERATE',
  Severe = 'SEVERE'
}

export enum Species {
  Cat = 'CAT',
  Dog = 'DOG'
}

export type Subscription = {
  __typename?: 'Subscription';
  onCreateAllergy?: Maybe<Allergy>;
  onCreateOwner?: Maybe<Owner>;
  onCreatePet?: Maybe<Pet>;
  onCreateVaccination?: Maybe<Vaccination>;
  onDeleteAllergy?: Maybe<Allergy>;
  onDeleteOwner?: Maybe<Owner>;
  onDeletePet?: Maybe<Pet>;
  onDeleteVaccination?: Maybe<Vaccination>;
  onUpdateAllergy?: Maybe<Allergy>;
  onUpdateOwner?: Maybe<Owner>;
  onUpdatePet?: Maybe<Pet>;
  onUpdateVaccination?: Maybe<Vaccination>;
};

export type TableAllergyFilterInput = {
  petId?: InputMaybe<TableIdFilterInput>;
  type?: InputMaybe<TableStringFilterInput>;
};

export type TableBooleanFilterInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TableFloatFilterInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  ge?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  le?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
};

export type TableIdFilterInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  beginsWith?: InputMaybe<Scalars['ID']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  ge?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  le?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type TableIntFilterInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
};

export type TableOwnerFilterInput = {
  email?: InputMaybe<TableStringFilterInput>;
  firstName?: InputMaybe<TableStringFilterInput>;
  lastName?: InputMaybe<TableStringFilterInput>;
};

export type TablePetFilterInput = {
  owner?: InputMaybe<TableIdFilterInput>;
  species?: InputMaybe<TableStringFilterInput>;
};

export type TableStringFilterInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  beginsWith?: InputMaybe<Scalars['String']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  ge?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  le?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type TableVaccinationFilterInput = {
  date?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableIdFilterInput>;
  type?: InputMaybe<TableStringFilterInput>;
};

export type UpdateAllergyInput = {
  id: Scalars['ID']['input'];
  petId: Scalars['ID']['input'];
  reaction: Scalars['String']['input'];
  severity: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type UpdateOwnerInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePetInput = {
  breed?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['AWSDate']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  owner: Scalars['ID']['input'];
  species?: InputMaybe<Species>;
};

export type UpdateVaccinationInput = {
  date?: InputMaybe<Scalars['AWSDate']['input']>;
  id: Scalars['ID']['input'];
  petId: Scalars['ID']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Vaccination = {
  __typename?: 'Vaccination';
  date: Scalars['AWSDate']['output'];
  id: Scalars['ID']['output'];
  petId: Scalars['ID']['output'];
  type: Scalars['String']['output'];
};

export type VaccinationConnection = {
  __typename?: 'VaccinationConnection';
  items?: Maybe<Array<Maybe<Vaccination>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type GetOwnerQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetOwnerQuery = { __typename?: 'Query', getOwner?: { __typename?: 'Owner', id: string, firstName: string, lastName: string, email: string } | null };

export type GetOwnerQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetOwnerQuery = { __typename?: 'Query', getOwner?: { __typename?: 'Owner', id: string, firstName: string, lastName: string, email: string, pets: Array<{ __typename?: 'Pet', id: string, name: string, species: Species, breed?: string | null, dob: any, owner: { __typename?: 'Owner', id: string, email: string }, allergies?: Array<{ __typename?: 'Allergy', id: string, petId: string, type: string, reaction: string } | null> | null, vaccinations?: Array<{ __typename?: 'Vaccination', id: string, petId: string, type: string, date: any } | null> | null } | null> } | null };


export const GetOwnerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getOwner"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getOwner"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetOwnerQuery, GetOwnerQueryVariables>;
export const GetOwnerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOwner"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getOwner"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"pets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"species"}},{"kind":"Field","name":{"kind":"Name","value":"breed"}},{"kind":"Field","name":{"kind":"Name","value":"dob"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"allergies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"petId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"reaction"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vaccinations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"petId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOwnerQuery, GetOwnerQueryVariables>;