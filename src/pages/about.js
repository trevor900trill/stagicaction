import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/aboutSections/banner";
import TeamSection from "sections/aboutSections/team-section";
import JourneySection from "sections/aboutSections/journey-section";

export default function AboutPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="About" />
          <Banner />
          <JourneySection /> 
          <TeamSection />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
