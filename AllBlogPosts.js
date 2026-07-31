export const allBlogPosts = [
    {
        id: 0,
        img: "/Image/HomePagePhoto/blogpostimg1.svg",
        tags: ["#marketing", "#traffic_arbitrage", "#online_business"],
        author: {
            authorImg: "Image/courses-photo/people/tutor4.png",
            authorName: "Kristin Watson",
            authorJob: {
                en: "Curator of Marketing Course",
                ru: "Куратор курса по маркетингу",
                uz: "Marketing kursi kuratori",
            },
            socialLinks: {
                instagram: {
                    svg: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
	                    <path d="M0 0h24v24H0z" fill="none" />
	                    <path fill="currentColor" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2" />
                    </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://instagram.com/misterkhabibullayev",
                },
                twitter: {
                    svg: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
	                    <path d="M0 0h24v24H0z" fill="none" />
	                    <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
                    </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://x.com/",
                },
                linkedIn: {
                    svg: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
	                    <path d="M0 0h24v24H0z" fill="none" />
	                    <path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
                    </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://uz.linkedin.com/",
                },
            },
        },
        en: {
            type: "Podcast",
            date: "September 4, 2020",
            category: "Marketing",
            duration: "36 min",
            title: "What is traffic arbitrage and does it really make money?",
            description:
                "In this episode, we dive deep into the fundamentals of traffic arbitrage, exploring key strategies, popular ad networks, and whether it remains a profitable business model today.",
            action: "Listen",
            content: {
                leadTitle:
                    "Traffic arbitrage is one of the most popular and fastest growing trends in the world of digital marketing. Simply put, it is the art of profiting from the difference by buying visitors (traffic) from one source at a lower price and redirecting them to another platform at a higher price.",
                paragraph1:
                    "For many, this industry may seem very mysterious and complicated. In fact, the classic sales logic works here: you spend a certain amount of money on advertising (for example, through Facebook or Google Ads), and when users who come through this ad buy the offered product or service, you receive a commission.",
                paragraph2:
                    "However, achieving success in this field is not just about spending money on ads. It requires continuous analysis, running A/B tests, precise audience targeting, and most importantly — the ability to accurately calculate the return on investment (ROI).",
                quote: "The most important rule in traffic arbitrage: Every $1 spent should return at least $1.50. Otherwise, you are simply donating money to ad networks.",
                paragraph3:
                    "If you are a beginner in this field, you should pay special attention to the following key steps and directions:",
                list: [
                    "Choosing the right offer — finance, nutra (health & beauty), or gaming niches.",
                    "Identifying the target audience and the right ad network.",
                    "Effectively testing creatives and landing pages.",
                    "Deeply analyzing campaign metrics and utilizing tracking tools.",
                ],
                paragraph4:
                    "In conclusion, traffic arbitrage can indeed generate substantial income, but it is not a get-rich-quick scheme. It is a full-fledged online business that requires continuous learning, keeping up with market trends, and proper risk management.",
            },
        },
        ru: {
            type: "Подкаст",
            date: "4 сентября 2020 г.",
            category: "Маркетинг",
            duration: "36 мин",
            title: "Что такое арбитраж трафика и действительно ли он приносит деньги?",
            description:
                "В этом выпуске мы подробно разбираем основы арбитража трафика, основные стратегии, рекламные сети и выясняем, реально ли сегодня на этом заработать.",
            action: "Слушать",
            content: {
                leadTitle:
                    "Арбитраж трафика — одно из самых популярных и быстрорастущих направлений в сфере цифрового маркетинга. Простыми словами, это искусство получать прибыль на разнице, покупая посетителей (трафик) из одного источника по более низкой цене и перенаправляя их на другую платформу по более высокой.",
                paragraph1:
                    "Для многих эта сфера может показаться загадочной и сложной. На самом деле здесь работает классическая торговая логика: вы тратите определенную сумму на рекламу (например, через Facebook или Google Ads), и когда пользователи, пришедшие по этой рекламе, покупают предлагаемый продукт или услугу, вы получаете комиссионные.",
                paragraph2:
                    "Однако успех в этой области заключается не просто в трате денег на рекламу. Он требует постоянного анализа, проведения A/B-тестов, точного таргетинга аудитории и, самое главное, умения правильно рассчитывать окупаемость инвестиций (ROI).",
                quote: "Самое главное правило в арбитраже трафика: каждый потраченный $1 должен приносить не менее $1.50. В противном случае вы просто дарите деньги рекламным сетям.",
                paragraph3:
                    "Если вы новичок в этой сфере, вам следует обратить особое внимание на следующие ключевые шаги и направления:",
                list: [
                    "Выбор правильного оффера — финансы, нутра (здоровье и красота) или гейминг ниши.",
                    "Определение целевой аудитории и подходящей рекламной сети.",
                    "Эффективное тестирование креативов и целевых страниц (лендингов).",
                    "Глубокий анализ метрик кампании и использование инструментов трекинга.",
                ],
                paragraph4:
                    "В заключение, арбитраж трафика действительно может приносить существенный доход, но это не схема быстрого обогащения. Это полноценный онлайн-бизнес, требующий постоянного обучения, отслеживания рыночных трендов и грамотного управления рисками.",
            },
        },
        uz: {
            type: "Podkast",
            date: "2020-yil 4-sentyabr",
            category: "Marketing",
            duration: "36 daqiqa",
            title: "Trafik arbitraji nima va u haqiqatan ham daromad keltiradimi?",
            description:
                "Ushbu sonimizda biz trafik arbitrajining asoslari, asosiy strategiyalar hamda bugungi kunda bu sohadan haqiqatan ham daromad olish mumkinmi degan savolga atroflicha javob beramiz.",
            action: "Tinglash",
            content: {
                leadTitle:
                    "Trafik arbitraji — bu raqamli marketing olamidagi eng mashhur va tez rivojlanayotgan yo'nalishlardan biridir. Oddiy qilib aytganda, bu bir manbadan arzonroq narxda tashrif buyuruvchilarni (trafikni) sotib olib, ularni boshqa platformaga qimmatroq yo'naltirish orqali o'rtadagi farqdan daromad olish san'atidir.",
                paragraph1:
                    "Ko'pchilik uchun bu soha juda sirli va murakkab ko'rinishi mumkin. Aslida esa bu joyda klassik savdo mantiqi ishlaydi: siz reklamaga ma'lum miqdorda mablag' sarflaysiz (masalan, Facebook yoki Google Ads orqali) va ushbu reklama orqali kelgan foydalanuvchilar taklif qilingan mahsulot yoki xizmatni xarid qilganda komissiya olasiz.",
                paragraph2:
                    "Biroq, bu sohada muvaffaqiyatga erishish faqatgina reklamaga pul tikish degani emas. Bu doimiy tahlil, A/B testlar o'tkazish, auditoriyani aniq maqsadli tanlay bilish va eng muhimi — xarajatlar va tushumlar o'rtasidagi balansni (ROI) to'g'ri hisoblay olishni talab etadi.",
                quote: "Trafik arbitrajida eng muhim qoida: Har bir sarflangan $1 dollar kamida $1.50 dollar bo'lib qarib qaytishi kerak. Aks holda siz shunchaki reklama tarmoqlariga pul bag'ishlayotgan bo'lasiz.",
                paragraph3:
                    "Agar siz bu sohani yangi boshlayotgan bo'lsangiz, quyidagi asosiy bosqichlar va yo'nalishlarga alohida e'tibor berishingiz zarur:",
                list: [
                    "To'g'ri offer (taklif) tanlash — moliya, nutra (sog'liq va go'zallik) yoki o'yinlar sohasi.",
                    "Maqsadli auditoriyani va mos reklama tarmog'ini aniqlash.",
                    "Kreativlar va landing sahifalarni samarali test qilish.",
                    "Kompaniya ko'rsatkichlarini chuqur tahlil qilish va analitika (tracker) vositalaridan foydalanish.",
                ],
                paragraph4:
                    "Xulosa qilib aytganda, trafik arbitraji orqali haqiqatan ham katta daromad topish mumkin, ammo bu tez va oson boyib ketish yo'li emas. Bu yo'nalish doimiy izlanish, bozor va trendlarni o'rganish hamda xavflarni to'g'ri boshqarishni talab qiladigan to'laqonli onlayn biznesdir.",
            },
        },
    },
    {
        id: 1,
        img: "/Image/HomePagePhoto/blogpostimg2.svg",
        tags: ["#development", "#programming", "#coding"],
        author: {
            authorImg: "Image/courses-photo/people/tutor4.png",
            authorName: "Kristin Watson",
            authorJob: {
                en: "Curator of Marketing Course",
                ru: "Куратор курса по маркетингу",
                uz: "Marketing kursi kuratori",
            },
            socialLinks: {
                instagram: {
                    svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2" />
          </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://instagram.com/misterkhabibullayev",
                },
                twitter: {
                    svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
          </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://x.com/",
                },
                linkedIn: {
                    svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
          </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://uz.linkedin.com/",
                },
            },
        },
        en: {
            type: "Article",
            date: "September 1, 2020",
            category: "Development",
            duration: "10 min",
            title: "How to choose the first programming language for a beginner",
            description:
                "Choosing your first programming language can be overwhelming. In this article, we break down the most popular languages to help you start your tech career.",
            action: "Read",
            content: {
                leadTitle:
                    "Entering the IT field starts with a fundamental decision: selecting your first programming language. Choosing the right path will keep you motivated and speed up your learning.",
                paragraph1:
                    "Beginners often get confused by the sheer number of programming languages. Python is famous for its simple syntax, JavaScript powers the entire web, and C++ gives a deep understanding of memory management.",
                paragraph2:
                    "Rather than looking for the 'best' language, you should focus on your goal. If you want to build websites, start with JavaScript. For AI and data science, Python is the clear winner.",
                quote: "The best programming language to learn first is the one that lets you build projects you care about fastest.",
                paragraph3:
                    "Here are the key factors to consider when making your choice:",
                list: [
                    "Your ultimate goal (Web development, Mobile apps, AI, Game dev)",
                    "Community support and available learning resources",
                    "Job market demand and entry-level salary potential",
                    "The learning curve and syntax complexity",
                ],
                paragraph4:
                    "Remember, once you master your first language and understand core programming principles, learning a second or third language becomes significantly easier.",
            },
        },
        ru: {
            type: "Статья",
            date: "1 сентября 2020 г.",
            category: "Development",
            duration: "10 мин",
            title: "Как выбрать первый язык программирования для новичка",
            description:
                "Выбор первого языка программирования может показаться сложным. В этой статье мы разбираем популярные языки, чтобы помочь вам начать карьеру в IT.",
            action: "Читать",
            content: {
                leadTitle:
                    "Вход в сферу IT начинается с фундаментального решения: выбора первого языка программирования. Правильный выбор поможет сохранить мотивацию и ускорит обучение.",
                paragraph1:
                    "Новички часто теряются из-за огромного количества языков. Python славится простым синтаксисом, JavaScript управляет всем вебом, а C++ дает глубокое понимание работы с памятью.",
                paragraph2:
                    "Вместо поиска 'идеального' языка ориентируйтесь на свои цели. Если хотите создавать сайты — выбирайте JavaScript. Для ИИ и работы с данными идеально подойдет Python.",
                quote: "Лучший первый язык программирования — тот, который позволяет вам быстрее всего создать проект, который вам интересен.",
                paragraph3:
                    "Вот ключевые факторы, на которые стоит обратить внимание при выборе:",
                list: [
                    "Ваша конечная цель (Веб-разработка, мобильные авто, ИИ, геймдев)",
                    "Поддержка сообщества и доступность учебных материалов",
                    "Востребованность на рынке труда и уровень зарплат",
                    "Сложность синтаксиса и порог входа",
                ],
                paragraph4:
                    "Помните: как только вы освоите первый язык и поймете базовые принципы программирования, изучение второго или третьего языка пройдет намного проще.",
            },
        },
        uz: {
            type: "Maqola",
            date: "2020-yil 1-sentyabr",
            category: "Development",
            duration: "10 daqiqa",
            title: "Yangi boshlovchilar uchun birinchi dasturlash tilini qanday tanlash kerak?",
            description:
                "Birinchi dasturlash tilini tanlash murakkab tuyulishi mumkin. Ushbu maqolada IT karyerangizni boshlash uchun eng mashhur tillarni tahlil qilamiz.",
            action: "O'qish",
            content: {
                leadTitle:
                    "IT sohasiga kirib kelish eng muhim qarorlardan biri — birinchi dasturlash tilini tanlashdan boshlanadi. To'g'ri yo'nalish tanlash motivatsiyani saqlashga va tezroq rivojlanishga yordam beradi.",
                paragraph1:
                    "Yangi boshlovchilar ko'pincha tillarning ko'pligidan chalg'ishadi. Python o'zining sodda sintaksisi bilan mashhur, JavaScript butun veb-sanoatni boshqaradi, C++ esa xotira bilan ishlashni chuqur o'rgatadi.",
                paragraph2:
                    "'Eng yaxshi' tilni izlash o'rniga, o'z maqsadingizga e'tibor qaratganingiz ma'qul. Agar veb-saytlar yaratmoqchi bo'lsangiz JavaScript'dan, sun'iy intellekt va ma'lumotlar tahlili uchun esa Python'dan boshlang.",
                quote: "O'rganish uchun eng yaxshi birinchi til — bu sizga o'zingiz xohlagan loyihani eng tez yaratishga imkon beradigan dildir.",
                paragraph3:
                    "Tanlov qilishda quyidagi asosiy omillarga e'tibor bering:",
                list: [
                    "Sizning yakuniy maqsadingiz (Veb-dasturlash, mobil ilovalar, AI, o'yinlar yaratish)",
                    "Jamiyat (community) qo'llab-quvvatlovi va ta'lim resurslarining mavjudligi",
                    "Mehnat bozoridagi talab va maosh darajasi",
                    "Sintaksisning murakkabligi va o'rganish tezligi",
                ],
                paragraph4:
                    "Yodda tuting, birinchi tilni mukammal egallab, dasturlashning asosiy mantiqini tushunib olsangiz, ikkinchi yoki uchinchi tilni o'rganish ancha oson kechadi.",
            },
        },
    },
    {
        id: 2,
        img: "/Image/HomePagePhoto/blogpostimg3.svg",
        tags: ["#design", "#creativity", "#career"],
        author: {
            authorImg: "Image/courses-photo/people/tutor4.png",
            authorName: "Kristin Watson",
            authorJob: {
                en: "Curator of Marketing Course",
                ru: "Куратор курса по маркетингу",
                uz: "Marketing kursi kuratori",
            },
            socialLinks: {
                instagram: {
                    svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2" />
          </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://instagram.com/misterkhabibullayev",
                },
                twitter: {
                    svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
          </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://x.com/",
                },
                linkedIn: {
                    svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
          </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://uz.linkedin.com/",
                },
            },
        },
        en: {
            type: "Video",
            date: "August 8, 2020",
            category: "Design",
            duration: "40 min",
            title: "Should you choose a creative profession if you are attracted to creativity?",
            description:
                "Is passion for art enough to build a successful creative career? We discuss the realities, technical demands, and commercial side of creative jobs.",
            action: "Watch",
            content: {
                leadTitle:
                    "Many people believe that loving art or drawing is enough to become a successful designer or creative specialist. However, commercial creativity operates under strict rules.",
                paragraph1:
                    "Commercial design and creative professions require balancing artistic expression with business requirements. Client goals, deadlines, and user UX always take priority.",
                paragraph2:
                    "In this video session, we explore whether turning your creative hobby into a full-time job will bring you joy or result in professional burnout.",
                quote: "Creativity in business is not just about making things look pretty; it's about solving problems visually.",
                paragraph3: "Key aspects covered in this breakdown:",
                list: [
                    "The difference between pure art and commercial design",
                    "How to handle client feedback without losing your passion",
                    "Developing soft skills alongside your creative talent",
                    "Building a strong portfolio that actually sells",
                ],
                paragraph4:
                    "If you are ready to treat creativity as a discipline rather than just inspiration, a creative career can be immensely rewarding.",
            },
        },
        ru: {
            type: "Видео",
            date: "8 августа 2020 г.",
            category: "Design",
            duration: "40 мин",
            title: "Стоит ли выбирать творческую профессию, если вас привлекает творчество?",
            description:
                "Достаточно ли страсти к искусству для построения успешной карьеры? Обсуждаем реалии, технические требования и коммерческую сторону творческих профессий.",
            action: "Смотреть",
            content: {
                leadTitle:
                    "Многие считают, что любви к искусству или рисованию достаточно, чтобы стать успешным дизайнером. Однако коммерческое творчество работает по строгим правилам.",
                paragraph1:
                    "Коммерческий дизайн требует баланса между художественным самовыражением и бизнес-задачами. Цели клиента, дедлайны и UX всегда стоят на первом месте.",
                paragraph2:
                    "В этом видео мы разбираем, принесет ли превращение хобби в работу радость или же приведет к быстрому профессиональному выгоранию.",
                quote: "Творчество в бизнесе — это не просто 'сделать красиво', это решение конкретных задач визуальными средствами.",
                paragraph3: "Ключевые темы, рассмотренные в видео:",
                list: [
                    "Разница между чистым искусством и коммерческим дизайном",
                    "Как правильно работать с правками и критикой клиентов",
                    "Развитие soft skills наряду с творческим талантом",
                    "Создание портфолио, которое реально продает ваши услуги",
                ],
                paragraph4:
                    "Если вы готовы относиться к творчеству как к дисциплине, а не просто ждать вдохновения, эта профессия принесет вам огромное удовольствие.",
            },
        },
        uz: {
            type: "Video",
            date: "2020-yil 8-avgust",
            category: "Design",
            duration: "40 daqiqa",
            title: "Ijodkorlikka qiziqsangiz, ijodiy kasbni tanlashingiz kerakmi?",
            description:
                "Muvaffaqiyatli karyera qurish uchun faqat san'atga bo'lgan qiziqish yetarlimi? Ijodiy kasblarning haqiqat doirasi, talablari va tijorat tomonini muhokama qilamiz.",
            action: "Tomosha qilish",
            content: {
                leadTitle:
                    "Ko'pchilik san'atni yoki rasm chizishni yaxshi ko'rish muvaffaqiyatli dizayner bo'lish uchun yetarli deb o'ylaydi. Biroq tijoriy ijodkorlik qat'iy qoidalar asosida ishlaydi.",
                paragraph1:
                    "Tijorat dizayni va ijodiy kasblar badiiy g'oya bilan biznes talablari o'rtasidagi balansni saqlashni talab qiladi. Mijozning maqsadlari va foydalanuvchilar qulayligi har doim birinchi o'rinda turadi.",
                paragraph2:
                    "Ushbu videoda sevimli xobbinizni asosiy ishga aylantirish sizga quvonch keltiradimi yoki ruhiy toliqishga (burnout) olib keladimi degan savolga javob izlaymiz.",
                quote: "Biznesdagi ijodkorlik shunchaki 'chiroyli qilish' emas, balki vizual yechimlar orqali muammolarni hal qilishdir.",
                paragraph3: "Videoda ko'rib chiqilgan asosiy mavzular:",
                list: [
                    "Sof san'at va tijorat dizayni o'rtasidagi farq",
                    "Mijozlarning e'tirozlari va kritikasi bilan to'g'ri ishlash",
                    "Ijodiy talant bilan birga soft skill'larni rivojlantirish",
                    "Xizmatlaringizni sota oladigan kuchli portfolio yaratish",
                ],
                paragraph4:
                    "Bilingki, agar siz ijodkorlikka ilhom emas, balki intizom va mehnat sifatida qarashga tayyor bo'lsangiz, bu soha sizga katta daromad va qoniqish olib keladi.",
            },
        },
    },
    {
        id: 3,
        img: "/Image/HomePagePhoto/blogpostimg4.svg",
        tags: ["#hr", "#recruiting", "#job_search"],
        author: {
            authorImg: "Image/courses-photo/people/tutor4.png",
            authorName: "Kristin Watson",
            authorJob: {
                en: "Curator of Marketing Course",
                ru: "Куратор курса по маркетингу",
                uz: "Marketing kursi kuratori",
            },
            socialLinks: {
                instagram: {
                    svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2" />
          </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://instagram.com/misterkhabibullayev",
                },
                twitter: {
                    svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
          </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://x.com/",
                },
                linkedIn: {
                    svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
          </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://uz.linkedin.com/",
                },
            },
        },
        en: {
            type: "Article",
            date: "August 3, 2020",
            category: "HR & Recruiting",
            duration: "12 min",
            title: "HR statistics: job search, interviews, hiring and recruiting",
            description:
                "Discover recent job search trends, hiring metrics, and interview analytics to prepare your resume and impress recruiters effectively.",
            action: "Read",
            content: {
                leadTitle:
                    "Understanding hiring statistics and HR metrics can drastically increase your chances of landing your dream job in today's competitive market.",
                paragraph1:
                    "Data shows that recruiters spend an average of 6 to 7 seconds reviewing a resume before deciding whether to move forward or reject an applicant.",
                paragraph2:
                    "Preparing for tech and behavioral interviews with structured frameworks (like STAR) yields up to 40% higher success rates during final offer stages.",
                quote: "Your resume is a marketing brochure for your skills, not a historical document of everything you have ever done.",
                paragraph3:
                    "Key statistical findings every job candidate should know:",
                list: [
                    "Over 75% of resumes are filtered out by ATS (Applicant Tracking Systems)",
                    "Referrals account for the highest percentage of successful hires",
                    "Tailoring your CV to specific job descriptions triples response rates",
                    "Soft skills contribute to over 60% of hiring decisions in tech",
                ],
                paragraph4:
                    "By aligning your application strategy with real recruitment data, you will navigate job interviews with far greater confidence.",
            },
        },
        ru: {
            type: "Статья",
            date: "3 августа 2020 г.",
            category: "HR & Recruiting",
            duration: "12 мин",
            title: "HR статистика: поиск работы, собеседования, найм и рекрутинг",
            description:
                "Узнайте свежие тренды рынка труда, метрики найма и аналитику собеседований, чтобы грамотно подготовить резюме и пройти рекрутеров.",
            action: "Читать",
            content: {
                leadTitle:
                    "Понимание статистики найма и ключевых метрик HR может значительно повысить ваши шансы на получение желаемой работы на современном конкурентном рынке.",
                paragraph1:
                    "Данные показывают, что рекрутеры тратят в среднем от 6 до 7 секунд на просмотр резюме, прежде чем принять решение об отказе или приглашении.",
                paragraph2:
                    "Подготовка к техническим и поведенческим собеседованиям по структурированным методологиям (например, STAR) повышает шанс оффера на 40%.",
                quote: "Ваше резюме — это маркетинговый буклет ваших навыков, а не просто исторический список всего, что вы когда-либо делали.",
                paragraph3:
                    "Ключевые статистические факты, которые нужно знать соискателю:",
                list: [
                    "Более 75% резюме отсеиваются автоматическими системами (ATS)",
                    "Рекомендации (referrals) дают самый высокий процент успешного найма",
                    "Адаптация CV под конкретную вакансию втридорога увеличивает отклик",
                    "Soft skills определяют более 60% решений при найме в IT",
                ],
                paragraph4:
                    "Сопоставляя свою стратегию поиска работы с реальными данными рекрутинга, вы будете проходить собеседования с гораздо большей уверенностью.",
            },
        },
        uz: {
            type: "Maqola",
            date: "2020-yil 3-avgust",
            category: "HR & Recruiting",
            duration: "12 daqiqa",
            title: "HR statistikasi: ish qidirish, suhbatlar, yollash va rekruting",
            description:
                "Rezyumengizni to'g'ri tayyorlash va HR mutaxassislari e'tiborini tortish uchun ish bozoridagi so'nggi trendlar va suhbat statistikasini o'rganing.",
            action: "O'qish",
            content: {
                leadTitle:
                    "Rekruting va HR statistikasini tushunish hozirgi raqobatbardosh mehnat bozorida orzuyingizdagi ishni topish imkoniyatini keskin oshiradi.",
                paragraph1:
                    "Tadqiqotlarga ko'ra, HR mutaxassislari rezyumeni ko'rib chiqishga va nomzodni saralashga o'rtacha 6-7 soniya vaqt sarflaydilar.",
                paragraph2:
                    "Suhbatlarga (intervyu) tizimli va to'g'ri tayyorgarlik ko'rish (masalan, STAR usuli bo'yicha) yakuniy taklif (offer) olish imkoniyatini 40% ga oshiradi.",
                quote: "Rezyumengiz — bu o'tmishingiz haqidagi hujjat emas, balki ko'nikmalaringizni ko'rsatuvchi reklama bukletidir.",
                paragraph3:
                    "Har bir nomzod bilishi kerak bo'lgan muhim statistik faktlar:",
                list: [
                    "Rezyumelarning 75% dan ortig'i ATS (avtomatik saralash) tizimlaridan o'ta olmaydi",
                    "Tavsiyanoma (referral) orqali kelganlar eng yuqori ishga kirish ko'rsatkichiga ega",
                    "Rezyumeni muayyan vakansiyaga moslashtirish takliflar sonini 3 barobarga oshiradi",
                    "Soft skill'lar (muloqot va shaxsiy sifatlar) ishga olishdagi qarorning 60% qismini tashkil qiladi",
                ],
                paragraph4:
                    "Ish qidirish strategiyangizni zamonaviy HR ma'lumotlariga moslashtirish orqali siz suhbatlardan muvaffaqiyatli o'tishingiz osonlashadi.",
            },
        },
    },
    {
        id: 4,
        img: "/Image/HomePagePhoto/blogpostimg5.svg",
        tags: ["#management", "#product", "#feedback"],
        author: {
            authorImg: "Image/courses-photo/people/tutor4.png",
            authorName: "Kristin Watson",
            authorJob: {
                en: "Curator of Marketing Course",
                ru: "Куратор курса по маркетингу",
                uz: "Marketing kursi kuratori",
            },
            socialLinks: {
                instagram: {
                    svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2" />
          </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://instagram.com/misterkhabibullayev",
                },
                twitter: {
                    svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
          </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://x.com/",
                },
                linkedIn: {
                    svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
          </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://uz.linkedin.com/",
                },
            },
        },
        en: {
            type: "Video",
            date: "August 2, 2020",
            category: "Management",
            duration: "45 min",
            title: "What to do and who to talk to if you want to get feedback on the product",
            description:
                "Learn how to collect actionable product feedback from users, stakeholders, and market experts to improve your digital solutions efficiently.",
            action: "Watch",
            content: {
                leadTitle:
                    "Getting honest and high-quality product feedback is essential for avoiding costly mistakes and building features that users actually need.",
                paragraph1:
                    "Many product managers make the mistake of asking leading questions or interviewing family and friends who will only praise their ideas.",
                paragraph2:
                    "In this masterclass, we cover Customer Development (CustDev) frameworks and explain how to extract genuine pain points from real users.",
                quote: "Don't ask users what features they want. Ask them about the problems they faced yesterday.",
                paragraph3:
                    "Effective steps for collecting actionable product feedback:",
                list: [
                    "Conducting structured CustDev interviews without leading questions",
                    "Segmenting users into target cohorts for precise insights",
                    "Analyzing in-app analytics and heatmaps alongside qualitative interviews",
                    "Iterating product roadmap based on quantitative data",
                ],
                paragraph4:
                    "Listening to your users is important, but synthesizing their problems into smart product solutions is what creates true market success.",
            },
        },
        ru: {
            type: "Видео",
            date: "2 августа 2020 г.",
            category: "Management",
            duration: "45 мин",
            title: "Что делать и с кем говорить, если вы хотите получить обратную связь по продукту",
            description:
                "Узнайте, как собирать эффективную обратную связь от пользователей и экспертов для улучшения вашего цифрового продукта.",
            action: "Смотреть",
            content: {
                leadTitle:
                    "Получение честной и качественной обратной связи по продукту имеет решающее значение, чтобы избежать дорогостоящих ошибок и создавать то, что нужно пользователям.",
                paragraph1:
                    "Многие менеджеры продуктов допускают ошибку, задавая наводящие вопросы или опрашивая друзей, которые будут лишь хвалить идею.",
                paragraph2:
                    "В этом видеоуроке мы разберем методологию CustDev (Customer Development) и покажем, как выявлять реальные боли пользователей.",
                quote: "Не спрашивайте пользователей, какие функции они хотят. Спросите их о проблемах, с которыми они столкнулись вчера.",
                paragraph3: "Эффективные шаги для сбора обратной связи:",
                list: [
                    "Проведение глубинных CustDev-интервью без наводящих вопросов",
                    "Сегментация пользователей на целевые когорты",
                    "Совмещение данных веб-аналитики и тепловых карт с личными интервью",
                    "Корректировка роадмапа продукта на основе полученных данных",
                ],
                paragraph4:
                    "Слушать пользователей важно, но умение трансформировать их боли в сильные фичи — это то, что приводит продукт к успеху.",
            },
        },
        uz: {
            type: "Video",
            date: "2020-yil 2-avgust",
            category: "Management",
            duration: "45 daqiqa",
            title: "Mahsulot bo'yicha fikr (feedback) olmoqchi bo'lsangiz, nima qilish va kim bilan gaplashish kerak?",
            description:
                "Raqamli mahsulot va xizmatlarni yaxshilash uchun foydalanuvchilar hamda ekspertlardan to'g'ri qayta aloqa yig'ish usullarini o'rganing.",
            action: "Tomosha qilish",
            content: {
                leadTitle:
                    "Mahsulot bo'yicha xolis va sifatli qayta aloqa (feedback) olish katta xatolarning oldini olishga va foydalanuvchilarga chindan kerakli funksiyalarni yaratishga yordam beradi.",
                paragraph1:
                    "Ko'pgina mahsulot menejerlari yaqinlaridan yoki do'stlaridan fikr so'rab xato qilishadi, chunki ular odatda loyihani faqat maqtashadi.",
                paragraph2:
                    "Ushbu video darslikda biz CustDev (Customer Development) usullarini ko'rib chiqamiz va mijozlarning haqiqiy muammolarini (pain points) qanday aniqlashni o'rgatamiz.",
                quote: "Foydalanuvchilardan qaysi funksiyani xohlashlarini so'ramang. Ulardan kecha qanday muammoga duch kelishganini so'rang.",
                paragraph3: "Samarali feedback yig'ishning muhim bosqichlari:",
                list: [
                    "To'g'ri savollar bera oladigan CustDev intervyularini o'tkazish",
                    "Foydalanuvchilarni alohida guruhlarga (segmentlarga) bo'lish",
                    "Analitika vositalari va foydalanuvchilar xatti-harakatlarini tahlil qilish",
                    "Olingan ma'lumotlar asosida mahsulot rejasini (roadmap) yangilash",
                ],
                paragraph4:
                    "Foydalanuvchilarni eshitish muhim, ammo ularning muammolariga to'g'ri texnik yechim topish — mahsulot muvaffaqiyatining kalitidir.",
            },
        },
    },
    {
        id: 5,
        img: "/Image/HomePagePhoto/blogpostimg6.svg",
        tags: ["#design", "#graphic_design", "#colors"],
        author: {
            authorImg: "Image/courses-photo/people/tutor4.png",
            authorName: "Kristin Watson",
            authorJob: {
                en: "Curator of Marketing Course",
                ru: "Куратор курса по маркетингу",
                uz: "Marketing kursi kuratori",
            },
            socialLinks: {
                instagram: {
                    svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2" />
          </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://instagram.com/misterkhabibullayev",
                },
                twitter: {
                    svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
          </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://x.com/",
                },
                linkedIn: {
                    svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
          </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://uz.linkedin.com/",
                },
            },
        },
        en: {
            type: "Podcast",
            date: "July 28, 2020",
            category: "Design",
            duration: "36 min",
            title: "What are color profiles and how they work in graphic design",
            description:
                "Understand RGB, CMYK, sRGB, and Pantone. Learn how color profiles affect digital displays and printing materials in graphic design.",
            action: "Listen",
            content: {
                leadTitle:
                    "Have you ever designed something on your monitor, only for the printed output or mobile display to look completely dull and incorrect?",
                paragraph1:
                    "This issue usually traces back to color profiles. Digital screens emit light using RGB color space, whereas printers mix physical inks using CMYK.",
                paragraph2:
                    "In this podcast, we break down ICC profiles, color gamuts, and settings in Adobe Photoshop, Illustrator, and Figma to keep your colors consistent.",
                quote: "Designing in RGB for a print campaign is one of the quickest ways to ruin a print project.",
                paragraph3: "Topics covered in this episode:",
                list: [
                    "Fundamental differences between RGB (screen) and CMYK (print)",
                    "Why sRGB is the standard for web and mobile interfaces",
                    "Calibrating your monitor for accurate color representation",
                    "Exporting assets correctly for both digital screens and print houses",
                ],
                paragraph4:
                    "Mastering color profiles guarantees that your visual identity looks striking across every screen, billboard, and paper format.",
            },
        },
        ru: {
            type: "Подкаст",
            date: "28 июля 2020 г.",
            category: "Design",
            duration: "36 мин",
            title: "Что такое цветовые профили и как они работают в графическом дизайне",
            description:
                "Разбираем RGB, CMYK, sRGB и Pantone. Узнайте, как цветовые профили влияют на отображение дизайна на экранах и при печати.",
            action: "Слушать",
            content: {
                leadTitle:
                    "Случалось ли вам создавать яркий дизайн на мониторе, а при печати или на телефоне получать блеклые и искаженные цвета?",
                paragraph1:
                    "Причина кроется в цветовых профилях. Цифровые экраны излучают свет в пространстве RGB, тогда как типографии смешивают краски в формате CMYK.",
                paragraph2:
                    "В этом выпуске подкаста мы подробно разбираем профили ICC, цветовой охват и настройки в Photoshop, Illustrator и Figma.",
                quote: "Разработка дизайна для печати в пространстве RGB — самый быстрый способ испортить итоговый тираж.",
                paragraph3: "О чем вы узнаете из выпуска:",
                list: [
                    "Фундаментальные различия между RGB (экраны) и CMYK (печать)",
                    "Почему sRGB является стандартом для веб и мобильных интерфейсов",
                    "Калибровка монитора для точной цветопередачи",
                    "Правильный экспорт макетов для диджитала и типографий",
                ],
                paragraph4:
                    "Понимание цветовых профилей гарантирует, что ваши работы будут выглядеть одинаково качественно на любых экранах и печатных носителях.",
            },
        },
        uz: {
            type: "Podkast",
            date: "2020-yil 28-iyul",
            category: "Design",
            duration: "36 daqiqa",
            title: "Rang profillari nima va ular grafik dizaynda qanday ishlaydi?",
            description:
                "RGB, CMYK, sRGB va Pantone tizimlarini o'rganing. Rang profillari ekrandagi va bosmadagi (print) ko'rinishga qanday ta'sir qilishini tushunib oling.",
            action: "Tinglash",
            content: {
                leadTitle:
                    "Monitorda juda yorqin va chiroyli tayyorlagan dizayningiz chop etilganda yoki telefonda xunuk va xira bo'lib qolgan holatga tushganmisiz?",
                paragraph1:
                    "Buning asosiy sababi rang profillarining noto'g'ri tanlanishidir. Ekranlar RGB nur tizimi orqali ishlaydi, bosmaxonalar esa CMYK siyoh tizimidan foydalanadi.",
                paragraph2:
                    "Ushbu podkastda biz ICC profillari, ranglar qamrovi hamda Adobe Photoshop, Illustrator va Figma'da ranglarni to'g'ri sozlashni muhokama qilamiz.",
                quote: "Bosma nashrlar uchun mo'ljallangan dizaynni RGB rejimida chizish — ishni barbod qilishning eng tezkor yo'lidir.",
                paragraph3: "Podkastda ko'tarilgan asosiy mavzular:",
                list: [
                    "RGB (ekran) va CMYK (print) o'rtasidagi asosiy farqlar",
                    "Nima uchun sRGB veb va mobil interfeyslar uchun standart hisoblanadi",
                    "Ranglar to'g'ri ko'rinishi uchun monitorni kalibrlash",
                    "Tayyor maketlarni raqamli va bosma formatlarga to'g'ri eksport qilish",
                ],
                paragraph4:
                    "Rang profillarini mukammal tushunish dizaynlaringiz har qanday ekranda va qog'ozda bir xil sifatda chiqishini ta'minlaydi.",
            },
        },
    },
    {
        id: 6,
        img: "/Image/HomePagePhoto/blogpostimg7.svg",
        tags: ["#startup", "#team_building", "#management"],
        author: {
            authorImg: "Image/courses-photo/people/tutor4.png",
            authorName: "Kristin Watson",
            authorJob: {
                en: "Curator of Marketing Course",
                ru: "Куратор курса по маркетингу",
                uz: "Marketing kursi kuratori",
            },
            socialLinks: {
                instagram: {
                    svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2" />
          </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://instagram.com/misterkhabibullayev",
                },
                twitter: {
                    svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
          </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://x.com/",
                },
                linkedIn: {
                    svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
          </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://uz.linkedin.com/",
                },
            },
        },
        en: {
            type: "Video",
            date: "July 15, 2020",
            category: "Management",
            duration: "45 min",
            title: "Startup: how to build a team that will live longer than a year",
            description:
                "Building a resilient startup culture, managing co-founder relationships, and hiring motivated talent to ensure long-term business survival.",
            action: "Watch",
            content: {
                leadTitle:
                    "Over 90% of startups fail within their first year, and internal co-founder or team conflict is one of the leading reasons behind this failure.",
                paragraph1:
                    "Building a startup team isn't just about hiring brilliant software engineers or marketers; it's about shared values, vision, and high adaptability.",
                paragraph2:
                    "In this session, experienced startup mentors break down equity splitting, building healthy company culture, and retaining key personnel.",
                quote: "A mediocre idea with an extraordinary team will always beat a groundbreaking idea with a dysfunctional team.",
                paragraph3: "Strategies to build a long-lasting startup team:",
                list: [
                    "Defining transparent roles, co-founder equity, and vesting schedules",
                    "Hiring for cultural alignment and problem-solving mindset over pure experience",
                    "Creating an environment of open feedback and psychological safety",
                    "Managing financial burn rate and maintaining team morale during hard pivots",
                ],
                paragraph4:
                    "Focus on strong foundation, shared trust, and clear delegation to make your startup thrive past its initial milestones.",
            },
        },
        ru: {
            type: "Видео",
            date: "15 июля 2020 г.",
            category: "Management",
            duration: "45 мин",
            title: "Стартап: как создать команду, которая проживет дольше года",
            description:
                "Строим устойчивую культуру стартапа, выстраиваем отношения между сооснователями и привлекаем сильных специалистов.",
            action: "Смотреть",
            content: {
                leadTitle:
                    "Более 90% стартапов закрываются в первый же год, и конфликты внутри команды или между сооснователями — одна из главных причин.",
                paragraph1:
                    "Создание команды стартапа — это не просто найм сильных разработчиков или маркетологов. Это объединение людей с общими ценностями и видением.",
                paragraph2:
                    "В этом видео спикеры благодаря собственному опыту разберут разделение долей (equity), формирование корпоративной культуры и удержание сотрудников.",
                quote: "Средняя идея с гениальной командой всегда победит гениальную идею с неорганизованной командой.",
                paragraph3: "Стратегии построения долговечной команды:",
                list: [
                    "Прозрачное распределение обязанностей, долей и вестинг-расписание",
                    "Найм людей по совпадению ценностей, а не только по профессиональному опыту",
                    "Создание атмосферы открытого фидбека и доверия",
                    "Поддержание морального духа команды во время пивотов (изменений курса)",
                ],
                paragraph4:
                    "Инвестируйте в доверие, прозрачность и системные процессы, чтобы ваш стартап перерос первый кризисный год и успешно развивался дальше.",
            },
        },
        uz: {
            type: "Video",
            date: "2020-yil 15-iyul",
            category: "Management",
            duration: "45 daqiqa",
            title: "Startap: bir yildan ortiq yashaydigan jamoani qanday tuzish kerak?",
            description:
                "Startapda mustahkam muhit yaratish, hamasoschilar (co-founders) o'rtasidagi munosabatlar va uzoq muddatli jamoani shakllantirish sirlari.",
            action: "Tomosha qilish",
            content: {
                leadTitle:
                    "Startaplarning 90% dan ortig'i birinchi yilning o'zidayoq tugatiladi. Jamoa ichidagi kelishmovchiliklar bu inqirozning eng asosiy sabablaridan biridir.",
                paragraph1:
                    "Startap jamoasini yig'ish shunchaki kuchli dasturchi va sotuvchilarni yollash emas, balki bir xil qadriyat va maqsadga ega insonlarni birlashtirishdir.",
                paragraph2:
                    "Ushbu videoda startap ta'sischilari ulushlarni (equity) to'g'ri taqsimlash, korporativ madaniyat va muhim xodimlarni ushlab qolish yo'llarini tushuntirib berishadi.",
                quote: "Ajoyib jamoaga ega o'rtacha g'oya, tarqoq jamoaga ega zo'r g'oyadan har doim ustun keladi.",
                paragraph3:
                    "Mustahkam va uzoq yashaydigan jamoa tuzish qoidalari:",
                list: [
                    "Hamasoschilar o'rtasida mas'uliyat va ulushlarni shaffof bo'lish (vesting)",
                    "Nomzodlarning nafaqat tajribasiga, balki ularning xarakteri va qadriyatlariga e'tibor berish",
                    "Jamoada ochiq muloqot va ishonch muhitini yaratish",
                    "Qiyin vaqtlarda va strategiya o'zgarganda jamoa ruhini yuqori ushlash",
                ],
                paragraph4:
                    "Ishonch va to'g'ri taqsimlangan mas'uliyat startapingiz birinchi yildan muvaffaqiyatli o'tib, yirik kompaniyaga aylanishini ta'minlaydi.",
            },
        },
    },
    {
        id: 7,
        img: "/Image/HomePagePhoto/blogpostimg8.svg",
        tags: ["#marketing", "#customer_loyalty", "#business"],
        author: {
            authorImg: "Image/courses-photo/people/tutor4.png",
            authorName: "Kristin Watson",
            authorJob: {
                en: "Curator of Marketing Course",
                ru: "Куратор курса по маркетингу",
                uz: "Marketing kursi kuratori",
            },
            socialLinks: {
                instagram: {
                    svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2" />
          </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://instagram.com/misterkhabibullayev",
                },
                twitter: {
                    svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
          </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://x.com/",
                },
                linkedIn: {
                    svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
          </svg>`,
                    hoverColor: "hover:text-[#FF3F3A]",
                    link: "https://uz.linkedin.com/",
                },
            },
        },
        en: {
            type: "Article",
            date: "July 9, 2020",
            category: "Marketing",
            duration: "8 min",
            title: "How to get customers to love your business from the start",
            description:
                "Building brand loyalty from day one requires genuine customer service, clear communication, and delivering unexpected value.",
            action: "Read",
            content: {
                leadTitle:
                    "First impressions matter immensely in business. Acquiring a new customer costs 5x more than retaining an existing one.",
                paragraph1:
                    "To win the loyalty of your first customers, you must deliver an exceptional onboarding experience and show that you genuinely care about their needs.",
                paragraph2:
                    "Focus on creating 'wow' moments during the user journey, whether through personalized support, surprising bonuses, or active responsiveness.",
                quote: "Loyalty isn't built on discounts; it is built on exceptional experiences and genuine human care.",
                paragraph3:
                    "Actionable strategies to build brand advocates from scratch:",
                list: [
                    "Exceeding expectations on your product or service delivery",
                    "Building personal relationships and humanizing your brand voice",
                    "Resolving customer complaints rapidly and turned issues into positive outcomes",
                    "Implementing early customer feedback loops to show clients their voice matters",
                ],
                paragraph4:
                    "Treat your first hundred customers like royalty, and they will become your most effective organic ambassadors.",
            },
        },
        ru: {
            type: "Статья",
            date: "9 июля 2020 г.",
            category: "Marketing",
            duration: "8 мин",
            title: "Как заставить клиентов полюбить ваш бизнес с самого начала",
            description:
                "Построение лояльности к бренду с первого дня требует искреннего сервиса, четкой коммуникации и создания дополнительных ценностей.",
            action: "Читать",
            content: {
                leadTitle:
                    "Первое впечатление имеет решающее значение в бизнесе. Привлечение нового клиента стоит в 5 раз дороже, чем удержание текущего.",
                paragraph1:
                    "Чтобы завоевать лояльность первых покупателей, вы должны предоставить им выдающийся опыт общения и показать искреннюю заботу.",
                paragraph2:
                    "Сосредоточьтесь на создании 'WOW-эффектов': персональная поддержка, приятные бонусы и молниеносная реакция на запросы.",
                quote: "Лояльность строится не на скидках, а на исключительных впечатлениях и человеческом отношении.",
                paragraph3: "Практические шаги для завоевания любви клиентов:",
                list: [
                    "Превышение ожиданий клиентов при доставке или оказании услуг",
                    "Персонализация общения и 'очеловечивание' вашего бренда",
                    "Быстрое решение проблем и превращение негатива в лояльность",
                    "Учет отзывов первых клиентов для улучшения сервиса",
                ],
                paragraph4:
                    "Относитесь к своим первым ста клиентам как к самым VIP-персонам, и они станут лучшими амбассадорами вашего бизнеса.",
            },
        },
        uz: {
            type: "Maqola",
            date: "2020-yil 9-iyul",
            category: "Marketing",
            duration: "8 daqiqa",
            title: "Mijozlar biznesingizni birinchi kundanoq yaxshi ko'rib qolishiga qanday erishish mumkin?",
            description:
                "Dastlabki bosqichdanoq brendga bo'lgan sadoqatni shakllantirish, samimiy servis va kutilganidan ortiqroq qiymat berish usullari.",
            action: "O'qish",
            content: {
                leadTitle:
                    "Biznesda birinchi taassurot juda katta rol o'ynaydi. Yangi mijozni jalb qilish mavjud mijozni saqlab qolishdan 5 baravar qimmatroqqa tushadi.",
                paragraph1:
                    "Dastlabki xaridorlaringiz sadoqatini qozonish uchun ularga ajoyib servis ko'rsatishingiz va ularning ehtiyojlariga befarq emasligingizni isbotlashingiz kerak.",
                paragraph2:
                    "Mijozda 'WOW' effektini his qildiring: kutilmagan kichik bonuslar berish, tezkor qo'llab-quvvatlash va samimiy muloqot orqali ularni hayratda qoldiring.",
                quote: "Mijoz sadoqati chegirmalar bilan emas, balki ajoyib taassurotlar va insoniy e'tibor orqali quriladi.",
                paragraph3:
                    "Mijozlar sevgisini qozonish uchun amaliy qadamlar:",
                list: [
                    "Mahsulot yoki xizmat ko'rsatishda mijoz kutganidan ham ko'proq qiymat berish",
                    "Muloqotni shaxsiylashtirish va brendga insoniy qiyofa berish",
                    "Muammolar va e'tirozlarni tezda hal qilib, salbiyni ijobiyga aylantirish",
                    "Birinchi mijozlar fikrini tinglash va ularning takliflarini inobatga olish",
                ],
                paragraph4:
                    "Dastlabki yuzta mijozingizga eng qadrli insonday munosabatda bo'ling, shunda ularning o'zi brendingizning bepul va eng yaxshi targ'ibotchisiga aylanadi.",
            },
        },
    },
];
