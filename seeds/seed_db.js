exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('book_info').del(),
    knex('book_info').insert({
      id: 1,
      title: 'Python In A Nutshell',
      genre: 'Python',
      description: 'This book offers Python programmers one place to look when they need help remembering or deciphering the syntax of this open source language and its many powerful but scantily documented modules. This comprehensive reference guide makes it easy to look up the most frequently needed information--not just about the Python language itself, but also the most frequently used parts of the standard library and the most important third-party extensions.',
      cover_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/python_in_a_nutshell.jpg',
      author_1_first: 'Alex',
      author_1_last: 'Martelli',
      author_1_bio: "Alex Martelli spent 8 years with IBM Research, winning three Outstanding Technical Achievement Awards.He then spent 13 as a Senior Software Consultant at think3 inc, developing libraries, network protocols, GUI engines, event frameworks, and web access frontends. He has also taught programming languages, development methods, and numerical computing at Ferrara University and other venues. He's a C++ MVP for Brainbench, and a member of the Python Software Foundation. He currently works for AB Strakt, a Python-centered software house in Gí_teborg, Sweden, mostly by telecommuting from his home in Bologna, Italy. Alex's proudest achievement is the articles that appeared in Bridge World (January/February 2000\), which were hailed as giant steps towards solving issues that had haunted contract bridge theoreticians for decades.",
      author_1_img_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/alex_martelli.jpg',
      author_2_first: 'Anna',
      author_2_last: 'Ravenscroft',
      author_2_bio: "Anna Martelli Ravenscroft is an experienced speaker and trainer, with diverse background developing curricula for church, regional transit, disaster preparedness; developing web applications for therapy, learning, fitness; writing technical books, articles and presentations; active member of Open Source community; skilled at translating between IT professionals and end users.",
      author_2_img_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/anna_ravenscroft.jpg',
      author_3_first: 'Steve',
      author_3_last: 'Holden',
      author_3_bio: "Steve Holden Is a consultant, advising clients on system and network architectures and the design and implementation of programmed web systems. He also teaches classes on TCP/IP, network security, database and programming topics, and is the author of \"Python Web Programming\", the O'Reilly School of Technology's \"Certificate series in Python\" and O'Reilly Media's \"Intermediate Python\" video series.",
      author_3_img_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/steve_holden.jpg'
    }),
    knex('book_info').insert({
      id: 2,
      title: 'Think Python',
      genre: 'Python',
      description: "If you want to learn how to program, working with Python is an excellent way to start. This hands-on guide takes you through the language a step at a time, beginning with basic programming concepts before moving on to functions, recursion, data structures, and object-oriented design. This second edition and its supporting code have been updated for Python 3.",
      cover_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/think_python.jpg',
      author_1_first: 'Allen B.',
      author_1_last: 'Downey',
      author_1_bio: "Allen Downey is a Professor of Computer Science at Olin College of Engineering. He has taught at Wellesley College, Colby College and U.C. Berkeley. He has a Ph.D. in Computer Science from U.C. Berkeley and Master's and Bachelor's degrees from MIT.",
      author_1_img_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/allen_downey.jpg'
    }),
    knex('book_info').insert({
      id: 3,
      title: 'Learning React Native',
      genre: 'JavaScript',
      description: "Get a practical introduction to React Native, the JavaScript framework for writing and deploying fully featured mobile apps that look and feel native. With this hands-on guide, youäó»ll learn how to build applications that target iOS, Android, and other mobile platforms instead of browsers. Youäó»ll also discover how to access platform features such as the camera, user location, and local storage.",
      cover_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/learning_react_native.jpg',
      author_1_first: 'Bonnie',
      author_1_last: 'Eisenman',
      author_1_bio: "Bonnie Eisenman is a software engineer at Codecademy, with previous experience at Fog Creek Software and Google. She has spoken at several conferences on topics ranging from ReactJS to musical programming and Arduinos. In her spare time, she enjoys building electronic musical instruments, tinkering with hardware projects, and laser-cutting chocolate. Find her on Twitter as @brindelle.",
      author_1_img_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/bonnie_eisenman.jpg'
    }),
    knex('book_info').insert({
      id: 4,
      title: "You Don't Know JS: ES6 & Beyond",
      genre: 'JavaScript',
      description: "No matter how much experience you have with JavaScript, odds are you donäó»t fully understand the language. As part of the \"You Don't Know JS\" series, this compact guide focuses on new features available in ECMAScript 6 (ES6\), the latest version of the standard upon which JavaScript is built.",
      cover_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/es6_and_beyond.jpg',
      author_1_first: 'Kyle',
      author_1_last: 'Simpson',
      author_1_bio: "Kyle Simpson is an Open Web Evangelist who's passionate about all things JavaScript. He's an author, workshop trainer, tech speaker, and OSS contributor/leader.",
      author_1_img_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/kyle_simpson.jpg'
    })
  );
};
