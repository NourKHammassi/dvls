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
        toast("Message envoyé avec succès !");
        reset();
        navigate("/");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast("Échec de l'envoi du message");
    }
  };

  return (
    <Stack
      p={"0 16px"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"row"}
    >
      <Stack
        width={is1100 ? "100%" : "60rem"}
        rowGap={4}
        mt={is480 ? 4 : 6}
        mb={6}
        component={"form"}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Informations de contact */}
        <Typography mt={2} textAlign="center">
          <h4>
            Un projet de plomberie, chauffage, climatisation ou énergie
            renouvelable ?
            <br />
            Contactez DVLS – votre expert national en confort thermique et énergétique.
          </h4>
          <br />
          📞 +33 7 53 21 95 58
          <br />
          📍 Siège : Nouvelle-Aquitaine, interventions sur toute la France
          <br />
          📧 contact@DVLS.fr
        </Typography>

        <Stack rowGap={3}>
          <Stack flexDirection={"row"}>
            <Stack flex={1}>
              <Typography variant="h6" fontWeight={400} gutterBottom>
                Prénom
              </Typography>
              <TextField
                {...register("name", { required: "Le prénom est requis" })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </Stack>
            <Stack flex={1}>
              <Typography variant="h6" fontWeight={400} gutterBottom>
                Nom
              </Typography>
              <TextField
                {...register("lastName", { required: "Le nom est requis" })}
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
              />
            </Stack>
          </Stack>

          <Stack>
            <Typography variant="h6" fontWeight={400} gutterBottom>
              Email
            </Typography>
            <TextField
              {...register("email", { required: "L'email est requis" })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Stack>

          <Stack>
            <Typography variant="h6" fontWeight={400} gutterBottom>
              Message
            </Typography>
            <TextField
              multiline
              rows={4}
              {...register("message", { required: "Le message est requis" })}
              error={!!errors.message}
              helperText={errors.message?.message}
            />
          </Stack>
        </Stack>

        {/* Boutons d'action */}
        <Stack
          flexDirection={"row"}
          alignSelf={"flex-end"}
          columnGap={is480 ? 1 : 2}
        >
          <Button
            size={is480 ? "medium" : "large"}
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "#047d61",
              "&:hover": {
                backgroundColor: "#12997B",
              },
            }}
          >
            Envoyer
          </Button>
          <Button
            size={is480 ? "medium" : "large"}
            sx={{
              borderColor: "#047d61",
              borderWidth: "1px",
              borderStyle: "solid",
              color: "#047d61",
              backgroundColor: "white",
              "&:hover": {
                borderColor: "#12997B",
                color: "#12997B",
              },
            }}
            component={Link}
            to={"/"}
          >
            Annuler
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
