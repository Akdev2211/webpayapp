import axios from "axios";
import styles from "../styles/Navbar.module.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const DashBoardNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (searchTerm) {
      axios
        .get(`http://localhost:8000/facebook/userSearch/${searchTerm}`)
        .then((response) => {
          setSearchResults(response.data);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleUserClick = (userId: number) => {
    navigate(`/profile/friends/${userId}`);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">WebPay Global</Link>
      </div>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search by username or email..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {searchResults.length > 0 && (
          <ul className={styles.searchResults}>
            {searchResults.map((user) => (
              <li key={user.id} onClick={() => handleUserClick(user.id)}>
                <img
                  src={user.profilePicture || "default-profile.png"}
                  alt={user.username}
                  className={styles.userImage}
                />
                <span>{user.username}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/wallet">Wallet</Link>
        </li>
        <li>
          <button className={styles.createPostButton}>Deposit</button>
        </li>
        <li className={styles.userMenu}>
          <li
            onClick={() => {
              localStorage.removeItem("userInfo");
              navigate("/");
            }}
          >
            <button className={styles.logoutButton}>pro</button>
          </li>
        </li>
      </ul>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
};

export default DashBoardNav;
