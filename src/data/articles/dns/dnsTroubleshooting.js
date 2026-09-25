export const dnsTroubleshootingArticle = {
  id: "dns-troubleshooting",

  slug: "/concepts/dns/dns-troubleshooting",

  category: {
    id: "dns",
    label: "DNS",
    slug: "/concepts/dns",
  },

  title: "DNS Troubleshooting: When a Record Isn't Working",

  description:
    "Troubleshoot DNS records that are missing, incorrect, not visible externally, or causing domain and email configuration issues in CMR.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "DNS problems can come from several different places: an incorrect record, the wrong user or domain, a missing recordId, an incorrect nameserver configuration, or DNS propagation that has not completed yet. This guide provides a structured way to diagnose DNS issues in CMR, starting with the configuration returned by CMR and then checking external DNS visibility when necessary.",

  sections: [
    {
      id: "start-with-basics",
      title: "Start with the basics",

      description:
        "Before troubleshooting a DNS problem, confirm that you are working with the correct domain and user.",

      content: [
        {
          type: "paragraph",
          content:
            "DNS troubleshooting becomes much easier when you first confirm the scope of the operation. CMR's DNS APIs are scoped to a domain and the user who owns that domain.",
        },

        {
          type: "steps",
          items: [
            {
              id: "check-domain",
              title: "Confirm the domain",
              description:
                "Make sure the DNS operation is being performed against the intended domain.",
            },
            {
              id: "check-user",
              title: "Confirm the userId",
              description:
                "Make sure the specified user owns the domain being managed.",
            },
            {
              id: "check-auth",
              title: "Confirm API authentication",
              description:
                "Make sure the request includes the required API authentication credentials.",
            },
            {
              id: "check-endpoint",
              title: "Confirm the DNS endpoint",
              description:
                "Make sure the request is being sent to the correct /dns route and operation.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Check scope before changing the record",
          content:
            "A request can fail even when the DNS record itself is correct if the userId does not correspond to the user who owns the domain.",
        },
      ],
    },

    {
      id: "record-not-found",
      title: "The DNS record is not showing up",

      description:
        "If an expected DNS record is missing from the CMR response, first verify the domain and the record's status.",

      content: [
        {
          type: "paragraph",
          content:
            "If you cannot find an expected record, retrieve the domain's DNS configuration using the GET DNS operation.",
        },

        {
          type: "code",
          language: "http",
          content:
            "GET /dns?userId=<USER_ID>&domain=example.com",
        },

        {
          type: "heading",
          content: "Check both record collections",
        },

        {
          type: "steps",
          items: [
            {
              id: "record-active",
              title: "Check data.records",
              description:
                "Look for the expected record in the active records collection.",
            },
            {
              id: "record-disabled",
              title: "Check data.disabledRecords",
              description:
                "If the expected record is not active, check whether it appears in the disabled records collection.",
            },
            {
              id: "record-fields",
              title: "Check the record fields",
              description:
                "Compare the host, value, and recordType with the configuration you expected to find.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "A missing active record is not always a completely missing record",
          content:
            "CMR can return active and disabled records separately. Check both collections when investigating an unexpected DNS configuration.",
        },
      ],
    },

    {
      id: "wrong-record",
      title: "The record exists, but the value is wrong",

      description:
        "A DNS record can exist while still containing an incorrect host, value, or record type.",

      content: [
        {
          type: "paragraph",
          content:
            "If the expected record exists but does not contain the required configuration, compare the complete record rather than checking only its value.",
        },

        {
          type: "steps",
          items: [
            {
              id: "wrong-host",
              title: "Check the host",
              description:
                "Make sure the record is published at the intended hostname. For example, a DMARC record should use _dmarc.",
            },
            {
              id: "wrong-type",
              title: "Check the recordType",
              description:
                "Confirm that the record type matches the intended configuration, such as A, CNAME, MX, or TXT.",
            },
            {
              id: "wrong-value",
              title: "Check the value",
              description:
                "Confirm that the value matches the configuration supplied by the service or provider using the domain.",
            },
            {
              id: "wrong-priority",
              title: "Check priority where applicable",
              description:
                "For records such as MX, confirm that the priority value is also correct.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not fix a DNS record by changing only the value blindly",
          content:
            "A record's host, record type, value, and applicable priority all contribute to its meaning. Verify the complete intended configuration before updating it.",
        },
      ],
    },

    {
      id: "update-failing",
      title: "The DNS update is failing",

      description:
        "Update failures are often caused by an incorrect recordId, domain scope, or request configuration.",

      content: [
        {
          type: "paragraph",
          content:
            "When an update request fails, retrieve the current DNS records before retrying. This gives you the current recordId and configuration required to identify the intended record.",
        },

        {
          type: "steps",
          items: [
            {
              id: "update-get",
              title: "Retrieve the current records",
              description:
                "Use GET /dns for the domain and user.",
            },
            {
              id: "update-record-id",
              title: "Confirm the recordId",
              description:
                "Make sure the recordId belongs to the exact record you want to update.",
            },
            {
              id: "update-domain",
              title: "Confirm the domain",
              description:
                "Make sure the update is being made against the intended domain.",
            },
            {
              id: "update-fields",
              title: "Check the updated fields",
              description:
                "Confirm that the submitted host, value, recordType, and applicable fields are correct.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not guess recordId",
          content:
            "Retrieve the record through GET /dns and use the recordId returned by CMR. Do not construct or reuse an identifier from another record or domain.",
        },
      ],
    },

    {
      id: "delete-failing",
      title: "The DNS deletion is failing",

      description:
        "Deletion requires the correct existing recordId and the correct domain and user scope.",

      content: [
        {
          type: "paragraph",
          content:
            "If a delete operation fails, retrieve the domain's current DNS records and confirm that the intended record exists and that you have the correct recordId.",
        },

        {
          type: "steps",
          items: [
            {
              id: "delete-records",
              title: "Get the current DNS records",
              description:
                "Retrieve the current records for the domain.",
            },
            {
              id: "delete-id",
              title: "Confirm the recordId",
              description:
                "Match the recordId with the exact record you intend to delete.",
            },
            {
              id: "delete-scope",
              title: "Confirm user and domain",
              description:
                "Make sure the userId and domain match the resource you are trying to modify.",
            },
            {
              id: "delete-impact",
              title: "Confirm the record can be removed",
              description:
                "Before deleting the record, make sure the service using it no longer requires it.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "A successful deletion can still have service impact",
          content:
            "Deleting a DNS record may affect websites, email, verification, authentication, or other services. Confirm the purpose of the record before removing it.",
        },
      ],
    },

    {
      id: "external-not-visible",
      title: "The record is correct in CMR but not visible externally",

      description:
        "This situation is often related to DNS caching and propagation rather than the CMR configuration itself.",

      content: [
        {
          type: "paragraph",
          content:
            "If GET /dns shows the expected record but an external DNS lookup still returns an older value, the external resolver may still have the previous response cached.",
        },

        {
          type: "heading",
          content: "What to check",
        },

        {
          type: "steps",
          items: [
            {
              id: "external-correct-host",
              title: "Check the correct hostname",
              description:
                "Make sure the external lookup is querying the hostname where the record was actually published.",
            },
            {
              id: "external-correct-type",
              title: "Check the correct record type",
              description:
                "Make sure the lookup is querying the same DNS record type that was changed.",
            },
            {
              id: "external-cmr",
              title: "Confirm the CMR configuration",
              description:
                "Retrieve the DNS records from CMR and confirm that the intended value is present.",
            },
            {
              id: "external-resolver",
              title: "Compare another resolver",
              description:
                "If necessary, compare the result through another DNS resolver to determine whether different cached responses are being returned.",
            },
            {
              id: "external-wait",
              title: "Allow time for propagation",
              description:
                "If CMR contains the correct configuration, allow time for cached DNS information to expire and refresh.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Different resolvers can temporarily disagree",
          content:
            "One resolver may return the new value while another still returns the previous value. This can happen while DNS caches are being refreshed.",
        },
      ],
    },

    {
      id: "nameserver-problem",
      title: "The domain is using the wrong nameservers",

      description:
        "An incorrect nameserver configuration can cause the domain to use the wrong DNS infrastructure.",

      content: [
        {
          type: "paragraph",
          content:
            "Nameservers identify the DNS infrastructure responsible for authoritative DNS information for a domain. If the domain is using unexpected nameservers, DNS records configured somewhere else may not be the records being served to the internet.",
        },

        {
          type: "heading",
          content: "Before changing nameservers",
        },

        {
          type: "steps",
          items: [
            {
              id: "ns-confirm",
              title: "Confirm the intended nameservers",
              description:
                "Make sure you know the complete nameserver configuration that should be authoritative for the domain.",
            },
            {
              id: "ns-check",
              title: "Check the current nameservers",
              description:
                "Verify which nameservers are currently associated with the domain.",
            },
            {
              id: "ns-records",
              title: "Confirm the DNS records exist on the intended DNS infrastructure",
              description:
                "Make sure the required DNS records are available through the nameservers you intend to use.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Nameserver changes are broader than record changes",
          content:
            "Changing nameservers can change which DNS infrastructure is authoritative for the domain. Verify the complete nameserver list before submitting an update.",
        },
      ],
    },

    {
      id: "nameserver-propagation",
      title: "The nameserver change has not propagated",

      description:
        "Nameserver changes can take longer to become consistently visible through DNS resolvers.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR documents that nameserver updates can take up to 48 hours to propagate. During this period, different DNS resolvers may temporarily return different nameserver information.",
        },

        {
          type: "steps",
          items: [
            {
              id: "ns-propagation-request",
              title: "Confirm the update request",
              description:
                "Make sure the nameserver update was submitted successfully.",
            },
            {
              id: "ns-propagation-list",
              title: "Confirm the intended nameserver list",
              description:
                "Verify that the complete intended nameserver configuration was supplied.",
            },
            {
              id: "ns-propagation-external",
              title: "Check the domain externally",
              description:
                "Use external DNS lookups to see which nameservers are currently being returned.",
            },
            {
              id: "ns-propagation-wait",
              title: "Allow time for propagation",
              description:
                "If the expected nameservers are not yet visible everywhere, allow time for DNS delegation information to refresh.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Up to 48 hours",
          content:
            "The documented CMR window for nameserver propagation is up to 48 hours. This is an expected propagation window, not a guarantee that every resolver will update at exactly the same time.",
        },
      ],
    },

    {
      id: "email-dns-problems",
      title: "Email is not working after a DNS change",

      description:
        "Email issues can result from incorrect MX, SPF, DKIM, or DMARC configuration.",

      content: [
        {
          type: "paragraph",
          content:
            "If email behavior changes after a DNS update, first identify which part of email infrastructure is affected. Receiving email and email authentication use different DNS records.",
        },

        {
          type: "steps",
          items: [
            {
              id: "email-mx",
              title: "Check MX records",
              description:
                "If inbound email is affected, verify that the domain's MX configuration points to the intended mail servers.",
            },
            {
              id: "email-spf",
              title: "Check SPF",
              description:
                "If sending authentication is affected, verify that the SPF TXT record contains the configuration required by the sending infrastructure.",
            },
            {
              id: "email-dkim",
              title: "Check DKIM",
              description:
                "Verify that the DKIM selector hostname and public key match the values supplied by the email infrastructure.",
            },
            {
              id: "email-dmarc",
              title: "Check DMARC",
              description:
                "Verify that the DMARC TXT record exists at _dmarc and contains the intended policy.",
            },
            {
              id: "email-propagation",
              title: "Check propagation",
              description:
                "If the records were recently changed, verify whether external DNS resolvers have received the new configuration.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not change all email records at once while troubleshooting",
          content:
            "Identify the specific failing part of the email configuration first. Changing multiple unrelated DNS records simultaneously can make it harder to determine which change caused the issue.",
        },
      ],
    },

    {
      id: "record-specific-checks",
      title: "Troubleshooting by record type",

      description:
        "The correct troubleshooting approach depends on the type of DNS record that is not working.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "troubleshoot-a",
              title: "A or AAAA",
              description:
                "Check that the hostname and IP address are correct and that the external DNS lookup returns the expected address.",
            },
            {
              id: "troubleshoot-cname",
              title: "CNAME",
              description:
                "Check that the value is the intended hostname and that the alias is published at the correct host.",
            },
            {
              id: "troubleshoot-mx",
              title: "MX",
              description:
                "Check the mail server hostname and priority values and confirm that the intended mail infrastructure is being returned externally.",
            },
            {
              id: "troubleshoot-txt",
              title: "TXT",
              description:
                "Check the exact host and text value. This is particularly important for SPF, DKIM, DMARC, and verification records.",
            },
            {
              id: "troubleshoot-ns",
              title: "NS",
              description:
                "Check the nameserver configuration and determine whether the domain is delegated to the intended DNS infrastructure.",
            },
          ],
        },
      ],
    },

    {
      id: "api-errors",
      title: "Common CMR DNS request problems",

      description:
        "Some DNS problems occur before the DNS record itself is even evaluated.",

      content: [
        {
          type: "heading",
          content: "Incorrect userId",
        },

        {
          type: "paragraph",
          content:
            "CMR DNS operations are scoped to the specified user. If the userId does not correspond to the domain owner, the request can be rejected or the domain may not be found.",
        },

        {
          type: "heading",
          content: "Missing recordId",
        },

        {
          type: "paragraph",
          content:
            "Updates and deletions of existing records require the correct recordId. Retrieve the domain's records first instead of trying to construct the identifier.",
        },

        {
          type: "heading",
          content: "Wrong recordId",
        },

        {
          type: "paragraph",
          content:
            "A recordId identifies a specific DNS record. Using an identifier from another record or another domain can cause the operation to fail or target an unintended resource.",
        },

        {
          type: "heading",
          content: "Incorrect DNS fields",
        },

        {
          type: "paragraph",
          content:
            "Even when a request is accepted, incorrect host, recordType, value, or applicable priority can result in an incorrect DNS configuration.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Separate API problems from DNS problems",
          content:
            "First determine whether the CMR request itself succeeded. If the configuration is correct in CMR but external DNS results are different, investigate DNS propagation and authoritative configuration separately.",
        },
      ],
    },

    {
      id: "systematic-workflow",
      title: "A systematic DNS troubleshooting workflow",

      description:
        "Use the following process instead of changing multiple DNS records at random.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "system-domain",
              title: "1. Confirm the domain",
              description:
                "Make sure the issue is being investigated on the intended domain.",
            },
            {
              id: "system-user",
              title: "2. Confirm the userId",
              description:
                "Make sure the user associated with the DNS request owns the domain.",
            },
            {
              id: "system-get",
              title: "3. Retrieve the DNS configuration",
              description:
                "Use GET /dns to inspect the current records.",
            },
            {
              id: "system-identify",
              title: "4. Identify the relevant record",
              description:
                "Check the host, value, recordType, priority where applicable, and recordId.",
            },
            {
              id: "system-correct",
              title: "5. Compare against the intended configuration",
              description:
                "Use the service provider's documented DNS requirements as the reference for the expected values.",
            },
            {
              id: "system-update",
              title: "6. Make the required change",
              description:
                "Add, update, or delete the record only after identifying the exact configuration that needs to change.",
            },
            {
              id: "system-verify-cmr",
              title: "7. Verify through CMR",
              description:
                "Retrieve the records again and confirm that the intended configuration is present.",
            },
            {
              id: "system-external",
              title: "8. Verify externally",
              description:
                "Check the relevant DNS record through an external resolver when you need to confirm public DNS visibility.",
            },
            {
              id: "system-wait",
              title: "9. Allow for propagation",
              description:
                "If the CMR configuration is correct but external results are still old, allow time for cached DNS information to refresh.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Troubleshoot in layers",
          content:
            "Start with the CMR request and DNS configuration, then move to external DNS visibility, and finally investigate the service that consumes the DNS record. This helps separate configuration problems from propagation problems.",
        },
      ],
    },

    {
      id: "important-things",
      title: "Important things to remember",

      description:
        "Keep these rules in mind when troubleshooting DNS in CMR.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "important-user",
              title: "Check the userId",
              description:
                "The domain must belong to the user specified in the DNS request.",
            },
            {
              id: "important-record-id",
              title: "Use the correct recordId",
              description:
                "Retrieve the record before updating or deleting it and use the recordId returned by CMR.",
            },
            {
              id: "important-fields",
              title: "Check the complete record",
              description:
                "Verify the host, recordType, value, and priority where applicable.",
            },
            {
              id: "important-disabled",
              title: "Check disabled records",
              description:
                "If a record is not appearing among active records, review the disabled records returned by CMR.",
            },
            {
              id: "important-propagation",
              title: "Separate configuration from propagation",
              description:
                "A correct CMR configuration can temporarily differ from what an external DNS resolver returns.",
            },
            {
              id: "important-nameservers",
              title: "Check nameservers",
              description:
                "If the expected DNS records are not being served, confirm that the domain is using the intended authoritative nameservers.",
            },
            {
              id: "important-email",
              title: "Check the record relevant to the service",
              description:
                "For email, distinguish between MX, SPF, DKIM, and DMARC rather than treating them as one DNS configuration.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "What to read next",

      description:
        "Continue with the DNS guides that explain the underlying concepts and management workflows.",

      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "dns-fundamentals",
              title:
                "DNS Fundamentals: Records, Hosts, Nameservers & Zones",
              description:
                "Understand the core DNS concepts and how the different DNS components fit together.",
              href: "/concepts/dns/dns-fundamentals",
            },
            {
              id: "dns-record-types",
              title:
                "DNS Record Types Explained: A, AAAA, CNAME, MX, TXT & NS",
              description:
                "Understand what the most common DNS record types do and when they are used.",
              href: "/concepts/dns/dns-record-types",
            },
            {
              id: "dns-records",
              title: "Adding, Updating & Deleting DNS Records",
              description:
                "Learn how to retrieve and manage DNS records through CMR.",
              href: "/concepts/dns/dns-records",
            },
            {
              id: "record-id",
              title:
                "Understanding recordId: Finding the Record You Need to Update or Delete",
              description:
                "Learn how to identify the correct record before updating or deleting it.",
              href: "/concepts/dns/record-id",
            },
            {
              id: "nameservers",
              title: "Updating Nameservers Safely",
              description:
                "Understand nameserver updates and what to verify before and after changing them.",
              href: "/concepts/dns/nameservers",
            },
            {
              id: "spf-dkim-dmarc",
              title:
                "SPF, DKIM & DMARC — What They Do and Who Manages Them",
              description:
                "Understand email authentication records and how they relate to DNS management.",
              href: "/concepts/dns/spf-dkim-dmarc",
            },
            {
              id: "dns-propagation",
              title:
                "DNS Propagation: What Changes, Why It Takes Time & How to Verify",
              description:
                "Understand DNS caching and how to verify that DNS changes have propagated.",
              href: "/concepts/dns/dns-propagation",
            },
          ],
        },
      ],
    },
  ],
};