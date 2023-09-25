import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-light" style={{ background: ' rgb(183 158 165)' }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <FontAwesomeIcon icon={faSquare} /> TickTick
        </Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
          <li className="nav-item ">
            <Link className="nav-link custom-margin" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link custom-margin" to="/show">List ToDo</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link custom-margin" to="/CompletedTodo">Completed ToDo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
