import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Education',
  description:
    'Ive used my non-traditional education to use software as a tool to make amazing products',
}

export default function Education() {
  return (
    <SimpleLayout
      title="Self taught coder going to school to learn everything else!"
      intro="I started coding in high school where i built my first video game called 'Mend it Mario'. I have always loved coding and went to university to make robotic prosthetics by studying human kinematics. Today I use my education to add tech into new industries to help humanity."
    >
      <div className="space-y-20">
        <SpeakingSection title="Lighthouse Labs">
          <Appearance
            href="https://www.lighthouselabs.ca/"
            title="Applying School to the workplace"
            description="Mastered modern frameworks, notably React, and sharpened skills in application development emphasizing UX/UI
            best practices.
            Proudly secured first place on Demo Day with our capstone project, Dealbreaker - a real-time game show React app
            to help users foster new friendships. Stack: React.js, MongoDB, Express.js, deployed on Heroku."
            event="May 2019 - Aug 2019"
            cta="Diploma, Full Stack Web development"
          />
        </SpeakingSection>
        <SpeakingSection title="Western University">
          <Appearance
            href="https://uwo.ca/"
            title="Kinematics + Computer Science"
            description="Studies focused around human movement, and computer science.
            Trained to analyze biomechanics properties of both static and dynamic subjects, with vast understanding of human body functions, and ability to integrate live functions into computer algorithms and programs.
            I developed a well-rounded understanding of Biomechanics, Computer Science, and Movement Neuroscience, and how the three disciplines can work together to create tools such as robotic prosthetics and non-traditional user interfaces beyond keyboards and mice. Relevant Coursework: Data Structures and Algorithms, Data Analytics, Databases, and Digital Systems."
            event="2013 - 2018"
            cta="Bachelor's degree, Honours Spec."
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
