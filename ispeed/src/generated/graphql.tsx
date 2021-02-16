import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Users = {
  __typename?: 'Users';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  lastname: Scalars['String'];
  firstname: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  token: Scalars['String'];
  email: Scalars['String'];
  lastname: Scalars['String'];
  firstname: Scalars['String'];
  createdAt: Scalars['String'];
};

export type NewUser = {
  __typename?: 'NewUser';
  username: Scalars['String'];
  email: Scalars['String'];
  lastname: Scalars['String'];
  firstname: Scalars['String'];
  createdAt: Scalars['String'];
};

export type RegisterInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type File = {
  __typename?: 'File';
  url: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getUsers: Array<Maybe<Users>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  register: User;
  login: User;
  uploadAvatar: File;
};


export type MutationRegisterArgs = {
  registerInput?: Maybe<RegisterInput>;
};


export type MutationLoginArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUploadAvatarArgs = {
  file: Scalars['Upload'];
};

export type Subscription = {
  __typename?: 'Subscription';
  newUser: NewUser;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { getUsers: Array<Maybe<(
    { __typename?: 'Users' }
    & Pick<Users, 'id' | 'lastname' | 'firstname' | 'username' | 'email'>
  )>> }
);

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'token'>
  ) }
);

export type NewUserSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewUserSubscription = (
  { __typename?: 'Subscription' }
  & { newUser: (
    { __typename?: 'NewUser' }
    & Pick<NewUser, 'email' | 'createdAt'>
  ) }
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'token'>
  ) }
);


export const GetUsersDocument = gql`
    query getUsers {
  getUsers {
    id
    lastname
    firstname
    username
    email
  }
}
    `;
export type GetUsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUsersQuery, GetUsersQueryVariables>, 'query'>;

    export const GetUsersComponent = (props: GetUsersComponentProps) => (
      <ApolloReactComponents.Query<GetUsersQuery, GetUsersQueryVariables> query={GetUsersDocument} {...props} />
    );
    

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    id
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const NewUserDocument = gql`
    subscription newUser {
  newUser {
    email
    createdAt
  }
}
    `;
export type NewUserComponentProps = Omit<ApolloReactComponents.SubscriptionComponentOptions<NewUserSubscription, NewUserSubscriptionVariables>, 'subscription'>;

    export const NewUserComponent = (props: NewUserComponentProps) => (
      <ApolloReactComponents.Subscription<NewUserSubscription, NewUserSubscriptionVariables> subscription={NewUserDocument} {...props} />
    );
    

/**
 * __useNewUserSubscription__
 *
 * To run a query within a React component, call `useNewUserSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewUserSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewUserSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewUserSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewUserSubscription, NewUserSubscriptionVariables>) {
        return Apollo.useSubscription<NewUserSubscription, NewUserSubscriptionVariables>(NewUserDocument, baseOptions);
      }
export type NewUserSubscriptionHookResult = ReturnType<typeof useNewUserSubscription>;
export type NewUserSubscriptionResult = Apollo.SubscriptionResult<NewUserSubscription>;
export const RegisterDocument = gql`
    mutation register($username: String!, $password: String!, $confirmPassword: String!, $email: String!, $firstname: String!, $lastname: String!) {
  register(
    registerInput: {username: $username, password: $password, confirmPassword: $confirmPassword, email: $email, firstname: $firstname, lastname: $lastname}
  ) {
    id
    token
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;
export type RegisterComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegisterMutation, RegisterMutationVariables>, 'mutation'>;

    export const RegisterComponent = (props: RegisterComponentProps) => (
      <ApolloReactComponents.Mutation<RegisterMutation, RegisterMutationVariables> mutation={RegisterDocument} {...props} />
    );
    

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      confirmPassword: // value for 'confirmPassword'
 *      email: // value for 'email'
 *      firstname: // value for 'firstname'
 *      lastname: // value for 'lastname'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;