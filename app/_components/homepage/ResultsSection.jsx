"use client";

import {
  Check,
  Presentation,
  PiggyBank,
  Scaling,
  FlaskConical,
} from "lucide-react";
import Card from "../shared/Card";

const DriverButton = ({
  driver,
  icon,
  text,
  selectedDriver,
  onDriverSelect,
}) => (
  <button
    onClick={() => onDriverSelect(driver)}
    className={`p-4 rounded-lg text-center border-2 transition-all duration-200 ${
      selectedDriver === driver
        ? "border-sky-500 bg-sky-50"
        : "border-slate-200 hover:border-slate-300"
    }`}
  >
    <div
      className={`mx-auto h-10 w-10 flex items-center justify-center rounded-full ${
        selectedDriver === driver ? "bg-sky-500" : "bg-slate-200"
      }`}
    >
      {icon}
    </div>
    <span className="block mt-2 font-semibold text-sm text-slate-700">
      {text}
    </span>
  </button>
);

export default function ResultsSection({
  show,
  recommendedTech,
  selectedDriver,
  justification,
  reportGenerated,
  onDriverSelect,
  onGenerateReport,
}) {
  const reason =
    recommendedTech === "Dissolved Air Flotation (DAF)"
      ? "floating low-density contaminants like oils and fats."
      : "settling high-density solids like sand and grit.";

  return (
    <section
      className={`bg-white py-12 section-transition overflow-hidden ${
        show ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="max-w-3xl mx-auto px-4">
        {/* Initial Recommendation */}
        <div className="text-center p-6 bg-sky-50 border-2 border-sky-200 rounded-lg">
          <h3 className="text-lg font-bold text-slate-800">
            Initial Recommendation:{" "}
            <span className="text-sky-600">{recommendedTech}</span>
          </h3>
          <p className="mt-1 text-slate-600">
            This technology is the most effective choice for {reason}
          </p>
        </div>

        {/* Refinement Module */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-center text-slate-800">
            Let's Fine-Tune Your Solution.{" "}
            <span className="block text-lg font-normal text-slate-600 mt-1">
              Tell us what *really* matters for your operation.
            </span>
          </h2>
          <div className="mt-6">
            <label className="block text-base font-semibold text-slate-700 text-center">
              What is your primary operational driver?
            </label>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              <DriverButton
                driver="capex"
                icon={<PiggyBank className="w-5 h-5 text-slate-600" />}
                text="Lowest Initial Cost (CAPEX)"
                selectedDriver={selectedDriver}
                onDriverSelect={onDriverSelect}
              />
              <DriverButton
                driver="opex"
                icon={<Presentation className="w-5 h-5 text-slate-600" />}
                text="Lowest Running Cost (OPEX)"
                selectedDriver={selectedDriver}
                onDriverSelect={onDriverSelect}
              />
              <DriverButton
                driver="footprint"
                icon={<Scaling className="w-5 h-5 text-slate-600" />}
                text="Smallest Physical Footprint"
                selectedDriver={selectedDriver}
                onDriverSelect={onDriverSelect}
              />
              <DriverButton
                driver="purity"
                icon={<FlaskConical className="w-5 h-5 text-slate-600" />}
                text="Highest Water Purity"
                selectedDriver={selectedDriver}
                onDriverSelect={onDriverSelect}
              />
            </div>
          </div>
          <div
            className={`section-transition overflow-hidden mt-8 ${
              justification ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="text-center p-6 bg-green-50 border-2 border-green-200 rounded-lg">
              <h3 className="text-base font-bold text-slate-800">
                Refined Recommendation
              </h3>
              <p className="mt-1 text-sm text-slate-600">{justification}</p>
            </div>
          </div>
        </div>

        {/* Report Generation */}
        <div
          className={`mt-10 text-center transition-opacity duration-500 ${
            selectedDriver ? "opacity-100" : "opacity-25 pointer-events-none"
          }`}
        >
          <button
            onClick={onGenerateReport}
            disabled={!selectedDriver || reportGenerated}
            className={`w-full md:w-auto font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 ${
              reportGenerated
                ? "bg-green-600 text-white"
                : "bg-slate-800 text-white hover:bg-slate-700"
            }`}
          >
            {reportGenerated ? (
              <span className="flex items-center justify-center">
                <Check className="w-6 h-6 mr-2" /> Report Generated!
              </span>
            ) : (
              "Generate Your Instant Pre-Feasibility Report (PDF)"
            )}
          </button>
        </div>

        {/* Post-Report CTA will be added here */}
      </div>
    </section>
  );
}
