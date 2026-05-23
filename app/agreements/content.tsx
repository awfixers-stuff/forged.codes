"use client"

import React from "react"

export default function AgreementsContent() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="prose prose-invert max-w-none mb-16 prose-headings:text-foreground prose-headings:font-bold prose-p:text-foreground/85 prose-a:text-foreground prose-strong:text-foreground prose-li:text-foreground/85 prose-code:text-foreground prose-td:text-foreground/85 prose-th:text-foreground prose-blockquote:text-foreground/75 prose-hr:border-foreground/20">
        <h1 className="font-display">Agreements</h1>
        <p className="text-lg text-foreground/70 leading-relaxed">
          The following agreements govern your use of Forged Codes services, including the Forged Codes Registry. By using our services, you agree to the applicable agreements listed below.
        </p>
      </div>

      <div className="prose prose-invert max-w-none mb-16 prose-headings:text-foreground prose-headings:font-bold prose-p:text-foreground/85 prose-a:text-foreground prose-strong:text-foreground prose-li:text-foreground/85 prose-code:text-foreground prose-td:text-foreground/85 prose-th:text-foreground prose-blockquote:text-foreground/75 prose-hr:border-foreground/20">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">1. Terms of Service</h2>
        <p className="text-foreground/70">
          Our <a href="/terms">Terms of Service</a> govern your use of the Forged Codes platform, including account registration, acceptable use policies, and service availability commitments. This is the primary agreement between you and AWFixer Enterprising Inc, OSS Division.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-foreground">2. Privacy Policy</h2>
        <p className="text-foreground/70">
          Our <a href="/privacy">Privacy Policy</a> describes how we collect, use, and protect your personal data when you use our services. This includes information about data retention, deletion rights, and international data transfers.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-foreground">3. Data Processing Agreement (DPA)</h2>
        <p className="text-foreground/70">
          For customers subject to GDPR or other data protection regulations, we offer a Data Processing Agreement that covers:
        </p>
        <ul>
          <li>Scope and purposes of data processing</li>
          <li>Data subject rights assistance</li>
          <li>Sub-processor obligations and oversight</li>
          <li>Data breach notification procedures (72-hour window)</li>
          <li>Data transfer safeguards (SCCs, adequacy decisions)</li>
        </ul>
        <p className="text-foreground/70">
          To request a signed DPA, contact legal@forged.codes.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-foreground">4. Service Level Agreement (SLA)</h2>
        <p className="text-foreground/70">
          Our Service Level Agreement covers availability and performance commitments:
        </p>
        <ul>
          <li><strong>Uptime commitment:</strong> 99.99% monthly availability (see our <a href="/stability">Stability page</a>)</li>
          <li><strong>Support response:</strong> P1 incidents addressed within 15 minutes, 24/7</li>
          <li><strong>MTTR target:</strong> Less than 30 minutes for critical failures</li>
          <li><strong>Credits:</strong> Service credits for failure to meet SLA targets, outlined in the full agreement</li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tight text-foreground">5. Contributor License Agreement (CLA)</h2>
        <p className="text-foreground/70">
          For open-source contributions to Forged Codes projects, we require agreement to our CLA, which:
        </p>
        <ul>
          <li>Grants us a license to use, modify, and distribute your contributions</li>
          <li>Confirms you have the rights to submit the contribution</li>
          <li>Ensures contributions are compatible with our project licenses</li>
          <li>Does not transfer ownership of your contributions</li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tight text-foreground">6. Acceptable Use Policy</h2>
        <p className="text-foreground/70">
          All users must adhere to our Acceptable Use Policy, which prohibits:
        </p>
        <ul>
          <li>Distribution of malware or malicious code through the registry</li>
          <li>Trademark squatting or cybersquatting on package names</li>
          <li>Spam or abuse of the platform&#39;s communication features</li>
          <li>Using the platform for unauthorized scraping or data mining</li>
          <li>Impersonation of other users or organizations</li>
          <li>Any activity that could damage, disable, or impair the platform</li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tight text-foreground">7. Security Agreement</h2>
        <p className="text-foreground/70">
          Our security commitments are detailed on our <a href="/security">Security page</a> and include:
        </p>
        <ul>
          <li>Encryption at rest (AES-256) and in transit (TLS 1.3)</li>
          <li>Zero-knowledge architecture for credential management</li>
          <li>SOC 2 Type II and ISO 27001 certification</li>
          <li>Responsible disclosure and bug bounty program</li>
          <li>Immutable audit logging with 7-year retention</li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tight text-foreground">8. Revisions &amp; Notifications</h2>
        <p className="text-foreground/70">
          Agreements may be updated from time to time. Material changes will be communicated via email and a notice on our website at least 30 days before taking effect. Continued use of the service after changes become effective constitutes acceptance.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-foreground">9. Contact</h2>
        <ul>
          <li><strong>Legal inquiries:</strong> legal@forged.codes</li>
          <li><strong>DPA requests:</strong> legal@forged.codes</li>
          <li><strong>Security:</strong> security@forged.codes</li>
          <li><strong>General:</strong> hello@forged.codes</li>
        </ul>
      </div>

      <div className="text-sm text-foreground/70 pt-6 border-t border-foreground/15">
        <p><strong>Last Updated:</strong> May 2025</p>
        <p><strong>Effective Date:</strong> May 2025</p>
      </div>
    </div>
  )
}