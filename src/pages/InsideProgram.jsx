
import { useParams } from "react-router-dom";
import { programDetails } from "../components/Programs/InsideProgramData";
import { Helmet } from "react-helmet-async";
import ProgramHero from "../components/Programs/ProgramHero";
import ProgramStats from "../components/Programs/ProgramStats";
import ProgramTracks from "../components/Programs/ProgramTracks";
import CapstoneSection from "../components/Programs/CapstoneSection";
import EligibilitySection from "../components/Programs/EligibilitySection";
import FAQSection from "../components/Programs/FAQSection";
import EnrollSection from "../components/Programs/EnrollSection";
import PlacementStats from "../components/Programs/PlacementStats";
import HiringCompanies from "../components/HiringCompanies/HiringCompanies";
import InsideProgramData from "../components/Programs/InsideProgramData";

const InsideProgram = () => {
  const { programId } = useParams();
  const program = programDetails[programId];

  if (!program) {
    return <h2 className="text-center py-5">Program Not Found</h2>;
  }

  // ✅ placement relevance logic
  const showPlacementSections = program.type !== "school";

  return (
    <>
     <Helmet>
        <title>{program.pagetitle} </title>
        <meta  key="description" name="description" content={program.pageoverview} />
        <link rel="canonical" href={`https://rltedzaro.com/${programId}`} />

        {/* Open Graph */}
        <meta property="og:title" content={`${program.pagetitle} | RLT EDZARO`} />
        <meta property="og:description" content={program.pageoverview} />
        <meta property="og:url" content={`https://rltedzaro.com/${programId}`} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${program.pagetitle} | RLT EDZARO`} />
        <meta name="twitter:description" content={program.pageoverview} />
      </Helmet>
      <ProgramHero program={program} />

      {program.stats && <ProgramStats stats={program.stats} />}

      <EligibilitySection items={program.idealFor} />

      {program.highlights && (
        <ProgramTracks highlights={program.highlights} />
      )}

      {program.capstones && (
        <CapstoneSection items={program.capstones} />
      )}

      {/* ✅ ONLY FOR NON-SCHOOL PROGRAMS */}
      {showPlacementSections && (
        <>
          <PlacementStats />
          
        </>
      )}
      
      <HiringCompanies />

      <EnrollSection courseName={program.title} />

      {program.faqs && <FAQSection faqs={program.faqs} />}
    </>
  );
};

export default InsideProgram;
