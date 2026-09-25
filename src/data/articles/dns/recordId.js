export const recordIdArticle = {
  id: "record-id",

  slug: "/concepts/dns/record-id",

  category: {
    id: "dns",
    label: "DNS",
    slug: "/concepts/dns",
  },

  title: "Understanding recordId: Finding the Record You Need to Update or Delete",

  description:
    "Understand what recordId means in CMR, where to find it, why it is required for updates and deletions, and how to safely identify the correct DNS record.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "CMR assigns each DNS record a recordId that uniquely identifies that record within the domain's DNS configuration. When you need to update or delete an existing DNS record, recordId tells CMR exactly which record you want to modify. This guide explains where to find recordId, how to match it to the correct DNS record, and how to use it safely.",

  sections: [
    {
      id: "what-is-record-id",
      title: "What is recordId?",

      description:
        "recordId is the identifier CMR uses to identify a specific DNS record.",

      content: [
        {
          type: "paragraph",
          content:
            "A domain can contain multiple DNS records with different hosts, values, and record types. The recordId provides a specific identifier for an individual record so that CMR can distinguish it from other records.",
        },

        {
          type: "paragraph",
          content:
            "For example, a domain may have multiple TXT records, several MX records, and records for different hosts. The host and record type alone may not be enough to safely identify the exact record you want to modify. The recordId removes that ambiguity.",
        },

        {
          type: "heading",
          content: "Where recordId appears",
        },

        {
          type: "paragraph",
          content:
            "When you retrieve DNS records through CMR, the response includes a recordId for each record. Use that identifier when you need to update or delete the corresponding record.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Think of recordId as the record's identifier",
          content:
            "The domain identifies the DNS configuration you are working with, while recordId identifies the specific DNS record within that configuration.",
        },
      ],
    },

    {
      id: "where-to-find",
      title: "Where to find recordId",

      description:
        "Retrieve the domain's DNS records to get the recordId of an existing record.",

      content: [
        {
          type: "paragraph",
          content:
            "The safest way to obtain a recordId is to retrieve the current DNS records for the domain using the GET DNS operation.",
        },

        {
          type: "code",
          language: "http",
          content:
            "GET /dns?userId=<USER_ID>&domain=example.com",
        },

        {
          type: "paragraph",
          content:
            "The response contains the domain's DNS records. Each record can include its recordId along with the other record properties.",
        },

        {
          type: "heading",
          content: "Identify the record from its properties",
        },

        {
          type: "steps",
          items: [
            {
              id: "find-host",
              title: "Check the host",
              description:
                "Match the host with the DNS record you intend to modify, such as @, mail, or _dmarc.",
            },
            {
              id: "find-type",
              title: "Check the recordType",
              description:
                "Confirm that the record type matches the intended record, such as A, CNAME, MX, or TXT.",
            },
            {
              id: "find-value",
              title: "Check the value",
              description:
                "Compare the current value with the value you expect the record to contain.",
            },
            {
              id: "find-priority",
              title: "Check priority when applicable",
              description:
                "For records such as MX, use the priority together with the other fields to identify the correct record.",
            },
            {
              id: "find-id",
              title: "Use the matching recordId",
              description:
                "Once you have confirmed the record's properties, use the recordId returned for that specific record.",
            },
          ],
        },
      ],
    },

    {
      id: "why-required",
      title: "Why recordId is required for updates and deletions",

      description:
        "CMR uses recordId to target an existing DNS record precisely.",

      content: [
        {
          type: "paragraph",
          content:
            "When updating or deleting an existing DNS record, identifying the exact record matters because a domain can contain multiple records of the same type or records with similar hosts and values.",
        },

        {
          type: "steps",
          items: [
            {
              id: "why-specific",
              title: "A domain can have many records",
              description:
                "A single domain can have A, CNAME, MX, TXT, NS, and other records across multiple hosts.",
            },
            {
              id: "why-similar",
              title: "Records can have similar properties",
              description:
                "Multiple records can share the same record type or host, making it unsafe to rely on only one visible property.",
            },
            {
              id: "why-id",
              title: "recordId identifies the intended record",
              description:
                "The recordId provides a specific identifier for the record being modified.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not guess the recordId",
          content:
            "Always retrieve the current DNS records and use the recordId returned by CMR. Do not construct an ID yourself or reuse an ID from another domain or record.",
        },
      ],
    },

    {
      id: "reading-response",
      title: "How to read a DNS response",

      description:
        "Use the record properties returned by CMR to identify the correct recordId.",

      content: [
        {
          type: "paragraph",
          content:
            "A DNS record returned by CMR can contain properties such as recordId, host, value, recordType, priority, ttl, and other DNS-specific information.",
        },

        {
          type: "code",
          language: "json",
          content: `{
  "recordId": "record_123",
  "host": "_dmarc",
  "value": "v=DMARC1; p=none",
  "recordType": "TXT",
  "priority": "",
  "ttl": 3600
}`,
        },

        {
          type: "heading",
          content: "Identify the record before using its ID",
        },

        {
          type: "steps",
          items: [
            {
              id: "response-host",
              title: "Find the host",
              description:
                "Confirm that the host matches the record you are looking for.",
            },
            {
              id: "response-type",
              title: "Confirm the record type",
              description:
                "Verify that the recordType is correct for the intended DNS configuration.",
            },
            {
              id: "response-value",
              title: "Confirm the value",
              description:
                "Check the current record value so that you do not select a similar record by mistake.",
            },
            {
              id: "response-id",
              title: "Copy the recordId",
              description:
                "Use the recordId belonging to the confirmed record for the subsequent update or deletion.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Match first, modify second",
          content:
            "Treat recordId as the final identifier you use after confirming that the record's host, type, value, and applicable priority match the record you intended to modify.",
        },
      ],
    },

    {
      id: "update-workflow",
      title: "Using recordId to update a DNS record",

      description:
        "Retrieve the record first, identify its recordId, and then submit the update.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR's DNS update operation uses the existing record's recordId to identify which record should be changed.",
        },

        {
          type: "steps",
          items: [
            {
              id: "update-get",
              title: "Retrieve the DNS records",
              description:
                "Use GET /dns for the intended domain and user.",
            },
            {
              id: "update-match",
              title: "Find the intended record",
              description:
                "Compare the host, recordType, value, and priority where applicable.",
            },
            {
              id: "update-copy",
              title: "Copy the recordId",
              description:
                "Use the recordId returned for the matching record.",
            },
            {
              id: "update-request",
              title: "Submit the update",
              description:
                "Use PUT /dns with the correct recordId, domain, and updated record fields.",
            },
            {
              id: "update-verify",
              title: "Retrieve the records again",
              description:
                "Use GET /dns again to verify that the intended record now contains the updated configuration.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Verify after updating",
          content:
            "Retrieving the DNS records after an update lets you confirm that the correct record was changed and that the new configuration is present in CMR.",
        },
      ],
    },

    {
      id: "delete-workflow",
      title: "Using recordId to delete a DNS record",

      description:
        "Use the recordId of the exact record you want to remove.",

      content: [
        {
          type: "paragraph",
          content:
            "Deleting a DNS record is permanent for that record configuration, so identify the record carefully before submitting the deletion.",
        },

        {
          type: "steps",
          items: [
            {
              id: "delete-get",
              title: "Retrieve the current DNS records",
              description:
                "Get the latest DNS configuration for the domain.",
            },
            {
              id: "delete-match",
              title: "Identify the exact record",
              description:
                "Check the host, recordType, value, and priority where applicable.",
            },
            {
              id: "delete-id",
              title: "Confirm the recordId",
              description:
                "Make sure the recordId belongs to the exact record you intend to delete.",
            },
            {
              id: "delete-submit",
              title: "Submit the deletion",
              description:
                "Use DELETE /dns with the required record information and the confirmed recordId.",
            },
            {
              id: "delete-verify",
              title: "Verify the result",
              description:
                "Retrieve the DNS records again to confirm that the intended record is no longer present in the active configuration.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Check the purpose of the record before deleting it",
          content:
            "DNS records can control websites, email routing, authentication, verification, and other services. Confirm that the record is no longer required before deleting it.",
        },
      ],
    },

    {
      id: "multiple-similar-records",
      title: "When multiple records look similar",

      description:
        "Some domains contain multiple records with the same host or record type.",

      content: [
        {
          type: "paragraph",
          content:
            "Do not select a record based on only one field when multiple records look similar. Compare the complete set of relevant properties before selecting the recordId.",
        },

        {
          type: "steps",
          items: [
            {
              id: "similar-host",
              title: "Compare the host",
              description:
                "Check whether the records use the same or different hostnames.",
            },
            {
              id: "similar-type",
              title: "Compare the record type",
              description:
                "Confirm whether the records are A, CNAME, MX, TXT, or another record type.",
            },
            {
              id: "similar-value",
              title: "Compare the values",
              description:
                "Check the complete value of each candidate record.",
            },
            {
              id: "similar-priority",
              title: "Compare priority where applicable",
              description:
                "For records such as MX, priority can help distinguish between records serving different purposes.",
            },
            {
              id: "similar-id",
              title: "Select the matching recordId",
              description:
                "Use the identifier belonging to the record that matches the intended configuration.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Never choose by position alone",
          content:
            "The position of a record in an API response should not be treated as its identity. Match the record's actual properties and then use its recordId.",
        },
      ],
    },

    {
      id: "record-id-mistakes",
      title: "Common recordId mistakes",

      description:
        "Most recordId problems come from using an outdated, incorrect, or unrelated identifier.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "mistake-guess",
              title: "Guessing the recordId",
              description:
                "Do not construct a recordId yourself. Retrieve it from the DNS records returned by CMR.",
            },
            {
              id: "mistake-old",
              title: "Using an outdated recordId",
              description:
                "Retrieve the current DNS configuration when working with records that may have changed since the previous lookup.",
            },
            {
              id: "mistake-other",
              title: "Using a recordId from another record",
              description:
                "Make sure the identifier belongs to the exact record you intend to update or delete.",
            },
            {
              id: "mistake-domain",
              title: "Using a recordId with the wrong domain",
              description:
                "Confirm that the recordId belongs to the DNS configuration for the domain you are modifying.",
            },
            {
              id: "mistake-user",
              title: "Using the wrong userId",
              description:
                "Make sure the DNS request is scoped to the user who owns the domain.",
            },
            {
              id: "mistake-stale",
              title: "Using a stale DNS response",
              description:
                "Retrieve the current records again if another operation may have changed the DNS configuration.",
            },
          ],
        },
      ],
    },

    {
      id: "safe-workflow",
      title: "A safe recordId workflow",

      description:
        "Use this sequence whenever you need to update or delete an existing DNS record.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "safe-retrieve",
              title: "1. Retrieve the current records",
              description:
                "Use GET /dns with the correct userId and domain.",
            },
            {
              id: "safe-identify",
              title: "2. Identify the target record",
              description:
                "Match the host, recordType, value, and priority where applicable.",
            },
            {
              id: "safe-record-id",
              title: "3. Confirm recordId",
              description:
                "Use the recordId returned for the matching record.",
            },
            {
              id: "safe-action",
              title: "4. Perform the operation",
              description:
                "Use PUT /dns to update the record or DELETE /dns to remove it.",
            },
            {
              id: "safe-verify",
              title: "5. Retrieve the records again",
              description:
                "Confirm that the intended record was updated or removed.",
            },
            {
              id: "safe-external",
              title: "6. Verify externally when necessary",
              description:
                "If the change needs to be publicly visible, check the relevant DNS record through an external resolver and allow for propagation where applicable.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "The safest pattern is retrieve → identify → modify → verify",
          content:
            "Always start with the current DNS configuration. Identify the exact record, use its recordId, perform the operation, and then retrieve the configuration again to verify the result.",
        },
      ],
    },

    {
      id: "important-things",
      title: "Important things to remember",

      description:
        "Keep these points in mind when working with recordId in CMR.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "important-unique",
              title: "recordId identifies a specific record",
              description:
                "Use it to target the exact DNS record you want to modify.",
            },
            {
              id: "important-get",
              title: "Get the recordId from CMR",
              description:
                "Retrieve the DNS records instead of guessing or constructing the identifier.",
            },
            {
              id: "important-match",
              title: "Match the complete record",
              description:
                "Confirm the host, recordType, value, and applicable priority before using the recordId.",
            },
            {
              id: "important-update",
              title: "Use recordId for updates",
              description:
                "Use the identifier returned by CMR when updating an existing DNS record.",
            },
            {
              id: "important-delete",
              title: "Use recordId carefully for deletion",
              description:
                "Confirm that the record is no longer required before deleting it.",
            },
            {
              id: "important-verify",
              title: "Verify after the operation",
              description:
                "Retrieve the DNS records again to confirm that the intended change was applied.",
            },
            {
              id: "important-external",
              title: "Remember DNS propagation",
              description:
                "A successful CMR update does not necessarily mean that external DNS resolvers immediately return the new value.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "What to read next",

      description:
        "Continue with the DNS guides that explain record management and verification.",

      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "dns-fundamentals",
              title:
                "DNS Fundamentals: Records, Hosts, Nameservers & Zones",
              description:
                "Understand the core DNS concepts behind records, hosts, nameservers, and zones.",
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
                "Learn the complete workflow for managing DNS records through CMR.",
              href: "/concepts/dns/dns-records",
            },
            {
              id: "nameservers",
              title: "Updating Nameservers Safely",
              description:
                "Understand how nameserver updates work and how to verify them.",
              href: "/concepts/dns/nameservers",
            },
            {
              id: "dns-propagation",
              title:
                "DNS Propagation: What Changes, Why It Takes Time & How to Verify",
              description:
                "Understand why DNS changes may take time to become visible externally.",
              href: "/concepts/dns/dns-propagation",
            },
            {
              id: "dns-troubleshooting",
              title:
                "DNS Troubleshooting: When a Record Isn't Working",
              description:
                "Troubleshoot common DNS configuration, record, nameserver, and propagation problems.",
              href: "/concepts/dns/dns-troubleshooting",
            },
          ],
        },
      ],
    },
  ],
};