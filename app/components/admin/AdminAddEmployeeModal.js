"use client";

import { useState } from "react";
import Link from "next/link";

const BLUE = "#2F80FF";

const inputClass =
  "w-full bg-zinc-800 border border-zinc-700 px-4 py-2.5 text-white text-sm focus:border-[#2F80FF] focus:outline-none";

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1.5 block">
        {label}
        {required ? <span className="text-[#2F80FF]"> *</span> : null}
      </span>
      {children}
    </label>
  );
}

function Row({ label, value, mono, link }) {
  return (
    <div className="flex justify-between gap-4 text-sm">
      <span className="text-zinc-500">{label}</span>
      {link ? (
        <Link href={value} className="text-[#2F80FF] font-medium hover:underline">
          {value}
        </Link>
      ) : (
        <span className={`text-white font-medium ${mono ? "font-mono" : ""}`}>{value}</span>
      )}
    </div>
  );
}

export default function AdminAddEmployeeModal({ onClose, onSuccess, onFillDetails }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    jobTitle: "",
    department: "Engineering",
    joiningDate: "",
    portalPassword: "",
    employeeCode: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [created, setCreated] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/admin/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create employee.");
      setCreated(data.employee);
      onSuccess?.();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-700 p-8 max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white"
        >
          ✕
        </button>

        {created ? (
          <>
            <h3 className="text-xl font-semibold text-white mb-2">Employee added</h3>
            <p className="text-zinc-400 text-sm mb-6">
              Share portal credentials with {form.fullName}, then fill KYC & bank details.
            </p>
            <div className="bg-zinc-800 border border-zinc-700 p-5 space-y-3 mb-6">
              <Row label="Employee ID" value={created.employeeCode} />
              <Row label="Portal URL" value={created.portalUrl} link />
              <Row label="Email" value={created.email} />
              <Row label="Password" value={created.portalPassword} mono />
            </div>
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  onFillDetails?.(created.id);
                  onClose();
                }}
                className="w-full py-3 text-sm font-semibold text-white"
                style={{ backgroundColor: BLUE }}
              >
                Fill all details (Aadhaar, PAN, bank) →
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 text-sm font-semibold text-zinc-400 border border-zinc-700 hover:border-zinc-500"
              >
                Done
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#2F80FF] mb-2">
              Direct hire
            </p>
            <h3 className="text-xl font-semibold text-white mb-1">Add employee</h3>
            <p className="text-zinc-400 text-sm mb-6">
              Create an employee record without going through the application flow.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Field label="Full name" required>
                <input
                  required
                  type="text"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className={inputClass}
                />
              </Field>
              <Field label="Work email" required>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Phone">
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                  />
                </Field>
                <Field label="Location">
                  <input
                    type="text"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    className={inputClass}
                  />
                </Field>
              </div>
              <Field label="Job title" required>
                <input
                  required
                  type="text"
                  placeholder="e.g. Product Engineer"
                  value={form.jobTitle}
                  onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
                  className={inputClass}
                />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Department">
                  <select
                    value={form.department}
                    onChange={(e) => setForm({ ...form, department: e.target.value })}
                    className={inputClass}
                  >
                    {["Engineering", "Design", "Business", "Operations", "HR"].map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Joining date" required>
                  <input
                    required
                    type="date"
                    value={form.joiningDate}
                    onChange={(e) => setForm({ ...form, joiningDate: e.target.value })}
                    className={inputClass}
                  />
                </Field>
              </div>
              <Field label="Employee code (optional)">
                <input
                  type="text"
                  placeholder="Auto-generated if empty"
                  value={form.employeeCode}
                  onChange={(e) => setForm({ ...form, employeeCode: e.target.value })}
                  className={inputClass}
                />
              </Field>
              <Field label="Portal password" required>
                <input
                  required
                  type="text"
                  minLength={8}
                  placeholder="Min 8 characters"
                  value={form.portalPassword}
                  onChange={(e) => setForm({ ...form, portalPassword: e.target.value })}
                  className={inputClass}
                />
              </Field>
              <Field label="Notes">
                <textarea
                  rows={2}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className={inputClass}
                />
              </Field>
              {error ? <p className="text-red-400 text-sm">{error}</p> : null}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 text-sm font-semibold text-white disabled:opacity-60"
                style={{ backgroundColor: BLUE }}
              >
                {submitting ? "Creating..." : "Create employee"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
