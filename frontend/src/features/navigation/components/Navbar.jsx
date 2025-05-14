import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo } from "../../user/UserSlice";
import { selectLoggedInUser } from "../../auth/AuthSlice";

const StyledAppBar = styled(AppBar)({
  background: " #C6C6C6",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
});

const StyledButton = styled(Button)({
  backgroundColor: "#CE6868",
  color: "#fff",
  fontWeight: 600,
  fontSize: "0.95rem",
  padding: "6px 18px",
  borderRadius: "20px",
  textTransform: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#B23F3F",
  },
});

export const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const userInfo = useSelector(selectUserInfo);
  const loggedInUser = useSelector(selectLoggedInUser);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <StyledAppBar position="sticky" elevation={4}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: { xs: 2, md: 4 },
          py: 1,
        }}
      >
        <Typography
          variant="h4"
          component={Link}
          to="/"
          sx={{
            fontWeight: 800,
            textDecoration: "none",
            background: "linear-gradient(90deg, #FF512F, #DD2476)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "'Poppins', sans-serif",
            textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          DVLS
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center">
          {userInfo ? (
            <>
              <Tooltip title="Paramètres">
                <IconButton onClick={handleOpenUserMenu}>
                  <Avatar
                    alt={userInfo.name}
                    src={userInfo.avatar || undefined}
                    sx={{ width: 36, height: 36 }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {loggedInUser?.isAdmin && (
                  <MenuItem component={Link} to="/admin/add-product">
                    Ajouter un service
                  </MenuItem>
                )}
                <MenuItem component={Link} to="/profile">
                  Mon Profil
                </MenuItem>
                <MenuItem component={Link} to="/logout">
                  Déconnexion
                </MenuItem>
              </Menu>
              {!isMobile && (
                <Typography
                  sx={{
                    color: "#0F3F80",
                    fontWeight: 500,
                  }}
                >
                  Salut, {userInfo?.name?.split(" ")[0]}
                </Typography>
              )}
            </>
          ) : (
            <StyledButton onClick={() => navigate("/login")}>
              Connexion
            </StyledButton>
          )}

          {loggedInUser?.isAdmin && (
            <StyledButton onClick={() => navigate("/admin/dashboard")}>
              Admin
            </StyledButton>
          )}
        </Stack>
      </Toolbar>
    </StyledAppBar>
  );
};
