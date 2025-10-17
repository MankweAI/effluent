"use client";

import Card from "../shared/Card";

export default function DiagnosticTool({ inputs, onInputChange, onDiagnose }) {
  return (
    <section id="diagnostic-tool" className="hero-gradient pt-16 pb-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Find the Right Separation Technology for Your Wastewater
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Our diagnostic tool analyzes your effluent data to recommend the most
          effective and cost-efficient solution for your specific operational
          needs.
        </p>
      </div>
      <div className="max-w-3xl mx-auto mt-10 px-4">
        <Card className="p-8">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="industry"
                  className="block text-sm font-medium text-slate-700"
                >
                  Industry
                </label>
                <select
                  id="industry"
                  value={inputs.industry}
                  onChange={(e) => onInputChange("industry", e.target.value)}
                  className="mt-1 block w-full border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
                >
                  <option>Mining & Minerals</option>
                  <option>Food & Beverage</option>
                  <option>Pulp & Paper</option>
                  <option>Petrochemical</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="contaminant"
                  className="block text-sm font-medium text-slate-700"
                >
                  Primary Contaminant Type
                </label>
                <select
                  id="contaminant"
                  value={inputs.contaminant}
                  onChange={(e) => onInputChange("contaminant", e.target.value)}
                  className="mt-1 block w-full border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
                >
                  <option value="low-density">
                    Low-Density / Floating (Oils, Fats)
                  </option>
                  <option value="high-density">
                    High-Density / Sinking (Grit, Sand)
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="flowRate"
                  className="block text-sm font-medium text-slate-700"
                >
                  Flow Rate (<span id="flowRateValue">{inputs.flowRate}</span>{" "}
                  m³/hr)
                </label>
                <input
                  id="flowRate"
                  type="range"
                  min="10"
                  max="1000"
                  value={inputs.flowRate}
                  onChange={(e) =>
                    onInputChange("flowRate", parseInt(e.target.value))
                  }
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div>
                <label
                  htmlFor="tss"
                  className="block text-sm font-medium text-slate-700"
                >
                  Suspended Solids (<span id="tssValue">{inputs.tss}</span>{" "}
                  mg/L)
                </label>
                <input
                  id="tss"
                  type="range"
                  min="50"
                  max="2000"
                  value={inputs.tss}
                  onChange={(e) =>
                    onInputChange("tss", parseInt(e.target.value))
                  }
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
            <div className="pt-4">
              <button
                onClick={onDiagnose}
                className="w-full bg-sky-500 text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-sky-600 transition"
              >
                Diagnose My Wastewater & Recommend a Solution
              </button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
