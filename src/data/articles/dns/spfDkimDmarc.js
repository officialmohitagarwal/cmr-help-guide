export const spfDkimDmarcArticle = {
  id: "spf-dkim-dmarc",

  slug: "/concepts/dns/spf-dkim-dmarc",

  category: {
    id: "dns",
    label: "DNS",
    slug: "/concepts/dns",
  },

  title: "SPF, DKIM & DMARC — What They Do and Who Manages Them",

  description:
    "Understand how SPF, DKIM, and DMARC work together, which DNS records they use, what each record controls, and how they relate to CMR domain and DNS management.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "SPF, DKIM, and DMARC are DNS-based email authentication mechanisms that help receiving mail systems evaluate whether email claiming to come from a domain is authorized and aligned with that domain. Each uses DNS differently and solves a different part of the authentication problem. This guide explains what SPF, DKIM, and DMARC do, where their DNS records are published, and how they fit into CMR's domain and DNS management workflow.",

  sections: [
    {
      id: "overview",
      title: "How SPF, DKIM & DMARC fit together",

      description:
        "SPF, DKIM, and DMARC are separate mechanisms that work together as part of a domain's email authentication configuration.",

      content: [
        {
          type: "paragraph",
          content:
            "SPF, DKIM, and DMARC should not be treated as three versions of the same DNS record. Each serves a different purpose: SPF identifies authorized sending infrastructure, DKIM uses a cryptographic signature to authenticate a message, and DMARC defines how receiving systems should evaluate authentication and domain alignment.",
        },

        {
          type: "steps",
          items: [
            {
              id: "spf-overview",
              title: "SPF",
              description:
                "Publishes a TXT record that identifies which sending infrastructure is authorized to send email for the domain.",
            },
            {
              id: "dkim-overview",
              title: "DKIM",
              description:
                "Publishes a public key in DNS that receiving systems can use to validate a DKIM signature attached to an email.",
            },
            {
              id: "dmarc-overview",
              title: "DMARC",
              description:
                "Publishes a TXT record that defines the domain's DMARC policy and reporting configuration.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "They use DNS, but they do different jobs",
          content:
            "SPF, DKIM, and DMARC are related email authentication mechanisms, but their DNS records are different and should be configured according to the requirements of the email infrastructure using the domain.",
        },
      ],
    },

    {
      id: "spf",
      title: "SPF: Authorizing sending infrastructure",

      description:
        "SPF uses a TXT record to specify which servers or services are authorized to send email for a domain.",

      content: [
        {
          type: "paragraph",
          content:
            "Sender Policy Framework (SPF) allows a domain owner to publish a DNS TXT record describing which sending infrastructure is authorized to send email using that domain.",
        },

        {
          type: "heading",
          content: "Where the SPF record is published",
        },

        {
          type: "paragraph",
          content:
            "For a domain-level SPF configuration, the TXT record is commonly published at the domain's root host, represented as @ in CMR's DNS management examples.",
        },

        {
          type: "code",
          language: "text",
          content:
            "Host: @\nRecord type: TXT\nValue: <SPF value supplied by your email provider>",
        },

        {
          type: "heading",
          content: "What SPF controls",
        },

        {
          type: "steps",
          items: [
            {
              id: "spf-authorize",
              title: "Authorized senders",
              description:
                "The SPF policy identifies sending infrastructure that is authorized to send email for the domain.",
            },
            {
              id: "spf-dns",
              title: "DNS-based verification",
              description:
                "Receiving mail systems can retrieve the SPF TXT record from DNS when evaluating a message.",
            },
            {
              id: "spf-provider",
              title: "Provider-specific configuration",
              description:
                "The actual SPF value depends on the email infrastructure that sends mail for the domain.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Use the SPF value supplied by the sending provider",
          content:
            "Do not invent an SPF value. The sending infrastructure should provide the SPF configuration that needs to be published for the domain.",
        },
      ],
    },

    {
      id: "dkim",
      title: "DKIM: Authenticating the message with a signature",

      description:
        "DKIM uses a public key published in DNS to allow receiving systems to validate a cryptographic signature attached to an email.",

      content: [
        {
          type: "paragraph",
          content:
            "DomainKeys Identified Mail (DKIM) allows an email-sending system to attach a cryptographic signature to a message. The corresponding public key is published in DNS so receiving systems can retrieve it and validate the signature.",
        },

        {
          type: "heading",
          content: "Where the DKIM record is published",
        },

        {
          type: "paragraph",
          content:
            "A DKIM public key is published as a TXT record under a selector hostname. In CMR examples, a common form is mail._domainkey.",
        },

        {
          type: "code",
          language: "text",
          content:
            "Host: mail._domainkey\nRecord type: TXT\nValue: <DKIM public key supplied by your email provider>",
        },

        {
          type: "heading",
          content: "How the selector fits in",
        },

        {
          type: "steps",
          items: [
            {
              id: "dkim-selector",
              title: "The selector identifies the DKIM key",
              description:
                "The selector is part of the DNS hostname where the public key is published.",
            },
            {
              id: "dkim-signature",
              title: "The sending system signs the message",
              description:
                "The email infrastructure adds a DKIM signature to outgoing messages.",
            },
            {
              id: "dkim-lookup",
              title: "The receiving system retrieves the public key",
              description:
                "The receiving system uses the selector and domain information from the message to locate the corresponding public key in DNS.",
            },
            {
              id: "dkim-validation",
              title: "The signature can be validated",
              description:
                "The public key allows the receiving system to validate the DKIM signature.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "The DKIM value comes from your email infrastructure",
          content:
            "CMR manages the DNS record, but the email provider or sending infrastructure normally supplies the selector and DKIM public key that should be published.",
        },
      ],
    },

    {
      id: "dmarc",
      title: "DMARC: Defining the domain's authentication policy",

      description:
        "DMARC uses a TXT record to define how receiving systems should handle messages that fail DMARC evaluation.",

      content: [
        {
          type: "paragraph",
          content:
            "Domain-based Message Authentication, Reporting, and Conformance (DMARC) builds on email authentication signals such as SPF and DKIM. The domain publishes a DMARC TXT record that defines its policy and can specify reporting behavior.",
        },

        {
          type: "heading",
          content: "Where the DMARC record is published",
        },

        {
          type: "paragraph",
          content:
            "A DMARC record is published at the _dmarc host of the domain.",
        },

        {
          type: "code",
          language: "text",
          content:
            "Host: _dmarc\nRecord type: TXT\nValue: <DMARC policy supplied or configured for the domain>",
        },

        {
          type: "heading",
          content: "What DMARC does",
        },

        {
          type: "steps",
          items: [
            {
              id: "dmarc-policy",
              title: "Defines a policy",
              description:
                "The DMARC record tells receiving systems what policy the domain publishes for messages that do not satisfy DMARC requirements.",
            },
            {
              id: "dmarc-alignment",
              title: "Uses authentication and alignment",
              description:
                "DMARC evaluates authentication results such as SPF and DKIM together with domain alignment.",
            },
            {
              id: "dmarc-reporting",
              title: "Can define reporting",
              description:
                "A DMARC record can contain reporting-related configuration supplied as part of the domain's DMARC policy.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "DMARC belongs at _dmarc",
          content:
            "When managing a DMARC record through CMR, use the _dmarc host. CMR also supports the excludedDMARCtags field specifically for TXT records whose host is _dmarc or begins with _dmarc.",
        },
      ],
    },

    {
      id: "dns-records",
      title: "How SPF, DKIM and DMARC appear in DNS",

      description:
        "Each authentication mechanism uses a DNS TXT record, but the host and value are different.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "dns-spf",
              title: "SPF",
              description:
                "Typically uses a TXT record at the domain root, represented as @, with the SPF policy as its value.",
            },
            {
              id: "dns-dkim",
              title: "DKIM",
              description:
                "Uses a TXT record at a selector-based host such as mail._domainkey, containing the DKIM public key.",
            },
            {
              id: "dns-dmarc",
              title: "DMARC",
              description:
                "Uses a TXT record at _dmarc, containing the domain's DMARC policy.",
            },
          ],
        },

        {
          type: "heading",
          content: "Example DNS configuration",
        },

        {
          type: "code",
          language: "text",
          content:
            "@ → TXT → <SPF value>\nmail._domainkey → TXT → <DKIM public key>\n_dmarc → TXT → <DMARC policy>",
        },

        {
          type: "callout",
          variant: "info",
          title: "The values are provider-specific",
          content:
            "The examples above show the DNS structure, not values that should be copied into a production domain. Use the exact SPF, DKIM, and DMARC values required by the email infrastructure using the domain.",
        },
      ],
    },

    {
      id: "who-manages-what",
      title: "Who manages SPF, DKIM & DMARC?",

      description:
        "The email infrastructure supplies the required authentication configuration, while DNS management publishes those values for the domain.",

      content: [
        {
          type: "paragraph",
          content:
            "There are two separate responsibilities when configuring SPF, DKIM, and DMARC. The email infrastructure determines the authentication values it requires, while the domain's DNS configuration publishes those values so receiving systems can retrieve them.",
        },

        {
          type: "steps",
          items: [
            {
              id: "owner-provider",
              title: "Email infrastructure",
              description:
                "Provides the SPF configuration, DKIM selector and public key, and any required DMARC configuration according to the service being used.",
            },
            {
              id: "owner-dns",
              title: "DNS management",
              description:
                "Publishes the corresponding TXT records for the domain.",
            },
            {
              id: "owner-cmr",
              title: "CMR",
              description:
                "Provides DNS management APIs that allow Partners to retrieve, add, update, and delete DNS records for domains managed under their account.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "CMR manages the DNS layer",
          content:
            "CMR's role in this workflow is DNS management. The actual authentication values should come from the email infrastructure that sends or authenticates mail for the domain.",
        },
      ],
    },

    {
      id: "adding-through-cmr",
      title: "Adding SPF, DKIM & DMARC through CMR",

      description:
        "Once the required authentication values are available, the corresponding TXT records can be added through CMR's DNS API.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR's POST /dns operation can add one or more DNS records. SPF, DKIM, and DMARC are represented as TXT records with different hosts.",
        },

        {
          type: "code",
          language: "http",
          content:
            "POST /dns?userId=<USER_ID>",
        },

        {
          type: "heading",
          content: "Recommended configuration flow",
        },

        {
          type: "steps",
          items: [
            {
              id: "add-auth-values",
              title: "Collect the required values",
              description:
                "Get the exact SPF, DKIM, and DMARC configuration from the email infrastructure using the domain.",
            },
            {
              id: "add-auth-spf",
              title: "Prepare the SPF record",
              description:
                "Create the TXT record at the appropriate host, commonly @, using the supplied SPF value.",
            },
            {
              id: "add-auth-dkim",
              title: "Prepare the DKIM record",
              description:
                "Create the TXT record at the provider-supplied selector host, such as mail._domainkey, using the supplied public key.",
            },
            {
              id: "add-auth-dmarc",
              title: "Prepare the DMARC record",
              description:
                "Create the TXT record at _dmarc using the intended DMARC policy.",
            },
            {
              id: "add-auth-submit",
              title: "Submit the DNS records",
              description:
                "Add the required TXT records through CMR's DNS management API.",
            },
            {
              id: "add-auth-verify",
              title: "Verify the records",
              description:
                "Retrieve the DNS configuration from CMR and verify the records externally when public DNS visibility needs to be confirmed.",
            },
          ],
        },
      ],
    },

    {
      id: "verification",
      title: "How to verify SPF, DKIM & DMARC",

      description:
        "Verify both the CMR configuration and the publicly visible DNS configuration.",

      content: [
        {
          type: "paragraph",
          content:
            "Verification should happen in two stages. First, confirm that the intended records exist in CMR. Then, when necessary, confirm that the records are visible through external DNS resolvers.",
        },

        {
          type: "heading",
          content: "Verify through CMR",
        },

        {
          type: "code",
          language: "http",
          content:
            "GET /dns?userId=<USER_ID>&domain=example.com",
        },

        {
          type: "steps",
          items: [
            {
              id: "verify-spf",
              title: "Verify SPF",
              description:
                "Confirm that the expected SPF TXT record exists at the intended host.",
            },
            {
              id: "verify-dkim",
              title: "Verify DKIM",
              description:
                "Confirm that the provider's selector host contains the expected DKIM public key.",
            },
            {
              id: "verify-dmarc",
              title: "Verify DMARC",
              description:
                "Confirm that a TXT record exists at _dmarc with the intended policy.",
            },
          ],
        },

        {
          type: "heading",
          content: "Verify externally",
        },

        {
          type: "code",
          language: "bash",
          content:
            "dig example.com TXT\n\ndig mail._domainkey.example.com TXT\n\ndig _dmarc.example.com TXT",
        },

        {
          type: "callout",
          variant: "info",
          title: "CMR verification and public DNS verification are different",
          content:
            "A record can be correctly configured in CMR while external DNS resolvers still return an older response during propagation. Check both when diagnosing a DNS authentication issue.",
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common SPF, DKIM & DMARC mistakes",

      description:
        "Authentication problems often come from incorrect hosts, values, selectors, or incomplete DNS configuration.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "mistake-spf-host",
              title: "Using the wrong SPF host",
              description:
                "For a domain-level SPF configuration, make sure the record is published at the intended host, commonly @.",
            },
            {
              id: "mistake-dkim-host",
              title: "Using the wrong DKIM selector",
              description:
                "The DKIM public key must be published at the selector hostname expected by the sending infrastructure.",
            },
            {
              id: "mistake-dmarc-host",
              title: "Publishing DMARC at the wrong host",
              description:
                "DMARC records should be published at _dmarc.",
            },
            {
              id: "mistake-values",
              title: "Changing provider-supplied values",
              description:
                "Use the exact authentication values supplied by the email infrastructure unless the provider's documentation explicitly requires a change.",
            },
            {
              id: "mistake-record-type",
              title: "Using the wrong record type",
              description:
                "SPF, DKIM, and DMARC configurations described in this guide use TXT records.",
            },
            {
              id: "mistake-propagation",
              title: "Assuming a DNS update is immediately public",
              description:
                "External resolvers may continue returning cached DNS information after a successful CMR update.",
            },
          ],
        },
      ],
    },

    {
      id: "dmarc-specific-cmr",
      title: "CMR's DMARC-specific DNS handling",

      description:
        "CMR provides a field specifically for excluding DMARC tags when managing supported DMARC TXT records.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR's DNS record model includes an optional excludedDMARCtags field. This field is specific to TXT records where the host is _dmarc or begins with _dmarc.",
        },

        {
          type: "code",
          language: "json",
          content: `{
  "host": "_dmarc",
  "value": "v=DMARC1; p=none",
  "recordType": "TXT",
  "excludedDMARCtags": []
}`,
        },

        {
          type: "heading",
          content: "Important constraint",
        },

        {
          type: "paragraph",
          content:
            "Do not use excludedDMARCtags for unrelated DNS record types or ordinary TXT records. CMR documents this field specifically for DMARC TXT records.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Use DMARC-specific fields only for DMARC records",
          content:
            "If the record is not a DMARC TXT record, leave excludedDMARCtags out of the request.",
        },
      ],
    },

    {
      id: "troubleshooting",
      title: "When SPF, DKIM or DMARC is not working",

      description:
        "Use a layered troubleshooting process to determine whether the problem is the DNS configuration, propagation, or the email infrastructure.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "trouble-record",
              title: "1. Confirm the record exists",
              description:
                "Use GET /dns to confirm that the expected SPF, DKIM, or DMARC record exists in CMR.",
            },
            {
              id: "trouble-host",
              title: "2. Confirm the host",
              description:
                "Check that the record is published at the correct hostname.",
            },
            {
              id: "trouble-value",
              title: "3. Confirm the value",
              description:
                "Compare the DNS value with the configuration supplied by the email infrastructure.",
            },
            {
              id: "trouble-external",
              title: "4. Check public DNS",
              description:
                "Use an external DNS lookup to determine whether the expected record is publicly visible.",
            },
            {
              id: "trouble-propagation",
              title: "5. Consider propagation",
              description:
                "If CMR contains the correct configuration but public DNS does not, allow time for DNS caches to refresh.",
            },
            {
              id: "trouble-provider",
              title: "6. Check the email infrastructure",
              description:
                "If DNS is correct and publicly visible, investigate the sending or authentication configuration of the email infrastructure.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Troubleshoot one layer at a time",
          content:
            "Start with the DNS configuration in CMR, then verify public DNS, and only then investigate the sending infrastructure. This helps separate DNS configuration problems from email authentication or delivery problems.",
        },
      ],
    },

    {
      id: "important-things",
      title: "Important things to remember",

      description:
        "Keep these principles in mind when configuring email authentication records.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "important-spf",
              title: "SPF uses TXT",
              description:
                "SPF configuration is published as a TXT record containing the authorized sending infrastructure.",
            },
            {
              id: "important-dkim",
              title: "DKIM uses a selector-based TXT record",
              description:
                "The DKIM public key is published at a selector hostname such as mail._domainkey.",
            },
            {
              id: "important-dmarc",
              title: "DMARC uses _dmarc",
              description:
                "The DMARC policy is published as a TXT record at the _dmarc host.",
            },
            {
              id: "important-provider",
              title: "Use provider-supplied values",
              description:
                "The email infrastructure should provide the authentication values required for its sending configuration.",
            },
            {
              id: "important-cmr",
              title: "CMR manages the DNS layer",
              description:
                "CMR provides the APIs used to retrieve, add, update, and delete the DNS records.",
            },
            {
              id: "important-verify",
              title: "Verify externally when needed",
              description:
                "A successful CMR update does not necessarily mean that every public DNS resolver has refreshed its cached response.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "What to read next",

      description:
        "Continue with the DNS guides that explain record types, management, propagation, and troubleshooting.",

      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "dns-fundamentals",
              title:
                "DNS Fundamentals: Records, Hosts, Nameservers & Zones",
              description:
                "Understand the core DNS concepts behind domains, records, nameservers, and zones.",
              href: "/concepts/dns/dns-fundamentals",
            },
            {
              id: "dns-record-types",
              title:
                "DNS Record Types Explained: A, AAAA, CNAME, MX, TXT & NS",
              description:
                "Understand the DNS record types used by websites, email, and other services.",
              href: "/concepts/dns/dns-record-types",
            },
            {
              id: "dns-records",
              title: "Adding, Updating & Deleting DNS Records",
              description:
                "Learn how to manage DNS records through CMR's DNS API.",
              href: "/concepts/dns/dns-records",
            },
            {
              id: "record-id",
              title:
                "Understanding recordId: Finding the Record You Need to Update or Delete",
              description:
                "Learn how to identify the correct DNS record before modifying it.",
              href: "/concepts/dns/record-id",
            },
            {
              id: "nameservers",
              title: "Updating Nameservers Safely",
              description:
                "Understand nameserver changes and how to verify them.",
              href: "/concepts/dns/nameservers",
            },
            {
              id: "dns-propagation",
              title:
                "DNS Propagation: What Changes, Why It Takes Time & How to Verify",
              description:
                "Understand why DNS changes take time and how to verify them externally.",
              href: "/concepts/dns/dns-propagation",
            },
            {
              id: "dns-troubleshooting",
              title:
                "DNS Troubleshooting: When a Record Isn't Working",
              description:
                "Troubleshoot common DNS configuration and propagation problems.",
              href: "/concepts/dns/dns-troubleshooting",
            },
          ],
        },
      ],
    },
  ],
};