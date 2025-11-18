import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skills from "../assets/skills.jpeg";

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
        <section id="habilidades" className="pt-10 pb-24">
            {/* Titulo e imagem */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                > 
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MINHAS <span className="text-red">HABILIDADES</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">
                        Sou um desenvolvedor focado em criar soluções práticas e eficientes. Atuo no front-end e no back-end, o que me permite construir aplicações completas, bem estruturadas e funcionais.
                    </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                        <div
                            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                            before:w-full md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
                        >
                            <img
                            alt="skills"
                            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                            src={skills}
                            />
                        </div>
                        ) : (
                        <img
                            alt="profile"
                            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
                            src={skills}
                        />
                    )}
                </div>
            </div>

            {/* Skills */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* 1 */}
               <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                > 
                    <div className="relative h-32 z-0">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">01</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Experiência</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        Experiência prática em desenvolvimento web, com foco em soluções front-end e back-end.
                    </p>
                </motion.div>

                {/* 2 */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                > 
                    <div className="relative h-32 z-0">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">02</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Inovação</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        Compromisso com a inovação, buscando sempre as melhores práticas e tecnologias para cada projeto.
                    </p>
                </motion.div>

                {/* 3 */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                > 
                    <div className="relative h-32 z-0">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">03</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Imaginação</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        Abordagem criativa para resolver problemas complexos, transformando ideias em soluções eficazes.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default MySkills;