"use client"

import React from "react"

export default function TermsContent() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="prose prose-neutral dark:prose-invert max-w-none mb-16">
        <h1>Terms of Service</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          These Terms of Service (&quot;Terms&quot;) govern your use of the Forged Codes platform, including the Forged Codes Registry at registry.forged.codes, operated by AWFixer Enterprising Inc, OSS Division (&quot;Forged Codes&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By using our services, you agree to these Terms.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none mb-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">1. Acceptance of Terms</h2>
        <p className="text-muted-foreground">
          By creating an account or using any Forged Codes service, you confirm that you are at least 16 years of age and agree to be bound by these Terms, our <a href="/privacy">Privacy Policy</a>, and any applicable <a href="/agreements">agreements</a>.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-foreground">2. Account Registration</h2>
        <ul>
          <li>You must provide accurate, complete information during registration.</li>
          <li>You are responsible for maintaining the security of your account credentials.</li>
          <li>You must notify us immediately of any unauthorized access at security@forged.codes.</li>
          <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tight text-foreground">3. Acceptable Use</h2>
        <p className="text-muted-foreground">You agree not to:</p>
        <ul>
          <li>Use the platform for any unlawful purpose or to distribute malicious software</li>
          <li>Attempt to gain unauthorized access to other users&#39; accounts or our systems</li>
          <li>Abuse rate limits, scrape content, or overwhelm our infrastructure</li>
          <li>Upload content that infringes others&#39; intellectual property rights</li>
          <li>Reverse-engineer, decompile, or disassemble any part of the platform</li>
          <li>Use automated systems to create accounts without our written permission</li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tight text-foreground">4. Intellectual Property</h2>
        <p className="text-muted-foreground">
          You retain ownership of all content you upload to the platform. By publishing content on the Forged Codes Registry, you grant us a limited license to host, index, and serve that content as part of the platform&#39;s normal operation. This license is non-exclusive and terminates when you remove the content.
        </p>
        <p className="text-muted-foreground">
          The Forged Codes platform itself, including its design, logo, and underlying software, is the property of AWFixer Enterprising Inc, OSS Division and is protected by applicable intellectual property laws.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-foreground">5. Service Availability</h2>
        <p className="text-muted-foreground">
          We strive for 99.99% uptime but do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any part of the service with reasonable notice. Scheduled maintenance windows are communicated in advance.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-foreground">6. Package Registry</h2>
        <p className="text-muted-foreground">
          The Forged Codes Registry allows you to publish, distribute, and consume software packages. By publishing packages:
        </p>
        <ul>
          <li>You represent that you have the rights to distribute the package and its contents</li>
          <li>You acknowledge that published packages may be cached by mirrors and CDN nodes and may not be immediately deletable</li>
          <li>You are responsible for the security and quality of packages you publish</li>
          <li>We reserve the right to remove packages that violate these Terms, contain malware, or compromise platform security</li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tight text-foreground">7. Payment &amp; Billing</h2>
        <p className="text-muted-foreground">
          Paid plans are billed in advance. All fees are non-refundable except as required by law or as stated in our refund policy. We reserve the right to change pricing with 30 days&#39; advance notice. Continued use after a price change constitutes acceptance.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-foreground">8. Termination</h2>
        <p className="text-muted-foreground">
          You may terminate your account at any time. We may terminate or suspend accounts that violate these Terms, with or without notice depending on severity. Upon termination, your right to use the service ceases immediately. Provisions that by their nature should survive termination remain in effect.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-foreground">9. Limitation of Liability</h2>
        <p className="text-muted-foreground">
          To the fullest extent permitted by law, Forged Codes shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenue, whether incurred directly or indirectly. Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-foreground">10. Indemnification</h2>
        <p className="text-muted-foreground">
          You agree to indemnify and hold harmless AWFixer Enterprising Inc, OSS Division, its officers, directors, and employees from any claims, damages, or expenses arising from your use of the service or violation of these Terms.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-foreground">11. Governing Law</h2>
        <p className="text-muted-foreground">
          These Terms are governed by the laws of the jurisdiction in which AWFixer Enterprising Inc, OSS Division is organized, without regard to conflict of law principles. Any disputes shall be resolved in the competent courts of that jurisdiction.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-foreground">12. Changes to Terms</h2>
        <p className="text-muted-foreground">
          We may update these Terms from time to time. Material changes will be communicated via email and a notice on our website. Continued use of the service after changes become effective constitutes acceptance of the revised Terms.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-foreground">13. Contact</h2>
        <ul>
          <li><strong>Legal inquiries:</strong> legal@forged.codes</li>
          <li><strong>General support:</strong> hello@forged.codes</li>
          <li><strong>Security:</strong> security@forged.codes</li>
        </ul>
      </div>

      <div className="text-sm text-muted-foreground pt-6 border-t border-border">
        <p><strong>Last Updated:</strong> May 2025</p>
        <p><strong>Effective Date:</strong> May 2025</p>
      </div>
    </div>
  )
}