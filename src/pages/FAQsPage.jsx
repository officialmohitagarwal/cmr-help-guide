import SupportPage from "../components/support/SupportPage";
import { faqGroups } from "../data/faqs";

export default function FAQsPage() {
  return (
    <SupportPage
      type="faq"
      title="Frequently Asked Questions"
      description="Find clear answers to common questions about CMR, billing, domains, mailboxes, subscriptions, warmup, exports, webhooks, and integrations."
      groups={faqGroups}
    />
  );
}