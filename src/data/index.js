// ============================================================
// Getting Started
// ============================================================

import { gettingStartedArticle } from "./articles/gettingStarted";

// ============================================================
// Dashboard
// ============================================================

import { dashboardOverviewArticle } from "./articles/dashboard/dashboardOverview";
import { recentActivitiesArticle } from "./articles/dashboard/recentActivities";
import { quickSearchArticle } from "./articles/dashboard/quickSearch";
import { walletBalanceArticle } from "./articles/dashboard/walletBalance";
import { dashboardSupportArticle } from "./articles/dashboard/dashboardSupport";

// ============================================================
// Partners
// ============================================================

import { whiteLabelPartnerArticle } from "./articles/partners/whiteLabelPartner";
import { apiPartnerArticle } from "./articles/partners/apiPartner";

// ============================================================
// FAQ Articles
// ============================================================

import { whatIsCmrArticle } from "./articles/faqs/whatIsCmr";
import { apiVsWhitelabelArticle } from "./articles/faqs/apiVsWhitelabel";
import { apiVsWhitelabelChoiceArticle } from "./articles/faqs/apiVsWhitelabelChoice";

// ============================================================
// Wallet
// ============================================================

import { addBalanceArticle } from "./articles/wallet/addBalance";
import { managePaymentsArticle } from "./articles/wallet/managePayments";
import { backupCardArticle } from "./articles/wallet/backupCard";
import { autoTopUpArticle } from "./articles/wallet/autoTopUp";
// import { updateAutoTopUpArticle } from "./articles/wallet/updateAutoTopUp";
// import { smartRechargeArticle } from "./articles/wallet/smartRecharge";
import { downloadInvoicesArticle } from "./articles/wallet/downloadInvoices";

// ============================================================
// Platform — Users
// ============================================================

import { usersOverviewArticle } from "./articles/usersPlatform/usersOverview";
import { addUserArticle } from "./articles/usersPlatform/addUser";
import { searchUsersArticle } from "./articles/usersPlatform/searchUsers";
import { userDashboardArticle } from "./articles/usersPlatform/userDashboard";

// ============================================================
// Platform — Orders
// ============================================================

import { ordersOverviewArticle } from "./articles/ordersPlatform/ordersOverview";
import { searchOrdersArticle } from "./articles/ordersPlatform/searchOrders";
import { filterOrdersArticle } from "./articles/ordersPlatform/filterOrders";
import { orderDetailsArticle } from "./articles/ordersPlatform/orderDetails";
import { missingOrderArticle } from "./articles/ordersPlatform/missingOrder";

// ============================================================
// Platform — Subscriptions
// ============================================================

import { manageSubscriptionsArticle } from "./articles/subscriptions/manageSubscriptions";

// ============================================================
// Settings — General
// ============================================================

import { updatePaymentMethodArticle } from "./articles/settings/updatePaymentMethod";
import { editBrandDetailsArticle } from "./articles/settings/editBrandDetails";
import { editContactDetailsArticle } from "./articles/settings/editContactDetails";

// ============================================================
// Settings — Workspace Members
// ============================================================

import { inviteMembersArticle } from "./articles/settings/inviteMembers";
import { editMemberRoleArticle } from "./articles/settings/editMemberRole";
import { removeMemberArticle } from "./articles/settings/removeMember";
import { rolePermissionsArticle } from "./articles/settings/rolePermissions";

// ============================================================
// Settings — Integrations
// ============================================================

import { cmrApiKeyArticle } from "./articles/settings/cmrApiKey";

// ============================================================
// Settings — MCP
// ============================================================

import { mcpArticle } from "./articles/settings/mcp";

// ============================================================
// Settings — Webhook
// ============================================================

import { addWebhookArticle } from "./articles/settings/webhook/addDestination";
import { toggleWebhookArticle } from "./articles/settings/webhook/enableDisable";
import { editWebhookArticle } from "./articles/settings/webhook/edit";
import { viewWebhookArticle } from "./articles/settings/webhook/viewDetails";
import { deleteWebhookArticle } from "./articles/settings/webhook/delete";

// ============================================================
// Settings — Events
// ============================================================

import { webhookEventsArticle } from "./articles/settings/events";

// ============================================================
// Settings — Domain Transfer
// ============================================================

import { domainTransferCodeArticle } from "./articles/settings/domainTransferRequest";

// ============================================================
// Domains
// ============================================================

import { domainStatusLifecycleArticle } from "./articles/domains/statusLifecycle";
import { registerDomainArticle } from "./articles/domains/registerDomain";
import { workspaceConflictArticle } from "./articles/domains/workspaceConflict";
import { forwardingArticle } from "./articles/domains/forwarding";
import { recoverExpiredDomainArticle } from "./articles/domains/recoverExpiredDomain";
import { removeDomainArticle } from "./articles/domains/removeDomain";
import { domainListEmptyArticle } from "./articles/domains/domainListEmpty";

// ============================================================
// Billing & Wallet
// ============================================================

import { walletBalanceChargesArticle } from "./articles/billing/walletBalanceCharges";
import { mailboxPricingArticle } from "./articles/billing/mailboxPricing";
import { volumeDiscountsArticle } from "./articles/billing/volumeDiscounts";
import { resetSubscriptionPricingArticle } from "./articles/billing/resetSubscriptionPricing";
import { subscriptionPastDueArticle } from "./articles/billing/subscriptionPastDue";
import { cancelVsPauseArticle } from "./articles/billing/cancelVsPause";

// ============================================================
// DNS
// ============================================================

import { dnsFundamentalsArticle } from "./articles/dns/dnsFundamentals";
import { dnsRecordTypesArticle } from "./articles/dns/dnsRecordTypes";
import { spfDkimDmarcArticle } from "./articles/dns/spfDkimDmarc";
import { dnsRecordsArticle } from "./articles/dns/dnsRecords";
import { recordIdArticle } from "./articles/dns/recordId";
import { nameserversArticle } from "./articles/dns/nameservers";
import { dnsPropagationArticle } from "./articles/dns/dnsPropagation";
import { dnsTroubleshootingArticle } from "./articles/dns/dnsTroubleshooting";

// ============================================================
// Mailboxes & Provisioning
// ============================================================

import { mailboxLifecycleArticle } from "./articles/mailboxes/mailboxLifecycle";
import { provisioningMailboxArticle } from "./articles/mailboxes/provisioningMailbox";
import { addingMailboxesToExistingDomainArticle } from "./articles/mailboxes/addingMailboxesToExistingDomain";
import { getMailboxDetailsArticle } from "./articles/mailboxes/getMailboxDetails";
import { updatingMailboxDetailsArticle } from "./articles/mailboxes/updatingMailboxDetails";
import { webhooksVsPollingArticle } from "./articles/mailboxes/webhooksVsPolling";
import { deletingMailboxArticle } from "./articles/mailboxes/deletingMailbox";

// ============================================================
// Subscriptions & Renewals
// ============================================================

import { subscriptionStatesArticle } from "./articles/subscriptions/subscriptionStates";
import { recoverPastDueArticle } from "./articles/subscriptions/recoverPastDue";
import { autoRenewVsManualRenewArticle } from "./articles/subscriptions/autoRenewVsManualRenew";
import { oneYearPlusPricingArticle } from "./articles/subscriptions/oneYearPlusPricing";

// ============================================================
// Warmup & Deliverability
// ============================================================

import { whatWarmupDoesArticle } from "./articles/warmup/whatWarmupDoes";
import { enablingWarmupArticle } from "./articles/warmup/enablingWarmup";
import { pausingVsDisablingWarmupArticle } from "./articles/warmup/pausingVsDisablingWarmup";
import { warmupProrationArticle } from "./articles/warmup/warmupProration";
import { preWarmupArticle } from "./articles/warmup/preWarmup";
import { placementTestArticle } from "./articles/warmup/placementTest";

// ============================================================
// Users & Partner Administration — Concepts
// ============================================================

import { userVsPartnerOperationsArticle } from "./articles/users/userVsPartnerOperations";
import { geoReferenceArticle } from "./articles/users/geoReference";

// ============================================================
// Exporting Mailboxes to Sending Platforms
// ============================================================

import { platformVsOauthArticle } from "./articles/exports/platformVsOauth";
import { platformCredentialExportArticle } from "./articles/exports/platformCredentialExport";
import { oauthExportsArticle } from "./articles/exports/oauthExports";
import { platformCredentialsArticle } from "./articles/exports/platformCredentials";
import { exportTroubleshootingArticle } from "./articles/exports/exportTroubleshooting";

// ============================================================
// Webhooks & Events
// ============================================================

import { setupWebhookArticle } from "./articles/webhooks/setupWebhook";
import { actionIdArticle } from "./articles/webhooks/actionId";
import { eventReferenceArticle } from "./articles/webhooks/eventReference";
import { asyncRetriesArticle } from "./articles/webhooks/asyncRetries";
import { debuggingEventsArticle } from "./articles/webhooks/debuggingEvents";

// ============================================================
// Article Registry
// ============================================================

export const articles = [
  // ==========================================================
  // Getting Started
  // ==========================================================

  gettingStartedArticle,

  // ==========================================================
  // Partners
  // ==========================================================

  whiteLabelPartnerArticle,
  apiPartnerArticle,

  // ==========================================================
  // Platform — Dashboard
  // ==========================================================

  dashboardOverviewArticle,
  recentActivitiesArticle,
  quickSearchArticle,
  walletBalanceArticle,
  dashboardSupportArticle,

  // ==========================================================
  // Concepts — Users & Partner Administration
  // ==========================================================

  userVsPartnerOperationsArticle,
  geoReferenceArticle,

  // ==========================================================
  // Domains
  // ==========================================================

  domainStatusLifecycleArticle,
  registerDomainArticle,
  workspaceConflictArticle,
  forwardingArticle,
  recoverExpiredDomainArticle,
  removeDomainArticle,
  domainListEmptyArticle,

  // ==========================================================
  // Billing & Wallet
  // ==========================================================

  walletBalanceChargesArticle,
  mailboxPricingArticle,
  volumeDiscountsArticle,
  resetSubscriptionPricingArticle,
  subscriptionPastDueArticle,
  cancelVsPauseArticle,

  // ==========================================================
  // DNS
  // ==========================================================

  dnsFundamentalsArticle,
  dnsRecordTypesArticle,
  spfDkimDmarcArticle,
  dnsRecordsArticle,
  recordIdArticle,
  nameserversArticle,
  dnsPropagationArticle,
  dnsTroubleshootingArticle,

  // ==========================================================
  // Mailboxes & Provisioning
  // ==========================================================

  mailboxLifecycleArticle,
  provisioningMailboxArticle,
  addingMailboxesToExistingDomainArticle,
  getMailboxDetailsArticle,
  updatingMailboxDetailsArticle,
  webhooksVsPollingArticle,
  deletingMailboxArticle,

  // ==========================================================
  // Subscriptions & Renewals
  // ==========================================================

  subscriptionStatesArticle,
  recoverPastDueArticle,
  autoRenewVsManualRenewArticle,
  oneYearPlusPricingArticle,

  // ==========================================================
  // Warmup & Deliverability
  // ==========================================================

  whatWarmupDoesArticle,
  enablingWarmupArticle,
  pausingVsDisablingWarmupArticle,
  warmupProrationArticle,
  preWarmupArticle,
  placementTestArticle,

  // ==========================================================
  // Exporting Mailboxes to Sending Platforms
  // ==========================================================

  platformVsOauthArticle,
  platformCredentialExportArticle,
  oauthExportsArticle,
  platformCredentialsArticle,
  exportTroubleshootingArticle,

  // ==========================================================
  // Webhooks & Events
  // ==========================================================

  setupWebhookArticle,
  actionIdArticle,
  eventReferenceArticle,
  asyncRetriesArticle,
  debuggingEventsArticle,

  // ==========================================================
  // Platform — Wallet
  // ==========================================================

  addBalanceArticle,
  managePaymentsArticle,
  backupCardArticle,
  autoTopUpArticle,

  // updateAutoTopUpArticle,
  // smartRechargeArticle,

  downloadInvoicesArticle,

  // ==========================================================
  // Platform — Users
  // ==========================================================

  usersOverviewArticle,
  addUserArticle,
  searchUsersArticle,
  userDashboardArticle,

  // ==========================================================
  // Platform — Orders
  // ==========================================================

  ordersOverviewArticle,
  searchOrdersArticle,
  filterOrdersArticle,
  orderDetailsArticle,
  missingOrderArticle,

  // ==========================================================
  // Platform — Subscriptions
  // ==========================================================

  manageSubscriptionsArticle,

  // ==========================================================
  // Settings — General
  // ==========================================================

  updatePaymentMethodArticle,
  editBrandDetailsArticle,
  editContactDetailsArticle,

  // ==========================================================
  // Settings — Workspace Members
  // ==========================================================

  inviteMembersArticle,
  editMemberRoleArticle,
  removeMemberArticle,
  rolePermissionsArticle,

  // ==========================================================
  // Settings — Integrations
  // ==========================================================

  cmrApiKeyArticle,

  // ==========================================================
  // Settings — MCP
  // ==========================================================

  mcpArticle,

  // ==========================================================
  // Settings — Webhook
  // ==========================================================

  addWebhookArticle,
  toggleWebhookArticle,
  editWebhookArticle,
  viewWebhookArticle,
  deleteWebhookArticle,

  // ==========================================================
  // Settings — Events
  // ==========================================================

  webhookEventsArticle,

  // ==========================================================
  // Settings — Domain Transfer
  // ==========================================================

  domainTransferCodeArticle,

  // ==========================================================
  // FAQs
  // ==========================================================

  whatIsCmrArticle,
  apiVsWhitelabelArticle,
  apiVsWhitelabelChoiceArticle,
];

// ============================================================
// Article Helpers
// ============================================================

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug);
}

export function getArticleById(id) {
  return articles.find((article) => article.id === id);
}

// import { gettingStartedArticle } from "./articles/gettingStarted";
// import { dashboardArticle } from "./articles/dashboard";

// import { whiteLabelPartnerArticle } from "./articles/partners/whiteLabelPartner";
// import { apiPartnerArticle } from "./articles/partners/apiPartner";

// // FAQ Articles
// import { whatIsCmrArticle } from "./articles/faqs/whatIsCmr";
// import { apiVsWhitelabelArticle } from "./articles/faqs/apiVsWhitelabel";
// import { apiVsWhitelabelChoiceArticle } from "./articles/faqs/apiVsWhitelabelChoice";

// // Wallet
// import { addBalanceArticle } from "./articles/wallet/addBalance";
// import { managePaymentsArticle } from "./articles/wallet/managePayments";
// import { backupCardArticle } from "./articles/wallet/backupCard";
// import { autoTopUpArticle } from "./articles/wallet/autoTopUp";
// // import { updateAutoTopUpArticle } from "./articles/wallet/updateAutoTopUp";
// // import { smartRechargeArticle } from "./articles/wallet/smartRecharge";
// import { downloadInvoicesArticle } from "./articles/wallet/downloadInvoices";

// // Users
// import { manageUsersArticle } from "./articles/users/manageUsers";
// import { userDashboardArticle } from "./articles/users/userDashboard";

// // Orders
// import { manageOrdersArticle } from "./articles/orders/manageOrders";

// // Subscriptions
// import { manageSubscriptionsArticle } from "./articles/subscriptions/manageSubscriptions";

// // Settings — General
// import { updatePaymentMethodArticle } from "./articles/settings/updatePaymentMethod";
// import { editBrandDetailsArticle } from "./articles/settings/editBrandDetails";
// import { editContactDetailsArticle } from "./articles/settings/editContactDetails";

// // Settings — Workspace Members
// import { inviteMembersArticle } from "./articles/settings/inviteMembers";
// import { editMemberRoleArticle } from "./articles/settings/editMemberRole";
// import { removeMemberArticle } from "./articles/settings/removeMember";
// import { rolePermissionsArticle } from "./articles/settings/rolePermissions";

// // Settings — Integrations
// import { cmrApiKeyArticle } from "./articles/settings/cmrApiKey";

// // Settings — MCP
// import { claudeDesktopArticle } from "./articles/settings/mcp/claudeDesktop";
// import { cursorArticle } from "./articles/settings/mcp/cursor";
// import { claudeCodeArticle } from "./articles/settings/mcp/claudeCode";
// import { vscodeArticle } from "./articles/settings/mcp/vscode";
// import { windsurfArticle } from "./articles/settings/mcp/windsurf";
// import { codexCliArticle } from "./articles/settings/mcp/codexCli";

// // Settings — Webhook
// import { addWebhookArticle } from "./articles/settings/webhook/addDestination";
// import { toggleWebhookArticle } from "./articles/settings/webhook/enableDisable";
// import { editWebhookArticle } from "./articles/settings/webhook/edit";
// import { viewWebhookArticle } from "./articles/settings/webhook/viewDetails";
// import { deleteWebhookArticle } from "./articles/settings/webhook/delete";

// // Settings — Events
// import { webhookEventsArticle } from "./articles/settings/events";

// // Settings — Domain Transfer
// import { domainTransferCodeArticle } from "./articles/settings/domainTransferRequest";

// export const articles = [
//   // Getting Started
//   gettingStartedArticle,

//   // Partners
//   whiteLabelPartnerArticle,
//   apiPartnerArticle,

//   // Platform
//   dashboardArticle,

//   // Wallet
//   addBalanceArticle,
//   managePaymentsArticle,
//   backupCardArticle,
//   autoTopUpArticle,
//   // updateAutoTopUpArticle,
//   // smartRechargeArticle,
//   downloadInvoicesArticle,

//   // Users
//   manageUsersArticle,
//   userDashboardArticle,

//   // Orders
//   manageOrdersArticle,

//   // Subscriptions
//   manageSubscriptionsArticle,

//   // Settings — General
//   updatePaymentMethodArticle,
//   editBrandDetailsArticle,
//   editContactDetailsArticle,

//   // Settings — Workspace Members
//   inviteMembersArticle,
//   editMemberRoleArticle,
//   removeMemberArticle,
//   rolePermissionsArticle,

//   // Settings — Integrations
//   cmrApiKeyArticle,

//   // Settings — MCP
//   claudeDesktopArticle,
//   cursorArticle,
//   claudeCodeArticle,
//   vscodeArticle,
//   windsurfArticle,
//   codexCliArticle,

//   // Settings — Webhook
//   addWebhookArticle,
//   toggleWebhookArticle,
//   editWebhookArticle,
//   viewWebhookArticle,
//   deleteWebhookArticle,

//   // Settings — Events
//   webhookEventsArticle,

//   // Settings — Domain Transfer
//   domainTransferCodeArticle,

//   // FAQs
//   whatIsCmrArticle,
//   apiVsWhitelabelArticle,
//   apiVsWhitelabelChoiceArticle,
// ];

// export function getArticleBySlug(slug) {
//   return articles.find(
//     (article) => article.slug === slug
//   );
// }

// export function getArticleById(id) {
//   return articles.find(
//     (article) => article.id === id
//   );
// }


// import { gettingStartedArticle } from "./articles/gettingStarted";
// import { dashboardArticle } from "./articles/dashboard";
// import { whiteLabelPartnerArticle } from "./articles/partners/whiteLabelPartner";
// import { apiPartnerArticle } from "./articles/partners/apiPartner";
// // Wallet
// import { addBalanceArticle } from "./articles/wallet/addBalance";
// import { managePaymentsArticle } from "./articles/wallet/managePayments";
// import { backupCardArticle } from "./articles/wallet/backupCard";
// import { autoTopUpArticle } from "./articles/wallet/autoTopUp";
// // import { updateAutoTopUpArticle } from "./articles/wallet/updateAutoTopUp";
// // import { smartRechargeArticle } from "./articles/wallet/smartRecharge";
// import { downloadInvoicesArticle } from "./articles/wallet/downloadInvoices";

// // Users
// import { manageUsersArticle } from "./articles/users/manageUsers";
// import { userDashboardArticle } from "./articles/users/userDashboard";

// // Orders
// import { manageOrdersArticle } from "./articles/orders/manageOrders";

// // Subscriptions
// import { manageSubscriptionsArticle } from "./articles/subscriptions/manageSubscriptions";

// // Settings — General
// import { updatePaymentMethodArticle } from "./articles/settings/updatePaymentMethod";
// import { editBrandDetailsArticle } from "./articles/settings/editBrandDetails";
// import { editContactDetailsArticle } from "./articles/settings/editContactDetails";

// // Settings — Workspace Members
// import { inviteMembersArticle } from "./articles/settings/inviteMembers";
// import { editMemberRoleArticle } from "./articles/settings/editMemberRole";
// import { removeMemberArticle } from "./articles/settings/removeMember";
// import { rolePermissionsArticle } from "./articles/settings/rolePermissions";

// // Settings — Integrations
// import { cmrApiKeyArticle } from "./articles/settings/cmrApiKey";

// // Settings — MCP
// import { claudeDesktopArticle } from "./articles/settings/mcp/claudeDesktop";
// import { cursorArticle } from "./articles/settings/mcp/cursor";
// import { claudeCodeArticle } from "./articles/settings/mcp/claudeCode";
// import { vscodeArticle } from "./articles/settings/mcp/vscode";
// import { windsurfArticle } from "./articles/settings/mcp/windsurf";
// import { codexCliArticle } from "./articles/settings/mcp/codexCli";

// // Settings — Webhook
// import { addWebhookArticle } from "./articles/settings/webhook/addDestination";
// import { toggleWebhookArticle } from "./articles/settings/webhook/enableDisable";
// import { editWebhookArticle } from "./articles/settings/webhook/edit";
// import { viewWebhookArticle } from "./articles/settings/webhook/viewDetails";
// import { deleteWebhookArticle } from "./articles/settings/webhook/delete";

// // Settings — Events
// import { webhookEventsArticle } from "./articles/settings/events";

// // Settings — Domain Transfer
// import { domainTransferCodeArticle } from "./articles/settings/domainTransferRequest";

// export const articles = [
//   gettingStartedArticle,
//   whiteLabelPartnerArticle,
//    apiPartnerArticle,
//   dashboardArticle,

//   // Wallet
//   addBalanceArticle,
//   managePaymentsArticle,
//   backupCardArticle,
//   autoTopUpArticle,
// //   updateAutoTopUpArticle,
// //   smartRechargeArticle,
//   downloadInvoicesArticle,

//   // Users
//   manageUsersArticle,
//   userDashboardArticle,

//   // Orders
//   manageOrdersArticle,

//   // Subscriptions
//   manageSubscriptionsArticle,

//   // Settings — General
//   updatePaymentMethodArticle,
//   editBrandDetailsArticle,
//   editContactDetailsArticle,

//   // Settings — Workspace Members
//   inviteMembersArticle,
//   editMemberRoleArticle,
//   removeMemberArticle,
//   rolePermissionsArticle,

//   // Settings — Integrations
//   cmrApiKeyArticle,

//   // Settings — MCP
//   claudeDesktopArticle,
//   cursorArticle,
//   claudeCodeArticle,
//   vscodeArticle,
//   windsurfArticle,
//   codexCliArticle,

//   // Settings — Webhook
//   addWebhookArticle,
//   toggleWebhookArticle,
//   editWebhookArticle,
//   viewWebhookArticle,
//   deleteWebhookArticle,

//   // Settings — Events
//   webhookEventsArticle,

//   // Settings — Domain Transfer
//   domainTransferCodeArticle,
// ];

// export function getArticleBySlug(slug) {
//   return articles.find(
//     (article) => article.slug === slug
//   );
// }

// export function getArticleById(id) {
//   return articles.find(
//     (article) => article.id === id
//   );
// }