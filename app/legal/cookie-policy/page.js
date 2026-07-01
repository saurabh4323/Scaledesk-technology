import Footer from "../../components/Footer";
import LegalPageContent from "../../components/legal/LegalPageContent";
import { cookiePolicy } from "../../../lib/legal/pages";

export default function CookiePolicyPage() {
  return (
    <>
      <LegalPageContent page={cookiePolicy} currentPath="/legal/cookie-policy" />
      <Footer />
    </>
  );
}
