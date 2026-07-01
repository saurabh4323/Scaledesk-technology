import Footer from "../components/Footer";
import InsightsPageContent from "../components/insights/InsightsPageContent";

export const metadata = {
  title: "Insights | ScaleDesk Technology",
  description:
    "Perspectives on product engineering, architecture, AI, cloud operations, and security from ScaleDesk Technology.",
};

export default function InsightsPage() {
  return (
    <>
      <InsightsPageContent />
      <Footer />
    </>
  );
}
