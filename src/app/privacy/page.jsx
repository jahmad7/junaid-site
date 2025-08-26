import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Privacy Policy',
  description: 'How we collect, use, and protect your information.',
}

export default function Privacy() {
  return (
    <SimpleLayout
      title="Privacy Policy"
      intro="Your privacy is important to us. This policy explains how we handle your information."
    >
      <div className="prose prose-zinc max-w-none dark:prose-invert">
        <h2>Information We Collect</h2>
        <p>
          We collect minimal information necessary to provide our services:
        </p>
        <ul>
          <li>Device information for app functionality</li>
          <li>Usage analytics to improve user experience</li>
          <li>Game progress and scores (stored locally on your device)</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>
          The information we collect is used to:
        </p>
        <ul>
          <li>Provide and maintain our services</li>
          <li>Improve and optimize app performance</li>
          <li>Understand usage patterns to enhance features</li>
          <li>Communicate important updates when necessary</li>
        </ul>

        <h2>Data Storage and Security</h2>
        <p>
          We prioritize the security of your data:
        </p>
        <ul>
          <li>All game data is stored locally on your device</li>
          <li>We do not sell or share your personal information with third parties</li>
          <li>We use industry-standard security measures to protect any data transmitted</li>
          <li>Analytics data is anonymized and aggregated</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>
          Our apps may use third-party services that collect information:
        </p>
        <ul>
          <li>Analytics services for app improvement</li>
          <li>Crash reporting to fix issues quickly</li>
        </ul>
        <p>
          These services have their own privacy policies governing the use of your information.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul>
          <li>Access the information we have about you</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of analytics collection</li>
          <li>Contact us with privacy concerns</li>
        </ul>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this privacy policy or our data practices, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> junaidpath@icloud.com
        </p>

        <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-700">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </SimpleLayout>
  )
}