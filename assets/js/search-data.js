// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "List of projects I&#39;ve worked on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "List of my Publicatoins.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This page summarizes my resume. Contact pragya.pant@mnsu.edu for additional details.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-joined-humanitarian-openstreetmap-team-as-data-quality-intern-️",
          title: 'Joined Humanitarian OpenStreetMap Team as Data Quality Intern! 🗺️',
          description: "",
          section: "News",},{id: "news-completed-2-years-at-kathmandu-university-nepal-as-teaching-assisant",
          title: 'Completed 2 years at Kathmandu University, Nepal as Teaching Assisant! 🏆',
          description: "",
          section: "News",},{id: "news-completed-14-months-woking-at-european-union-delegation-to-nepal-as-youth-sounding-board-member",
          title: 'Completed 14 months woking at European Union Delegation to Nepal as Youth Sounding...',
          description: "",
          section: "News",},{id: "news-research-article-sustainable-land-use-planning-in-developing-countries-using-gis-and-multi-criteria-analysis-a-case-study-of-lalitpur-district-nepal-published-in-city-and-built-environment",
          title: 'Research article “Sustainable land use planning in developing countries using GIS and multi-criteria...',
          description: "",
          section: "News",},{id: "news-started-master-of-science-in-geographic-information-science-at-minnesota-state-university-mankato",
          title: 'Started Master of Science in Geographic Information Science at Minnesota State University, Mankato!...',
          description: "",
          section: "News",},{id: "news-started-working-as-graduate-teaching-assistent-at-minnesota-state-university-mankato",
          title: 'Started working as Graduate Teaching Assistent at Minnesota State University, Mankato!',
          description: "",
          section: "News",},{id: "news-completed-gis-summer-internship-at-austin-utilities-️",
          title: 'Completed GIS Summer Internship at Austin Utilities! 🗺️',
          description: "",
          section: "News",},{id: "news-started-internship-as-blowing-snow-control-paraprofessional-senior-gis-expert-at-minnesota-department-of-transportation",
          title: 'Started internship as Blowing Snow Control Paraprofessional Senior GIS Expert at Minnesota Department...',
          description: "",
          section: "News",},{id: "projects-sustainable-land-use-planning",
          title: 'Sustainable Land Use Planning',
          description: "Sustainable land use planning in developing countries using GIS and multi-criteria analysis :a case study of Lalitpur district, Nepal.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-glacial-lake-outburst-flood",
          title: 'Glacial Lake Outburst Flood',
          description: "Undergraduate thesis to model flood induntation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-climate-action-best-from-waste",
          title: 'Climate Action :Best From Waste',
          description: "Training to school students about 3Rs of waste management.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-permafrost-mapping",
          title: 'Permafrost Mapping',
          description: "Remote Sensing and Machine learnig  Approach to Mapping Potential Permafrost Zones in the Himalaya Region with Rock Glaciers as Proxy.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-permafrost-mapping",
          title: 'Permafrost Mapping',
          description: "Remote Sensing and Machine learnig  Approach to Mapping Potential Permafrost Zones in the Himalaya Region with Rock Glaciers as Proxy.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
