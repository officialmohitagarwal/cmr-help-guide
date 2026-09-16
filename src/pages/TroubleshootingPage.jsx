import SupportPage from "../components/support/SupportPage";
import { troubleshootingGroups } from "../data/troubleshooting.js";

export default function TroubleshootingPage() {
  return (
    <SupportPage
      type="troubleshooting"
      title="Troubleshooting"
      description="Find practical checks and fixes for authentication errors, provisioning issues, domains, DNS, subscriptions, exports, webhooks, rate limits, and sandbox problems."
      groups={troubleshootingGroups}
    />
  );
}