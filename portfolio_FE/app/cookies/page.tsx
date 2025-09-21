import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cookie, Settings, Shield, Eye, ToggleLeft, ToggleRight } from "lucide-react"

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Learn how we use cookies and similar technologies to improve your experience
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          Last updated: September 21, 2025
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Cookie Settings Panel */}
        <Card className="border-primary">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Cookie Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">Essential Cookies</h3>
                  <p className="text-sm text-muted-foreground">Required for basic site functionality</p>
                </div>
                <ToggleRight className="w-6 h-6 text-primary" />
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">Analytics Cookies</h3>
                  <p className="text-sm text-muted-foreground">Help us understand how you use our site</p>
                </div>
                <ToggleRight className="w-6 h-6 text-primary" />
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">Marketing Cookies</h3>
                  <p className="text-sm text-muted-foreground">Used to deliver relevant advertisements</p>
                </div>
                <ToggleLeft className="w-6 h-6 text-muted-foreground" />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <Button>Save Preferences</Button>
              <Button variant="secondary" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">Accept All</Button>
              <Button variant="secondary" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">Reject Optional</Button>
            </div>
          </CardContent>
        </Card>

        {/* What Are Cookies */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cookie className="w-5 h-5" />
              What Are Cookies?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              understanding how you use our service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h3 className="font-semibold mb-2">First-Party Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  Set directly by PortfolioCraft to provide core functionality and remember your preferences.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h3 className="font-semibold mb-2">Third-Party Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  Set by external services we use for analytics, advertising, and other features.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Types of Cookies */}
        <Card>
          <CardHeader>
            <CardTitle>Types of Cookies We Use</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Essential Cookies (Always Active)
              </h3>
              <p className="text-muted-foreground mb-3">
                These cookies are necessary for the website to function properly and cannot be disabled.
              </p>
              <ul className="text-muted-foreground space-y-1 ml-4">
                <li>• Authentication and security</li>
                <li>• Session management</li>
                <li>• Form data retention</li>
                <li>• Load balancing</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Analytics Cookies
              </h3>
              <p className="text-muted-foreground mb-3">
                Help us understand how visitors interact with our website.
              </p>
              <ul className="text-muted-foreground space-y-1 ml-4">
                <li>• Google Analytics - Usage statistics and user behavior</li>
                <li>• Hotjar - Heatmaps and session recordings</li>
                <li>• Internal analytics - Feature usage and performance</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Functional Cookies</h3>
              <p className="text-muted-foreground mb-3">
                Enhance functionality and personalization.
              </p>
              <ul className="text-muted-foreground space-y-1 ml-4">
                <li>• Theme preferences (dark/light mode)</li>
                <li>• Language settings</li>
                <li>• Recently viewed templates</li>
                <li>• Dashboard layout preferences</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Marketing Cookies</h3>
              <p className="text-muted-foreground mb-3">
                Used to deliver relevant content and advertisements.
              </p>
              <ul className="text-muted-foreground space-y-1 ml-4">
                <li>• Facebook Pixel - Social media advertising</li>
                <li>• Google Ads - Search and display advertising</li>
                <li>• LinkedIn Insights - Professional platform advertising</li>
                <li>• Email marketing tracking</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Managing Cookies */}
        <Card>
          <CardHeader>
            <CardTitle>Managing Your Cookie Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">On Our Website</h3>
              <p className="text-muted-foreground">
                You can manage your cookie preferences using the settings panel above. 
                Your choices will be remembered for future visits.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">In Your Browser</h3>
              <p className="text-muted-foreground mb-3">
                Most browsers allow you to control cookies through their settings:
              </p>
              <ul className="text-muted-foreground space-y-1 ml-4">
                <li>• <strong>Chrome:</strong> Settings → Privacy and security → Cookies</li>
                <li>• <strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
                <li>• <strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                <li>• <strong>Edge:</strong> Settings → Privacy → Cookies</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Third-Party Opt-Outs</h3>
              <p className="text-muted-foreground mb-3">
                You can opt out of certain third-party cookies directly:
              </p>
              <ul className="text-muted-foreground space-y-1 ml-4">
                <li>• Google Analytics: <span className="text-primary">tools.google.com/dlpage/gaoptout</span></li>
                <li>• Facebook: <span className="text-primary">facebook.com/settings/ads</span></li>
                <li>• LinkedIn: <span className="text-primary">linkedin.com/psettings/advertising</span></li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Data Retention */}
        <Card>
          <CardHeader>
            <CardTitle>Cookie Retention Periods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="font-semibold mb-2">Session Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    Deleted when you close your browser
                  </p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="font-semibold mb-2">Persistent Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    Stored for 30 days to 2 years
                  </p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="font-semibold mb-2">Analytics Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    Typically stored for 24 months
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle>Questions About Cookies?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you have questions about our use of cookies or this policy, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Email:</strong> privacy@portfoliocraft.com</p>
              <p><strong>Address:</strong> K L University, Guntur District, Vijayawada, AP 520001, India</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}