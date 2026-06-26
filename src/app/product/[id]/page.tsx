"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store";
import { addToCart } from "@/store/cartSlice";
import products from "@/data/products";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Divider,
  Snackbar,
  Alert,
  Breadcrumbs,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const unwrappedParams = use(params);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const productId = parseInt(unwrappedParams.id);
  const product = products.find((p) => p.id === productId);

  // Selection states
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorSize, setErrorSize] = useState(false);
  const [errorColor, setErrorColor] = useState(false);

  if (!product) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" color="text.secondary" gutterBottom>
          Oops! Product not found.
        </Typography>
        <Button variant="contained" onClick={() => router.push("/shop")} sx={{ mt: 2 }}>
          Return to Shop
        </Button>
      </Container>
    );
  }

  const handleAddToCart = () => {
    let hasError = false;
    if (!selectedSize) {
      setErrorSize(true);
      hasError = true;
    } else {
      setErrorSize(false);
    }

    if (!selectedColor) {
      setErrorColor(true);
      hasError = true;
    } else {
      setErrorColor(false);
    }

    if (hasError) return;

    // Dispatch redux action
    dispatch(
      addToCart({
        product,
        size: selectedSize,
        color: selectedColor,
      })
    );

    // Show confirmation
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Back to Shop & Breadcrumbs */}
      <Box sx={{ mb: 4 }}>
        <Button
          component={Link}
          href="/shop"
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 2, color: "text.secondary" }}
        >
          Back to Shop
        </Button>
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
          <Link href="/shop" style={{ textDecoration: "none", color: "inherit" }}>
            Shop
          </Link>
          <Typography color="text.primary" sx={{ fontWeight: 600 }}>
            {product.name}
          </Typography>
        </Breadcrumbs>
      </Box>

      {/* Main Details Grid */}
      <Grid container spacing={6}>
        {/* Product Image */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              border: "1px solid #e2e8f0",
              bgcolor: "#f8fafc",
              position: "relative",
              pt: "85%",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>

        {/* Product Info */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <Typography variant="subtitle2" color="secondary" sx={{ fontWeight: 700, mb: 1, textTransform: "uppercase" }}>
              {product.category}
            </Typography>
            <Typography variant="h3" component="h1" sx={{ fontFamily: "var(--font-outfit)", fontWeight: 800, mb: 2 }}>
              {product.name}
            </Typography>
            <Typography variant="h4" color="primary" sx={{ fontWeight: 800, mb: 3 }}>
              ${product.price}.00
            </Typography>
            
            <Divider sx={{ mb: 3 }} />

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
              {product.description}
            </Typography>

            {/* Size Selector */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5, display: "flex", justifyContent: "space-between" }}>
                Select Size {errorSize && <span style={{ color: "#d32f2f", fontSize: "0.85rem", fontWeight: 500 }}>Please select a size</span>}
              </Typography>
              <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                {product.sizes.map((size) => {
                  const isSelected = selectedSize === size;
                  return (
                    <Button
                      key={size}
                      onClick={() => {
                        setSelectedSize(size);
                        setErrorSize(false);
                      }}
                      variant={isSelected ? "contained" : "outlined"}
                      color={isSelected ? "primary" : "inherit"}
                      sx={{
                        minWidth: 54,
                        height: 54,
                        borderRadius: 3,
                        borderColor: isSelected ? "primary.main" : "#cbd5e1",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                      }}
                    >
                      {size}
                    </Button>
                  );
                })}
              </Box>
            </Box>

            {/* Color Selector */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5, display: "flex", justifyContent: "space-between" }}>
                Select Color {errorColor && <span style={{ color: "#d32f2f", fontSize: "0.85rem", fontWeight: 500 }}>Please select a color</span>}
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                {product.colors.map((color) => {
                  const isSelected = selectedColor === color.name;
                  return (
                    <Box
                      key={color.name}
                      onClick={() => {
                        setSelectedColor(color.name);
                        setErrorColor(false);
                      }}
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        bgcolor: color.hex,
                        border: isSelected ? "3px solid #0f172a" : "1px solid #cbd5e1",
                        outline: isSelected ? "2px solid #d97706" : "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      {isSelected && (
                        <CheckIcon
                          sx={{
                            color: color.hex === "#ffffff" ? "#0f172a" : "#ffffff",
                            fontSize: "1.2rem",
                          }}
                        />
                      )}
                    </Box>
                  );
                })}
              </Box>
            </Box>

            {/* Add to Cart CTA */}
            <Box sx={{ mt: "auto", pt: 4 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                onClick={handleAddToCart}
                sx={{ py: 2, fontSize: "1.1rem", borderRadius: 3 }}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Added to Cart Toast */}
      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%", borderRadius: 2 }}>
          Successfully added {product.name} ({selectedColor}, Size {selectedSize}) to your cart!
        </Alert>
      </Snackbar>
    </Container>
  );
}
