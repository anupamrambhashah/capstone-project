import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}> Expense Tracker</div>
      <Link to="/" style={styles.link}>Home</Link>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#111",
    color: "white"
  },
  logo: {
    fontWeight: "bold",
    fontSize: "20px"
  },
  link: {
    color: "white",
    textDecoration: "none"
  }
};

export default Navbar;