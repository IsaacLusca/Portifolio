import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import gatoImg from "../assets/gatocalvocria.jpg";

<img
  alt="profile"
  className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
  src={gatoImg}
/>


const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section
            id="inicio"
            className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
        >
            <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
                {isAboveMediumScreens ? (
                <div
                    className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
                    before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
                >
                    <img
                    alt="profile"
                    className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[400px]"
                    src={gatoImg}
                    />
                </div>
                ) : (
                <img
                    alt="profile"
                    className="z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[400px]"
                    src={gatoImg}
                />
                )}
            </div>
        </section>
    );
}

export default Landing;