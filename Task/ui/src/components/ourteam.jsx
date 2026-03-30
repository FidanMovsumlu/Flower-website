import React from "react";

const team = [
  {
    name: "Emily Carter",
    role: "Manager",
    img: "https://preview.colorlib.com/theme/florist/img/team/team-2.jpg",
  },
  {
    name: "Sophia Brown",
    role: "Florist",
    img: "https://preview.colorlib.com/theme/florist/img/team/team-1.jpg",
  },
  {
    name: "Olivia Wilson",
    role: "Assistant Florist",
    img: "https://preview.colorlib.com/theme/florist/img/team/team-4.jpg",
  },
];

function OurTeam() {
  return (
    <div className="py-16 bg-pink-50 mt-[40px]">
      <h2 className="text-5xl font-bold text-left mx-10 mb-[20px] text-[#ca93a3] pattern">Our Team Members</h2>

      <div className="flex justify-center gap-16 flex-wrap">
        {team.map((member, index) => (
          <div key={index} className="w-64 h-80 perspective">
            
            <div className="relative w-full h-full duration-500 transform-style preserve-3d hover:rotate-y-180">
              
            
              <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

             
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#ca93a3] text-white flex flex-col items-center justify-center rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="mt-2 text-lg">{member.role}</p>
              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;