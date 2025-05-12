import * as React from "react";
import { Stack, Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import { FaCcMastercard, FaCcVisa, FaCcAmex } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../auth/AuthSlice";

const StyledFooter = styled(Stack)({
  background: "linear-gradient(90deg, #0F3F80, #047d61)",
  padding: "2rem 2.5rem 1rem",
  color: "#ffffff",
  justifyContent: "space-between",
});

const FooterTitle = styled(Typography)({
  fontSize: "1.1rem",
  fontWeight: "bold",
  color: "#C27B06",
});

const FooterLink = styled(Typography)({
  fontWeight: 300,
  cursor: "pointer",
  fontSize: "0.9rem",
  transition: "0.3s",
  "&:hover": {
    color: "#C24E06",
  },
});

export const Footer = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const is700 = useMediaQuery(theme.breakpoints.down(700));
  const loggedInUser = useSelector(selectLoggedInUser);

  return (
    <StyledFooter>
      <Stack
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={is700 ? "center" : "space-around"}
        rowGap={"2rem"}
      >
        <Stack rowGap={"0.8rem"}>
          <FooterTitle>Coordonnées</FooterTitle>
          <FooterLink>Zone : Toute la France</FooterLink>
          <FooterLink>Région : Nouvelle-Aquitaine</FooterLink>
          <FooterLink>Email : contact@DVLS.fr</FooterLink>
          <FooterLink>Tél : +33 7 53 21 95 58</FooterLink>
          <FooterLink>SIRET : 978 450 054 R.C.S. Paris</FooterLink>
        </Stack>

        <Stack rowGap={"0.8rem"}>
          <FooterTitle>Compte</FooterTitle>
          <FooterLink onClick={() => navigate("/profile")}>
            Mon Compte
          </FooterLink>
          {!loggedInUser && (
            <FooterLink onClick={() => navigate("/login")}>
              Connexion / Inscription
            </FooterLink>
          )}
        </Stack>

        <Stack rowGap={"0.8rem"}>
          <FooterTitle>Navigation</FooterTitle>
          <FooterLink onClick={() => navigate("/conditions")}>
            Conditions générales
          </FooterLink>
          <FooterLink onClick={() => navigate("/about")}>À Propos</FooterLink>
          <FooterLink onClick={() => navigate("/contact")}>Contact</FooterLink>
          <Stack direction="row" spacing={1}>
            <Box
              sx={{
                backgroundColor: "white",
                padding: "6px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaCcMastercard size={30} color="#EB001B" />
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                padding: "6px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaCcVisa size={30} color="#142787" />
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                padding: "6px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaCcAmex size={30} color="#002663" />
            </Box>
          </Stack>
        </Stack>
      </Stack>

      <Stack alignSelf={"center"} mt={3}>
        <Typography sx={{ fontSize: "0.9rem", color: "#C27B06", textAlign: "center" }}>
          « Avec DVLS, votre habitat respire l’efficacité »
        </Typography>
        <Typography sx={{ fontSize: "0.8rem", color: "#ffffff" }}>
          &copy; DVLS {new Date().getFullYear()}. Tous droits réservés
        </Typography>
      </Stack>
    </StyledFooter>
  );
};
