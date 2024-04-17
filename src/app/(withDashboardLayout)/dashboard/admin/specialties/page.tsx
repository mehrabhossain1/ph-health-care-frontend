import PHModal from "@/components/shared/PHModal/PHModal";
import { Box, Button, Stack, TextField } from "@mui/material";

const SpecialtiesPage = () => {
  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Button>Create Specialty</Button>
        <PHModal />
        <TextField placeholder="Search Specialist" />
      </Stack>
    </Box>
  );
};

export default SpecialtiesPage;
