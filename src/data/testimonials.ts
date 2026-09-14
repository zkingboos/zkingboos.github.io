import type { LocalizedText } from "@/lib/lang";

export interface Testimonial {
  name: string;
  role: LocalizedText | string;
  img: string;
  q: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Gustavo Arantes",
    role: "Snake Labs",
    img: "gustavoarantes.webp",
    q: "Trabalhar com o José foi excelente. Ele é proativo e rápido, faz as perguntas certas no início do projeto e não hesita em tirar dúvidas quando algo não está claro, o que evita retrabalho e garante que a entrega saia do jeito certo. Encara desafios de frente e resolve problemas em vez de apenas apontá-los. Recomendo sem ressalvas.",
  },
  {
    name: "Paulo Victor",
    role: "BarberGrid",
    img: "paulovictor.webp",
    q: "Trabalhar com o José foi uma experiência extremamente positiva. Ele combina profundidade técnica, visão de negócio e uma comunicação muito clara, o que torna a colaboração simples, objetiva e eficiente. Ao longo do nosso trabalho, seu conhecimento em tecnologia e infraestrutura foi fundamental para identificarmos e resolvermos problemas relevantes para o negócio, trazendo ganhos concretos em eficiência, qualidade e redução de custos. Além da competência técnica, destaco sua capacidade de compreender o contexto do negócio antes de propor soluções, conectando decisões de engenharia a impactos reais na operação. É um profissional em quem confio e que certamente agrega muito valor aos projetos e equipes com que trabalha.",
  },
  {
    name: "Ian Libânio",
    role: { en: "Collaborator", pt: "Colaborador" },
    img: "ianlibano.webp",
    q: "Trabalhar com o José foi uma excelente experiência desde o primeiro momento. A comunicação sempre foi fácil e eficiente, as entregas foram rápidas e de alta qualidade, e seu grande conhecimento e profissionalismo ficaram evidentes durante todo o trabalho.",
  },
  {
    name: "Yan Spatt",
    role: { en: "Collaborator", pt: "Colaborador" },
    img: "yanspatt.webp",
    q: "Trabalhar ao lado dele é ter a segurança de contar com um engenheiro brilhante e extremamente resolutivo. Enquanto muitos profissionais ficam presos a discussões conceituais que atrasam a entrega, ele projeta arquiteturas sólidas, antecipa pontos de falha e executa soluções que funcionam na prática com estabilidade impecável. É a referência técnica necessária para transformar requisitos complexos em software confiável, seguro e de alta performance.",
  },
  {
    name: "Rafael Aguiar",
    role: { en: "UENP Professor", pt: "Docente UENP" },
    img: "rafaelaguiar.webp",
    q: "Foi um dos grandes destaques nas minhas disciplinas. Ele une uma postura acadêmica exemplar — entregando todos os projetos e alcançando as maiores notas — com a agilidade e a visão de quem já resolve problemas reais como programador. É um talento técnico e pronto para qualquer desafio.",
  },
  {
    name: "Gabriel Henry",
    role: { en: "Client", pt: "Cliente" },
    img: "",
    q: "Achei excelente, sanou minhas dúvidas me explicando de forma super didática, entregou o projeto rápido, tudo funcionando perfeitamente... Enfim! Um excelente desenvolvedor, e um excelente humano. Espero que você trabalhe em mais alguns projetos meus.",
  },
  {
    name: "Guilherme Kauã",
    role: { en: "Collaborator", pt: "Colaborador" },
    img: "guilhermekaua.webp",
    q: "Trabalhei com o José em alguns projetos freelance de sites, eu no front-end e ele no back-end. Foi muito bom ter ele como parceiro nesses trabalhos, a gente conseguia conversar sobre o que precisava ser feito, tirar dúvidas e resolver juntos os problemas que apareciam no caminho. Tive uma boa experiência e trabalharia novamente com ele.",
  },
  {
    name: "Raphael Baganha",
    role: "Refúgio RP",
    img: "raphaelbaganha.webp",
    q: "Trabalhar com o José foi uma experiência muito boa. Ele é uma pessoa proativa, dedicada e sempre disposta a buscar soluções, mesmo quando precisa se aprofundar em um assunto novo. Se adapta rápido a ambientes diferentes e não fica esperando tudo mastigado, corre atrás, pesquisa e procura entender o problema até conseguir resolver.",
  },
  {
    name: "Anna Júlia",
    role: "Nativus Fishing",
    img: "annajulia.webp",
    q: "O site da Nativus Fishing ficou muito bom! O visual está bonito, moderno e profissional, combinando bastante com a identidade e a proposta da marca. A navegação é simples e organizada, o que torna a experiência agradável para quem acessa. No geral, o site transmite bem a essência da Nativus Fishing e ficou muito bem desenvolvido.",
  },
  {
    name: "Gustavo Burlinski",
    role: { en: "Client", pt: "Cliente" },
    img: "gustavo.webp",
    q: "O José desenvolveu o site da minha loja online, a GBEletros, e ficou muito bom. Ele montou tudo do jeito que eu precisava e ainda me deu controle do estoque, para eu saber o que entra e o que sai sem dor de cabeça. Foi tudo tranquilo e o resultado ficou profissional.",
  },
  {
    name: "Harvey Devlin",
    role: "Hivemedia",
    img: "harveydevlin.webp",
    q: "Working with José was an outstanding experience. He stepped up as our technical anchor across backend and infrastructure, driving the entire architectural transition from AWS to bare-metal. Beyond execution, José consistently guided our design choices, anticipating bottlenecks and ensuring the whole stack was maintainable and built to scale. He is a sharp tech lead who pairs strong architectural vision with pragmatic, reliable delivery.",
  },
  {
    name: "Thiago Marinho",
    role: { en: "Collaborator", pt: "Colaborador" },
    img: "",
    q: "Trabalhar com o José tem um defeito: ele acostuma mal. Você explica o problema uma vez, ele entende, resolve e ainda costuma voltar com algo melhor do que você pediu. Além de mandar muito bem tecnicamente, é tranquilo de trabalhar e não transforma qualquer tarefa em uma reunião de duas horas. Recomendo sem medo.",
  },
];