import React, { useState, useEffect } from "react";

import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify, { API, Auth } from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

function App() {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then((user) => console.log(user.attributes))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <h1>Hello from foodcloud</h1>
      <h2>
        <AmplifySignOut />
      </h2>
    </div>
  );
}

export default withAuthenticator(App);
