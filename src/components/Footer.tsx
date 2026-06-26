"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Grid,
  Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0f172a",
        color: "#94a3b8",
        py: 6,
        mt: "auto",
        borderTop: "1px solid #1e293b",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo & Copyright */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h6" color="#ffffff" sx={{ fontWeight: 800, mb: 1 }}>
              Shoe Haven
            </Typography>
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} Shoe Haven. All rights reserved.
            </Typography>
          </Grid>

          {/* Navigation/Policy Links */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: "center" }}>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
              <Link href="/privacy" style={{ color: "inherit", textDecoration: "none", fontSize: "0.875rem" }}>
                Privacy Policy
              </Link>
              <Link href="/terms" style={{ color: "inherit", textDecoration: "none", fontSize: "0.875rem" }}>
                Terms of Service
              </Link>
              <Link href="/contact" style={{ color: "inherit", textDecoration: "none", fontSize: "0.875rem" }}>
                Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Socials & Back to Top */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" }, gap: 2, alignItems: "center" }}>
            <Box>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#94a3b8", "&:hover": { color: "#ffffff" } }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#94a3b8", "&:hover": { color: "#ffffff" } }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#94a3b8", "&:hover": { color: "#ffffff" } }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
            <Button
              variant="outlined"
              size="small"
              onClick={scrollToTop}
              startIcon={<ArrowUpwardIcon />}
              sx={{
                color: "#94a3b8",
                borderColor: "#334155",
                "&:hover": {
                  color: "#ffffff",
                  borderColor: "#475569",
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                },
              }}
            >
              Back to Top
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
