

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>this is private info. please do not share!</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAuthenticated && <p>this is private info. please do authentication!</p>}
            {props.isAuthenticated && <WrappedComponent {...props}/>}
        </div>
    )
}

const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info="This is Me"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="This is Me"/>, document.getElementById('app'));