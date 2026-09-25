export const dnsRecordTypesArticle = {
  id: "dns-record-types",

  slug: "/concepts/dns/dns-record-types",

  category: {
    id: "dns",
    label: "DNS",
    slug: "/concepts/dns",
  },

  title: "DNS Record Types Explained: A, AAAA, CNAME, MX, TXT & NS",

  description:
    "Understand what the most common DNS record types do, where they are used, and how A, AAAA, CNAME, MX, TXT, and NS records differ when managing domains in CMR.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "DNS records tell the DNS system how a domain should behave. Different record types are designed for different purposes, such as pointing a hostname to an IP address, routing email, creating aliases, publishing authentication information, or identifying authoritative nameservers. This guide explains the most common DNS record types you will encounter when managing domains and DNS configuration in CMR.",

  sections: [
    {
      id: "what-is-record-type",
      title: "What is a DNS record type?",

      description:
        "The record type determines how a DNS record should be interpreted.",

      content: [
        {
          type: "paragraph",
          content:
            "A DNS record contains information about a domain or hostname. The record type tells DNS systems what that information represents and how it should be used.",
        },

        {
          type: "paragraph",
          content:
            "For example, an A record contains an IPv4 address, an MX record identifies mail servers, and a TXT record stores text-based configuration such as SPF, DKIM, DMARC, or domain verification information.",
        },

        {
          type: "paragraph",
          content:
            "When creating or managing a DNS record in CMR, the recordType field identifies the type of record being managed.",
        },

        {
          type: "callout",
          variant: "info",
          title: "The record type and value work together",
          content:
            "The same value can have a completely different meaning depending on its record type. Always make sure the host, recordType, and value match the configuration required by the service using the domain.",
        },
      ],
    },

    {
      id: "a-record",
      title: "A record",

      description:
        "An A record maps a hostname to an IPv4 address.",

      content: [
        {
          type: "paragraph",
          content:
            "An A record is used to associate a hostname with an IPv4 address. When a DNS resolver looks up an A record, the result identifies an IPv4 address associated with that hostname.",
        },

        {
          type: "heading",
          content: "When is an A record used?",
        },

        {
          type: "paragraph",
          content:
            "A records are commonly used when a website or other internet service needs a hostname to resolve directly to an IPv4 address.",
        },

        {
          type: "code",
          language: "text",
          content: `Host: @
Type: A
Value: 192.0.2.10`,
        },

        {
          type: "paragraph",
          content:
            "In this example, the root host of the domain is associated with the IPv4 address 192.0.2.10.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Use an A record for IPv4",
          content:
            "If the destination is an IPv4 address, an A record is the appropriate record type. IPv6 addresses use AAAA records instead.",
        },
      ],
    },

    {
      id: "aaaa-record",
      title: "AAAA record",

      description:
        "An AAAA record maps a hostname to an IPv6 address.",

      content: [
        {
          type: "paragraph",
          content:
            "An AAAA record performs a role similar to an A record, but it maps a hostname to an IPv6 address rather than an IPv4 address.",
        },

        {
          type: "code",
          language: "text",
          content: `Host: @
Type: AAAA
Value: 2001:db8::10`,
        },

        {
          type: "paragraph",
          content:
            "AAAA records are used when the service being referenced is available through an IPv6 address.",
        },

        {
          type: "heading",
          content: "A vs. AAAA",
        },

        {
          type: "steps",
          items: [
            {
              id: "a-ipv4",
              title: "A",
              description:
                "Maps a hostname to an IPv4 address.",
            },
            {
              id: "aaaa-ipv6",
              title: "AAAA",
              description:
                "Maps a hostname to an IPv6 address.",
            },
          ],
        },
      ],
    },

    {
      id: "cname-record",
      title: "CNAME record",

      description:
        "A CNAME record creates an alias from one hostname to another hostname.",

      content: [
        {
          type: "paragraph",
          content:
            "CNAME stands for Canonical Name. A CNAME record allows one hostname to point to another hostname rather than directly specifying an IP address.",
        },

        {
          type: "code",
          language: "text",
          content: `Host: www
Type: CNAME
Value: example.com`,
        },

        {
          type: "paragraph",
          content:
            "In this example, www.example.com is configured as an alias for example.com. The target is another hostname, not an IP address.",
        },

        {
          type: "heading",
          content: "When is CNAME useful?",
        },

        {
          type: "paragraph",
          content:
            "CNAME records are useful when a service provides a hostname that another hostname should reference. This allows the target hostname to control the underlying destination without requiring the alias to contain an IP address directly.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "A CNAME points to a hostname",
          content:
            "A CNAME value should identify another hostname. If you need to point directly to an IPv4 or IPv6 address, use an A or AAAA record instead.",
        },
      ],
    },

    {
      id: "mx-record",
      title: "MX record",

      description:
        "An MX record identifies the mail servers responsible for receiving email for a domain.",

      content: [
        {
          type: "paragraph",
          content:
            "MX stands for Mail Exchange. MX records tell receiving mail systems which mail servers should receive email for a domain.",
        },

        {
          type: "code",
          language: "text",
          content: `Host: @
Type: MX
Priority: 10
Value: mail.example.com`,
        },

        {
          type: "paragraph",
          content:
            "The priority field is used when multiple MX records exist. Mail systems can use the priority values to determine the preferred order for mail delivery.",
        },

        {
          type: "heading",
          content: "Why MX records matter",
        },

        {
          type: "paragraph",
          content:
            "Without the appropriate MX configuration, receiving mail systems may not know which mail servers are responsible for accepting email for the domain.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Be careful when changing MX records",
          content:
            "Changing MX records can affect inbound email delivery. Before modifying an MX record, confirm which mail service currently receives email for the domain and whether the new configuration is intended to replace or supplement it.",
        },
      ],
    },

    {
      id: "txt-record",
      title: "TXT record",

      description:
        "TXT records store text-based DNS information and are commonly used for verification and email authentication.",

      content: [
        {
          type: "paragraph",
          content:
            "A TXT record stores text-based information associated with a domain or hostname. TXT records are commonly used for domain verification, email authentication, and other service-specific configuration.",
        },

        {
          type: "heading",
          content: "Common email uses for TXT records",
        },

        {
          type: "steps",
          items: [
            {
              id: "txt-spf",
              title: "SPF",
              description:
                "An SPF policy is published as a TXT record and identifies sending infrastructure authorized by the domain.",
            },
            {
              id: "txt-dkim",
              title: "DKIM",
              description:
                "A DKIM public key is published as a TXT record under the appropriate selector-specific hostname.",
            },
            {
              id: "txt-dmarc",
              title: "DMARC",
              description:
                "A DMARC policy is published as a TXT record at the _dmarc host.",
            },
          ],
        },

        {
          type: "heading",
          content: "Example TXT record",
        },

        {
          type: "code",
          language: "text",
          content: `Host: @
Type: TXT
Value: <TXT-VALUE>`,
        },

        {
          type: "paragraph",
          content:
            "The exact TXT value depends on the service or authentication mechanism being configured. CMR provides the DNS management layer but does not define a universal TXT value for every use case.",
        },

        {
          type: "callout",
          variant: "info",
          title: "TXT records have many uses",
          content:
            "Do not assume every TXT record is an SPF record. The host and value determine what the TXT record is being used for.",
        },
      ],
    },

    {
      id: "ns-record",
      title: "NS record",

      description:
        "An NS record identifies nameservers responsible for DNS information.",

      content: [
        {
          type: "paragraph",
          content:
            "NS stands for Name Server. An NS record identifies the nameservers responsible for providing authoritative DNS information for a domain or DNS zone.",
        },

        {
          type: "code",
          language: "text",
          content: `Host: @
Type: NS
Value: ns1.example-dns.com`,
        },

        {
          type: "paragraph",
          content:
            "Nameservers are an important part of the DNS hierarchy because they determine which DNS infrastructure is authoritative for the domain.",
        },

        {
          type: "heading",
          content: "NS records vs. nameserver configuration",
        },

        {
          type: "paragraph",
          content:
            "An NS record is a DNS record that identifies nameservers. A nameserver update, on the other hand, changes the nameserver configuration used for the domain's DNS delegation. These concepts are related but should not be treated as identical operations.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Nameserver changes affect the entire DNS configuration",
          content:
            "Changing nameservers can change which DNS infrastructure is authoritative for the domain. This is a broader change than updating an individual A, CNAME, MX, or TXT record.",
        },
      ],
    },

    {
      id: "record-types-comparison",
      title: "How the common record types differ",

      description:
        "Use the purpose of the record to determine which type you need.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "comparison-a",
              title: "A",
              description:
                "Use when a hostname needs to point to an IPv4 address.",
            },
            {
              id: "comparison-aaaa",
              title: "AAAA",
              description:
                "Use when a hostname needs to point to an IPv6 address.",
            },
            {
              id: "comparison-cname",
              title: "CNAME",
              description:
                "Use when one hostname should point to another hostname.",
            },
            {
              id: "comparison-mx",
              title: "MX",
              description:
                "Use to identify mail servers responsible for receiving email.",
            },
            {
              id: "comparison-txt",
              title: "TXT",
              description:
                "Use for text-based configuration such as SPF, DKIM, DMARC, and domain verification.",
            },
            {
              id: "comparison-ns",
              title: "NS",
              description:
                "Use to identify nameservers responsible for DNS information.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Choose the record based on the destination",
          content:
            "If you are pointing to an IP address, think A or AAAA. If you are pointing to another hostname, think CNAME. For email delivery, think MX. For text-based verification or authentication, think TXT.",
        },
      ],
    },

    {
      id: "common-hosts",
      title: "Common hosts you will encounter",

      description:
        "The host field determines where a DNS record belongs within the domain.",

      content: [
        {
          type: "paragraph",
          content:
            "The same DNS record type can be used at different hosts depending on the service being configured. Understanding common host values makes DNS configuration easier to read.",
        },

        {
          type: "steps",
          items: [
            {
              id: "host-root",
              title: "@",
              description:
                "Represents the root of the domain in CMR DNS record management. It is commonly used for root-domain A, AAAA, MX, or TXT records.",
            },
            {
              id: "host-www",
              title: "www",
              description:
                "Represents the www subdomain, such as www.example.com.",
            },
            {
              id: "host-mail",
              title: "mail",
              description:
                "Can represent mail.example.com when a service uses that hostname.",
            },
            {
              id: "host-dmarc",
              title: "_dmarc",
              description:
                "Commonly used for the domain's DMARC TXT record.",
            },
            {
              id: "host-domainkey",
              title: "<selector>._domainkey",
              description:
                "Used for selector-specific DKIM TXT records. The actual selector depends on the email infrastructure.",
            },
          ],
        },

        {
          type: "paragraph",
          content:
            "The host should always be chosen according to the DNS configuration required by the service. Do not assume that a particular host works for every record type.",
        },
      ],
    },

    {
      id: "cmr-record-types",
      title: "Using record types in CMR",

      description:
        "The recordType field tells CMR what type of DNS record you are creating or managing.",

      content: [
        {
          type: "paragraph",
          content:
            "When using CMR's DNS API, the recordType field specifies the type of DNS record being managed. Common values include A, CNAME, MX, TXT, and NS.",
        },

        {
          type: "heading",
          content: "Example: creating an A record",
        },

        {
          type: "code",
          language: "json",
          content: `{
  "domain": "example.com",
  "records": [
    {
      "host": "@",
      "value": "192.0.2.10",
      "recordType": "A"
    }
  ]
}`,
        },

        {
          type: "heading",
          content: "Example: creating an MX record",
        },

        {
          type: "code",
          language: "json",
          content: `{
  "domain": "example.com",
  "records": [
    {
      "host": "@",
      "value": "mail.example.com",
      "recordType": "MX",
      "priority": "10"
    }
  ]
}`,
        },

        {
          type: "heading",
          content: "Example: creating a TXT record",
        },

        {
          type: "code",
          language: "json",
          content: `{
  "domain": "example.com",
  "records": [
    {
      "host": "_dmarc",
      "value": "<DMARC-POLICY>",
      "recordType": "TXT"
    }
  ]
}`,
        },

        {
          type: "callout",
          variant: "warning",
          title: "Record type must match the value",
          content:
            "Do not submit an IP address as a CNAME value or an email server as an A record value. The record type determines how the value is interpreted by DNS.",
        },
      ],
    },

    {
      id: "choosing-record",
      title: "How to choose the right record type",

      description:
        "Start with what you are trying to configure, then select the DNS record type designed for that purpose.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "choose-ipv4",
              title: "You need to point to an IPv4 address",
              description:
                "Use an A record.",
            },
            {
              id: "choose-ipv6",
              title: "You need to point to an IPv6 address",
              description:
                "Use an AAAA record.",
            },
            {
              id: "choose-hostname",
              title: "You need one hostname to reference another hostname",
              description:
                "Use a CNAME record.",
            },
            {
              id: "choose-email",
              title: "You need to configure inbound email delivery",
              description:
                "Use MX records.",
            },
            {
              id: "choose-text",
              title: "You need to publish text-based verification or authentication",
              description:
                "Use a TXT record.",
            },
            {
              id: "choose-nameserver",
              title: "You need to identify authoritative DNS infrastructure",
              description:
                "Use NS records or the appropriate nameserver configuration.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "If you are following a provider's DNS instructions",
          content:
            "Use the record type, host, and value exactly as provided by the service you are configuring. Provider documentation should take precedence over assumptions about which record type is required.",
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common mistakes",

      description:
        "Incorrect record types or mismatched values are common causes of DNS configuration problems.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "mistake-a-cname",
              title: "Using CNAME when the destination is an IP address",
              description:
                "CNAME records point to hostnames. Use A or AAAA when the destination is an IP address.",
            },
            {
              id: "mistake-mx",
              title: "Using an IP address as an MX value",
              description:
                "MX records identify mail server hostnames. Make sure the value matches the mail service's documented configuration.",
            },
            {
              id: "mistake-txt",
              title: "Putting authentication records under the wrong host",
              description:
                "SPF, DKIM, and DMARC records use specific host patterns. For example, DMARC is published at _dmarc.",
            },
            {
              id: "mistake-dkim",
              title: "Using the wrong DKIM selector",
              description:
                "DKIM records are selector-specific. Use the exact selector and public key provided by the email infrastructure.",
            },
            {
              id: "mistake-ns",
              title: "Confusing NS records with a nameserver update",
              description:
                "An NS record and a domain nameserver configuration are related but represent different parts of DNS management.",
            },
            {
              id: "mistake-type",
              title: "Choosing a record type based only on the value",
              description:
                "The intended service and DNS behavior should determine the record type, not simply the format of the value.",
            },
          ],
        },
      ],
    },

    {
      id: "important-things",
      title: "Important things to remember",

      description:
        "Keep these rules in mind when creating or reviewing DNS records.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "important-a",
              title: "A means IPv4",
              description:
                "Use A records when mapping a hostname to an IPv4 address.",
            },
            {
              id: "important-aaaa",
              title: "AAAA means IPv6",
              description:
                "Use AAAA records when mapping a hostname to an IPv6 address.",
            },
            {
              id: "important-cname",
              title: "CNAME means hostname alias",
              description:
                "A CNAME points to another hostname rather than directly to an IP address.",
            },
            {
              id: "important-mx",
              title: "MX means mail delivery",
              description:
                "MX records identify mail servers responsible for receiving email.",
            },
            {
              id: "important-txt",
              title: "TXT has many uses",
              description:
                "TXT records can contain SPF, DKIM, DMARC, verification, and other text-based DNS configuration.",
            },
            {
              id: "important-ns",
              title: "NS identifies nameservers",
              description:
                "NS records identify nameservers responsible for DNS information.",
            },
            {
              id: "important-host",
              title: "The host matters",
              description:
                "The same record type can serve different purposes depending on where it is published within the domain.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "What to read next",

      description:
        "Continue with the DNS guides that explain how to manage and troubleshoot these record types in CMR.",

      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "dns-fundamentals",
              title:
                "DNS Fundamentals: Records, Hosts, Nameservers & Zones",
              description:
                "Understand the core DNS concepts and how records, nameservers, and zones fit together.",
              href: "/concepts/dns/dns-fundamentals",
            },
            {
              id: "spf-dkim-dmarc",
              title:
                "SPF, DKIM & DMARC — What They Do and Who Manages Them",
              description:
                "Understand email authentication and the DNS records used for SPF, DKIM, and DMARC.",
              href: "/concepts/dns/spf-dkim-dmarc",
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
                "Learn how to identify the correct existing DNS record before modifying it.",
              href: "/concepts/dns/record-id",
            },
            {
              id: "nameservers",
              title: "Updating Nameservers Safely",
              description:
                "Understand how nameserver updates work and what to verify before making a change.",
              href: "/concepts/dns/nameservers",
            },
            {
              id: "dns-propagation",
              title:
                "DNS Propagation: What Changes, Why It Takes Time & How to Verify",
              description:
                "Understand DNS caching and how to verify that DNS changes have propagated.",
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