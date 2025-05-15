import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetAddressStatus,
  selectAddressStatus,
} from "../features/address/AddressSlice";
import { Navbar } from "../features/navigation/components/Navbar";
import { ProductList } from "../features/products/components/ProductList";
import { Footer } from "../features/footer/Footer";
import {
  Typography,
  Container,
  Stack,
  Box,
  Paper,
  Divider,
} from "@mui/material";

export const HomePage = () => {
  const dispatch = useDispatch();
  const addressStatus = useSelector(selectAddressStatus);

  useEffect(() => {
    if (addressStatus === "fulfilled") {
      dispatch(resetAddressStatus());
    }
  }, [addressStatus]);

  const engagements = [
    "Des prestations personnalisées et de qualité",
    "Une équipe qualifiée et disponible à l’échelle nationale",
    "Des conseils techniques clairs et adaptés",
    "Un accompagnement complet de l’étude au suivi après travaux",
  ];

  const expertises = [
    "Systèmes de chauffage : pompes à chaleur, chaudières, planchers chauffants…",
    "Travaux de plomberie et installation sanitaire",
    "Climatisation, ventilation et qualité de l’air",
    "Électricité (interventions élémentaires et mises en conformité)",
    "Solutions d’efficacité énergétique et énergies renouvelables",
  ];

  return (
    <>
      <Navbar isProductList={true} />

      {/* Hero section */}
      <Box
        sx={{
          background: "linear-gradient(to right, #0F3F80, #CE6868)",
          py: 6,
          px: 2,
          color: "black",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: 800, mb: 2, fontFamily: "'Poppins', sans-serif" }}
        >
          Bienvenue chez DVLS
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontStyle: "italic",
            color: "black",
          }}
        >
          « Avec DVLS, votre habitat respire l’efficacité »
        </Typography>
      </Box>

      {/* Présentation */}
      <Container sx={{ py: 5 }}>
        <Stack spacing={3}>
          <Typography variant="body1">
            Basée en Nouvelle-Aquitaine, DVLS intervient partout en France pour
            vous proposer des prestations professionnelles dans les domaines de
            la plomberie, du chauffage, de la ventilation, de la climatisation,
            de l’électricité, de l’isolation et des énergies renouvelables.
          </Typography>
          <Typography variant="body1">
            Que vous soyez particulier ou professionnel, notre équipe vous
            accompagne dans tous vos projets avec des solutions modernes et
            durables.
          </Typography>
        </Stack>
      </Container>

      {/* Engagements */}
      <Box sx={{ backgroundColor: "#F4F4F4", py: 6 }}>
        <Container>
          <Typography
            variant="h4"
            sx={{
              color: "black",
              fontWeight: "bold",
              mb: 3,
              textAlign: "center",
            }}
          >
            Nos engagements
          </Typography>
          <Stack spacing={2}>
            {engagements.map((text, idx) => (
              <Paper
                key={idx}
                elevation={3}
                sx={{
                  p: 2,
                  borderLeft: "6px solid #C24E06",
                  backgroundColor: "#ffffff",
                }}
              >
                <Typography sx={{ color: "#424242", fontSize: "1.05rem" }}>
                  {text}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Expertises */}
      <Box sx={{ backgroundColor: "#C6C6C6", py: 6 }}>
        <Container>
          <Typography
            variant="h4"
            sx={{
              color: "black",
              fontWeight: "bold",
              mb: 3,
              textAlign: "center",
            }}
          >
            Nos domaines d’expertise
          </Typography>
          <Stack spacing={2}>
            {expertises.map((text, idx) => (
              <Paper
                key={idx}
                elevation={2}
                sx={{
                  p: 2,
                  backgroundColor: "#fff",
                  borderRadius: 2,
                }}
              >
                <Typography sx={{ color: "#333", fontSize: "1.05rem" }}>
                  {text}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Produits / Services */}
      <Box sx={{ py: 6, backgroundColor: "#fefefe" }}>
        <Container>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "black",
              textAlign: "center",
            }}
          >
            Nos Services
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", mb: 4, maxWidth: "800px", mx: "auto" }}
          >
            Chez DVLS, nous proposons une large gamme de prestations techniques
            dans les domaines du bâtiment et de la performance énergétique.
            Partout en France, nous accompagnons particuliers et professionnels
            pour des installations, des dépannages ou des rénovations.
          </Typography>
          <ProductList />
        </Container>
      </Box>

      {/* Zone d’intervention */}
      <Box
        sx={{
          py: 5,
          px: 2,
          backgroundColor: "#0F3F80",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", mb: 1, color: "#fff" }}
        >
          📍 Zone d’intervention : Toute la France
        </Typography>
        <Typography variant="body1">
          📞 Une question, un besoin, un chantier ? Contactez DVLS pour un devis
          clair, rapide et gratuit.
        </Typography>
      </Box>

      <Footer />
    </>
  );
};
