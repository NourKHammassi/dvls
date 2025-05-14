import {
  Box,
  Button,
  FormHelperText,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

import {
  loginAsync,
  selectLoginStatus,
  selectLoginError,
  clearLoginError,
  resetLoginStatus,
  selectLoggedInUser,
} from "../AuthSlice";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const status = useSelector(selectLoginStatus);
  const error = useSelector(selectLoginError);
  const user = useSelector(selectLoggedInUser);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user?.isVerified) navigate("/");
    else if (user) navigate("/verify-otp");
  }, [user]);

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  useEffect(() => {
    if (status === "fullfilled" && user?.isVerified) {
      toast.success("Connexion réussie");
      reset();
    }
    return () => {
      dispatch(clearLoginError());
      dispatch(resetLoginStatus());
    };
  }, [status]);

  const onSubmit = (data) => {
    dispatch(loginAsync(data));
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={{
        background: "linear-gradient(to bottom left, #C6C6C6 50%, #f5f5f5 50%)",
        px: 2,
      }}
    >
      <Typography
        variant="h2"
        fontWeight={800}
        sx={{
          position: "absolute",
          top: 40,
          textAlign: "center",
          background: "black",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
          animation: "fadeIn 2s ease-out",
          "@keyframes fadeIn": {
            from: { opacity: 0, transform: "translateY(-20px)" },
            to: { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        Bienvenue sur DVLS
      </Typography>


      <Stack
        spacing={4}
        maxWidth={700}
        width="100%"
        p={isMobile ? 3 : 6}
        borderRadius={3}
        sx={{
          backgroundColor: "#9A9898",
          boxShadow: 4,
          transition: "0.3s",
          "& .MuiTypography-root, & .MuiFormHelperText-root, & .MuiInputLabel-root": {
            color: "#fff",
          },
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#f5f5f5",
            "& fieldset": { borderColor: "#fff" },
            "&:hover fieldset": { borderColor: "#fff" },
          },
        }}
      >
        <Typography variant="h4" fontWeight={600} textAlign="center" color="#0F3F80">
          Connexion
        </Typography>

        <Stack component="form" onSubmit={handleSubmit(onSubmit)} spacing={3} noValidate>
          <TextField
            fullWidth
            placeholder="Email"
            {...register("email", {
              required: "L'email est requis",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                message: "Veuillez entrer un email valide",
              },
            })}
          />
          {errors.email && <FormHelperText error>{errors.email.message}</FormHelperText>}

          <TextField
            type="password"
            fullWidth
            placeholder="Mot de passe"
            {...register("password", { required: "Le mot de passe est requis" })}
          />
          {errors.password && <FormHelperText error>{errors.password.message}</FormHelperText>}

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={status === "pending"}
              sx={{
                backgroundColor: "#CE6868",
                color: "#fff",
                fontWeight: 600,
                borderRadius: 3,
                py: 1.5,
                fontSize: "1rem",
                "&:hover": { backgroundColor: "#B23F3F" },
              }}
            >
              Se connecter
            </Button>
          </motion.div>
        </Stack>

        <Stack spacing={1} textAlign="center">
          <Typography
            component={Link}
            to="/forgot-password"
            sx={{
              color: "#C24E06",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            Mot de passe oublié ?
          </Typography>
          <Typography
            component={Link}
            to="/signup"
            sx={{
              color: "#0F3F80",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            Pas encore de compte ? <b>S'inscrire</b>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
