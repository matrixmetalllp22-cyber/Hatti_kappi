
import './App.css'
import React from 'react';
import './index.css';



  

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
      name: "Ravi Kumar",
      role: "Co-Founder & CEO",
      image: "/images/founder1.jpg",
      bio: "Believed in the vision even before the first outlet existed. Worked day and night to make Hatti Kaapi a reality.",
    },
    {
      name: "Suresh Naidu",
      role: "Co-Founder & Managing Director",
      image: "/images/founder2.jpg",
      bio: "Overcame obstacles with perseverance and leadership to bring authentic coffee experiences to everyone.",
    },
    {
      name: "Priya Nair",
      role: "Head of Operations",
      image: "/images/team1.jpg",
      bio: "Leads daily operations ensuring every Hatti Kaapi outlet delivers excellence in taste and service.",
    },
    {
      name: "Amit Sharma",
      role: "Marketing & Growth Lead",
      image: "/images/team2.jpg",
      bio: "Crafts strategies that bring the Hatti Kaapi story to life, connecting customers through tradition and taste.",
    },
  ];

  return (
    <section
      id="our-team"
      className="bg-gradient-to-b from-white to-amber-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Our Team
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Meet the passionate people behind Hatti Kaapi who work tirelessly to
          keep the aroma of authentic filter coffee alive.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="relative w-full h-72">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-t-3xl"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-amber-700 text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-12 bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-full text-sm font-medium tracking-wide shadow-lg hover:shadow-xl transition-all">
          Know More
        </button>
      </div>
    </section>
  );
}
