"use client"; // This page is now an interactive client component

import DiagnosticTool from "./_components/homepage/DiagnosticTool";
import ResultsSection from "./_components/homepage/ResultsSection";
import DeepDiveSection from "./_components/homepage/DeepDiveSection";
import { useDiagnosticLogic } from "./_hooks/useDiagnosticLogic";

export default function HomePage() {
  const {
    inputs,
    showResults,
    selectedDriver,
    reportGenerated,
    recommendedTech,
    justification,
    handleInputChange,
    handleDiagnose,
    handleDriverSelection,
    handleGenerateReport,
  } = useDiagnosticLogic();

  return (
    <>
      <DiagnosticTool
        inputs={inputs}
        onInputChange={handleInputChange}
        onDiagnose={handleDiagnose}
      />
      <ResultsSection
        show={showResults}
        recommendedTech={recommendedTech}
        selectedDriver={selectedDriver}
        justification={justification}
        reportGenerated={reportGenerated}
        onDriverSelect={handleDriverSelection}
        onGenerateReport={handleGenerateReport}
      />
      <DeepDiveSection />
    </>
  );
}
