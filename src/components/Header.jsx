import React from "react";
import {AppBar, Toolbar, Typography, Box, IconButton, Button} from "@mui/material";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                {/* Name oder Logo */}
                <Typography variant="h6" component={Link} to="/" sx={{ color: "inherit", textDecoration: "none" }}>
                    EventBlog
                </Typography>

                {/* NavBar: Links + Navbar */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Button component={Link} to="/" color="inherit">Home</Button>
                    <Button component={Link} to="/about" color="inherit">Über uns</Button>
                    <Button component={Link} to="/contact" color="inherit">Kontakte</Button>

                    {/* NavBar component */}
                    <Navbar />

                </Box>

                {/* Buttons Login und Register */}
                <Box>
                    <IconButton component={Link} to="/login" color="inherit" title="Login">
                        <FaSignInAlt />
                    </IconButton>
                    <IconButton component={Link} to="/register" color="inherit" title="Registrieren">
                        <FaUserPlus />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

