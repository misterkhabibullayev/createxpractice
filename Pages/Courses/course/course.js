import { allCourses } from "../../../AllCourses.js";

window.addEventListener("DOMContentLoaded", () => {
    const currentLanguage = "en";

    const locale = {
        en: {
            hero: {
                info: {
                    badge: "course",
                    title: "User Experience. Principles of Human-Centered Design",
                },

                decoration: {
                    dec1: "../../../Image/course-images/hero/arrow-right.png",
                    dec2: "../../../Image/course-images/hero/circles.png",
                    dec3: "../../../Image/course-images/hero/dots.png",
                    dec4: "../../../Image/course-images/hero/up.png",
                },
            },
            aboutTheCourse: {
                intro: {
                    title: "About the course",
                    willBeLearned: "You will learn:",
                    icon: "../../../Image/course-images/aboutTheCourse/check.png",
                },
                datesPart: {
                    dates: "Dates",
                    duration: "Duration",
                    price: "Price",
                    button: "Join the course",
                },
                tutorInfo: {
                    badge: "Course curator",
                    lessonIcons: [
                        {
                            icon: "../../../Image/course-images/tutor-info/Star.png",
                        },
                        {
                            icon: "../../../Image/course-images/tutor-info/Play.png",
                        },
                        {
                            icon: "../../../Image/course-images/tutor-info/Profile.png",
                        },
                    ],
                },
                mainStepsPart: {
                    intro: {
                        badge: "Main steps",
                        title: "Online learning process",
                    },
                    carousel: [
                        {
                            number: "01",
                            title: "Watching online video lectures",
                            text: "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.",
                        },
                        {
                            number: "02",
                            title: "Passing test",
                            text: "Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim ad tempor est ea.",
                        },
                        {
                            number: "03",
                            title: "Curator’s feedback",
                            text: "Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.",
                        },
                        {
                            number: "04",
                            title: "Corrections if needed",
                            text: "Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.",
                        },
                    ],
                },
            },
        },
    };

    // *************** Hero section ***************
    const heroContainer = document.getElementById("hero-container");

    function updateHero() {
        const heroData = locale[currentLanguage].hero.info;
        const heroDecorationData = locale[currentLanguage].hero.decoration;

        const badge = document.getElementById("hero-badge");
        const title = document.getElementById("hero-title");
        badge.className =
            "text-center text-[#FF3F3A] font-bold uppercase leading-[150%] tracking-[1px] mb-3 pt-[120px]";
        title.className =
            "font-black text-[#1E212C] text-5xl text-center leading-[130%] pb-[120px]";

        badge.innerHTML = heroData.badge;
        title.innerHTML = heroData.title;

        heroContainer.appendChild(badge);
        heroContainer.appendChild(title);

        const dec1 = document.createElement("div");
        const dec2 = document.createElement("div");

        const dec3 = document.createElement("div");
        const dec4 = document.createElement("div");

        // i will give position absolute for containers

        dec1.className = "absolute top-[120px] left-[10px]";
        dec2.className = "absolute bottom-0 -left-[85px]";
        dec3.className = "absolute top-[120px] -right-[85px]";
        dec4.className = "absolute bottom-0 right-[200px]";

        const decImage1 = document.createElement("img");
        const decImage2 = document.createElement("img");
        const decImage3 = document.createElement("img");
        const decImage4 = document.createElement("img");

        dec1.appendChild(decImage1);
        dec2.appendChild(decImage2);
        dec3.appendChild(decImage3);
        dec4.appendChild(decImage4);

        decImage1.src = heroDecorationData.dec1;
        decImage2.src = heroDecorationData.dec2;
        decImage3.src = heroDecorationData.dec3;
        decImage4.src = heroDecorationData.dec4;

        heroContainer.appendChild(dec1);
        heroContainer.appendChild(dec2);
        heroContainer.appendChild(dec3);
        heroContainer.appendChild(dec4);
    }
    updateHero();
    // *************** Hero section ***************

    // *************** About the course section ***************
    const aboutTheCourse = document.getElementById("aboutTheCourse");
    console.log(aboutTheCourse);

    function updateAboutTheCourseTop() {
        const aboutTheCourseData = locale[currentLanguage].aboutTheCourse;

        const courseWithId0 = allCourses.find((c) => c.id === 0);

        const aboutTheCourseTop = document.createElement("div");
        aboutTheCourseTop.className = "flex justify-between";
        let html = "";

        html += `
        <div class="flex flex-col ">
        <h1 class='font-black text-5xl leading-[57.5px] pb-4 mb-6'>${aboutTheCourseData.intro.title}</h1>
        <p class='max-w-[600px] mb-12'>${courseWithId0[currentLanguage].courseDescription}</p>

        <div> 
        <h3 class='text-[28px] font-bold mb-6'>${aboutTheCourseData.intro.willBeLearned}</h3>

        <div> 
            
            ${Object.values(courseWithId0[currentLanguage].willBeLearn)
                .map((each) => {
                    return `
              <div class='flex items-center gap-2'>
                      <div>
                            <img src="${aboutTheCourseData.intro.icon}" alt="ckeck icon"/> 
                      </div>
                       <p class='mb-2 text-[rgb(66,69,81)]'>${each}</p>
                      </div>
              `;
                })
                .join(" ")}
           
        </div>

        </div>
        </div>
          

        <div id="dates-container" class="dates-container flex flex-col h-fit p-6 shadow-2xl max-w-[505px]">
           <div class='px-2 pt-4 mb-4'>
           <h6 class='font-bold tracking-[1px] uppercase'>${aboutTheCourseData.datesPart.dates}</h6>
           <p class='text-2xl text-[rgb(255,63,58)] font-bold mb-2'>${courseWithId0[currentLanguage].coursesStartedDate} - ${courseWithId0[currentLanguage].coursesEndedDate}</p>
           <p class='text-[rgb(66,69,81)]'>${courseWithId0[currentLanguage].coursesDescription}</p>
           </div>

            <div class='px-2 pt-4 mb-4'>
           <h6 class='font-bold tracking-[1px] uppercase'>${aboutTheCourseData.datesPart.duration}</h6>
           <p class='text-2xl text-[rgb(255,63,58)] font-bold mb-2'>${courseWithId0[currentLanguage].coursesDurationMonth} - ${courseWithId0[currentLanguage].coursesDurationLesson}</p>
           <p class='text-[rgb(66,69,81)]'>${courseWithId0[currentLanguage].coursesDurationDescription}</p>
           </div>

             <div class='px-2 pt-4 mb-4'>
           <h6 class='font-bold tracking-[1px] uppercase'>${aboutTheCourseData.datesPart.price}</h6>
           <p class='text-2xl text-[rgb(255,63,58)] font-bold mb-2'>${courseWithId0.coursePrice} ${courseWithId0[currentLanguage].coursesPerMonth}</p>
           <p class='text-[rgb(66,69,81)]'>${courseWithId0[currentLanguage].coursesPerMonthDescription}</p>
           </div>
           
            <div class='text-center px-2 pt-6 mb-4'>
            <button class='w-full px-8 py-2.5 bg-gradient-to-r from-[#FF3F3A] hover:shadow-xl to-[#F75E05] text-white rounded shadow-lg shadow-[#FF3F3A]/40 transition-all duration-300 hover:shadow-[#FF3F3A]/50'>${aboutTheCourseData.datesPart.button}</button>
            </div>
        </div>
      `;
        aboutTheCourseTop.innerHTML = html;

        aboutTheCourse.appendChild(aboutTheCourseTop);
    }
    updateAboutTheCourseTop();

    // About THE COURSE TUTOR
    function updateAboutTheCourseTutor() {
        const aboutTheCourseData = locale[currentLanguage].aboutTheCourse;
        const courseWithId0 = allCourses.find((c) => c.id === 0);

        // Tutor part is here starts ↓
        const aboutTheCourseTutor = document.createElement("div");
        aboutTheCourseTutor.className = "aboutTheCourse-tutor flex mt-[96px]";

        const tutorImageContainer = document.createElement("div");
        tutorImageContainer.className =
            "max-w-[463px] max-h-[606px] flex-shrink-0 overflow-hidden";
        const tutorImage = document.createElement("img");
        tutorImage.className = "w-full h-full object-cover";
        tutorImage.src = courseWithId0.curatorTitleImg;
        tutorImage.alt = "Course Tutor image";

        tutorImageContainer.appendChild(tutorImage);
        aboutTheCourseTutor.appendChild(tutorImageContainer);
        aboutTheCourse.appendChild(aboutTheCourseTutor);

        const tutorCourseInfo = document.createElement("div");
        tutorCourseInfo.className = "ml-[105px] px-4 max-w-[600px]";
        const tutorInfoBadge = document.createElement("h6");
        tutorInfoBadge.textContent = aboutTheCourseData.tutorInfo.badge;

        const tutorName = document.createElement("h1");
        tutorName.className = "mb-4 text-5xl font-bold ";
        tutorName.textContent = courseWithId0.curator.curatorName;

        const tutorProfession = document.createElement("p");
        tutorProfession.className = "pb-2 mb-6 text-xl ";
        tutorProfession.textContent =
            courseWithId0.curator[currentLanguage].jobs;

        const courseInfoRateCoursesStudentsContainer =
            document.createElement("div");
        courseInfoRateCoursesStudentsContainer.className = "pb-4 mb-4";

        let tutorLessonInfoHtml = "";

        courseWithId0.curator.courseLessonInfo.forEach((info) => {
            tutorLessonInfoHtml += `
                <div class='flex flex-col'>
                  <div class='flex items-center gap-2 pb-[0.25rem]'>
                      <div><img src='${info.lessonIcon}'/></div>
                      <div>
                      <p class='font-bold text-[rgb(66,69,81)]'>${info.lessonInfo}</p>
                      </div>
                  </div>
                   
                </div>
      `;
        });

        const aboutCourse = document.createElement("p");
        aboutCourse.className = "text-[rgb(66,69,81)] pb-4 mb-6";
        aboutCourse.textContent =
            courseWithId0.curator[currentLanguage].aboutCurator;

        const socialMediaHTML = `
        <div class='flex items-center gap-4'>
              ${courseWithId0.curator.socialLinks
                  .map(
                      (media) => `
                <a
                  href="${media.link}"
                  target="_blank"
                  class='text-gray-400 transition-colors duration-200 ${media.hoverColor}'>
                  ${media.svg}</a>
                `,
                  )
                  .join(" ")}
        </div>
      `;

        tutorCourseInfo.appendChild(tutorInfoBadge);
        tutorCourseInfo.appendChild(tutorName);
        tutorCourseInfo.appendChild(tutorProfession);
        courseInfoRateCoursesStudentsContainer.insertAdjacentHTML(
            "beforeend",
            tutorLessonInfoHtml,
        );
        tutorCourseInfo.appendChild(courseInfoRateCoursesStudentsContainer);
        tutorCourseInfo.appendChild(aboutCourse);
        tutorCourseInfo.insertAdjacentHTML("beforeend", socialMediaHTML);

        aboutTheCourseTutor.appendChild(tutorCourseInfo);
    }
    updateAboutTheCourseTutor();

    // About THE COURSE Main Steps
    function updateMainSteps() {
        const aboutTheCourseData = locale[currentLanguage].aboutTheCourse;
        const courseWithId0 = allCourses.find((c) => c.id === 0);
        const mainStepsContainer = document.createElement("div");
        mainStepsContainer.className = "mainSteps-container";

        const mainStepsHTML = `
          <h6>${aboutTheCourseData.mainStepsPart.intro.badge}</h6>
          <h2>${aboutTheCourseData.mainStepsPart.intro.title}</h2>

        <div>
            <div>
                  <div>
                      <span>${aboutTheCourseData.carousel.number}</span>      
                      <span class=""></span>  
                  <div>  
                  <div>
                    <h3></h3>    
                    <p></p>    
                  <div>  
            </div>       
        </div>
      `;

        aboutTheCourse.appendChild(mainStepsContainer);
    }
    updateMainSteps();
    // *************** About the course section ***************
});
