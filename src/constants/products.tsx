import sidefolioKleos from "public/images/sidefolio-kleos.png";
import sidefolioKleos2 from "public/images/sidefolio-kleos-2.png";
import sidefolioRisto from "public/images/sidefolio-risto.png";
import sidefolioRisto2 from "public/images/sidefolio-risto-2.png";
import sidefolioAntlas from "public/images/sidefolio-antlas.png";
import sidefolioAntlas2 from "public/images/sidefolio-antlas-2.png";
import sidefolioWeather from "public/images/sidefolio-weather.png";
import sidefolioWeather2 from "public/images/sidefolio-weather-2.png";

export const products = [
  // {
  //   href: "https://kerma.co",
  //   title: "Kerma",
  //   description: "Modern credit tool for everyday shoppers and merchants.",
  //   thumbnail: sidefolioAceternity,
  //   images: [sidefolioAceternity, sidefolioAceternity2],
  //   stack: ["Nextjs", "Tailwindcss", "Express", "MongoDB", "REST API"],
  //   slug: "aceternity",
  //   content: (
  //     <div>
  //       <p>
  //         Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
  //         dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
  //         cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
  //         cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
  //         non cupidatat duis esse velit ut culpa et.{" "}
  //       </p>
  //       <p>
  //         Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
  //         Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
  //         sit aute fugiat incididunt nostrud consequat proident fugiat id.
  //         Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
  //         reprehenderit. Cillum Lorem veniam eu magna exercitation.
  //         Reprehenderit adipisicing minim et officia enim et veniam Lorem
  //         excepteur velit adipisicing et Lorem magna.
  //       </p>{" "}
  //     </div>
  //   ),
  // },
  {
    href: "https://kleosapp.onrender.com/",
    title: "Kleos",
    description: "Realtime chat application for End-to-End messaging.",
    thumbnail: sidefolioKleos,
    images: [sidefolioKleos, sidefolioKleos2],
    stack: [
      "Nextjs",
      "Tailwindcss",
      "Express",
      "Socket.io",
      "API",
    ],
    slug: "kleos",
    content: (
      <div>
        <p>
          Kleos is a real-time chat application designed for seamless,
          responsive communication. Built using Next.js, Tailwind CSS, and
          DaisyUI for a sleek, modern UI, it delivers a fast and engaging user
          experience across devices.
        </p>
        <p>
          Under the hood, it leverages Node.js, Express, and Socket.io to power
          live messaging, while MongoDB handles data persistence through a
          custom API layer. Kleos showcases a full-stack architecture focused on
          speed, scalability, and usability—built as part of my sidefolio to
          explore real-time web technologies.
        </p>
      </div>
    ),
  },
  {
    href: "https://risto-school.vercel.app",
    title: "RistoSchool",
    description:
      "Modern School Management system dashboard for school administrators.",
    thumbnail: sidefolioRisto,
    images: [sidefolioRisto, sidefolioRisto2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "risto",
    content: (
      <div>
        <p>
          Risto School is a modern school management system dashboard tailored
          for school administrators. Designed with clarity and usability in
          mind, it simplifies the way schools manage operations, from student
          data to academic workflows.
        </p>
        <p>
          Built with Next.js and Tailwind CSS, Risto delivers a fast,
          responsive, and elegant interface optimized for productivity.
          Developed as a sidefolio project, it reflects a focus on clean UI
          architecture and modern frontend best practices.
        </p>
      </div>
    ),
  },
  {
    href: "https://antlas.co",
    title: "Antlas Website",
    description:
      "A beautiful and enterprise scale website built for modern Tech company.",
    thumbnail: sidefolioAntlas,
    images: [sidefolioAntlas, sidefolioAntlas2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "tailwindmasterkit",
    content: (
      <div>
        <p>
          Antlas is a modern technology website built to showcase innovation,
          insight, and impact in the digital space. With a sleek, responsive
          layout, it delivers a seamless experience across devices—designed to
          engage and inform.
        </p>
        <p>
          Developed using Next.js and Tailwind CSS, the site combines
          performance, scalability, and clean design. Antlas reflects a
          production-ready approach to frontend development with a strong focus
          on speed, accessibility, and modern aesthetics.
        </p>
      </div>
    ),
  },
  {
    href: "https://alweather.vercel.app",
    title: "Weather Checker",
    description:
      "Simple weather checker application to get current weather information.",
    thumbnail: sidefolioWeather,
    images: [sidefolioWeather, sidefolioWeather2],
    stack: ["REST API", "HTML", "CSS", "Javascript"],
    slug: "weather-checker",
    content: (
      <div>
        <p>
          Weather Checker is a lightweight weather app that lets users check
          real-time weather conditions by city. Designed with simplicity and
          speed in mind, it offers instant access to temperature, humidity, and
          forecasts through a user-friendly interface.
        </p>
        <p>
          Built as a sidefolio project, it integrates the OpenWeather API to
          fetch accurate, location-based data. The app demonstrates effective
          API handling, responsive UI design, and a focus on delivering
          essential information with clarity.
        </p>
      </div>
    ),
  },
];
