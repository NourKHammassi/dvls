import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";

export const AboutBlock = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ mb: 6 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mt: 4,
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          fontWeight={700}
          color="#0F3F80"
        >
          À propos de DVLS
        </Typography>

        <Typography variant="body1" paragraph color={theme.palette.primary.main}>
          DVLS est une entreprise française spécialisée dans les travaux de plomberie, chauffage, climatisation,
          ventilation, électricité, isolation et énergies renouvelables.
        </Typography>

        <Typography variant="body1" paragraph color={theme.palette.primary.main}>
          Depuis notre création, nous mettons tout en œuvre pour apporter à nos clients des solutions techniques
          fiables, durables et parfaitement adaptées à leurs besoins...
        </Typography>

        <Typography variant="body1" paragraph color={theme.palette.primary.main}>
          Notre équipe est composée de techniciens qualifiés et passionnés, capables de prendre en charge
          l’intégralité d’un projet :
        </Typography>

        <List dense>
          {[
            "✔ Étude technique sur-mesure",
            "✔ Conseil en choix d’équipements (performants et économes)",
            "✔ Installation, mise en service et suivi après intervention",
            "✔ Respect strict des normes de sécurité et d’efficacité énergétique",
          ].map((text, index) => (
            <ListItem key={index}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <Typography variant="body1" paragraph sx={{ mt: 2 }} color={theme.palette.primary.main}>
          Nous croyons en une approche humaine, transparente et orientée satisfaction client...
        </Typography>

        <List dense>
          {[
            "• Des délais respectés",
            "• Un travail soigné et conforme aux attentes",
            "• Un accompagnement clair à chaque étape",
            "• Un service après-vente réactif",
          ].map((text, index) => (
            <ListItem key={index}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <Typography variant="body1" paragraph sx={{ mt: 2 }} color={theme.palette.primary.main}>
          Chez DVLS, nous ne faisons pas que poser du matériel : nous construisons votre confort au quotidien...
        </Typography>

        <Box mt={4}>
          <List>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon sx={{ color: theme.palette.primary.dark }} />
              </ListItemIcon>
              <ListItemText primary="33 rue Dupuytren, 87620 Sereilhac" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon sx={{ color: theme.palette.primary.dark }} />
              </ListItemIcon>
              <ListItemText primary="+33 7 53 21 95 58" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon sx={{ color: theme.palette.primary.dark }} />
              </ListItemIcon>
              <ListItemText primary="contact@DVLS.fr" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BusinessIcon sx={{ color: theme.palette.primary.dark }} />
              </ListItemIcon>
              <ListItemText primary="SIRET : 978 450 054 R.C.S. Limoges" />
            </ListItem>
          </List>
        </Box>
      </Paper>
    </Container>
  );
};
