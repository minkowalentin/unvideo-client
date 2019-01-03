import React from 'react';
import GetUsers from '../../graphql/quries/getUsers';
import MainHeader from '../presentation/mainHeader';

class UserManagement extends React.Component {
    render() {
        return (
            <div>
                <MainHeader header="User Management"></MainHeader>
                <GetUsers></GetUsers>
            </div>
        );
    }
}

export default UserManagement;
