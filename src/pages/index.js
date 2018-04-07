import React from 'react';
import Link from 'gatsby-link';

import Section from '../components/Section';

const IndexPage = () => (
  <Section.Root>
    <Section.Section id="about" header="About Me">
      <Section.Text>
        Hi there! I'm Andrew. Thanks for taking the time to visit my site. I am
        a student at the University of Missouri - St. Louis, studying Computer
        Science and Mathematics. I enjoy writing code, learning about new
        technologies, tinkering with electronics, reading, and thinking about
        the future.
      </Section.Text>
      <Section.Text>
        I first began learning how to code in high school. I had received a Lego
        Robot as a gift one year, and decided that I wanted to learn how to
        program it. I discovered the{' '}
        <a href="http://www.lejos.org/" target="_blank">
          leJOS
        </a>{' '}
        project, and decided that I would use that framework to program my
        robot.
      </Section.Text>
      <Section.Text>
        I had never written any code before, and my school did not offer any
        Computer Science courses, since it was in a small, rural town. So I had
        to learn everything on my own, via the internet and books. As such, it
        took awhile to even get around to writing code for my robot, as I had to
        learn all of the basics of Java - and coding in general - first. But
        when I finally was able to write code that made my robot move, I felt
        very empowered. It was quite exhilarating to have taught myself a new
        skill. and to now be able to write code that effected actual change in
        the world.
      </Section.Text>
      <Section.Text>
        I have a couple of GitHub repositories containing the code that I wrote
        for my Lego Robot,{' '}
        <a href="https://github.com/Hopding/ev3-lejos-btrc" target="_blank">
          here
        </a>{' '}
        and{' '}
        <a href="https://github.com/Hopding/pc-lejos-rc" target="_blank">
          here
        </a>. I have also posted a{' '}
        <a href="https://www.youtube.com/watch?v=r62NlPyJVec" target="_blank">
          video
        </a>{' '}
        of it on YouTube. (Note that this is old code that I have not updated in
        years.)
      </Section.Text>
      <Section.Text>
        My coding abilities have grown significantly since then. I enjoy
        learning new programming languages, and becoming more proficient in
        them. I am also very interested in Artificial Intelligence and Machine
        Learning. It is a very important area of technology that has had a
        significant impact on our lives, and will continue to do so in the
        future. I have contributed to the{' '}
        <a
          href="https://github.com/numenta/htm.java/blob/master/README.md"
          target="_blank"
        >
          HTM.Java
        </a>{' '}
        codebase - which is an open source machine learning library licensed by{' '}
        <a href="http://numenta.com/" target="_blank">
          Numenta
        </a>. I am looking forward to learning more about neural networks, and
        other machine learning technologies and algorithms.
      </Section.Text>
    </Section.Section>

    <Section.Section id="career" header="My Career">
      <Section.Text>
        I've worked at{' '}
        <a href="https://www.tapestrysolutions.com/" target="_blank">
          Tapestry Solutions
        </a>{' '}
        as a Software Tester, where I learned a lot about software quality,
        testing techniques, and deployment cycles &amp releases.
      </Section.Text>
      <Section.Text>
        I was a participant in the{' '}
        <a href="https://globalhack.org/globalhack-vi/" target="_blank">
          GlobalHack VI
        </a>{' '}
        hackathon, whose goal was to help alleviate homelessness. My team and I
        built a <a href="https://devpost.com/software/include-homeless">tool</a>{' '}
        that allows homeless shelters to quickly locate and assist the homeless.
      </Section.Text>
      <Section.Text>
        I am currently working as a Software Developer on Maryville
        Technologies'{' '}
        <a href="https://maryvilledevcenter.com/" target="_blank">
          DevOps team
        </a>. I have learned a lot while working here about cloud computing,
        serverless technologies, REST APIs &amp Golang, JavaScript &amp ReactJS
        development, continuous integration &amp scripting, agile development,
        and delivering code as a team.
      </Section.Text>
    </Section.Section>

    <Section.Section id="projects" header="Projects">
      <Section.Text>
        I like to learn about new technologies, and I think that one of the best
        ways to do that is to share what I have learned. After all, it has been
        said that you do not truly know or understand something until you can
        teach it to others. As such, I maintain a{' '}
        <a href="http://hopding.com/" target="_blank">
          blog
        </a>{' '}
        where I discuss things I have learned and done, and write tutorials so
        others can do those things as well.
      </Section.Text>
      <Section.Text>
        I also share many of my personal projects on GitHub. A few of which I am
        particularly proud are:
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
            Raspberry Pi board with Java. I created it because I had purchased a
            Raspberry Pi Cam, and quickly noticed that there was no Java API for
            it. So I made one myself, and documented it for use by others.
          </li>
          <li>
            <b>
              <a href="https://github.com/Hopding/Picasso" target="_blank">
                Picasso
              </a>
            </b>{' '}
            is a side scrolling desktop game I created with JavaFX. I was
            learning about JavaFX for the first time, and decided that making a
            game would be an interesting way to put my knowledge into practice.
            I have posted a{' '}
            <a
              href="https://www.youtube.com/watch?v=O2IPfrGVLBE"
              target="_blank"
            >
              video
            </a>{' '}
            of it on YouTube as well. One interesting thing to note about it is
            that I chose not to use any existing game frameworks, and relied
            only on the standard Java &amp JavaFX libraries to create Picasso.
          </li>
        </ul>
      </Section.Text>
    </Section.Section>
  </Section.Root>
);

export default IndexPage;
