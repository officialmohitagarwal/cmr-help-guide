export const geoReferenceArticle = {
  id: "geo-reference",

  slug: "/concepts/users-partner-administration/geo-reference",

  category: {
    id: "users-partner-administration",
    label: "Users & Partner Administration",
    slug: "/concepts/users-partner-administration",
  },

  title: "Geo Reference: Countries & States",

  description:
    "Learn how to use CMR's country and state reference endpoints when collecting and validating customer address information.",

  author: "CMR Team",

  updated: "September 2026",

  introduction:
    "CMR provides read-only geographic reference endpoints for countries and states or provinces. Use these endpoints when building your customer onboarding flow instead of maintaining your own hardcoded geographic lists. The returned values can be used for the country and state fields when creating a User.",

  sections: [
    {
      id: "geo-overview",
      title: "What the Geo Reference API provides",
      description:
        "Understand the purpose of CMR's geographic reference endpoints.",
      content: [
        {
          type: "paragraph",
          content:
            "CMR provides geographic reference data that can be used when collecting customer address information. The endpoints are read-only and are intended to help you populate country and state or province selectors in your own onboarding interface.",
        },
        {
          type: "steps",
          items: [
            {
              id: "countries",
              title: "Countries",
              description:
                "GET /geo/countries returns a map of country names to ISO 3166-1 alpha-2 country codes.",
            },
            {
              id: "states",
              title: "States and provinces",
              description:
                "GET /geo/states?countryCode= returns a map of state or province names to their corresponding state codes.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Reference data is read-only",
          content:
            "These endpoints provide geographic reference data for your application. They are not used to create or modify geographic records in CMR.",
        },
      ],
    },

    {
      id: "countries",
      title: "Retrieving supported countries",
      description:
        "Use the countries endpoint to populate your country selector.",
      content: [
        {
          type: "paragraph",
          content:
            "Use GET /geo/countries to retrieve the country names and their ISO 3166-1 alpha-2 codes. The returned country codes should be used when collecting the country value required by the User creation flow.",
        },
        {
          type: "code",
          language: "http",
          content: `GET /geo/countries
cmr-x-api-key: your_partner_api_key`,
        },
        {
          type: "paragraph",
          content:
            "Using the API response as the source for your country selector helps keep your onboarding interface aligned with the geographic values accepted by CMR.",
        },
      ],
    },

    {
      id: "states",
      title: "Retrieving states and provinces",
      description:
        "Use the selected country to retrieve its available state or province values.",
      content: [
        {
          type: "paragraph",
          content:
            "The states endpoint requires a countryCode. After a customer selects a country, pass that country's code to GET /geo/states?countryCode= to retrieve the corresponding state or province reference data.",
        },
        {
          type: "code",
          language: "http",
          content: `GET /geo/states?countryCode=US
cmr-x-api-key: your_partner_api_key`,
        },
        {
          type: "callout",
          variant: "warning",
          title: "countryCode is required",
          content:
            "Omitting countryCode from the states request results in a validation error. Retrieve the country first, then use its returned code when requesting states.",
        },
      ],
    },

    {
      id: "dependent-dropdowns",
      title: "Use countries and states as dependent selectors",
      description:
        "A country-first flow keeps the state or province list scoped correctly.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "select-country",
              title: "1. Load countries",
              description:
                "Call GET /geo/countries when your onboarding form needs the country list.",
            },
            {
              id: "choose-country",
              title: "2. Let the customer select a country",
              description:
                "Store the selected country's ISO alpha-2 code.",
            },
            {
              id: "load-states",
              title: "3. Request states",
              description:
                "Call GET /geo/states?countryCode= using the selected country code.",
            },
            {
              id: "choose-state",
              title: "4. Let the customer select a state or province",
              description:
                "Use the returned state or province values to populate the second selector.",
            },
          ],
        },
      ],
    },

    {
      id: "partner-level-auth",
      title: "Authentication and API scope",
      description:
        "Understand why Geo Reference requests are Partner-level.",
      content: [
        {
          type: "paragraph",
          content:
            "Geo Reference endpoints operate at the Partner level because the returned information is reference data rather than a resource belonging to one customer.",
        },
        {
          type: "steps",
          items: [
            {
              id: "api-key",
              title: "Partner API key",
              description:
                "Authenticate the request using your Partner API key.",
            },
            {
              id: "no-user-id",
              title: "No customer userId",
              description:
                "The country and state reference requests do not require a customer userId.",
            },
          ],
        },
      ],
    },

    {
      id: "avoid-hardcoding",
      title: "Why you should avoid hardcoding the lists",
      description:
        "Use CMR's reference data instead of maintaining a separate static list.",
      content: [
        {
          type: "paragraph",
          content:
            "The CMR documentation recommends using the Geo Reference endpoints to populate your own onboarding UI rather than maintaining a hardcoded country or state list.",
        },
        {
          type: "steps",
          items: [
            {
              id: "source-of-truth",
              title: "Use CMR as the reference source",
              description:
                "Retrieve geographic values directly from the API when building your customer onboarding flow.",
            },
            {
              id: "country-code",
              title: "Store the returned country code",
              description:
                "Use the ISO 3166-1 alpha-2 country code returned by CMR for the country field.",
            },
            {
              id: "state-code",
              title: "Use the returned state code",
              description:
                "Use the state or province code returned for the selected country when the User address requires it.",
            },
          ],
        },
      ],
    },

    {
      id: "common-mistakes",
      title: "Common mistakes",
      description:
        "Avoid common errors when integrating geographic reference data.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "hardcoded",
              title: "Hardcoding country and state lists",
              description:
                "Use the CMR reference endpoints instead of maintaining a separate static list.",
            },
            {
              id: "missing-country",
              title: "Calling states without countryCode",
              description:
                "The states endpoint requires countryCode.",
            },
            {
              id: "wrong-code",
              title: "Using a country name instead of its code",
              description:
                "The country endpoint returns ISO alpha-2 codes. Use the returned code when requesting states.",
            },
            {
              id: "wrong-scope",
              title: "Sending userId unnecessarily",
              description:
                "Geo Reference endpoints are Partner-level reference operations and do not require customer scope.",
            },
          ],
        },
      ],
    },

    {
      id: "recommended-flow",
      title: "Recommended integration flow",
      description:
        "A simple flow for using CMR geographic reference data in customer onboarding.",
      content: [
        {
          type: "steps",
          items: [
            {
              id: "flow-countries",
              title: "1. Fetch countries",
              description:
                "Retrieve the available countries using GET /geo/countries.",
            },
            {
              id: "flow-country",
              title: "2. Capture the selected country code",
              description:
                "Store the ISO alpha-2 code selected by the customer.",
            },
            {
              id: "flow-states",
              title: "3. Fetch the corresponding states",
              description:
                "Call GET /geo/states?countryCode= with the selected country code.",
            },
            {
              id: "flow-user",
              title: "4. Use the values in User creation",
              description:
                "Use the geographic values when collecting the address information required for creating the customer User.",
            },
          ],
        },
      ],
    },

    {
      id: "related-guides",
      title: "Related guides",
      description:
        "Continue with User management and Partner/User scope.",
      content: [
        {
          type: "learn-more",
          items: [
            {
              id: "manage-users",
              title: "Creating and Managing Users (Your Customer)",
              description:
                "Learn how to create, retrieve, list, and update customer Users.",
              href: "/users/creating-managing-users",
            },
            {
              id: "user-vs-partner",
              title: "User-Level vs Partner-Level Operations",
              description:
                "Understand when CMR operations use Partner scope and when they require a specific userId.",
              href: "/concepts/users-partner-administration/user-vs-partner-operations",
            },
            {
              id: "deleting-user",
              title: "Deleting a User: Requirements, Cleanup & Permanence",
              description:
                "Understand the requirements and permanent effects of deleting a customer User.",
              href: "/users/deleting-user",
            },
          ],
        },
      ],
    },
  ],
};