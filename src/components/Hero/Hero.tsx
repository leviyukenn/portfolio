import { useRouter } from "next/router";
import Section from "../Section/Section";
import SectionSubTitle from "../Section/SectionSubTitle";
import SectionTitle from "../Section/SectionTitle";
import Button from "./Button";

interface HeroProps {}

const Hero = ({}: HeroProps) => {

  const router = useRouter();

  const onClick = () => {
    router.push("#about");
  }
  return (
    <Section id="hero">
      <SectionTitle>Junyu Yu</SectionTitle>
      <SectionSubTitle>
        My dream is to become a experienced full stack developer and create world-class application.
      </SectionSubTitle>
      <Button onClick={onClick}>About me</Button>
    </Section>
  );
};
export default Hero;
