import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

type Specialty = {
  id: string;
  icon: string;
  title: string;
};

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();

  console.log(specialties);
  return (
    <Container>
      <Box
        sx={{
          margin: "40px 0px",
          textAlign: "center",
        }}
      >
        <Box sx={{ textAlign: "start" }}>
          <Typography variant="h4" fontWeight={600}>
            Explore Treatments Across Specialties
          </Typography>
          <Typography component="p" fontWeight={300} fontSize={18}>
            Experienced Doctors Across All Specialties
          </Typography>
        </Box>

        {/* specialties */}
        <Stack direction="row" spacing={4} mt={5}>
          {specialties.map((specialty: Specialty) => (
            <Box
              key={specialty.id}
              sx={{
                flex: 1,
                width: "150px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                border: "1px solid rgba(250, 250, 250, 1)",
                borderRadius: "10px",
                textAlign: "center",
                padding: "40px 10px",
                cursor: "pointer",

                // for the img to be center
                "& img": {
                  width: "50px",
                  height: "50px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid #1586FD",
                  padding: "40px 10px",
                  borderRadius: "10px",
                  transition: "all 0.5s ease",
                },
              }}
            >
              <Image
                src={specialty.icon}
                width={100}
                height={100}
                alt="specialist icon"
              />
              <Box>
                <Typography component="p" fontWeight={600} fontSize={18} mt={2}>
                  {specialty.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>

        <Button variant="outlined" sx={{ mt: 5 }}>
          View All
        </Button>
      </Box>
    </Container>
  );
};

export default Specialist;
