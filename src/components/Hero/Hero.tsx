import Section from "../Section/Section";
import SectionTitle from "../Section/SectionTitle";
import Button from "./Button";


interface HeroProps {

}

const Hero = ({}:HeroProps) => {
    return (
        <Section>
        <SectionTitle>Nikolay Advolodkin</SectionTitle>
        <p className="mb-4 md:font-light text-white/50">My life's mission is to create world-class software</p>
        <Button>About me</Button>
        </Section>
    );
}
export default Hero