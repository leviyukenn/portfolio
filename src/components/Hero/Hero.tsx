import Section from "../Section/Section";
import SectionSubTitle from "../Section/SectionSubTitle";
import SectionTitle from "../Section/SectionTitle";
import Button from "./Button";

interface HeroProps {}

const Hero = ({}: HeroProps) => {
  return (
    <Section>
      <SectionTitle>Junyu Yu</SectionTitle>
      <SectionSubTitle>
        My dream is to become a experienced full stack developer and create world-class application.
      </SectionSubTitle>
      <Button>About me</Button>
    </Section>
  );
};
export default Hero;
