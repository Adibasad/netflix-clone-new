import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Nav = () => {
  const [scroll, setScroll] = useState(false);
  const [user, setUser] = useState(null); // State to store user details
  const { id } = useParams(); // Get the user ID from the URL

  useEffect(() => {
    // Fetch user details using the ID from the URL
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/user/${id}`);
        setUser(response.data);
        console.log(user);
      } catch (error) {
        console.error("Error fetching user:", error.message);
      }
    };

    fetchUser();

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  return (
    <div className={`nav ${scroll && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
      />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">TV Shows</a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
      </ul>

      {/* Welcome message */}
      {user && (
        <div className="text-white fs-4 fw-bold ms-3">
          Welcome, {user.uname}!
        </div>
      )}
      <form className="searchBar" action="/action_page.php">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">search</button>
      </form>
      <Link to="/create" className="user">
        <img
          className="user"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="user"
        />
      </Link>
    </div>
  );
};

export default Nav;
