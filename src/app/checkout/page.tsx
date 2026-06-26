"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store";
import { clearCart } from "@/store/cartSlice";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Box,
  Divider,
  Stack,
  Avatar,
  ListItemText,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import LocalMallIcon from "@mui/icons-material/LocalMall";

interface FormFields {
  fullName: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  address?: string;
  city?: string;
  zipCode?: string;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
}

export default function CheckoutPage() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const [formData, setFormData] = useState<FormFields>({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderId, setOrderId] = useState("");

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    
    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.address.trim()) newErrors.address = "Shipping address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    
    // Zip code regex
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "Zip code is required";
    } else if (formData.zipCode.length < 5) {
      newErrors.zipCode = "Zip code should be at least 5 digits";
    }

    // Card validation
    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = "Card number is required";
    } else if (formData.cardNumber.replace(/\D/g, "").length !== 16) {
      newErrors.cardNumber = "Must be a 16-digit card number";
    }

    // Expiry date format MM/YY
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!formData.expiryDate.trim()) {
      newErrors.expiryDate = "Expiration date is required";
    } else if (!expiryRegex.test(formData.expiryDate)) {
      newErrors.expiryDate = "Use MM/YY format";
    }

    // CVV 3 digits
    if (!formData.cvv.trim()) {
      newErrors.cvv = "CVV is required";
    } else if (formData.cvv.replace(/\D/g, "").length !== 3) {
      newErrors.cvv = "Must be a 3-digit CVV";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Generate mock order ID
    const randomOrderId = "SH-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(randomOrderId);
    setIsSubmitted(true);

    // Clear Redux cart
    dispatch(clearCart());
  };

  if (isSubmitted) {
    return (
      <Container maxWidth="sm" sx={{ py: 12, textAlign: "center" }}>
        <CheckCircleOutlinedIcon color="success" sx={{ fontSize: 80, mb: 3 }} />
        <Typography
          variant="h3"
          sx={{ fontFamily: "var(--font-outfit)", fontWeight: 700, mb: 2 }}
        >
          Thank You for Your Order!
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4, fontWeight: 500 }}>
          Your order has been placed successfully.
        </Typography>
        <Card sx={{ p: 4, mb: 6, bgcolor: "#f8fafc", border: "1px solid #e2e8f0" }}>
          <Stack spacing={2} sx={{ textAlign: "left" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography color="text.secondary">Order ID:</Typography>
              <Typography sx={{ fontWeight: 700 }}>{orderId}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography color="text.secondary">Shipping Name:</Typography>
              <Typography sx={{ fontWeight: 600 }}>{formData.fullName}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography color="text.secondary">Sent to Email:</Typography>
              <Typography sx={{ fontWeight: 600 }}>{formData.email}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography color="text.secondary">Delivery Address:</Typography>
              <Typography sx={{ fontWeight: 600, textAlign: "right" }}>
                {formData.address}, {formData.city}
              </Typography>
            </Box>
          </Stack>
        </Card>
        <Button
          component={Link}
          href="/shop"
          variant="contained"
          size="large"
          startIcon={<LocalMallIcon />}
          sx={{ px: 4, py: 1.5 }}
        >
          Continue Shopping
        </Button>
      </Container>
    );
  }

  if (cartItems.length === 0) {
    return (
      <Container maxWidth="md" sx={{ py: 12, textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{ fontFamily: "var(--font-outfit)", fontWeight: 700, mb: 2 }}
        >
          Empty Checkout
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          You cannot checkout because your cart is empty.
        </Typography>
        <Button
          component={Link}
          href="/shop"
          variant="contained"
          size="large"
          sx={{ px: 4, py: 1.5 }}
        >
          Go Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Button
        component={Link}
        href="/cart"
        startIcon={<KeyboardBackspaceIcon />}
        sx={{ mb: 3, color: "text.secondary" }}
      >
        Back to Cart
      </Button>

      <Typography
        variant="h2"
        sx={{
          fontFamily: "var(--font-outfit)",
          fontSize: { xs: "2.25rem", md: "3rem" },
          fontWeight: 800,
          mb: 5,
        }}
      >
        Checkout Details
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={5}>
          {/* Checkout Forms (Left side) */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Stack spacing={4}>
              {/* Shipping Info */}
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                  Shipping Information
                </Typography>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      error={!!errors.fullName}
                      helperText={errors.fullName}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      type="email"
                      label="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Shipping Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      error={!!errors.address}
                      helperText={errors.address}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      error={!!errors.city}
                      helperText={errors.city}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Zip / Postal Code"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      error={!!errors.zipCode}
                      helperText={errors.zipCode}
                      required
                    />
                  </Grid>
                </Grid>
              </Box>

              <Divider />

              {/* Payment Info */}
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                  Payment Method
                </Typography>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Card Number"
                      name="cardNumber"
                      placeholder="1234 5678 1234 5678"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      error={!!errors.cardNumber}
                      helperText={errors.cardNumber}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Expiration Date"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      error={!!errors.expiryDate}
                      helperText={errors.expiryDate}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="CVV"
                      name="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={handleChange}
                      error={!!errors.cvv}
                      helperText={errors.cvv}
                      required
                    />
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </Grid>

          {/* Cart Summary (Right side) */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Card sx={{ p: 4, border: "1px solid #f1f5f9", bgcolor: "#f8fafc", position: "sticky", top: 24 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                Order Summary
              </Typography>

              {/* List of checkout items */}
              <Stack spacing={2.5} sx={{ mb: 4 }}>
                {cartItems.map((item) => (
                  <Box
                    key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                    sx={{ display: "flex", gap: 2, alignItems: "center" }}
                  >
                    <Avatar
                      src={item.image}
                      variant="rounded"
                      sx={{ width: 64, height: 64, bgcolor: "#ffffff", border: "1px solid #cbd5e1" }}
                    />
                    <ListItemText
                      primary={item.name}
                      secondary={`Size: ${item.selectedSize} | Color: ${item.selectedColor} | Qty: ${item.quantity}`}
                      slotProps={{
                        primary: { sx: { fontWeight: 700, fontSize: "0.95rem" } },
                        secondary: { sx: { fontSize: "0.85rem" } },
                      }}
                    />
                    <Typography sx={{ fontWeight: 700 }}>
                      ${item.price * item.quantity}.00
                    </Typography>
                  </Box>
                ))}
              </Stack>

              <Divider sx={{ mb: 3 }} />

              <Stack spacing={2} sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography color="text.secondary">Subtotal</Typography>
                  <Typography sx={{ fontWeight: 600 }}>${totalPrice}.00</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography color="text.secondary">Shipping</Typography>
                  <Typography color="success.main" sx={{ fontWeight: 600 }}>
                    Free
                  </Typography>
                </Box>
              </Stack>

              <Divider sx={{ my: 1 }} />

              <Box sx={{ display: "flex", justifyContent: "space-between", my: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Order Total
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 800 }}>
                  ${totalPrice}.00
                </Typography>
              </Box>

              <Button
                type="submit"
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
                sx={{ py: 1.8, fontSize: "1.05rem" }}
              >
                Place Order (${totalPrice}.00)
              </Button>
            </Card>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
