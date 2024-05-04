"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import SpecialistModal from "./components/SpecialistModal";
import { useState } from "react";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialitesApi";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data, isLoading } = useGetAllSpecialtiesQuery({});
  console.log(data);

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
        <SpecialistModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField placeholder="Search Specialist" />
      </Stack>

      <Box>
        <h1>Specialties</h1>
      </Box>
    </Box>
  );
};

export default SpecialtiesPage;
