import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Experiences',
  description: 'Work I have done to become who I am today.',
}

export default function Experiences() {
  return (
    <SimpleLayout
      title="Work I have done to become who I am today."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Founder">
          <Tool title="Dr.Doc AI">
            <ul className="list-disc pl-5">
              <li className="mt-2">
                Created healthcare documentation platform using LangChain,
                vector databases, and Python, improving SOAP note efficiency by
                50 percent outperforming industry competitors like Nuance
                Dragon.
              </li>
              <l1 className="mt-2">
                Developed transcription and documentation feature for healthcare
                appointment notes using LLM and vector databases, achieving
                SOAP-style output in 3 seconds.
              </l1>
              <l1 className="mt-2">
                Led product testing for PMF, on-boarding 100+ beta customers and
                incorporating active feedback
              </l1>
            </ul>
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Sublime Text 4">
            I don’t care if it’s missing all of the fancy IDE features everyone
            else relies on, Sublime Text is still the best text editor ever
            made.
          </Tool>
          <Tool title="iTerm2">
            I’m honestly not even sure what features I get with this that aren’t
            just part of the macOS Terminal but it’s what I use.
          </Tool>
          <Tool title="TablePlus">
            Great software for working with databases. Has saved me from
            building about a thousand admin interfaces for my various projects
            over the years.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Alfred">
            It’s not the newest kid on the block but it’s still the fastest. The
            Sublime Text of the application launcher world.
          </Tool>
          <Tool title="Reflect">
            Using a daily notes system instead of trying to keep things
            organized by topics has been super powerful for me. And with
            Reflect, it’s still easy for me to keep all of that stuff
            discoverable by topic even though all of my writing happens in the
            daily note.
          </Tool>
          <Tool title="SavvyCal">
            Great tool for scheduling meetings while protecting my calendar and
            making sure I still have lots of time for deep work during the week.
          </Tool>
          <Tool title="Focus">
            Simple tool for blocking distracting websites when I need to just do
            the work and get some momentum going.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
