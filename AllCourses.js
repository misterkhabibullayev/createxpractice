export const allCourses = [
    {
        id: 0,
        backColor: "#F52F6E",
        curatorTitleImg: "/Image/HomePagePhoto/curatorSuleyma.png",
        coursePrice: "1000",
        curator: {
            curatorSulyemanMainImage: "/Image/HomePagePhoto/curatorSuleyma.png",
            curatorName: "Suleyman Amanov",
            courseLessonInfo: [
                {
                    lessonIcon: "/Image/course-images/tutor-info/Star.png",
                    lessonInfo: "4.9 rate",
                },
                {
                    lessonIcon: "/Image/course-images/tutor-info/Play.png",
                    lessonInfo: "4 courses",
                },
                {
                    lessonIcon: "/Image/course-images/tutor-info/Profile.png",
                    lessonInfo: "350 students",
                },
            ],
            socialLinks: [
                {
                    link: "https://www.linkedin.com/",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
                    </svg>`,
                    hoverColor: "hover:text-red-500",
                },
                {
                    link: "https://www.behance.net/",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" class='w-6 h-6' viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="currentColor" d="M7.443 5.35c.639 0 1.23.05 1.77.198c.541.099.984.297 1.377.544q.591.371.885 1.039c.197.445.296.99.296 1.583c0 .693-.148 1.286-.492 1.731c-.295.446-.787.841-1.377 1.138c.836.248 1.475.693 1.869 1.286s.639 1.336.639 2.177c0 .693-.148 1.286-.394 1.781c-.245.495-.639.94-1.082 1.237a5.1 5.1 0 0 1-1.573.692c-.59.149-1.18.248-1.77.248H1V5.35zm-.394 5.54c.541 0 .984-.148 1.328-.395s.492-.693.492-1.237c0-.297-.05-.594-.148-.791s-.246-.347-.442-.495a2.4 2.4 0 0 0-.64-.247c-.246-.05-.491-.05-.787-.05H4v3.216zm.148 5.838c.295 0 .59-.05.836-.099c.246-.05.492-.148.688-.297a1.8 1.8 0 0 0 .492-.544c.098-.247.197-.544.197-.89c0-.693-.197-1.188-.59-1.534c-.394-.297-.935-.445-1.574-.445H4v3.81zm9.492-.05q.59.594 1.77.594c.541 0 1.033-.148 1.426-.395q.591-.446.738-.891h2.41c-.394 1.187-.984 2.028-1.77 2.572c-.788.495-1.722.792-2.853.792a5.8 5.8 0 0 1-2.115-.396a3.9 3.9 0 0 1-1.574-1.088a3.9 3.9 0 0 1-.983-1.633c-.246-.643-.345-1.335-.345-2.127c0-.742.099-1.434.345-2.078a5.3 5.3 0 0 1 1.033-1.682c.442-.445.983-.84 1.573-1.088a5.5 5.5 0 0 1 2.066-.396c.836 0 1.574.149 2.213.495c.64.346 1.131.742 1.524 1.336c.394.544.69 1.187.886 1.88c.098.692.147 1.385.098 2.176H16c0 .792.295 1.534.689 1.93m3.098-5.194c-.344-.346-.885-.544-1.525-.544a2.34 2.34 0 0 0-1.082.247c-.295.149-.491.347-.688.545a1.3 1.3 0 0 0-.344.692c-.05.248-.099.445-.099.643h4.426c-.098-.742-.344-1.236-.688-1.583M15.459 6.29h5.508v1.336H15.46z" />
                    </svg>`,
                    hoverColor: "hover:text-red-500",
                },
                {
                    link: "https://www.facebook.com/",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" class='w-6 h-6' viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="currentColor" d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22 22 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202z" />
                    </svg>`,
                    hoverColor: "hover:text-red-500",
                },
                {
                    link: "https://x.com",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" class='w-6 h-6' viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
                    </svg>`,
                    hoverColor: "hover:text-red-500",
                },
            ],
            en: {
                jobs: "Senior UX designer in IT Product Company",
                aboutCurator:
                    "Transform your creative passion into a professional UX career. As your mentor, I will guide you through the product development lifecycle using real industry standards. Learn to think like a designer, solve complex problems, and validate decisions. Build a striking portfolio with real-world briefs, research, and high-fidelity prototyping. Master technical skills, collaborate with peers, and unlock your potential in the global IT market.If you would like to adjust this, let me know if you want to emphasize specific details (like mentoring or portfolios) or if you need a different tone (such as more casual or highly corporate).",
            },
            uz: {
                jobs: "IT-mahsulotlar kompaniyasida yetakchi (Senior) UX dizayner",
                aboutCurator:
                    "Raqamli mahsulotlarni loyihalash va foydalanuvchi tajribasini (UX) yaxshilash bo'yicha 7 yildan ortiq tajribaga ega mutaxassis. Faoliyati davomida yirik xalqaro loyihalar, murakkab mobil ilovalar va veb-platformalar arxitekturasini ishlab chiqqan. Foydalanuvchilar ehtiyojlarini tadqiq qilish, dizayn tizimlarini (Design Systems) qurish va biznes maqsadlarini qulay, tushunarli vizual yechimlarga aylantirish bo'yicha katta tajribaga ega.",
            },
            ru: {
                jobs: "Senior UX-дизайнер в продуктовой IT-компании",
                aboutCurator:
                    "Специалист с более чем 7-летним опытом в проектировании цифровых продуктов и оптимизации пользовательского опыта (UX). За свою карьеру разработал архитектуру для крупных международных проектов, сложных мобильных приложений и веб-платформ. Специализируется на исследованиях пользователей, построении дизайн-систем (Design Systems) и превращении бизнес-целей в интуитивно понятные и удобные интерфейсные решения.",
            },
        },
        en: {
            category: "Design",
            curator: "Suleyman Amanov",
            courseTitle: "User Experience. Human-centered Design",
            courseDescription:
                "Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque",
            willBeLearn: {
                1: "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
                2: "Vulputate placerat amet pulvinar lorem nisl.",
                3: "Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.",
                4: "Etiam duis lobortis in fames ultrices commodo nibh.",
                5: "Fringilla in nec risus congue venenatis pretium posuere nec.",
                6: "Cursus eu pretium, vulputate tempus quam massa sed at.",
            },
            courseLesson: {
                lesson1: {
                    lesson: "Lesson 1",
                    title: "Aliquet lectus urna viverra in odio.",
                    description:
                        "Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.",
                },
                lesson2: {
                    lesson: "Lesson 2",
                    title: "Orci commodo, viverra orci mollis ut euismod.",
                    description:
                        "Ipsum aspernatur officiis, obcaecati modi excepturi, consectetur adipisicing elit. Inventore porro molestiae nihil ad aut atque tempora tempore fugiat ipsum aspernatur officiis, obcaecati modi excepturi, aliquid reprehenderit? Sint ullam magni molestias?",
                },
                lesson3: {
                    lesson: "Lesson 3",
                    title: "Sagittis vitae facilisi rutrum amet mauris.",
                    description:
                        "Doloribus quo sed beatae provident placeat voluptate corporis eligendi maxime laborum reprehenderit voluptatibus obcaecati recusandae illum, delectus ipsum ab vitae cum excepturi? Illo ad id mollitia, sit obcaecati qui laborum iste minima deserunt consequatur sunt neque aliquid, error aspernatur!",
                },
                lesson4: {
                    lesson: "Lesson 4",
                    title: "In id dolor quis nunc, urna hendrerit pharetra.",
                    desctiption:
                        "Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.",
                },
                lesson5: {
                    lesson: "Lesson 5",
                    title: "Est, ut tempus id rutrum facilisi.",
                    description:
                        "Doloribus quo sed beatae provident placeat voluptate corporis eligendi maxime laborum reprehenderit voluptatibus obcaecati recusandae illum, delectus ipsum ab vitae cum excepturi? Illo ad id mollitia, sit obcaecati qui laborum iste minima deserunt consequatur sunt neque aliquid, error aspernatur!",
                },
                lesson6: {
                    lesson: "Lesson 6",
                    title: "Amet nec in pellentesque.",
                    description:
                        "Ipsum aspernatur officiis, obcaecati modi excepturi, consectetur adipisicing elit. Inventore porro molestiae nihil ad aut atque tempora tempore fugiat ipsum aspernatur officiis, obcaecati modi excepturi, aliquid reprehenderit? Sint ullam magni molestias?",
                },
                lesson7: {
                    lesson: "Lesson 7",
                    title: "Massa vel arcu mauris, id vel rhoncus mattis quis.",
                    description:
                        "Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.",
                },
                lesson8: {
                    lesson: "Lesson 8",
                    title: "Neque, cursus sapien nullam id.",
                    description:
                        "Doloribus quo sed beatae provident placeat voluptate corporis eligendi maxime laborum reprehenderit voluptatibus obcaecati recusandae illum, delectus ipsum ab vitae cum excepturi? Illo ad id mollitia, sit obcaecati qui laborum iste minima deserunt consequatur sunt neque aliquid, error aspernatur!",
                },
            },
            forWhom: {
                1: "Specialists with more than 1 year of active work experience",
                2: "Mobile app designers who want to improve their skills in solving business problems, creating and testing human-centered interfaces",
                3: "Professional designers who want to feel more confident in UX",
                4: "Specialists who would like to structure their knowledge, fill in the gaps",
            },

            coursesStartedDate: "Sept 7",
            coursesEndedDate: "Nov 2",
            coursesDescription:
                "Metus turpis sit lorem lacus, in elit tellus lacus.",
            coursesDurationMonth: "2 months",
            coursesDurationLesson: "8 lessons",
            coursesDurationDescription:
                "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.",
            coursesPerMonth: "per month",
            coursesPerMonthDescription:
                "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
        },
        uz: {
            category: "Dizayn",
            curator: "Suleyman Amanov",
            courseTitle: "User Experience. Inson omiliga yo'naltirilgan dizayn",
            courseDescription:
                "Ushbu kurs foydalanuvchilar ehtiyojlarini chuqur tahlil qilish va ular uchun qulay, tushunarli hamda samarali raqamli mahsulotlar yaratishni o'rgatadi. Siz inson omiliga asoslangan dizayn (Human-centered Design) metodologiyasini o'rganasiz, mahsulot g'oyasidan tortib tayyor interaktiv prototipgacha bo'lgan to'liq jarayonni amaliyotda sinab ko'rasiz.",
            willBeLearn: {
                1: "Foydalanuvchi muammolarini tadqiq qilish va tahlil qilish usullari.",
                2: "Persona shakllantirish va Customer Journey Map (CJM) loyihalash.",
                3: "Figma dasturida interaktiv prototiplar va wireframe'lar yaratish.",
                4: "Dizayn yechimlarini real foydalanuvchilarda testlash (Usability Testing).",
                5: "Biznes maqsadlarini foydalanuvchi ehtiyojlari bilan uyg'unlashtirish.",
                6: "Zamonaviy UX tadqiqot metodologiyalari va tahlil vositalari.",
            },
            courseLesson: {
                lesson1: {
                    lesson: "1-Dars",
                    title: "UX va inson omiliga yo'naltirilgan dizayn asoslari",
                    description:
                        "Dizayn fikrlash (Design Thinking) va HCD (Human-centered Design) prinsiplari bilan tanishamiz. Loyihani boshlash, foydalanuvchi muammolarini aniqlash va tadqiqot rejasini tuzishni o'rganamiz.",
                },
                lesson2: {
                    lesson: "2-Dars",
                    title: "Foydalanuvchilarni tadqiq qilish va Persona yaratish",
                    description:
                        "Suhbatlar o'tkazish, so'rovnomalar tuzish va kuzatuv usullarini o'rganamiz. To'plangan ma'lumotlar asosida maqsadli auditoriya arxetipi — Personani shakllantirishni o'zlashtiramiz.",
                },
                lesson3: {
                    lesson: "3-Dars",
                    title: "Customer Journey Map (CJM) va axborot arxitekturasi",
                    description:
                        "Foydalanuvchining mahsulot bilan to'qnashish yo'lini (CJM) chizamiz. Sayt yoki ilovaning tarkibiy tuzilishi va navigatsiyasini (Information Architecture) mantiqiy loyihalashtiramiz.",
                },
                lesson4: {
                    lesson: "4-Dars",
                    title: "Wireframing va past aniqlikdagi prototiplash",
                    description:
                        "G'oyalarni tezkor vizuallashtirish. Qog'ozda eskizlar chizish va Figma-da vizual elementlarsiz, faqat funksional bloklardan iborat wireframe-larni qurishni o'rganamiz.",
                },
                lesson5: {
                    lesson: "5-Dars",
                    title: "Figma-da yuqori aniqlikdagi interaktiv prototiplar",
                    description:
                        "Dizaynni jonlantirish: ekranlararo o'tishlar, animatsiyalar va mikro-aloqalarni (micro-interactions) sozlash orqali xuddi tayyor ilovadek ishlaydigan prototip yaratamiz.",
                },
                lesson6: {
                    lesson: "6-Dars",
                    title: "Foydalanish qulayligini sinash (Usability Testing)",
                    description:
                        "Yaratilgan prototipni real foydalanuvchilar yordamida testdan o'tkazamiz. Ssenariylar tuzish, xatolarni aniqlash va dizaynni test natijalari asosida yaxshilashni o'rganamiz.",
                },
                lesson7: {
                    lesson: "7-Dars",
                    title: "UI dizayn tizimlari (Design Systems) va uyg'unlik",
                    description:
                        "Loyihaning vizual qismini tizimlashtirish: komponentlar, ranglar palitrasi, tipografika va UI-kitlar bilan ishlash orqali dizaynni dasturchilarga topshirishga tayyorlaymiz.",
                },
                lesson8: {
                    lesson: "8-Dars",
                    title: "Kurs ishi taqdimoti va UX portfolioni shakllantirish",
                    description:
                        "Tayyorlangan amaliy loyihani himoya qilish. Behance va Dribbble uchun keyslar tayyorlash hamda ish beruvchilarga taqdim etish qoidalarini ko'rib chiqamiz.",
                },
            },
            forWhom: {
                1: "1 yildan ortiq faol ish tajribasiga ega bo'lgan mutaxassislar",
                2: "Biznes muammolarini hal qilish, insonga yo'naltirilgan interfeyslarni yaratish va sinovdan o'tkazish bo'yicha ko'nikmalarini oshirmoqchi bo'lgan mobil ilova dizaynerlari",
                3: "UX sohasida o'ziga bo'lgan ishonchni mustahkamlamoqchi bo'lgan professional dizaynerlar",
                4: "O'z bilimlarini tizimlashtirishni va mavjud kamchiliklarni to'ldirishni xohlaydigan mutaxassislar",
            },
            coursesStartedDate: "7-Sentabr",
            coursesEndedDate: "2-Noyabr",
            coursesDescription:
                "Sizni qisqa muddat ichida raqamli mahsulotlar yaratishda eng talabgir UX mutaxassisiga aylantiradigan intensiv amaliy dastur.",
            coursesDurationMonth: "2 oy",
            coursesDurationLesson: "8 ta dars",
            coursesDurationDescription:
                "Har bir dars real keyslar tahlili, amaliy topshiriqlar va mentor yordami bilan mustahkamlanadi.",
            coursesPerMonth: "oyiga",
            coursesPerMonthDescription:
                "Kurs to'lovini qulay tarzda har oy bo'lib to'lash imkoniyati mavjud. Hech qanday yashirin to'lovlarsiz.",
        },
        ru: {
            category: "Дизайн",
            curator: "Сулейман Аманов",
            courseTitle: "User Experience. Человекоориентированный дизайн",
            courseDescription:
                "Этот курс научит вас глубоко анализировать потребности пользователей и создавать для них удобные, интуитивно понятные и эффективные цифровые продукты. Вы изучите методологию проектирования, ориентированного на человека (Human-centered Design), и пройдете весь путь от идеи продукта до готового интерактивного прототипа.",
            willBeLearn: {
                1: "Методы исследования и глубокого анализа проблем пользователей.",
                2: "Создание персонажей и проектирование карт пути пользователя (CJM).",
                3: "Разработка интерактивных прототипов и вайрфреймов в Figma.",
                4: "Тестирование дизайн-решений на реальных пользователях (Usability Testing).",
                5: "Синхронизация бизнес-целей продукта с потребностями аудитории.",
                6: "Современные методологии UX-исследований и инструменты анализа.",
            },
            courseLesson: {
                lesson1: {
                    lesson: "Урок 1",
                    title: "Основы UX и человекоориентированного дизайна",
                    description:
                        "Знакомство с дизайн-мышлением (Design Thinking) и принципами HCD. Учимся стартовать проект, формулировать гипотезы и составлять план будущих исследований.",
                },
                lesson2: {
                    lesson: "Урок 2",
                    title: "Исследования пользователей и создание Персон",
                    description:
                        "Методы проведения интервью, опросов и наблюдений. На основе собранных качественных данных учимся создавать архетипы целевой аудитории — Персоны.",
                },
                lesson3: {
                    lesson: "Урок 3",
                    title: "Customer Journey Map (CJM) и информационная архитектура",
                    description:
                        "Визуализируем путь пользователя при взаимодействии с продуктом. Проектируем логическую структуру разделов и навигацию (Information Architecture) сайта или приложения.",
                },
                lesson4: {
                    lesson: "Урок 4",
                    title: "Вайрфрейминг и прототипирование низкой детализации",
                    description:
                        "Быстрая визуализация идей. Учимся рисовать эскизы интерфейса на бумаге и строить функциональные блоки (wireframes) в Figma без отвлечения на визуальный стиль.",
                },
                lesson5: {
                    lesson: "Урок 5",
                    title: "Интерактивные прототипы высокой детализации в Figma",
                    description:
                        "Оживляем дизайн: настраиваем переходы между экранами, анимацию и микро-взаимодействия для создания симуляции работы реального приложения.",
                },
                lesson6: {
                    lesson: "Урок 6",
                    title: "Юзабилити-тестирование (Usability Testing)",
                    description:
                        "Проводим тестирование готового прототипа на реальных людях. Составляем сценарии тестов, находим критические баги интерфейса и итеративно улучшаем дизайн.",
                },
                lesson7: {
                    lesson: "Урок 7",
                    title: "Дизайн-системы (Design Systems) и подготовка к разработке",
                    description:
                        "Систематизация визуального языка проекта. Работа с компонентами, автолейаутами, стилями и UI-китами для бесшовной передачи макетов в отдел разработки.",
                },
                lesson8: {
                    lesson: "Урок 8",
                    title: "Презентация курсового проекта и оформление UX-портфолио",
                    description:
                        "Защита готового практического проекта. Разбор правил создания кейсов на Behance и Dribbble, а также рекомендации по прохождению собеседований.",
                },
            },
            forWhom: {
                1: "Специалисты с опытом активной работы более 1 года",
                2: "Дизайнеры мобильных приложений, желающие улучшить навыки решения бизнес-задач, создания и тестирования человекоцентричных интерфейсов",
                3: "Профессиональные дизайнеры, которые хотят чувствовать себя увереннее в UX",
                4: "Специалисты, которые хотят структурировать свои знания и заполнить пробелы",
            },
            coursesStartedDate: "7 сентября",
            coursesEndedDate: "2 ноября",
            coursesDescription:
                "Интенсивная практическая программа, которая за короткий срок сделает вас востребованным UX-специалистом на рынке создания цифровых продуктов.",
            coursesDurationMonth: "2 месяца",
            coursesDurationLesson: "8 уроков",
            coursesDurationDescription:
                "Каждо занятие закрепляется анализом реальных кейсов, практическими заданиями и поддержкой ментора.",
            coursesPerMonth: "в месяц",
            coursesPerMonthDescription:
                "Доступна удобная возможность ежемесячной оплаты курса. Без скрытых комиссий и переплат.",
        },
    },
    {
        id: 1,
        backColor: "#03CEA4",
        curatorTitleImg: "Image/courses-photo/people/tutor1.png",
        coursePrice: "100",
        curator: {
            curatorSulyemanMainImage:
                "Image/HomePagePhoto/suleymanMainImage.png",
            curatorName: "Jerome Bell",
            rate: 4.8,
            courses: 3,
            students: 240,
            socialLinks: {
                facebook: "https://facebook.com/",
                be: "https://www.behance.net/",
                twitter: "https://x.com",
                linekdin: "https://uz.linkedin.com/",
            },
            en: {
                jobs: "Senior Marketing Specialist & Certified Google Ads Expert",
                aboutCurator:
                    "Experienced digital marketer specializing in search engine marketing, pay-per-click advertising, and conversion rate optimization with over 6 years of industry experience.",
            },
            uz: {
                jobs: "Katta marketing mutaxassisi va sertifikatlangan Google Ads eksperti",
                aboutCurator:
                    "Qidiruv tizimi marketingi, PPC (klik uchun to'lov) reklamalari va konversiyani optimallashtirish bo'yicha 6 yildan ortiq tajribaga ega bo'lgan tajribali raqamli marketolog.",
            },
            ru: {
                jobs: "Старший интернет-маркетолог и сертифицированный эксперт по Google Ads",
                aboutCurator:
                    "Опытный специалист по digital-маркетингу с более чем 6-летним стажем. Специализируется на поисковом маркетинге, PPC-рекламе и оптимизации конверсий.",
            },
        },
        en: {
            category: "Marketing",
            curator: "Jerome Bell",
            courseTitle: "The Ultimate Google Ads Training Course",
            courseDescription:
                "Master Google Ads from scratch. Learn how to create highly profitable campaigns, optimize budget, perform keyword research, and track conversions effectively.",
            willBeLearn: {
                1: "Set up Google Ads campaigns from absolute scratch.",
                2: "Find profitable keywords and avoid negative ones.",
                3: "Optimize bidding strategies to get maximum ROI.",
                4: "Write compelling ad copies that drive high CTR.",
                5: "Track conversions and analyze Google Analytics data.",
                6: "Remarketing techniques to bring back lost visitors.",
            },
            courseLesson: {
                lesson1: {
                    lesson: "Lesson 1",
                    title: "Introduction to Google Ads and Search Engine Marketing",
                    description:
                        "Understanding the basics of how PPC auction works and setting up your Google Ads account.",
                },
                lesson2: {
                    lesson: "Lesson 2",
                    title: "Keyword Research and Campaign Structure",
                    description:
                        "How to use Google Keyword Planner and structure your ad groups for maximum relevance.",
                },
                lesson3: {
                    lesson: "Lesson 3",
                    title: "Creating High-Converting Search Ads",
                    description:
                        "Writing effective headlines, descriptions, and utilizing ad extensions.",
                },
                lesson4: {
                    lesson: "Lesson 4",
                    title: "Bidding Strategies and Budget Management",
                    description:
                        "Understanding manual vs automated bidding and how to control your daily spending.",
                },
                lesson5: {
                    lesson: "Lesson 5",
                    title: "Conversion Tracking Setup",
                    description:
                        "How to track leads, purchases, and form submissions using Google Tag Manager.",
                },
                lesson6: {
                    lesson: "Lesson 6",
                    title: "Optimizing Campaigns and Quality Score",
                    description:
                        "How to improve your Quality Score to lower CPC and rank higher.",
                },
                lesson7: {
                    lesson: "Lesson 7",
                    title: "Display and Remarketing Campaigns",
                    description:
                        "Setting up visual banner ads and retargeting people who already visited your site.",
                },
                lesson8: {
                    lesson: "Lesson 8",
                    title: "Reporting and Client Management",
                    description:
                        "Creating professional performance reports and general course wrap-up.",
                },
            },
            forWhom: {
                1: "Small business owners looking to grow their sales online",
                2: "Beginner digital marketers who want to add Google Ads to their skill set",
                3: "Freelancers wishing to offer advertising services to clients",
                4: "Anyone interested in paid traffic and online advertising",
            },
            coursesStartedDate: "September 10",
            coursesEndedDate: "November 5",
            coursesDescription:
                "An intensive practical guide to scaling businesses using Google's advertising network.",
            coursesDurationMonth: "2 months",
            coursesDurationLesson: "8 lessons",
            coursesDurationDescription:
                "Each lesson includes a step-by-step screen share, practical homework, and campaign reviews.",
            coursesPerMonth: "per month",
            coursesPerMonthDescription:
                "Simple monthly billing. Pause or cancel your subscription anytime.",
        },
        uz: {
            category: "Marketing",
            curator: "Jerome Bell",
            courseTitle: "Mukammal Google Ads o'quv kursi",
            courseDescription:
                "Google Ads reklamalarini noldan boshlab professional darajada o'rganing. Yuqori daromadli kampaniyalar yaratish, byudjetni optimallashtirish va kalit so'zlarni samarali tahlil qilishni o'zlashtiring.",
            willBeLearn: {
                1: "Noldan boshlab Google Ads reklama kampaniyalarini sozlash.",
                2: "Daromadli kalit so'zlarni topish va keraksizlarini (negative keywords) istisno qilish.",
                3: "Maksimal foyda (ROI) uchun taklif strategiyalarini (bidding) optimallashtirish.",
                4: "Kliklanish darajasi (CTR) yuqori bo'lgan jozibador reklama matnlarini yozish.",
                5: "Konversiyalarni kuzatish va Google Analytics ma'lumotlarini tahlil qilish.",
                6: "Saytni tark etgan mijozlarni qaytarish uchun remarketing usullari.",
            },
            courseLesson: {
                lesson1: {
                    lesson: "1-Dars",
                    title: "Google Ads va qidiruv tizimi marketingiga kirish",
                    description:
                        "PPC auksion tizimi qanday ishlashini tushunish va Google Ads hisobini to'g'ri sozlash.",
                },
                lesson2: {
                    lesson: "2-Dars",
                    title: "Kalit so'zlarni tahlil qilish va kampaniya tuzilishi",
                    description:
                        "Google Keyword Planner-dan foydalanish va maksimal samaradorlik uchun reklama guruhlarini yaratish.",
                },
                lesson3: {
                    lesson: "3-Dars",
                    title: "Konversiyasi yuqori bo'lgan qidiruv reklamalarini yaratish",
                    description:
                        "Maftunkor sarlavhalar va tavsiflar yozish, reklama kengaytmalari (extensions) bilan ishlash.",
                },
                lesson4: {
                    lesson: "4-Dars",
                    title: "Takliflar strategiyasi va byudjetni boshqarish",
                    description:
                        "Qo'lda va avtomatik boshqariladigan takliflar turlari hamda kunlik xarajatlarni nazorat qilish.",
                },
                lesson5: {
                    lesson: "5-Dars",
                    title: "Konversiyalarni kuzatishni sozlash (Conversion Tracking)",
                    description:
                        "Google Tag Manager yordamida saytdagi xaridlar va arizalarni hisobga olish tizimini o'rnatish.",
                },
                lesson6: {
                    lesson: "6-Dars",
                    title: "Kampaniyalarni va Sifat ko'rsatkichini (Quality Score) yaxshilash",
                    description:
                        "Klik narxini (CPC) pasaytirish va reklamani yuqori o'ringa olib chiqish sirlari.",
                },
                lesson7: {
                    lesson: "7-Dars",
                    title: "KMS (Display) va Remarketing kampaniyalari",
                    description:
                        "Bannerli vizual reklamalar va saytga avval kirgan foydalanuvchilar bilan qayta aloqa o'rnatish.",
                },
                lesson8: {
                    lesson: "8-Dars",
                    title: "Hisobotlar tayyorlash va mijozlar bilan ishlash",
                    description:
                        "Professional natija hisobotlarini tayyorlash va umumiy kurs yakunlari.",
                },
            },
            forWhom: {
                1: "Onlayn sotuvlarini oshirmoqchi bo'lgan biznes egalari",
                2: "Google Ads xizmatini o'z ko'nikmalariga qo'shmoqchi bo'lgan yangi marketologlar",
                3: "Mijozlarga reklama xizmati ko'rsatishni xohlovchi frilanserlar",
                4: "Pullik trafik va onlayn reklama sohasiga qiziquvchi har bir kishi",
            },
            coursesStartedDate: "10-Sentabr",
            coursesEndedDate: "5-Noyabr",
            coursesDescription:
                "Google reklama tarmog'idan foydalangan holda biznesni kengaytirish bo'yicha intensiv amaliy dastur.",
            coursesDurationMonth: "2 oy",
            coursesDurationLesson: "8 ta dars",
            coursesDurationDescription:
                "Har bir dars amaliy topshiriqlar, real keyslar tahlili va reklama hisoblarini birgalikda sozlashni o'z ichiga oladi.",
            coursesPerMonth: "oyiga",
            coursesPerMonthDescription:
                "Kurs to'lovini qulay tarzda har oy bo'lib to'lash imkoniyati mavjud. Hech qanday yashirin to'lovlarsiz.",
        },
        ru: {
            category: "Маркетинг",
            curator: "Джером Белл",
            courseTitle: "Полный практический курс по Google Ads",
            courseDescription:
                "Освойте Google Ads с нуля. Научитесь создавать прибыльные рекламные кампании, оптимизировать бюджет, проводить аудит ключевых слов и отслеживать конверсии.",
            willBeLearn: {
                1: "Настройка рекламных кампаний в Google Ads с абсолютного нуля.",
                2: "Поиск эффективных ключевых слов и работа с минус-словами.",
                3: "Оптимизация ставок для получения максимальной окупаемости инвестиций (ROI).",
                4: "Написание кликабельных рекламных объявлений (высокий CTR).",
                5: "Настройка отслеживания конверсий и интеграция с Google Analytics.",
                6: "Запуск ремаркетинга для возврата ушедших пользователей.",
            },
            courseLesson: {
                lesson1: {
                    lesson: "Урок 1",
                    title: "Введение в Google Ads и основы контекстной рекламы",
                    description:
                        "Принципы работы аукциона PPC и базовая настройка рекламного аккаунта.",
                },
                lesson2: {
                    lesson: "Урок 2",
                    title: "Подбор семантики и структура кампании",
                    description:
                        "Работа с Google Keyword Planner и логическая организация групп объявлений.",
                },
                lesson3: {
                    lesson: "Урок 3",
                    title: "Создание эффективных поисковых объявлений",
                    description:
                        "Написание заголовков, текстов и использование расширений объявлений.",
                },
                lesson4: {
                    lesson: "Урок 4",
                    title: "Стратегии назначения ставок и управление бюджетом",
                    description:
                        "Разбор ручного и автоматического управления ставками, контроль расходов.",
                },
                lesson5: {
                    lesson: "Урок 5",
                    title: "Настройка отслеживания конверсий",
                    description:
                        "Установка кодов отслеживания лидов и покупок через Google Tag Manager.",
                },
                lesson6: {
                    lesson: "Урок 6",
                    title: "Оптимизация кампаний и Показатель качества",
                    description:
                        "Как повысить показатель качества (Quality Score) для снижения стоимости клика.",
                },
                lesson7: {
                    lesson: "Урок 7",
                    title: "Баннерная реклама (КМС) и Ремаркетинг",
                    description:
                        "Создание визуальных объявлений и возвращение аудитории на сайт.",
                },
                lesson8: {
                    lesson: "Урок 8",
                    title: "Аналитика, отчетность и ведение клиентов",
                    description:
                        "Сбор профессиональной отчетности и защита финальных проектов.",
                },
            },
            forWhom: {
                1: "Владельцы бизнеса, стремящиеся увеличить онлайн-продажи самостоятельно",
                2: "Начинающие маркетологи, желающие освоить востребованный инструмент контекстной рекламы",
                3: "Фрилансеры, планирующие оказывать услуги по настройке трафика",
                4: "Все, кто хочет научиться эффективно работать с платным трафиком",
            },
            coursesStartedDate: "10 сентября",
            coursesEndedDate: "5 ноября",
            coursesDescription:
                "Интенсивный практический курс по масштабированию бизнеса в рекламной сети Google.",
            coursesDurationMonth: "2 месяца",
            coursesDurationLesson: "8 уроков",
            coursesDurationDescription:
                "Каждое занятие сопровождается разбором интерфейса, практической домашней работой и проверкой ваших кампаний.",
            coursesPerMonth: "в месяц",
            coursesPerMonthDescription:
                "Доступна удобная ежемесячная оплата. Без скрытых комиссий и переплат.",
        },
    },
    {
        id: 2,
        backColor: "#5A87FC",
        curatorTitleImg: "Image/courses-photo/people/tutor2.png",
        coursePrice: "480",
        curator: {
            curatorSulyemanMainImage:
                "Image/HomePagePhoto/suleymanMainImage.png",
            curatorName: "Marvin McKinney",
            rate: 4.9,
            courses: 5,
            students: 420,
            socialLinks: {
                facebook: "https://facebook.com/",
                be: "https://www.behance.net/",
                twitter: "https://x.com",
                linekdin: "https://uz.linkedin.com/",
            },
            en: {
                jobs: "Director of Product at Global Tech Hub",
                aboutCurator:
                    "A seasoned product management leader with over 8 years of experience building and launching consumer-facing digital products on an international scale.",
            },
            uz: {
                jobs: "Global Tech Hub kompaniyasida Mahsulotlar bo'yicha direktor",
                aboutCurator:
                    "Xalqaro miqyosda raqamli mahsulotlarni yaratish va bozorga chiqarish bo'yicha 8 yildan ortiq tajribaga ega bo'lgan malakali mahsulot menejeri yetakchisi.",
            },
            ru: {
                jobs: "Директор по продукту (Product Director) в Global Tech Hub",
                aboutCurator:
                    "Опытный лидер в области управления продуктами с более чем 8-летним стажем запуска цифровых продуктов для массового рынка на международном уровне.",
            },
        },
        en: {
            category: "Management",
            curator: "Marvin McKinney",
            courseTitle: "Product Management Fundamentals",
            courseDescription:
                "Learn how to manage the complete lifecycle of a product. From ideation, market validation, MVP creation, agile development to launch and post-launch scaling.",
            willBeLearn: {
                1: "Conduct customer discovery and competitive analysis.",
                2: "Define product strategy, roadmap, and vision.",
                3: "Write clear product requirement documents (PRD).",
                4: "Define key metrics (AARRR, North Star Metric).",
                5: "Collaborate effectively with developers and UX/UI designers.",
                6: "Prioritize features using frameworks like RICE or Kano.",
            },
            courseLesson: {
                lesson1: {
                    lesson: "Lesson 1",
                    title: "Introduction to Product Management",
                    description:
                        "Understanding the role of a PM, the product lifecycle, and different company structures.",
                },
                lesson2: {
                    lesson: "Lesson 2",
                    title: "Market Research and User Needs Exploration",
                    description:
                        "How to conduct user interviews, identify pain points, and define user personas.",
                },
                lesson3: {
                    lesson: "Lesson 3",
                    title: "Defining Product Strategy and Roadmap",
                    description:
                        "Translating business goals into a clear roadmap and managing stakeholder expectations.",
                },
                lesson4: {
                    lesson: "Lesson 4",
                    title: "Feature Prioritization Frameworks",
                    description:
                        "Using RICE, MoSCoW, and Kano models to decide what to build next.",
                },
                lesson5: {
                    lesson: "Lesson 5",
                    title: "Agile, Scrum, and Working with Tech Teams",
                    description:
                        "Understanding sprints, writing user stories, and managing backlog items.",
                },
                lesson6: {
                    lesson: "Lesson 6",
                    title: "MVP Concept and Product Launch",
                    description:
                        "Defining minimum viable product scope and planning a successful Go-to-Market (GTM) strategy.",
                },
                lesson7: {
                    lesson: "Lesson 7",
                    title: "Product Analytics and Core Metrics",
                    description:
                        "Setting up funnel analytics, calculating LTV/CAC, and understanding user retention.",
                },
                lesson8: {
                    lesson: "Lesson 8",
                    title: "Final Product Pitch and Graduation",
                    description:
                        "Presenting your product concept to a panel of expert product managers.",
                },
            },
            forWhom: {
                1: "Project managers wishing to transition into Product Management",
                2: "Entrepreneurs wanting to validate their startup ideas before writing code",
                3: "Junior product managers seeking to structure their knowledge and learn framework standards",
                4: "Designers or developers looking to understand the business side of product development",
            },
            coursesStartedDate: "September 15",
            coursesEndedDate: "November 10",
            coursesDescription:
                "A comprehensive program preparing you to make data-driven, customer-centric product decisions.",
            coursesDurationMonth: "2 months",
            coursesDurationLesson: "8 lessons",
            coursesDurationDescription:
                "Practical templates, active mentorship, and structured feedback for every single module.",
            coursesPerMonth: "per month",
            coursesPerMonthDescription:
                "Convenient payment plans are available. No hidden fees.",
        },
        uz: {
            category: "Menejment",
            curator: "Marvin McKinney",
            courseTitle: "Mahsulot boshqaruvi (Product Management) asoslari",
            courseDescription:
                "Mahsulot hayotiy siklini to'liq boshqarishni o'rganing: g'oyadan tortib bozorni o'rganish, MVP yaratish, agile usulida ishlab chiqish hamda mahsulotni muvaffaqiyatli ishga tushirishgacha.",
            willBeLearn: {
                1: "Foydalanuvchi ehtiyojlarini o'rganish va raqobatchilar tahlilini o'tkazish.",
                2: "Mahsulot strategiyasi, yo'l xaritasi (Roadmap) va vizual konsepsiyasini belgilash.",
                3: "Mahsulot talablari hujjatini (PRD) to'g'ri shakllantirish.",
                4: "Asosiy metrikalarni (AARRR, North Star Metric) aniqlash va kuzatish.",
                5: "Dasturchilar va UI/UX dizaynerlar bilan samarali hamkorlik qilish.",
                6: "RICE yoki Kano kabi freymvorklar orqali funksiyalarni ustuvorlashtirish (prioritization).",
            },
            courseLesson: {
                lesson1: {
                    lesson: "1-Dars",
                    title: "Mahsulot boshqaruviga (Product Management) kirish",
                    description:
                        "PM roli, mahsulot hayotiy sikli va turli kompaniyalarda ushbu lavozimning o'rni.",
                },
                lesson2: {
                    lesson: "2-Dars",
                    title: "Bozor tahlili va foydalanuvchilar ehtiyojlarini o'rganish",
                    description:
                        "Suhbatlar o'tkazish, muammolarni aniqlash va foydalanuvchi portretini tuzish.",
                },
                lesson3: {
                    lesson: "3-Dars",
                    title: "Mahsulot strategiyasi va Yo'l xaritasi (Roadmap)",
                    description:
                        "Biznes maqsadlarini mahsulotning aniq rivojlanish rejasiga aylantirish va manfaatdor tomonlar bilan ishlash.",
                },
                lesson4: {
                    lesson: "4-Dars",
                    title: "Funksiyalarni ustuvorlashtirish tizimi",
                    description:
                        "RICE, MoSCoW va Kano modellaridan foydalangan holda keyingi navbatda nima yaratish kerakligini belgilash.",
                },
                lesson5: {
                    lesson: "5-Dars",
                    title: "Agile, Scrum va texnik jamoalar bilan hamkorlik",
                    description:
                        "Sprintlar, User Story-lar yozish va ishlarni (backlog) samarali taqsimlash.",
                },
                lesson6: {
                    lesson: "6-Dars",
                    title: "MVP konsepti va mahsulotni bozorga chiqarish",
                    description:
                        "Eng minimal ishlovchi mahsulot (MVP) hajmini aniqlash va Go-to-Market (GTM) strategiyasini tuzish.",
                },
                lesson7: {
                    lesson: "7-Dars",
                    title: "Mahsulot tahlili va asosiy metrikalar",
                    description:
                        "Voronka tahlili, LTV/CAC hisoblash va foydalanuvchilar faolligini (retention) saqlab qolish tizimlari.",
                },
                lesson8: {
                    lesson: "8-Dars",
                    title: "Yakuniy mahsulot taqdimoti va himoya",
                    description:
                        "O'z mahsulotingiz loyihasini ekspertlar va guruh a'zolari oldida himoya qilish.",
                },
            },
            forWhom: {
                1: "Mahsulot boshqaruviga o'tishni xohlaydigan loyiha menejerlari (Project Managers)",
                2: "Kodni yozishdan oldin o'z g'oyalarini sinab ko'rmoqchi bo'lgan startapchilar",
                3: "Bilimlarini tizimlashtirish va jahon standartlarini o'rganishni istovchi yosh PM-lar",
                4: "Mahsulot ishlab chiqishning biznes qismini tushunishni xohlaydigan dizaynerlar va dasturchilar",
            },
            coursesStartedDate: "15-Sentabr",
            coursesEndedDate: "10-Noyabr",
            coursesDescription:
                "Mijozlarga yo'naltirilgan va ma'lumotlarga asoslangan mahsulot qarorlarini qabul qilishga tayyorlaydigan keng qamrovli dastur.",
            coursesDurationMonth: "2 oy",
            coursesDurationLesson: "8 ta dars",
            coursesDurationDescription:
                "Kurs davomida tayyor amaliy andozalar va har bir modul uchun mentordan batafsil fikr-mulohazalar olasiz.",
            coursesPerMonth: "oyiga",
            coursesPerMonthDescription:
                "Kurs to'lovini har oy bo'lib to'lash imkoniyati mavjud. Hech qanday qo'shimcha to'lovlarsiz.",
        },
        ru: {
            category: "Менеджмент",
            curator: "Марвин МакКинни",
            courseTitle: "Основы управления продуктом (Product Management)",
            courseDescription:
                "Научитесь управлять полным жизненным циклом продукта: от исследования рынка, создания MVP, agile-разработки до запуска и последующего масштабирования.",
            willBeLearn: {
                1: "Проведение исследований пользователей (Customer Discovery) и анализ конкурентов.",
                2: "Определение продуктовой стратегии, дорожной карты (Roadmap) и видения.",
                3: "Написание качественных документов требований к продукту (PRD).",
                4: "Определение ключевых метрик продукта (AARRR, North Star Metric).",
                5: "Эффективная работа в связке с разработчиками и UX/UI дизайнерами.",
                6: "Приоритизация функций с использованием фреймворков RICE или Kano.",
            },
            courseLesson: {
                lesson1: {
                    lesson: "Урок 1",
                    title: "Введение в Product Management",
                    description:
                        "Роль продакт-менеджера, жизненный цикл продукта и структура команд в современных IT-компаниях.",
                },
                lesson2: {
                    lesson: "Урок 2",
                    title: "Исследование рынка и выявление болей пользователей",
                    description:
                        "Как проводить глубинные интервью, находить потребности и формировать портреты пользователей.",
                },
                lesson3: {
                    lesson: "Урок 3",
                    title: "Формирование продуктовой стратегии и дорожной карты",
                    description:
                        "Превращение бизнес-целей в понятную дорожную карту (Roadmap) и управление ожиданиями стейкхолдеров.",
                },
                lesson4: {
                    lesson: "Урок 4",
                    title: "Фреймворки приоритизации задач",
                    description:
                        "Использование моделей RICE, MoSCoW и Kano для определения критически важных функций продукта.",
                },
                lesson5: {
                    lesson: "Урок 5",
                    title: "Agile, Scrum и взаимодействие с технической командой",
                    description:
                        "Спринты, написание User Stories, оценка сложности задач и управление бэклогом.",
                },
                lesson6: {
                    lesson: "Урок 6",
                    title: "Концепция MVP и планирование запуска",
                    description:
                        "Определение минимально жизнеспособного продукта (MVP) и разработка Go-to-Market стратегии.",
                },
                lesson7: {
                    lesson: "Урок 7",
                    title: "Продуктовая аналитика и ключевые метрики",
                    description:
                        "Настройка воронки продаж, расчет LTV/CAC, анализ удержания (retention) пользователей.",
                },
                lesson8: {
                    lesson: "Урок 8",
                    title: "Презентация продукта и защита проектов",
                    description:
                        "Презентация концепции вашего продукта перед панелью приглашенных экспертов.",
                },
            },
            forWhom: {
                1: "Проджект-менеджеры, желающие перейти в сферу управления продуктом",
                2: "Предприниматели, желающие протестировать идеи стартапа перед началом разработки",
                3: "Начинающие продакт-менеджеры, стремящиеся систематизировать знания и стандарты",
                4: "Дизайнеры и разработчики, желающие понять бизнес-составляющую создания IT-продуктов",
            },
            coursesStartedDate: "15 сентября",
            coursesEndedDate: "10 ноября",
            coursesDescription:
                "Полноценная программа, готовящая вас к принятию решений на основе данных и потребностей клиентов.",
            coursesDurationMonth: "2 месяца",
            coursesDurationLesson: "8 уроков",
            coursesDurationDescription:
                "Практические шаблоны, обратная связь от практикующих менторов по каждому домашнему заданию.",
            coursesPerMonth: "в месяц",
            coursesPerMonthDescription:
                "Доступна удобная ежемесячная оплата. Без скрытых переплат.",
        },
    },
    {
        id: 3,
        backColor: "#F3982D",
        curatorTitleImg: "Image/courses-photo/people/tutor3.png",
        coursePrice: "200",
        curator: {
            curatorSulyemanMainImage:
                "Image/HomePagePhoto/suleymanMainImage.png",
            curatorName: "Leslie Alexander Li",
            rate: 4.7,
            courses: 2,
            students: 180,
            socialLinks: {
                facebook: "https://facebook.com/",
                be: "https://www.behance.net/",
                twitter: "https://x.com",
                linekdin: "https://uz.linkedin.com/",
            },
            en: {
                jobs: "HR Director at International FinTech Group",
                aboutCurator:
                    "Experienced Human Resources professional specializing in talent acquisition, data-driven HR metrics, organizational development, and strategic recruitment with 5 years in international HR.",
            },
            uz: {
                jobs: "Xalqaro FinTex guruhida HR-direktor",
                aboutCurator:
                    "Xalqaro HR sohasida 5 yillik tajribaga ega, iste'dodlarni jalb qilish, ma'lumotlarga asoslangan HR ko'rsatkichlari, tashkiliy rivojlanish va strategik rekruting bo'yicha mutaxassis.",
            },
            ru: {
                jobs: "HR-директор в международной FinTech-группе",
                aboutCurator:
                    "Специалист по управлению персоналом с 5-летним опытом в международном HR. Специализируется на подборе талантов, HR-аналитике на основе данных и организационном развитии.",
            },
        },
        en: {
            category: "HR & Recruiting",
            curator: "Leslie Alexander Li",
            courseTitle: "HR Management and Analytics",
            courseDescription:
                "Learn how to attract top talent, manage workplace culture, and make data-driven HR decisions. Understand payroll metrics, recruitment funnels, and retention modeling.",
            willBeLearn: {
                1: "Build effective sourcing and recruitment strategies.",
                2: "Design onboarding programs that lower early turnover.",
                3: "Use HR metrics to evaluate employee performance and cost.",
                4: "Analyze recruitment funnel data using spreadsheet tools.",
                5: "Understand and implement employee engagement surveys.",
                6: "Structure compensation and benefit systems.",
            },
            courseLesson: {
                lesson1: {
                    lesson: "Lesson 1",
                    title: "Introduction to Modern HR and Analytics",
                    description:
                        "The shifting role of HR from administrative to strategic business partner (HRBP).",
                },
                lesson2: {
                    lesson: "Lesson 2",
                    title: "Talent Acquisition and Candidate Sourcing",
                    description:
                        "Effective search channels, writing job descriptions, and conducting screening interviews.",
                },
                lesson3: {
                    lesson: "Lesson 3",
                    title: "Onboarding and Employee Adaptation",
                    description:
                        "Designing a seamless onboarding path to improve retention of new hires.",
                },
                lesson4: {
                    lesson: "Lesson 4",
                    title: "Key Performance Indicators (KPIs) and OKRs in HR",
                    description:
                        "Setting goals, evaluating performance, and driving productivity across teams.",
                },
                lesson5: {
                    lesson: "Lesson 5",
                    title: "Data-Driven Recruiting and Retention Analytics",
                    description:
                        "Analyzing cost-per-hire, time-to-hire, and employee turnover rate metrics.",
                },
                lesson6: {
                    lesson: "Lesson 6",
                    title: "Company Culture and Employee Engagement",
                    description:
                        "How to measure and improve organizational climate, eNPS, and job satisfaction.",
                },
                lesson7: {
                    lesson: "Lesson 7",
                    title: "Compensation, Benefits, and Grading Systems",
                    description:
                        "Structuring salary bands, rewards, and non-financial motivation factors.",
                },
                lesson8: {
                    lesson: "Lesson 8",
                    title: "Final HR Strategy Presentation",
                    description:
                        "Designing and presenting a comprehensive HR development plan for a simulated company.",
                },
            },
            forWhom: {
                1: "Aspiring HR generalists and recruiters wishing to advance their careers",
                2: "Business managers wanting to improve hiring quality and employee engagement",
                3: "Traditional HR staff looking to build statistical and analytical skills",
                4: "Start-up founders organizing their team structures and initial payrolls",
            },
            coursesStartedDate: "September 12",
            coursesEndedDate: "November 7",
            coursesDescription:
                "A hands-on, modern course to help you build highly productive and motivated teams.",
            coursesDurationMonth: "2 months",
            coursesDurationLesson: "8 lessons",
            coursesDurationDescription:
                "Includes downloadable spreadsheets, dashboard templates, and live Q&A sessions.",
            coursesPerMonth: "per month",
            coursesPerMonthDescription:
                "Flexible payment plans. Get access to HR templates library immediately.",
        },
        uz: {
            category: "HR va Rekruting",
            curator: "Leslie Alexander Li",
            courseTitle: "HR menejment va tahlil (HR Analytics)",
            courseDescription:
                "Eng yaxshi iste'dodlarni jalb qilish, korporativ madaniyatni shakllantirish va tahliliy ma'lumotlarga asoslangan HR qarorlarini qabul qilishni o'rganing. Rekruting voronkasi va xodimlarni saqlab qolish tizimlarini o'zlashtiring.",
            willBeLearn: {
                1: "Samarali nomzodlar qidiruvi (sourcing) va rekruting strategiyalarini qurish.",
                2: "Xodimlarning erta ketib qolishini kamaytiradigan moslashuv (onboarding) tizimlarini yaratish.",
                3: "Xodimlarning unumdorligi va qiymatini baholash uchun HR ko'rsatkichlaridan foydalanish.",
                4: "Elektron jadvallar yordamida rekruting voronkasi ma'lumotlarini tahlil qilish.",
                5: "Xodimlar faolligi va qoniqish darajasini (eNPS) aniqlash so'rovnomalarini o'tkazish.",
                6: "Kompensatsiya, imtiyozlar (C&B) va xodimlar reyting tizimini (grading) joriy etish.",
            },
            courseLesson: {
                lesson1: {
                    lesson: "1-Dars",
                    title: "Zamonaviy HR va tahlilga kirish",
                    description:
                        "HR xodimlarining roli ma'muriy vazifalardan strategik biznes hamkorlikka (HRBP) qanday o'zgarayotgani.",
                },
                lesson2: {
                    lesson: "2-Dars",
                    title: "Iste'dodlarni jalb qilish va nomzodlarni izlash",
                    description:
                        "Samarali qidiruv kanallari, vakansiyalar uchun jozibador matnlar yozish va saralash suhbatlarini o'tkazish.",
                },
                lesson3: {
                    lesson: "3-Dars",
                    title: "Moslashtirish (Onboarding) va adaptatsiya jarayoni",
                    description:
                        "Yangi kelgan xodimlarning jamoaga tez qo'shilishi va uzoq vaqt ishlashini ta'minlovchi tizim qurish.",
                },
                lesson4: {
                    lesson: "4-Dars",
                    title: "HR-da KPI va OKR tizimlari",
                    description:
                        "Maqsadlarni belgilash, ish samaradorligini baholash va jamoalarda unumdorlikni oshirish.",
                },
                lesson5: {
                    lesson: "5-Dars",
                    title: "Ma'lumotlarga asoslangan rekruting va tahlil",
                    description:
                        "Nomzodni jalb qilish narxi (cost-per-hire), vaqti (time-to-hire) va xodimlarning oquvchanligi ko'rsatkichlarini tahlil qilish.",
                },
                lesson6: {
                    lesson: "6-Dars",
                    title: "Kompaniya madaniyati va xodimlar faolligi",
                    description:
                        "Kompaniyadagi muhit, ichki aloqalar va xodimlarning ishidan mamnunligini o'lchash va yaxshilash usullari.",
                },
                lesson7: {
                    lesson: "7-Dars",
                    title: "Kompensatsiya, imtiyozlar va darajalar tizimi (Grading)",
                    description:
                        "Oylik maoshlar tasmalarini, mukofotlarni va nomoddiy motivatsiya tizimlarini tuzish.",
                },
                lesson8: {
                    lesson: "8-Dars",
                    title: "Yakuniy HR strategiyasi taqdimoti",
                    description:
                        "Loyihaviy kompaniya misolida jamoani boshqarish va HR rivojlanish rejasini himoya qilish.",
                },
            },
            forWhom: {
                1: "Karyerasini rivojlantirmoqchi bo'lgan boshlovchi HR mutaxassislari va rekruterlar",
                2: "Xodimlar sifati va ish unumdorligini oshirmoqchi bo'lgan rahbarlar va menejerlar",
                3: "Statistik va tahliliy ko'nikmalarni egallashni istagan an'anaviy HR xodimlari",
                4: "Loyiha jamoasi tuzilishini va oyliklar tizimini to'g'ri yo'lga qo'ymoqchi bo'lgan startapchilar",
            },
            coursesStartedDate: "12-Sentabr",
            coursesEndedDate: "7-Noyabr",
            coursesDescription:
                "Sizga yuqori natijali va motivatsiyalangan jamoalarni boshqarishga yordam beradigan zamonaviy amaliy kurs.",
            coursesDurationMonth: "2 oy",
            coursesDurationLesson: "8 ta dars",
            coursesDurationDescription:
                "Kurs tarkibida tayyor jadvallar, tahliliy dashboard andozalari va interfaol mashg'ulotlar mavjud.",
            coursesPerMonth: "oyiga",
            coursesPerMonthDescription:
                "Bo'lib to'lash imkoniyati bor. Kurs materiallari va andozalar kutubxonasiga darhol kirish huquqi beriladi.",
        },
        ru: {
            category: "HR и Рекрутинг",
            curator: "Лесли Александр Ли",
            courseTitle: "Управление персоналом и HR-аналитика",
            courseDescription:
                "Научитесь привлекать топ-таланты, управлять корпоративной культурой и принимать решения на основе HR-метрик. Освойте воронку подбора и методы удержания персонала.",
            willBeLearn: {
                1: "Создание эффективных стратегий поиска и привлечения кандидатов.",
                2: "Разработка программ онбординга, снижающих текучесть кадров.",
                3: "Использование HR-метрик для оценки производительности и стоимости сотрудников.",
                4: "Анализ воронки подбора с помощью аналитических таблиц.",
                5: "Проведение и анализ опросов вовлеченности сотрудников (eNPS).",
                6: "Структурирование систем компенсаций и льгот (C&B) и грейдинга.",
            },
            courseLesson: {
                lesson1: {
                    lesson: "Урок 1",
                    title: "Введение в современный HR и аналитику",
                    description:
                        "Трансформация роли HR-специалиста: от администратора к стратегическому бизнес-партнеру (HRBP).",
                },
                lesson2: {
                    lesson: "Урок 2",
                    title: "Подбор персонала и сорсинг кандидатов",
                    description:
                        "Инструменты и каналы поиска, написание вакансий и проведение скрининг-интервью.",
                },
                lesson3: {
                    lesson: "Урок 3",
                    title: "Онбординг и адаптация сотрудников",
                    description:
                        "Проектирование бесшовного процесса адаптации для минимизации уходов на испытательном сроке.",
                },
                lesson4: {
                    lesson: "Урок 4",
                    title: "KPI и OKR в управлении персоналом",
                    description:
                        "Постановка целей, оценка эффективности работы и повышение общей продуктивности команд.",
                },
                lesson5: {
                    lesson: "Урок 5",
                    title: "Анализ данных в рекрутинге и удержании кадров",
                    description:
                        "Расчет стоимости найма (cost-per-hire), времени закрытия вакансий и показателей текучести кадров.",
                },
                lesson6: {
                    lesson: "Урок 6",
                    title: "Корпоративная культура и вовлеченность",
                    description:
                        "Как измерять лояльность сотрудников, индекс eNPS и уровень удовлетворенности трудом.",
                },
                lesson7: {
                    lesson: "Урок 7",
                    title: "Компенсации, бенефиты и системы грейдов",
                    description:
                        "Разработка сетки окладов, бонусов и систем нематериальной мотивации персонала.",
                },
                lesson8: {
                    lesson: "Урок 8",
                    title: "Защита итоговой HR-стратегии",
                    description:
                        "Презентация комплексного плана развития персонала для выбранной компании.",
                },
            },
            forWhom: {
                1: "Начинающие HR-generalists и рекрутеры, стремящиеся к карьерному росту",
                2: "Руководители команд, желающие повысить вовлеченность подчиненных и качество найма",
                3: "Опытные HR-специалисты, желающие развить математические и аналитические навыки",
                4: "Основатели стартапов, выстраивающие структуру команды и систему мотивации с нуля",
            },
            coursesStartedDate: "12 сентября",
            coursesEndedDate: "7 ноября",
            coursesDescription:
                "Практический курс, ориентированный на создание высокопроизводительных и вовлеченных команд.",
            coursesDurationMonth: "2 месяца",
            coursesDurationLesson: "8 уроков",
            coursesDurationDescription:
                "Включает готовые таблицы, шаблоны дашбордов и сессии вопросов и ответов в живом формате.",
            coursesPerMonth: "в месяц",
            coursesPerMonthDescription:
                "Удобная оплата частями. Доступ к библиотеке шаблонов открывается сразу.",
        },
    },
    {
        id: 4,
        backColor: "#14C8A4",
        curatorTitleImg: "Image/courses-photo/people/tutor4.png",
        coursePrice: "530",
        curator: {
            curatorSulyemanMainImage:
                "Image/HomePagePhoto/suleymanMainImage.png",
            curatorName: "Kristin Watson",
            rate: 4.9,
            courses: 6,
            students: 510,
            socialLinks: {
                facebook: "https://facebook.com/",
                be: "https://www.behance.net/",
                twitter: "https://x.com",
                linekdin: "https://uz.linkedin.com/",
            },
            en: {
                jobs: "Global Brand Director at Creative Agency",
                aboutCurator:
                    "Brand strategist and PR specialist with 9 years of expertise crafting brand identities, managing public relations crises, and designing high-impact communication campaigns for fortune 500 brands.",
            },
            uz: {
                jobs: "Ijodiy agentlikda Global brendlar bo'yicha direktor",
                aboutCurator:
                    "9 yillik tajribaga ega brend strategi va jamoatchilik bilan aloqalar (PR) mutaxassisi. Brend identifikatsiyasi, PR inqirozlarni boshqarish hamda yirik brendlar uchun aloqa kampaniyalarini tashkil etish bo'yicha yetakchi.",
            },
            ru: {
                jobs: "Глобальный бренд-директор в креативном агентстве",
                aboutCurator:
                    "Бренд-стратег и PR-эксперт с 9-летним стажем. Специализируется на создании айдентики брендов, урегулировании репутационных кризисов и проведении крупных коммуникационных кампаний.",
            },
        },
        en: {
            category: "Marketing",
            curator: "Kristin Watson",
            courseTitle: "Brand Management & PR Communications",
            courseDescription:
                "Learn how to build strong, memorable brands and manage public reputation. Master brand positioning, strategic communication, media relations, and crisis PR management.",
            willBeLearn: {
                1: "Define brand identity, values, and target positioning.",
                2: "Develop unified PR and communication strategies.",
                3: "Write effective press releases and pitch stories to media outlets.",
                4: "Handle public relations crises and minimize reputation damage.",
                5: "Measure brand awareness and PR efficiency using modern tools.",
                6: "Design cohesive brand storytelling across multiple channels.",
            },
            courseLesson: {
                lesson1: {
                    lesson: "Lesson 1",
                    title: "Introduction to Brand Management & Strategy",
                    description:
                        "Understanding brand equity, brand anatomy, and what makes a brand successful today.",
                },
                lesson2: {
                    lesson: "Lesson 2",
                    title: "Brand Positioning and Identity",
                    description:
                        "Crafting a unique value proposition, brand tone of voice (ToV), and personality guidelines.",
                },
                lesson3: {
                    lesson: "Lesson 3",
                    title: "Foundations of Public Relations (PR)",
                    description:
                        "Difference between PR, marketing, and advertising. Setting communication goals.",
                },
                lesson4: {
                    lesson: "Lesson 4",
                    title: "Media Relations and Storytelling",
                    description:
                        "How to build relationships with journalists, write press releases, and earn organic media coverage.",
                },
                lesson5: {
                    lesson: "Lesson 5",
                    title: "Influencer Marketing and Partnerships",
                    description:
                        "Selecting the right ambassadors and managing co-branding opportunities.",
                },
                lesson6: {
                    lesson: "Lesson 6",
                    title: "Crisis PR and Reputation Management",
                    description:
                        "Action plans for handling online backlash, public errors, and defending brand integrity.",
                },
                lesson7: {
                    lesson: "Lesson 7",
                    title: "Measuring PR Campaign Metrics",
                    description:
                        "Analyzing Share of Voice (SoV), Brand Mention volumes, sentiment analysis, and ROI.",
                },
                lesson8: {
                    lesson: "Lesson 8",
                    title: "Brand Strategy Audit and Showcase",
                    description:
                        "Presenting a complete repositioning and PR launch strategy for an existing brand.",
                },
            },
            forWhom: {
                1: "Brand managers wanting to level up their strategic and communication capabilities",
                2: "PR specialists seeking to transition into modern digital media environments",
                3: "Entrepreneurs striving to build an authoritative, trustworthy brand identity",
                4: "Marketing professionals looking to specialize in high-level branding roles",
            },
            coursesStartedDate: "September 18",
            coursesEndedDate: "November 12",
            coursesDescription:
                "A practical masterclass in building brand equity and navigating public communications.",
            coursesDurationMonth: "2 months",
            coursesDurationLesson: "8 lessons",
            coursesDurationDescription:
                "Features real-world crisis scenario simulations, copywriting training, and expert reviews.",
            coursesPerMonth: "per month",
            coursesPerMonthDescription:
                "Simple monthly billing plans. Brand audit guidelines are included.",
        },
        uz: {
            category: "Marketing",
            curator: "Kristin Watson",
            courseTitle: "Brend boshqaruvi va PR kommunikatsiyalari",
            courseDescription:
                "Kuchli, unutilmas brendlar yaratish va jamoatchilik oldidagi obro'ni boshqarishni o'rganing. Brendning o'rnini belgilash, strategik kommunikatsiya va inqirozli vaziyatlardagi PR harakatlarini o'zlashtiring.",
            willBeLearn: {
                1: "Brend identifikatsiyasi, qadriyatlari va maqsadli joylashuvini (positioning) aniqlash.",
                2: "Yagona PR va korporativ aloqa strategiyalarini ishlab chiqish.",
                3: "Samarali press-relizlar yozish va OAV bilan aloqalarni o'rnatish.",
                4: "Inqirozli PR holatlarini boshqarish va obro'ga yetadigan zararni minimallashtirish.",
                5: "Zamonaviy vositalar yordamida brend taniluvchanligi va PR samaradorligini o'lchash.",
                6: "Turli kanallarda brend haqidagi hikoyani (storytelling) izchil taqdim etish.",
            },
            courseLesson: {
                lesson1: {
                    lesson: "1-Dars",
                    title: "Brend boshqaruvi va strategiyasiga kirish",
                    description:
                        "Brend qiymati tushunchasi, brend anatomiyasi va zamonaviy bozorda brend muvaffaqiyati omillari.",
                },
                lesson2: {
                    lesson: "2-Dars",
                    title: "Brendni joylashtirish (Positioning) va o'ziga xosligi",
                    description:
                        "Noyob qiymat taklifi (USP), brend ovozi ohangi (Tone of Voice) va xarakterini belgilash.",
                },
                lesson3: {
                    lesson: "3-Dars",
                    title: "Jamoatchilik bilan aloqalar (PR) asoslari",
                    description:
                        "PR, marketing va reklama o'rtasidagi farqlar. Kommunikatsiya maqsadlarini to'g'ri qo'yish.",
                },
                lesson4: {
                    lesson: "4-Dars",
                    title: "OAV bilan aloqalar va Storytelling",
                    description:
                        "Jurnalistlar bilan munosabatlar qurish, qiziqarli press-relizlar yozish va bepul OAV nashrlariga chiqish.",
                },
                lesson5: {
                    lesson: "5-Dars",
                    title: "Blogerlar (Influencers) bilan ishlash va hamkorliklar",
                    description:
                        "Brend elchilarini (ambassadors) to'g'ri tanlash va qo'shma hamkorlik loyihalarini boshqarish.",
                },
                lesson6: {
                    lesson: "6-Dars",
                    title: "Inqirozli PR va obro'ni himoya qilish",
                    description:
                        "Internetdagi salbiy fikrlar, xatolar va inqirozli holatlarda tezkor javob choralari rejasini tuzish.",
                },
                lesson7: {
                    lesson: "7-Dars",
                    title: "PR kampaniyalar ko'rsatkichlarini o'lchash",
                    description:
                        "Brend eslanishi (Share of Voice), ijtimoiy tarmoqlardagi fikrlar tahlili va PR investitsiyasi samaradorligini o'lchash.",
                },
                lesson8: {
                    lesson: "8-Dars",
                    title: "Brend strategiyasi auditi va taqdimoti",
                    description:
                        "Mavjud brendni qayta shakllantirish (repositioning) va yangi PR kampaniyasi loyihasini himoya qilish.",
                },
            },
            forWhom: {
                1: "Strategik va kommunikativ ko'nikmalarini oshirmoqchi bo'lgan brend menejerlari",
                2: "Zamonaviy raqamli media muhitini o'rganmoqchi bo'lgan PR mutaxassislari",
                3: "Ishonchli va nufuzli brend yaratishga intilayotgan tadbirkorlar",
                4: "Brend strategiyasi sohasida ixtisoslashmoqchi bo'lgan marketologlar",
            },
            coursesStartedDate: "18-Sentabr",
            coursesEndedDate: "12-Noyabr",
            coursesDescription:
                "Brend qiymatini yaratish va ommaviy kommunikatsiyalarni boshqarish bo'yicha intensiv amaliy master-klass.",
            coursesDurationMonth: "2 oy",
            coursesDurationLesson: "8 ta dars",
            coursesDurationDescription:
                "Real inqirozli ssenariylar simulyatsiyasi, matn yozish mashqlari va mutaxassislardan shaxsiy tahlillar.",
            coursesPerMonth: "oyiga",
            coursesPerMonthDescription:
                "Kurs to'lovini har oy bo'lib to'lash imkoniyati bor. Brend auditiga doir foydali andozalar sovg'a qilinadi.",
        },
        ru: {
            category: "Маркетинг",
            curator: "Кристин Уотсон",
            courseTitle: "Бренд-менеджмент и PR-коммуникации",
            courseDescription:
                "Научитесь создавать сильные, узнаваемые бренды и управлять репутацией. Освойте позиционирование бренда, стратегические коммуникации, работу со СМИ и антикризисный PR.",
            willBeLearn: {
                1: "Определение идентичности, ценностей и позиционирования бренда.",
                2: "Разработка единых PR- и коммуникационных стратегий.",
                3: "Написание эффективных пресс-релизов и питчинг материалов в СМИ.",
                4: "Управление репутационными кризисами и минимизация рисков.",
                5: "Оценка узнаваемости бренда и эффективности PR-кампаний с помощью современных инструментов.",
                6: "Создание последовательного сторителлинга бренда во всех каналах.",
            },
            courseLesson: {
                lesson1: {
                    lesson: "Урок 1",
                    title: "Введение в бренд-менеджмент и стратегию",
                    description:
                        "Понятие капитала бренда, анатомия бренда и ключевые факторы успеха бренда на современном рынке.",
                },
                lesson2: {
                    lesson: "Урок 2",
                    title: "Позиционирование бренда и идентичность",
                    description:
                        "Разработка уникального ценностного предложения (УТП), голоса бренда (Tone of Voice) и характера.",
                },
                lesson3: {
                    lesson: "Урок 3",
                    title: "Основы связей с общественностью (PR)",
                    description:
                        "Различия между PR, маркетингом и рекламой. Постановка коммуникационных целей.",
                },
                lesson4: {
                    lesson: "Урок 4",
                    title: "Связи со СМИ и сторителлинг",
                    description:
                        "Как выстраивать отношения с журналистами, писать цепляющие пресс-релизы и получать бесплатные публикации.",
                },
                lesson5: {
                    lesson: "Урок 5",
                    title: "Инфлюенс-маркетинг и партнерства",
                    description:
                        "Подбор амбассадоров бренда и управление совместными ко-брендинговыми кампаниями.",
                },
                lesson6: {
                    lesson: "Урок 6",
                    title: "Антикризисный PR и управление репутацией",
                    description:
                        "Разработка планов действий при негативе в сети, публичных ошибках компании и защита репутации бренда.",
                },
                lesson7: {
                    lesson: "Урок 7",
                    title: "Метрики эффективности PR-кампаний",
                    description:
                        "Анализ доли голоса (Share of Voice), объема упоминаний, тональности публикаций и окупаемости PR.",
                },
                lesson8: {
                    lesson: "Урок 8",
                    title: "Аудит бренда и защита стратегии",
                    description:
                        "Презентация комплексной стратегии репозиционирования и PR-кампании для реального бренда.",
                },
            },
            forWhom: {
                1: "Бренд-менеджеры, желающие повысить свои стратегические и коммуникативные компетенции",
                2: "PR-специалисты, желающие адаптироваться к современным цифровым медиа",
                3: "Предприниматели, нацеленные на создание авторитетного бренда с высоким уровнем доверия",
                4: "Специалисты по маркетингу, планирующие развиваться в сфере брендинга высокого уровня",
            },
            coursesStartedDate: "18 сентября",
            coursesEndedDate: "12 ноября",
            coursesDescription:
                "Практический мастер-класс по созданию сильных брендов и управлению общественным мнением.",
            coursesDurationMonth: "2 месяца",
            coursesDurationLesson: "8 уроков",
            coursesDurationDescription:
                "Симуляция реальных кризисных ситуаций, разбор кейсов, практическая работа со стилем текстов.",
            coursesPerMonth: "в месяц",
            coursesPerMonthDescription:
                "Доступна удобная ежемесячная оплата. Чек-листы по бренд-аудиту предоставляются бесплатно.",
        },
    },
    {
        id: 5,
        backColor: "#5D88F8",
        curatorTitleImg: "Image/courses-photo/people/tutor5.png",
        coursePrice: "400",
        curator: {
            curatorSulyemanMainImage:
                "Image/HomePagePhoto/suleymanMainImage.png",
            curatorName: "Dianne Russell",
            rate: 4.8,
            courses: 3,
            students: 290,
            socialLinks: {
                facebook: "https://facebook.com/",
                be: "https://www.behance.net/",
                twitter: "https://x.com",
                linekdin: "https://uz.linkedin.com/",
            },
            en: {
                jobs: "Head of Business Development at ScaleUp Corp",
                aboutCurator:
                    "Strategic growth leader with 7 years of experience in B2B sales development, international partnerships, strategic expansion planning, and pipeline optimization.",
            },
            uz: {
                jobs: "ScaleUp Corp kompaniyasida Biznesni rivojlantirish bo'limi boshlig'i",
                aboutCurator:
                    "7 yillik tajribaga ega strategik rivojlanish yetakchisi. B2B savdoni oshirish, xalqaro sheriklik munosabatlari va strategik kengayishni rejalashtirish bo'yicha mutaxassis.",
            },
            ru: {
                jobs: "Руководитель направления по развитию бизнеса (BizDev) в ScaleUp Corp",
                aboutCurator:
                    "Специалист по стратегическому росту с 7-летним опытом в развитии B2B-продаж, выстраивании международных партнерств и планировании географического расширения бизнеса.",
            },
        },
        en: {
            category: "Management",
            curator: "Dianne Russell",
            courseTitle: "Business Development Management",
            courseDescription:
                "Unlock exponential business growth. Learn B2B sales strategies, strategic partnerships formation, market entry models, deal negotiation techniques, and sales pipeline scaling.",
            willBeLearn: {
                1: "Identify and qualify high-value business opportunities.",
                2: "Design and implement structured B2B sales pipelines.",
                3: "Master high-stakes negotiation and deal-closing techniques.",
                4: "Analyze market expansion viability and local risks.",
                5: "Form strategic, mutually beneficial business alliances.",
                6: "Track business development KPIs and revenue funnels.",
            },
            courseLesson: {
                lesson1: {
                    lesson: "Lesson 1",
                    title: "Foundations of Business Development",
                    description:
                        "Defining BizDev, distinguishing it from sales, and understanding corporate growth paths.",
                },
                lesson2: {
                    lesson: "Lesson 2",
                    title: "Market Analysis and Opportunity Mapping",
                    description:
                        "Sizing target markets (TAM, SAM, SOM) and identifying potential clients and partners.",
                },
                lesson3: {
                    lesson: "Lesson 3",
                    title: "B2B Outreach Strategy and Lead Generation",
                    description:
                        "How to craft cold outreach campaigns, leverage LinkedIn, and book discovery calls.",
                },
                lesson4: {
                    lesson: "Lesson 4",
                    title: "The Art of Strategic Negotiation",
                    description:
                        "Preparation, finding common ground, pricing strategies, and overcoming objections.",
                },
                lesson5: {
                    lesson: "Lesson 5",
                    title: "Partnership Frameworks and Alliances",
                    description:
                        "Structuring affiliate programs, distribution partnerships, and strategic technology alliances.",
                },
                lesson6: {
                    lesson: "Lesson 6",
                    title: "Drafting Business Proposals and Contracts",
                    description:
                        "Key legal terms, terms sheets, SLA parameters, and pricing structures.",
                },
                lesson7: {
                    lesson: "Lesson 7",
                    title: "Managing the Sales Pipeline and CRM Systems",
                    description:
                        "Setting up Hubspot/Salesforce, tracking lead stages, and forecasting company revenue.",
                },
                lesson8: {
                    lesson: "Lesson 8",
                    title: "Business Growth Strategy Showcase",
                    description:
                        "Developing and pitching an expansion plan for a real corporate enterprise.",
                },
            },
            forWhom: {
                1: "Business development representatives and sales managers aiming for leadership positions",
                2: "Account managers looking to transition into strategic business growth roles",
                3: "Entrepreneurs and startup founders seeking structured scaling methodologies",
                4: "Consultants advising businesses on growth and market entry strategies",
            },
            coursesStartedDate: "September 20",
            coursesEndedDate: "November 15",
            coursesDescription:
                "A practical B2B business growth playbook designed to scale commercial sales and partnerships.",
            coursesDurationMonth: "2 months",
            coursesDurationLesson: "8 lessons",
            coursesDurationDescription:
                "Includes live negotiation roleplays, real sales script audits, and CRM setup guides.",
            coursesPerMonth: "per month",
            coursesPerMonthDescription:
                "Convenient installment plans. Access exclusive B2B pitch deck templates.",
        },
        uz: {
            category: "Menejment",
            curator: "Dianne Russell",
            courseTitle:
                "Biznesni rivojlantirish (Business Development) boshqaruvi",
            courseDescription:
                "Biznesingizning jadal o'sishiga erishing. B2B savdo strategiyalari, strategik hamkorliklar o'rnatish, bozorga kirish modellari, muzokaralar olib borish va sotuv kanallarini kengaytirishni o'rganing.",
            willBeLearn: {
                1: "Katta qiymatga ega biznes imkoniyatlarini aniqlash va baholash.",
                2: "Tizimli B2B sotuv kanallari va jarayonlarini loyihalash.",
                3: "Murakkab muzokaralar olib borish va kelishuvlarni muvaffaqiyatli yakunlash.",
                4: "Yangi bozorlarga chiqish imkoniyatlari va xatarlarini tahlil qilish.",
                5: "O'zaro manfaatli strategik biznes ittifoqlar va hamkorliklar qurish.",
                6: "Biznesni rivojlantirish ko'rsatkichlari (KPI) va daromad voronkalarini kuzatish.",
            },
            courseLesson: {
                lesson1: {
                    lesson: "1-Dars",
                    title: "Biznesni rivojlantirish (BizDev) asoslari",
                    description:
                        "BizDev tushunchasi, uning oddiy savdo bo'limidan farqi va korporativ o'sish yo'nalishlari.",
                },
                lesson2: {
                    lesson: "2-Dars",
                    title: "Bozor tahlili va imkoniyatlar xaritasi",
                    description:
                        "Maqsadli bozor hajmini (TAM, SAM, SOM) o'lchash, potensial mijozlar va hamkorlarni aniqlash.",
                },
                lesson3: {
                    lesson: "3-Dars",
                    title: "B2B aloqa va mijozlarni jalb qilish (Lead Generation)",
                    description:
                        "LinkedIn va boshqa kanallar orqali sovuq xabarlar yuborish, uchrashuvlar belgilash san'ati.",
                },
                lesson4: {
                    lesson: "4-Dars",
                    title: "Strategik muzokaralar olib borish san'ati",
                    description:
                        "Muzokaralarga tayyorgarlik, o'zaro manfaatli kelishuv nuqtalarini topish, narx bo'yicha e'tirozlar bilan ishlash.",
                },
                lesson5: {
                    lesson: "5-Dars",
                    title: "Hamkorlik tizimlari va biznes ittifoqlar",
                    description:
                        "Distribyutorlik shartnomalari, hamkorlik dasturlari va qo'shma texnologik ittifoqlar tuzish.",
                },
                lesson6: {
                    lesson: "6-Dars",
                    title: "Tijoriy takliflar va shartnomalar loyihasini tayyorlash",
                    description:
                        "Huquqiy asoslar, hamkorlik shartlari (Term Sheet), SLA parametrlari va narxlash modellari.",
                },
                lesson7: {
                    lesson: "7-Dars",
                    title: "Sotuv kanallarini boshqarish va CRM tizimlari",
                    description:
                        "CRM (Hubspot/Salesforce) sozlash, mijozlar bilan aloqa bosqichlarini nazorat qilish va daromadni prognozlash.",
                },
                lesson8: {
                    lesson: "8-Dars",
                    title: "Biznesni kengaytirish strategiyasi taqdimoti",
                    description:
                        "Real korxona misolida bozorni kengaytirish va yangi hamkorliklar loyihasini himoya qilish.",
                },
            },
            forWhom: {
                1: "Rahbarlik lavozimiga intilayotgan savdo menejerlari va BizDev vakillari",
                2: "Strategik rivojlanish sohasiga o'tmoqchi bo'lgan mijozlar bilan ishlash menejerlari (Account Managers)",
                3: "Tizimli o'sish uslublarini o'rganishni xohlaydigan tadbirkorlar va startap asoschilari",
                4: "Biznesni kengaytirish va yangi bozorga kirish bo'yicha maslahat beruvchi mutaxassislar",
            },
            coursesStartedDate: "20-Sentabr",
            coursesEndedDate: "15-Noyabr",
            coursesDescription:
                "Tijoriy savdo va hamkorlik aloqalarini kengaytirishga mo'ljallangan amaliy B2B biznes o'sish qo'llanmasi.",
            coursesDurationMonth: "2 oy",
            coursesDurationLesson: "8 ta dars",
            coursesDurationDescription:
                "Darslarda jonli muzokaralar simulyatsiyasi, real tijoriy takliflar tahlili va CRM tizimlari bilan amaliy mashg'ulotlar o'rin olgan.",
            coursesPerMonth: "oyiga",
            coursesPerMonthDescription:
                "Kurs to'lovini har oy bo'lib to'lash imkoniyati mavjud. Eksklyuziv tijoriy taklif (pitch deck) andozalari taqdim etiladi.",
        },
        ru: {
            category: "Менеджмент",
            curator: "Диан Рассел",
            courseTitle:
                "Управление развитием бизнеса (Business Development Management)",
            courseDescription:
                "Обеспечьте кратный рост бизнеса. Освойте стратегии B2B-продаж, построение партнерских сетей, модели выхода на новые рынки, техники переговоров и масштабирование воронки продаж.",
            willBeLearn: {
                1: "Поиск и квалификация ценных коммерческих возможностей.",
                2: "Проектирование и запуск структурированных B2B воронкок продаж.",
                3: "Освоение сложных техник ведения переговоров и закрытия сделок.",
                4: "Анализ потенциала расширения рынка и локальных рисков.",
                5: "Создание стратегических взаимовыгодных бизнес-альянсов.",
                6: "Отслеживание ключевых показателей (KPI) эффективности BizDev.",
            },
            courseLesson: {
                lesson1: {
                    lesson: "Урок 1",
                    title: "Основы Business Development (BizDev)",
                    description:
                        "Понятие BizDev, отличие от классических продаж и определение траекторий роста компании.",
                },
                lesson2: {
                    lesson: "Урок 2",
                    title: "Анализ рынка и карта возможностей",
                    description:
                        "Оценка объема рынка (TAM, SAM, SOM) и определение ключевых клиентов и стратегических партнеров.",
                },
                lesson3: {
                    lesson: "Урок 3",
                    title: "B2B-аутрич и лидогенерация",
                    description:
                        "Инструменты холодного аутрича, использование LinkedIn для поиска партнеров и назначение встреч.",
                },
                lesson4: {
                    lesson: "Урок 4",
                    title: "Искусство сложных переговоров",
                    description:
                        "Подготовка, поиск компромиссов, ценовые стратегии и отработка возражений крупных клиентов.",
                },
                lesson5: {
                    lesson: "Урок 5",
                    title: "Фреймворки партнерских программ и альянсы",
                    description:
                        "Построение дистрибьюторских соглашений, партнерских схем и технологических союзов.",
                },
                lesson6: {
                    lesson: "Урок 6",
                    title: "Подготовка коммерческих предложений и договоров",
                    description:
                        "Юридические аспекты, ключевые условия (Term Sheets), параметры SLA и гибкие модели ценообразования.",
                },
                lesson7: {
                    lesson: "Урок 7",
                    title: "Управление воронкой продаж в CRM",
                    description:
                        "Настройка CRM-систем (Hubspot/Salesforce), контроль этапов сделок и прогнозирование выручки.",
                },
                lesson8: {
                    lesson: "Урок 8",
                    title: "Защита стратегии роста бизнеса",
                    description:
                        "Презентация комплексного плана по масштабированию и выходу на новые рынки для реального предприятия.",
                },
            },
            forWhom: {
                1: "Специалисты по продажам и развитию бизнеса, стремящиеся занять руководящие позиции",
                2: "Аккаунт-менеджеры, желающие перейти в сферу стратегического планирования роста бизнеса",
                3: "Предприниматели и основатели стартапов, ищущие методологию системного роста",
                4: "Консультанты, помогающие компаниям масштабироваться и выходить на новые рынки",
            },
            coursesStartedDate: "20 сентября",
            coursesEndedDate: "15 ноября",
            coursesDescription:
                "Практическое руководство по росту B2B-бизнеса, нацеленное на увеличение коммерческих продаж.",
            coursesDurationMonth: "2 месяца",
            coursesDurationLesson: "8 уроков",
            coursesDurationDescription:
                "Включает живые ролевые игры по переговорам, аудит реальных коммерческих предложений и работу в CRM.",
            coursesPerMonth: "в месяц",
            coursesPerMonthDescription:
                "Доступна удобная оплата частями. Набор шаблонов коммерческих предложений предоставляется бесплатно.",
        },
    },
    {
        id: 6,
        backColor: "",
        curatorTitleImg: "",
        coursePrice: "500",
        curator: {
            curatorSulyemanMainImage: "",
            curatorName: "Guy Hawkins",
            rate: 4.9,
            courses: 4,
            students: 390,
            socialLinks: {
                facebook: "https://facebook.com/",
                be: "https://www.behance.net/",
                twitter: "https://x.com",
                linekdin: "https://uz.linkedin.com/",
            },
            en: {
                jobs: "Senior Graphic Designer & Art Director",
                aboutCurator:
                    "An award-winning graphic designer and art director with 8 years of experience creating visual brand identities, packaging design, and digital advertising assets.",
            },
            uz: {
                jobs: "Katta grafik dizayner va badiiy rahbar (Art Director)",
                aboutCurator:
                    "Visual brend identifikatsiyasi, qadoqlash dizayni va raqamli reklama materiallarini yaratish bo'yicha 8 yillik tajribaga ega bo'lgan xalqaro mukofotlar sohibi.",
            },
            ru: {
                jobs: "Старший графический дизайнер и арт-директор",
                aboutCurator:
                    "Графический дизайнер и арт-директор с 8-летним стажем. Лауреат международных премий, эксперт в создании айдентики брендов, дизайна упаковки и рекламных креативов.",
            },
        },
        en: {
            category: "Design",
            curator: "Guy Hawkins",
            courseTitle: "Graphic Design Basic",
            courseDescription:
                "Start your journey in graphic design. Learn core design principles, typography, color theory, layout design, and master essential tools like Adobe Photoshop and Illustrator.",
            willBeLearn: {
                1: "Apply core principles of balance, contrast, and alignment.",
                2: "Master typography, font pairings, and hierarchy.",
                3: "Work professionally with color palettes and harmony.",
                4: "Create vector illustrations and logos in Illustrator.",
                5: "Edit photos, apply filters, and compose graphics in Photoshop.",
                6: "Build a professional graphic design portfolio.",
            },
            courseLesson: {
                lesson1: {
                    lesson: "Lesson 1",
                    title: "Introduction to Graphic Design Principles",
                    description:
                        "Understanding contrast, repetition, alignment, proximity, and visual hierarchy.",
                },
                lesson2: {
                    lesson: "Lesson 2",
                    title: "Color Theory and Typography",
                    description:
                        "Selecting appropriate color schemes, emotional impact of colors, and typography rules.",
                },
                lesson3: {
                    lesson: "Lesson 3",
                    title: "Mastering Adobe Illustrator — Basics",
                    description:
                        "Working with vector shapes, pen tool, paths, and building simple vector icons.",
                },
                lesson4: {
                    lesson: "Lesson 4",
                    title: "Logo Design and Brand Assets",
                    description:
                        "The conceptual process of logo creation, geometry, and preparing vector files.",
                },
                lesson5: {
                    lesson: "Lesson 5",
                    title: "Mastering Adobe Photoshop — Basics",
                    description:
                        "Understanding layers, masks, selection tools, and basic photo retouching techniques.",
                },
                lesson6: {
                    lesson: "Lesson 6",
                    title: "Layout and Composition Design",
                    description:
                        "Designing posters, social media banners, and print advertisements using grids.",
                },
                lesson7: {
                    lesson: "Lesson 7",
                    title: "Packaging and Print Preparation",
                    description:
                        "Creating product mockups, understanding bleed/trim lines, and print export settings.",
                },
                lesson8: {
                    lesson: "Lesson 8",
                    title: "Portfolio Creation and Final Review",
                    description:
                        "Selecting your best works, organizing Behance projects, and course graduation.",
                },
            },
            forWhom: {
                1: "Beginners wanting to learn graphic design from the absolute ground up",
                2: "Marketing and social media managers looking to create their own visual content",
                3: "UI/UX designers wishing to strengthen their fundamental visual design skills",
                4: "Creative individuals looking for a career change into a remote-friendly profession",
            },
            coursesStartedDate: "September 22",
            coursesEndedDate: "November 17",
            coursesDescription:
                "A solid foundations program designed to transition you into a confident graphic designer.",
            coursesDurationMonth: "2 months",
            coursesDurationLesson: "8 lessons",
            coursesDurationDescription:
                "Includes hands-on design challenges, interactive workshops, and direct design feedback.",
            coursesPerMonth: "per month",
            coursesPerMonthDescription:
                "Affordable monthly payment options. Student design resources bundle included.",
        },
        uz: {
            category: "Dizayn",
            curator: "Guy Hawkins",
            courseTitle: "Grafik dizayn asoslari",
            courseDescription:
                "Grafik dizayn olamiga ilk qadamni qo'ying. Dizayn qonun-qoidalari, tipografika, ranglar nazariyasi, kompozitsiya va Adobe Photoshop hamda Illustrator dasturlarida professional ishlashni o'rganing.",
            willBeLearn: {
                1: "Muvozanat, kontrast va tekislash kabi asosiy dizayn prinsiplarini qo'llash.",
                2: "Tipografika, shriftlar uyg'unligi va vizual iyerarxiyani boshqarish.",
                3: "Ranglar palitrasi va ranglar psixologiyasi bilan professional ishlash.",
                4: "Illustrator dasturida vektorli illyustratsiyalar va logotiplar chizish.",
                5: "Photoshop dasturida rasmlarni tahrirlash, kollajlar va reklama bannerlari tayyorlash.",
                6: "O'zining ilk professional dizayn portfoliosini yaratish.",
            },
            courseLesson: {
                lesson1: {
                    lesson: "1-Dars",
                    title: "Grafik dizayn prinsiplariga kirish",
                    description:
                        "Kontrast, takroriylik, tekislash, yaqinlik qoidalari va vizual iyerarxiya asoslari.",
                },
                lesson2: {
                    lesson: "2-Dars",
                    title: "Ranglar nazariyasi va Tipografika",
                    description:
                        "Ranglar palitrasini tanlash, ranglarning inson psixologiyasiga ta'siri va shriftlar bilan to'g'ri ishlash qoidalari.",
                },
                lesson3: {
                    lesson: "3-Dars",
                    title: "Adobe Illustrator dasturi — Asoslar",
                    description:
                        "Vektor shakllari, Pen Tool (pero), chiziqlar va oddiy vektor piktogrammalarini chizish.",
                },
                lesson4: {
                    lesson: "4-Dars",
                    title: "Logotip dizayni va brend belgilari",
                    description:
                        "Logotip yaratishning g'oyaviy jarayoni, geometriya va tayyor vektor fayllarni to'g'ri saqlash.",
                },
                lesson5: {
                    lesson: "5-Dars",
                    title: "Adobe Photoshop dasturi — Asoslar",
                    description:
                        "Qatlamlar (layers), niqoblar (masks), tanlash asboblari va rasmlarni tahrirlash (retouching) asoslari.",
                },
                lesson6: {
                    lesson: "6-Dars",
                    title: "Kompozitsiya va maket yaratish",
                    description:
                        "Setkalar (grids) yordamida posterlar, ijtimoiy tarmoqlar uchun bannerlar va bosma reklamalar loyihalash.",
                },
                lesson7: {
                    lesson: "7-Dars",
                    title: "Qadoqlash dizayni va chop etishga tayyorlash (Pre-press)",
                    description:
                        "Mahsulot maketlarini (mockups) yaratish, kesish chiziqlarini sozlash va chop etish formatlari.",
                },
                lesson8: {
                    lesson: "8-Dars",
                    title: "Portfolio yaratish va yakuniy ko'rik",
                    description:
                        "Eng yaxshi ishlarni saralash, Behance-da keyslar joylash va kurs yakunlari.",
                },
            },
            forWhom: {
                1: "Grafik dizaynni mutlaqo noldan o'rganmoqchi bo'lgan boshlovchilar",
                2: "O'zining vizual kontentini mustaqil yaratmoqchi bo'lgan marketologlar va SMM mutaxassislari",
                3: "Vizual dizayn bo'yicha fundamental bilimlarini mustahkamlamoqchi bo'lgan UI/UX dizaynerlar",
                4: "Masofadan ishlash imkonini beradigan yangi ijodiy kasbga o'tishni xohlovchilar",
            },
            coursesStartedDate: "22-Sentabr",
            coursesEndedDate: "17-Noyabr",
            coursesDescription:
                "Sizni ishonchli va talabgir grafik dizaynerga aylantiradigan mukammal poydevor dasturi.",
            coursesDurationMonth: "2 oy",
            coursesDurationLesson: "8 ta dars",
            coursesDurationDescription:
                "Darslarda ko'plab amaliy topshiriqlar, qiziqarli dizayn topshiriqlari va har bir darsga mentordan shaxsiy tahlil taqdim etiladi.",
            coursesPerMonth: "oyiga",
            coursesPerMonthDescription:
                "Kurs to'lovini qulay tarzda har oy bo'lib to'lash imkoniyati bor. Dizaynerlar uchun foydali manbalar to'plami sovg'a qilinadi.",
        },
        ru: {
            category: "Дизайн",
            curator: "Гай Хокинс",
            courseTitle: "Основы графического дизайна",
            courseDescription:
                "Начните свой путь в графическом дизайне. Изучите ключевые принципы визуального искусства, типографику, теорию цвета, композицию и освойте инструменты Adobe Photoshop и Illustrator.",
            willBeLearn: {
                1: "Применение базовых принципов баланса, контраста и выравнивания в макетах.",
                2: "Изучение типографики, сочетания шрифтов и визуальной иерархии текста.",
                3: "Профессиональная работа с цветовыми палитрами и гармонией.",
                4: "Создание векторных иллюстраций и логотипов в Adobe Illustrator.",
                5: "Редактирование фотографий, коллажирование и создание баннеров в Adobe Photoshop.",
                6: "Создание первого профессионального портфолио графического дизайнера.",
            },
            courseLesson: {
                lesson1: {
                    lesson: "Урок 1",
                    title: "Введение в принципы графического дизайна",
                    description:
                        "Разбор понятий контраста, повторения, выравнивания, близости элементов и визуальной иерархии.",
                },
                lesson2: {
                    lesson: "Урок 2",
                    title: "Теория цвета и Типографика",
                    description:
                        "Подбор цветовых схем, психология восприятия цвета и правила работы со шрифтовыми парами.",
                },
                lesson3: {
                    lesson: "Урок 3",
                    title: "Работа в Adobe Illustrator — Базовый уровень",
                    description:
                        "Создание векторных фигур, работа с пером (Pen Tool), контурами и простыми иконками.",
                },
                lesson4: {
                    lesson: "Урок 4",
                    title: "Дизайн логотипов и фирменный стиль",
                    description:
                        "Процесс генерации идей для логотипа, построение сетки и подготовка файлов к сдаче.",
                },
                lesson5: {
                    lesson: "Урок 5",
                    title: "Работа в Adobe Photoshop — Базовый уровень",
                    description:
                        "Понятие слоев, масок, инструментов выделения и базовые техники ретуши изображений.",
                },
                lesson6: {
                    lesson: "Урок 6",
                    title: "Композиция и сетка макета",
                    description:
                        "Проектирование постеров, рекламных баннеров для соцсетей и печатных материалов с помощью сеток.",
                },
                lesson7: {
                    lesson: "Урок 7",
                    title: "Дизайн упаковки и допечатная подготовка (Pre-press)",
                    description:
                        "Создание мокапов продукции, настройка вылетов под обрез и экспорт файлов для печати.",
                },
                lesson8: {
                    lesson: "Урок 8",
                    title: "Создание портфолио и подведение итогов",
                    description:
                        "Выбор лучших работ, оформление кейсов на Behance и финальное напутствие.",
                },
            },
            forWhom: {
                1: "Новички, желающие освоить профессию графического дизайнера с нуля",
                2: "Маркетологи и SMM-специалисты, желающие самостоятельно создавать графику для рекламы",
                3: "UI/UX-дизайнеры, стремящиеся укрепить навыки работы с визуальным стилем и композицией",
                4: "Творческие люди, желающие сменить профессию и перейти на удаленную работу",
            },
            coursesStartedDate: "22 сентября",
            coursesEndedDate: "17 ноября",
            coursesDescription:
                "Базовая практическая программа, которая заложит прочный фундамент в вашей карьере дизайнера.",
            coursesDurationMonth: "2 месяца",
            coursesDurationLesson: "8 уроков",
            coursesDurationDescription:
                "Практические домашние работы, интерактивные воркшопы и разбор ваших макетов ментором.",
            coursesPerMonth: "в месяц",
            coursesPerMonthDescription:
                "Доступна гибкая оплата частями. Полезные материалы и исходники предоставляются в подарок.",
        },
    },
];
