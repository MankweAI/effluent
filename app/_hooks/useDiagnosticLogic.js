"use client"; // This is a client-side hook

import { useState } from "react";

export function useDiagnosticLogic() {
  // State for user inputs
  const [inputs, setInputs] = useState({
    industry: "Mining & Minerals",
    contaminant: "low-density",
    flowRate: 150,
    tss: 400,
  });

  // State to control the UI flow
  const [showResults, setShowResults] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [reportGenerated, setReportGenerated] = useState(false);

  // State for the calculated recommendations
  const [recommendedTech, setRecommendedTech] = useState("");
  const [justification, setJustification] = useState("");

  // Function to update inputs from the form
  const handleInputChange = (field, value) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  // The core diagnostic function
  const handleDiagnose = () => {
    const tech =
      inputs.contaminant === "low-density"
        ? "Dissolved Air Flotation (DAF)"
        : "Sedimentation Clarifier";
    setRecommendedTech(tech);
    setShowResults(true);
    setSelectedDriver(null); // Reset driver selection
    setJustification(""); // Reset justification
    setReportGenerated(false); // Reset report state
  };

  // Function to handle the operational driver selection
  const handleDriverSelection = (driver) => {
    setSelectedDriver(driver);
    // Generate the refined justification text based on the driver and recommended tech
    let newJustification = "";
    if (recommendedTech === "Dissolved Air Flotation (DAF)") {
      if (driver === "capex")
        newJustification =
          "To minimize initial CAPEX, a standard open-tank DAF is recommended. Avoids higher cost of advanced controls or high-rate plate packs.";
      if (driver === "opex")
        newJustification =
          "To reduce long-term OPEX, we recommend a DAF system with a high-efficiency VFD-controlled pump, projected to reduce power costs by up to 30%.";
      if (driver === "footprint")
        newJustification =
          "For the smallest footprint, a high-rate Plate Pack DAF Unit is the ideal choice, offering up to 50% more clarification area for the same physical space.";
      if (driver === "purity")
        newJustification =
          "To achieve the highest purity, a DAF system combined with an advanced chemical dosing package and micro-bubble optimization is recommended.";
    } else {
      // Sedimentation Clarifier
      if (driver === "capex")
        newJustification =
          "For the lowest initial CAPEX, a conventional concrete basin clarifier is the most cost-effective construction.";
      if (driver === "opex")
        newJustification =
          "A key advantage of clarifiers is low OPEX. We recommend a design with a high-efficiency sludge rake drive to further minimize power consumption.";
      if (driver === "footprint")
        newJustification =
          "To reduce footprint, a Lamella (Inclined Plate) Clarifier is the best option, significantly increasing the effective settling area in a compact design.";
      if (driver === "purity")
        newJustification =
          "For the highest water purity, a clarifier followed by a polishing media filter is the recommended treatment train.";
    }
    setJustification(newJustification);
  };

  const handleGenerateReport = () => {
    setReportGenerated(true);
    // PDF generation logic will be added in Phase 3
  };

  return {
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
  };
}

