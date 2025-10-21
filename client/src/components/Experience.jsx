import { Briefcase, Plus, Sparkles, Trash2 } from "lucide-react";
import React from "react";

const Experience = ({ data, onChange }) => {
  const addExp = () => {
    const newExp = {
      company: "",
      position: "",
      start_date: "",
      end_date: "",
      description: "",
      is_current: false,
    };
    onChange([...data, newExp]);
  };

  const removeExp = (index) => {
    const updated = data.filter((_, i) => i != index);
    onChange(updated);
  };
  const updateExp = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            Professional Experience
          </h3>
          <p className="text-sm text-gray-500"> Add your job Experience</p>
        </div>
        <button
          onClick={addExp}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700   hover:bg-green-200 rounded-lg transition-colors "
        >
          <Plus className="size-4" />
          Add Experience
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-8 text-gray-600">
          <Briefcase className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p>No work experience addded yet.</p>
          <p className="text-sm">Click "Add Experince" to get started</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((exp, index) => (
            <div
              key={index}
              className="p-4 border-gray-200 rounded-lg space-y-3"
            >
              <div className="flex justify-between items-start">
                <h4>Experience #{index + 1}</h4>
                <button
                  onClick={() => removeExp(index)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className=" size-4" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="company name"
                  className="px-3 py-2 text-sm rounded-lg"
                  value={exp.company || ""}
                  onChange={(e) => updateExp(index, "company", e.target.value)}
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="job title"
                  className="px-3 py-2 text-sm rounded-lg"
                  value={exp.position || ""}
                  onChange={(e) => updateExp(index, "position", e.target.value)}
                />
                <input
                  type="month"
                  name=""
                  id=""
                  className="px-3 py-2 text-sm rounded-lg"
                  value={exp.start_date || ""}
                  onChange={(e) =>
                    updateExp(index, "start_date", e.target.value)
                  }
                />
                <input
                  type="month"
                  name=""
                  id=""
                  disabled={exp.is_current}
                  className="px-3 py-2 text-sm rounded-lg disabled:bg-gray-100"
                  value={exp.end_date || ""}
                  onChange={(e) => updateExp(index, "end_date", e.target.value)}
                />
              </div>
              <label htmlFor="" className="flex items-center gap-2">
                <input
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  type="checkbox"
                  checked={exp.is_current || false}
                  onChange={(e) => {
                    updateExp(
                      index,
                      "is_current",
                      e.target.checked ? true : false
                    );
                  }}
                />
                <span className="text-sm text-gray-700">
                  Currently working here
                </span>
              </label>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor=""
                  >
                    Job Description
                  </label>
                  <button className="flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50">
                    <Sparkles className="w-3 h-3" />
                    Enhance with AI
                  </button>
                </div>
                  <textarea
                    value={exp.description || ""}
                    onChange={(e) =>
                      updateExp(index, "description", e.target.value)
                    }
                    rows={4}
                    placeholder="Describe your key responsibilities and achievements..."
                    className="w-full px-3 py-2 text-sm rounded-lg resize-none"
                  />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience;
