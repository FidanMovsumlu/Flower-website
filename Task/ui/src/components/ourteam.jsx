import React from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <div className="py-12 bg-pink-50 mt-[40px] dark:bg-gray-700">
      <h2 className="text-5xl font-bold text-left mx-10 mb-[20px] text-[#ca93a3] pattern">
      {t("team")}
      </h2>

      <div className="container w-[90%] m-auto">
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-20" >
          {team.map((member, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg mt-[20px] border-4 border-[#ca93a3]"
            >
              <img
                src={member.img}
                className="w-[400px] h-[400px] object-cover"
                alt={member.name}
              />
              <div className="bg-white text-center py-4">
                <h2 className="text-2xl font-semibold text-[#895d6a]">{member.name}</h2>
                <p className="text-[#ca93a3] text-[20px]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;