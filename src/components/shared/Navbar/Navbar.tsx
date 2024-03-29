import { Box, Container, Stack, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Container>
      <Stack py={2} direction="row" justifyContent="space-between">
        <Typography variant="h4" component="h1" fontWeight={600}>
          P
          <Box component="span" color="primary.main">
            H
          </Box>{" "}
          Health Care
        </Typography>
        <Typography variant="h3" component="h1">
          PH Health Care
        </Typography>
        <Typography variant="h3" component="h1">
          PH Health Care
        </Typography>
      </Stack>
    </Container>
  );
};

export default Navbar;
