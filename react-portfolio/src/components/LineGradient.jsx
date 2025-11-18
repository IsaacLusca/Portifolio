// LineGradient é usado para renderizar uma linha horizontal com um gradiente de cores

const LineGradient = ({ width = "w-full" }) => {
  return <div className={`h-0.5 ${width} bg-gradient-rainblue`} />;
};

export default LineGradient;