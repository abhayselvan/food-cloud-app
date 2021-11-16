import React, { Component } from 'react';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import '../css/Header.css'
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function Header() {
  

  return (
    <div className="header">
    <FilterDramaIcon className="icon"/>
<span className="header">Food Cloud</span>
<div className="signout">
<AmplifySignOut/>
</div>
</div>

  );
}

export default Header;
