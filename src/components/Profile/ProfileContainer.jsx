import React from "react";
import { connect } from "react-redux";
import {  withRouter } from "react-router";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getUserProfile, getStatus, updeteStatus } from "../../redux/profile-reducer";
import Profile from "./Profile";



class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if(!userId){
      userId = this.props.authorizedUserId;
      if(!userId){
        this.props.history.push("/login")
      }
    }
    this.props.getUserProfile(userId);
      this.props.getStatus(userId);    
  }

  render(){    
    return ( 
      <div>
        <Profile {...this.props} profile={this.props.profile} 
        status={this.props.status} updeteStatus={this.props.updeteStatus} />
                         
      </div>
    )  
  }    
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,  
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updeteStatus}), 
  //withAuthRedirect,
  withRouter)
  (ProfileContainer);

