import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Clock, 
  Activity,
  Server,
  Database,
  Wifi,
  Shield,
  Zap
} from "lucide-react"

export default function StatusPage() {
  const currentTime = new Date().toLocaleString()

  const services = [
    {
      name: "Website",
      status: "operational",
      description: "Main PortfolioCraft website",
      uptime: "99.98%",
      responseTime: "145ms"
    },
    {
      name: "Portfolio Builder",
      status: "operational", 
      description: "Portfolio creation and editing service",
      uptime: "99.95%",
      responseTime: "230ms"
    },
    {
      name: "Template Gallery",
      status: "operational",
      description: "Template browsing and preview service",
      uptime: "99.99%",
      responseTime: "98ms"
    },
    {
      name: "User Authentication",
      status: "operational",
      description: "Sign in, sign up, and user management",
      uptime: "99.97%",
      responseTime: "167ms"
    },
    {
      name: "File Storage",
      status: "operational",
      description: "Image and asset hosting service",
      uptime: "99.94%",
      responseTime: "89ms"
    },
    {
      name: "Database",
      status: "operational",
      description: "User data and portfolio storage",
      uptime: "99.96%",
      responseTime: "45ms"
    },
    {
      name: "API Gateway",
      status: "degraded",
      description: "Main API routing and load balancing",
      uptime: "98.12%",
      responseTime: "450ms"
    },
    {
      name: "Email Service",
      status: "operational",
      description: "Notifications and transactional emails",
      uptime: "99.89%",
      responseTime: "1.2s"
    }
  ]

  const incidents = [
    {
      date: "Sep 20, 2025 14:30 UTC",
      title: "API Gateway Performance Issues",
      status: "investigating",
      description: "We're experiencing slower than normal response times for API requests. Our team is investigating the cause.",
      severity: "minor"
    },
    {
      date: "Sep 18, 2025 09:15 UTC",
      title: "Scheduled Maintenance Complete",
      status: "resolved",
      description: "Database maintenance has been completed successfully. All services are now fully operational.",
      severity: "maintenance"
    },
    {
      date: "Sep 15, 2025 16:45 UTC",
      title: "Template Upload Issues Resolved",
      status: "resolved", 
      description: "Fixed an issue where users were unable to upload custom images to their portfolios.",
      severity: "minor"
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="w-4 h-4 text-emerald-500" />
      case "degraded":
        return <AlertCircle className="w-4 h-4 text-yellow-500" />
      case "outage":
        return <XCircle className="w-4 h-4 text-red-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800">Operational</Badge>
      case "degraded":
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Degraded</Badge>
      case "outage":
        return <Badge className="bg-red-100 text-red-800 border-red-200">Outage</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getIncidentBadge = (status: string, severity: string) => {
    if (status === "resolved") {
      return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800">Resolved</Badge>
    }
    if (status === "investigating") {
      return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Investigating</Badge>
    }
    if (severity === "maintenance") {
      return <Badge className="bg-purple-100 text-purple-800 border-purple-200">Maintenance</Badge>
    }
    return <Badge variant="secondary">{status}</Badge>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">System Status</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Real-time status and performance information for all PortfolioCraft services
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          Last updated: {currentTime}
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Overall Status */}
        <Card className="border-emerald-200 bg-emerald-50/50 dark:border-emerald-800 dark:bg-emerald-900/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
              <CheckCircle className="w-5 h-5" />
              All Systems Operational
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-emerald-700 dark:text-emerald-400">
              All major systems are functioning normally. Minor performance issues with API Gateway are being monitored.
            </p>
          </CardContent>
        </Card>

        {/* Service Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Service Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(service.status)}
                    <div>
                      <h3 className="font-semibold">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    {getStatusBadge(service.status)}
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>Uptime: {service.uptime}</span>
                      <span>Response: {service.responseTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Response Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">156ms</div>
              <p className="text-xs text-muted-foreground">Average response time (24h)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Server className="w-4 h-4" />
                Uptime
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">99.96%</div>
              <p className="text-xs text-muted-foreground">Overall uptime (30 days)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Wifi className="w-4 h-4" />
                Incidents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">1</div>
              <p className="text-xs text-muted-foreground">Active incidents</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Incidents */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Recent Incidents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {incidents.map((incident, index) => (
                <div key={index} className="border-l-4 border-l-blue-500 pl-4 py-2">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{incident.title}</h3>
                    {getIncidentBadge(incident.status, incident.severity)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{incident.description}</p>
                  <p className="text-xs text-muted-foreground">{incident.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Subscribe to Updates */}
        <Card>
          <CardHeader>
            <CardTitle>Stay Informed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Subscribe to status updates and be the first to know about any service issues or maintenance windows.
            </p>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                Subscribe to Updates
              </button>
              <button className="px-4 py-2 border border-border rounded-md hover:bg-muted">
                RSS Feed
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}