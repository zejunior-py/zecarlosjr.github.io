(function($){
    $.fn.dict = function(options) {
        const linkedinLink = "<a href='https://www.linkedin.com/in/jose-carlos-vieira-junior-4a5b5515b/'>Linkedin</a>"
        return {
            "meu nome": {
                pt:"Jose Carlos Jr.",
                en:"I'm Jose Carlos Jr."
            },
            "More About Me": {
                pt: "Mais Sobre Mim",
                en: "More About Me"
            },
            "About Details": {
                en:"Let me introduce myself.",
                pt: "Apresentação."
            },
            "About Details Description": {
                en: "Software developer focused on backend, with more than 10 years of experience in the area, mainly with python and its best frameworks (Flask, Fastapi, Django) and with Javascript/Typescript in NodeJS, having knowledge and experience in Rust Lang. I led full stack ecommerce projects that started at startup levels and are now starting to reach large Brazilian companies, increasing the competitiveness of e-commerce.",
                pt: "Sou um desenvolvedor de software com mais de 10 anos de experiência, especializado em back-end. Minhas principais habilidades estão focadas em Python e seus frameworks (Flask, FastAPI, Django), além de JavaScript/TypeScript no Node.js, e também possuo conhecimento e experiência em Rust."
                +"Tenho uma sólida trajetória liderando projetos de comércio eletrônico full-stack, desde as fases iniciais como startups até o alcance de grandes empresas brasileiras.</br> Minhas contribuições foram fundamentais para aumentar a competitividade do e-commerce no país, implementando recursos inovadores e otimizando o desempenho dos sistemas."
            },
            "Profile Details Description": {
                en: "I was born in Florianopolis/SC and I live here I've been studying technology for years and I love what I do."
                +"I'm a vim and linux enthusiast and free software interest.",
                pt: "Nasci em Florianópolis/SC e atualmente resido nesta cidade. Minha paixão pela tecnologia me acompanha há anos, e amo o que faço.</br>Sou um entusiasta do editor VIM e do GNU/Linux, dedicando meu tempo para estudar e me aprofundar cada vez mais no mundo do software livre."
            },
            "Skills Details Description": {
                en: "Recently I have been developing microservices and using cloud resources from different providers (AWS, GCP, IBM), building environments with Kubernets, infrastructure and CI/CD tools such as Github Actions, Jenkins and Terraform as IAC."
                +"Proficient in design and architecture concepts related to DDD, BDD, Clean Arch, Clean Code, Tests, Data Structures and Algorithms.",
                pt: "Recentemente, tenho me dedicado ao desenvolvimento de microsserviços, aproveitando os recursos em nuvem de diferentes fornecedores, como AWS, GCP e IBM. Além disso, estou familiarizado com ambientes de construção usando Kubernetes, bem como infraestrutura e ferramentas de CI/CD, incluindo GitHub Actions, Jenkins e Terraform como IAC (Infrastructure as Code).</br>"
                +"Possuo proficiência em conceitos de design e arquitetura, como DDD (Domain-Driven Design), BDD (Behavior-Driven Design), Clean Architecture, Clean Code, Unit Tests, estruturas de dados e algoritmos"
            },
            "Hire Me": {
                en: "Hire Me",
                pt: "Entre em Contato"
            },
            "Resume Details": {
                en: "More of my credentials",
                pt: "Credenciais"
            },
            "Resume Details Description": {
                en: `Here I will leave my last experiences listed, to have access to all my professional history, visit my ${linkedinLink}.`,
                pt: `Aqui vou deixar listadas minhas ultimas experiências, para ter acesso a toda a minha história profissional, acesse o meu  ${linkedinLink}.`
            },
            "Resume Details Description Spam": {
                en: "I am recognized for my commitment and responsibility in delivering high quality solutions. In addition, I am always looking for constant updating, following trends and best practices in the sector.</br>I work collaboratively and value effective communication in teamwork."
                    +"I'm excited about the opportunity to explore new projects and contribute my knowledge and passion for technology.</br>With my experience and skills in back-end development, I look to drive success in new challenges.",
                pt: "Sou reconhecido por meu comprometimento e responsabilidade na entrega de soluções de alta qualidade. Além disso, estou sempre em busca de atualização constante, acompanhando as tendências e melhores práticas do setor.</br>Trabalho de forma colaborativa e valorizo a comunicação efetiva no trabalho em equipe."
                    +"</br>Estou entusiasmado com a oportunidade de explorar novos projetos e contribuir com meu conhecimento e paixão pela tecnologia.</br>Com minha experiência e habilidades em desenvolvimento back-end, busco impulsionar o sucesso em novos desafios."
            },
            "1 work name": {
                en: "Staff Software Engineer",
                pt: "Staff Software Engineer"
            },
            "1 work date": {
                en: "April 2022 - May 2023",
                pt: "April 2022 - May 2023"
            },
            "1 name": {
                en: "<a href='https://www.yuca.live/'>Yuca: </a>Awesome Realstate Project",
                pt: "<a href='https://www.yuca.live/'>Yuca: </a>Awesome Realstate Project"
            },
            "1 work": {
                en: "E-commerce that offers apartments in the best neighborhoods of São Paulo with exclusive design and integrated services",
                pt: "O e-commerce que oferece apartamentos nos melhores bairros de São Paulo com design exclusivo e serviços integrados."
            },
            "1 skills": {
                en: "<b>Skills:</b> NestJS, Typescript, AWS Cloud, Terraform, Github Actions",
                pt: "<b>Skills:</b> NestJS, Typescript, AWS Cloud, Terraform, Github Actions"
            },
            "2 work name": {
                en: "Staff Software Engineer",
                pt: "Staff Software Engineer"
            },
            "2 work date": {
                en: "April 2022 - May 2023",
                pt: "April 2022 - May 2023"
            },
            "2 name": {
                en: "<a href='https://web.faci.ly/'>Facily: </a>A Social Ecommerce",
                pt: "<a href='https://web.faci.ly/'>Facily: </a>A Social Ecommerce"
            },
            "2 work": {
                en: "An e-commerce that brings together several products and incredible prices, buying wholesale and selling B2C without intermediaries",
                pt: "Um comércio eletrônico que reúne vários produtos e preços incríveis, comprando no atacado e vendendo B2C sem intermediários"
            },
            "2 skills": {
                en: "<b>Skills:</b> Python, Fastapi, GCP Cloud, Terraform, Gitlab, Kubernets",
                pt: "<b>Skills:</b> Python, Fastapi, GCP Cloud, Terraform, Gitlab, Kubernets"
            },
            "1 education name": {
                en: "Bachelor Technology",
                pt: "Analise e Desenvolvimento de Sistemas"
            },
            "1 education date": {
                en: "December 2008",
                pt: "December 2008"
            },
            "1 education": {
                en: "SENAI/SC - BTech, análise e desenvolvimento de sistemas",
                pt: "SENAI/SC - BTech, análise e desenvolvimento de sistemas"
            },
            "1 education details": {
                en: "UniSENAI's Technological Graduation in Systems Analysis and Development encourages thinking, critical vision, social responsibility and prepares new professionals to develop their careers in Brazil or abroad, in a market that keeps growing!",
                pt: "O projeto de conclusão de curso, foi criar um gerador de texto, que conseguisse criar texto novo usando uma base de dados, na epoca, a base usada foi o meu perfil do facebook </br> #AlmostGPT"
            },
            "2 education name": {
                en: "Electrical Engineering",
                pt: "Engenharia Elétrica"
            },
            "2 education date": {
                en: "July 2010 - not completed",
                pt: "July 2010 - not completed"
            },
            "2 education": {
                en: "Unisul/SC - faculdade",
                pt: "Unisul/SC - faculdade"
            },
            "2 education details": {
                en: "Course focused on developing electronics, automation, computing, telecommunications, energy production and distribution devices.",
                pt: " "
            },
            "3 education name": {
                en: "Information Technology and Networking",
                pt: "Redes de Computadores"
            },
            "3 education date": {
                en: "July 2017 - not completed",
                pt: "July 2017 - not completed"
            },
            "3 education": {
                en: "Faculdade Estácio de Sá/SC",
                pt: "Faculdade Estácio de Sá/SC"
            },
            "3 education details": {
                en: "The Computer Networks course teaches how to design, implement, manage and integrate computer networks. Students also learn to create security solutions in these systems that are present all over the world and in all areas.",
                pt: " "
            },
            "portifolio Details": {
                en: "Check Out Some of My <a href='https://opensource.com/resources/what-open-source'>Open Source</a> Works.",
                pt: "Meus projetos <a href='https://opensource.com/resources/what-open-source'>Open Source</a>"
            },
            "portifolio Details Description": {
                en: "During my career as a software developer most of the projects built are in the private sphere, however, in my free time and with the intention of helping the community, I created some open source projects",
                pt: "Durante minha carreira como desenvolvedor de software, a maioria dos projetos construídos está na esfera privada, No entanto, no meu tempo livre e com a intenção de ajudar a comunidade, criei alguns projetos de código aberto"
            },
            "portifolio Details Description spam": {
                en: "You can check my <a href='https://github.com/josecarlosvieirajr'>github</a> to know all my projects",
                pt: "Você pode verificar meu <a href='https://github.com/josecarlosvieirajr'>github</a> para saber de todos os meus projetos"
            },
            "contact Details": {
                en: "I'd Love To Hear From You.",
                pt: "Entre em Contato"
            },
            "contact Details Description": {
                en: "you can send me an email here or to <b>contato.b4bits@gmail.com</b></br>if you prefer, you can call me on my social networks that are there at the beginning.",
                pt: "você pode me enviar um e-mail por aqui ou para <b>contato.b4bits@gmail.com</b></br> Se preferir, você pode me contactar nas minhas redes sociais que estão lá no inicio."
            },
            "Submit": {
                en: "Submit",
                pt: "Enviar"
            },
            "Submit": {
                en: "Submit",
                pt: "Enviar"
            },
            "Sending": {
                en: "Sending...",
                pt: "Enviando..."
            },
            "status message": {
                en: "Your message was sent, thank you!",
                pt: "Onde me Encontrar"
            },
            "location": {
                en: "Where to find me"
            },
            "location details": {
                en: "Tr. Manoel Ramos de Souza, 100 - sl 201 <br>"
                    +"Ingleses Norte, Florianópolis - SC <br>"
                    +"88058-180 BR",
                pt: "Tr. Manoel Ramos de Souza, 100 - sl 201 <br>"
                    +"Ingleses Norte, Florianópolis - SC <br>"
                    +"88058-180 BR"
            },
            "email name": {
                en: "Email Me At",
                pt: "Meu email"
            },
            "call me": {
                en: "Email Me At",
                pt: "Meu email"
            },
            "call me details": {
                en: "Phone Work: +55 (48)99204-3919<br>"
                    +"Mobile Person: +55 (48)99153-0435<br>",
                pt: "Trabalho: +55 (48)99204-3919</br>"
                    +"Pessoal: +55 (48)99153-0435"
            },


        }
    }
})(jQuery);
