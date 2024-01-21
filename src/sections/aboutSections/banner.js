/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Flex, Box, Heading, Text, Image, Button } from "theme-ui";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
// import { Link } from "components/link";
import { FaPlayCircle } from "react-icons/fa";
import BannerBG from "assets/bannerBg.png";
import BannerThumb from "assets/banner-thumb.png";
import client1 from "assets/sponsor/paypal.svg";
import client2 from "assets/sponsor/google.svg";
import client3 from "assets/sponsor/dropbox.svg";

const data = [
  {
    id: 1,
    path: "#",
    image: client1,
    title: "paypal",
  },
  {
    id: 2,
    path: "#",
    image: client2,
    title: "google",
  },
  {
    id: 3,
    path: "#",
    image: client3,
    title: "dropbox",
  },
];

export default function Banner() {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section sx={styles.banner} id="service">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading
            as="h1"
            variant="heroPrimary"
            style={styles.banner.contentBox.textElements}
          >
            We optimize customer support, secure data, and overall strategy.
          </Heading>
          <Text as="p" variant="heroSecondary" style={styles.banner.contentBox.textElements}>
            No matter what business model, industry, and degree of
            digitalization they are in.
          </Text>
          <Flex>
            <Button variant="whiteButton" aria-label="Get Started">
              Learn More
            </Button>
          </Flex>
          {/* <Flex sx={styles.sponsorBox}>
            <Text sx={styles.sponsorTitle}>Sponsored by:</Text>
            <Box sx={styles.sponsorBox.sponsor}>
              {data.map((item, index) => (
                <Link path={item.path} key={`client-key${index}`}>
                  <Image src={item.image} alt={item.title} />
                </Link>
              ))}
            </Box>
          </Flex> */}
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  color: "#2F5392",
  banner: {
    overflow: ["hidden", "initial", null, "hidden"],
    // backgroundImage: `url(${BannerBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "top left",
    backgroundSize: "cover",
    pt: ["150px", null, null, null, null, null, "140px", "130px"],
    pb: ["100px", null, null, "110px", null, 10, "150px"],
    backgroundColor: "primary",
    container: {
      display: "flex",
    },
    contentBox: {
      width: ["100%"],
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
      textElements: {
        textAlign: ["left", "center" , "center" , "center" , "center" ,"center" , "center"],
      },
    },
  },
  sponsorTitle: {
    color: "white",
    fontSize: [1, 2],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0],
  },
  sponsorBox: {
    pt: ["35px", null, null, null, null, "45px"],
    flexDirection: ["column", null, "row"],
    sponsor: {
      display: "flex",
      alignItems: "center",
      "> a": {
        mr: [5, null, null, 4, 6],
        display: "flex",
        "&:last-of-type": {
          mr: 0,
        },
      },
    },
  },
};
