import React from "react";

const ComparisonTable = () => {
  const data = [
     {
      feature: "AWS Certified Cloud Practitioner",
      other: false,
      ours: true,
    },
    {
      feature: "Real work experience",
      other: false,
      ours: true,
    },
    {
      feature: "True, project-based learning",
      other: false,
      ours: true,
    },
    {
      feature: "Live sessions & mentorship",
      other: true,
      ours: true,
    },
    {
      feature: "AI-driven software development",
      other: false,
      ours: true,
    },
    {
      feature: "Job-ready portfolio",
      other: false,
      ours: true,
    },
     {
      feature: "Hi tech learning platform",
      other: false,
      ours: true,
    },
     {
      feature: "Career support & job assistance",
      other: true,
      ours: true,
    },
     {
      feature: "On-Compass Drive",
      other: false,
      ours: true,
    },
     {
      feature: "AI Lab",
      other: false,
      ours: true,
    },
     {
      feature: "Scholarships & financial aid",
      other: false,
      ours: true,
    },
  ];

  return (
<div className="p-6 my-5">
  <table className="w-full border-collapse rounded-xl overflow-hidden shadow-lg mx-auto">
    <thead>
      <tr style={{ backgroundColor: "#e6f2ff" }}>
        <th className="p-3 text-black text-left border border-gray-300">
          Features
        </th>
        <th className="p-3 text-black text-center border border-gray-300">
          Other Institute
        </th>
        <th className="p-3 text-black text-center border border-gray-300">
          RLT Edzaro
        </th>
      </tr>
    </thead>

    <tbody>
      {data.map((row, idx) => (
        <tr
          key={idx}
          className={`${idx % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}
        >
          <td className="p-3 font-medium border border-gray-300 text-black">
            {row.feature}
          </td>
          <td className="text-center p-3 border border-gray-300 text-black">
            {row.other ? "✔️" : "❌"}
          </td>
          <td className="text-center p-3 bg-yellow-50 border border-gray-300 text-black">
            {row.ours ? "✔️" : "❌"}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>



  );
};

export default ComparisonTable;
