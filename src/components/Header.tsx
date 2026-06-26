"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useAppSelector } from "@/store";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: (theme.shape.borderRadius as number) * 2,
  backgroundColor: alpha(theme.palette.common.black, 0.04),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.08),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.text.secondary,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header() {
  const pathname = usePathname();
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 700 }}>
        Shoe Haven
      </Typography>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.title} disablePadding>
            <ListItemButton
              component={Link}
              href={link.path}
              selected={pathname === link.path}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={link.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between", height: 72 }}>
          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo & brand */}
          <Link href="/" passHref style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Image src="/Haven.svg" alt="Haven Logo" width={32} height={32} />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 800,
                  fontSize: "1.3rem",
                  letterSpacing: ".05rem",
                  display: { xs: "none", sm: "block" },
                }}
              >
                Shoe Haven
              </Typography>
            </Box>
          </Link>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 3 }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.title}
                  href={link.path}
                  style={{
                    textDecoration: "none",
                    color: isActive ? "#d97706" : "#475569",
                    fontWeight: isActive ? 700 : 500,
                    fontSize: "0.95rem",
                    transition: "color 0.2s ease",
                  }}
                >
                  {link.title}
                </Link>
              );
            })}
          </Box>

          {/* Search bar & Cart */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Search sx={{ display: { xs: "none", md: "block" } }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search shoes..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <Link href="/cart" passHref style={{ color: "inherit" }}>
              <IconButton size="large" aria-label={`cart with ${totalItems} items`} color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
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
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
