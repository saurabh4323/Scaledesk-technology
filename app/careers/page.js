import Footer from "../components/Footer";
import CareersPageContent from "../components/careers/CareersPageContent";

export const metadata = {
  title: "Careers | ScaleDesk Technology",
  description:
    "Join ScaleDesk Technology—a remote-first product engineering team building intelligent digital products for startups and enterprises.",
};

export default function CareersPage() {
  return (
    <>
      <CareersPageContent />
      <Footer />
    </>
  );
}
