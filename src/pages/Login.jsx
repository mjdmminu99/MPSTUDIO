import React from 'react';
import "./Login.css";

export class Login extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="Heading">LOGIN</div>
        <div className="content">
          <div className="image">
            <img src= "/images/music.png" alt="" className='login_image'/>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">EMAIL ADDRESS:</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <br/>
            <div class="ui-compact-menu">
             <div class="ui dropdown item">
             <label htmlFor="career">CAREER:</label> 
                 <select>
                  <option value="student">Student</option>
                  <option value="choreographer">Choreographer</option>
                  <option selected value="admin">Admin</option>
                </select>
              </div>
            </div>
              <br/>
            <div className="form-group">
              <label htmlFor="password">PASSWORD:</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            LogIn
          </button>
        </div>
        <div className="signup-link">
        <a href="http://localhost:3000/signup">SignUp</a>
        </div>
      </div>
    );
  }
}

export default Login;