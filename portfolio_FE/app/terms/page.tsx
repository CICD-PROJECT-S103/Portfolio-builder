import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, AlertTriangle, Users, CreditCard, Globe } from "lucide-react"

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Please read these terms carefully before using PortfolioCraft
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          Last updated: September 21, 2025
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Acceptance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="w-5 h-5" />
              Acceptance of Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              By accessing and using PortfolioCraft ("Service"), you accept and agree to be bound by 
              the terms and provision of this agreement. If you do not agree to these terms, you should 
              not use this service. These terms apply to all visitors, users, and others who access or 
              use the service.
            </p>
          </CardContent>
        </Card>

        {/* Service Description */}
        <Card>
          <CardHeader>
            <CardTitle>Service Description</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              PortfolioCraft is a web-based platform that allows users to create, customize, and 
              publish professional portfolios. Our service includes:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>• Portfolio creation tools and templates</li>
              <li>• Content management and customization features</li>
              <li>• Hosting and publishing capabilities</li>
              <li>• Analytics and performance tracking</li>
              <li>• Customer support and documentation</li>
            </ul>
          </CardContent>
        </Card>

        {/* User Accounts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              User Accounts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Account Creation</h3>
              <ul className="text-muted-foreground space-y-1 ml-4">
                <li>• You must provide accurate and complete information</li>
                <li>• You are responsible for maintaining account security</li>
                <li>• You must notify us of any unauthorized access</li>
                <li>• One person or entity may not maintain multiple accounts</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Account Responsibilities</h3>
              <ul className="text-muted-foreground space-y-1 ml-4">
                <li>• Keep your login credentials secure</li>
                <li>• Use the service only for lawful purposes</li>
                <li>• Respect intellectual property rights</li>
                <li>• Do not impersonate others or provide false information</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Acceptable Use */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Acceptable Use Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              You agree not to use the service for any unlawful purpose or in any way that could 
              damage, disable, or impair the service. Prohibited activities include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Content Restrictions</h3>
                <ul className="text-muted-foreground space-y-1 text-sm ml-4">
                  <li>• Illegal, harmful, or offensive content</li>
                  <li>• Spam or unsolicited communications</li>
                  <li>• Copyright or trademark infringement</li>
                  <li>• Malicious code or security threats</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Behavior Restrictions</h3>
                <ul className="text-muted-foreground space-y-1 text-sm ml-4">
                  <li>• Harassment or abuse of other users</li>
                  <li>• Attempting to hack or breach security</li>
                  <li>• Reverse engineering the platform</li>
                  <li>• Automated data collection or scraping</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pricing and Payments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Pricing and Payments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Subscription Plans</h3>
              <ul className="text-muted-foreground space-y-1 ml-4">
                <li>• Free and paid subscription options available</li>
                <li>• Prices are subject to change with notice</li>
                <li>• Subscriptions automatically renew unless cancelled</li>
                <li>• Refunds available within 30 days of purchase</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Billing</h3>
              <ul className="text-muted-foreground space-y-1 ml-4">
                <li>• Payment due at the beginning of each billing cycle</li>
                <li>• Failed payments may result in service suspension</li>
                <li>• You are responsible for all applicable taxes</li>
                <li>• Billing disputes must be reported within 30 days</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Intellectual Property
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Your Content</h3>
              <p className="text-muted-foreground">
                You retain ownership of content you create and upload. By using our service, you grant 
                us a license to host, display, and distribute your content as necessary to provide the service.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Our Content</h3>
              <p className="text-muted-foreground">
                The PortfolioCraft platform, including templates, designs, and features, is protected by 
                intellectual property laws. You may not copy, modify, or redistribute our content without permission.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card>
          <CardHeader>
            <CardTitle>Termination</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">By You</h3>
              <p className="text-muted-foreground">
                You may terminate your account at any time by contacting us or using the account 
                deletion feature. Upon termination, you will lose access to all content and features.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">By Us</h3>
              <p className="text-muted-foreground">
                We may terminate or suspend your account for violations of these terms, illegal 
                activity, or if required by law. We will provide notice when possible.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimers */}
        <Card>
          <CardHeader>
            <CardTitle>Disclaimers and Limitations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Service Availability</h3>
              <p className="text-muted-foreground">
                We strive for high availability but cannot guarantee uninterrupted service. 
                Maintenance, updates, or technical issues may cause temporary outages.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Limitation of Liability</h3>
              <p className="text-muted-foreground">
                Our liability is limited to the amount you paid for the service. We are not 
                responsible for indirect, incidental, or consequential damages.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Changes to Terms */}
        <Card>
          <CardHeader>
            <CardTitle>Changes to Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We may update these terms from time to time. We will notify you of material changes 
              via email or platform notification. Continued use of the service after changes 
              constitutes acceptance of the new terms.
            </p>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Questions about these Terms of Service? Contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Email:</strong> legal@portfoliocraft.com</p>
              <p><strong>Address:</strong> K L University, Guntur District, Vijayawada, AP 520001, India</p>
              <p><strong>Phone:</strong> +1 (555) 012-3456</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}