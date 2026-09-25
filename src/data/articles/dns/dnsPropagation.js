export const dnsPropagationArticle = {
  id: "dns-propagation",

  slug: "/concepts/dns/dns-propagation",

  category: {
    id: "dns",
    label: "DNS",
    slug: "/concepts/dns",
  },

  title:
    "DNS Propagation: What Changes, Why It Takes Time & How to Verify",

  description:
    "Understand what DNS propagation means, why DNS changes are not always visible immediately, how record and nameserver changes differ, and how to verify that a DNS change has taken effect.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "A successful DNS update does not always mean that the new value is immediately visible everywhere on the internet. DNS information can be cached by resolvers, so different DNS resolvers may temporarily return different results after a change. This guide explains what propagation means, why delays happen, how CMR DNS updates differ from external DNS visibility, and how to verify that a change has reached external resolvers.",

  sections: [
    {
      id: "what-is-dns-propagation",
      title: "What is DNS propagation?",

      description:
        "DNS propagation describes the period during which a DNS change becomes visible through DNS resolvers and other systems that cache DNS information.",

      content: [
        {
          type: "paragraph",
          content:
            "When you add, update, or delete a DNS record, the change does not necessarily appear immediately in every DNS resolver around the world.",
        },

        {
          type: "paragraph",
          content:
            "DNS resolvers cache DNS responses for a period of time. If a resolver still has an older response in its cache, it may continue returning the previous DNS value until that cached information expires and the resolver retrieves the updated information.",
        },

        {
          type: "paragraph",
          content:
            "This is commonly referred to as DNS propagation. It does not mean that the DNS record is physically copied from one server to every other server. It primarily describes the time required for cached DNS information to expire and for resolvers to retrieve the current configuration.",
        },

        {
          type: "callout",
          variant: "info",
          title: "Propagation is different from the API update",
          content:
            "A successful CMR DNS API response confirms that the DNS management operation was accepted. It does not guarantee that every external DNS resolver is already returning the new value.",
        },
      ],
    },

    {
      id: "why-changes-take-time",
      title: "Why does a DNS change take time?",

      description:
        "DNS caching allows resolvers to reuse previously retrieved information instead of querying the authoritative DNS infrastructure for every request.",

      content: [
        {
          type: "paragraph",
          content:
            "DNS resolvers cache responses to improve performance and reduce unnecessary DNS traffic. The amount of time a DNS response can remain cached is influenced by the record's TTL and the behavior of the resolver.",
        },

        {
          type: "paragraph",
          content:
            "Because different resolvers may have cached the previous value at different times, they may not all refresh their information at exactly the same moment.",
        },

        {
          type: "heading",
          content: "A simplified propagation sequence",
        },

        {
          type: "steps",
          items: [
            {
              id: "propagation-change",
              title: "1. DNS configuration is changed",
              description:
                "A DNS record is added, updated, or deleted through the appropriate DNS management system.",
            },
            {
              id: "propagation-cache",
              title: "2. Existing cached responses remain available",
              description:
                "Some DNS resolvers may still have the previous DNS response in their cache.",
            },
            {
              id: "propagation-expire",
              title: "3. Cached information expires",
              description:
                "The resolver's cached response reaches the end of its applicable caching period.",
            },
            {
              id: "propagation-refresh",
              title: "4. The resolver retrieves current information",
              description:
                "The resolver requests the current DNS information and begins returning the updated result.",
            },
          ],
        },
      ],
    },

    {
      id: "ttl",
      title: "What is TTL and how does it relate to propagation?",

      description:
        "TTL controls how long DNS information can be cached before a resolver needs to obtain fresh information.",

      content: [
        {
          type: "paragraph",
          content:
            "TTL stands for Time to Live. In DNS, TTL is associated with how long a DNS response can be cached by a resolver before it should retrieve fresh information.",
        },

        {
          type: "paragraph",
          content:
            "A cached DNS response does not necessarily disappear immediately when a record is changed. A resolver can continue using the response it already cached until its applicable TTL expires.",
        },

        {
          type: "heading",
          content: "Why TTL matters when changing DNS",
        },

        {
          type: "paragraph",
          content:
            "If a DNS record had previously been cached with a particular TTL, changing the record does not necessarily invalidate every existing cached response immediately. Some resolvers may therefore continue returning the previous value for a period of time.",
        },

        {
          type: "callout",
          variant: "info",
          title: "TTL is not a guaranteed propagation timer",
          content:
            "TTL helps explain DNS caching behavior, but it should not be treated as a precise guarantee that every resolver will update at exactly the same time.",
        },
      ],
    },

    {
      id: "cmr-update-vs-external",
      title: "CMR update vs. external DNS visibility",

      description:
        "There are two separate things to verify after making a DNS change.",

      content: [
        {
          type: "paragraph",
          content:
            "When managing DNS through CMR, you should distinguish between the result of the DNS management operation and the result returned by an external DNS resolver.",
        },

        {
          type: "heading",
          content: "CMR confirms the management operation",
        },

        {
          type: "paragraph",
          content:
            "After adding or updating a DNS record, the CMR DNS API can be used to retrieve the domain's DNS configuration and confirm that the expected record is present.",
        },

        {
          type: "heading",
          content: "External resolvers confirm DNS visibility",
        },

        {
          type: "paragraph",
          content:
            "External DNS lookups show what DNS resolvers are currently returning for the domain. This is useful when you need to determine whether a change is visible outside the CMR DNS management layer.",
        },

        {
          type: "steps",
          items: [
            {
              id: "verification-cmr",
              title: "Check the record in CMR",
              description:
                "Retrieve the DNS records and confirm that the expected host, record type, and value are present.",
            },
            {
              id: "verification-external",
              title: "Check an external resolver",
              description:
                "Query the domain through an external DNS resolver or DNS lookup tool and compare the returned value with the expected configuration.",
            },
            {
              id: "verification-wait",
              title: "Allow time if results differ",
              description:
                "If CMR shows the new value but an external resolver still returns the old value, allow time for cached DNS information to expire and refresh.",
            },
          ],
        },
      ],
    },

    {
      id: "verify-record-change",
      title: "How to verify a DNS record change",

      description:
        "Use CMR first to confirm the configured record, then use external DNS lookups to check what resolvers are returning.",

      content: [
        {
          type: "paragraph",
          content:
            "Suppose you update a DNS record for example.com. The first step is to confirm that CMR has the expected record configuration.",
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
            "Review the returned DNS records and confirm the record's host, value, and record type. For an update or deletion workflow, also confirm that you are working with the intended recordId.",
        },

        {
          type: "heading",
          content: "Then verify the change externally",
        },

        {
          type: "steps",
          items: [
            {
              id: "external-host",
              title: "Check the correct hostname",
              description:
                "Make sure the DNS lookup uses the hostname affected by the change. For example, a DMARC record should be checked at _dmarc.example.com rather than only at example.com.",
            },
            {
              id: "external-type",
              title: "Check the correct record type",
              description:
                "Query the appropriate DNS record type, such as A, MX, CNAME, or TXT.",
            },
            {
              id: "external-value",
              title: "Compare the returned value",
              description:
                "Compare the externally returned value with the value you intended to publish through CMR.",
            },
            {
              id: "external-resolver",
              title: "Compare multiple resolvers when necessary",
              description:
                "If you suspect propagation differences, checking more than one external resolver can help determine whether different caches are returning different results.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "Different resolvers can temporarily disagree",
          content:
            "After a DNS change, one resolver may return the new value while another still returns the previous value. This does not automatically mean that the CMR update failed.",
        },
      ],
    },

    {
      id: "record-types-propagation",
      title: "Do all DNS changes propagate in the same way?",

      description:
        "The verification process depends on what type of DNS configuration you changed.",

      content: [
        {
          type: "paragraph",
          content:
            "The general caching principle applies to DNS records broadly, but the practical impact of a change depends on the record and the service that uses it.",
        },

        {
          type: "steps",
          items: [
            {
              id: "propagation-a",
              title: "A and AAAA records",
              description:
                "Changes can affect where a hostname resolves for web or other services using the corresponding IP address.",
            },
            {
              id: "propagation-cname",
              title: "CNAME records",
              description:
                "Changes can affect which hostname an alias resolves to.",
            },
            {
              id: "propagation-mx",
              title: "MX records",
              description:
                "Changes can affect where receiving mail systems attempt to deliver email for the domain.",
            },
            {
              id: "propagation-txt",
              title: "TXT records",
              description:
                "Changes can affect verification and email authentication systems that read TXT records.",
            },
          ],
        },

        {
          type: "paragraph",
          content:
            "For this reason, verification should always focus on the actual DNS record and service affected by the change rather than assuming that all DNS changes have the same visible effect.",
        },
      ],
    },

    {
      id: "nameserver-propagation",
      title: "Nameserver changes are different",

      description:
        "Updating nameservers changes the DNS infrastructure that is authoritative for the domain and therefore requires additional care.",

      content: [
        {
          type: "paragraph",
          content:
            "A normal DNS record update changes information inside the existing DNS configuration. A nameserver update is different because it changes which nameservers are authoritative for the domain.",
        },

        {
          type: "paragraph",
          content:
            "Because nameserver changes affect the delegation of the domain, the transition can take longer to become consistently visible across DNS resolvers.",
        },

        {
          type: "paragraph",
          content:
            "CMR documents that nameserver updates can take up to 48 hours to propagate. This should be treated as an expected upper window rather than a guarantee that every resolver will update at exactly the same time.",
        },

        {
          type: "heading",
          content: "What should you verify after changing nameservers?",
        },

        {
          type: "steps",
          items: [
            {
              id: "ns-intended",
              title: "Confirm the intended nameserver list",
              description:
                "Make sure the complete nameserver configuration submitted to CMR is correct.",
            },
            {
              id: "ns-external",
              title: "Check the domain's NS records externally",
              description:
                "Use external DNS lookup tools or resolvers to check which nameservers are currently being returned for the domain.",
            },
            {
              id: "ns-services",
              title: "Verify the services using the domain",
              description:
                "After the nameserver change becomes visible, verify that the required DNS records and services are available through the new authoritative DNS configuration.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not treat a nameserver change like a normal record update",
          content:
            "A nameserver update can change the authoritative DNS infrastructure for the entire domain. Verify the complete nameserver configuration before making the change and allow additional time for the delegation change to propagate.",
        },
      ],
    },

    {
      id: "when-change-not-visible",
      title: "What if the new DNS value is not visible?",

      description:
        "A missing change does not always mean that the DNS update failed.",

      content: [
        {
          type: "paragraph",
          content:
            "If CMR shows the updated record but an external DNS lookup still returns the previous value, the difference may be caused by DNS caching and propagation.",
        },

        {
          type: "heading",
          content: "Check these things first",
        },

        {
          type: "steps",
          items: [
            {
              id: "not-visible-record",
              title: "Confirm the correct record",
              description:
                "Make sure you are checking the correct hostname and DNS record type.",
            },
            {
              id: "not-visible-cmr",
              title: "Confirm the CMR configuration",
              description:
                "Use GET /dns to verify that CMR contains the intended record value.",
            },
            {
              id: "not-visible-resolver",
              title: "Check another resolver",
              description:
                "If one resolver still shows the old value, compare the result with another DNS resolver.",
            },
            {
              id: "not-visible-cache",
              title: "Allow time for cached information to expire",
              description:
                "If different resolvers return different results, the DNS change may still be propagating through cached responses.",
            },
            {
              id: "not-visible-config",
              title: "Check the DNS configuration itself",
              description:
                "If the expected value does not appear through any external resolver after sufficient time, re-check the record configuration and the authoritative DNS setup.",
            },
          ],
        },

        {
          type: "callout",
          variant: "warning",
          title: "Do not immediately repeat the same DNS update",
          content:
            "If CMR already contains the correct configuration, repeatedly submitting the same update may not make cached external responses change faster. Verify the authoritative configuration and allow the DNS system time to refresh.",
        },
      ],
    },

    {
      id: "propagation-example",
      title: "Example: updating an SPF record",

      description:
        "A simple example shows why the CMR response and external DNS response can temporarily differ.",

      content: [
        {
          type: "paragraph",
          content:
            "Suppose the SPF TXT record for example.com is updated through CMR from an old value to a new value.",
        },

        {
          type: "steps",
          items: [
            {
              id: "spf-change",
              title: "The SPF record is updated",
              description:
                "The new TXT record value is submitted through the CMR DNS API.",
            },
            {
              id: "spf-cmr",
              title: "CMR returns the updated configuration",
              description:
                "A subsequent GET /dns request shows the new SPF value in the DNS records returned by CMR.",
            },
            {
              id: "spf-old-cache",
              title: "Some external resolvers still show the old value",
              description:
                "Resolvers that cached the previous SPF response may continue returning that value until their cached information expires.",
            },
            {
              id: "spf-new",
              title: "Resolvers refresh",
              description:
                "As cached information expires and resolvers retrieve the current DNS configuration, they begin returning the new SPF value.",
            },
          ],
        },

        {
          type: "paragraph",
          content:
            "During this period, different DNS lookup tools may temporarily produce different results. The important distinction is between the configured DNS state and what a particular resolver currently has cached.",
        },
      ],
    },

    {
      id: "verification-checklist",
      title: "DNS propagation verification checklist",

      description:
        "Use this checklist after making an important DNS change.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "check-domain",
              title: "Confirm the domain",
              description:
                "Make sure the DNS change was made for the intended domain.",
            },
            {
              id: "check-record",
              title: "Confirm the record",
              description:
                "Check the host, record type, value, and recordId where applicable.",
            },
            {
              id: "check-cmr",
              title: "Verify through CMR",
              description:
                "Retrieve the DNS records and confirm that the intended configuration is present.",
            },
            {
              id: "check-external",
              title: "Verify externally",
              description:
                "Query the relevant DNS record through an external DNS resolver or lookup service.",
            },
            {
              id: "check-multiple",
              title: "Compare resolvers if necessary",
              description:
                "If results appear inconsistent, compare multiple resolvers to determine whether the difference is likely related to caching.",
            },
            {
              id: "check-wait",
              title: "Allow time for propagation",
              description:
                "Give DNS resolvers time to refresh cached information before concluding that a valid configuration change has failed.",
            },
          ],
        },

        {
          type: "callout",
          variant: "info",
          title: "The goal of verification",
          content:
            "You want to establish both that CMR contains the intended DNS configuration and that external DNS resolvers are returning the expected result.",
        },
      ],
    },

    {
      id: "important-things",
      title: "Important things to remember",

      description:
        "Keep these principles in mind whenever you change DNS.",

      content: [
        {
          type: "steps",
          items: [
            {
              id: "important-api",
              title: "A successful API request is not global DNS propagation",
              description:
                "The CMR API confirms the management operation, while external DNS lookups show what resolvers are currently returning.",
            },
            {
              id: "important-cache",
              title: "DNS resolvers cache responses",
              description:
                "Older DNS values can remain visible through cached responses until the relevant caching period expires.",
            },
            {
              id: "important-different",
              title: "Resolvers can temporarily return different values",
              description:
                "Different resolvers may refresh their cached information at different times.",
            },
            {
              id: "important-ns",
              title: "Nameserver changes require extra care",
              description:
                "Changing nameservers changes the authoritative DNS infrastructure for the domain and can take longer to propagate.",
            },
            {
              id: "important-verify",
              title: "Always verify important changes",
              description:
                "Check the CMR configuration and use external DNS lookups when you need to confirm propagation.",
            },
            {
              id: "important-not-retry",
              title: "Do not assume a delayed result means the update failed",
              description:
                "If CMR contains the correct configuration, an older external result may simply be a cached DNS response.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "What to read next",

      description:
        "Continue with the DNS guides that explain record management, nameservers, and troubleshooting.",

      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "dns-fundamentals",
              title: "DNS Fundamentals: Records, Hosts, Nameservers & Zones",
              description:
                "Understand the core DNS concepts before managing records and nameservers.",
              href: "/concepts/dns/dns-fundamentals",
            },
            {
              id: "dns-record-types",
              title: "DNS Record Types Explained: A, AAAA, CNAME, MX, TXT & NS",
              description:
                "Understand what the most common DNS record types do and when to use them.",
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
              id: "nameservers",
              title: "Updating Nameservers Safely",
              description:
                "Learn how CMR handles nameserver updates and what to verify before and after changing them.",
              href: "/concepts/dns/nameservers",
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