import { gettingStartedArticle } from "./articles/gettingStarted";
import { dashboardArticle } from "./articles/dashboard";

import { whiteLabelPartnerArticle } from "./articles/partners/whiteLabelPartner";
import { apiPartnerArticle } from "./articles/partners/apiPartner";

// FAQ Articles
import { whatIsCmrArticle } from "./articles/faqs/whatIsCmr";
import { apiVsWhitelabelArticle } from "./articles/faqs/apiVsWhitelabel";
import { apiVsWhitelabelChoiceArticle } from "./articles/faqs/apiVsWhitelabelChoice";

// Wallet
import { addBalanceArticle } from "./articles/wallet/addBalance";
import { managePaymentsArticle } from "./articles/wallet/managePayments";
import { backupCardArticle } from "./articles/wallet/backupCard";
import { autoTopUpArticle } from "./articles/wallet/autoTopUp";
// import { updateAutoTopUpArticle } from "./articles/wallet/updateAutoTopUp";
// import { smartRechargeArticle } from "./articles/wallet/smartRecharge";
import { downloadInvoicesArticle } from "./articles/wallet/downloadInvoices";

// Users
import { manageUsersArticle } from "./articles/users/manageUsers";
import { userDashboardArticle } from "./articles/users/userDashboard";

// Orders
import { manageOrdersArticle } from "./articles/orders/manageOrders";

// Subscriptions
import { manageSubscriptionsArticle } from "./articles/subscriptions/manageSubscriptions";

// Settings — General
import { updatePaymentMethodArticle } from "./articles/settings/updatePaymentMethod";
import { editBrandDetailsArticle } from "./articles/settings/editBrandDetails";
import { editContactDetailsArticle } from "./articles/settings/editContactDetails";

// Settings — Workspace Members
import { inviteMembersArticle } from "./articles/settings/inviteMembers";
import { editMemberRoleArticle } from "./articles/settings/editMemberRole";
import { removeMemberArticle } from "./articles/settings/removeMember";
import { rolePermissionsArticle } from "./articles/settings/rolePermissions";

// Settings — Integrations
import { cmrApiKeyArticle } from "./articles/settings/cmrApiKey";

// Settings — MCP
import { claudeDesktopArticle } from "./articles/settings/mcp/claudeDesktop";
import { cursorArticle } from "./articles/settings/mcp/cursor";
import { claudeCodeArticle } from "./articles/settings/mcp/claudeCode";
import { vscodeArticle } from "./articles/settings/mcp/vscode";
import { windsurfArticle } from "./articles/settings/mcp/windsurf";
import { codexCliArticle } from "./articles/settings/mcp/codexCli";

// Settings — Webhook
import { addWebhookArticle } from "./articles/settings/webhook/addDestination";
import { toggleWebhookArticle } from "./articles/settings/webhook/enableDisable";
import { editWebhookArticle } from "./articles/settings/webhook/edit";
import { viewWebhookArticle } from "./articles/settings/webhook/viewDetails";
import { deleteWebhookArticle } from "./articles/settings/webhook/delete";

// Settings — Events
import { webhookEventsArticle } from "./articles/settings/events";

// Settings — Domain Transfer
import { domainTransferCodeArticle } from "./articles/settings/domainTransferRequest";

export const articles = [
  // Getting Started
  gettingStartedArticle,

  // Partners
  whiteLabelPartnerArticle,
  apiPartnerArticle,

  // Platform
  dashboardArticle,

  // Wallet
  addBalanceArticle,
  managePaymentsArticle,
  backupCardArticle,
  autoTopUpArticle,
  // updateAutoTopUpArticle,
  // smartRechargeArticle,
  downloadInvoicesArticle,

  // Users
  manageUsersArticle,
  userDashboardArticle,

  // Orders
  manageOrdersArticle,

  // Subscriptions
  manageSubscriptionsArticle,

  // Settings — General
  updatePaymentMethodArticle,
  editBrandDetailsArticle,
  editContactDetailsArticle,

  // Settings — Workspace Members
  inviteMembersArticle,
  editMemberRoleArticle,
  removeMemberArticle,
  rolePermissionsArticle,

  // Settings — Integrations
  cmrApiKeyArticle,

  // Settings — MCP
  claudeDesktopArticle,
  cursorArticle,
  claudeCodeArticle,
  vscodeArticle,
  windsurfArticle,
  codexCliArticle,

  // Settings — Webhook
  addWebhookArticle,
  toggleWebhookArticle,
  editWebhookArticle,
  viewWebhookArticle,
  deleteWebhookArticle,

  // Settings — Events
  webhookEventsArticle,

  // Settings — Domain Transfer
  domainTransferCodeArticle,

  // FAQs
  whatIsCmrArticle,
  apiVsWhitelabelArticle,
  apiVsWhitelabelChoiceArticle,
];

export function getArticleBySlug(slug) {
  return articles.find(
    (article) => article.slug === slug
  );
}

export function getArticleById(id) {
  return articles.find(
    (article) => article.id === id
  );
}


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