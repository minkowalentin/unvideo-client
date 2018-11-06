import React from 'react';
import GetUsers from '../shared/quries/getUsers';
import MainHeader from '../shared/mainHeader';

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
