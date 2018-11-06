import React from 'react';
import { Query } from "react-apollo";
import { GET_ALL_USERS_QUERY } from '../../../graphql/users.graphql';

const GetUsers = () => (
    <Query query={GET_ALL_USERS_QUERY}>
        {({ loading, error, data: { getAllUsers } }) => {
            if (loading) return (<p>Loading…</p>)
            if (error) return (<p>{error.message}</p>)
            if (getAllUsers) return (
                getAllUsers.map(({ id, username, email }) => (
                    <div key={id}>
                        <p>{`${username}: ${email}`}</p>
                    </div>
                ))
            )

        }}
    </Query>
);

export default GetUsers;