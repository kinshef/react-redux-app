import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };
    activateEditMode() {
        this.setState({editMode: true})
    }
    deactivateEditMode() {
        this.setState({editMode: false})
        this.props.updateUsersStatus(this.state.status)
    }

    onStatusChange = (even) => {
        this.setState({
            status: even.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status}/>
                    : <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || '-'}</span>}
            </div>
        )
    }
}


export default ProfileStatus;