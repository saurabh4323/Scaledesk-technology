import Footer from "../../components/Footer";
import LegalPageContent from "../../components/legal/LegalPageContent";
import { privacyPolicy } from "../../../lib/legal/pages";

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalPageContent page={privacyPolicy} currentPath="/legal/privacy-policy" />
      <Footer />
    </>
  );
}
