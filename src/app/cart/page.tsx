"use client";

import React from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store";
import { removeFromCart, updateQuantity, clearCart } from "@/store/cartSlice";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleRemove = (id: number, size: string, color: string) => {
    dispatch(removeFromCart({ id, size, color }));
  };

  const handleQtyChange = (
    id: number,
    size: string,
    color: string,
    currentQty: number,
    change: number
  ) => {
    const newQty = currentQty + change;
    dispatch(updateQuantity({ id, size, color, quantity: newQty }));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <Container maxWidth="md" sx={{ py: 12, textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{ fontFamily: "var(--font-outfit)", fontWeight: 700, mb: 2 }}
        >
          Your Cart is Empty
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          Looks like you haven't added any shoes to your cart yet.
        </Typography>
        <Button
          component={Link}
          href="/shop"
          variant="contained"
          size="large"
          sx={{ px: 4, py: 1.5 }}
        >
          Explore Collection
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography
        variant="h2"
        sx={{
          fontFamily: "var(--font-outfit)",
          fontSize: { xs: "2.25rem", md: "3rem" },
          fontWeight: 800,
          mb: 5,
        }}
      >
        Your Shopping Cart
      </Typography>

      <Grid container spacing={4}>
        {/* Cart Items List */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <Stack spacing={3}>
            {cartItems.map((item) => (
              <Card
                key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  border: "1px solid #f1f5f9",
                  position: "relative",
                }}
              >
                {/* Product Image */}
                <Box
                  sx={{
                    width: { xs: "100%", sm: 160 },
                    height: { xs: 200, sm: 160 },
                    position: "relative",
                    flexShrink: 0,
                    bgcolor: "#f8fafc",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                {/* Product Info */}
                <CardContent
                  sx={{
                    flexGrow: 1,
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ justifyContent: "space-between", alignItems: "flex-start" }}
                    >
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                          Size: <strong>{item.selectedSize}</strong> &bull; Color:{" "}
                          <strong>{item.selectedColor}</strong>
                        </Typography>
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 800 }}>
                        ${item.price}.00
                      </Typography>
                    </Stack>
                  </Box>

                  {/* Quantity Actions & Remove */}
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center", justifyContent: "space-between", mt: 2 }}
                  >
                    <Stack direction="row" spacing={1} sx={{ alignItems: "center", border: "1px solid #cbd5e1", borderRadius: 2 }}>
                      <IconButton
                        size="small"
                        onClick={() =>
                          handleQtyChange(
                            item.id,
                            item.selectedSize,
                            item.selectedColor,
                            item.quantity,
                            -1
                          )
                        }
                        disabled={item.quantity <= 1}
                      >
                        <RemoveIcon fontSize="small" />
                      </IconButton>
                      <Typography sx={{ px: 1, fontWeight: 700 }}>
                        {item.quantity}
                      </Typography>
                      <IconButton
                        size="small"
                        onClick={() =>
                          handleQtyChange(
                            item.id,
                            item.selectedSize,
                            item.selectedColor,
                            item.quantity,
                            1
                          )
                        }
                        disabled={item.quantity >= item.stock}
                      >
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </Stack>

                    <Button
                      variant="text"
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() =>
                        handleRemove(item.id, item.selectedSize, item.selectedColor)
                      }
                      sx={{ textTransform: "none" }}
                    >
                      Remove
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Stack>

          <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
            <Button
              component={Link}
              href="/shop"
              startIcon={<KeyboardBackspaceIcon />}
              sx={{ color: "text.secondary" }}
            >
              Continue Shopping
            </Button>
            <Button color="error" onClick={handleClear}>
              Clear Cart
            </Button>
          </Box>
        </Grid>

        {/* Order Summary */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Card sx={{ p: 3, border: "1px solid #f1f5f9", bgcolor: "#f8fafc" }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
              Order Summary
            </Typography>

            <Stack spacing={2} sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography color="text.secondary">Total Items</Typography>
                <Typography sx={{ fontWeight: 600 }}>{totalItems}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography color="text.secondary">Shipping</Typography>
                <Typography color="success.main" sx={{ fontWeight: 600 }}>
                  Free
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography color="text.secondary">Tax</Typography>
                <Typography sx={{ fontWeight: 600 }}>$0.00</Typography>
              </Box>
            </Stack>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: "flex", justifyContent: "space-between", my: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Total Price
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                ${totalPrice}.00
              </Typography>
            </Box>

            <Button
              component={Link}
              href="/checkout"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              endIcon={<ArrowForwardIcon />}
              sx={{ py: 1.5 }}
            >
              Proceed to Checkout
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
