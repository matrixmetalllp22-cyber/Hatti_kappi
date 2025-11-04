
import './App.css'
import React, { useState } from 'react';
import './index.css';

// import founder1Img from './assets/founder1.svg'
// import founder2Img from './assets/founder2.svg'
import team1Img from './assets/team1.svg'
// import team2Img from './assets/team2.svg'
// import CEO from './assets/CEO.jpeg'
// import hattiKappi01 from './assets/hattiKappi01.jpeg'
// import hattiKappi02 from './assets/hattiKappi02.jpeg'
// import COO from './assets/COO.jpeg'

import hattiKappi01 from './assets/hattiKappi01.jpeg';
import hattiKappi02 from './assets/hattiKappi02.jpeg';
import CEO from './assets/CEO.jpeg';
import COO from './assets/COO.jpeg';

  

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
      name: "Mr. Amit ",
      role: "Finance & Domestic Sourcing Head – Hatti Kappi Foods Private Limited (CMO)",
      image: hattiKappi01,
      bio: "Overcame obstacles with perseverance and leadership to bring authentic coffee experiences to everyone.",
      fullBio:`Mr. Amit is an integral pillar of Hatti Kappi Foods Private Limited, combining strategic financial management with deep expertise in domestic sourcing and market alignment. His leadership bridges fiscal discipline with creative expansion, ensuring every rupee invested translates into sustainable brand growth. With a keen grasp of India’s fast-evolving supply ecosystem, he has successfully aligned procurement, jobwork optimization, and cost intelligence into one seamless operational framework.`
    },
    {
      name: "Mr. Namish",
      role: "Chief Executive Officer (CEO)",
      image: CEO,
      bio: "Global International Business Development – Hatti Kappi Foods Private Limited.",
      fullBio: `Mr. Namish leads Hatti Kappi Foods Private Limited’s global business strategy with a visionary balance of entrepreneurship, cultural intelligence, and operational discipline. With a foundation rooted in international marketing, cross-border trade, and strategic partnerships, he drives the company’s global expansion from India to key markets across Europe, the Middle East, and Asia. His leadership embodies the spirit of modern Indian enterprise — combining authenticity, innovation, and sustainability under one unified global brand identity.
      Under Mr. Namish’s global leadership, Hatti Kappi Foods Private Limited is transforming from a domestic heritage brand into a worldwide ambassador of Indian coffee culture. His strategic blueprint integrates sustainable sourcing, digital transformation, and experiential retailing to position Hatti Kappi as a premium lifestyle brand on par with global benchmarks. Through his foresight and relentless commitment to excellence, Hatti Kappi continues to inspire trust, elevate Indian craftsmanship, and redefine the international café experience.`
    },
    {
      name: "Mr. Jeeteen Jain Mandoth",
      role: " Chief Operating Officer (COO)",
      image: COO,
      bio: "International Business & Global Merchandise Division – Hatti Kappi Foods Private Limited.",
      fullBio: `Mr. Jeeteen Jain Mandoth serves as the operational cornerstone of Hatti Kappi Foods Private Limited, leading its international business expansion and global merchandise innovation. His dynamic approach to strategic execution has positioned the company as a forward-thinking Indian enterprise with a robust global footprint. With extensive experience across industrial systems, sourcing networks, and brand architecture, he ensures that every operational layer — from product design to retail execution — reflects Hatti Kappi’s core values of authenticity, sustainability, and excellence.
      Under Mr. Jeeteen Jain Mandoth’s global stewardship, Hatti Kappi Foods Private Limited continues to evolve as a world-class enterprise that harmonizes India’s heritage with modern global practices. His vision transforms the Global Merchandise Division into a symbol of craftsmanship and innovation — creating products, experiences, and operational excellence that resonate from Bengaluru to Paris. Through his leadership, Hatti Kappi continues its journey as a benchmark for Indian-origin brands in the international hospitality and lifestyle space.`
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
    <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Image first in DOM so mobile shows image above content; on lg the row-reverse places it on the right */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-gray-50">
        <div className="max-w-[520px] w-full h-[520px] flex items-center justify-center overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="max-h-full w-auto object-contain rounded-md shadow-sm"
          />
        </div>
      </div>

      {/* Content below image on mobile; on large screens content appears left */}
      <div className="w-full lg:w-1/2 px-8 py-12 flex flex-col justify-center">
        <div className="max-w-md">
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
      </div>
    </div>
  )
}
