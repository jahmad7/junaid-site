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
      intro="My journey in software development has been marked by diverse roles and a drive for innovation. From early web app development to launching a leading healthcare platform, I've collaborated with talented teams across cities like Toronto and Victoria. Each role brought its unique challenges, but all underscored my pursuit of excellence. Dive into the milestones that shaped my career below:"
    >
      <div className="space-y-20">
        <ToolsSection
          title="Founder"
          description="Aug 2023 - Present"
          location="Victoria, BC"
        >
          <Tool title="Dr.Doc AI" href="https://www.drdoc.ai/">
            <ul className="list-disc pl-5">
              <li className="mt-2">
                Created healthcare documentation platform using LangChain,
                vector databases, and Python, improving SOAP note efficiency by
                50 percent outperforming industry competitors like Nuance
                Dragon.
              </li>
              <li className="mt-2">
                Developed transcription and documentation feature for healthcare
                appointment notes using LLM and vector databases, achieving
                SOAP-style output in 3 seconds.
              </li>
              <li className="mt-2">
                Led product testing for PMF, on-boarding 100+ beta customers and
                incorporating active feedback.
              </li>
            </ul>
          </Tool>
        </ToolsSection>
        <ToolsSection
          title="Lead Software Engineer"
          description="July 2020 - Present"
          location="Toronto, ON"
        >
          <Tool title="ATG Pharma Inc" href="https://www.atgpharma.com/">
            <ul className="list-disc pl-5">
              <li className="mt-2">
                Streamlined entire product delivery cycle by building
                comprehensive software platform utilizing React, Javascript,
                Python and Django.
              </li>
              <li className="mt-2">
                Overcame integration challenges, resulting in 300 percent
                increase in efficiency from lead acquisition to post-sales
                processes by automating estimate generation (3 weeks down to 4
                days lead time).
              </li>
              <li className="mt-2">
                Led cross-functional team to develop web application for sales
                and manufacturing equipment monitoring, resulting in streamlined
                purchasing process and improved operational efficiency.
              </li>
              <li className="mt-2">
                Collaborated with electrical engineering, applications
                engineering, marketing, and accounting to develop
                customer-centric software solutions, resulting in 250 percent
                increase in customer acquisition and profitability.
              </li>
              <li className="mt-2">
                Boosted revenue from 4MM to 10MM annually by streamlining sales
                processes through staff portal integration with PipeDrive.
              </li>
              <li className="mt-2">
                Enhanced production scheduling and customer engagement by
                linking platform with MRP software for real-time updates
              </li>
              <li className="mt-2">
                Facilitated seamless customer experience via client portal using
                React front-end and Django back-end for 400+ customers resulting
                in 30 percent decrease in customer service inquiries.
              </li>
            </ul>
          </Tool>
        </ToolsSection>
        <ToolsSection
          title="Founding Engineer"
          description="July 2022 - July 2023"
          location="Victoria, BC"
        >
          <Tool title="Jackrabbit Ops" href="https://www.jackrabbitops.com/">
            <ul className="list-disc pl-5">
              <li className="mt-2">
                Developed AI-powered lead response and meeting scheduling
                system, achieving operations at 10 percent of traditional cost
                of SDR.
              </li>
              <li className="mt-2">
                Initiated development of AI process documentation tool
                simplifying company-wide processes
              </li>
              <li className="mt-2">
                Pivoted software focus towards specialized solution targeting
                sales process and lead qualification.
              </li>
              <li className="mt-2">
                Conceptualized and developed AI system automating lead
                qualification, reducing operational costs by 90 percent.
              </li>
              <li className="mt-2">
                Implemented LLM agents understanding customer profiles and
                streamlining lead transition from inbound to qualified stage.
              </li>
              <li className="mt-2">
                Designed comprehensive email system maintaining lead engagement.
              </li>
              <li className="mt-2">
                Implemented AI responses mimicking human interaction, boosting
                trust and lead qualification rates.
              </li>
              <li className="mt-2">
                Developed high-performance web application using React (Next.js)
                for front-end and Python (Django) for back-end, resulting in 50
                percent increase in user engagement.
              </li>
            </ul>
          </Tool>
        </ToolsSection>
        <ToolsSection
          title="Mentor"
          description="Sept 2020 - Jan 2022"
          location="Toronto, ON"
        >
          <Tool title="Lighthouse Labs" href="https://www.lighthouselabs.ca/">
            <ul className="list-disc pl-5">
              <li className="mt-2">
                Mentored 20+ future software developers in problem-solving,
                debugging, and architecture.
              </li>
              <li className="mt-2">
                Enhanced their understanding of CS fundamentals like data
                structures and algorithms, leading to 30 percent increase in
                their program completion rate.
              </li>
              <li className="mt-2">
                Established enduring mentorship relationships with boot-camp
                students, providing tailored lessons based on individual needs.
              </li>
              <li className="mt-2">
                On-boarded new mentors through shadow sessions, demonstrating
                effective problem-solving strategies.
              </li>
              <li className="mt-2">
                Implemented one-on-one sessions resulting in significant
                improvement in student performance.
              </li>
            </ul>
          </Tool>
        </ToolsSection>
        <ToolsSection
          title="Software Engineer"
          description="July 2019 - July 2020"
          location="Toronto, ON"
        >
          <Tool title="ATG Pharma Inc" href="https://www.atgpharma.com/">
            <ul className="list-disc pl-5">
              <li className="mt-2">
                Led conversion of large-scale WordPress site to React
                application, overcoming design compatibility issues, resulting
                in 400 percent rendering speed increase and 5x boost in daily
                sales leads.
              </li>
              <li className="mt-2">
                Reduced sales-cycle time by 60 percent through development of
                &apos;RoboBuilder&apos;, a website wizard to configure and get
                quotes on manufacturing equipment.
              </li>
              <li className="mt-2">
                Transitioned company to Industry 4.0 standards with serverless
                functions on AWS for business logic, modernizing technology
                infrastructure.
              </li>
              <li className="mt-2">
                Led co-op students in agile software development, resulting in
                successful delivery of 5 key projects using React.js and
                Express.js.
              </li>
            </ul>
          </Tool>
        </ToolsSection>
        <ToolsSection
          title="Genius Admin"
          description="Oct 2018 - June 2019"
          location="Toronto, ON"
        >
          <Tool title="Apple Inc" href="https://www.apple.com/">
            <ul className="list-disc pl-5">
              <li className="mt-2">
                Managed team of repair technicians, maintaining 98 percent
                on-time completion rate for high-standard repairs on Apple
                devices including iPhones, iPads, and MacBooks.
              </li>
              <li className="mt-2">
                Diagnosed product issues swiftly during customer consultations,
                effectively communicated complex technical solutions, improving
                customer satisfaction by 20 percent.
              </li>
              <li className="mt-2">
                Administered all repair-related activities, reported daily
                quality updates, identified repair failures and proposed
                solutions resulting in 20 percent increase in operational
                efficiency using internal task management tool.
              </li>
            </ul>
          </Tool>
        </ToolsSection>
        <ToolsSection
          title="Software Developer"
          description="Sept 2015 - June 2017"
          location="Toronto, ON"
        >
          <Tool title="Lean N Go">
            <ul className="list-disc pl-5">
              <li className="mt-2">
                Developed web application using Dreamweaver for university
                start-up facilitating student registration for meal plan
                services.
              </li>
              <li className="mt-2">
                Implemented user database capturing payment and meal
                subscription details. \item Integrated PayPal for secure
                transaction processing.
              </li>
              <li className="mt-2">
                Integrated PayPal for secure transaction processing.
              </li>
              <li className="mt-2">
                Established customer support page featuring Facebook-linked
                chat.
              </li>
              <li className="mt-2">
                Designed user interface for mobile app startup using Sketch,
                improving user experience and increasing user engagement by 20
                percent.
              </li>
            </ul>
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
