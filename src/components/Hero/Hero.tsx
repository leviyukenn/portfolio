import Section from "../Section/Section";
import SectionSubTitle from "../Section/SectionSubTitle";
import SectionTitle from "../Section/SectionTitle";
import Button from "./Button";


interface HeroProps {

}

const Hero = ({}:HeroProps) => {
    return (
        <Section>
        <SectionTitle>Nikolay Advolodkin</SectionTitle>
        <SectionSubTitle>My life's mission is to create world-class software</SectionSubTitle>
        <Button>About me</Button>
        </Section>
    );
}
export default Hero