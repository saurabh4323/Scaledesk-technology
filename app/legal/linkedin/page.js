import Footer from "../../components/Footer";
import LegalPageContent from "../../components/legal/LegalPageContent";
import { linkedInPage } from "../../../lib/legal/pages";

export default function LinkedInPage() {
  return (
    <>
      <LegalPageContent page={linkedInPage} currentPath="/legal/linkedin" variant="social" />
      <Footer />
    </>
  );
}
