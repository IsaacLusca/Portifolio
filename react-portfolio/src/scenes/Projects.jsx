import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import taskWorker from "../assets/projectImages/taskworker.png";
import financeCore from "../assets/projectImages/financecore.png";
import autoVagas from "../assets/projectImages/autovagas.png";
import easycar from "../assets/projectImages/easycar.png";
import pdfTranslate from "../assets/projectImages/PDFTranslate.png";
import gerenTAR from "../assets/projectImages/gerenTAR.png";
import termo from "../assets/projectImages/termo.png";

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

const Project = ({ title, description, githubUrl, image, isPrivate = false }) => {
  const overlayStyles = `absolute h-full w-full flex flex-col justify-center items-center text-center p-8 text-deep-blue transition duration-500 ${
    image ? "opacity-0 hover:opacity-90 bg-grey" : "opacity-100 bg-grey"
  }`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  const content = (
    <>
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-4 text-sm leading-relaxed">{description}</p>
        {isPrivate && (
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em]">
            Código privado
          </p>
        )}
      </div>
      {image && <img src={image} alt={projectTitle} className="w-full h-full object-fill" />}
    </>
  );

  return (
    <motion.div variants={projectVariant} className="relative max-w-[400px] max-h-[400px] bg-opaque-black overflow-hidden">
      {githubUrl ? (
        <a href={githubUrl} target="_blank" rel="noreferrer" className="block w-full h-full">
          {content}
        </a>
      ) : (
        <div className="block w-full h-full cursor-default">{content}</div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projetos" className="pt-48 pb-48 scroll-mt-20">
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
          Projetos desenvolvidos ao longo da minha jornada como desenvolvedor.
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
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            INTERFACES BONITAS
          </div>
          <Project
            title="TaskWorker"
            description="Worker Service em .NET 10 com fila persistida no PostgreSQL, retentativas com backoff e idempotência."
            githubUrl="https://github.com/IsaacLusca/TaskWorker"
            image={taskWorker}
          />
          <Project
            title="FinanceCore"
            description="API REST de transações financeiras com JWT, transferências atômicas e concorrência otimista."
            image={financeCore}
            isPrivate
          />

          {/* ROW 2 */}
          <Project
            title="auto_vagas"
            description="Automação de busca e triagem de vagas com Python, PostgreSQL e matching por IA."
            image={autoVagas}
            isPrivate
          />

          <Project
            title="Easycar Api V2"
            description="API REST para sistema de locação de veículos com autenticação e CRUD completo."
            githubUrl="https://github.com/IsaacLusca/easycar-api-v2"
            image={easycar}
          />
          <Project
            title="PDF Translate"
            description="Tradutor de arquivos PDF mantendo a formatação original do documento."
            githubUrl="https://github.com/IsaacLusca/PDFTranslate"
            image={pdfTranslate}
          />

          {/* ROW 3 */}
          <Project
            title="GerenTAR"
            description="Gerenciador de tarefas com interface limpa e armazenamento local."
            githubUrl="https://github.com/IsaacLusca/GerenTAR"
            image={gerenTAR}
          />

          <Project
            title="Termo"
            description="Jogo de adivinhação de palavras inspirado no Termo/Wordle."
            githubUrl="https://github.com/IsaacLusca/Termo-"
            image={termo}
          />

          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            EXPERIÊNCIA FLUIDA
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;