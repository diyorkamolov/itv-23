import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Modal,
  Toolbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, NavLink, useLocation } from "react-router-dom";

const drawerWidth = 240;

function DrawerAppBar() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBackgroundColor("black");
    } else {
      setBackgroundColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { pathname } = location;

  const { isLoading, error } = useQuery(["film", pathname], async () => {
    const res = await axios.get(`http://localhost:3001${pathname}`);
    console.log("API Response:", res.data);
    return res.data;
  });

  useEffect(() => {
    if (!isLoading && !error) {
      setData(isLoading ? [] : error ? [] : data);
    }
  }, [isLoading, error, data]);

  const navItems = [
    { label: "Bosh sahifa", path: "/" }, // Home page link
    { label: "Tv", path: "/tv" },
    { label: "Filmlar", path: "/filmlar" },
    { label: "Serialllar", path: "/seriallar" },
    { label: "Multifilmlar", path: "/multifilmlar" },
    { label: "Obunalar", path: "/obunalar" },
    { label: "Saralanganlar", path: "/saralanganlar" },
    { label: "Boshqalar", path: "/boshqalar" },
  ];

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching:", error);
      setSearchResults([]);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                color: pathname === item.path ? "white" : "inherit", // Highlight active item
              }}
              component={Link}
              to={item.path} // Use the path for navigation
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor,
          height: "10vh",
          transition: "background-color 0.5s",
          color: "gray",
          boxShadow: "none", // Remove box shadow
        }}
      >
        <Toolbar
          sx={{
            minHeight: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <NavLink style={{ textDecoration: "none" }} to={"/"}>
              <img style={{ width: "170px" }} src="https://files.itv.uz/itv.png" alt="Logo" />
            </NavLink>
            <Box
              component="ul"
              sx={{
                display: "flex",
                gap: "20px",
                marginLeft: "-2%",
                paddingTop: "4px",
                listStyle: "none",
                padding: 0, // Reset padding to avoid unwanted space
              }}
            >
              {navItems.map((item) => (
                <Box
                  component={Link}
                  key={item.label}
                  to={item.path} // Use the path for navigation
                  sx={{
                    display: { xs: "none", sm: "block" },
                    cursor: "pointer",
                    "&:hover": { color: "white" }, // Change color on hover
                    textDecoration: "none",
                    color: pathname === item.path ? "white" : "inherit", // Highlight active item
                  }}
                >
                  {item.label}
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box
              color="inherit"
              sx={{
                width: "40px", // Adjust width as needed
                height: "40px", // Adjust height to match width for square buttons
                padding: "8px", // Add padding to make the clickable area larger
                bgcolor: "rgba(255, 255, 255, 0.1)",
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
                borderRadius: "10px",
                color: "white",
              }}
            >
              UZ
            </Box>
            <Box
              color="inherit"
              sx={{
                width: "40px",
                height: "40px",
                padding: "8px",
                bgcolor: "rgba(255, 255, 255, 0.1)",
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
                borderRadius: "10px",
                color: "white",
              }}
            >
              <NotificationsIcon />
            </Box>
            <Box
              color="inherit"
              sx={{
                width: "40px",
                height: "40px",
                padding: "8px",
                bgcolor: "rgba(255, 255, 255, 0.1)",
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
                borderRadius: "10px",
                color: "white",
              }}
              onClick={handleSearchToggle} // Open search modal
            >
              <SearchIcon />
            </Box>
            <Box
              color="inherit"
              sx={{
                width: "40px",
                height: "40px",
                padding: "8px",
                bgcolor: "rgba(255, 255, 255, 0.1)",
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
                borderRadius: "10px",
                color: "white",
              }}
            >
              <LoginIcon />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "black",
              color: "white",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />

        {/* Render based on search results if there's a search query */}
        {searchQuery && searchResults.length > 0 ? (
          <div>
            {searchResults.map((film) => (
              <li key={film.id}>
                <h2>{film.title}</h2>
                <p>{film.description}</p>
                <p>Rating: {film.rating}</p>
                <p>Type: {film.type}</p>
                {film.media && film.media[0] && (
                  <img src={film.media[0]} alt={film.title} style={{ maxWidth: "200px" }} />
                )}
              </li>
            ))}
          </div>
        ) : (
          // Render based on the original data if no search query or no results
          <div>
            {data.length > 0 &&
              data.map((film) => (
                <li key={film.id}>
                  <h2>{film.title}</h2>
                  <p>{film.description}</p>
                  <p>Rating: {film.rating}</p>
                  <p>Type: {film.type}</p>
                  {film.media && film.media[0] && (
                    <img src={film.media[0]} alt={film.title} style={{ maxWidth: "200px" }} />
                  )}
                </li>
              ))}
          </div>
        )}

        {/* Search Modal */}
        <Modal
          open={searchOpen}
          onClose={handleSearchToggle}
          aria-labelledby="search-modal-title"
          aria-describedby="search-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "10vh",
              left: "50%",
              transform: "translateX(-50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
            }}
          >
            <InputBase
              placeholder="Search movies"
              fullWidth
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearchSubmit();
                }
              }}
            />
            <Box mt={2}>
              {searchResults.length === 0 && <Typography variant="body2">No results found.</Typography>}
              {searchResults.map((movie) => (
                <Box key={movie.id} sx={{ py: 1 }}>
                  <Typography variant="subtitle1">{movie.title}</Typography>
                  <Typography variant="body2">{movie.description}</Typography>
                  {movie.media && movie.media[0] && (
                    <img src={movie.media[0]} alt={movie.title} style={{ maxWidth: "200px" }} />
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      media: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default DrawerAppBar;
