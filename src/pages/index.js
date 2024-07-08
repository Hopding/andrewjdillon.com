import React from 'react';
import Link from 'gatsby-link';

import Frontpage from '../components/Frontpage';
import Section from '../components/Section';

const ResumeButton = () => (
  <div id="resume-download">
    <a href="/resume.pdf" target="_blank">
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
          Hi there, I'm Andrew! 👋
        </Section.Text>
        <Section.Text>
          I'm a skilled software engineer with 8 years of experience building 
          high quality products that people love to use.
        </Section.Text>
        <Section.Text>
          I write production software used by millions of people around the world. 
          I'm an open
          source author, a leader, and a team player who brings out the best in
          others.
        </Section.Text>
      </Section.Section>

      <Section.Section id="career" header="My Career">
        <Section.Text>
          I'm a senior software engineer at GitHub.
        </Section.Text>
        <Section.Text>
          I take pride in writing high quality, maintainable, secure software. I lead teams building large scale distributed systems, web apps, and mobile apps.
        </Section.Text>
        <Section.Text>
          My work makes customers happier, increases revenue, and saves money.
        </Section.Text>
        <ResumeButton />
      </Section.Section>

      <Section.Section id="hire" header="Hire Me">
        <Section.Text>
          If you'd like to hire me for a project, let's talk! Send me an{' '}
          <a href="mailto:andrew.dillon.j@gmail.com">
            email
          </a>{' '}
          or connect
          with me on{' '}
          <a href="https://www.linkedin.com/in/andrewjdillon">
            LinkedIn
          </a>
          .
        </Section.Text>
      </Section.Section>

      <Section.Section id="projects" header="Projects">
        <Section.Text>
          I'm the author of{' '}
          <a href="https://github.com/Hopding/pdf-lib" target="_blank"> 
            <b>pdf-lib</b>
          </a> - the most popular JavaScript library for processing PDF documents. It's used by thousands of applications, hundreds of companies, and government agencies around the world.
        </Section.Text>
        <Section.Text>
          pdf-lib has <b>6,500</b> GitHub stars and is downloaded over <b>1 million</b> times per week.
        </Section.Text>

        <hr />

        <Section.Text>
          I have a bunch of other side projects going back several years:
          <ul>
            <li>
              <p>
                <b><a href="https://www.jsv9000.app" target="_blank">
                  jsv9000.app
                </a></b>{' '}
                visualizes JavaScript's event loop. It's used by 
                programming instructors and coding schools to help developers 
                learn how async JavaScript works.
              </p>
            </li>
            <li>
              <p>
                <b><a href="https://github.com/QDivision/chip" target="_blank">
                  chip
                </a></b>{' '}
                is a CLI tool that makes it easier to manage microservices for local development. 
              </p>
            </li>
            <li>
              <p>
                <b><a href="https://github.com/Hopding/mini-react-native" target="_blank">
                  mini-react-native
                </a></b>{' '}
                is a hacky recreation of React Native in miniature. 
              </p>
            </li>

            
          
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
        <hr />
        <Section.Text>
          Here's a couple links to{' '}
          <a href="https://github.com/Hopding/ev3-lejos-btrc" target="_blank">
          some
          </a>
          {' '}old LeJOS {' '}
          <a href="https://github.com/Hopding/pc-lejos-rc" target="_blank">
          {' '}code
          </a>
          {' '}and a{' '}
          <a href="https://www.youtube.com/watch?v=r62NlPyJVec" target="_blank">
            video
          </a>
          {' '}of the lego robot it controlled. This is one of the first programs I ever wrote! 🙂
        </Section.Text>
      </Section.Section>

      <Section.Section id="writing" header="Writing">
        <Section.Text>
          Some articles I've written over the years:
          <ul>
            <li>
              <a href="https://medium.com/swlh/how-to-create-and-modify-pdf-files-in-deno-ffaad7099b0?source=friends_link&sk=3da183bb776d059df428eaea52102f19" target="_blank">
                How to Create and Modify PDF Files in Deno with pdf-lib
              </a>
            </li>
            <li>
              The JavaScript Execution Model{' '}
              <a href="https://javascript.plainenglish.io/the-javascript-execution-model-part-1-448e62628f23?source=friends_link&sk=49f288c073ce562277d50de8abb13635" target="_blank">
              Part 1
              </a>{' '}
              and{' '}
              <a href="https://javascript.plainenglish.io/the-javascript-execution-model-part-2-467c7b9b42fa?source=friends_link&sk=723a80ceaf917a2abe274ce238d67147" target="_blank">
              Part 2
              </a>
            </li>
            <li>
              <a href="https://hopding.com/sdr-classifier" target="_blank">
                The SDR Classifier
              </a>
            </li>
          </ul>
        </Section.Text>
      </Section.Section>
    </Section.Root>
  </div>
);

export default IndexPage;
