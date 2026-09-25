export const dnsRecordsArticle = {
  id: "dns-records",

  slug: "/concepts/dns/dns-records",

  category: {
    id: "dns",
    label: "DNS",
    slug: "/concepts/dns",
  },

  title: "Adding, Updating & Deleting DNS Records",

  description:
    "Learn how to retrieve, add, update, and delete DNS records through CMR, including the fields required for each operation and the checks to perform before changing an existing record.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "CMR provides DNS management APIs for domains registered under the Partner account. You can retrieve existing DNS records, add new records, update existing records, and delete records when they are no longer required. This guide explains the complete DNS record management workflow, the fields used by CMR, how to identify the correct record before changing it, and what to verify after each operation.",

  sections: [
    {
      id: "dns-record-management",
      title: "How DNS record management works in CMR",

      description:
        "CMR provides separate operations for retrieving, adding, updating, and deleting DNS records.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR's DNS management API uses the /dns route to manage DNS records for domains registered under the Partner account.",
        },

        {
          type: "paragraph",
          content:
            "DNS requests require API authentication and the relevant userId. The domain must be owned by the specified user for the DNS operation to be permitted.",
        },

        {
          type: "heading",
          content: "The DNS record management workflow",
        },

        {
          type: "steps",
          items: [
            {
              id: "workflow-get",
              title: "Get the existing DNS records",
              description:
                "Retrieve the current DNS configuration before making a change. This is especially important when you need to update or delete an existing record.",
            },
            {
              id: "workflow-identify",
              title: "Identify the correct record",
              description:
                "Use the returned host, value, recordType, and recordId to identify the exact record you want to work with.",
            },
            {
              id: "workflow-add-update",
              title: "Add or update the record",
              description:
                "Create a new record when the required configuration does not exist, or update the existing record when you need to change its configuration.",
            },
            {
              id: "workflow-verify",
              title: "Verify the result",
              description:
                "Retrieve the DNS records again and confirm that the expected configuration is present.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Get the records before modifying them",
          content:
            "For existing-record operations, retrieving the DNS records first helps you identify the correct recordId and prevents accidentally modifying or deleting the wrong record.",
        },
      ],
    },

    {
      id: "dns-record-fields",
      title: "DNS record fields in CMR",

      description:
        "Understand the fields used when creating and managing DNS records.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR DNS records use several fields to describe where the record belongs, what type of record it is, and what value it contains.",
        },

        {
          type: "steps",
          items: [
            {
              id: "field-host",
              title: "host",
              description:
                "The host identifies where the DNS record belongs within the domain. Examples include @, mail, and _dmarc.",
            },
            {
              id: "field-value",
              title: "value",
              description:
                "The value contains the destination, address, text, or other DNS configuration represented by the record.",
            },
            {
              id: "field-record-type",
              title: "recordType",
              description:
                "The DNS record type, such as A, CNAME, MX, TXT, or NS.",
            },
            {
              id: "field-priority",
              title: "priority",
              description:
                "An optional field used for records such as MX where priority determines the order in which multiple mail servers should be considered.",
            },
            {
              id: "field-record-id",
              title: "recordId",
              description:
                "The identifier of an existing DNS record. CMR uses this identifier when updating or deleting an existing record.",
            },
            {
              id: "field-dmarc",
              title: "excludedDMARCtags",
              description:
                "An optional CMR-specific field for applicable DMARC TXT records. It is supported when the host is _dmarc or starts with _dmarc.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Not every field applies to every record",
          content:
            "host, value, and recordType are required when adding a DNS record. Other fields, such as priority or excludedDMARCtags, are used only when applicable to the specific record.",
        },
      ],
    },

    {
      id: "get-dns-records",
      title: "Getting the current DNS records",

      description:
        "Use the GET DNS operation to retrieve the current records for a domain.",

      content: [
        {
          type: "paragraph",
          content:
            "Before updating or deleting an existing DNS record, retrieve the domain's DNS configuration so you can identify the correct record and its recordId.",
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
            "The DNS response can contain active records under data.records and disabled records under data.disabledRecords.",
        },

        {
          type: "heading",
          content: "What to look for in the response",
        },

        {
          type: "steps",
          items: [
            {
              id: "get-record-id",
              title: "recordId",
              description:
                "The identifier used when updating or deleting the specific record.",
            },
            {
              id: "get-host",
              title: "host",
              description:
                "The DNS hostname or host value associated with the record.",
            },
            {
              id: "get-value",
              title: "value",
              description:
                "The current DNS value configured for the record.",
            },
            {
              id: "get-type",
              title: "recordType",
              description:
                "The type of DNS record, such as A, CNAME, MX, TXT, or NS.",
            },
            {
              id: "get-priority",
              title: "priority",
              description:
                "The priority value where the record type uses one.",
            },
          ],
        },

        {
          type: "code",
          language: "json",
          content: `{
  "recordId": "record_123",
  "host": "@",
  "value": "<DNS-VALUE>",
  "recordType": "TXT",
  "priority": ""
}`,
        },

        {
          type: "callout",
          variant: "info",
          title: "Use the GET response as your source of truth",
          content:
            "When updating or deleting an existing record, use the recordId returned by CMR rather than trying to construct or guess the identifier yourself.",
        },
      ],
    },

    {
      id: "add-dns-records",
      title: "Adding DNS records",

      description:
        "Use the Add DNS Records operation when the required DNS record does not already exist.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR allows you to add one or more DNS records for a domain. Each record requires a host, value, and recordType.",
        },

        {
          type: "code",
          language: "http",
          content:
            "POST /dns?userId=<USER_ID>",
        },

        {
          type: "heading",
          content: "Example request structure",
        },

        {
          type: "code",
          language: "json",
          content: `{
  "domain": "example.com",
  "records": [
    {
      "host": "mail",
      "value": "192.0.2.10",
      "recordType": "A"
    }
  ]
}`,
        },

        {
          type: "paragraph",
          content:
            "The records array allows multiple DNS records to be included in the same add operation. The exact values depend on the DNS configuration required by the service using the domain.",
        },

        {
          type: "heading",
          content: "Adding email authentication records",
        },

        {
          type: "paragraph",
          content:
            "SPF, DKIM, and DMARC are commonly published as TXT records. For example, an SPF record can use @ as its host, a DKIM record can use a selector-specific _domainkey host, and a DMARC record uses _dmarc.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Use the exact values required by your service",
          content:
            "CMR provides the DNS management layer, but it does not provide a universal SPF, DKIM, or DMARC value for every domain. Use the exact configuration supplied by the relevant email or service provider.",
        },
      ],
    },

    {
      id: "adding-multiple-records",
      title: "Adding multiple DNS records",

      description:
        "You can include multiple records in a single add operation when configuring several DNS requirements together.",

      content: [
        {
          type: "paragraph",
          content:
            "When a domain requires several DNS records, CMR's Add DNS Records operation can accept multiple records in the same request.",
        },

        {
          type: "code",
          language: "json",
          content: `{
  "domain": "example.com",
  "records": [
    {
      "host": "@",
      "value": "<SPF-VALUE>",
      "recordType": "TXT"
    },
    {
      "host": "mail._domainkey",
      "value": "<DKIM-PUBLIC-KEY>",
      "recordType": "TXT"
    },
    {
      "host": "_dmarc",
      "value": "<DMARC-POLICY>",
      "recordType": "TXT"
    }
  ]
}`,
        },

        {
          type: "paragraph",
          content:
            "Each record is evaluated according to its own host, value, and record type. Make sure every record in the request contains the correct configuration for the intended service.",
        },

        {
          type: "callout",
          variant: "info",
          title: "The request can create several records, but verification still matters",
          content:
            "After adding multiple records, retrieve the domain's DNS configuration and verify each expected record rather than assuming that the entire configuration is correct from the request alone.",
        },
      ],
    },

    {
      id: "update-dns-record",
      title: "Updating an existing DNS record",

      description:
        "Use the Update DNS Record operation when an existing record needs to be changed.",

      content: [
        {
          type: "paragraph",
          content:
            "When updating an existing record, first retrieve the DNS records and identify the record you want to change. The recordId returned by CMR identifies the specific record.",
        },

        {
          type: "heading",
          content: "The update workflow",
        },

        {
          type: "steps",
          items: [
            {
              id: "update-get",
              title: "Retrieve the current records",
              description:
                "Use GET /dns to retrieve the current DNS configuration for the domain.",
            },
            {
              id: "update-identify",
              title: "Find the correct recordId",
              description:
                "Match the host, value, and recordType to the record you intend to update.",
            },
            {
              id: "update-request",
              title: "Submit the update",
              description:
                "Use PUT /dns with the recordId and the updated record information.",
            },
            {
              id: "update-verify",
              title: "Retrieve the records again",
              description:
                "Confirm that the updated record now contains the expected configuration.",
            },
          ],
        },

        {
          type: "code",
          language: "http",
          content:
            "PUT /dns?userId=<USER_ID>",
        },

        {
          type: "paragraph",
          content:
            "The update operation uses the existing recordId to identify the record being changed. The updated record fields should contain the intended new configuration.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not update a record based only on its host",
          content:
            "A domain can contain multiple DNS records. Always identify the exact record using the information returned by GET /dns and use its recordId for the update.",
        },
      ],
    },

    {
      id: "update-example",
      title: "Example: updating a DNS record",

      description:
        "The following example shows the general structure of an update request.",

      content: [
        {
          type: "code",
          language: "json",
          content: `{
  "recordId": "record_123",
  "domain": "example.com",
  "host": "mail",
  "value": "192.0.2.20",
  "recordType": "A"
}`,
        },

        {
          type: "paragraph",
          content:
            "The recordId identifies the existing DNS record, while the other fields describe the updated record configuration.",
        },

        {
          type: "paragraph",
          content:
            "CMR's update operation replaces the writable record fields with the submitted values. Make sure the complete intended record configuration is supplied rather than changing only the field you happen to be thinking about.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Verify after updating",
          content:
            "After the update request succeeds, use GET /dns again to confirm that CMR now returns the expected record configuration.",
        },
      ],
    },

    {
      id: "delete-dns-record",
      title: "Deleting a DNS record",

      description:
        "Use the Delete DNS Record operation when an existing DNS record is no longer required.",

      content: [
        {
          type: "paragraph",
          content:
            "Deleting a DNS record removes that record from the domain's DNS configuration. As with updates, the correct recordId must be identified before submitting the deletion.",
        },

        {
          type: "heading",
          content: "The deletion workflow",
        },

        {
          type: "steps",
          items: [
            {
              id: "delete-get",
              title: "Retrieve the DNS records",
              description:
                "Use GET /dns to retrieve the current records for the domain.",
            },
            {
              id: "delete-identify",
              title: "Identify the record",
              description:
                "Confirm the host, value, and recordType and find the corresponding recordId.",
            },
            {
              id: "delete-request",
              title: "Submit the deletion",
              description:
                "Use DELETE /dns with the recordId of the record you want to remove.",
            },
            {
              id: "delete-verify",
              title: "Verify the result",
              description:
                "Retrieve the DNS records again and confirm that the intended record is no longer active.",
            },
          ],
        },

        {
          type: "code",
          language: "http",
          content:
            "DELETE /dns?userId=<USER_ID>&recordId=<RECORD_ID>",
        },

        {
          type: "callout",
          variant: "warning",
          title: "DNS deletion can affect services",
          content:
            "Before deleting a DNS record, understand what service depends on it. Removing an MX, CNAME, A, TXT, or other record can affect email, websites, verification, authentication, or other domain services.",
        },
      ],
    },

    {
      id: "disabled-records",
      title: "Active and disabled DNS records",

      description:
        "CMR's DNS response can distinguish between active records and disabled records.",

      content: [
        {
          type: "paragraph",
          content:
            "The DNS GET response can contain active records under data.records and disabled records under data.disabledRecords.",
        },

        {
          type: "paragraph",
          content:
            "This distinction is useful when reviewing a domain's DNS configuration because a record that is no longer active may still appear in the response under the disabled records collection.",
        },

        {
          type: "heading",
          content: "When reviewing DNS records",
        },

        {
          type: "steps",
          items: [
            {
              id: "disabled-active",
              title: "Check active records first",
              description:
                "Use data.records to understand the DNS records currently represented as active.",
            },
            {
              id: "disabled-check",
              title: "Check disabled records when troubleshooting",
              description:
                "If you cannot find an expected active record, review data.disabledRecords to determine whether a related record appears there.",
            },
            {
              id: "disabled-identify",
              title: "Use record information carefully",
              description:
                "Compare the host, value, recordType, and recordId before deciding what action should be taken.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Do not assume every returned record is active",
          content:
            "When troubleshooting DNS configuration, distinguish between the active and disabled record collections returned by CMR.",
        },
      ],
    },

    {
      id: "dmarc-records",
      title: "Managing DMARC records",

      description:
        "CMR provides specific handling for DMARC TXT records.",

      content: [
        {
          type: "paragraph",
          content:
            "DMARC is published as a TXT record at the _dmarc host. CMR's DNS API supports an optional excludedDMARCtags field for applicable DMARC TXT records.",
        },

        {
          type: "code",
          language: "json",
          content: `{
  "host": "_dmarc",
  "value": "<DMARC-POLICY>",
  "recordType": "TXT",
  "excludedDMARCtags": []
}`,
        },

        {
          type: "paragraph",
          content:
            "The excludedDMARCtags field is only applicable to TXT records where the host is _dmarc or starts with _dmarc. It should not be treated as a general-purpose field for other DNS record types.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Use excludedDMARCtags only for applicable DMARC records",
          content:
            "Do not add excludedDMARCtags to unrelated DNS records such as A, CNAME, MX, or ordinary TXT records.",
        },
      ],
    },

    {
      id: "verify-after-change",
      title: "How to verify a DNS change",

      description:
        "Always confirm the resulting DNS configuration after adding, updating, or deleting a record.",

      content: [
        {
          type: "paragraph",
          content:
            "A successful DNS management request confirms that the operation was accepted, but verification should still be performed to make sure the resulting configuration is what you intended.",
        },

        {
          type: "heading",
          content: "Verification workflow",
        },

        {
          type: "steps",
          items: [
            {
              id: "verify-request",
              title: "Confirm the API operation",
              description:
                "Check that the DNS request completed successfully.",
            },
            {
              id: "verify-cmr-record",
              title: "Retrieve the DNS records",
              description:
                "Use GET /dns to retrieve the current DNS configuration.",
            },
            {
              id: "verify-fields",
              title: "Check the record fields",
              description:
                "Confirm the host, value, recordType, and other applicable fields.",
            },
            {
              id: "verify-external-dns",
              title: "Verify externally when necessary",
              description:
                "Use an external DNS resolver or lookup tool when you need to confirm that the updated configuration is visible outside CMR.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Remember DNS propagation",
          content:
            "External DNS resolvers may temporarily return an older value because of DNS caching. A difference between the CMR configuration and an external lookup does not automatically mean that the CMR operation failed.",
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common mistakes",

      description:
        "Most DNS record management problems come from using the wrong record, incorrect fields, or an incorrect user or domain.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "mistake-user-id",
              title: "Using the wrong userId",
              description:
                "DNS operations are scoped to the user who owns the domain. An incorrect userId can result in the domain not being found or the request being rejected.",
            },
            {
              id: "mistake-record-id",
              title: "Missing or incorrect recordId",
              description:
                "Updates and deletions require the correct recordId. Retrieve the DNS records first instead of guessing the identifier.",
            },
            {
              id: "mistake-host",
              title: "Using the wrong host",
              description:
                "A DNS record can exist at @, mail, _dmarc, a selector-specific hostname, or another host. Use the host required by the service.",
            },
            {
              id: "mistake-type",
              title: "Using the wrong recordType",
              description:
                "The record type determines how the DNS value is interpreted. Make sure the type matches the intended configuration.",
            },
            {
              id: "mistake-value",
              title: "Using an incorrect value",
              description:
                "A valid API request can still produce an incorrect DNS configuration if the submitted value is wrong.",
            },
            {
              id: "mistake-dmarc",
              title: "Using DMARC-specific fields incorrectly",
              description:
                "excludedDMARCtags is intended for applicable DMARC TXT records and should not be used on unrelated records.",
            },
            {
              id: "mistake-propagation",
              title: "Assuming the change is immediately visible everywhere",
              description:
                "External DNS resolvers can continue returning cached information after a record has been changed.",
            },
          ],
        },
      ],
    },

    {
      id: "safe-dns-workflow",
      title: "A safe workflow for DNS changes",

      description:
        "Use this process whenever you need to modify an existing DNS configuration.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "safe-domain",
              title: "Confirm the domain",
              description:
                "Make sure you are working with the intended domain.",
            },
            {
              id: "safe-user",
              title: "Confirm the userId",
              description:
                "Make sure the specified user owns the domain.",
            },
            {
              id: "safe-get",
              title: "Retrieve the current DNS records",
              description:
                "Use GET /dns to understand the current configuration before making a change.",
            },
            {
              id: "safe-identify",
              title: "Identify the exact record",
              description:
                "For an update or deletion, confirm the host, value, recordType, and recordId.",
            },
            {
              id: "safe-change",
              title: "Make the change",
              description:
                "Add, update, or delete the intended DNS record.",
            },
            {
              id: "safe-verify",
              title: "Verify the result",
              description:
                "Retrieve the DNS configuration again and confirm that the expected result is present.",
            },
            {
              id: "safe-external",
              title: "Check external DNS when required",
              description:
                "If the change affects an external service or needs propagation verification, check the resulting DNS state through external resolvers.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Be especially careful with production DNS",
          content:
            "DNS records can control important services such as websites, email delivery, authentication, and domain verification. Confirm the intended change before submitting it.",
        },
      ],
    },

    {
      id: "related-guides",
      title: "What to read next",

      description:
        "Continue with the DNS guides that explain record identification, nameservers, authentication, and propagation.",

      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "dns-fundamentals",
              title: "DNS Fundamentals: Records, Hosts, Nameservers & Zones",
              description:
                "Understand the core DNS concepts before managing DNS records.",
              href: "/concepts/dns/dns-fundamentals",
            },
            {
              id: "dns-record-types",
              title:
                "DNS Record Types Explained: A, AAAA, CNAME, MX, TXT & NS",
              description:
                "Learn what the most common DNS record types do and when they are used.",
              href: "/concepts/dns/dns-record-types",
            },
            {
              id: "spf-dkim-dmarc",
              title:
                "SPF, DKIM & DMARC — What They Do and Who Manages Them",
              description:
                "Understand how email authentication records work and how to manage them through DNS.",
              href: "/concepts/dns/spf-dkim-dmarc",
            },
            {
              id: "record-id",
              title:
                "Understanding recordId: Finding the Record You Need to Update or Delete",
              description:
                "Learn how to find and safely use recordId when modifying existing DNS records.",
              href: "/concepts/dns/record-id",
            },
            {
              id: "nameservers",
              title: "Updating Nameservers Safely",
              description:
                "Understand how nameserver updates work and what to verify before making one.",
              href: "/concepts/dns/nameservers",
            },
            {
              id: "dns-propagation",
              title:
                "DNS Propagation: What Changes, Why It Takes Time & How to Verify",
              description:
                "Understand DNS caching and how to verify that a DNS change has propagated.",
              href: "/concepts/dns/dns-propagation",
            },
            {
              id: "dns-troubleshooting",
              title: "DNS Troubleshooting: When a Record Isn't Working",
              description:
                "Troubleshoot DNS records that are missing, incorrect, or not yet visible externally.",
              href: "/concepts/dns/dns-troubleshooting",
            },
          ],
        },
      ],
    },
  ],
};