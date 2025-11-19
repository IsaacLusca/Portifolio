import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1Image from "../assets/project-1.jpeg";
// import project2Image from "../assets/project-2.jpeg";
// import project3Image from "../assets/project-3.jpeg";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, projectImage, description }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description ?? "Descrição do projeto."}</p>
      </div>
        <img src={projectImage} alt={projectTitle} />    
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projetos" className="pt-48 pb-48" >
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JETOS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          lista de projetos.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
        {/* <div
            className="flex justify-center text-center items-center p-10 bg-blue
            max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
        >
            teste
        </div> */}

          <Project title="Projeto 1" projectImage={project1Image} description={"Aplicação de gerenciamento de tarefas com React e armazenamento local (localStorage)."} />
          <Project title="Projeto 2" projectImage={project1Image} description={"Landing page responsiva construída com Tailwind CSS e design adaptativo."} />

          {/* ROW 2 */}
          {/* <Project title="Projeto 3" projectImage={project1Image} description={"Aplicativo de previsão do tempo consumindo uma API pública e exibindo dados dinamicamente."} />
          <Project title="Projeto 4" projectImage={project1Image} description={"Mini e-commerce com carrinho, filtros e layout responsivo."} />
          
          <Project title="Projeto 5" projectImage={project1Image} description={"Portfólio interativo com animações criadas usando Framer Motion."} />
          <Project title="Projeto 6" projectImage={project1Image} description={"Blog estático com posts em Markdown e rotas dinâmicas simples."} /> */}

            {/* <div
                className="flex justify-center text-center items-center p-10 bg-blue
                max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
            >
                teste
            </div> */}

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;