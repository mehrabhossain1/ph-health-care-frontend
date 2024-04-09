import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import linkedinIcon from "@/assets/landing_page/linkedin.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Stack direction="row" spacing={4} justifyContent="center">
          <Typography color="white" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="white" component={Link} href="/health-plans">
            Health Plans
          </Typography>
          <Typography color="white" component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography color="white" component={Link} href="/diagnostics">
            Diagnostics
          </Typography>
          <Typography color="white" component={Link} href="/ngos">
            NGOs
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="center" py={3}>
          <Link href="https://www.facebook.com/">
            <Image src={facebookIcon} width={40} height={40} alt="facebook" />
          </Link>
          <Link href="https://www.instagram.com/">
            <Image src={instagramIcon} width={40} height={40} alt="facebook" />
          </Link>
          <Link href="https://www.twitter.com/">
            <Image src={twitterIcon} width={40} height={40} alt="facebook" />
          </Link>
          <Link href="https://www.linkedin.com/">
            <Image src={linkedinIcon} width={40} height={40} alt="facebook" />
          </Link>
        </Stack>
        {/* <div className="border-b-[1px] border-dashed"></div> */}
        <Box
          sx={{
            border: "1px dashed lightgray",
          }}
        ></Box>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography component="p" color="white">
            © &copy; 2022 PHealth Care. All rights reserved.
          </Typography>
          <Typography
            variant="h4"
            color="white"
            component={Link}
            href="/"
            fontWeight={600}
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy!! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
