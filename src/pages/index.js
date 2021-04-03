import React from 'react';
import Link from 'gatsby-link';

import Frontpage from '../components/Frontpage';
import Section from '../components/Section';

import RESUME_PDF from '../../docs/Andrew-Dillon-Resume.pdf';

const ResumeButton = () => (
  <div id="resume-download">
    <a href={RESUME_PDF} download="Andrew-Dillon-Resume.pdf">
      <button>Download Resume</button>
    </a>
  </div>
);

const IndexPage = () => (
  <div>
    <Frontpage />
    <Section.Root>
      <div style={{ height: '25px' }} />
      <Section.Section id="about" header="About Me">
        <Section.Text>
          Hello! My name is Andrew. I'm a passionate software engineer, an open 
          source maintainer, a writer, and a leader. I enjoy solving hard 
          problems, designing robust systems, and building high quality 
          products that people love to use. I'm a cheerful team player and 
          strive to bring out the best in others.
        </Section.Text>
        <Section.Text>
          Personal and professional growth is very important to me. I am a 
          curious person and love to learn new things. Each day I devote 2 
          hours to reading books and over the past few months I've started 
          learning to ballroom dance, play piano, and swim!
        </Section.Text>

        <hr />

        <Section.Text>
          I first learned how to write software in high school. One year, my 
          parents gifted me a Lego Robot. At the time, I didn't know the first 
          thing about programming. So I decided to learn! I discovered the{' '}
          <a href="http://www.lejos.org" target="_blank">
            leJOS
          </a>{' '}
          project and started learning Java in order to program my robot.
        </Section.Text>
        <Section.Text>
          I lived in a small, rural town. My school didn't offer any computer
          science classes so I had to learn everything on my own from the 
          internet and books. Eventually I mastered the basics, wrote a simple 
          program, uploaded it to my little robotic rover, and watched excitedly 
          as it roved around the room. I'd found a new passion and have been 
          pursuing it ever since!
        </Section.Text>
        <Section.Text>
          (Here's a couple links to{' '}
          <a href="https://github.com/Hopding/ev3-lejos-btrc" target="_blank">
          some
          </a>
          {' '}old leJOS code I{' '}
          <a href="https://github.com/Hopding/pc-lejos-rc" target="_blank">
          {' '}wrote
          </a>
          {' '}and a{' '}
          <a href="https://www.youtube.com/watch?v=r62NlPyJVec" target="_blank">
            video
          </a>
          {' '}of my rover).
        </Section.Text>
      </Section.Section>

      <Section.Section id="career" header="My Career">
        <Section.Text>
          After graduating high school I tested software at Tapestry Solutions 
          for 7 months. In 2016 I started my first semester of college at the 
          University of Missouri - Saint Louis. Later that year I participated 
          in{' '}
          <a href="https://globalhack.org/globalhack-vi" target="_blank">
            GlobalHack VI
          </a>{' '}
          where I met a team of software engineers from Maryville Technologies. 
          A couple of months later I joined their team as a software engineering 
          intern and began my career as a professional software engineer!
        </Section.Text>
        <ResumeButton />
        <Section.Text>
          For the next few months I worked with a team of interns creating back 
          office software for the company. We also created an educational tool 
          for{' '}
          <a href="https://www.launchcode.org" target="_blank">
            LaunchCode
          </a>{' '}
          that allowed instructors to create annotated code snippets and share 
          them with students.
        </Section.Text>
        <Section.Text>
          In April of 2016 I left the intern team to join a group of engineers 
          consulting at{' '}
          <a href="https://www.unigroup.com" target="_blank">
            UniGroup
          </a>
          , the parent company of{' '}
          <a href="https://www.mayflower.com" target="_blank">
            Mayflower
          </a>{' '}
          and{' '}
          <a href="https://www.unitedvanlines.com" target="_blank">
            United Van Lines
          </a>
          . I spent the next several months designing and building software with
          an awesome UniGroup product development team. Together we delivered
          an iOS and Android app that allowed over 2,500 van operators to track 
          and service loads across the continental U.S., forming a key piece of 
          infrastructure for over $100,000,000 of business. 
        </Section.Text>
        <Section.Text>
          I was very pleased with my professional growth and the impact I had 
          been able to make. So in March of 2018 I left Maryville Technologies 
          and joined UniGroup as a software engineer. The next project I worked 
          on was an iOS and Android app that increased the speed and efficiency 
          of over 1,000 of our packers. It allowed them to perform inventories 
          in low-connectivity areas and freed up $750,000 that was previously 
          spent on an error-prone third party application.
        </Section.Text>
        <Section.Text>
          I then joined a crack team that built a web app and backend system to 
          pilot a new customer experience and pricing model. We shipped this 
          project in a mere 8 weeks. Several features of this pilot program 
          were made permanent and increased our customer conversion rate. These 
          improvements resulted in over $500,000 of additional revenue.
        </Section.Text>
        <Section.Text>
          We then designed and built a system for our agents to configure 
          geographic service areas. Part of this project involved creating a 
          subsystem for lead distribution. Our work improved the CX for 
          thousands of customers and eliminated over $2,000,000 in annual 
          expenses by increasing the efficiency and effectiveness of our 
          transportation network.
        </Section.Text>
        <Section.Text>
          In December of 2019, after 4 years of working and going to school
          full-time, I graduated from college with my Master's in Computer 
          Science. Shortly thereafter, in March of 2020, I was promoted to a
          tech lead position at UniGroup. I led a development team tasked with 
          creating a system to automate and streamline the scheduling of events 
          with customers by connecting to our agent's calendars. Our work was 
          able to increase revenue by reducing the wait time from 2+ days to 
          less than 12 hours for over 100,000 customers annually.
        </Section.Text>
        <Section.Text>
          UniGroup's team of UX designers created a custom UI design system 
          during the previous few months and had begun to use it in their 
          product designs. Our development teams were struggling to implement 
          the system, resulting in inefficiencies and frustration. To solve this 
          problem, I formed and managed a cross-team group of frontend engineers 
          and UI designers. We built a library of reusable React components 
          that improved the stability of our applications and increased the 
          velocity of our development teams by reducing waste and allowing code 
          reuse.
        </Section.Text>
        <Section.Text>
          In January of 2021 I led a team that developed a new billing system 
          for our van line's leads. We also updated and modernized the 
          distribution algorithm responsible for assigning leads to UniGroup's 
          agents. This work increased business for over 500 agents in our 
          network and increased revenue by over $3,000,000.
        </Section.Text>
      </Section.Section>

      <Section.Section id="projects" header="Projects">
        <Section.Text>
          I enjoy tinkering and writing code in my free time. Open source is 
          important to me, so I share my projects on{' '}
          <a href="https://github.com/Hopding" target="_blank">
          GitHub
          </a>{' '}
          and make it a point to publish them so others can benefit from and 
          build on my work. A few projects of which I am particularly proud are:
          <ul>
            <li>
              <p>
                <b><a href="https://github.com/Hopding/pdf-lib" target="_blank">
                  pdf-lib
                </a></b>{' '}
                is a widely used library for manipulating PDF documents in any 
                JavaScript environment. It is the crown jewel of my portfolio 
                and is without question my most successful and impactful 
                project.{' '}
                <a href="https://pdf-lib.js.org" target="_blank">
                  pdf-lib
                </a>{' '}
                currently sits at 2,500 stars on GitHub and is downloaded from 
                NPM 100,000 times per week.
              </p>
              <p>
                I created pdf-lib about 3 years ago. At that time I was working 
                on a React Native app at UniGroup and needed to modify a PDF 
                client-side. But there were no pure-JS libraries available 
                capable of doing this, so we resorted to a less than ideal 
                server-side workaround. That experience motivated me to create 
                a library to fill this gap. 
              </p>
              <p>
                Writing and maintaining pdf-lib has been a very rewarding 
                process. I've learned a lot about open source, library design, 
                JavaScript, TypeScript, ISO standards, document formats, and 
                much more.
              </p>
            </li>
            <li>
              <p>
                <b><a href="https://www.jsv9000.app" target="_blank">
                  jsv9000.app
                </a></b>{' '}
                (JavaScript Visualizer 9000) is an interactive web app that 
                visualizes and explains JavaScript's event loop. It is used by 
                programming instructors and coding schools to help developers 
                learn how async JavaScript works. I created jsv9000 as a 
                companion app for a{' '}
                <a href="https://javascript.plainenglish.io/the-javascript-execution-model-part-1-448e62628f23?source=friends_link&sk=49f288c073ce562277d50de8abb13635" target="_blank">
                  series of articles
                </a>{' '}
                I wrote about how JavaScript's event loop works.
              </p>
            </li>
            <li>
              <p>
                <b><a href="https://github.com/QDivision/chip" target="_blank">
                  chip
                </a></b>{' '}
                is a CLI tool that streamlines web development by simplifying 
                management of microservices and infrastructure on local 
                machines. I created chip to rectify a pattern of inefficient 
                development habits I noticed on several dev teams. These habits 
                wasted time and made it challenging for new devs to get up to 
                speed and contribute quickly. Chip made a big impact on 
                day-to-day developer productivity for teams that adopted it and 
                knocked days off the time required to onboard new developers.
              </p>
            </li>
          </ul>
        </Section.Text>
        <Section.Text>
          Some older projects from that I created several years ago are also on 
          GitHub:
          <ul>
            <li>
              <p>
                <b><a href="https://github.com/Hopding/NoidMAT-1.8.9" target="_blank">
                  NoidMAT
                </a></b>{' '}
                is a Minecraft mod that executes{' '}
                <a href="http://hopding.com/NoidMAT-1.8.9" target="_blank">
                  scripts
                </a>{' '}
                written by users to automate their avatar's actions. 
              </p>
            </li>
            <li>
              <p>
                <b><a href="https://github.com/Hopding/MERP" target="_blank">
                  MERP
                </a></b>{' '}
                is a robot I created with an Arduino and Raspberry Pi that can 
                be controlled from a{' '}
                <a href="https://github.com/Hopding/Merp-Controller" target="_blank">
                  desktop
                </a>{' '}
                or{' '}
                <a href="https://github.com/Hopding/Merp-Android-Controller" target="_blank">
                  Android device
                </a>
                .
              </p>
            </li>
            <li>
              <p>
                <b><a href="https://github.com/Hopding/JRPiCam" target="_blank">
                  JRPiCam
                </a></b>{' '}
                is a Java API for accessing the Raspberry Pi Cam.
              </p>
            </li>
            <li>
              <p>
                <b><a href="https://github.com/Hopding/Picasso" target="_blank">
                  Picasso
                </a></b>{' '}
                is a{' '}
                <a href="https://www.youtube.com/watch?v=O2IPfrGVLBE" target="_blank">
                  side scrolling desktop game
                </a>{' '}
                I created with JavaFX.
              </p>
            </li>
          </ul>
        </Section.Text>
      </Section.Section>

      <Section.Section id="writing" header="Writing">
        <Section.Text>
          I take pleasure in writing clean, simple, and elegant code. Similarly,
          I derive satisfaction from producing clear, informative writing. It
          has been said that one cannot truly understand something until one
          teaches it to others. Writing articles is a great way to enhance my
          own understanding while helping others along the way!
        </Section.Text>
        <Section.Text>
          The following is a compilation of articles I've written over the past
          few years:
          <ul>
            <li>
              <p>
                <b><a href="https://medium.com/swlh/how-to-create-and-modify-pdf-files-in-deno-ffaad7099b0?source=friends_link&sk=3da183bb776d059df428eaea52102f19" target="_blank">
                  How to Create and Modify PDF Files in Deno With pdf-lib
                </a></b>{' '}
                - An explanation of Deno, why most JavaScript PDF libraries are 
                incompatible with it, and examples of using pdf-lib in Deno 
                scripts.
              </p>
            </li>
            <li>
              <p>
                <b>
                  The JavaScript Execution Model{' '}
                  <a href="https://javascript.plainenglish.io/the-javascript-execution-model-part-1-448e62628f23?source=friends_link&sk=49f288c073ce562277d50de8abb13635" target="_blank">
                  Part 1
                  </a>{' '}
                  and{' '}
                  <a href="https://javascript.plainenglish.io/the-javascript-execution-model-part-2-467c7b9b42fa?source=friends_link&sk=723a80ceaf917a2abe274ce238d67147" target="_blank">
                  Part 2
                  </a>
                </b>{' '}
                - A careful, in depth explanation of JavaScript's event loop 
                execution model and its implications for developers.
              </p>
            </li>
            <li>
              <p>
                <b><a href="https://qdivision.io/offline-app-architectures" target="_blank">
                  Offline App Architectures
                </a></b>{' '}
                - An exploration of different ways to build mobile applications 
                that work reliably in low connectivity environments.
              </p>
            </li>
            <li>
              <p>
                <b><a href="https://hopding.com/sdr-classifier" target="_blank">
                  The SDR Classifier
                </a></b>{' '}
                - A detailed explanation of NuPIC's SDR Classifier and the 
                Softmax activation function.
              </p>
            </li>
          </ul>
        </Section.Text>
      </Section.Section>

      <Section.Section id="contact" header="Contact">
        <Section.Text>
          Please feel free to reach out via{' '}
          <a href="mailto:andrew.dillon.j@gmail.com">
            email
          </a>{' '}
          or connect
          with me on{' '}
          <a href="https://www.linkedin.com/in/andrewjdillon">
            LinkedIn
          </a>
          ! I'm always happy to talk, answer questions, or discuss new 
          opportunities.
        </Section.Text>
      </Section.Section>
    </Section.Root>
  </div>
);

export default IndexPage;
