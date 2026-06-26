"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Container,
  Typography,
  TextField,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
  Chip,
  Stack,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import products from "@/data/products";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Running", "Basketball", "Casual", "Tennis"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          fontFamily: "var(--font-outfit)",
          fontSize: { xs: "2.25rem", md: "3rem" },
          fontWeight: 800,
          mb: 4,
        }}
      >
        Explore Our Collection
      </Typography>

      {/* Filter and Search Bar */}
      <Box sx={{ mb: 6 }}>
        <Grid container spacing={3} sx={{ alignItems: "center" }}>
          {/* Search Input */}
          <Grid size={{ xs: 12, md: 5 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search shoes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                  bgcolor: "background.paper",
                },
              }}
            />
          </Grid>

          {/* Category Chips */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                overflowX: "auto",
                pb: 1,
                scrollbarWidth: "none", // Hide standard scrollbar on Firefox
                "&::-webkit-scrollbar": { display: "none" }, // Hide standard scrollbar on Chrome/Safari
              }}
            >
              {categories.map((category) => (
                <Chip
                  key={category}
                  label={category}
                  onClick={() => setSelectedCategory(category)}
                  color={selectedCategory === category ? "primary" : "default"}
                  variant={selectedCategory === category ? "filled" : "outlined"}
                  sx={{
                    px: 1.5,
                    py: 2,
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    borderRadius: 2,
                    cursor: "pointer",
                  }}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <Box sx={{ py: 8, textAlign: "center" }}>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            No shoes found matching your criteria.
          </Typography>
          <Button
            variant="text"
            color="primary"
            onClick={() => {
              setSearch("");
              setSelectedCategory("All");
            }}
          >
            Clear Filters
          </Button>
        </Box>
      ) : (
        <Grid container spacing={4}>
          {filteredProducts.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #f1f5f9",
                }}
              >
                <Box sx={{ position: "relative", pt: "75%", bgcolor: "#f8fafc" }}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{ fontWeight: 600, mb: 0.5 }}
                  >
                    {product.category}
                  </Typography>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    {product.name}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ fontWeight: 800 }}>
                    ${product.price}.00
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    component={Link}
                    href={`/product/${product.id}`}
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ py: 1 }}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
