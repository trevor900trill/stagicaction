/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui";
import PriceCard from "components/price-card";
import SectionHeader from "components/section-header";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import PatternBG from "assets/patternBG.png";

const packages = [
  {
    name: "Free Plan",
    description: "For Small teams or office",
    buttonText: "Get Started Now",
    points: [
      {
        icon: <IoIosCheckmarkCircle style={{ color: "white" }} />,
        text: "Essential Security.",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle style={{ color: "white" }} />,
        text: "Limited Access.",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle style={{ color: "white" }} />,
        text: "Community Support.",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle style={{ color: "white" }} />,
        text: "Upgrade Anytime.",
        isAvailable: true,
      },
    ],
  },
  {
    header: "Recommended",
    name: "Premium",
    description: "For startup enterprise",
    priceWithUnit: "Get a Quote",
    buttonText: "Get a Quote",
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Comprehensive Security Suite.",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "24/7 Expert Support.",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Advanced Threat Detection.",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Customizable for Your Needs.",
        isAvailable: true,
      },
    ],
  },
];
export default function Package() {
  return (
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <SectionHeader
          title="Have a look at our packages"
          slogan="Secure Solutions, Clear Pricing."
          isWhite={true}
        />
        <Flex
          sx={{
            justifyContent: "center",
            flexWrap: ["wrap", null, null, "nowrap"],
          }}
        >
          {packages.map((packageData) => (
            <PriceCard data={packageData} key={packageData.name} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  pricing: {
    backgroundColor: "primary",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    py: [8, null, 9, null, null, 10],
    position: "relative",
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      right: 0,
      // background:
      //   "linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)",
      width: "100%",
      backgroundSize: "350px 350px",
      height: "100%",
      opacity: 0.3,
      zIndex: 0,
    },
  },
};
