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
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";

export const AboutBlock = () => {
  return (
    <Container maxWidth="md" style={{ marginBottom: "40px" }}>
      <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          À propos de DVLS
        </Typography>
        <Typography variant="body1" paragraph>
          DVLS est une entreprise française spécialisée dans les travaux de plomberie, chauffage, climatisation,
          ventilation, électricité, isolation et énergies renouvelables.
        </Typography>
        <Typography variant="body1" paragraph>
          Depuis notre création, nous mettons tout en œuvre pour apporter à nos clients des solutions techniques
          fiables, durables et parfaitement adaptées à leurs besoins. Implantée en Nouvelle-Aquitaine et active
          sur l’ensemble du territoire national, DVLS intervient aussi bien pour des particuliers que pour des
          professionnels, dans des contextes variés : construction neuve, rénovation, mise aux normes ou
          optimisation énergétique.
        </Typography>
        <Typography variant="body1" paragraph>
          Notre équipe est composée de techniciens qualifiés et passionnés, capables de prendre en charge
          l’intégralité d’un projet :
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="✔ Étude technique sur-mesure" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✔ Conseil en choix d’équipements (performants et économes)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✔ Installation, mise en service et suivi après intervention" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✔ Respect strict des normes de sécurité et d’efficacité énergétique" />
          </ListItem>
        </List>
        <Typography variant="body1" paragraph sx={{ mt: 2 }}>
          Nous croyons en une approche humaine, transparente et orientée satisfaction client. Pour chaque chantier,
          nous veillons à assurer :
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="• Des délais respectés" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Un travail soigné et conforme aux attentes" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Un accompagnement clair à chaque étape" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Un service après-vente réactif" />
          </ListItem>
        </List>
        <Typography variant="body1" paragraph sx={{ mt: 2 }}>
          Chez DVLS, nous ne faisons pas que poser du matériel : nous construisons votre confort au quotidien.
          Notre ambition est simple : être un partenaire de confiance pour vos projets d’amélioration ou de
          rénovation énergétique, partout en France.
        </Typography>

        <Box mt={4}>
          <List>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="33 rue Dupuytren, 87620 Sereilhac" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="+33 7 53 21 95 58" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="contact@DVLS.fr" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BusinessIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="SIRET : 978 450 054 R.C.S. Limoges" />
            </ListItem>
          </List>
        </Box>
      </Paper>
    </Container>
  );
};
