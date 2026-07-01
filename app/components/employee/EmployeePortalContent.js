"use client";

import { useCallback, useEffect, useState } from "react";

const BLUE = "#2F80FF";

const inputClass =
  "w-full border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-[#2F80FF] focus:outline-none text-sm";

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

function maskId(value, visible = 4) {
  if (!value) return "—";
  const s = String(value);
  if (s.length <= visible) return s;
  return "•".repeat(s.length - visible) + s.slice(-visible);
}

function StatCard({ label, value, sub, accent }) {
  return (
    <div
      className={`border p-6 bg-white ${accent ? "border-[#2F80FF]/30 bg-[#2F80FF]/5" : "border-zinc-200"}`}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500 mb-2">
        {label}
      </p>
      <p className="text-2xl font-semibold text-zinc-900">{value}</p>
      {sub ? <p className="text-xs text-zinc-500 mt-1">{sub}</p> : null}
    </div>
  );
}

function Section({ title, description, children }) {
  return (
    <section className="border border-zinc-200 bg-white p-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-zinc-900">{title}</h2>
        {description ? (
          <p className="mt-1 text-sm text-zinc-500 leading-relaxed">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function FieldLabel({ children, required }) {
  return (
    <span className="mb-2 block text-sm font-medium text-zinc-700">
      {children}
      {required ? <span className="text-[#2F80FF]"> *</span> : null}
    </span>
  );
}

function Info({ label, value, masked }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-wider text-zinc-400 mb-1">{label}</p>
      <p className="text-sm text-zinc-800 font-medium">{masked ? maskId(value) : value || "—"}</p>
    </div>
  );
}

export default function EmployeePortalContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState(null);
  const [tab, setTab] = useState("overview");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [kycForm, setKycForm] = useState(EMPTY_KYC);
  const [kycEditing, setKycEditing] = useState(false);
  const [leaveForm, setLeaveForm] = useState({
    type: "annual",
    fromDate: "",
    toDate: "",
    reason: "",
  });
  const [resignationForm, setResignationForm] = useState({
    reason: "",
    overallExperience: "",
    lastWorkingDay: "",
  });
  const [resignationSubmitted, setResignationSubmitted] = useState(false);

  const loadProfile = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/employee/me");
      if (res.status === 401) {
        setIsLoggedIn(false);
        setProfile(null);
        return;
      }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setIsLoggedIn(true);
      setProfile(data.profile);
      setKycForm({ ...EMPTY_KYC, ...data.profile.kycDetails });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/employee/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setPassword("");
      await loadProfile();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/employee/logout", { method: "POST" });
    setIsLoggedIn(false);
    setProfile(null);
  };

  const handleKycSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess("");
    try {
      const res = await fetch("/api/employee/details", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(kycForm),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setProfile(data.profile);
      setKycForm({ ...EMPTY_KYC, ...data.profile.kycDetails });
      setKycEditing(false);
      setSuccess("Your personal & KYC details have been saved.");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleLeaveSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/employee/me", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leaveForm),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setProfile(data.profile);
      setLeaveForm({ type: "annual", fromDate: "", toDate: "", reason: "" });
      setSuccess("Leave request submitted.");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleResignationSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setResignationSubmitted(false);
    try {
      const res = await fetch("/api/employee/resignation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(resignationForm),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setProfile(data.profile);
      setResignationForm({ reason: "", overallExperience: "", lastWorkingDay: "" });
      setResignationSubmitted(true);
      setTab("resignation");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const statusStyles = {
    active: "bg-emerald-50 text-emerald-700 border-emerald-200",
    resignation_pending: "bg-amber-50 text-amber-700 border-amber-200",
    resigned: "bg-zinc-100 text-zinc-600 border-zinc-200",
  };

  const statusLabel = {
    active: "Active",
    resignation_pending: "Resignation Pending",
    resigned: "Resigned",
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-zinc-50 text-zinc-500">
        Loading employee portal...
      </div>
    );
  }

  if (!isLoggedIn || !profile) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center px-6">
        <div className="w-full max-w-md border border-zinc-200 bg-white p-10 shadow-sm">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2F80FF] mb-3">
            Employee Portal
          </p>
          <h1 className="text-2xl font-semibold text-zinc-900 mb-2">Welcome to ScaleDesk</h1>
          <p className="text-zinc-600 text-sm mb-8 leading-relaxed">
            Sign in with the credentials issued by HR after your selection.
          </p>
          <form onSubmit={handleLogin} className="space-y-5">
            <label className="block">
              <FieldLabel>Work email</FieldLabel>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
                placeholder="you@email.com"
              />
            </label>
            <label className="block">
              <FieldLabel>Password</FieldLabel>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputClass}
              />
            </label>
            {error ? <p className="text-red-600 text-sm">{error}</p> : null}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 text-sm font-semibold text-white disabled:opacity-60"
              style={{ backgroundColor: BLUE }}
            >
              {submitting ? "Signing in..." : "Enter portal"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const leaveRemaining =
    (profile.leaveBalance?.annual ?? 0) -
    (profile.leaveBalance?.used ?? 0) -
    (profile.leaveBalance?.pending ?? 0);

  const tabs = [
    ["overview", "Overview"],
    ["profile", "Employment"],
    ["kyc", "Personal & KYC"],
    ["leave", "Leave"],
    ["documents", "Documents"],
    ["resignation", "Resignation"],
  ];

  const kyc = profile.kycDetails || {};

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Dark header strip */}
      <header className="bg-zinc-900 text-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2F80FF]">
              {profile.employeeCode}
            </p>
            <h1 className="text-xl font-semibold">{profile.fullName}</h1>
            <p className="text-sm text-zinc-400">
              {profile.jobTitle} · {profile.department}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 text-[10px] font-semibold uppercase tracking-wider border ${statusStyles[profile.employmentStatus] || statusStyles.active}`}
            >
              {statusLabel[profile.employmentStatus] || profile.employmentStatus}
            </span>
            {!profile.kycComplete ? (
              <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider border border-amber-400/50 text-amber-300 bg-amber-400/10">
                KYC Pending
              </span>
            ) : null}
            <button
              type="button"
              onClick={handleLogout}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
        <nav className="max-w-6xl mx-auto px-6 flex gap-0 overflow-x-auto border-t border-zinc-800">
          {tabs.map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                setTab(key);
                setSuccess("");
                setError("");
              }}
              className={`shrink-0 px-5 py-3 text-sm font-medium border-b-2 transition-colors ${
                tab === key
                  ? "border-[#2F80FF] text-white"
                  : "border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {error ? (
          <div className="mb-6 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        ) : null}
        {success ? (
          <div className="mb-6 border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            {success}
          </div>
        ) : null}

        {tab === "overview" && (
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard label="Employee ID" value={profile.employeeCode} accent />
              <StatCard
                label="Joining date"
                value={new Date(profile.joiningDate).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              />
              <StatCard label="Leave balance" value={leaveRemaining} sub="days remaining" />
              <StatCard
                label="KYC status"
                value={profile.kycComplete ? "Complete" : "Pending"}
                sub={profile.kycComplete ? "All details on file" : "Complete Personal & KYC tab"}
              />
            </div>

            {!profile.kycComplete ? (
              <div className="border border-amber-200 bg-amber-50 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="font-semibold text-amber-900">Complete your KYC details</p>
                  <p className="text-sm text-amber-700 mt-1">
                    Add Aadhaar, PAN, bank account, and emergency contact for payroll setup.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setTab("kyc")}
                  className="shrink-0 px-5 py-2.5 text-sm font-semibold text-white"
                  style={{ backgroundColor: BLUE }}
                >
                  Complete now
                </button>
              </div>
            ) : null}

            <Section title="Welcome aboard">
              <p className="text-zinc-600 leading-relaxed max-w-2xl text-sm">
                This is your employee self-service portal at ScaleDesk Technology. Update your
                personal & statutory details, request leave, access documents, and manage your
                employment record.
                {profile.onboardingNotes ? (
                  <>
                    <br />
                    <br />
                    <strong className="text-zinc-800">HR note:</strong> {profile.onboardingNotes}
                  </>
                ) : null}
              </p>
            </Section>

            <div className="grid md:grid-cols-2 gap-4">
              <Section title="Identity snapshot">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <Info label="Aadhaar" value={kyc.aadhaarNumber} masked />
                  <Info label="PAN" value={kyc.panNumber} masked />
                  <Info label="UAN / PF" value={kyc.uanNumber || "—"} />
                  <Info label="Bank" value={kyc.bankName || "—"} />
                </div>
              </Section>
              <Section title="Emergency contact">
                <div className="text-sm space-y-2">
                  <Info label="Name" value={kyc.emergencyContactName} />
                  <Info label="Phone" value={kyc.emergencyContactPhone} />
                  <Info label="Relation" value={kyc.emergencyContactRelation} />
                </div>
              </Section>
            </div>
          </div>
        )}

        {tab === "profile" && (
          <Section title="Employment & education" description="Details from your application and onboarding.">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
              <Info label="Full name" value={profile.fullName} />
              <Info label="Work email" value={profile.email} />
              <Info label="Phone" value={profile.phone} />
              <Info label="Location" value={profile.location} />
              <Info label="Role" value={profile.jobTitle} />
              <Info label="Department" value={profile.department} />
              <Info label="Employee code" value={profile.employeeCode} />
              <Info
                label="Date of joining"
                value={new Date(profile.joiningDate).toLocaleDateString("en-IN")}
              />
              <Info label="College / University" value={profile.collegeName} />
              <Info label="CGPA" value={profile.cgpa} />
              <Info label="10th marks" value={profile.marks10th} />
              <Info label="12th marks" value={profile.marks12th} />
            </div>
          </Section>
        )}

        {tab === "kyc" && (
          <div className="space-y-6">
            {!kycEditing && profile.kycComplete ? (
              <>
                <Section
                  title="Personal & statutory details"
                  description="Your verified information on file with HR."
                >
                  <div className="flex justify-end mb-6">
                    <button
                      type="button"
                      onClick={() => setKycEditing(true)}
                      className="text-sm font-semibold text-[#2F80FF] hover:underline"
                    >
                      Edit details
                    </button>
                  </div>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
                        Personal information
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <Info label="Date of birth" value={kyc.dateOfBirth} />
                        <Info label="Gender" value={kyc.gender} />
                        <Info label="Marital status" value={kyc.maritalStatus} />
                        <Info label="Blood group" value={kyc.bloodGroup} />
                        <Info label="Father's name" value={kyc.fatherName} />
                        <Info label="Mother's name" value={kyc.motherName} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
                        Government IDs
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <Info label="Aadhaar number" value={kyc.aadhaarNumber} masked />
                        <Info label="PAN number" value={kyc.panNumber} masked />
                        <Info label="UAN / PF number" value={kyc.uanNumber} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
                        Bank details (salary account)
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <Info label="Account number" value={kyc.bankAccountNumber} masked />
                        <Info label="IFSC code" value={kyc.bankIfsc} />
                        <Info label="Bank name" value={kyc.bankName} />
                        <Info label="Branch" value={kyc.bankBranch} />
                        <Info label="Account type" value={kyc.bankAccountType} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
                        Address & emergency contact
                      </h3>
                      <div className="grid md:grid-cols-2 gap-5">
                        <Info label="Permanent address" value={kyc.permanentAddress} />
                        <Info label="Present address" value={kyc.presentAddress} />
                        <Info label="Emergency contact" value={kyc.emergencyContactName} />
                        <Info label="Emergency phone" value={kyc.emergencyContactPhone} />
                        <Info label="Relation" value={kyc.emergencyContactRelation} />
                      </div>
                    </div>
                  </div>
                </Section>
              </>
            ) : (
              <form onSubmit={handleKycSubmit} className="space-y-6">
                <Section
                  title="Personal information"
                  description="As per your government-issued documents."
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <label className="block">
                      <FieldLabel required>Date of birth</FieldLabel>
                      <input
                        required
                        type="date"
                        value={kycForm.dateOfBirth}
                        onChange={(e) => setKycForm({ ...kycForm, dateOfBirth: e.target.value })}
                        className={inputClass}
                      />
                    </label>
                    <label className="block">
                      <FieldLabel required>Gender</FieldLabel>
                      <select
                        required
                        value={kycForm.gender}
                        onChange={(e) => setKycForm({ ...kycForm, gender: e.target.value })}
                        className={inputClass}
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                      </select>
                    </label>
                    <label className="block">
                      <FieldLabel>Marital status</FieldLabel>
                      <select
                        value={kycForm.maritalStatus}
                        onChange={(e) => setKycForm({ ...kycForm, maritalStatus: e.target.value })}
                        className={inputClass}
                      >
                        <option value="">Select</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                      </select>
                    </label>
                    <label className="block">
                      <FieldLabel>Blood group</FieldLabel>
                      <select
                        value={kycForm.bloodGroup}
                        onChange={(e) => setKycForm({ ...kycForm, bloodGroup: e.target.value })}
                        className={inputClass}
                      >
                        <option value="">Select</option>
                        {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="block">
                      <FieldLabel>Father&apos;s name</FieldLabel>
                      <input
                        type="text"
                        value={kycForm.fatherName}
                        onChange={(e) => setKycForm({ ...kycForm, fatherName: e.target.value })}
                        className={inputClass}
                      />
                    </label>
                    <label className="block">
                      <FieldLabel>Mother&apos;s name</FieldLabel>
                      <input
                        type="text"
                        value={kycForm.motherName}
                        onChange={(e) => setKycForm({ ...kycForm, motherName: e.target.value })}
                        className={inputClass}
                      />
                    </label>
                  </div>
                </Section>

                <Section
                  title="Government IDs"
                  description="Required for payroll, PF, and statutory compliance in India."
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <label className="block">
                      <FieldLabel required>Aadhaar number</FieldLabel>
                      <input
                        required
                        type="text"
                        inputMode="numeric"
                        maxLength={12}
                        placeholder="12-digit Aadhaar"
                        value={kycForm.aadhaarNumber}
                        onChange={(e) =>
                          setKycForm({
                            ...kycForm,
                            aadhaarNumber: e.target.value.replace(/\D/g, "").slice(0, 12),
                          })
                        }
                        className={inputClass}
                      />
                    </label>
                    <label className="block">
                      <FieldLabel required>PAN number</FieldLabel>
                      <input
                        required
                        type="text"
                        maxLength={10}
                        placeholder="ABCDE1234F"
                        value={kycForm.panNumber}
                        onChange={(e) =>
                          setKycForm({
                            ...kycForm,
                            panNumber: e.target.value.toUpperCase().slice(0, 10),
                          })
                        }
                        className={inputClass}
                      />
                    </label>
                    <label className="block md:col-span-2">
                      <FieldLabel>UAN / PF number</FieldLabel>
                      <input
                        type="text"
                        placeholder="Universal Account Number (if available)"
                        value={kycForm.uanNumber}
                        onChange={(e) => setKycForm({ ...kycForm, uanNumber: e.target.value })}
                        className={inputClass}
                      />
                    </label>
                  </div>
                </Section>

                <Section
                  title="Bank details"
                  description="Salary will be credited to this account."
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <label className="block">
                      <FieldLabel required>Account number</FieldLabel>
                      <input
                        required
                        type="text"
                        inputMode="numeric"
                        value={kycForm.bankAccountNumber}
                        onChange={(e) =>
                          setKycForm({ ...kycForm, bankAccountNumber: e.target.value })
                        }
                        className={inputClass}
                      />
                    </label>
                    <label className="block">
                      <FieldLabel required>IFSC code</FieldLabel>
                      <input
                        required
                        type="text"
                        maxLength={11}
                        placeholder="e.g. HDFC0001234"
                        value={kycForm.bankIfsc}
                        onChange={(e) =>
                          setKycForm({
                            ...kycForm,
                            bankIfsc: e.target.value.toUpperCase().slice(0, 11),
                          })
                        }
                        className={inputClass}
                      />
                    </label>
                    <label className="block">
                      <FieldLabel required>Bank name</FieldLabel>
                      <input
                        required
                        type="text"
                        value={kycForm.bankName}
                        onChange={(e) => setKycForm({ ...kycForm, bankName: e.target.value })}
                        className={inputClass}
                      />
                    </label>
                    <label className="block">
                      <FieldLabel>Branch</FieldLabel>
                      <input
                        type="text"
                        value={kycForm.bankBranch}
                        onChange={(e) => setKycForm({ ...kycForm, bankBranch: e.target.value })}
                        className={inputClass}
                      />
                    </label>
                    <label className="block">
                      <FieldLabel required>Account type</FieldLabel>
                      <select
                        required
                        value={kycForm.bankAccountType}
                        onChange={(e) =>
                          setKycForm({ ...kycForm, bankAccountType: e.target.value })
                        }
                        className={inputClass}
                      >
                        <option value="savings">Savings</option>
                        <option value="current">Current</option>
                        <option value="salary">Salary</option>
                      </select>
                    </label>
                  </div>
                </Section>

                <Section title="Address & emergency contact">
                  <div className="grid md:grid-cols-2 gap-5">
                    <label className="block md:col-span-2">
                      <FieldLabel required>Permanent address</FieldLabel>
                      <textarea
                        required
                        rows={3}
                        value={kycForm.permanentAddress}
                        onChange={(e) =>
                          setKycForm({ ...kycForm, permanentAddress: e.target.value })
                        }
                        className={inputClass}
                      />
                    </label>
                    <label className="flex items-center gap-2 md:col-span-2">
                      <input
                        type="checkbox"
                        checked={kycForm.sameAsPermanent}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          setKycForm({
                            ...kycForm,
                            sameAsPermanent: checked,
                            presentAddress: checked
                              ? kycForm.permanentAddress
                              : kycForm.presentAddress,
                          });
                        }}
                        className="h-4 w-4"
                      />
                      <span className="text-sm text-zinc-600">Present address same as permanent</span>
                    </label>
                    {!kycForm.sameAsPermanent ? (
                      <label className="block md:col-span-2">
                        <FieldLabel>Present address</FieldLabel>
                        <textarea
                          rows={3}
                          value={kycForm.presentAddress}
                          onChange={(e) =>
                            setKycForm({ ...kycForm, presentAddress: e.target.value })
                          }
                          className={inputClass}
                        />
                      </label>
                    ) : null}
                    <label className="block">
                      <FieldLabel required>Emergency contact name</FieldLabel>
                      <input
                        required
                        type="text"
                        value={kycForm.emergencyContactName}
                        onChange={(e) =>
                          setKycForm({ ...kycForm, emergencyContactName: e.target.value })
                        }
                        className={inputClass}
                      />
                    </label>
                    <label className="block">
                      <FieldLabel required>Emergency contact phone</FieldLabel>
                      <input
                        required
                        type="tel"
                        value={kycForm.emergencyContactPhone}
                        onChange={(e) =>
                          setKycForm({ ...kycForm, emergencyContactPhone: e.target.value })
                        }
                        className={inputClass}
                      />
                    </label>
                    <label className="block">
                      <FieldLabel>Relation</FieldLabel>
                      <input
                        type="text"
                        placeholder="e.g. Spouse, Parent, Sibling"
                        value={kycForm.emergencyContactRelation}
                        onChange={(e) =>
                          setKycForm({ ...kycForm, emergencyContactRelation: e.target.value })
                        }
                        className={inputClass}
                      />
                    </label>
                  </div>
                </Section>

                <div className="flex flex-col sm:flex-row gap-3 justify-end border border-zinc-200 bg-white p-6">
                  {kycEditing ? (
                    <button
                      type="button"
                      onClick={() => {
                        setKycEditing(false);
                        setKycForm({ ...EMPTY_KYC, ...profile.kycDetails });
                      }}
                      className="px-6 py-3 text-sm font-semibold text-zinc-600 border border-zinc-200 hover:border-zinc-400"
                    >
                      Cancel
                    </button>
                  ) : null}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-8 py-3 text-sm font-semibold text-white disabled:opacity-60"
                    style={{ backgroundColor: BLUE }}
                  >
                    {submitting ? "Saving..." : "Save details"}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {tab === "leave" && (
          <div className="grid lg:grid-cols-2 gap-6">
            <Section title="Request leave">
              <form onSubmit={handleLeaveSubmit} className="space-y-4">
                <label className="block">
                  <FieldLabel required>Leave type</FieldLabel>
                  <select
                    value={leaveForm.type}
                    onChange={(e) => setLeaveForm({ ...leaveForm, type: e.target.value })}
                    className={inputClass}
                  >
                    <option value="annual">Annual leave</option>
                    <option value="sick">Sick leave</option>
                    <option value="personal">Personal leave</option>
                  </select>
                </label>
                <label className="block">
                  <FieldLabel required>From</FieldLabel>
                  <input
                    required
                    type="date"
                    value={leaveForm.fromDate}
                    onChange={(e) => setLeaveForm({ ...leaveForm, fromDate: e.target.value })}
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <FieldLabel required>To</FieldLabel>
                  <input
                    required
                    type="date"
                    value={leaveForm.toDate}
                    onChange={(e) => setLeaveForm({ ...leaveForm, toDate: e.target.value })}
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <FieldLabel required>Reason</FieldLabel>
                  <textarea
                    required
                    rows={3}
                    value={leaveForm.reason}
                    onChange={(e) => setLeaveForm({ ...leaveForm, reason: e.target.value })}
                    className={inputClass}
                  />
                </label>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 text-sm font-semibold text-white disabled:opacity-60"
                  style={{ backgroundColor: BLUE }}
                >
                  {submitting ? "Submitting..." : "Submit request"}
                </button>
              </form>
            </Section>

            <Section title="Leave history">
              {(profile.leaveRequests || []).length === 0 ? (
                <p className="text-zinc-500 text-sm">No leave requests yet.</p>
              ) : (
                <ul className="space-y-3">
                  {profile.leaveRequests.map((req) => (
                    <li key={req.id} className="border border-zinc-200 p-4 text-sm bg-zinc-50">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium capitalize text-zinc-900">
                          {req.type} leave
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-amber-700 border border-amber-200 bg-amber-50 px-2 py-0.5">
                          {req.status}
                        </span>
                      </div>
                      <p className="text-zinc-500 text-xs">
                        {req.fromDate} → {req.toDate}
                      </p>
                      <p className="text-zinc-700 mt-2">{req.reason}</p>
                    </li>
                  ))}
                </ul>
              )}
            </Section>
          </div>
        )}

        {tab === "documents" && (
          <Section title="Documents" description="Your files on record with HR.">
            <div className="grid sm:grid-cols-2 gap-4">
              {profile.resumeFileId ? (
                <a
                  href={`/api/files/resume/${profile.resumeFileId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 border border-zinc-200 bg-zinc-50 p-5 hover:border-[#2F80FF] transition-colors"
                >
                  <div className="h-12 w-12 flex items-center justify-center bg-[#2F80FF]/10 text-[#2F80FF] text-xl font-bold">
                    CV
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900">{profile.resumeName || "Resume"}</p>
                    <p className="text-xs text-zinc-500">Application document</p>
                  </div>
                </a>
              ) : null}
              <div className="flex items-center gap-4 border border-dashed border-zinc-300 p-5 text-zinc-500">
                <div className="h-12 w-12 flex items-center justify-center bg-zinc-100 text-zinc-400 text-xs font-bold">
                  ID
                </div>
                <div>
                  <p className="font-medium text-zinc-700">Aadhaar & PAN</p>
                  <p className="text-xs">On file in Personal & KYC tab</p>
                </div>
              </div>
            </div>
          </Section>
        )}

        {tab === "resignation" && (
          <div className="max-w-2xl">
            {profile.resignation ? (
              <Section title="Resignation submitted">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <p className="text-sm text-zinc-500">
                    Submitted on{" "}
                    {new Date(profile.resignation.submittedAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-700 border border-amber-200 bg-amber-50 px-3 py-1">
                    {profile.resignation.status}
                  </span>
                </div>
                <div className="space-y-5 text-sm">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-400 mb-1.5">
                      Reason for leaving
                    </p>
                    <p className="text-zinc-800 leading-relaxed">{profile.resignation.reason}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-400 mb-1.5">
                      Overall experience
                    </p>
                    <p className="text-zinc-800 leading-relaxed whitespace-pre-wrap">
                      {profile.resignation.overallExperience}
                    </p>
                  </div>
                </div>
              </Section>
            ) : (
              <Section
                title="Submit resignation"
                description="We're sorry to see you go. HR will follow up on offboarding."
              >
                {resignationSubmitted ? (
                  <div className="mb-6 border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                    Your resignation has been submitted successfully.
                  </div>
                ) : null}
                <form onSubmit={handleResignationSubmit} className="space-y-5">
                  <label className="block">
                    <FieldLabel required>Reason for resignation</FieldLabel>
                    <textarea
                      required
                      rows={4}
                      value={resignationForm.reason}
                      onChange={(e) =>
                        setResignationForm({ ...resignationForm, reason: e.target.value })
                      }
                      className={inputClass}
                    />
                  </label>
                  <label className="block">
                    <FieldLabel required>Overall experience working with us</FieldLabel>
                    <textarea
                      required
                      rows={6}
                      minLength={30}
                      value={resignationForm.overallExperience}
                      onChange={(e) =>
                        setResignationForm({
                          ...resignationForm,
                          overallExperience: e.target.value,
                        })
                      }
                      className={inputClass}
                    />
                    <span className="mt-1.5 block text-xs text-zinc-400">
                      {resignationForm.overallExperience.length} characters (min 30)
                    </span>
                  </label>
                  <label className="block">
                    <FieldLabel>Proposed last working day</FieldLabel>
                    <input
                      type="date"
                      value={resignationForm.lastWorkingDay}
                      onChange={(e) =>
                        setResignationForm({
                          ...resignationForm,
                          lastWorkingDay: e.target.value,
                        })
                      }
                      className={inputClass}
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 text-sm font-semibold text-red-700 border border-red-200 bg-red-50 hover:bg-red-100 disabled:opacity-60 transition-colors"
                  >
                    {submitting ? "Submitting..." : "Submit resignation"}
                  </button>
                </form>
              </Section>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
