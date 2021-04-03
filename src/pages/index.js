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
          source maintainer, a writer, and a leader. Personal and professional 
          growth is very important to me. I am a curious person and love to 
          learn new things. Each day I devote 2 hours to reading books and 
          over the past few months I've started learning to ballroom dance, play 
          piano, and swim!
        </Section.Text>
        <Section.Text>
          I first began learning how to write software in high school. My 
          parents gifted me a Lego Robot one year. At the time, I didn't know 
          the first thing about programming. So I decided to learn! I discovered 
          the{' '}
          <a href="http://www.lejos.org" target="_blank">
            leJOS
          </a>{' '}
          project and started learning Java in order to program my robot.
        </Section.Text>
        <Section.Text>
          I lived in a small, rural town. My school didn't offer any computer
          science classes so I had to learn everything on my own from the 
          internet and books. Eventually I mastered the basics and was able to 
          write a simple program and upload it to my little robotic rover. A 
          feeling of intense excitement welled up inside me as I watched my 
          robot slowly moving around the room. I'd found a new passion and have
          been pursuing it ever since!
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
          In March of 2020 I was promoted to tech lead. I led a development 
          team tasked with creating a system to automate and streamline the 
          scheduling of events with customers by connecting to our agent's 
          calendars. Our work was able to increase revenue by reducing the 
          wait time from 2+ days to less than 12 hours for over 100,000 
          customers annually.
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
          I like to learn about new technologies, and I think that one of the
          best ways to do that is to share what I have learned. After all, it
          has been said that you do not truly know or understand something until
          you can teach it to others. As such, I maintain a{' '}
          <a href="http://hopding.com/" target="_blank">
            blog
          </a>{' '}
          where I discuss things I have learned and done, and write tutorials so
          others can do those things as well.
        </Section.Text>
        <Section.Text>
          I also share many of my personal projects on GitHub. A few of which I
          am particularly proud are:
          <ul>
            <li>
              <b>
                <a
                  href="https://github.com/Hopding/NoidMAT-1.8.9"
                  target="_blank"
                >
                  NoidMAT
                </a>
              </b>{' '}
              is a Minecraft mod that I developed using the Forge modding
              framework. It allows users to write simple scripts in Java to
              automate their Minecraft avatar's actions. I created a webpage for
              it{' '}
              <a href="http://hopding.com/NoidMAT-1.8.9/" target="_blank">
                here
              </a>{' '}
              which contains more details. I learned a lot while developing the
              mod, especially about loading and executing code dynamically,
              creating a user friendly API, and concurrent programming.
            </li>
            <li>
              <b>
                <a href="https://github.com/Hopding/MERP" target="_blank">
                  MERP
                </a>
              </b>{' '}
              is a result of my continued interest in robots and electronics. It
              is a robot I created with an Arduino and Raspberry Pi that can be
              remote controlled over WiFi via a{' '}
              <a
                href="https://github.com/Hopding/Merp-Controller"
                target="_blank"
              >
                PC
              </a>{' '}
              or{' '}
              <a
                href="https://github.com/Hopding/Merp-Android-Controller"
                target="_blank"
              >
                Android device
              </a>.
            </li>
            <li>
              <b>
                <a href="https://github.com/Hopding/JRPiCam" target="_blank">
                  JRPiCam
                </a>
              </b>{' '}
              is a Java API that allows users to access the camera on their
              Raspberry Pi board with Java. I created it because I had purchased
              a Raspberry Pi Cam, and quickly noticed that there was no Java API
              for it. So I made one myself, and documented it for use by others.
            </li>
            <li>
              <b>
                <a href="https://github.com/Hopding/Picasso" target="_blank">
                  Picasso
                </a>
              </b>{' '}
              is a side scrolling desktop game I created with JavaFX. I was
              learning about JavaFX for the first time, and decided that making
              a game would be an interesting way to put my knowledge into
              practice. I have posted a{' '}
              <a
                href="https://www.youtube.com/watch?v=O2IPfrGVLBE"
                target="_blank"
              >
                video
              </a>{' '}
              of it on YouTube as well. One interesting thing to note about it
              is that I chose not to use any existing game frameworks, and
              relied only on the standard Java & JavaFX libraries to create
              Picasso.
            </li>
          </ul>
        </Section.Text>
      </Section.Section>

      <Section.Section id="writing" header="Writing">
        <Section.Text>
          Hi there! I'm Andrew. Thanks for taking the time to visit my site. I
          am a student at the University of Missouri - St. Louis, studying
          Computer Science and Mathematics. I enjoy writing code, learning about
          new technologies, tinkering with electronics, reading, and thinking
          about the future.
        </Section.Text>
        </Section.Section>

      <Section.Section id="thank-you" header="Thank You">
        <Section.Text>
          Thanks again for visiting my webpage! I hope your time here was well
          spent. Please feel free to reach out to me via{' '}
          <a href="mailto:andrew.dillon.j@gmail.com">email</a>, or to connect
          with me on{' '}
          <a href="https://www.linkedin.com/in/andrew-dillon-64b539119/">
            LinkedIn
          </a>. I am always interested in talking, answering questions, or
          discussing new opportunities!
        </Section.Text>
      </Section.Section>
    </Section.Root>
  </div>
);

export default IndexPage;
