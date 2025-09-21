import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Database, UserCheck, Globe } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your privacy is important to us. Learn how we collect, use, and protect your information.
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          Last updated: September 21, 2025
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Quick Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Quick Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">What We Collect</h3>
                  <p className="text-sm text-muted-foreground">Account info, portfolio content, usage data</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">How We Protect</h3>
                  <p className="text-sm text-muted-foreground">Encryption, secure servers, access controls</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Database className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Data Storage</h3>
                  <p className="text-sm text-muted-foreground">Secure cloud infrastructure, regular backups</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <UserCheck className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Your Rights</h3>
                  <p className="text-sm text-muted-foreground">Access, modify, delete your data anytime</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card>
          <CardHeader>
            <CardTitle>Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Account Information</h3>
              <ul className="text-muted-foreground space-y-1 ml-4">
                <li>• Name and email address</li>
                <li>• Profile picture (if provided)</li>
                <li>• Account preferences and settings</li>
                <li>• Subscription and billing information</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Portfolio Content</h3>
              <ul className="text-muted-foreground space-y-1 ml-4">
                <li>• Personal information you add to portfolios</li>
                <li>• Project descriptions and work samples</li>
                <li>• Skills, experience, and education data</li>
                <li>• Custom content and media uploads</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Usage Data</h3>
              <ul className="text-muted-foreground space-y-1 ml-4">
                <li>• Pages visited and features used</li>
                <li>• Time spent on the platform</li>
                <li>• Device and browser information</li>
                <li>• IP address and location data</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card>
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-muted-foreground space-y-2">
              <li>• <strong>Provide Services:</strong> Create and host your portfolios</li>
              <li>• <strong>Improve Platform:</strong> Enhance features and user experience</li>
              <li>• <strong>Customer Support:</strong> Respond to inquiries and provide assistance</li>
              <li>• <strong>Security:</strong> Protect against fraud and unauthorized access</li>
              <li>• <strong>Communications:</strong> Send updates, newsletters, and important notices</li>
              <li>• <strong>Analytics:</strong> Understand usage patterns and platform performance</li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Sharing */}
        <Card>
          <CardHeader>
            <CardTitle>Information Sharing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We do not sell your personal information. We may share information in these limited circumstances:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>• <strong>With Your Consent:</strong> When you explicitly authorize sharing</li>
              <li>• <strong>Service Providers:</strong> Trusted partners who help operate our platform</li>
              <li>• <strong>Legal Requirements:</strong> When required by law or to protect rights</li>
              <li>• <strong>Business Transfers:</strong> In case of merger, acquisition, or sale</li>
              <li>• <strong>Public Portfolios:</strong> Content you choose to make publicly visible</li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Data Security
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>• SSL/TLS encryption for data transmission</li>
              <li>• Encrypted storage of sensitive information</li>
              <li>• Regular security audits and vulnerability assessments</li>
              <li>• Access controls and authentication systems</li>
              <li>• Regular data backups and disaster recovery plans</li>
              <li>• Employee training on data protection practices</li>
            </ul>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card>
          <CardHeader>
            <CardTitle>Your Rights and Choices</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>• <strong>Access:</strong> Request a copy of your personal data</li>
              <li>• <strong>Correction:</strong> Update or correct inaccurate information</li>
              <li>• <strong>Deletion:</strong> Request deletion of your account and data</li>
              <li>• <strong>Portability:</strong> Export your data in a machine-readable format</li>
              <li>• <strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li>• <strong>Restrict Processing:</strong> Limit how we use your information</li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you have questions about this Privacy Policy or want to exercise your rights, contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Email:</strong> privacy@portfoliocraft.com</p>
              <p><strong>Address:</strong> K L University, Guntur District, Vijayawada, AP 520001, India</p>
              <p><strong>Phone:</strong> +1 (555) 012-3456</p>
            </div>
          </CardContent>
        </Card>

        {/* Updates */}
        <Card>
          <CardHeader>
            <CardTitle>Policy Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any material 
              changes by email or through our platform. Your continued use of PortfolioCraft after 
              such modifications constitutes acceptance of the updated Privacy Policy.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}