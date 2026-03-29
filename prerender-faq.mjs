import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you file Form 5471 for US persons with foreign corporations?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Form 5471 is required for US citizens, green card holders, and US residents who own or control a foreign corporation. We handle the full filing including Schedules E, J, and P where required.' },
    },
    {
      '@type': 'Question',
      name: 'What are the penalties for missing Form 5471?',
      acceptedAnswer: { '@type': 'Answer', text: 'The base penalty is $10,000 per form per year. If the IRS sends a notice and the form is still not filed, the penalty increases by $10,000 per month up to $50,000 per form. Missing this filing also leaves your entire tax return permanently open to audit with no statute of limitations.' },
    },
    {
      '@type': 'Question',
      name: 'Can you help with FBAR and FATCA reporting?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We file FinCEN 114 (FBAR) for US persons with foreign financial accounts exceeding $10,000, and Form 8938 (FATCA) for those with higher foreign asset thresholds. Both have significant penalties for non-compliance.' },
    },
    {
      '@type': 'Question',
      name: 'I am a non-US founder with a US LLC or Corporation - do I need to file US taxes?',
      acceptedAnswer: { '@type': 'Answer', text: 'It depends on whether your entity has effectively connected income, US-source income, or transactions with related parties. Many foreign-owned US entities are required to file a pro forma 1120 and Form 5472 even if no US tax is owed. We assess your situation and handle all required filings.' },
    },
    {
      '@type': 'Question',
      name: 'Can you help with US-India or US-Singapore tax treaty positions?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We work with the US-India and US-Singapore tax treaties and can help you determine treaty benefits, apply reduced withholding rates, and avoid double taxation on cross-border income.' },
    },
    {
      '@type': 'Question',
      name: 'I have a US entity and a foreign parent company - what do I need to file?',
      acceptedAnswer: { '@type': 'Answer', text: 'A foreign-owned US corporation or LLC with reportable transactions with its foreign owner or related parties is required to file Form 5472 with a pro forma 1120. Additional forms may apply depending on your structure. We handle the full compliance picture.' },
    },
    {
      '@type': 'Question',
      name: 'How do I get an EIN without a US Social Security Number?',
      acceptedAnswer: { '@type': 'Answer', text: 'Foreign nationals without an SSN or ITIN can obtain an EIN by calling the IRS international line directly. We handle this process for clients as part of our Foreign Founder Setup Package.' },
    },
    {
      '@type': 'Question',
      name: 'What is effectively connected income and does it apply to me?',
      acceptedAnswer: { '@type': 'Answer', text: 'Effectively connected income (ECI) is income from a US trade or business. If your foreign-owned US entity is engaged in business activity in the US, that income is subject to US tax at regular rates. We assess whether ECI applies and ensure correct reporting.' },
    },
    {
      '@type': 'Question',
      name: 'Do you work with clients outside the United States?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We serve clients across 11 countries including the UK, Singapore, UAE, India, Germany, Netherlands, Canada, China, New Zealand, and South Africa. All services are fully remote. No US presence is required.' },
    },
    {
      '@type': 'Question',
      name: 'Can you help if I missed filing for prior years?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We handle multi-year catch-up filings, voluntary disclosure situations, and penalty abatement requests. The sooner you address a missed filing, the better your options. Reach out and we will assess what is required.' },
    },
    {
      '@type': 'Question',
      name: 'Who can use your services?',
      acceptedAnswer: { '@type': 'Answer', text: 'We work with individuals, self-employed professionals, and small to mid-sized businesses across all 50 states, as well as foreign founders and cross-border businesses in 11 countries. Whether you are a sole proprietor, LLC, partnership, S-Corp, C-Corp, or foreign-owned US entity, we have the expertise to help you.' },
    },
    {
      '@type': 'Question',
      name: 'Are you a licensed CPA?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We are a licensed Certified Public Accountant (CPA) in Washington State and also a qualified Indian Chartered Accountant (ICAI). We maintain all required continuing education credits and stay current with federal, state, and international tax law changes.' },
    },
    {
      '@type': 'Question',
      name: 'Do you only serve clients in Washington State?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. While we are licensed in Washington State, we serve clients across all 50 states and in 11 countries. Our services are 100% remote, allowing us to work with businesses and founders worldwide.' },
    },
    {
      '@type': 'Question',
      name: 'What does "starting from" mean in your pricing?',
      acceptedAnswer: { '@type': 'Answer', text: 'Our "starting from" prices represent the minimum cost for straightforward cases. Final pricing depends on the complexity of your situation, number of forms needed, and time required. We always provide a quote before beginning work.' },
    },
    {
      '@type': 'Question',
      name: 'Are there any hidden fees?',
      acceptedAnswer: { '@type': 'Answer', text: 'Absolutely not. We believe in transparent pricing. Any additional costs such as state filing fees are disclosed upfront. You will never receive a surprise bill.' },
    },
    {
      '@type': 'Question',
      name: 'When do we pay?',
      acceptedAnswer: { '@type': 'Answer', text: 'Payment is due after your tax return is fully prepared and you have had the opportunity to review and approve it. Once payment is received, we will proceed with filing your return with the relevant authorities.' },
    },
    {
      '@type': 'Question',
      name: 'What is included in the monthly bookkeeping service?',
      acceptedAnswer: { '@type': 'Answer', text: 'Our monthly bookkeeping includes transaction categorization, bank reconciliation, monthly financial statements (P&L and Balance Sheet), accounts payable and receivable tracking, and QuickBooks Online support. Catch-up bookkeeping is quoted separately.' },
    },
    {
      '@type': 'Question',
      name: 'How does the consulting and advisory service work?',
      acceptedAnswer: { '@type': 'Answer', text: 'Consulting is billed from $250/hour and can cover business strategy, tax planning, entity structure, financial analysis, or any business advisory needs. We can work on specific projects or provide ongoing advisory support.' },
    },
    {
      '@type': 'Question',
      name: 'How quickly can you start working on my taxes?',
      acceptedAnswer: { '@type': 'Answer', text: 'After our initial consultation and receiving all necessary documents, we typically begin work within 2-3 business days. During tax season (January to April), turnaround times may be slightly longer.' },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need to provide?',
      acceptedAnswer: { '@type': 'Answer', text: 'For individual taxes: W-2s, 1099s, receipts for deductions, and prior year returns. For business taxes: financial statements, receipts, payroll records, and previous returns. For international filings: details of foreign entities, account balances, and transaction records. We will provide a detailed checklist based on your specific situation.' },
    },
    {
      '@type': 'Question',
      name: 'How do we communicate and share documents?',
      acceptedAnswer: { '@type': 'Answer', text: 'We use secure, encrypted methods for all document sharing and communication. You can reach us via email, phone, or WhatsApp. Documents are shared through secure portals to protect your sensitive information.' },
    },
    {
      '@type': 'Question',
      name: 'What if I get audited?',
      acceptedAnswer: { '@type': 'Answer', text: 'We offer audit support and representation for tax returns we prepare. If you receive an IRS or state notice, we can help you respond and represent you throughout the audit process. Audit representation is a separate chargeable service - contact us for pricing based on your specific situation.' },
    },
    {
      '@type': 'Question',
      name: 'Can you handle multi-state tax returns?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We regularly handle multi-state returns for businesses operating in multiple states and individuals with income from different states.' },
    },
    {
      '@type': 'Question',
      name: 'Do you file taxes for non-resident aliens (NRAs)?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We help non-resident aliens file their US tax returns using Form 1040-NR. This requires additional forms and documentation, so please mention this during your initial consultation.' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Individual and Business tax filing?',
      acceptedAnswer: { '@type': 'Answer', text: 'Individual tax filing (Form 1040) is for personal income, while business tax filing covers partnerships (1065), S-Corps (1120-S), and C-Corps (1120). Sole proprietors report business income on Schedule C of their individual return.' },
    },
    {
      '@type': 'Question',
      name: 'Can you help me maximize my tax deductions?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We carefully review all potential deductions and credits you qualify for, ensuring you do not pay more tax than necessary while staying compliant with IRS rules.' },
    },
    {
      '@type': 'Question',
      name: 'Should I form an LLC or C-Corp?',
      acceptedAnswer: { '@type': 'Answer', text: 'It depends on your business goals, revenue, growth plans, and tax situation. We provide entity structure consultation as part of our formation service to help you choose the right structure. For foreign founders, the choice between LLC and C-Corp has additional implications around investor readiness and tax treaty access.' },
    },
    {
      '@type': 'Question',
      name: 'What states can you form companies in?',
      acceptedAnswer: { '@type': 'Answer', text: 'We can help form companies in any US state, though many clients choose Delaware, Wyoming, or their home state. We will advise on the best jurisdiction for your situation.' },
    },
    {
      '@type': 'Question',
      name: 'Do you handle sales tax for e-commerce businesses?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. E-commerce sales tax can be complex with nexus rules varying by state. We help you determine where you need to collect sales tax and handle the filing in those states.' },
    },
    {
      '@type': 'Question',
      name: 'What is included in IRS Resolution services?',
      acceptedAnswer: { '@type': 'Answer', text: 'We handle IRS and state notices, audit representation, payment plan negotiations, penalty abatement requests, and tax dispute resolution. Pricing varies based on complexity - contact us for a custom quote.' },
    },
    {
      '@type': 'Question',
      name: 'How do I get started?',
      acceptedAnswer: { '@type': 'Answer', text: 'Simply fill out our contact form, email us, or reach out via WhatsApp. We will schedule a free consultation to discuss your needs and provide a quote. No commitment required.' },
    },
    {
      '@type': 'Question',
      name: 'Is the initial consultation really free?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The initial consultation is completely free with no obligation. We want to understand your needs and ensure we are the right fit for your situation.' },
    },
    {
      '@type': 'Question',
      name: 'What happens after I contact you?',
      acceptedAnswer: { '@type': 'Answer', text: 'We will respond within 24 hours to schedule a consultation. During the call, we will discuss your needs, answer questions, and provide pricing. If you decide to proceed, we will send an engagement letter and get started.' },
    },
    {
      '@type': 'Question',
      name: 'Do you work with new businesses just starting out?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We love working with startups and new entrepreneurs, including foreign founders setting up their first US entity. We can help with formation, initial setup, tax planning, and ongoing support as you grow.' },
    },
  ],
}

const faqHTMLPath = join('./dist/faq/index.html')
let html = readFileSync(faqHTMLPath, 'utf-8')

// Replace the existing ld+json script block with the full FAQ schema
html = html.replace(
  /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
  `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`
)

// Also update the canonical, title, description, and OG tags for /faq
html = html.replace(/<title>[^<]*<\/title>/, '<title>FAQ | TaxClaim CPA - International Tax and Accounting Questions</title>')
html = html.replace(
  /<meta content="[^"]*" name="description">/,
  '<meta content="Got questions about Form 5471, FBAR, foreign-owned US entities, tax filing, bookkeeping, or company formation? Browse TaxClaim\'s frequently asked questions or contact us for a free consultation." name="description">'
)
html = html.replace(
  /<link href="https:\/\/taxclaim\.co\/" rel="canonical">/,
  '<link href="https://taxclaim.co/faq" rel="canonical">'
)
html = html.replace(
  /(<meta content=")[^"]*(?=" property="og:title">)/,
  '$1Frequently Asked Questions | TaxClaim CPA'
)
html = html.replace(
  /(<meta content=")[^"]*(?=" property="og:description">)/,
  '$1Answers to common questions about Form 5471, FBAR, FATCA, foreign-owned US entities, pricing, and process. Free consultation available.'
)
html = html.replace(
  /(<meta content=")[^"]*(?=" property="og:url">)/,
  '$1https://taxclaim.co/faq'
)
html = html.replace(
  /(<meta content=")[^"]*(?=" name="twitter:title">)/,
  '$1Frequently Asked Questions | TaxClaim CPA'
)
html = html.replace(
  /(<meta content=")[^"]*(?=" name="twitter:description">)/,
  '$1Answers to common questions about Form 5471, FBAR, FATCA, foreign-owned US entities, pricing, and process. Free consultation available.'
)

writeFileSync(faqHTMLPath, html)
console.log(`✅ Injected ${faqSchema.mainEntity.length} FAQ items into dist/faq/index.html`)
