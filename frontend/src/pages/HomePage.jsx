import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetAddressStatus,
  selectAddressStatus,
} from "../features/address/AddressSlice";
import { Navbar } from "../features/navigation/components/Navbar";
import { ProductList } from "../features/products/components/ProductList";
import { Footer } from "../features/footer/Footer";
import { Typography, Container, Stack, Box } from "@mui/material";

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
      <Container
        sx={{
          marginBottom: 4,
          marginTop: 6,
          padding: 4,
          borderRadius: 3,
        }}
      >
        {/* Titre principal et slogan */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ color: "#0F3F80", fontWeight: "bold" }}
        >
          Bienvenue chez DVLS
        </Typography>
        <Typography
          variant="h6"
          align="center"
          paragraph
          sx={{ color: "#424242", fontStyle: "italic" }}
        >
          « Avec DVLS, votre habitat respire l’efficacité »
        </Typography>

        {/* Présentation */}
        <Typography variant="body1" paragraph>
          Basée en Nouvelle-Aquitaine, l’entreprise DVLS intervient partout en
          France pour vous proposer des prestations professionnelles dans les
          domaines de la plomberie, du chauffage, de la ventilation, de la
          climatisation, de l’électricité, de l’isolation et des énergies
          renouvelables.
        </Typography>
        <Typography variant="body1" paragraph>
          Que vous soyez particulier ou professionnel, notre équipe vous
          accompagne dans tous vos projets, en neuf comme en rénovation, avec
          des solutions fiables, modernes et durables.
        </Typography>

        {/* Engagements */}
        <Stack spacing={2} sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "#0F3F80", fontWeight: "bold" }}
          >
            ✅ Nos engagements
          </Typography>
          <Stack spacing={1} sx={{ paddingLeft: 2 }}>
            {engagements.map((item, idx) => (
              <Typography key={idx} sx={{ fontSize: "1.1rem", color: "#424242" }}>
                - {item}
              </Typography>
            ))}
          </Stack>
        </Stack>

        {/* Domaines d'expertise */}
        <Stack spacing={2} sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "#0F3F80", fontWeight: "bold" }}
          >
            🛠️ Nos domaines d’expertise
          </Typography>
          <Stack spacing={1} sx={{ paddingLeft: 2 }}>
            {expertises.map((item, idx) => (
              <Typography key={idx} sx={{ fontSize: "1.1rem", color: "#424242" }}>
                - {item}
              </Typography>
            ))}
          </Stack>
        </Stack>

        {/* Produits / Services (ProductList) */}
        <Stack spacing={4} sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "#0F3F80", fontWeight: "bold" }}
          >
            🛎️ Nos Services
          </Typography>
          <Typography variant="body1">
            Chez DVLS, nous vous proposons une large gamme de prestations techniques dans les domaines du bâtiment et de la performance énergétique. Nous intervenons partout en France, auprès des particuliers comme des professionnels, pour des installations, des dépannages ou des rénovations complètes.
          </Typography>
          <ProductList />
        </Stack>


        {/* Zone d’intervention */}
        <Box mt={4}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", color: "#0F3F80" }}
          >
            📍 Zone d’intervention : Toute la France
          </Typography>
          <Typography variant="body1">
            📞 Une question, un besoin, un chantier ? Contactez DVLS pour un
            devis clair, rapide et gratuit.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
};
