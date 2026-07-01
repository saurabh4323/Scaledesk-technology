import Footer from "../../components/Footer";
import LegalPageContent from "../../components/legal/LegalPageContent";
import { securityPage } from "../../../lib/legal/pages";

export default function SecurityPage() {
  return (
    <>
      <LegalPageContent
        page={securityPage}
        currentPath="/legal/security"
        variant="security"
      />
      <Footer />
    </>
  );
}
