// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Research software, AI systems, and learning projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-writing",
          title: "writing",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Selected research publications in epigenomics, genomics, and machine learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Experience, education, selected publications, and technical skills.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-building-in-public",
        
          title: "Building in Public",
        
        description: "Why I am turning this site into a working record of projects, research, and learning.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/building-in-public/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-co-developed-the-agilent-sureselect-baylor-human-corsiv-panel-launched-enabling-cost-effective-population-scale-dna-methylation-profiling-now-in-use-across-multiple-labs-globally",
          title: 'Co-developed the Agilent SureSelect Baylor Human CoRSIV Panel launched — enabling cost-effective population-scale...',
          description: "",
          section: "News",},{id: "news-received-the-dr-dennis-m-bier-award-for-best-pediatric-nutrition-research-publication-from-baylor-college-of-medicine",
          title: 'Received the Dr. Dennis M. Bier Award for Best Pediatric Nutrition Research Publication...',
          description: "",
          section: "News",},{id: "news-new-paper-published-in-nucleic-acids-research-mouse-metastable-epialleles-are-extremely-rare-pmid-40694849",
          title: 'New paper published in Nucleic Acids Research: Mouse metastable epialleles are extremely rare...',
          description: "",
          section: "News",},{id: "projects-agentic-ai-skills",
          title: 'Agentic AI Skills',
          description: "Experiments and reusable patterns for building capable AI agents.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/agentic-ai-skills/";
            },},{id: "projects-corsiv-epigenomics",
          title: 'CoRSIV Epigenomics',
          description: "Computational methods and pipelines for studying systemic epigenetic variation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/corsiv-epigenomics/";
            },},{id: "projects-learning-deep-learning",
          title: 'Learning Deep Learning',
          description: "Worked problems, notes, and experiments for understanding neural networks from first principles.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/learning-deep-learning/";
            },},{id: "projects-taskflow-api",
          title: 'TaskFlow API',
          description: "A Python API project exploring structured task orchestration.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/taskflow-api/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Gunasekara_CV.docx", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%6A%67%75%6E%61%73%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/cjgunase", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Psh5r5gAAAAJ", "_blank");
        },
      },{
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
