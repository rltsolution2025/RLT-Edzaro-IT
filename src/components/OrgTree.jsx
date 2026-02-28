import { label } from "framer-motion/client";
import { useEffect, useState } from "react";

const orgData = [
  { label: "RL Technologies", children: ["Industrial Automation", "Industrial Instrumentation precision engineering"] },
  { label: "RLT Solutions", children: ["Water Management Projects", "Solar Projects", "Industry Automation Projects"] },
  {label : "RLT Instruments", children: ["Manufacturing, Sales & Service of Analytical Instruments"] },
  { label: "RLT Academy of E-Excellence", children: ["Shantini Ketan Matri Hr.Sec School","Shantini Ketan CBSE school" , "Maharishi Vidhya Mandhir-CBSE school", "RLT Academy Matric Higher Secondary, School","RLT International Institute of Hotel Management College", "RLT Institute of Agriculture & Horticulture College", "RLT Edzaro"] }
];

function AnimatedBranch({ label, children, delay }) {
  return (
    <div className="branch" style={{ animationDelay: `${delay}s` }}>
      <div className="branch-label">{label}</div>
      <ul className="branch-children">
        {children.map((child, i) => (
          <li key={child} style={{ animationDelay: `${delay + 0.3 * (i + 1)}s` }} className="leaf">
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AnimatedRLTTree() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <style>{`
        .tree-container {
          max-width: 900px;
          margin: auto;
          padding: 40px;
          background: linear-gradient(270deg, #6c5ce7, #a29bfe, #74b9ff);
          background-size: 600% 600%;
          animation: bgPulse 15s ease infinite;
          border-radius: 12px;
          color: white;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        @keyframes bgPulse {
          0%, 100% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
        }
        .root {
          font-size: 3rem;
          font-weight: 900;
          text-align: center;
          margin-bottom: 8vh;
          animation: pulseGlow 2s ease infinite;
        }
        @keyframes pulseGlow {
          0%, 100% {text-shadow: 0 0 15px rgba(255,255,255,0.5);}
          50% {text-shadow: 0 0 35px rgba(255,255,255,1);}
        }
        .branch {
          margin-bottom: 40px;
          opacity: 0;
          transform: translateX(-100px);
          animation: slideIn 1s forwards;
        }
        .branch-label {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 10px;
          text-shadow: 0 0 5px rgba(0,0,0,0.3);
        }
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .branch-children {
          list-style: none;
          padding-left: 20px;
        }
        .leaf {
          margin: 8px 0;
          opacity: 0;
          animation: fadeIn 0.8s forwards;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>

      <div className="tree-container">
        <div className="root">RLT Group</div>
        {loaded &&
          orgData.map((branch, i) => (
            <AnimatedBranch key={branch.label} label={branch.label} children={branch.children} delay={i * 0.8} />
          ))
        }
      </div>
    </>
  );
}
