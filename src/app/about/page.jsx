import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Junaid Ahmad. I use software to better humanity and build community',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Junaid Ahmad. I live in Victoria, BC, Canada, where I build the
            future of software and community.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              From as long as I can remember, I have always had a knack for
              seeing beyond the surface—hacking, in its true essence, means to
              identify and exploit weaknesses, and thats what I did. At the age
              of 9, when iTunes was the rave and my friends were lost in a world
              of music, my pocket-friendly solution was to record tunes from
              YouTube videos, saving them on my second-hand Sony Zune. While
              they had iTunes, I had initiative.
            </p>
            <p>
              This proclivity for navigating the digital landscape only
              intensified. I delved into online games, scoured for movie
              sources, and even found ingenious ways to procure free coupons.
              Soon, coding became an indispensable tool. Every so often, a
              poorly constructed paywall would block my path, urging me to
              enhance my coding skills and push boundaries.
            </p>
            <p>
              My transformative years in High School were under the guidance of
              the remarkable Mr. Hsiung, my computer science teacher. The
              knowledge he imparted over two short years gave wings to my
              aspirations. I discovered that the true boundary to what I could
              create with code was my own imagination. A testament to this is my
              game, &quot;Mend it Mario,&quot; where players take on the role of
              Mario, fixing the chaos left in Ralphs wake. Sharing it with
              friends, I relished the joy of creating products that resonate and
              bring smiles.
            </p>
            <p>
              Today, as the proud founder of Dr.Doc AI, Im channeling my passion
              and experience into new directions. My mission? To empower doctors
              by streamlining their administrative burdens, letting them focus
              on patient care. Not only is Dr.Doc AI leaps and bounds ahead of
              its competitors in efficiency, but its also a fraction of the
              cost. At its core, my enduring goal remains unchanged: leveraging
              software to enhance accessibility and, in doing so, add a touch
              more happiness to the world.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://twitter.com/junaid_builds"
              icon={TwitterIcon}
            >
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/junaid_builds/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/jahmad7"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/junaidaahmad/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:junaid@jackrabbitops.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              junaid@jackrabbitops.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
