// Case-study content, taken from the Figma frames.
// Images live in /public/cases/<case>/ (export them from Figma, see README note).

const CAPTION =
  "Delivered interface / Transferring assets between investment portfolios. Original visual from the case study.";

export const smartInvest = {
  theme: "success",
  footerRight: "Smart Invest · 2022",
  intro: {
    eyebrow: "SMART INVEST / PRODUCT ITERATION / 2022",
    title: ["Product Iteration", "for Smart invest"],
    lead: "Turning early user feedback into a investment experience for people with limited time and financial knowledge.",
    details: [
      { label: "ROLE", value: ["UX Researcher", "Product Designer"] },
      { label: "TEAM", value: "10 people" },
      { label: "TIMELINE", value: "2 months · Oct–Nov 2022" },
      { label: "STATUS", value: "Released", status: true },
    ],
  },
  sections: [
    {
      label: "01 / THE CONTEXT",
      title: "Problem statement",
      blocks: [
        {
          t: "p",
          text: "Smart Invest is an investment solution from Agah Brokerage for people who **want to invest** but **have limited time or financial knowledge**. The early rollout created an opportunity to test assumptions and understand what prevented users from taking the next step.",
        },
        {
          t: "callout",
          size: "title",
          lines: ["Why weren’t users register in? ", "What stopped them from investing?"],
        },
        {
          t: "p",
          text: "We investigated awareness of the value proposition, difficult steps in the journey, and the time needed to find value and invest.",
        },
      ],
    },
    {
      label: "02 / THE FEEDBACK LOOP",
      tight: true,
      title: "The process",
      blocks: [
        {
          t: "p",
          text: "Over two months, interviews and product observations helped connect** what users said with what they actually did.**",
        },
        {
          t: "profile",
          label: "WHO WE LEARNED FROM",
          text: "Fixed-income employees with limited financial knowledge and little time to learn or operate in financial markets.",
          note: "Recruited through Agah employees, including account holders, people who did not return after early access, and people who had invested.",
        },
        {
          t: "insight",
          label: "01 / LISTEN",
          title: "Interviews & content testing",
          body: "Conducted 30 interviews online and in person to understand user context, product perceptions and comprehension.",
        },
        {
          t: "insight",
          label: "02 / OBSERVE",
          title: "Session recordings & heatmaps",
          body: "Used Clarity recordings and heatmaps to examine behavior and friction within the product.",
        },
        {
          t: "insight",
          label: "03 / TEST",
          title: "Usability evaluation",
          body: "Tested obstacles to registration and investment. CX preparation included messages, support flows and the System Usability Scale.",
        },
      ],
    },
    {
      label: "04 / OBSERVATION",
      panel: true,
      title: "Research plan",
      blocks: [
        {
          t: "insight",
          label: "01",
          title: "Research questions",
          pre: true,
          body: "Main Questions\nWhy don't users register for our product?\nAre users aware of our value proposition?\nWhat are the reasons for not investing in Smart  invest?\n\nSub Questions\nWhat are the aspects of our product that require improvement?\nWhat are the top challenges for users?\nWhat is the average time users take to find the value of product and invest in it, overall and at each stage?",
        },
        { t: "divider" },
        {
          t: "insight",
          label: "02",
          title: "Research Plan",
          pre: true,
          body: "Methodology:\nWe had a total of 30 participants\nParticipant criteria\nMust be an employee with a fixed income\nHave little financial knowledge\nNot having enough time to learn or operate in financial markets\nParticipant demographics\nBe more than 24 years old (or have income)\nSomeones that they work with Smart invest and have an account\nSomeones that they being on white list and don't back to Smart invest again.\nSomeones that they work with Smart invest and save money on that.\nOur channel\nAgah employees\nResearch environment\nOnline Interviews, live interviews & Usability test and content test",
        },
        { t: "divider" },
        {
          t: "insight",
          label: "03",
          title: "Analysis approach",
          list: [
            "I start to call with all users and find out personal information and their state on product (based on participants)",
            "we had 30 interview in-person (online and offline)",
            "after each participant interview we discussed the interview highlights, critical quotes on a table on confluence.",
            "After I finished all of our interviews, we began to prioritization of usability improvements based on severity of the issues and the effort required to fix.",
          ],
        },
      ],
    },
    {
      label: "03 / SYNTHESIZE",
      tight: true,
      title: "Sharing the process with team",
      blocks: [
        {
          t: "p",
          text: "After each interview, we discussed the highlights and important quotes, then documented them in Confluence. This shared record connected observations to product issues.",
        },
        {
          t: "steps",
          items: [
            { label: "01", title: "Capture", body: "Interview highlights and user quotes" },
            { label: "02", title: "Discuss", body: "A shared understanding of the issue" },
            { label: "03", title: "Prioritize", body: "Severity and implementation effort" },
          ],
        },
      ],
    },
    {
      label: "04 / PRIORITIZE",
      title: "Prioritizing tasks",
      blocks: [
        {
          t: "p",
          text: "Issues were assessed by their impact on the investment journey and the effort required to resolve them. High-impact, low-effort improvements were addressed first.",
        },
        {
          t: "rows",
          items: [
            { label: "01", title: "Critical impact", body: "Significantly blocks the investment process and can affect conversion." },
            { label: "02", title: "Major impact", body: "Creates substantial confusion or frustration within the investment journey." },
            { label: "03", title: "Minor impact", body: "Adds smaller usability friction that can be improved." },
            { label: "04", title: "Cosmetic enhancement", body: "Affects visual polish without significantly changing the journey." },
          ],
        },
        { t: "image", src: "smart-invest/prioritization.png", ratio: "1976 / 860" },
        { t: "divider" },
        {
          t: "note",
          text: "Detailed research records and issue-level prioritization data are omitted under NDA.",
        },
      ],
    },
    {
      label: "06 / BROADER IMPROVEMENTS",
      panel: true,
      title: "Insights",
      blocks: [
        { t: "insight", label: "01", title: "Clearer microcopy", body: "Revised risk-level names, basket names and asset-management copy." },
        { t: "insight", label: "02", title: "Integrated asset management", body: "Brought shared assets across Smart Invest and related products into a simpler management experience." },
        { t: "insight", label: "03", title: "More informative basket suggestions", body: "Added performance details and monthly composition updates to support informed decisions." },
        { t: "insight", label: "04", title: "Automatic rebalancing", body: "Introduced portfolio rebalancing aligned with users’ risk preferences." },
        { t: "insight", label: "05", title: "Timely market information", body: "Added recent activity and capital-market news to help users stay informed." },
      ],
    },
    {
      label: "05 / DESIGN ITERATIONS",
      tight: true,
      title: "From findings to changes",
      blocks: [
        {
          t: "insight",
          label: "01 / FLEXIBILITY",
          title: "Move assets between portfolios",
          body: "Users wanted to adapt their assets as risk preferences and investment strategies changed. A transfer feature introduced a direct way to move assets between portfolios.",
        },
      ],
      after: [
        { t: "figure", src: "smart-invest/transfer-1.png", caption: CAPTION },
        {
          t: "offset-insight",
          label: "02 / RISK ASSESSMENT",
          title: "Make the process visible",
          body: "Users questioned results that appeared instantly. The iteration introduced a deliberate three-second delay and status indicators for receiving information and preparing a customized basket. A separate measured trust outcome was not reported.",
        },
        { t: "figure", src: "smart-invest/transfer-2.png", caption: CAPTION },
        {
          t: "offset-insight",
          label: "03 / LOGIN & REGISTRATION",
          title: "Make the existing-account path easier to find",
          body: "People struggled to locate the option to log in with a brokerage account. The layout and visual hierarchy were adjusted to make that action more visible.",
        },
        { t: "figure", src: "smart-invest/transfer-3.png", caption: CAPTION },
      ],
    },
    {
      label: "07 / OUTCOME",
      tight: true,
      title: "An iteration grounded in user evidence",
      blocks: [
        {
          t: "p",
          text: "The project was released after two months of research and iteration. The case study reports that 74% of bugs identified through research were improved.",
        },
        { t: "subheading", text: "Design takeaway" },
        {
          t: "p",
          text: "A repeatable feedback loop turns a long list of observations into focused product decisions. Pairing user impact with implementation effort helps a team move from research to practical improvements.",
        },
      ],
    },
  ],
  glance: {
    metrics: [
      { label: "EARLY ROLLOUT", value: "400", body: "Informed participants introduced to the product to gather feedback and refine hypotheses." },
      { label: "RESEARCH SAMPLE", value: "30", body: "Participants in interviews, content testing and usability research." },
      { label: "REPORTED OUTCOME", value: "74%", accent: true, body: "Of research-identified bugs improved through product iteration." },
    ],
  },
};

export const couponCreation = {
  theme: "info",
  footerRight: "Coupon Creation · 2026",
  intro: {
    eyebrow: "SNAPPFOOD / VENDOR EXPERIENCE / 2026",
    title: ["Redesign", "Coupon creation flow"],
    lead: "Redesigning coupon creation in Dakhl to help vendors understand their choices, preview the result and build more effective offers.",
    details: [
      { label: "ROLE", value: ["Product Designer", "UX Research Coordinator"] },
      { label: "PRODUCT", value: "Vendor side · Snappfood" },
      { label: "Timeline", value: "Oct 2026" },
      { label: "STATUS", value: "Proposed · Not released", status: true },
    ],
  },
  sections: [
    {
      label: "01 / THE CONTEXT",
      title: "Problem statement",
      blocks: [
        {
          t: "p",
          text: "Dakhl lets Snappfood vendors create coupons to support sales. Yet an active coupon does not always reach an eligible customer. The proposal addresses both the difficulty of setting up an offer and the quality of the choices made along the way.",
        },
        {
          t: "callout",
          size: "title",
          lines: ["How might we make coupon creation clearer and support better decisions?"],
        },
        {
          t: "p",
          text: "Scope: from “Create new coupon” to final confirmation. Customer discovery, coupon economics and performance reporting sit outside this phase.",
        },
      ],
    },
    {
      label: "02 / THE RESEARCH",
      title: "Research Details",
      blocks: [
        {
          t: "p",
          text: "The proposal combines usability findings, awareness surveys, coupon usage data and creation-flow events to identify where vendors need guidance.",
        },
        {
          t: "profile",
          label: "WHO THE RESEARCH REPRESENTS",
          text: "Active food vendors, vendors who have never created a coupon, and new, returning, active and churned vendor segments.",
          note: "Sources include a 1,030-response promotion awareness survey, 59 coupon non-users, vendor usability research and November 2025 restaurant-order data.",
        },
        {
          t: "image",
          src: "coupon-creation/research.png",
          ratio: "1040 / 335",
          crop: { height: "166.57%", left: "-0.06%", top: "-45.07%", width: "100.12%" },
        },
        {
          t: "insight",
          label: "01 / LISTEN",
          title: "Vendor usability findings",
          body: "Vendors were unsure whether “first order” meant their own store or Snappfood, and whether “Continue” would immediately create the coupon.",
        },
        {
          t: "insight",
          label: "02 / UNDERSTAND",
          title: "Awareness & confidence",
          body: "52.5% of surveyed coupon non-users did not know how coupons were created or worked. Lack of awareness scored 3.57 out of 5.",
        },
        {
          t: "insight",
          label: "03 / OBSERVE",
          title: "Creation-flow events",
          body: "24,561 creation starts reveal the largest drop-off at condition selection. The proposal’s conversion figures need reconciliation before launch measurement.",
        },
      ],
    },
    {
      label: "03 / SYNTHESIZE",
      title: "Approach ",
      blocks: [
        {
          t: "p",
          text: "The research points to clarity and confidence: vendors need to understand the rules while choosing them, and see the customer-facing result before committing.",
        },
        {
          t: "steps",
          items: [
            { label: "01", title: "Clarity", body: "Explain each condition and reward in context" },
            { label: "02", title: "Confidence", body: "Show the coupon before final creation" },
            { label: "03", title: "Guidance", body: "Suggest values without removing vendor control" },
          ],
        },
      ],
    },
    {
      label: "04 / DESIGN PRINCIPLES",
      noTop: true,
      title: "Design solution ",
      blocks: [
        {
          t: "p",
          text: "Prioritize the friction inside the creation journey. Keep condition, reward and date together, reveal sections progressively, and make the final commitment unmistakable.",
        },
        {
          t: "rows",
          tinted: true,
          items: [
            { label: "01", title: "Explain eligibility", body: "Clarify that “first order” means an order from this store, with guidance next to the choice." },
            { label: "02", title: "Keep context visible", body: "Replace the four-step wizard with one page and a live customer-facing coupon preview." },
            { label: "03", title: "Guide the input", body: "Use preset chips and examples to reduce trial and error while retaining custom values." },
            { label: "04", title: "Make creation explicit", body: "Use one final “Confirm & create coupon” action; completed sections remain editable." },
          ],
        },
        { t: "divider" },
        {
          t: "note",
          text: "Design decisions drawn from the Coupon Creation Proposal. Post-launch behavior has not yet been measured.",
        },
      ],
    },
    {
      label: "05 / THE PROPOSED EXPERIENCE",
      title: "One page one visible result",
      blocks: [
        {
          t: "insight",
          label: "01 / FLOW STRUCTURE",
          title: "From wizard to guided creation",
          body: "Condition, reward and date open in sequence on one page. Completed sections collapse into editable summaries, while the preview shows how the coupon will appear to customers.",
        },
      ],
      after: [
        { t: "concept" },
        {
          t: "insight-pair",
          items: [
            {
              label: "02 / LIVE PREVIEW",
              title: "Make the result tangible",
              body: "A live coupon preview connects each choice to what customers will see. Vendors can review eligibility, reward and validity before using the single final creation action.",
            },
            {
              label: "03 / IN-CONTEXT RECOMMENDATIONS",
              title: "Bring Snappfood offers into the journey",
              body: "Show suggested conditions and rewards where vendors make decisions. Prefilled values and recommendation tags guide setup, while custom values remain available.",
            },
          ],
        },
      ],
    },
    {
      label: "06 / DESIGN ACHIEVEMENTS",
      title: "What happened?",
      blocks: [
        { t: "insight", label: "01", title: "An explicit final action", body: "The proposal removes ambiguous “Continue” actions from the creation flow." },
        { t: "insight", label: "02", title: "A complete view of the offer", body: "The live preview makes eligibility and reward visible before confirmation." },
        { t: "insight", label: "03", title: "Guidance at the decision point", body: "Suggested values move from external banners and messages into manual creation." },
        { t: "insight", label: "04", title: "Quality rules that can evolve", body: "Phase-two Hot Offer rules should be configurable by data and commercial teams." },
        { t: "insight", label: "05", title: "A focused next-phase roadmap", body: "Cost estimates, goal-led setup and segment-specific guidance remain future opportunities." },
      ],
    },
    {
      label: "07 / EXPECTED IMPACT",
      title: "clarity Flow ready to be measured",
      blocks: [
        {
          t: "p",
          text: "The project has not been released. The targets below are proposed hypotheses for validation with product and data teams, not achieved results.",
        },
        {
          t: "metric",
          label: "PROPOSED CONDITION-STEP DROP-OFF TARGET",
          value: "≤10%",
          body: "Aim to reduce condition-selection drop-off from 15% to 10% or lower. Also test a 20% reduction in median creation time against a validated baseline.",
        },
        { t: "subheading", text: "Measurement & learning" },
        {
          t: "p",
          text: "Track section completion, preset versus manual input, edits, creation time and coupons used at least once. Reconcile the source’s 75% and 79.3% conversion figures before comparison; pair conversion with coupon quality.",
        },
      ],
    },
  ],
  glance: {
    heading: "THE EVIDENCE BEHIND THE REDESIGN",
    metrics: [
      { label: "COUPON REACH GAP", value: "65%", body: "Of orders without a coupon came from vendors with an active coupon. Availability alone does not ensure use." },
      { label: "MANUAL CREATION", value: "55%", body: "Of coupons are created manually through the vendor journey—an opportunity for guidance at the point of decision." },
      { label: "CONDITION-STEP DROP-OFF", value: "15%", body: "Drop-off at the first decision in the existing creation funnel. Event counts, not unique vendors." },
    ],
  },
};

export const foodPro = {
  theme: "warning",
  mutedValues: true,
  footerRight: "FoodPro · 2026",
  intro: {
    eyebrow: "FOODPRO / CHECKOUT OPTIMIZATION / 2026",
    title: ["Making subscription value", "easier to understand"],
    lead: "Research, writing, and three product iterations that improved successful subscription purchases at Basket.",
    details: [
      { label: "ROLE", value: ["Product Designer", "UX Researcher"] },
      { label: "TEAM", value: "FoodPro · with Product Manager" },
      { label: "TIMELINE", value: "May 2026" },
      { label: "STATUS", value: "Released · Three iterations", status: true },
    ],
  },
  sections: [
    {
      label: "01 / THE CONTEXT",
      title: "Problem statement",
      blocks: [
        {
          t: "p",
          text: "FoodPro offered a one-month subscription from a sticky banner in the Basket. Customers who continued without selecting it encountered a confirmation bottom sheet.",
        },
        {
          t: "p",
          text: "After the first release, the business asked for quick improvements to conversion. The offer could reduce the cost of the current order, but users needed to notice it, understand the payment, and know what selecting Pro meant.",
        },
        {
          t: "phones",
          items: [
            { src: "foodpro/context-1.png", height: 642.857, crop: { height: "100%", left: "-0.16%", top: "0", width: "202.1%" } },
            { src: "foodpro/context-2.png", height: 651.381, crop: { height: "100.07%", left: "0", top: "-0.03%", width: "204.98%" } },
            { src: "foodpro/context-3.png", height: 646.409, crop: { height: "100.06%", left: "0", top: "-0.03%", width: "306.73%" } },
          ],
        },
      ],
    },
    {
      label: "02 / THE RESEARCH",
      noTop: true,
      noDivider: true,
      title: "Research side",
      blocks: [
        {
          t: "p",
          text: "I worked with the product manager on research, customer interviews, design, and test analysis.",
        },
        {
          t: "callout",
          size: "body",
          text: "We ran short think-aloud purchase sessions with **12 customers** who had never subscribed to Pro or had recently churned. Participants selected food and continued through checkout as they normally would.",
        },
        {
          t: "p",
          text: "We explored what caught their attention, how they interpreted the offer, and what made them consider or decline it.",
        },
      ],
    },
    {
      label: "03 / THE FINDINGS",
      title: "Insights",
      blocks: [
        {
          t: "tinted-insights",
          items: [
            { label: "01 / VISIBILITY", title: "The banner was easy to miss", body: "Users missed it on entering the cart and tapped across the banner instead of selecting its icon button." },
            { label: "02 / UNDERSTANDING", title: "The benefit felt unclear", body: "Users dismissed the confirmation sheet without reading and were unsure whether Pro applied to this order." },
            { label: "03 / PAYMENT", title: "Users did the calculation", body: "They tried to compare totals before and after Pro. The “Add to basket” action did not match their expectations of the flow." },
          ],
        },
      ],
    },
    {
      label: "04 / DESIGN & WRITING",
      title: ["Make the amount paid", "the main message."],
      blocks: [
        {
          t: "p",
          text: "I explored design and copy alternatives with product, engineering, and business stakeholders. We focused on the immediate benefit, legible payment information, and actions that fit checkout.",
        },
        {
          t: "p",
          text: "“Pay less on this order” made the value more concrete than “save.” This learning changed our writing strategy: lead with what the customer pays now.",
        },
        { t: "image", src: "foodpro/design-writing.png", ratio: "1040 / 730.25" },
      ],
    },
    {
      label: "05 / THE EXPERIMENT",
      title: "A/B testing",
      blocks: [
        {
          t: "p",
          text: "We ran a three-week A/B test with 10,000 users in each version: 20,000 users in total.",
        },
        {
          t: "p",
          text: "Version B emphasized the current-order benefit and subscription price. Version A also made the final amount payable with Pro explicit.",
        },
        {
          t: "callout",
          size: "body",
          text: "Version A achieved higher successful subscription purchase conversion than B, so we selected A. V2 reached 16.1%, compared with 7.8% in the original flow.",
        },
        { t: "image", src: "foodpro/experiment.png", ratio: "1040 / 730.25" },
        { t: "note", text: "LEFT: ORIGINAL / CENTER: B / RIGHT: A" },
      ],
    },
    {
      label: "06 / AFTER LAUNCH",
      title: "After released",
      blocks: [
        {
          t: "p",
          text: "After launch, social media feedback showed that some users perceived the preselected subscription as a dark pattern. We used further UX research to address that confusion.",
        },
        {
          t: "p",
          text: "For the preselected segment, we replaced “Apply” with a switch to make the selection state more explicit. We shortened the benefits and redesigned the offer around the amount paid on this order.",
        },
        {
          t: "p",
          text: "The “free subscription” message meant the savings on this order covered the subscription fee. The fee itself was not zero.",
        },
        { t: "image", src: "foodpro/after-launch.png", ratio: "1040 / 730.25" },
      ],
    },
    {
      label: "07 / VALIDATION",
      title: "Make continuing “without Pro”",
      blocks: [
        {
          t: "p",
          text: "Follow-up qualitative testing indicated that the previously identified ambiguities had been resolved, except for the secondary CTA: “Close.” Users were unsure how to decline the offer.",
        },
        {
          t: "p",
          text: "We changed it to “Continue without Pro.” V3 was released and reached 18.1% successful subscription purchase conversion: 2 percentage points above V2.",
        },
        { t: "image", src: "foodpro/v3.png", ratio: "390 / 828", width: 390 },
        { t: "note", text: "V3 / CURRENT-ORDER VALUE & AN EXPLICIT WAY TO DECLINE" },
      ],
    },
    {
      label: "08 / REFLECTION",
      title: "Reflection",
      blocks: [
        {
          t: "p",
          text: "A higher conversion rate did not tell us whether people understood the choice. The post-launch feedback and qualitative follow-up exposed ambiguities that the conversion metric alone could not.",
        },
        {
          t: "p",
          text: "This project changed how I approach subscription messaging: explain the immediate payment, make the selected state visible, and make the consequence of each action clear.",
        },
      ],
    },
  ],
  glance: {
    heading: "SUCCESSFUL SUBSCRIPTION PURCHASE CONVERSION",
    metrics: [
      { label: "V1 / BASELINE", value: "7.8%", body: "The original checkout subscription flow." },
      { label: "V2 / OPTIMIZATION", value: "16.1%", body: "An 8.3 percentage-point increase from V1." },
      { label: "V3 / CLEARER CHOICE", value: "18.1%", body: "A further 2 percentage-point increase from V2." },
    ],
  },
};
