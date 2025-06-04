import { Typography } from '@/components/typography';
import Image from 'next/image';

export default function HelpGuidePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl font-sans text-[1.08rem] bg-background">
      <div className="mx-auto">
        <Typography>
          {/* Side Settings Panel Section */}
          <section className="mb-16">
            <h1 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">POS Help Guide</h1>
            
            <div className="bg-slate-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Side Settings Panel (Spinning Gear Icon)</h2>
              <p className="text-gray-300 mb-4">The Side Settings panel has three main tabs:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Queue</li>
                <li>Activity</li>
                <li>Personalize</li>
              </ul>
              <p className="text-gray-300">Each tab helps you manage the flow of your shop, your customers, and your POS experience.</p>
            </div>

            {/* Queue Tab Section */}
            <div className="mb-16 pb-12 border-b border-slate-700/40">
              <h2 className="text-3xl font-bold mb-3 text-blue-400 drop-shadow-sm tracking-tight">Queue Tab</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">Manage customers entering your shop with three main actions:</p>
              <Image src="/addtoqueue.jpg" alt="Add to Queue" width={600} height={300} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
            </div>

            {/* Add Customer Section */}
            <div className="mb-16 pb-12 border-b border-slate-700/40">
              <h2 className="text-3xl font-bold mb-3 text-blue-400 drop-shadow-sm tracking-tight">Add Customer</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">Upload customer medical ID or driver&apos;s license manually, scan ID, or upload images.</p>
              <Image src="/addcustomer.jpg" alt="Add Customer" width={600} height={300} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
            </div>

            {/* Customer Queue Section */}
            <div className="mb-16 pb-12 border-b border-slate-700/40">
              <h2 className="text-3xl font-bold mb-3 text-blue-400 drop-shadow-sm tracking-tight">Customer Queue</h2>
              <p className="text-gray-300 leading-relaxed">Manage customers entering your shop with three main actions:</p>
              <Image src="/customerqueue.jpg" alt="Customer Queue" width={600} height={300} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
            </div>

            {/* Activity Tab Section */}
            <div className="bg-slate-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Activity Tab</h2>
              <p className="text-gray-300 mb-4">Track every action happening in your shop.</p>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-slate-700 rounded-lg">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left text-gray-100">What It Shows</th>
                      <th className="px-4 py-2 text-left text-gray-100">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 text-gray-300">Activity Type</td>
                      <td className="px-4 py-2 text-gray-300">Description of the action taken (e.g., Customer Added, Product Edited).</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-300">Date and Time</td>
                      <td className="px-4 py-2 text-gray-300">Precise time of each action.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-300">Every change, addition, deletion, and update in the system is logged for transparency and accountability.</p>
            </div>

            {/* Personalize Tab Section */}
            <div className="mb-16 pb-12 border-b border-slate-700/40">
              <h2 className="text-3xl font-bold mb-3 text-blue-400 drop-shadow-sm tracking-tight">Personalize Tab</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">Customize your POS interface to suit your style and workflow:</p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">Appearance Settings</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Light or Dark Mode: Choose your preferred theme.</li>
                    <li>Color Options: In Light Mode, select different color themes for accents.</li>
                    <li>Navigation Style: Adjust navigation layout according to preference.</li>
                    <li>Layout Options: Fit different screen sizes and devices.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">Queue Settings</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Yellow Border Timer:
                      <ul className="list-disc list-inside ml-6 mt-2">
                        <li>Set a time (in minutes) after which a customer rectangle turns yellow in the queue — warning wait time.</li>
                      </ul>
                    </li>
                    <li>Red Border Timer:
                      <ul className="list-disc list-inside ml-6 mt-2">
                        <li>Set a time (in minutes) after which a customer rectangle turns red — critical wait time.</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="text-gray-300 mt-2">This helps your team quickly identify customers who have been waiting too long.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">Default POS Screen</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Choose your default view:
                      <ul className="list-disc list-inside ml-6 mt-2">
                        <li>Tablet Mode: Optimized for compact touchscreen devices.</li>
                        <li>Computer Mode: Full-size POS view for desktops or large screens.</li>
                      </ul>
                    </li>
                    <li>Switch at any time using the top right corner button on the POS screen.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">Default Print Type</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Choose how you print:
                      <ul className="list-disc list-inside ml-6 mt-2">
                        <li>Browser Print: Print directly from the browser.</li>
                        <li>Hardware Print: Use a specified printer device.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <Image src="/appearancesetting.jpg" alt="Appearance Settings" width={600} height={300} className="rounded-xl shadow-lg my-6 mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
            </div>

            {/* Quick Summary */}
            <div className="bg-blue-600/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-100 mb-2">Quick Summary</h2>
              <p className="text-gray-300">The Side Settings Panel gives you powerful tools to manage customer flow, track shop activity, and personalize the POS experience for smooth daily operations.</p>
            </div>
          </section>

          {/* User Dropdown Menu Section */}
          <section className="mb-16">
            <h1 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">User Dropdown Menu</h1>
            <p className="text-gray-300 mb-6">When you click on your Username (top right of the screen), a dropdown menu will appear with the following options:</p>

            {/* Clock In/Out Section */}
            <div className="mb-16 pb-12 border-b border-slate-700/40">
              <h2 className="text-3xl font-bold mb-3 text-blue-400 drop-shadow-sm tracking-tight">Clock In / Clock Out</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">PIN-based clocking ensures secure and accurate time tracking.</p>
              <div className="flex justify-center">
                <Image src="/clockin.jpg" alt="Clock In" width={350} height={200} className="rounded-xl shadow-lg my-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
              </div>
            </div>

            {/* Profile Section */}
            <div className="bg-slate-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Profile Section</h2>
              <p className="text-gray-300 mb-4">Inside Profile, there are three tabs:</p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">Personal Details</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Upload your profile picture.</li>
                    <li>Edit your name and phone number.</li>
                    <li>Upload additional documents you want attached to your profile.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">PIN Settings</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Set or change your PIN used for Clock In/Out and order processing.</li>
                    <li>How:
                      <ul className="list-disc list-inside ml-6 mt-2">
                        <li>Enter your current password.</li>
                        <li>Create or update your new PIN.</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">QR Code</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Generate a new QR code tied to your profile.</li>
                    <li>Print your QR code if desired.</li>
                    <li>Uses of QR Code:
                      <ul className="list-disc list-inside ml-6 mt-2">
                        <li>Quickly sign into the platform without typing your organization key, username, or password.</li>
                        <li>Manager Approvals: Scan your QR code when a manager approval is needed.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Share Mode Section */}
            <div className="bg-slate-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Turn on Share Mode</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">Purpose:</h3>
                  <p className="text-gray-300">If multiple teammates share the same tablet or computer, Share Mode allows smooth user transitions.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">How it Works:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>When processing an order, you will be asked to input your PIN.</li>
                    <li>The order will be logged under the teammate who entered the PIN.</li>
                    <li>Keeps orders and clocking accurate even when using the same device.</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-300 mt-4">Perfect for busy retail environments or shift-based teams.</p>
            </div>

            {/* Logout Section */}
            <div className="bg-slate-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Logout</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Click Logout to immediately sign out of the platform.</li>
                <li>You will be redirected to the login page.</li>
              </ul>
            </div>

            {/* Quick Summary */}
            <div className="bg-blue-600/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-100 mb-2">Quick Summary</h2>
              <p className="text-gray-300">The User Dropdown Menu empowers team members to securely clock in/out, manage their profile and PIN, quickly log in with QR codes, enable device sharing, and securely log out — all from one easy-to-access spot.</p>
            </div>
          </section>
        </Typography>
      </div>
    </div>
  );
} 