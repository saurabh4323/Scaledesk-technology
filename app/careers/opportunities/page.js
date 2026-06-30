import Footer from "../../components/Footer";
import OpportunitiesPageContent from "../../components/careers/OpportunitiesPageContent";

export const metadata = {
  title: "Open Roles | ScaleDesk Technology",
  description:
    "Explore open engineering, design, and business roles at ScaleDesk Technology. Remote-first internships and full-time positions.",
};

export default function OpportunitiesPage() {
  return (
    <>
      <OpportunitiesPageContent />
      <Footer />
    </>
  );
}
