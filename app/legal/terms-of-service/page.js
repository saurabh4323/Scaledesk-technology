import Footer from "../../components/Footer";
import LegalPageContent from "../../components/legal/LegalPageContent";
import { termsOfService } from "../../../lib/legal/pages";

export default function TermsOfServicePage() {
  return (
    <>
      <LegalPageContent page={termsOfService} currentPath="/legal/terms-of-service" />
      <Footer />
    </>
  );
}
