import Button from "./Button";


interface HeroProps {

}

const Hero = ({}:HeroProps) => {
    return (
        <section className="max-w-3xl px-6  md:px-0 flex-col mx-auto">
        <h2 className="text-5xl py-4 font-extrabold bg-hero-title text-transparent bg-clip-text">Nikolay Advolodkin</h2>
        <p className="mb-4 md:font-light text-white/50">My life's mission is to create world-class software</p>
        <Button>About me</Button>
        </section>
    );
}
export default Hero