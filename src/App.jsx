
import './App.css'
import React, { useState } from 'react';
import './index.css';

import founder1Img from './assets/founder1.svg'
import founder2Img from './assets/founder2.svg'
import team1Img from './assets/team1.svg'
import team2Img from './assets/team2.svg'

import hattiKappi01 from './assets/hattiKappi01.jpeg'
import hattiKappi02 from './assets/hattiKappi02.jpeg'


  

// export function Component() {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
//       <img
//         className="w-full"
//         src="/images/blog/image-1.jpg"
//         alt="Meaningful alt text for an image that is not purely decorative"
//       />
//       <div className="px-6 py-4">
//         <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
//           Noteworthy technology acquisitions 2021
//         </h5>
//         <p className="text-gray-700 dark:text-gray-400 text-base">
//           Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
//         </p>
//       </div>
//     </div>
//   );
// }
export default function OurTeam() {
  const team = [
    {
      name: "Ms. Harshini",
      role: "Chief Finance Officer & Head of International Sourcing",
      image: hattiKappi02,
      bio: "Dynamic finance leader who bridges global fiscal strategy with operational intelligence leading finance and international sourcing.",
      fullBio: `Ms. Harshini is a dynamic finance leader who bridges global fiscal strategy with operational intelligence. As the Chief Finance Officer and Head of International Sourcing at Matrix Metals LLP, she commands both the analytical precision of a financial strategist and the negotiation acumen of a global trader. Her expertise spans international vendor engagement, import cost modeling, and foreign-exchange risk management, ensuring every procurement decision strengthens profitability and compliance. Harshini’s leadership has positioned HATTI FOOD AND BEVERAGES PRIVATE LIMITED of Bengaluru, Karnataka as a benchmark in cost-rationalized, regulation-compliant international trade, building lasting partnerships across Asia and Europe. A firm believer that "finance is the language of trust," she integrates ethics, transparency, and measurable growth into every fiscal decision — harmonizing cashflow efficiency with long-term enterprise value. Core Expertise: Global Vendor Negotiation (China, Europe & ASEAN markets); Letters of Credit & Trade Finance Compliance; EPCG, MOOWR & Duty Exemption Scheme Optimization; Cost Rationalization & Working Capital Control; FX Hedging & Cashflow Forecasting; Cross-functional Leadership & Risk Governance.`,
    },
    {
      name: "Suresh Naidu",
      role: "Co-Founder & Managing Director",
      image: hattiKappi01,
      bio: "Overcame obstacles with perseverance and leadership to bring authentic coffee experiences to everyone.",
    },
    {
      name: "Priya Nair",
      role: "Head of Operations",
      image: team1Img,
      bio: "Leads daily operations ensuring every Hatti Kaapi outlet delivers excellence in taste and service.",
    },
    {
      name: "Amit Sharma",
      role: "Marketing & Growth Lead",
      image: team2Img,
      bio: "Crafts strategies that bring the Hatti Kaapi story to life, connecting customers through tradition and taste.",
    },
  ];

  return (
    <section id="our-team" className="bg-gradient-to-b from-white to-amber-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight text-center">
          Our Team
        </h2>

        <div className="space-y-12">
          {team.map((member, idx) => (
            <TeamMember key={idx} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamMember({ member }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="p-8 order-2 lg:order-1">
        <h3 className="text-2xl font-semibold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-amber-700 font-medium mb-3">{member.role}</p>
        <p className="text-gray-600">{member.bio}</p>

        {expanded && member.fullBio && (
          <div className="mt-4 text-gray-700 whitespace-pre-line">{member.fullBio}</div>
        )}

        <div className="mt-6">
          {member.fullBio ? (
            <button onClick={() => setExpanded(s => !s)} className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-2 rounded-full text-sm font-medium">
              {expanded ? 'Know Less' : 'Know More'}
            </button>
          ) : (
            <button className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-2 rounded-full text-sm font-medium">Know More</button>
          )}
        </div>
      </div>

      <div className="w-full h-72 order-1 lg:order-2 bg-gray-50">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-contain object-center rounded-r-2xl lg:rounded-r-2xl rounded-t-2xl lg:rounded-t-none"
        />
      </div>
    </div>
  )
}
