import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Support',
  description: 'Get help with our apps and services.',
}

export default function Support() {
  return (
    <SimpleLayout
      title="Support"
      intro="We're here to help! Find answers to common questions or get in touch with us."
    >
      <div className="prose prose-zinc max-w-none dark:prose-invert">
        <div className="mb-12 rounded-lg border border-teal-200 bg-teal-50 p-6 dark:border-teal-800 dark:bg-teal-900/20">
          <h2 className="mt-0 text-xl font-bold">Developer Information</h2>
          <div className="space-y-3">
            <div>
              <strong>Developer:</strong> Junaid Ahmad
            </div>
            <div>
              <strong>Email:</strong>{' '}
              <a href="mailto:junaidpath@icloud.com" className="text-teal-600 hover:text-teal-700 dark:text-teal-400">
                junaidpath@icloud.com
              </a>
            </div>
            <div>
              <strong>Response Time:</strong> Within 24-48 hours (Monday-Friday)
            </div>
            <div>
              <strong>Location:</strong> United States
            </div>
            <div>
              <strong>Support Hours:</strong> 9 AM - 6 PM EST
            </div>
          </div>
          
          <div className="mt-4 border-t border-teal-200 pt-4 dark:border-teal-700">
            <p className="mb-2 font-semibold">For Educational Use:</p>
            <p className="text-sm">
              If you&apos;re using our apps in a classroom or educational setting, please contact us for priority support. 
              We offer dedicated assistance for educators and can provide bulk licenses or special accommodations for educational institutions.
            </p>
          </div>
        </div>

        <h2>Frequently Asked Questions</h2>
        
        <h3>R U Playing</h3>
        <details className="mb-4">
          <summary className="cursor-pointer font-semibold">How do I play the game?</summary>
          <p className="mt-2">
            Look at the four pictures and find the word that connects them all. Type your answer and see if you&apos;re right! Each puzzle has one common theme or word that links all four images.
          </p>
        </details>
        
        <details className="mb-4">
          <summary className="cursor-pointer font-semibold">I&apos;m stuck on a puzzle. Can I get hints?</summary>
          <p className="mt-2">
            Yes! Use the hint button to reveal letters or get clues about the connection. Hints are limited per puzzle to keep the game challenging.
          </p>
        </details>

        <h3>Black Lotus</h3>
        <details className="mb-4">
          <summary className="cursor-pointer font-semibold">What is Black Lotus?</summary>
          <p className="mt-2">
            Black Lotus is an interactive narrative experience where you engage with AI characters at a mysterious resort. Your choices and conversations shape your unique story.
          </p>
        </details>
        
        <details className="mb-4">
          <summary className="cursor-pointer font-semibold">How do the AI characters work?</summary>
          <p className="mt-2">
            Each character has their own personality, backstory, and memories. They respond dynamically to your interactions, creating a personalized narrative experience.
          </p>
        </details>

        <h3>Unhinged</h3>
        <details className="mb-4">
          <summary className="cursor-pointer font-semibold">How do I submit a quote?</summary>
          <p className="mt-2">
            Open the app, tap the plus button, enter the funny quote, and optionally add context or the person who said it. Share it with your friends!
          </p>
        </details>
        
        <details className="mb-4">
          <summary className="cursor-pointer font-semibold">Can I keep quotes private?</summary>
          <p className="mt-2">
            Yes! You can save quotes privately or share them with specific friend groups. Control your privacy settings in the app preferences.
          </p>
        </details>

        <h2>Technical Support</h2>
        
        <h3>Common Issues</h3>
        <ul>
          <li>
            <strong>App crashes on startup:</strong> Try deleting and reinstalling the app. Make sure you have the latest version from the App Store.
          </li>
          <li>
            <strong>Can&apos;t connect to servers:</strong> Check your internet connection and ensure the app has necessary permissions in your device settings.
          </li>
          <li>
            <strong>Lost progress:</strong> If you&apos;re signed in, your progress should sync automatically. Check that you&apos;re using the same account.
          </li>
          <li>
            <strong>Performance issues:</strong> Close other apps, restart your device, or free up storage space if the app is running slowly.
          </li>
        </ul>

        <h2>Contact Support</h2>
        <p>
          Still need help? We&apos;re here for you:
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Email Support</h3>
            <p>
              For detailed inquiries or technical issues, email us at:
              <br />
              <a href="mailto:junaidpath@icloud.com" className="text-teal-500 hover:text-teal-600">
                junaidpath@icloud.com
              </a>
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              We typically respond within 24-48 hours.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Bug Reports</h3>
            <p>
              Found a bug? Please include:
            </p>
            <ul>
              <li>App name and version</li>
              <li>Device model and OS version</li>
              <li>Steps to reproduce the issue</li>
              <li>Screenshots if applicable</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Feature Requests</h3>
            <p>
              Have ideas to make our apps better? We&apos;d love to hear from you! Send your suggestions to our email with &quot;Feature Request&quot; in the subject line.
            </p>
          </div>
        </div>

        <h2>Response Times</h2>
        <p>
          We strive to respond to all inquiries as quickly as possible:
        </p>
        <ul>
          <li>Critical issues: Within 24 hours</li>
          <li>General support: 24-48 hours</li>
          <li>Feature requests: Within 1 week</li>
        </ul>

        <div className="mt-12 rounded-lg bg-zinc-50 p-6 dark:bg-zinc-800/50">
          <h3 className="mb-3 font-semibold">Before Contacting Support</h3>
          <p className="mb-3">Please try these steps:</p>
          <ol className="list-decimal pl-5">
            <li>Check the FAQ section above</li>
            <li>Ensure your app is updated to the latest version</li>
            <li>Restart the app or your device</li>
            <li>Check your internet connection</li>
          </ol>
        </div>
      </div>
    </SimpleLayout>
  )
}