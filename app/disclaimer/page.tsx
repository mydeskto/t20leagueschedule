import Link from 'next/link'


export default function Disclaimer() {

  return (
    <>
    <div className="min-h-screen bg-[#122754] font-inter ">

      <div className="max-w-full mx-auto pt-20">
        <div className=" rounded-lg  p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 text-left">
            Disclaimer
          </h1>

          <div className="prose prose-lg max-w-none">

            <p className="text-md text-white mb-6 leading-relaxed">
              The information on NPL Schedule is provided for general informational purposes only. While we strive to maintain accuracy and timeliness, we make no guarantees regarding the completeness, reliability, or suitability of any content on this website.
            </p>

            <ol className="text-white mt-8 space-y-6 list-decimal pl-6">
              <li>
                <span className="text-2xl font-bold block mb-2"> No Professional Advice</span>
                <p className="pl-0 my-3 text-md font-normal">
                  Content here is for informational purposes only. It is not legal, financial, or professional advice. Any actions you take based on information from this website are entirely at your own risk.
                </p>
              </li>

              <li>
                <span className="text-2xl font-bold block mb-2"> Third-Party Links and Content</span>
                <p className="pl-0 my-3 text-md font-normal">
                  This website may link to external sites. We do not control, endorse, or guarantee the content, products, or services of these sites. Please review their policies before interacting or sharing personal information.
                </p>
              </li>

              <li>
                <span className="text-2xl font-bold block mb-2"> Match Schedules and Updates</span>
                <p className="pl-0 my-3 text-md font-normal">
                  Match dates, times, and venues may change without notice. NPL Schedule is not responsible for changes made by tournament organizers. Users should confirm official match information independently.
                </p>
              </li>

              <li>
                <span className="text-2xl font-bold block mb-2"> Copyright & Trademarks</span>
                <p className="pl-0 my-3 text-md font-normal">
                  All logos, images, and team names are the property of their respective owners. NPL Schedule does not claim ownership unless explicitly stated. Any use is for editorial, educational, or informational purposes only.
                </p>
              </li>

              <li>
                <span className="text-2xl font-bold block mb-2"> Limitation of Liability</span>
                <p className="pl-0 my-3 text-md font-normal">
                  NPL Schedule and its team are not liable for any direct, indirect, incidental, or consequential damages resulting from your use of this website.
                </p>
              </li>

              <li>
                <span className="text-2xl font-bold block mb-2"> User Consent</span>
                <p className="pl-0 my-3 text-md font-normal">
                  By using this website, you accept this Disclaimer and agree to its terms.
                </p>
              </li>

              <li>
                <span className="text-2xl font-bold block mb-2"> Contact</span>
                <p className="pl-0 my-3 text-md font-normal">
                  📧 contactnplschedule@gmail.com
                </p>
              </li>
            </ol>

          </div>
        </div>
      </div>

    </div>
    </>
  )
}
