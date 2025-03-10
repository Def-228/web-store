import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { useTranslation } from "react-i18next";

const Form = ({ title, buttontitle, email, setEmail, pass, setPass, submit}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { t } = useTranslation();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "100%",
        margin: "auto",
        padding: "40px",
        paddingTop: "260px",
        gap: "20px",
        position: "relative",
      }}
    >

      <Typography
        variant="p"
        sx={{
          mb: 1,
          fontSize: "39px",
          fontWeight: "400",
          mr: 11,
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="p"
        sx={{
          mb: 3,
          fontSize: "20px",
          fontWeight: "400",
          mr: 22,
          maxWidth: '220px',
        }}
      >
        {t("text.formDetails")}
      </Typography>

      <FormControl variant="standard" sx={{ mb: 2 }}>
        <InputLabel sx={{ fontSize: "18px" }}>{t("text.formEmail")}</InputLabel>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          sx={{
            width: "400px",
            height: "50px",
            fontSize: "18px",
          }}
        />
      </FormControl>

      <FormControl variant="standard" sx={{ mb: 2 }}>
        <InputLabel sx={{ fontSize: "18px" }}>{t("text.formPass")}</InputLabel>
        <Input
          sx={{
            width: "400px",
            height: "50px",
            fontSize: "18px",
          }}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Button
        onClick={submit}
        variant="contained"
        fullWidth
        sx={{
          mt: 2,
          backgroundColor: red[400],
          "&:hover": { backgroundColor: red[600] },
          height: "65px",
          width: "400px",
          fontSize: "17px",
        }}
      >
        {buttontitle}
      </Button>
    </Box>
  );
};

export default Form;
