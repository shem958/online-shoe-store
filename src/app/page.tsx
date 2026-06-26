"use client";

import React from "react";
import Link from "next/link";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Box,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import products from "@/data/products";

export default function HomePage() {
  // Select first two products as featured products
  const featuredProducts = products.slice(0, 2);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "#ffffff",
          py: { xs: 10, md: 16 },
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "var(--font-outfit)",
              fontSize: { xs: "3rem", md: "4.5rem" },
              fontWeight: 800,
              mb: 2,
              lineHeight: 1.1,
            }}
          >
            Step Into <span style={{ color: "#d97706" }}>Confidence</span>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#94a3b8",
              mb: 5,
              fontWeight: 400,
              maxWidth: "600px",
              mx: "auto",
              fontSize: { xs: "1.1rem", md: "1.3rem" },
            }}
          >
            Explore our curated collection of high-performance footwear engineered for running, basketball, and daily lifestyle.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
            <Button
              component={Link}
              href="/shop"
              variant="contained"
              color="secondary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 4, py: 1.5, fontSize: "1.05rem" }}
            >
              Shop Collection
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Featured Products Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontFamily: "var(--font-outfit)",
            fontSize: { xs: "2rem", md: "2.75rem" },
            fontWeight: 700,
            mb: 6,
          }}
        >
          Featured Classics
        </Typography>

        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          {featuredProducts.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 5 }} key={product.id}>
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
                    color="secondary"
                    sx={{ fontWeight: 700, textTransform: "uppercase", mb: 1 }}
                  >
                    {product.category}
                  </Typography>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    {product.name}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ fontWeight: 700, mb: 2 }}>
                    ${product.price}.00
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    component={Link}
                    href={`/product/${product.id}`}
                    variant="outlined"
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
      </Container>
    </Box>
  );
}
