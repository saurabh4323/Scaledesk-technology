"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import AdminEmployeeDetailModal from "./AdminEmployeeDetailModal";
import AdminAddEmployeeModal from "./AdminAddEmployeeModal";

const BLUE = "#2F80FF";

const STATUS_STYLES = {
  submitted: "bg-blue-50 text-blue-700 border-blue-200",
  under_consideration: "bg-amber-50 text-amber-700 border-amber-200",
  selected: "bg-emerald-50 text-emerald-700 border-emerald-200",
  rejected: "bg-zinc-100 text-zinc-600 border-zinc-200",
};

const STATUS_LABELS = {
  submitted: "Submitted",
  under_consideration: "Under Consideration",
  selected: "Selected",
  rejected: "Rejected",
};

function OnboardModal({ application, onClose, onSuccess }) {
  const [form, setForm] = useState({
    joiningDate: "",
    department: "Engineering",
    portalPassword: "",
    employeeCode: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/applications/${application.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Onboarding failed.");
      setCredentials(data.employee);
      onSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (credentials) {
    return (
      <Modal onClose={onClose}>
        <h3 className="text-xl font-semibold text-white mb-2">Employee portal created</h3>
        <p className="text-zinc-400 text-sm mb-6">
          Share these credentials with {application.fullName}:
        </p>
        <div className="bg-zinc-800 border border-zinc-700 p-5 space-y-3 text-sm mb-6">
          <Row label="Employee ID" value={credentials.employeeCode} />
          <Row label="Portal URL" value={credentials.portalUrl} link />
          <Row label="Email" value={credentials.email} />
          <Row label="Password" value={credentials.portalPassword} mono />
        </div>
        <button
          type="button"
          onClick={onClose}
          className="w-full py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: BLUE }}
        >
          Done
        </button>
      </Modal>
    );
  }

  return (
    <Modal onClose={onClose}>
      <h3 className="text-xl font-semibold text-white mb-1">Onboard employee</h3>
      <p className="text-zinc-400 text-sm mb-6">
        {application.fullName} — {application.jobTitle}
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label="Joining date">
          <input
            required
            type="date"
            value={form.joiningDate}
            onChange={(e) => setForm({ ...form, joiningDate: e.target.value })}
            className={inputClass}
          />
        </Field>
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
        <Field label="Employee code (optional)">
          <input
            type="text"
            placeholder="Auto-generated if empty"
            value={form.employeeCode}
            onChange={(e) => setForm({ ...form, employeeCode: e.target.value })}
            className={inputClass}
          />
        </Field>
        <Field label="Portal password">
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
        <Field label="Onboarding notes">
          <textarea
            rows={3}
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
          {submitting ? "Creating..." : "Create employee portal"}
        </button>
      </form>
    </Modal>
  );
}

function Row({ label, value, mono, link }) {
  return (
    <div className="flex justify-between gap-4">
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

function Modal({ children, onClose }) {
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
        {children}
      </div>
    </div>
  );
}

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

const inputClass =
  "w-full bg-zinc-800 border border-zinc-700 px-4 py-2.5 text-white text-sm focus:border-[#2F80FF] focus:outline-none";

function ApplicationRow({ app, onStatusChange, onOnboard, onManageEmployee }) {
  const [expanded, setExpanded] = useState(false);
  const [updating, setUpdating] = useState(false);

  const setStatus = async (status) => {
    setUpdating(true);
    await onStatusChange(app.id, status);
    setUpdating(false);
  };

  return (
    <div className="border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-5 items-center">
        <div className="lg:col-span-3">
          <p className="font-semibold text-white">{app.fullName}</p>
          <p className="text-xs text-zinc-500 mt-0.5">{app.email}</p>
        </div>
        <div className="lg:col-span-2">
          <p className="text-sm text-zinc-300">{app.jobTitle}</p>
          <p className="text-[10px] text-zinc-500 uppercase tracking-wider">{app.jobId}</p>
        </div>
        <div className="lg:col-span-2">
          <span
            className={`inline-flex px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider border ${STATUS_STYLES[app.status] || STATUS_STYLES.submitted}`}
          >
            {STATUS_LABELS[app.status] || app.status}
          </span>
        </div>
        <div className="lg:col-span-5 flex flex-wrap gap-2">
          <ActionBtn
            label="Under Consideration"
            active={app.status === "under_consideration"}
            onClick={() => setStatus("under_consideration")}
            disabled={updating}
            color="amber"
          />
          <ActionBtn
            label="Select"
            active={app.status === "selected"}
            onClick={() => setStatus("selected")}
            disabled={updating}
            color="emerald"
          />
          <ActionBtn
            label="Reject"
            active={app.status === "rejected"}
            onClick={() => setStatus("rejected")}
            disabled={updating}
            color="zinc"
          />
          {app.status === "selected" && !app.employeeCreated ? (
            <button
              type="button"
              onClick={() => onOnboard(app)}
              className="px-3 py-1.5 text-xs font-semibold text-white border border-[#2F80FF] bg-[#2F80FF]/10 hover:bg-[#2F80FF]/20"
            >
              Issue portal login →
            </button>
          ) : null}
          {app.employeeCreated ? (
            <>
              <span className="px-3 py-1.5 text-xs font-medium text-emerald-400 border border-emerald-800">
                Portal issued
              </span>
              {app.employeeId ? (
                <button
                  type="button"
                  onClick={() => onManageEmployee(app.employeeId)}
                  className="px-3 py-1.5 text-xs font-semibold text-white border border-[#2F80FF] bg-[#2F80FF]/10 hover:bg-[#2F80FF]/20"
                >
                  All details →
                </button>
              ) : null}
            </>
          ) : null}
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="px-3 py-1.5 text-xs text-zinc-400 hover:text-white"
          >
            {expanded ? "Less" : "Details"}
          </button>
        </div>
      </div>

      {expanded ? (
        <div className="border-t border-zinc-800 px-5 py-5 grid md:grid-cols-3 gap-4 text-sm">
          <Detail label="Phone" value={app.phone} />
          <Detail label="Location" value={app.location} />
          <Detail label="College" value={app.collegeName} />
          <Detail label="CGPA" value={app.cgpa} />
          <Detail label="10th" value={app.marks10th} />
          <Detail label="12th" value={app.marks12th} />
          <div className="md:col-span-3">
            <Detail label="Why join us" value={app.whyJoinUs} />
          </div>
          {app.resumeUrl ? (
            <div className="md:col-span-3">
              <a
                href={app.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2F80FF] text-sm font-medium hover:underline"
              >
                View resume ({app.resumeName})
              </a>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function ActionBtn({ label, active, onClick, disabled, color }) {
  const colors = {
    amber: active
      ? "bg-amber-500/20 border-amber-500 text-amber-300"
      : "border-zinc-700 text-zinc-400 hover:border-amber-600 hover:text-amber-300",
    emerald: active
      ? "bg-emerald-500/20 border-emerald-500 text-emerald-300"
      : "border-zinc-700 text-zinc-400 hover:border-emerald-600 hover:text-emerald-300",
    zinc: active
      ? "bg-zinc-600/30 border-zinc-500 text-zinc-300"
      : "border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-300",
  };
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`px-3 py-1.5 text-xs font-semibold border transition-colors disabled:opacity-50 ${colors[color]}`}
    >
      {label}
    </button>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">{label}</p>
      <p className="text-zinc-300">{value}</p>
    </div>
  );
}

function EmployeeRow({ employee, onManage }) {
  return (
    <div className="border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-5 items-center">
        <div className="lg:col-span-3">
          <p className="font-semibold text-white">{employee.fullName}</p>
          <p className="text-xs text-zinc-500 mt-0.5">{employee.email}</p>
        </div>
        <div className="lg:col-span-2">
          <p className="text-sm text-zinc-300">{employee.employeeCode}</p>
          <p className="text-[10px] text-zinc-500 uppercase tracking-wider">{employee.department}</p>
        </div>
        <div className="lg:col-span-2">
          <p className="text-sm text-zinc-300">{employee.jobTitle}</p>
        </div>
        <div className="lg:col-span-2">
          <span
            className={`inline-flex px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider border ${
              employee.kycComplete
                ? "bg-emerald-500/10 border-emerald-600 text-emerald-400"
                : "bg-amber-500/10 border-amber-600 text-amber-400"
            }`}
          >
            {employee.kycComplete ? "KYC Complete" : "KYC Pending"}
          </span>
        </div>
        <div className="lg:col-span-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => onManage(employee.id)}
            className="px-4 py-2 text-xs font-semibold text-white border border-[#2F80FF] bg-[#2F80FF]/10 hover:bg-[#2F80FF]/20"
          >
            All details →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminPortalContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [applications, setApplications] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [onboardApp, setOnboardApp] = useState(null);
  const [view, setView] = useState("applications");
  const [employees, setEmployees] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [showAddEmployee, setShowAddEmployee] = useState(false);

  const loadApplications = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/applications");
      if (res.status === 401) {
        setIsLoggedIn(false);
        setApplications([]);
        return;
      }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setIsLoggedIn(true);
      setApplications(data.applications || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const loadEmployees = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/employees");
      if (res.status === 401) return;
      const data = await res.json();
      if (res.ok) setEmployees(data.employees || []);
    } catch {
      /* ignore */
    }
  }, []);

  const loadAll = useCallback(async () => {
    await loadApplications();
    await loadEmployees();
  }, [loadApplications, loadEmployees]);

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setPassword("");
      await loadAll();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setIsLoggedIn(false);
    setApplications([]);
  };

  const handleStatusChange = async (id, status) => {
    const res = await fetch(`/api/admin/applications/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    const data = await res.json();
    if (res.ok) {
      setApplications((prev) =>
        prev.map((a) => (a.id === id ? data.application : a))
      );
    }
  };

  const filtered = applications.filter((a) =>
    filter === "all" ? true : a.status === filter
  );

  const counts = {
    all: applications.length,
    submitted: applications.filter((a) => a.status === "submitted").length,
    under_consideration: applications.filter((a) => a.status === "under_consideration").length,
    selected: applications.filter((a) => a.status === "selected").length,
    rejected: applications.filter((a) => a.status === "rejected").length,
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-zinc-500">
        Loading admin portal...
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="w-full max-w-md border border-zinc-800 bg-zinc-900 p-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2F80FF] mb-3">
            HR Admin
          </p>
          <h1 className="text-2xl font-semibold text-white mb-2">Admin portal</h1>
          <p className="text-zinc-500 text-sm mb-8">Sign in to manage job applications.</p>
          <form onSubmit={handleLogin} className="space-y-5">
            <Field label="Admin email">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Password">
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputClass}
              />
            </Field>
            {error ? <p className="text-red-400 text-sm">{error}</p> : null}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 text-sm font-semibold text-white disabled:opacity-60"
              style={{ backgroundColor: BLUE }}
            >
              {submitting ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-zinc-800 bg-zinc-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2F80FF]">
              ScaleDesk HR
            </p>
            <h1 className="text-lg font-semibold">HR Admin Portal</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex border border-zinc-700">
              <button
                type="button"
                onClick={() => setView("applications")}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider ${
                  view === "applications"
                    ? "bg-[#2F80FF] text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Applications
              </button>
              <button
                type="button"
                onClick={() => setView("employees")}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider ${
                  view === "employees"
                    ? "bg-[#2F80FF] text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Employees ({employees.length})
              </button>
            </div>
            <Link href="/careers/opportunities" className="text-sm text-zinc-400 hover:text-white">
              Careers page
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="text-sm text-zinc-400 hover:text-white"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-6 py-8">
        {view === "applications" ? (
          <>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {[
            ["all", "All"],
            ["submitted", "Submitted"],
            ["under_consideration", "Under Review"],
            ["selected", "Selected"],
            ["rejected", "Rejected"],
          ].map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`p-4 border text-left transition-colors ${
                filter === key
                  ? "border-[#2F80FF] bg-[#2F80FF]/10"
                  : "border-zinc-800 bg-zinc-900 hover:border-zinc-700"
              }`}
            >
              <p className="text-2xl font-semibold">{counts[key]}</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">{label}</p>
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.length === 0 ? (
            <p className="text-zinc-500 text-center py-16 border border-zinc-800">
              No applications in this category.
            </p>
          ) : (
            filtered.map((app) => (
              <ApplicationRow
                key={app.id}
                app={app}
                onStatusChange={handleStatusChange}
                onOnboard={setOnboardApp}
                onManageEmployee={setSelectedEmployeeId}
              />
            ))
          )}
        </div>
          </>
        ) : (
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <p className="text-sm text-zinc-500">
                Manage employees — add directly or fill Aadhaar, PAN, bank details on their behalf.
              </p>
              <button
                type="button"
                onClick={() => setShowAddEmployee(true)}
                className="shrink-0 px-5 py-2.5 text-sm font-semibold text-white"
                style={{ backgroundColor: BLUE }}
              >
                + Add employee
              </button>
            </div>
            {employees.length === 0 ? (
              <div className="text-center py-16 border border-zinc-800">
                <p className="text-zinc-500 mb-6">No employees yet.</p>
                <button
                  type="button"
                  onClick={() => setShowAddEmployee(true)}
                  className="px-6 py-3 text-sm font-semibold text-white"
                  style={{ backgroundColor: BLUE }}
                >
                  Add your first employee
                </button>
              </div>
            ) : (
              employees.map((emp) => (
                <EmployeeRow
                  key={emp.id}
                  employee={emp}
                  onManage={setSelectedEmployeeId}
                />
              ))
            )}
          </div>
        )}
      </main>

      {onboardApp ? (
        <OnboardModal
          application={onboardApp}
          onClose={() => setOnboardApp(null)}
          onSuccess={loadAll}
        />
      ) : null}

      {selectedEmployeeId ? (
        <AdminEmployeeDetailModal
          employeeId={selectedEmployeeId}
          onClose={() => setSelectedEmployeeId(null)}
          onSaved={() => {
            loadEmployees();
            loadApplications();
          }}
        />
      ) : null}

      {showAddEmployee ? (
        <AdminAddEmployeeModal
          onClose={() => setShowAddEmployee(false)}
          onSuccess={loadEmployees}
          onFillDetails={(id) => setSelectedEmployeeId(id)}
        />
      ) : null}
    </div>
  );
}
