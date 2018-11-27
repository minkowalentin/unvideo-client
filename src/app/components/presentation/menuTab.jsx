import React from 'react';
import Tab from '@material-ui/core/Tab';

export default class MenuTab extends React.Component {
    render() {
        return (<Tab  
            label={this.props.label}
            value={this.props.value}
            indicatorColor="primary"
            textColor="primary"
            />)
    }
}