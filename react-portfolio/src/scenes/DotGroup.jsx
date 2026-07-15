

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <a
        href="#inicio"
        aria-label="inicio"
        className={`${
          selectedPage === "inicio" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("inicio")}
      />

      <a
        href="#habilidades"
        aria-label="habilidades"
        className={`${
          selectedPage === "habilidades" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("habilidades")}
      />

      <a
        href="#projetos"
        aria-label="projetos"
        className={`${
          selectedPage === "projetos" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("projetos")}
      />

      <a
        href="#contato"
        aria-label="contato"
        className={`${
          selectedPage === "contato" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("contato")}
      />
    </div>
  );
};

export default DotGroup;