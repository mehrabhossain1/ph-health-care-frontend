import PHFileUploader from "@/components/Forms/PHFileUploader";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHModal from "@/components/shared/PHModal/PHModal";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialistModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = (values: FieldValues) => {
    console.log(values);

    const data = modifyPayload(values);

    try {
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <PHModal open={open} setOpen={setOpen} title="Create A New Specialty">
      <PHForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <PHInput name="title" label="Title" />
          </Grid>
          <Grid item md={6}>
            <PHFileUploader name="file" label="Upload File" />
          </Grid>
        </Grid>

        <Button sx={{ mt: 1 }} type="submit">
          Create
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default SpecialistModal;
