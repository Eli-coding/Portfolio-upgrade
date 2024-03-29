import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
 
}));

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        eli-codes
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {/* {title} */} 
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          padding={2}
        >
          ✨Thanks for visiting!✨
          {/* {description} */}

          <Stack direction="row" spacing={4} justifyContent="center"
              alignItems= "center">
           
            
              <a href="https://www.linkedin.com/in/elizabeth-rodriguez-32b681209">
                LinkedIn
              </a>
          
              <a href="https://github.com/Eli-coding">github</a>
          
              <a href= "mailto:elizabethyoannie@outlook.com"> Email </a>
      
          </Stack>
        </Typography>
      </Container>
      <Copyright/>
    </Box>
  );
}

export default Footer;
