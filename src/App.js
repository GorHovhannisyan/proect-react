import React, { Suspense } from "react";
import { connect } from "react-redux";
import {Route, withRouter} from 'react-router-dom';
import { compose } from "redux";
import './App.css';
import Preloader from "./components/common/Preloader/Preloader";
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
//import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from './components/Settings/Settings';
import UsersContainer from "./components/Users/UsersContainer";
import { withSuspense } from "./hoc/withSuspense";
import { initializeApp } from "./redux/app-reducer";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))

class App  extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if(!this.props.initialized){
      return <Preloader />
    }

    return (  
      <div className="app-wrapper" >
        <HeaderContainer />
        <Navbar />
      
        <div className="app-wrapper-content" >
          <Route path="/dialogs" 
            render={ withSuspense(DialogsContainer) }/> 
          <Route path="/profile/:userId?" 
            render={ withSuspense(ProfileContainer) }/>
          <Route path="/users" 
            render={ () => <UsersContainer /> } />
          <Route path="/login" 
            render={ () => <LoginPage /> } />     

          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          
        </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(withRouter,
  connect(mapStateToProps, {initializeApp})) (App);
