/* Import Libraries */
import { Link } from 'react-router-dom';

/**
 * Header component is present on all pages
 *
 * Includes navigation links
 */
function Header({ verbose }) {
  /* Breadcrumbs for testing and debugging */
  if (verbose) {
    console.log('*** in <Header />');
  }

  return (
    <header>
      <h1>The Movies Saga!</h1>
      <nav>
        <Link to="/">Movie List</Link>
        <Link to="/addMovie">Add Movie</Link>
      </nav>
    </header>
  );
}

export default Header;
