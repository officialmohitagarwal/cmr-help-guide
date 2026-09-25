export const nameserversArticle = {
  id: "nameservers",

  slug: "/concepts/dns/nameservers",

  category: {
    id: "dns",
    label: "DNS",
    slug: "/concepts/dns",
  },

  title: "Updating Nameservers Safely",

  description:
    "Understand what nameservers control, how CMR's nameserver update flow works, what happens when the nameserver list changes, and how to verify the change.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "Nameservers tell the DNS system which servers are authoritative for a domain's DNS configuration. Changing nameservers is therefore a broader operation than changing an individual DNS record. This guide explains how nameserver updates work in CMR, what the update replaces, the conditions that apply to the operation, and how to verify the change safely.",

  sections: [
    {
      id: "what-are-nameservers",
      title: "What nameservers do",

      description:
        "Nameservers identify the DNS infrastructure responsible for answering authoritative DNS queries for a domain.",

      content: [
        {
          type: "paragraph",
          content:
            "A domain's nameservers determine where its authoritative DNS configuration is managed. When a DNS resolver needs information about a domain, the authoritative nameservers are ultimately responsible for providing the domain's DNS records.",
        },

        {
          type: "paragraph",
          content:
            "This makes nameservers different from individual records such as A, MX, TXT, or CNAME records. Updating an individual record changes one piece of DNS configuration, while changing nameservers can change the DNS infrastructure from which the domain's DNS configuration is served.",
        },

        {
          type: "heading",
          content: "Nameservers vs DNS records",
        },

        {
          type: "steps",
          items: [
            {
              id: "nameserver-role",
              title: "Nameservers",
              description:
                "Determine which DNS infrastructure is authoritative for the domain.",
            },
            {
              id: "record-role",
              title: "DNS records",
              description:
                "Define specific DNS behavior within that authoritative DNS infrastructure, such as website addresses, mail servers, and verification records.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Nameserver changes are broader than record changes",
          content:
            "Changing an A, MX, TXT, or CNAME record modifies a specific DNS record. Changing nameservers can change where the domain's DNS configuration is authoritative.",
        },
      ],
    },

    {
      id: "cmr-nameserver-management",
      title: "Nameserver management in CMR",

      description:
        "CMR provides a dedicated DNS endpoint for updating a domain's nameservers.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR's DNS management API includes a dedicated nameserver update operation. The DNS API manages DNS records and nameservers for domains registered under the Partner account.",
        },

        {
          type: "heading",
          content: "Endpoint",
        },

        {
          type: "code",
          language: "http",
          content:
            "PUT /dns/nameservers",
        },

        {
          type: "heading",
          content: "Authentication and scope",
        },

        {
          type: "steps",
          items: [
            {
              id: "ns-api-key",
              title: "API authentication",
              description:
                "Use the required CMR API authentication credentials.",
            },
            {
              id: "ns-user-id",
              title: "userId",
              description:
                "The DNS API uses the userId query parameter to identify the user associated with the domain.",
            },
            {
              id: "ns-domain",
              title: "Domain ownership",
              description:
                "The domain must be owned by the specified user.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Check ownership before updating",
          content:
            "Make sure the specified userId corresponds to the user who owns the domain before submitting a nameserver update.",
        },
      ],
    },

    {
      id: "how-update-works",
      title: "How a nameserver update works",

      description:
        "CMR replaces the existing nameserver list with the list supplied in the update request.",

      content: [
        {
          type: "paragraph",
          content:
            "A nameserver update is not an incremental change to one item in the existing list. The supplied nameserver list replaces the current list for the domain.",
        },

        {
          type: "steps",
          items: [
            {
              id: "update-current",
              title: "Identify the current configuration",
              description:
                "Check the domain's current nameserver configuration before making a change.",
            },
            {
              id: "update-intended",
              title: "Prepare the complete new list",
              description:
                "Prepare the full set of nameservers that should be authoritative for the domain.",
            },
            {
              id: "update-submit",
              title: "Submit the nameserver update",
              description:
                "Send the complete intended nameserver list through the CMR nameserver update operation.",
            },
            {
              id: "update-propagate",
              title: "Allow the change to propagate",
              description:
                "Nameserver changes are distributed through DNS infrastructure and may not become visible everywhere immediately.",
            },
            {
              id: "update-verify",
              title: "Verify externally",
              description:
                "Check the domain's nameservers through external DNS lookup tools to confirm the intended configuration is becoming visible.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Submit the complete list",
          content:
            "Because the nameserver list is replaced, do not submit only the one nameserver you want to change. Supply the complete intended list.",
        },
      ],
    },

    {
      id: "before-changing",
      title: "What to check before changing nameservers",

      description:
        "Nameserver changes can affect the DNS configuration served for the entire domain, so verify the target configuration first.",

      content: [
        {
          type: "paragraph",
          content:
            "Before changing nameservers, confirm that the target DNS infrastructure is ready to serve the domain's required records.",
        },

        {
          type: "steps",
          items: [
            {
              id: "before-target",
              title: "Confirm the target nameservers",
              description:
                "Verify the exact nameserver hostnames that should be authoritative for the domain.",
            },
            {
              id: "before-records",
              title: "Confirm required DNS records",
              description:
                "Make sure the target DNS infrastructure has the DNS records required by the domain's website, email, verification, and other services.",
            },
            {
              id: "before-list",
              title: "Confirm the complete list",
              description:
                "Make sure the nameserver list you plan to submit contains the complete intended configuration.",
            },
            {
              id: "before-domain",
              title: "Confirm the domain",
              description:
                "Make sure the change is being made for the correct domain.",
            },
            {
              id: "before-user",
              title: "Confirm the userId",
              description:
                "Make sure the user specified in the request owns the domain.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Prepare DNS before delegating the domain",
          content:
            "If the new authoritative DNS infrastructure does not contain the required records, changing nameservers can cause services that depend on DNS to stop resolving correctly.",
        },
      ],
    },

    {
      id: "api-flow",
      title: "Updating nameservers through the API",

      description:
        "Use the dedicated nameserver endpoint when the domain needs a different authoritative nameserver configuration.",

      content: [
        {
          type: "paragraph",
          content:
            "The CMR DNS API uses PUT /dns/nameservers for nameserver updates. The request should contain the complete intended nameserver configuration for the domain.",
        },

        {
          type: "code",
          language: "http",
          content:
            "PUT /dns/nameservers?userId=<USER_ID>&domain=example.com",
        },

        {
          type: "heading",
          content: "Recommended workflow",
        },

        {
          type: "steps",
          items: [
            {
              id: "api-flow-one",
              title: "Confirm the domain and user",
              description:
                "Verify that the request is scoped to the correct domain and domain owner.",
            },
            {
              id: "api-flow-two",
              title: "Prepare the complete nameserver list",
              description:
                "Use the exact nameservers supplied by the DNS provider or infrastructure you want to use.",
            },
            {
              id: "api-flow-three",
              title: "Submit the update",
              description:
                "Send the complete list through PUT /dns/nameservers.",
            },
            {
              id: "api-flow-four",
              title: "Wait for DNS propagation",
              description:
                "Nameserver changes can take time to become visible through DNS resolvers.",
            },
            {
              id: "api-flow-five",
              title: "Verify externally",
              description:
                "Use an external DNS lookup to confirm which nameservers are currently being returned for the domain.",
            },
          ],
        },
      ],
    },

    {
      id: "propagation",
      title: "How long nameserver changes take",

      description:
        "Nameserver changes are subject to DNS propagation and caching.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR documents that nameserver changes can take up to 48 hours to propagate. During this period, different DNS resolvers may temporarily return different nameserver information.",
        },

        {
          type: "steps",
          items: [
            {
              id: "propagation-submit",
              title: "The update is submitted",
              description:
                "CMR accepts the nameserver update and the requested configuration is applied to the domain.",
            },
            {
              id: "propagation-cache",
              title: "Resolvers continue using cached information",
              description:
                "DNS resolvers may temporarily retain previously cached nameserver information.",
            },
            {
              id: "propagation-refresh",
              title: "Resolvers refresh their information",
              description:
                "As cached information expires and is refreshed, more resolvers begin returning the updated nameservers.",
            },
            {
              id: "propagation-consistent",
              title: "The new configuration becomes broadly visible",
              description:
                "After propagation, DNS lookups should consistently return the intended nameserver configuration.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Up to 48 hours",
          content:
            "The documented CMR propagation window for nameserver changes is up to 48 hours. A successful update does not mean every DNS resolver will immediately show the new nameservers.",
        },
      ],
    },

    {
      id: "verify-change",
      title: "How to verify a nameserver change",

      description:
        "Verification should be performed externally because a successful CMR update and public DNS visibility are separate things.",

      content: [
        {
          type: "paragraph",
          content:
            "After updating nameservers, verify the domain through an external DNS resolver. This confirms which nameservers are actually being returned through DNS rather than only confirming that the CMR request succeeded.",
        },

        {
          type: "heading",
          content: "Using dig",
        },

        {
          type: "code",
          language: "bash",
          content:
            "dig example.com NS\n\ndig example.com NS @8.8.8.8\n\ndig example.com NS @1.1.1.1",
        },

        {
          type: "paragraph",
          content:
            "Comparing results from different resolvers can help identify whether the change is still propagating. If different resolvers return different nameserver lists, cached DNS information may still be in the process of refreshing.",
        },

        {
          type: "heading",
          content: "What to verify",
        },

        {
          type: "steps",
          items: [
            {
              id: "verify-hostname",
              title: "Verify the nameserver hostnames",
              description:
                "Confirm that the returned nameservers match the intended configuration.",
            },
            {
              id: "verify-resolvers",
              title: "Compare multiple resolvers",
              description:
                "Check more than one DNS resolver when investigating propagation.",
            },
            {
              id: "verify-records",
              title: "Verify records on the new DNS infrastructure",
              description:
                "After the nameserver change becomes active, confirm that the expected DNS records are available through the new authoritative infrastructure.",
            },
          ],
        },
      ],
    },

    {
      id: "wrong-nameservers",
      title: "When the wrong nameservers are being returned",

      description:
        "Unexpected nameservers can indicate propagation, configuration, or delegation issues.",

      content: [
        {
          type: "paragraph",
          content:
            "If external DNS lookups return nameservers that are different from the intended configuration, first determine whether the change is still within the propagation window.",
        },

        {
          type: "steps",
          items: [
            {
              id: "wrong-check-request",
              title: "Confirm the CMR update",
              description:
                "Verify that the nameserver update was submitted for the correct domain and user.",
            },
            {
              id: "wrong-check-list",
              title: "Confirm the submitted list",
              description:
                "Make sure the complete intended nameserver list was supplied rather than only one nameserver.",
            },
            {
              id: "wrong-check-external",
              title: "Compare external resolvers",
              description:
                "Check the nameserver response through multiple DNS resolvers.",
            },
            {
              id: "wrong-check-time",
              title: "Check the elapsed time",
              description:
                "Determine whether the change is still within the documented propagation window.",
            },
            {
              id: "wrong-check-authority",
              title: "Investigate the authoritative configuration",
              description:
                "If the unexpected response continues beyond the expected propagation period, investigate the domain's authoritative DNS configuration and delegation.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Do not repeatedly resubmit the same change",
          content:
            "If the CMR configuration is already correct, repeatedly submitting the same nameserver update does not replace the need to allow DNS caches and delegation information to refresh.",
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common nameserver mistakes",

      description:
        "Most nameserver problems come from changing the wrong domain, submitting an incomplete list, or changing delegation before the target DNS infrastructure is ready.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "mistake-incomplete",
              title: "Submitting an incomplete nameserver list",
              description:
                "Because the submitted list replaces the existing list, include every nameserver that should remain authoritative.",
            },
            {
              id: "mistake-domain",
              title: "Updating the wrong domain",
              description:
                "Confirm the domain before submitting the nameserver change.",
            },
            {
              id: "mistake-user",
              title: "Using the wrong userId",
              description:
                "Make sure the userId corresponds to the owner of the domain.",
            },
            {
              id: "mistake-unprepared",
              title: "Changing nameservers before preparing DNS",
              description:
                "Make sure the required DNS records exist on the target DNS infrastructure before changing the domain's nameservers.",
            },
            {
              id: "mistake-no-verification",
              title: "Checking only the API response",
              description:
                "A successful API operation does not by itself prove that the new nameservers are already visible through public DNS.",
            },
            {
              id: "mistake-impatient",
              title: "Treating propagation as an immediate failure",
              description:
                "DNS changes can take time to become visible consistently across different resolvers.",
            },
          ],
        },
      ],
    },

    {
      id: "nameserver-record-impact",
      title: "What can be affected by a nameserver change",

      description:
        "Changing authoritative nameservers can affect any service that depends on DNS records for the domain.",

      content: [
        {
          type: "paragraph",
          content:
            "Because nameservers determine where authoritative DNS information comes from, changing them can affect multiple services at the same time if the required records are not present on the new DNS infrastructure.",
        },

        {
          type: "steps",
          items: [
            {
              id: "impact-website",
              title: "Website and application records",
              description:
                "A and CNAME records may be required for websites and applications to resolve correctly.",
            },
            {
              id: "impact-email",
              title: "Email records",
              description:
                "MX records determine mail routing, while SPF, DKIM, and DMARC records support email authentication.",
            },
            {
              id: "impact-verification",
              title: "Verification records",
              description:
                "TXT records may be required by external services for domain ownership or service verification.",
            },
            {
              id: "impact-other",
              title: "Other DNS-dependent services",
              description:
                "Any service that depends on the domain's DNS configuration can be affected if its required records are not available through the new authoritative nameservers.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Plan the complete DNS configuration",
          content:
            "Before changing nameservers, make sure the new authoritative DNS infrastructure contains all DNS records required by the domain's services.",
        },
      ],
    },

    {
      id: "safe-workflow",
      title: "A safe nameserver change workflow",

      description:
        "Use this sequence when moving a domain to a different authoritative DNS configuration.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "safe-one",
              title: "1. Identify the current nameservers",
              description:
                "Understand which DNS infrastructure currently serves the domain.",
            },
            {
              id: "safe-two",
              title: "2. Identify the target nameservers",
              description:
                "Confirm the exact nameserver hostnames that should become authoritative.",
            },
            {
              id: "safe-three",
              title: "3. Prepare the target DNS records",
              description:
                "Make sure the target DNS infrastructure contains the records required by the domain.",
            },
            {
              id: "safe-four",
              title: "4. Confirm the complete nameserver list",
              description:
                "Prepare the complete list that should replace the current configuration.",
            },
            {
              id: "safe-five",
              title: "5. Submit the CMR update",
              description:
                "Use PUT /dns/nameservers with the correct domain and user scope.",
            },
            {
              id: "safe-six",
              title: "6. Allow propagation",
              description:
                "Allow DNS resolvers time to refresh the nameserver information.",
            },
            {
              id: "safe-seven",
              title: "7. Verify externally",
              description:
                "Use DNS lookups to confirm that the intended nameservers are being returned.",
            },
            {
              id: "safe-eight",
              title: "8. Verify dependent services",
              description:
                "Confirm that the website, email, verification records, and other DNS-dependent services continue to resolve correctly.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Think of nameserver changes as DNS delegation changes",
          content:
            "The safest approach is to prepare the destination DNS configuration first, then change the domain's nameservers, and finally verify both DNS visibility and the services that depend on those records.",
        },
      ],
    },

    {
      id: "important-things",
      title: "Important things to remember",

      description:
        "Keep these points in mind whenever you update nameservers in CMR.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "important-complete-list",
              title: "The complete list is replaced",
              description:
                "Submit the full intended nameserver list rather than only the nameserver you want to add or change.",
            },
            {
              id: "important-domain",
              title: "Check the domain",
              description:
                "Confirm that the nameserver update targets the correct domain.",
            },
            {
              id: "important-user",
              title: "Check the userId",
              description:
                "The specified user must own the domain being managed.",
            },
            {
              id: "important-records",
              title: "Prepare the DNS records first",
              description:
                "Make sure the target DNS infrastructure contains the records required by the domain's services.",
            },
            {
              id: "important-propagation",
              title: "Allow for propagation",
              description:
                "CMR documents that nameserver changes can take up to 48 hours to propagate.",
            },
            {
              id: "important-external",
              title: "Verify externally",
              description:
                "Use external DNS lookups to confirm the nameservers being returned publicly.",
            },
            {
              id: "important-services",
              title: "Verify dependent services",
              description:
                "After the nameserver change, confirm that important DNS-dependent services continue to work.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "What to read next",

      description:
        "Continue with the DNS guides that explain record management, propagation, and troubleshooting.",

      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "dns-fundamentals",
              title:
                "DNS Fundamentals: Records, Hosts, Nameservers & Zones",
              description:
                "Understand the DNS concepts behind records, hosts, nameservers, and zones.",
              href: "/concepts/dns/dns-fundamentals",
            },
            {
              id: "dns-record-types",
              title:
                "DNS Record Types Explained: A, AAAA, CNAME, MX, TXT & NS",
              description:
                "Understand what the most common DNS record types do and when to use them.",
              href: "/concepts/dns/dns-record-types",
            },
            {
              id: "dns-records",
              title: "Adding, Updating & Deleting DNS Records",
              description:
                "Learn how to manage individual DNS records through CMR.",
              href: "/concepts/dns/dns-records",
            },
            {
              id: "record-id",
              title:
                "Understanding recordId: Finding the Record You Need to Update or Delete",
              description:
                "Understand how recordId identifies the DNS record you need to modify.",
              href: "/concepts/dns/record-id",
            },
            {
              id: "dns-propagation",
              title:
                "DNS Propagation: What Changes, Why It Takes Time & How to Verify",
              description:
                "Understand DNS propagation, caching, and external verification.",
              href: "/concepts/dns/dns-propagation",
            },
            {
              id: "dns-troubleshooting",
              title:
                "DNS Troubleshooting: When a Record Isn't Working",
              description:
                "Troubleshoot DNS records, nameservers, propagation, and common configuration problems.",
              href: "/concepts/dns/dns-troubleshooting",
            },
          ],
        },
      ],
    },
  ],
};