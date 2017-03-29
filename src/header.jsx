'use strict';

import React, {Component} from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render(){
    return(
      <div className="page-header">
        <Link to="/">
          <h1>Demos</h1>
        </Link>
      </div>
    );
  }
}

export default Header;
