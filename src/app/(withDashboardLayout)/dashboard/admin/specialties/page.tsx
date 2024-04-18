"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import SpecialistModal from "./components/SpecialistModal";
import { useState } from "react";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>

        {/* comment */}
        <SpecialistModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField placeholder="Search Specialist" />
      </Stack>
    </Box>
  );
};

export default SpecialtiesPage;
