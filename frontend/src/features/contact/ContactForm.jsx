import React from "react";
import {
  Stack,
  Typography,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { axiosi } from "../../config/axios";
import { toast } from "react-toastify";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const theme = useTheme();
  const is1100 = useMediaQuery(theme.breakpoints.down(1100));
  const is480 = useMediaQuery(theme.breakpoints.down(480));

  const onSubmit = async (data) => {
    try {
      const response = await axiosi.post("/messages/send", data);

      if (response.status === 201) {
        toast.success("Message envoyé avec succès !");
        reset();
        navigate("/");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Échec de l'envoi du message");
    }
  };

  return (
    <Stack
      px={2}
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}
    >
      <Stack
        width={is1100 ? "100%" : "60rem"}
        spacing={4}
        mt={is480 ? 4 : 6}
        mb={6}
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          backgroundColor: "#fff",
          p: { xs: 3, sm: 5 },
          borderRadius: 3,
          boxShadow: 4,
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight={700}
          color="#0F3F80" // #DB4444
        >
          Contactez-nous
        </Typography>


        <Typography
          variant="body1"
          textAlign="center"
          sx={{ color: "#444", fontWeight: 400 }}
        >
          Un projet de plomberie, chauffage, climatisation ou énergie
          renouvelable ?
          <br />
          <b>DVLS</b> – votre expert national en confort thermique et énergétique.
          <br />
          📞 +33 7 53 21 95 58 &nbsp;|&nbsp; 📍 Nouvelle-Aquitaine, France
          <br />
          📧 contact@DVLS.fr
        </Typography>

        <Stack spacing={3}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Stack flex={1}>
              <Typography variant="body1" fontWeight={500}>
                Prénom
              </Typography>
              <TextField
                {...register("name", { required: "Le prénom est requis" })}
                error={!!errors.name}
                helperText={errors.name?.message}
                fullWidth
              />
            </Stack>
            <Stack flex={1}>
              <Typography variant="body1" fontWeight={500}>
                Nom
              </Typography>
              <TextField
                {...register("lastName", { required: "Le nom est requis" })}
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
                fullWidth
              />
            </Stack>
          </Stack>

          <Stack>
            <Typography variant="body1" fontWeight={500}>
              Email
            </Typography>
            <TextField
              {...register("email", { required: "L'email est requis" })}
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
            />
          </Stack>

          <Stack>
            <Typography variant="body1" fontWeight={500}>
              Message
            </Typography>
            <TextField
              multiline
              rows={4}
              {...register("message", { required: "Le message est requis" })}
              error={!!errors.message}
              helperText={errors.message?.message}
              fullWidth
            />
          </Stack>
        </Stack>

        <Stack direction="row" justifyContent="flex-end" spacing={2}>
          <Button
            type="submit"
            variant="contained"
            size={is480 ? "medium" : "large"}
            sx={{
              backgroundColor: theme.palette.primary.dark, // #DB4444
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#b63232", // une variante plus sombre si tu veux
              },
            }}
          >
            Envoyer
          </Button>

          <Button
            component={Link}
            to="/"
            variant="outlined"
            size={is480 ? "medium" : "large"}
            sx={{
              borderColor: theme.palette.primary.dark,
              color: theme.palette.primary.dark,
              fontWeight: 600,
              "&:hover": {
                borderColor: "#b63232",
                color: "#b63232",
              },
            }}
          >
            Annuler
          </Button>

        </Stack>
      </Stack>
    </Stack>
  );
};
