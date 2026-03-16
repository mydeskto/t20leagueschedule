import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - NPL Schedule | Nepal Premier League',
  description: 'Learn how NPL Schedule uses cookies and similar technologies to enhance user experience, serve ads, and analyze site performance.',
  alternates: {
    canonical: 'https://nplschedule.com/cookie-policy',
  },
}

export default function CookiePolicy() {

  return (
    <div className="min-h-screen bg-[#122754] font-inter pt-20">
      <div className="max-w-full mx-auto">
        <div className="rounded-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 text-left">
            Cookie Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-md text-white mb-6 leading-relaxed">
              This Cookie Policy explains how NPL Schedule uses cookies and similar technologies on our website to enhance user experience, serve relevant ads, and analyze site performance.
            </p>

            <ol className="text-white mt-8 space-y-6 list-decimal pl-6">
              <li>
                <span className="text-2xl font-bold block mb-2"> What Are Cookies?</span>
                <p className="pl-0 my-3 text-md font-normal">
                  Cookies are small text files stored on your device by your browser. They allow websites to remember your preferences and actions over time.
                </p>
              </li>

              <li>
                <span className="text-2xl font-bold block mb-2"> Types of Cookies We Use</span>
                <ul className="list-disc pl-6 space-y-1 my-3">
                  <li><strong>Essential Cookies:</strong> Necessary for website functionality, like page navigation and secure areas.</li>
                  <li><strong>Performance Cookies:</strong> Help analyze how visitors use the website, e.g., pages visited and time spent.</li>
                  <li><strong>Advertising Cookies:</strong> Serve relevant ads through Google AdSense and track ad performance.</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences, such as language or display settings.</li>
                </ul>
              </li>

              <li>
                <span className="text-2xl font-bold block mb-2"> How We Use Cookies</span>
                <ul className="list-disc pl-6 space-y-1 my-3">
                  <li>To improve website performance and usability</li>
                  <li>To understand visitor behavior and traffic patterns</li>
                  <li>To display personalized advertisements via Google AdSense</li>
                </ul>
              </li>

              <li>
                <span className="text-2xl font-bold block mb-2"> Third-Party Cookies</span>
                <ul className="list-disc pl-6 space-y-1 my-3">
                  <li>We use trusted third-party services, such as Google Analytics and Google AdSense.</li>
                  <li>These services may set their own cookies to track usage or serve ads.</li>
                  <li>For more information, refer to their privacy policies.</li>
                </ul>
              </li>

              <li>
                <span className="text-2xl font-bold block mb-2">Managing Cookies</span>
                <ul className="list-disc pl-6 space-y-1 my-3">
                  <li>You can choose to disable cookies in your browser settings.</li>
                  <li>Disabling cookies may affect website functionality and user experience.</li>
                </ul>
              </li>

              <li>
                <span className="text-2xl font-bold block mb-2"> Consent</span>
                <p className="pl-0 my-3 text-md font-normal">
                  By using our website, you consent to the use of cookies in accordance with this policy.
                </p>
              </li>

              <li>
                <span className="text-2xl font-bold block mb-2"> Updates to This Policy</span>
                <p className="pl-0 my-3 text-md font-normal">
                  We may update this Cookie Policy periodically. Changes will be reflected on this page with a revised "Last Updated" date.
                </p>
              </li>

              <li>
                <span className="text-2xl font-bold block mb-2">Contact Us</span>
                <p className="pl-0 my-3 text-md font-normal mb-2">
                  For questions regarding cookies or data practices:
                </p>
                <p className="pl-0 my-3 text-md font-normal">
                  📧 contactnplschedule@gmail.com
                </p>
              </li>
            </ol>

          </div>
        </div>
      </div>
    </div>
  )
}
