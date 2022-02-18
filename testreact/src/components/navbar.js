import React from "react";

class navbar extends React.Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          < link className="navbar-brand" to="/">
            login site
          </link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                < link className="nav-link active" aria-current="page" to="/">
                  Home
                </link>
              </li>
              <li className="nav-item">
                < link className="nav-link" to="/login">
                  Login
                </link>
              </li>
              <li className="nav-item dropdown">
                 <link 
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Expand
                </link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <link className="dropdown-item" to="/logout">
                      Logout
                    </link>
                  </li>
                  <li>
                    < link className="dropdown-item" to="/auth">
                      Authentication
                    </link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    < link className="dropdown-item" to="/signup">
                      signup
                    </link>
                  </li>
                </ul>
              </li>
              
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default navbar;