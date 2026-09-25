export const dnsCategory = {
  id: "dns",
  label: "DNS",
  slug: "/concepts/dns",
  title: "DNS",
  description:
    "Understand how DNS works, how CMR manages DNS records and nameservers, and how to configure, update, verify, and troubleshoot domain DNS settings.",
  articles: [
    {
      id: "dns-fundamentals",
      title: "DNS Fundamentals: Records, Hosts, Nameservers & Zones",
      slug: "/concepts/dns/dns-fundamentals",
      description:
        "Understand how DNS works, what records and hosts represent, how nameservers fit into the DNS hierarchy, and how domains are connected to their DNS configuration.",
    },
    {
      id: "dns-record-types",
      title: "DNS Record Types Explained: A, AAAA, CNAME, MX, TXT & NS",
      slug: "/concepts/dns/dns-record-types",
      description:
        "Learn what the most common DNS record types do, when they are used, and how they relate to domains, websites, email, and DNS infrastructure.",
    },
    {
      id: "spf-dkim-dmarc",
      title: "SPF, DKIM & DMARC — What They Do and Who Manages Them",
      slug: "/concepts/dns/spf-dkim-dmarc",
      description:
        "Understand how SPF, DKIM, and DMARC work together, which DNS records they use, what each record controls, and how they relate to CMR domain and DNS management.",
    },
    {
      id: "dns-records",
      title: "Adding, Updating & Deleting DNS Records",
      slug: "/concepts/dns/dns-records",
      description:
        "Learn how to add, update, retrieve, and delete DNS records through CMR, including the fields required for each operation.",
    },
    {
      id: "record-id",
      title: "Understanding recordId: Finding the Record You Need to Update or Delete",
      slug: "/concepts/dns/record-id",
      description:
        "Understand what recordId means in CMR, where to find it, why it is required for updates and deletions, and how to safely identify the correct DNS record.",
    },
    {
      id: "nameservers",
      title: "Updating Nameservers Safely",
      slug: "/concepts/dns/nameservers",
      description:
        "Understand what nameservers control, how CMR's nameserver update flow works, what happens when the nameserver list changes, and how to verify the change.",
    },
    {
      id: "dns-propagation",
      title: "DNS Propagation: What Changes, Why It Takes Time & How to Verify",
      slug: "/concepts/dns/dns-propagation",
      description:
        "Understand why DNS changes are not always visible immediately, how propagation differs from a successful API update, and how to verify changes externally.",
    },
    {
      id: "dns-troubleshooting",
      title: "DNS Troubleshooting: When a Record Isn't Working",
      slug: "/concepts/dns/dns-troubleshooting",
      description:
        "Troubleshoot missing, incorrect, or delayed DNS records and understand the most common causes of DNS configuration issues in CMR.",
    },
  ],
};