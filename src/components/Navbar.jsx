
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light" style={{ background: "rgba(183, 166 , 178 ,0.356)" }}>
        <div className="container-fluid" >
          <a className="navbar-brand" href="#">
            <FontAwesomeIcon icon={faSquare} /> TickTick
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
