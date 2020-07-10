import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
debugger
    class RedirectComponent extends React.Component {
        render() {
            debugger
            if (!this.props.isAuth) {
                return <Redirect to={'/login'}/>
            }

            return <Component {...this.props} />;
        }
    }



    let ConnectAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);

    return ConnectAuthRedirectComponent;
};