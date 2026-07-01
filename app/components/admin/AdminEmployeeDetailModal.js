"use client";

import { useEffect, useState } from "react";

const BLUE = "#2F80FF";

const inputClass =
  "w-full bg-zinc-800 border border-zinc-700 px-4 py-2.5 text-white text-sm focus:border-[#2F80FF] focus:outline-none";

const EMPTY_KYC = {
  dateOfBirth: "",
  gender: "",
  maritalStatus: "",
  bloodGroup: "",
  fatherName: "",
  motherName: "",
  permanentAddress: "",
  presentAddress: "",
  sameAsPermanent: false,
  emergencyContactName: "",
  emergencyContactPhone: "",
  emergencyContactRelation: "",
  aadhaarNumber: "",
  panNumber: "",
  uanNumber: "",
  bankAccountNumber: "",
  bankIfsc: "",
  bankName: "",
  bankBranch: "",
  bankAccountType: "savings",
};

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1.5 block">
        {label}
      </span>
      {children}
    </label>
  );
}

function SectionTitle({ children }) {
  return (
    <h3 className="text-sm font-semibold text-white border-b border-zinc-700 pb-2 mb-4 mt-2">
      {children}
    </h3>
  );
}

export default function AdminEmployeeDetailModal({ employeeId, onClose, onSaved }) {
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [section, setSection] = useState("employment");

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`/api/admin/employees/${employeeId}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error);
        const emp = data.employee;
        setForm({
          phone: emp.phone || "",
          location: emp.location || "",
          department: emp.department || "",
          joiningDate: emp.joiningDate || "",
          employmentStatus: emp.employmentStatus || "active",
          onboardingNotes: emp.onboardingNotes || "",
          ...EMPTY_KYC,
          ...emp.kycDetails,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [employeeId]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess("");
    try {
      const res = await fetch(`/api/admin/employees/${employeeId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setForm({
        phone: data.employee.phone || "",
        location: data.employee.location || "",
        department: data.employee.department || "",
        joiningDate: data.employee.joiningDate || "",
        employmentStatus: data.employee.employmentStatus || "active",
        onboardingNotes: data.employee.onboardingNotes || "",
        ...EMPTY_KYC,
        ...data.employee.kycDetails,
      });
      setSuccess("Employee details saved successfully.");
      onSaved?.(data.employee);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const sections = [
    ["employment", "Employment"],
    ["personal", "Personal"],
    ["ids", "Aadhaar & PAN"],
    ["bank", "Bank Details"],
    ["address", "Address & Emergency"],
  ];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-700 max-h-[92vh] flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 shrink-0">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#2F80FF]">
              Employee record
            </p>
            <h3 className="text-lg font-semibold text-white">All employee details</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-zinc-500 hover:text-white text-xl px-2"
          >
            ✕
          </button>
        </div>

        <div className="flex gap-0 border-b border-zinc-800 px-6 overflow-x-auto shrink-0">
          {sections.map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setSection(key)}
              className={`shrink-0 px-4 py-3 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors ${
                section === key
                  ? "border-[#2F80FF] text-white"
                  : "border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="p-12 text-center text-zinc-500">Loading employee details...</div>
        ) : !form ? (
          <div className="p-12 text-center text-red-400">{error || "Failed to load."}</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">
            <div className="flex-1 overflow-y-auto p-6">
              {error ? (
                <div className="mb-4 border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  {error}
                </div>
              ) : null}
              {success ? (
                <div className="mb-4 border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                  {success}
                </div>
              ) : null}

              {section === "employment" && (
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Phone">
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Location">
                    <input
                      type="text"
                      value={form.location}
                      onChange={(e) => handleChange("location", e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Department">
                    <select
                      value={form.department}
                      onChange={(e) => handleChange("department", e.target.value)}
                      className={inputClass}
                    >
                      {["Engineering", "Design", "Business", "Operations", "HR"].map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Joining date">
                    <input
                      type="date"
                      value={form.joiningDate}
                      onChange={(e) => handleChange("joiningDate", e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Employment status">
                    <select
                      value={form.employmentStatus}
                      onChange={(e) => handleChange("employmentStatus", e.target.value)}
                      className={inputClass}
                    >
                      <option value="active">Active</option>
                      <option value="resignation_pending">Resignation Pending</option>
                      <option value="resigned">Resigned</option>
                    </select>
                  </Field>
                  <Field label="HR notes">
                    <textarea
                      rows={3}
                      value={form.onboardingNotes}
                      onChange={(e) => handleChange("onboardingNotes", e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                </div>
              )}

              {section === "personal" && (
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Date of birth">
                    <input
                      type="date"
                      value={form.dateOfBirth}
                      onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Gender">
                    <select
                      value={form.gender}
                      onChange={(e) => handleChange("gender", e.target.value)}
                      className={inputClass}
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </Field>
                  <Field label="Marital status">
                    <select
                      value={form.maritalStatus}
                      onChange={(e) => handleChange("maritalStatus", e.target.value)}
                      className={inputClass}
                    >
                      <option value="">Select</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Widowed">Widowed</option>
                    </select>
                  </Field>
                  <Field label="Blood group">
                    <select
                      value={form.bloodGroup}
                      onChange={(e) => handleChange("bloodGroup", e.target.value)}
                      className={inputClass}
                    >
                      <option value="">Select</option>
                      {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Father's name">
                    <input
                      type="text"
                      value={form.fatherName}
                      onChange={(e) => handleChange("fatherName", e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Mother's name">
                    <input
                      type="text"
                      value={form.motherName}
                      onChange={(e) => handleChange("motherName", e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                </div>
              )}

              {section === "ids" && (
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Aadhaar number">
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={12}
                      placeholder="12-digit Aadhaar"
                      value={form.aadhaarNumber}
                      onChange={(e) =>
                        handleChange(
                          "aadhaarNumber",
                          e.target.value.replace(/\D/g, "").slice(0, 12)
                        )
                      }
                      className={inputClass}
                    />
                  </Field>
                  <Field label="PAN number">
                    <input
                      type="text"
                      maxLength={10}
                      placeholder="ABCDE1234F"
                      value={form.panNumber}
                      onChange={(e) =>
                        handleChange("panNumber", e.target.value.toUpperCase().slice(0, 10))
                      }
                      className={inputClass}
                    />
                  </Field>
                  <Field label="UAN / PF number">
                    <input
                      type="text"
                      value={form.uanNumber}
                      onChange={(e) => handleChange("uanNumber", e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                </div>
              )}

              {section === "bank" && (
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Account number">
                    <input
                      type="text"
                      value={form.bankAccountNumber}
                      onChange={(e) => handleChange("bankAccountNumber", e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="IFSC code">
                    <input
                      type="text"
                      maxLength={11}
                      placeholder="HDFC0001234"
                      value={form.bankIfsc}
                      onChange={(e) =>
                        handleChange("bankIfsc", e.target.value.toUpperCase().slice(0, 11))
                      }
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Bank name">
                    <input
                      type="text"
                      value={form.bankName}
                      onChange={(e) => handleChange("bankName", e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Branch">
                    <input
                      type="text"
                      value={form.bankBranch}
                      onChange={(e) => handleChange("bankBranch", e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Account type">
                    <select
                      value={form.bankAccountType}
                      onChange={(e) => handleChange("bankAccountType", e.target.value)}
                      className={inputClass}
                    >
                      <option value="savings">Savings</option>
                      <option value="current">Current</option>
                      <option value="salary">Salary</option>
                    </select>
                  </Field>
                </div>
              )}

              {section === "address" && (
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Field label="Permanent address">
                      <textarea
                        rows={3}
                        value={form.permanentAddress}
                        onChange={(e) => handleChange("permanentAddress", e.target.value)}
                        className={inputClass}
                      />
                    </Field>
                  </div>
                  <label className="flex items-center gap-2 md:col-span-2">
                    <input
                      type="checkbox"
                      checked={form.sameAsPermanent}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setForm((prev) => ({
                          ...prev,
                          sameAsPermanent: checked,
                          presentAddress: checked ? prev.permanentAddress : prev.presentAddress,
                        }));
                      }}
                    />
                    <span className="text-sm text-zinc-400">Present address same as permanent</span>
                  </label>
                  {!form.sameAsPermanent ? (
                    <div className="md:col-span-2">
                      <Field label="Present address">
                        <textarea
                          rows={3}
                          value={form.presentAddress}
                          onChange={(e) => handleChange("presentAddress", e.target.value)}
                          className={inputClass}
                        />
                      </Field>
                    </div>
                  ) : null}
                  <Field label="Emergency contact name">
                    <input
                      type="text"
                      value={form.emergencyContactName}
                      onChange={(e) => handleChange("emergencyContactName", e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Emergency contact phone">
                    <input
                      type="tel"
                      value={form.emergencyContactPhone}
                      onChange={(e) => handleChange("emergencyContactPhone", e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Relation">
                    <input
                      type="text"
                      placeholder="Spouse, Parent, Sibling..."
                      value={form.emergencyContactRelation}
                      onChange={(e) => handleChange("emergencyContactRelation", e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                </div>
              )}
            </div>

            <div className="shrink-0 border-t border-zinc-800 px-6 py-4 flex flex-col sm:flex-row gap-3 justify-end bg-zinc-900">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 text-sm font-semibold text-zinc-400 border border-zinc-700 hover:border-zinc-500"
              >
                Close
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="px-8 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
                style={{ backgroundColor: BLUE }}
              >
                {submitting ? "Saving..." : "Save all details"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
