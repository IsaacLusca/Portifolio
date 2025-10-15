import { useState, useEffect } from "react";

// useMediaQuery tem como objetivo verificar se a tela do usuário corresponde a uma determinada consulta de mídia (media query).
// Ele retorna um valor booleano que indica se a consulta de mídia corresponde ou não.

const useMediaQuery = (query) => {
    // Estado para armazenar se a consulta de mídia corresponde ou não
    const [matches, setMatches] = useState(false);

    // Efeito colateral para configurar o listener de mídia
    useEffect(() => {
        const media = window.matchMedia(query);
        // Atualiza o estado inicial
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        // Listener para mudanças na consulta de mídia
        const listener = () => setMatches(media.matches);
        media.addEventListener("resize", listener);
        return () => media.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches;
}

export default useMediaQuery;