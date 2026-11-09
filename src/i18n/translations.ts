import type { Locale } from './routing';
export { homeFor, locales, localeFromPath } from './routing';

// Exact text translations also run during prerendering: every language is readable without JS.
const rows = `
Desarrollamos tu web y las herramientas que necesitas para atender clientes, organizar información y reducir tareas manuales.|We build your website and the tools you need to serve customers, organize information and reduce manual work.|Desenvolvemos seu site e as ferramentas para atender clientes, organizar informações e reduzir tarefas manuais.
Desarrollamos lo que tu negocio necesita.|We build what your business needs.|Desenvolvemos o que seu negócio precisa.
Revisamos cómo trabajas, acordamos qué vamos a construir y te acompañamos hasta ponerlo en funcionamiento.|We review how you work, agree on what to build and help you put it into use.|Analisamos como você trabalha, combinamos o que construir e acompanhamos até colocar em funcionamento.
Automatización de tareas|Task automation|Automação de tarefas
Páginas web|Websites|Sites
Páginas para presentar tu negocio, mostrar tus servicios y recibir consultas por formulario o WhatsApp.|Websites to introduce your business, showcase your services and receive inquiries through forms or WhatsApp.|Sites para apresentar seu negócio, mostrar seus serviços e receber contatos por formulário ou WhatsApp.
Inteligencia artificial|Artificial intelligence|Inteligência artificial
Incorporamos asistentes y herramientas para responder preguntas, clasificar documentos o analizar información.|We add assistants and tools to answer questions, classify documents or analyze information.|Incorporamos assistentes e ferramentas para responder perguntas, classificar documentos ou analisar informações.
Carga de 10 artículos o productos|Upload of 10 articles or products|Cadastro de 10 artigos ou produtos
Carga de 20 artículos o productos|Upload of 20 articles or products|Cadastro de 20 artigos ou produtos
¿Qué incluye la carga de contenido?|What does content upload include?|O que inclui o cadastro de conteúdo?
Contenido del cliente|Client-provided content|Conteúdo do cliente
Tú entregas los textos e imágenes; nosotros los organizamos y publicamos. Elige artículos o catálogo informativo. No incluye redacción, cargas mensuales ni panel para editar.|You provide the text and images; we organize and publish them. Choose articles or an informational catalog. Writing, monthly uploads and an editing panel are not included.|Você fornece os textos e imagens; nós organizamos e publicamos. Escolha artigos ou catálogo informativo. Não inclui redação, cadastros mensais ou painel de edição.
¿Qué son Analytics y Search Console?|What are Analytics and Search Console?|O que são Analytics e Search Console?
Configuramos la herramienta para conocer cuántas personas visitan tu web y qué páginas consultan.|We set up the tool to show how many people visit your website and which pages they view.|Configuramos a ferramenta para saber quantas pessoas visitam seu site e quais páginas consultam.
Conectamos tu web con Google para consultar cómo aparece en sus búsquedas y detectar problemas de indexación. Incluye la configuración inicial, no informes ni seguimiento mensual.|We connect your website to Google to see how it appears in search and identify indexing issues. Initial setup is included; monthly reports and monitoring are not.|Conectamos seu site ao Google para consultar como aparece nas buscas e identificar problemas de indexação. Inclui a configuração inicial, sem relatórios ou acompanhamento mensal.
SEO y GEO inicial|Initial SEO and GEO|SEO e GEO inicial
¿Qué son SEO y GEO?|What are SEO and GEO?|O que são SEO e GEO?
Preparamos tu web para que los buscadores como Google puedan entenderla y encontrarla.|We prepare your website so search engines like Google can understand and discover it.|Preparamos seu site para que buscadores como o Google possam entendê-lo e encontrá-lo.
Organizamos la información para facilitar que buscadores con IA la interpreten y puedan usarla como referencia.|We organize your information so AI-powered search engines can interpret it and potentially use it as a reference.|Organizamos as informações para facilitar sua interpretação por buscadores com IA e seu possível uso como referência.
Una página con hasta 6 secciones|One page with up to 6 sections|Uma página com até 6 seções
Estadísticas de visitas y búsquedas en Google|Visitor and Google search statistics|Estatísticas de visitas e buscas no Google
Artículos o catálogo: 10 publicaciones|Articles or catalog: 10 initial items|Artigos ou catálogo: 10 publicações
Artículos o catálogo: 20 publicaciones|Articles or catalog: 20 initial items|Artigos ou catálogo: 20 publicações
Artículos o catálogo de productos|Articles or product catalog|Artigos ou catálogo de produtos
Registro de consultas y clics en WhatsApp|Track inquiries and WhatsApp clicks|Registro de contatos e cliques no WhatsApp
Te enseñamos a usar tu web|Guidance on using your website|Ensinamos você a usar seu site
Elige tu plan. Acordamos qué incluye antes de empezar.|Choose your plan. We agree on what is included before we start.|Escolha seu plano. Combinamos o que está incluído antes de começar.
¿Una tienda o conectar tus herramientas? Conversemos.|Need an online store or connected tools? Let’s talk.|Precisa de uma loja ou conectar suas ferramentas? Vamos conversar.
Adaptada a celulares y con conexión segura|Works on phones with a secure connection|Adaptado a celulares e com conexão segura
Preparación básica para buscadores|Basic setup for search engines|Preparação básica para buscadores
Incluido:|Included:|Incluído:
No incluido:|Not included:|Não incluído:
Blog o catálogo|Blog or catalog|Blog ou catálogo
3 rondas de ajustes|3 rounds of revisions|3 rodadas de ajustes
4 rondas de ajustes|4 rounds of revisions|4 rodadas de ajustes
Corrección de errores por 30 días|Bug fixes for 30 days|Correção de erros por 30 dias
Corrección de errores por 45 días|Bug fixes for 45 days|Correção de erros por 45 dias
Software a medida y automatización de procesos para empresas peruanas.|Custom software and process automation for businesses in Peru.|Software sob medida e automação de processos para empresas peruanas.
Cuéntanos un poco más: usa al menos 20 caracteres.|Tell us more: use at least 20 characters.|Conte um pouco mais: use pelo menos 20 caracteres.
Solicitud enviada. Te responderemos por correo.|Inquiry sent. We will reply by email.|Solicitação enviada. Responderemos por e-mail.
Los planes web tienen un pago único de US$229 (Base), US$429 (Plus) o US$699 (Pro), según el alcance publicado. Los sistemas e integraciones a medida se cotizan después de una evaluación inicial sin costo.|Website plans have a one-time fee of US$229 (Base), US$429 (Plus) or US$699 (Pro), for the published scope. Custom software and integrations are quoted after a free initial consultation.|Os planos de sites têm pagamento único de US$229 (Base), US$429 (Plus) ou US$699 (Pro), conforme o escopo publicado. Sistemas e integrações sob medida são orçados após uma avaliação inicial gratuita.
La capacitación está incluida en Pro y se acuerda en proyectos a medida. Cada plan web indica su periodo de corrección de errores; el mantenimiento posterior se cotiza por separado.|Training is included in Pro and agreed for custom projects. Each website plan lists its bug-fix period; ongoing maintenance is quoted separately.|O treinamento está incluído no Pro e é combinado em projetos sob medida. Cada plano informa o período de correção de erros; a manutenção posterior é orçada separadamente.
Celerisys — Automatización y software a medida en Perú|Celerisys — Custom software, websites and automation in Peru|Celerisys — Software sob medida, sites e automação no Peru
Automatizamos procesos y creamos software a medida para que empresas peruanas recuperen tiempo, reduzcan errores y crezcan con una operación más ordenada.|We build websites, custom software and process automations for businesses in Peru. Based in Arequipa, working remotely.|Criamos sites, software sob medida e automações para empresas no Peru. De Arequipa, com atendimento remoto.
Celerisys — automatización y software a medida|Celerisys — automation and custom software|Celerisys — automação e software sob medida
Servicios|Services|Serviços
Planes web|Website plans|Planos de sites
Preguntas|FAQ|Perguntas
Clientes|Clients|Clientes
Agendar reunión|Arrange a meeting|Agendar reunião
Abrir menú|Open menu|Abrir menu
Cerrar menú|Close menu|Fechar menu
Cambiar tema|Change theme|Alterar tema
Subir al inicio|Back to top|Voltar ao início
Software a medida · Automatización · Arequipa, Perú|Custom software · Automation · Arequipa, Peru|Software sob medida · Automação · Arequipa, Peru
Webs, sistemas y automatizaciones para tu negocio.|Websites, software and automation for your business.|Sites, sistemas e automações para o seu negócio.
Diseñamos soluciones digitales claras para vender mejor, ordenar procesos y conectar tus herramientas.|We design practical digital solutions to help you sell, organize your processes and connect your tools.|Criamos soluções digitais claras para vender melhor, organizar processos e conectar suas ferramentas.
Escribir por WhatsApp|Message us on WhatsApp|Fale pelo WhatsApp
Ventajas del diagnóstico|Benefits of the initial consultation|Vantagens da avaliação inicial
Evaluación inicial sin costo|Free initial consultation|Avaliação inicial gratuita
Respuesta en un día hábil|Reply within one business day|Resposta em um dia útil
Sin compromiso|No commitment|Sem compromisso
Proceso de trabajo de Celerisys: contacto, diagnóstico, propuesta, desarrollo y entrega.|How Celerisys works: contact, discovery, proposal, development and delivery.|Como a Celerisys trabalha: contato, diagnóstico, proposta, desenvolvimento e entrega.
Contacto|Contact|Contato
CUÉNTANOS TU RETO|TELL US YOUR CHALLENGE|CONTE SEU DESAFIO
Diagnóstico|Discovery|Diagnóstico
ENTENDEMOS TU PROCESO|WE UNDERSTAND YOUR PROCESS|ENTENDEMOS SEU PROCESSO
Propuesta|Proposal|Proposta
DISEÑAMOS LA SOLUCIÓN|WE DESIGN THE SOLUTION|PROJETAMOS A SOLUÇÃO
Desarrollo|Development|Desenvolvimento
CONSTRUIMOS CONTIGO|WE BUILD WITH YOU|CONSTRUÍMOS COM VOCÊ
Entrega|Delivery|Entrega
SOLUCIÓN FUNCIONANDO|YOUR SOLUTION, WORKING|SOLUÇÃO FUNCIONANDO
DE TU PRIMER MENSAJE A UNA SOLUCIÓN FUNCIONANDO|FROM YOUR FIRST MESSAGE TO A WORKING SOLUTION|DA PRIMEIRA MENSAGEM A UMA SOLUÇÃO FUNCIONANDO
Qué hacemos|What we do|O que fazemos
Creamos soluciones digitales claras, útiles y a medida.|Practical digital solutions, built around your business.|Soluções digitais claras, úteis e sob medida.
Entendemos tu problema, definimos la solución correcta y la llevamos a producción con diseño, desarrollo y acompañamiento.|We understand your challenge, define the right solution and launch it with design, development and ongoing guidance.|Entendemos seu desafio, definimos a solução certa e a colocamos em produção com design, desenvolvimento e acompanhamento.
Hablar con el equipo|Talk to our team|Fale com a equipe
Automatización útil|Practical automation|Automação útil
Conectamos tareas repetitivas, formularios, WhatsApp, correos y reportes para ahorrar tiempo real.|We connect repetitive tasks, forms, WhatsApp, email and reports to save your team time.|Conectamos tarefas repetitivas, formulários, WhatsApp, e-mails e relatórios para economizar tempo.
Sistemas a medida|Custom software|Sistemas sob medida
Creamos herramientas internas para ordenar clientes, ventas, operaciones, permisos y seguimiento.|We build internal tools to organize customers, sales, operations, permissions and follow-up.|Criamos ferramentas internas para organizar clientes, vendas, operações, permissões e acompanhamento.
Webs que convierten|Websites built for inquiries|Sites que geram contatos
Landing pages y sitios web con mensaje claro, carga rápida y llamados a la acción bien pensados.|Landing pages and websites with clear messaging, fast loading and thoughtful calls to action.|Landing pages e sites com mensagens claras, carregamento rápido e chamadas para ação bem pensadas.
IA aplicada con criterio|Purposeful AI|IA aplicada com critério
Usamos IA cuando mejora atención, clasificación, análisis o productividad. No por moda.|We use AI where it improves customer service, classification, analysis or productivity.|Usamos IA quando ela melhora o atendimento, a classificação, a análise ou a produtividade.
Así lo hacemos contigo|How we work with you|Como trabalhamos com você
Entendemos y priorizamos|Understand and prioritize|Entender e priorizar
Revisamos tu operación y definimos qué resolver primero.|We review your operations and decide what to solve first.|Analisamos sua operação e definimos o que resolver primeiro.
Construimos y validamos|Build and validate|Construir e validar
Desarrollamos por etapas y ajustamos contigo.|We develop in stages and refine the solution with you.|Desenvolvemos por etapas e ajustamos com você.
Entregamos y acompañamos|Deliver and support|Entregar e acompanhar
Ponemos la solución en marcha y te ayudamos a usarla.|We launch your solution and help you use it.|Colocamos a solução em funcionamento e ajudamos você a usá-la.
Una web para cada etapa.|A website for every stage.|Um site para cada etapa.
Elige tu plan. Definimos juntos el alcance antes de empezar.|Choose your plan. We agree on the scope before we start.|Escolha seu plano. Definimos o escopo juntos antes de começar.
Tu primera web profesional|Your first professional website|Seu primeiro site profissional
Más espacio para crecer|More room to grow|Mais espaço para crescer
Una presencia más completa|A more complete online presence|Uma presença mais completa
Plan Base|Base plan|Plano Base
Plan Plus|Plus plan|Plano Plus
Plan Pro|Pro plan|Plano Pro
Recomendado|Recommended|Recomendado
Para presentar tu negocio y recibir consultas.|Introduce your business and receive inquiries.|Apresente seu negócio e receba contatos.
Para empresas que necesitan mostrar sus servicios y medir sus consultas.|For businesses that need to showcase services and measure inquiries.|Para empresas que precisam apresentar serviços e medir contatos.
Para negocios con más servicios y contenido que mostrar.|For businesses with more services and content to share.|Para negócios com mais serviços e conteúdo para apresentar.
Precio del plan|Plan price|Preço do plano
Pago único por desarrollo|One-time development fee|Pagamento único pelo desenvolvimento
Landing de hasta 6 secciones|Landing page with up to 6 sections|Landing page com até 6 seções
Diseño responsive y HTTPS|Responsive design and HTTPS|Design responsivo e HTTPS
Formulario y WhatsApp|Contact form and WhatsApp|Formulário e WhatsApp
SEO inicial y publicación|Initial SEO setup and launch|SEO inicial e publicação
2 rondas de ajustes|2 rounds of revisions|2 rodadas de ajustes
Corrección de errores por 15 días|Bug fixes for 15 days|Correção de erros por 15 dias
Hasta 5 páginas adaptadas a tu marca|Up to 5 pages tailored to your brand|Até 5 páginas adaptadas à sua marca
Responsive, SEO inicial y HTTPS|Responsive design, initial SEO and HTTPS|Design responsivo, SEO inicial e HTTPS
Hasta 3 formularios y WhatsApp|Up to 3 forms and WhatsApp|Até 3 formulários e WhatsApp
Analytics y Search Console|Analytics and Search Console|Analytics e Search Console
Blog o catálogo: 10 entradas iniciales|Blog or catalog: 10 initial entries|Blog ou catálogo: 10 entradas iniciais
3 ajustes y corrección de errores por 30 días|3 revision rounds and bug fixes for 30 days|3 rodadas de ajustes e correção de erros por 30 dias
Hasta 8 páginas adaptadas a tu marca|Up to 8 pages tailored to your brand|Até 8 páginas adaptadas à sua marca
Todo lo incluido en Plus|Everything in Plus|Tudo do plano Plus
Blog o catálogo: 20 entradas iniciales|Blog or catalog: 20 initial entries|Blog ou catálogo: 20 entradas iniciais
Medición de consultas y clics a WhatsApp|Inquiry and WhatsApp click tracking|Medição de contatos e cliques no WhatsApp
Capacitación para la entrega|Handover training|Treinamento na entrega
4 rondas y corrección de errores por 45 días|4 revision rounds and bug fixes for 45 days|4 rodadas e correção de erros por 45 dias
Entrega estimada: 7–10 días hábiles|Estimated delivery: 7–10 business days|Entrega estimada: 7–10 dias úteis
Entrega estimada: 15–20 días hábiles|Estimated delivery: 15–20 business days|Entrega estimada: 15–20 dias úteis
Entrega estimada: 20–25 días hábiles|Estimated delivery: 20–25 business days|Entrega estimada: 20–25 dias úteis
Quiero el plan Base|Choose Base|Quero o plano Base
Quiero el plan Plus|Choose Plus|Quero o plano Plus
Quiero el plan Pro|Choose Pro|Quero o plano Pro
¿Necesitas algo personalizado?|Need a custom solution?|Precisa de algo personalizado?
Tiendas, sistemas e integraciones: definamos juntos tu proyecto.|Online stores, software and integrations: let’s define your project together.|Lojas, sistemas e integrações: vamos definir seu projeto juntos.
Preguntas frecuentes|Frequently asked questions|Perguntas frequentes
Lo que necesitas saber antes de empezar.|What to know before getting started.|O que você precisa saber antes de começar.
No necesitas llegar con una solución definida. Empezamos entendiendo el problema y te recomendamos el siguiente paso más conveniente.|You don't need a solution already mapped out. We start by understanding your challenge and recommending the right next step.|Você não precisa chegar com uma solução definida. Entendemos o problema e recomendamos o próximo passo mais adequado.
Cuéntanos tu caso|Tell us about your project|Conte seu caso
¿Cuánto cuesta desarrollar una solución?|How much does a solution cost?|Quanto custa desenvolver uma solução?
Depende del proceso, las integraciones y el alcance. Después del diagnóstico inicial recibirás una propuesta clara por etapas, sin costos ocultos.|It depends on the process, integrations and scope. After the initial consultation, you receive a clear proposal broken down into stages.|Depende do processo, das integrações e do escopo. Após o diagnóstico inicial, você recebe uma proposta clara por etapas.
¿Cuánto tiempo demora?|How long does it take?|Quanto tempo leva?
Priorizamos una primera entrega útil y luego avanzamos por etapas. El plazo se define contigo después de mapear el proceso y sus riesgos.|We prioritize a useful first release, then work in stages. We agree on the timeline after mapping the process and its risks.|Priorizamos uma primeira entrega útil e avançamos por etapas. Definimos o prazo após mapear o processo e seus riscos.
¿Pueden trabajar con los sistemas que ya usamos?|Can you work with our existing systems?|Podem trabalhar com os sistemas que já usamos?
Sí. Evaluamos tus herramientas actuales y, cuando es viable, las conectamos para evitar duplicar información o reemplazar todo de golpe.|Yes. We review your existing tools and connect them where feasible to avoid duplicate data or replacing everything at once.|Sim. Avaliamos suas ferramentas e, quando viável, as conectamos para evitar dados duplicados ou substituir tudo de uma vez.
¿Necesito saber exactamente qué software quiero?|Do I need to know exactly what software I want?|Preciso saber exatamente qual software quero?
No. Puedes empezar contándonos qué tarea consume tiempo, dónde ocurren errores o qué información hoy no puedes ver a tiempo.|No. Start by telling us which tasks take too long, where errors happen or which information you cannot access when needed.|Não. Conte quais tarefas consomem tempo, onde ocorrem erros ou quais informações você não consegue acessar a tempo.
¿Incluyen capacitación y soporte?|Do you include training and support?|Incluem treinamento e suporte?
Sí. La puesta en marcha contempla acompañamiento y capacitación. El soporte posterior se define según las necesidades de cada solución.|Yes. Launch includes guidance and training. Ongoing support is agreed according to each solution’s needs.|Sim. A implantação inclui acompanhamento e treinamento. O suporte posterior é definido conforme as necessidades da solução.
¿Trabajan fuera de Arequipa?|Do you work outside Arequipa?|Atendem fora de Arequipa?
Sí. Atendemos empresas de otras ciudades de Perú de forma remota y coordinamos cada etapa con seguimiento claro.|Yes. We work remotely with businesses in other cities in Peru and provide clear follow-up at each stage.|Sim. Atendemos empresas de outras cidades do Peru remotamente, com acompanhamento claro em cada etapa.
Nuestros clientes|Our clients|Nossos clientes
Quiénes confían en Celerisys.|Businesses that trust Celerisys.|Quem confia na Celerisys.
Soluciones que acompañan el trabajo de negocios reales.|Solutions that support the daily work of real businesses.|Soluções que acompanham o trabalho de negócios reais.
Clientes de Celerisys|Celerisys clients|Clientes da Celerisys
Cliente anterior|Previous client|Cliente anterior
Cliente siguiente|Next client|Próximo cliente
Celerisys encontró la fuga en nuestra operación. En pocas semanas empezamos a recuperar miles de soles que antes se escapaban sin darnos cuenta.|Celerisys found the leak in our operations. Within weeks, we started recovering thousands of soles we had been losing without realizing it.|A Celerisys encontrou a falha na nossa operação. Em poucas semanas, começamos a recuperar milhares de soles que perdíamos sem perceber.
Logo de Delypapa|Delypapa logo|Logo da Delypapa
Empresa de alimentos · Arequipa, Perú|Food business · Arequipa, Peru|Empresa de alimentos · Arequipa, Peru
Hablemos de tu proyecto.|Let’s talk about your project.|Vamos conversar sobre seu projeto.
Cuéntanos qué necesitas y déjanos tus datos. Te contactaremos para coordinar una reunión y definir el siguiente paso.|Tell us what you need and leave your details. We’ll contact you to arrange a meeting and agree on the next step.|Conte o que precisa e deixe seus dados. Entraremos em contato para agendar uma reunião e definir o próximo passo.
Primera evaluación sin costo|Free initial consultation|Primeira avaliação gratuita
Respuesta personal, no automática|A personal reply|Resposta pessoal
Sin compromiso ni llamadas innecesarias|No commitment or unnecessary calls|Sem compromisso ou ligações desnecessárias
Respuesta directa por correo|A direct reply by email|Resposta direta por e-mail
Revisamos cada solicitud y normalmente respondemos dentro de un día hábil.|We review every inquiry and usually reply within one business day.|Analisamos cada solicitação e normalmente respondemos em um dia útil.
Hablemos de tu operación|Tell us about your business|Vamos falar da sua operação
Todos los campos marcados son necesarios.|All marked fields are required.|Todos os campos marcados são obrigatórios.
Nombre *|Name *|Nome *
Tu nombre|Your name|Seu nome
Empresa (opcional)|Company (optional)|Empresa (opcional)
Nombre de tu negocio|Business name|Nome do seu negócio
Correo *|Email *|E-mail *
nombre@empresa.com|name@company.com|nome@empresa.com
WhatsApp (opcional)|WhatsApp (optional)|WhatsApp (opcional)
¿Qué te gustaría mejorar? (opcional)|What would you like to improve? (optional)|O que gostaria de melhorar? (opcional)
Selecciona qué te gustaría mejorar|Select what you would like to improve|Selecione o que gostaria de melhorar
Selecciona el principal reto de tu operación|Select your main business challenge|Selecione o principal desafio da sua operação
Automatizar tareas repetitivas|Automate repetitive tasks|Automatizar tarefas repetitivas
Ordenar información y reportes|Organize information and reports|Organizar informações e relatórios
Crear software a medida|Build custom software|Criar software sob medida
Aplicar inteligencia artificial|Apply artificial intelligence|Aplicar inteligência artificial
Aún no estoy seguro|I’m not sure yet|Ainda não tenho certeza
Cuéntanos un poco más *|Tell us a little more *|Conte um pouco mais *
¿Qué proceso te quita más tiempo hoy?|Which process takes up most of your time?|Qual processo consome mais tempo hoje?
Solicitar evaluación gratuita|Request a free consultation|Solicitar avaliação gratuita
Usaremos tus datos únicamente para responder esta solicitud.|We will only use your details to respond to this inquiry.|Usaremos seus dados apenas para responder a esta solicitação.
Consulta nuestra política de privacidad.|Read our privacy policy.|Consulte nossa política de privacidade.
Software a medida y automatización para que tu operación avance sin depender de tareas manuales.|Custom software and automation to help your business move beyond manual tasks.|Software sob medida e automação para sua operação avançar sem depender de tarefas manuais.
Enlaces|Links|Links
Privacidad|Privacy|Privacidade
Contacto y redes|Contact and social media|Contato e redes sociais
Ubicación|Location|Localização
Arequipa, Perú|Arequipa, Peru|Arequipa, Peru
Solicitar diagnóstico|Request a consultation|Solicitar diagnóstico
Software que trabaja mientras tú descansas.|Software that keeps working while you rest.|Software que trabalha enquanto você descansa.
Política de privacidad — Celerisys|Privacy policy — Celerisys|Política de privacidade — Celerisys
Conoce cómo Celerisys utiliza y protege los datos que envías mediante su formulario de contacto.|Learn how Celerisys uses and protects the information you send through its contact form.|Saiba como a Celerisys utiliza e protege os dados enviados pelo formulário de contato.
← Volver al inicio|← Back to home|← Voltar ao início
Información legal|Legal information|Informações legais
Política de privacidad|Privacy policy|Política de privacidade
Última actualización: 22 de agosto de 2026|Last updated: August 22, 2026|Última atualização: 22 de agosto de 2026
Qué información recopilamos|Information we collect|Informações que coletamos
Cuando utilizas nuestro formulario podemos recibir tu nombre, correo, empresa, teléfono y la información que decidas compartir sobre tu operación.|When you use our form, we may receive your name, email, company, phone number and any information you choose to share about your business.|Ao usar nosso formulário, podemos receber seu nome, e-mail, empresa, telefone e as informações que decidir compartilhar sobre sua operação.
Para qué la utilizamos|How we use it|Como usamos os dados
Usamos estos datos únicamente para responder tu solicitud, evaluar cómo podemos ayudarte y continuar la conversación comercial que hayas iniciado.|We only use this information to respond to your inquiry, assess how we can help and continue the business conversation you started.|Usamos esses dados apenas para responder à solicitação, avaliar como ajudar e continuar a conversa comercial iniciada por você.
Procesamiento del formulario|Form processing|Processamento do formulário
El envío del formulario se procesa mediante Google Apps Script para remitir la información a nuestro correo y enviarte una confirmación automática. No vendemos tus datos ni los utilizamos para enviar comunicaciones no solicitadas.|The form is processed through Google Apps Script to forward the information to our email and send you an automated confirmation. We do not sell your data or use it to send unsolicited messages.|O formulário é processado pelo Google Apps Script para encaminhar as informações ao nosso e-mail e enviar uma confirmação automática. Não vendemos seus dados nem os usamos para mensagens não solicitadas.
Conservación y seguridad|Retention and security|Conservação e segurança
Conservamos la información durante el tiempo necesario para atender la solicitud y mantener el seguimiento correspondiente. Aplicamos medidas razonables para evitar accesos o usos no autorizados.|We retain information for as long as needed to handle the inquiry and related follow-up. We apply reasonable measures to prevent unauthorized access or use.|Conservamos as informações pelo tempo necessário para atender à solicitação e acompanhar o contato. Aplicamos medidas razoáveis contra acesso ou uso não autorizado.
Tus derechos y contacto|Your rights and contact|Seus direitos e contato
Puedes solicitar acceso, corrección o eliminación de la información que nos hayas enviado escribiendo a|You may request access to, correction or deletion of information you have sent us by emailing|Você pode solicitar acesso, correção ou exclusão das informações enviadas escrevendo para
Completa este campo para continuar.|Complete this field to continue.|Preencha este campo para continuar.
Escribe al menos 2 caracteres.|Enter at least 2 characters.|Digite pelo menos 2 caracteres.
Ingresa un correo válido, por ejemplo nombre@empresa.com.|Enter a valid email, for example name@company.com.|Insira um e-mail válido, por exemplo nome@empresa.com.
Usa un número válido, por ejemplo +51 999 999 999.|Use a valid number, for example +51 999 999 999.|Use um número válido, por exemplo +51 999 999 999.
El formulario todavía no está conectado. Por favor, escríbenos por WhatsApp.|The form is not connected yet. Please message us on WhatsApp.|O formulário ainda não está conectado. Fale conosco pelo WhatsApp.
Enviando…|Sending…|Enviando…
No pudimos enviar tu solicitud. Inténtalo nuevamente o escríbenos por WhatsApp.|We could not send your inquiry. Try again or message us on WhatsApp.|Não foi possível enviar a solicitação. Tente novamente ou fale pelo WhatsApp.
`;

export const dictionary = Object.fromEntries(rows.trim().split('\n').map(row => {
  const [es, en, pt] = row.split('|');
  return [es, { en, pt }];
})) as Record<string, { en: string; pt: string }>;

export function translate(text: string, locale: Locale): string {
  if (locale === 'es') return text;
  const key = text.replace(/\s+/g, ' ').trim();
  const value = dictionary[key]?.[locale];
  if (value) return text.replace(/\S[\s\S]*\S|\S/, value);
  if (/^© \d{4} Celerisys\. Todos los derechos reservados\.$/.test(key)) {
    return key.replace('Todos los derechos reservados.', locale === 'en' ? 'All rights reserved.' : 'Todos os direitos reservados.');
  }
  return text;
}
