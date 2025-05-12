import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";

export const ConditionsGenerales = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Conditions Générales de Vente
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 2 }}>
        <Box mb={4}>
          <Typography variant="h5" gutterBottom>
            DVLS
          </Typography>
          <Typography>
            SARL au capital de 2 000 €<br />
            RCS Limoges n° 908 590 193<br />
            Siège social : 33 rue Dupuytren, 87620 Sereilhac<br />
            Représentée par son gérant, M. Nicolas Pierre Desvalois
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" gutterBottom>
            1. Champ d’application
          </Typography>
          <Typography>
            Les présentes Conditions Générales de Vente (CGV) s’appliquent à toutes les prestations de services fournies par DVLS dans les domaines de la plomberie, du chauffage, de la ventilation, de la climatisation, de l’électricité, de l’isolation, du sanitaire, ainsi que des énergies renouvelables. Elles s’adressent aux clients particuliers comme professionnels.<br /><br />
            Toute commande implique l’adhésion pleine et entière aux présentes CGV.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" gutterBottom>
            2. Prestations proposées
          </Typography>
          <Typography>
            DVLS propose uniquement des prestations physiques réalisées à l’adresse du client ou sur le chantier convenu. Les prestations incluent les études, installations, réparations ou entretiens liés aux domaines d’activité susmentionnés.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" gutterBottom>
            3. Devis et commande
          </Typography>
          <Typography>
            Toute intervention donne lieu à un devis détaillé, valable 30 jours à compter de sa date d’émission. La commande est réputée ferme et définitive dès la signature du devis et le versement de l’acompte.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" gutterBottom>
            4. Tarifs et modalités de paiement
          </Typography>
          <Typography>
            Les prix sont exprimés en euros et s'entendent hors taxes (HT) ou toutes taxes comprises (TTC) selon le statut du client.<br /><br />
            Le règlement s’effectue selon les modalités suivantes :<br />
            - 40 % à la commande (acompte)<br />
            - Solde à la fin de l’intervention<br /><br />
            Moyens de paiement acceptés : espèces, chèque, virement bancaire, carte bancaire (si terminal disponible).
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" gutterBottom>
            5. Délai de réalisation
          </Typography>
          <Typography>
            Les délais d’exécution sont donnés à titre indicatif. En cas de retard indépendant de la volonté de DVLS (intempéries, indisponibilité client, etc.), la responsabilité de l’entreprise ne pourra être engagée.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" gutterBottom>
            6. Rétractation (clients particuliers uniquement)
          </Typography>
          <Typography>
            Conformément à l’article L221-18 du Code de la consommation, le client particulier dispose d’un délai de 14 jours à compter de la signature du devis à distance (hors local de l’entreprise) pour exercer son droit de rétractation.<br /><br />
            Toutefois, si le client souhaite que l’intervention commence avant la fin de ce délai, il doit en faire expressément la demande écrite. En cas de rétractation après le début des travaux, les prestations déjà effectuées seront dues.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" gutterBottom>
            7. Garanties
          </Typography>
          <Typography>
            DVLS intervient dans le cadre de la garantie légale de conformité et de la garantie contre les vices cachés (articles L217-4 et suivants du Code de la consommation et 1641 et suivants du Code civil).<br /><br />
            Les travaux sont couverts, le cas échéant, par la garantie décennale conformément aux dispositions légales.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" gutterBottom>
            8. Responsabilité
          </Typography>
          <Typography>
            La responsabilité de DVLS ne peut être engagée qu’en cas de faute prouvée et est limitée au montant de la commande. En aucun cas, DVLS ne pourra être tenue responsable des dommages indirects ou immatériels.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" gutterBottom>
            9. Réclamations et médiation
          </Typography>
          <Typography>
            En cas de litige, le client est invité à adresser une réclamation écrite à DVLS à l’adresse du siège social.<br /><br />
            Conformément à l’article L612-1 du Code de la consommation, tout client particulier peut recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige. À défaut de solution amiable, le litige sera porté devant les tribunaux compétents du ressort du siège social de DVLS.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" gutterBottom>
            10. Protection des données
          </Typography>
          <Typography>
            Les données collectées dans le cadre de la relation commerciale sont traitées conformément à la réglementation en vigueur (RGPD). Le client dispose d’un droit d’accès, de rectification ou de suppression de ses données.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" gutterBottom>
            11. Droit applicable et juridiction compétente
          </Typography>
          <Typography>
            Les présentes CGV sont soumises au droit français. En cas de litige, et après tentative de résolution amiable, compétence expresse est attribuée aux tribunaux du ressort de Limoges.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};
