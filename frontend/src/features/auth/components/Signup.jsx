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
  selectLoggedInUser,
  signupAsync,
  selectSignupStatus,
  selectSignupError,
  clearSignupError,
  resetSignupStatus,
} from "../AuthSlice";

export const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const status = useSelector(selectSignupStatus);
  const error = useSelector(selectSignupError);
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
    if (status === "fullfilled") {
      toast.success("Bienvenue ! Vérifiez votre e-mail !");
      reset();
    }
    return () => {
      dispatch(clearSignupError());
      dispatch(resetSignupStatus());
    };
  }, [status]);

  const onSubmit = (data) => {
    const { confirmPassword, ...credentials } = data;
    dispatch(signupAsync(credentials));
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
          Inscription
        </Typography>

        <Stack component="form" onSubmit={handleSubmit(onSubmit)} spacing={3} noValidate>
          <TextField
            fullWidth
            placeholder="Nom d'utilisateur"
            {...register("name", { required: "Nom d'utilisateur requis" })}
          />
          {errors.name && <FormHelperText error>{errors.name.message}</FormHelperText>}

          <TextField
            fullWidth
            placeholder="Email"
            {...register("email", {
              required: "Email requis",
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
            {...register("password", { required: "Mot de passe requis" })}
          />
          {errors.password && <FormHelperText error>{errors.password.message}</FormHelperText>}

          <TextField
            type="password"
            fullWidth
            placeholder="Confirmer le mot de passe"
            {...register("confirmPassword", {
              required: "Confirmation requise",
              validate: (value, allValues) =>
                value === allValues.password || "Les mots de passe ne correspondent pas",
            })}
          />
          {errors.confirmPassword && (
            <FormHelperText error>{errors.confirmPassword.message}</FormHelperText>
          )}

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
                "&:hover": {
                  backgroundColor: "#B23F3F",
                },
              }}
            >
              S'inscrire
            </Button>
          </motion.div>
        </Stack>

        <Stack spacing={1} textAlign="center">
          <Typography
            component={Link}
            to="/login"
            sx={{
              color: "#0F3F80",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            Déjà membre ? <b>Connexion</b>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
