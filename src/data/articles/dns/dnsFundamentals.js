export const dnsFundamentalsArticle = {
  id: "dns-fundamentals",

  slug: "/concepts/dns/dns-fundamentals",

  category: {
    id: "dns",
    label: "DNS",
    slug: "/concepts/dns",
  },

  title: "DNS Fundamentals: Records, Hosts, Nameservers & Zones",

  description:
    "Understand how DNS works, what domains, hosts, DNS records, nameservers, and DNS zones mean, and how these concepts fit together when managing domains in CMR.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "DNS is the system that connects domain names to the services and infrastructure that use them. When managing domains in CMR, you will work with DNS records, hosts, nameservers, and DNS zones. Understanding how these pieces fit together makes it easier to add records, update DNS configuration, troubleshoot changes, and understand what happens when nameservers are changed.",

  sections: [
    {
      id: "what-is-dns",
      title: "What is DNS?",

      description:
        "DNS translates human-readable domain names into information that internet services can use.",

      content: [
        {
          type: "paragraph",
          content:
            "DNS stands for Domain Name System. It is the system used to map domain names to DNS information such as IP addresses, mail servers, aliases, and other service configuration.",
        },

        {
          type: "paragraph",
          content:
            "Instead of requiring users and applications to remember infrastructure-specific addresses, DNS allows services to be referenced using domain names such as example.com.",
        },

        {
          type: "paragraph",
          content:
            "DNS is not limited to websites. Email delivery, domain verification, authentication, service discovery, and many other internet services rely on DNS records.",
        },

        {
          type: "callout",
          variant: "info",
          title: "In CMR",
          content:
            "CMR provides DNS management APIs for domains registered under the Partner account. These APIs allow you to retrieve, add, update, and delete DNS records and update nameservers for supported domains.",
        },
      ],
    },

    {
      id: "domain-hostname-host",
      title: "Domain, hostname, and host: what's the difference?",

      description:
        "These terms are related, but they describe different parts of a DNS name.",

      content: [
        {
          type: "paragraph",
          content:
            "A domain is the registered name that forms the foundation of your DNS configuration. For example, example.com is a domain.",
        },

        {
          type: "paragraph",
          content:
            "A hostname is a complete DNS name that identifies a particular location or service within the DNS hierarchy. For example, mail.example.com is a hostname associated with the example.com domain.",
        },

        {
          type: "paragraph",
          content:
            "In CMR DNS record management, the host field identifies the part of the DNS name to which a record belongs. Depending on the record, the host can be @, mail, _dmarc, mail._domainkey, or another value.",
        },

        {
          type: "heading",
          content: "A simple example",
        },

        {
          type: "steps",
          items: [
            {
              id: "domain-example",
              title: "Domain",
              description:
                "example.com is the registered domain.",
            },
            {
              id: "root-host-example",
              title: "Root host",
              description:
                "@ represents the root of the domain when managing DNS records.",
            },
            {
              id: "mail-host-example",
              title: "Subdomain host",
              description:
                "mail can represent the mail.example.com hostname when used as a DNS record host.",
            },
            {
              id: "dmarc-host-example",
              title: "Service-specific host",
              description:
                "_dmarc is commonly used as the host for a domain's DMARC TXT record.",
            },
          ],
        },

        {
          type: "paragraph",
          content:
            "The exact host value depends on the DNS record being created. The host does not represent the record type itself; it identifies where that record belongs within the domain's DNS namespace.",
        },
      ],
    },

    {
      id: "what-is-dns-record",
      title: "What is a DNS record?",

      description:
        "A DNS record stores a specific piece of configuration for a domain.",

      content: [
        {
          type: "paragraph",
          content:
            "A DNS record is an individual piece of information stored in a DNS zone. Different record types are used for different purposes, such as directing web traffic, routing email, creating aliases, or publishing verification and authentication information.",
        },

        {
          type: "paragraph",
          content:
            "A CMR DNS record contains fields such as the host, value, record type, and, where applicable, priority. CMR also returns a recordId that identifies the individual record.",
        },

        {
          type: "heading",
          content: "CMR record fields",
        },

        {
          type: "steps",
          items: [
            {
              id: "record-host",
              title: "host",
              description:
                "Identifies where the DNS record belongs within the domain, such as @, mail, or _dmarc.",
            },
            {
              id: "record-value",
              title: "value",
              description:
                "Contains the destination, address, text, or other configuration represented by the record.",
            },
            {
              id: "record-type",
              title: "recordType",
              description:
                "Defines what kind of DNS record it is, such as A, CNAME, MX, TXT, or NS.",
            },
            {
              id: "record-priority",
              title: "priority",
              description:
                "An optional field used for record types such as MX where multiple records can have different priorities.",
            },
            {
              id: "record-id",
              title: "recordId",
              description:
                "Identifies the specific DNS record in CMR and is required when updating or deleting an existing record.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "A DNS record is more than a value",
          content:
            "When managing DNS, make sure the host, record type, and value all belong together. Two records can have similar values but serve completely different purposes because their hosts or record types differ.",
        },
      ],
    },

    {
      id: "common-records",
      title: "The DNS records you will commonly encounter",

      description:
        "Different DNS record types control different parts of a domain's infrastructure.",

      content: [
        {
          type: "paragraph",
          content:
            "CMR supports common DNS record types including A, CNAME, MX, TXT, NS, and other record types supported by the underlying DNS management system.",
        },

        {
          type: "steps",
          items: [
            {
              id: "record-a",
              title: "A",
              description:
                "Maps a hostname to an IPv4 address. A records are commonly used when a domain or hostname needs to point directly to an IPv4 address.",
            },
            {
              id: "record-aaaa",
              title: "AAAA",
              description:
                "Maps a hostname to an IPv6 address.",
            },
            {
              id: "record-cname",
              title: "CNAME",
              description:
                "Creates an alias from one hostname to another hostname.",
            },
            {
              id: "record-mx",
              title: "MX",
              description:
                "Specifies mail servers responsible for receiving email for a domain. MX records can use priority values when multiple mail servers are configured.",
            },
            {
              id: "record-txt",
              title: "TXT",
              description:
                "Stores text-based DNS information. TXT records are commonly used for verification, SPF, DKIM, DMARC, and other domain configuration.",
            },
            {
              id: "record-ns",
              title: "NS",
              description:
                "Identifies the nameservers responsible for DNS information for a domain or DNS zone.",
            },
          ],
        },

        {
          type: "paragraph",
          content:
            "You do not need to memorize every DNS record type before working with CMR. The important concept is that the record type determines how the DNS information should be interpreted.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Record types are covered separately",
          content:
            "For a deeper explanation of A, AAAA, CNAME, MX, TXT, and NS records, see DNS Record Types Explained.",
        },
      ],
    },

    {
      id: "nameserver",
      title: "What is a nameserver?",

      description:
        "Nameservers tell the DNS system where the authoritative DNS information for a domain is managed.",

      content: [
        {
          type: "paragraph",
          content:
            "A nameserver is a DNS server responsible for providing DNS information for a domain or DNS zone.",
        },

        {
          type: "paragraph",
          content:
            "When a domain's nameservers are configured, they identify the DNS infrastructure that should be consulted for authoritative DNS information about that domain.",
        },

        {
          type: "paragraph",
          content:
            "This makes nameservers different from ordinary DNS records. A DNS record contains a particular piece of configuration, while nameservers identify the DNS infrastructure responsible for serving that configuration.",
        },

        {
          type: "heading",
          content: "Why nameservers matter in CMR",
        },

        {
          type: "paragraph",
          content:
            "CMR supports updating the nameservers for supported domains. A nameserver update replaces the configured nameserver list, so the complete intended list should be supplied when performing the update.",
        },

        {
          type: "callout",
          variant: "warning",
          title: "Nameserver changes are significant",
          content:
            "Changing nameservers can change which DNS infrastructure is authoritative for a domain. Make sure the intended nameserver list is correct before submitting an update.",
        },
      ],
    },

    {
      id: "dns-zone",
      title: "What is a DNS zone?",

      description:
        "A DNS zone is the portion of the DNS namespace for which a particular DNS system is authoritative.",

      content: [
        {
          type: "paragraph",
          content:
            "A DNS zone is a collection of DNS records managed together for a particular portion of the DNS namespace.",
        },

        {
          type: "paragraph",
          content:
            "For a typical domain such as example.com, the zone can contain records for the root domain as well as hosts and services under that domain.",
        },

        {
          type: "heading",
          content: "A zone can contain many different records",
        },

        {
          type: "steps",
          items: [
            {
              id: "zone-web",
              title: "Website configuration",
              description:
                "An A or AAAA record can point a hostname toward an IP address used by a web service.",
            },
            {
              id: "zone-alias",
              title: "Aliases",
              description:
                "A CNAME record can point one hostname to another hostname.",
            },
            {
              id: "zone-email",
              title: "Email routing",
              description:
                "MX records can identify the mail servers responsible for receiving email.",
            },
            {
              id: "zone-authentication",
              title: "Email authentication",
              description:
                "TXT records can publish SPF, DKIM, DMARC, and other verification information.",
            },
          ],
        },

        {
          type: "paragraph",
          content:
            "Thinking of a DNS zone as the configuration layer for a domain makes it easier to understand why changing one record does not necessarily affect other records in the same zone.",
        },
      ],
    },

    {
      id: "pieces-fit-together",
      title: "How the pieces fit together",

      description:
        "Domain, nameserver, zone, and DNS records form different layers of the same DNS system.",

      content: [
        {
          type: "paragraph",
          content:
            "The easiest way to understand DNS is to think of these concepts as connected layers rather than separate features.",
        },

        {
          type: "steps",
          items: [
            {
              id: "piece-domain",
              title: "1. Domain",
              description:
                "The registered domain provides the namespace, such as example.com.",
            },
            {
              id: "piece-nameserver",
              title: "2. Nameservers",
              description:
                "The domain's nameservers identify the DNS infrastructure responsible for authoritative DNS information.",
            },
            {
              id: "piece-zone",
              title: "3. DNS zone",
              description:
                "The authoritative DNS infrastructure manages the zone containing the domain's DNS configuration.",
            },
            {
              id: "piece-records",
              title: "4. DNS records",
              description:
                "Individual records inside the zone define specific behaviors such as website routing, email routing, aliases, and authentication.",
            },
          ],
        },

        {
          type: "paragraph",
          content:
            "For example, a domain can use one set of nameservers to serve a zone containing an A record for a website, MX records for email, and TXT records for SPF, DKIM, or DMARC.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Changing a record is different from changing nameservers",
          content:
            "Updating a DNS record changes information inside the DNS configuration. Updating nameservers changes which DNS infrastructure is authoritative for the domain. These are different operations with different consequences.",
        },
      ],
    },

    {
      id: "dns-management-cmr",
      title: "How DNS management works in CMR",

      description:
        "CMR provides API operations for retrieving and managing DNS records and nameservers.",

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
          content: "The main DNS operations",
        },

        {
          type: "steps",
          items: [
            {
              id: "dns-get",
              title: "Get DNS records",
              description:
                "GET /dns retrieves DNS records for a domain. The response can include active records and disabled records.",
            },
            {
              id: "dns-add",
              title: "Add DNS records",
              description:
                "POST /dns adds one or more DNS records. Each record requires the host, value, and record type.",
            },
            {
              id: "dns-update",
              title: "Update a DNS record",
              description:
                "PUT /dns updates an existing record using its recordId and the updated record information.",
            },
            {
              id: "dns-delete",
              title: "Delete a DNS record",
              description:
                "DELETE /dns removes an existing DNS record using its recordId.",
            },
            {
              id: "dns-nameservers",
              title: "Update nameservers",
              description:
                "PUT /dns/nameservers updates the nameserver configuration for a supported domain.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Domain ownership matters",
          content:
            "CMR's DNS operations are scoped to the specified user and domain. Using the wrong userId can result in the domain not being found or the request being rejected.",
        },
      ],
    },

    {
      id: "practical-example",
      title: "A practical example",

      description:
        "Consider a domain that needs website routing, email delivery, and email authentication.",

      content: [
        {
          type: "paragraph",
          content:
            "Suppose you manage example.com and need to configure a website, receive email, and publish email authentication information.",
        },

        {
          type: "steps",
          items: [
            {
              id: "example-website",
              title: "Website",
              description:
                "An A or AAAA record can point the required hostname toward the infrastructure serving the website.",
            },
            {
              id: "example-email",
              title: "Email",
              description:
                "MX records can identify the mail servers responsible for receiving email for example.com.",
            },
            {
              id: "example-spf",
              title: "SPF",
              description:
                "A TXT record at the appropriate host can publish the SPF policy required by the sending infrastructure.",
            },
            {
              id: "example-dkim",
              title: "DKIM",
              description:
                "A selector-specific TXT record can publish the DKIM public key supplied by the email infrastructure.",
            },
            {
              id: "example-dmarc",
              title: "DMARC",
              description:
                "A TXT record at _dmarc can publish the domain's DMARC policy.",
            },
          ],
        },

        {
          type: "paragraph",
          content:
            "All of these records can exist within the DNS configuration for the same domain. Each record serves a different purpose and should be managed according to the requirements of the service using it.",
        },
      ],
    },

    {
      id: "dns-email",
      title: "Why DNS matters for email infrastructure",

      description:
        "Email systems rely heavily on DNS for routing, authentication, and verification.",

      content: [
        {
          type: "paragraph",
          content:
            "DNS plays an important role in email infrastructure. MX records can determine where inbound email should be delivered, while TXT records can publish email authentication and verification information.",
        },

        {
          type: "heading",
          content: "Common email-related DNS records",
        },

        {
          type: "steps",
          items: [
            {
              id: "email-mx",
              title: "MX",
              description:
                "Specifies mail servers responsible for receiving email for the domain.",
            },
            {
              id: "email-spf",
              title: "SPF",
              description:
                "Publishes information about which sending infrastructure is authorized by the domain.",
            },
            {
              id: "email-dkim",
              title: "DKIM",
              description:
                "Publishes the public key used to verify DKIM signatures from the sending infrastructure.",
            },
            {
              id: "email-dmarc",
              title: "DMARC",
              description:
                "Publishes the domain's email authentication policy and reporting configuration.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Incorrect DNS can affect email",
          content:
            "Incorrect MX, SPF, DKIM, or DMARC configuration can affect email routing or authentication. Always verify the host, record type, and value before applying a DNS change.",
        },
      ],
    },

    {
      id: "record-id",
      title: "Why CMR uses a recordId",

      description:
        "CMR uses recordId to identify a specific DNS record when an existing record needs to be changed or removed.",

      content: [
        {
          type: "paragraph",
          content:
            "A domain can contain multiple DNS records, including multiple records of the same type. Because of this, a host and record type alone may not be enough to identify the exact record that should be changed.",
        },

        {
          type: "paragraph",
          content:
            "CMR returns a recordId for DNS records. When updating or deleting an existing record, use the recordId returned by the DNS GET operation to identify the intended record.",
        },

        {
          type: "heading",
          content: "The safe workflow",
        },

        {
          type: "steps",
          items: [
            {
              id: "record-id-get",
              title: "Get the DNS records",
              description:
                "Retrieve the records for the domain using GET /dns.",
            },
            {
              id: "record-id-identify",
              title: "Identify the correct record",
              description:
                "Compare the record's host, value, record type, and other returned fields to make sure it is the record you intend to modify.",
            },
            {
              id: "record-id-use",
              title: "Use the recordId",
              description:
                "Pass the correct recordId to the update or delete operation.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not guess a recordId",
          content:
            "Always obtain the recordId from the DNS response. Using a recordId from another domain or another DNS record can target the wrong resource or cause the request to fail.",
        },
      ],
    },

    {
      id: "dns-not-immediate",
      title: "Why DNS changes are not always immediate",

      description:
        "A successful DNS management request and global DNS visibility are two different things.",

      content: [
        {
          type: "paragraph",
          content:
            "DNS information can be cached by DNS resolvers. When a DNS record changes, external resolvers may continue returning the previous value until their cached information expires and they retrieve the updated record.",
        },

        {
          type: "paragraph",
          content:
            "This means a DNS API operation can succeed while an external DNS lookup still returns the previous value for some period of time.",
        },

        {
          type: "heading",
          content: "What should you verify?",
        },

        {
          type: "steps",
          items: [
            {
              id: "verify-cmr",
              title: "Verify the CMR response",
              description:
                "Confirm that the DNS record exists with the expected host, type, and value in CMR.",
            },
            {
              id: "verify-external",
              title: "Verify through external DNS resolvers",
              description:
                "Check the domain using external DNS lookup tools or resolvers to determine whether the change has become visible outside CMR.",
            },
            {
              id: "verify-time",
              title: "Allow time for propagation",
              description:
                "If the external result has not updated yet, allow time for cached DNS information to expire before assuming that the API operation failed.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "API success does not mean instant global propagation",
          content:
            "Treat the CMR API response and external DNS visibility as separate verification steps. A successful management request confirms the operation was accepted; external lookups confirm what DNS resolvers are currently returning.",
        },
      ],
    },

    {
      id: "important-rules",
      title: "Important CMR DNS rules",

      description:
        "Keep these rules in mind before making DNS changes through CMR.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "rule-user-domain",
              title: "The domain must belong to the specified user",
              description:
                "DNS operations are scoped to the domain owned by the user identified in the request.",
            },
            {
              id: "rule-record-id",
              title: "Updates and deletions require the correct recordId",
              description:
                "Retrieve the record first and use the returned recordId when modifying or deleting an existing record.",
            },
            {
              id: "rule-dmarc",
              title: "DMARC-specific fields have specific requirements",
              description:
                "CMR's excludedDMARCtags field applies to TXT records where the host is _dmarc or starts with _dmarc.",
            },
            {
              id: "rule-nameservers",
              title: "Nameserver updates replace the nameserver list",
              description:
                "When updating nameservers, provide the complete intended nameserver configuration rather than treating the operation as a single-record addition.",
            },
            {
              id: "rule-propagation",
              title: "DNS changes can take time to become visible",
              description:
                "A successful DNS operation does not guarantee immediate visibility through every external resolver.",
            },
            {
              id: "rule-verify",
              title: "Verify important changes",
              description:
                "Check the CMR response and, when necessary, verify the resulting DNS state through external DNS resolvers.",
            },
          ],
        },
      ],
    },

    {
      id: "before-change-dns",
      title: "Before you change DNS",

      description:
        "A few checks can prevent accidental DNS misconfiguration.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "before-domain",
              title: "Confirm the domain",
              description:
                "Make sure you are working with the intended domain.",
            },
            {
              id: "before-user",
              title: "Confirm the userId",
              description:
                "Make sure the domain is associated with the user identified in the DNS request.",
            },
            {
              id: "before-record",
              title: "Identify the exact record",
              description:
                "For updates or deletions, retrieve the DNS records first and identify the correct recordId.",
            },
            {
              id: "before-values",
              title: "Check the values",
              description:
                "Confirm the host, record type, and value before submitting the change.",
            },
            {
              id: "before-impact",
              title: "Consider the service using the record",
              description:
                "A DNS record may control website routing, email delivery, authentication, or another service. Understand its purpose before changing it.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Be especially careful with nameservers",
          content:
            "A record change modifies specific DNS information. A nameserver change can change which DNS infrastructure is authoritative for the domain, so verify the complete nameserver configuration before submitting it.",
        },
      ],
    },

    {
      id: "continue-with-dns",
      title: "What to read next",

      description:
        "Now that you understand the DNS fundamentals, continue with the specific DNS workflows and record types used in CMR.",

      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "dns-record-types",
              title: "DNS Record Types Explained: A, AAAA, CNAME, MX, TXT & NS",
              description:
                "Understand the most common DNS record types and when each one is used.",
              href: "/concepts/dns/dns-record-types",
            },
            {
              id: "spf-dkim-dmarc",
              title: "SPF, DKIM & DMARC — What They Do and Who Manages Them",
              description:
                "Learn how email authentication records work and how they relate to DNS management.",
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
                "Understand how to identify the correct DNS record before updating or deleting it.",
              href: "/concepts/dns/record-id",
            },
            {
              id: "nameservers",
              title: "Updating Nameservers Safely",
              description:
                "Understand how nameserver changes work and what to verify before and after an update.",
              href: "/concepts/dns/nameservers",
            },
            {
              id: "dns-propagation",
              title:
                "DNS Propagation: What Changes, Why It Takes Time & How to Verify",
              description:
                "Learn why DNS changes take time to appear and how to verify propagation.",
              href: "/concepts/dns/dns-propagation",
            },
          ],
        },
      ],
    },
  ],
};