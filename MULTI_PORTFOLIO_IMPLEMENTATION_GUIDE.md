# Multi-Portfolio Management Implementation Guide

## Backend API Endpoints Needed

### Portfolio Management APIs

#### 1. Create New Portfolio
```
POST /portfolio/create
Request Body:
{
  "email": "john@example.com",
  "portfolioName": "Software Developer Portfolio",
  "templateType": "modern"
}
Response:
{
  "statusCode": 200,
  "message": "success",
  "portfolioId": 1
}
```

#### 2. Get All User Portfolios
```
GET /portfolio/list?email=john@example.com
Response:
{
  "statusCode": 200,
  "portfolios": [
    {
      "id": 1,
      "portfolioName": "Software Developer Portfolio",
      "templateType": "modern",
      "createdAt": "2024-01-15",
      "updatedAt": "2024-01-20",
      "isActive": true
    },
    {
      "id": 2,
      "portfolioName": "Freelance Designer",
      "templateType": "creative",
      "createdAt": "2024-02-10",
      "updatedAt": "2024-02-10",
      "isActive": true
    }
  ]
}
```

#### 3. Get Single Portfolio (with all data)
```
GET /portfolio/get?portfolioId=1
Response:
{
  "statusCode": 200,
  "portfolio": {
    "id": 1,
    "portfolioName": "Software Developer Portfolio",
    "templateType": "modern",
    "personalInfo": {
      "fullname": "John Doe",
      "email": "john@example.com",
      "phone": "+1234567890",
      ...
    },
    "projects": [...],
    "workExperience": [...],
    "skills": [...]
  }
}
```

#### 4. Update Portfolio Name/Template
```
PUT /portfolio/update
Request Body:
{
  "portfolioId": 1,
  "portfolioName": "Updated Portfolio Name",
  "templateType": "professional"
}
```

#### 5. Delete Portfolio
```
DELETE /portfolio/delete?portfolioId=1
Response:
{
  "statusCode": 200,
  "message": "Portfolio deleted successfully"
}
```

#### 6. Duplicate Portfolio
```
POST /portfolio/duplicate
Request Body:
{
  "portfolioId": 1,
  "newPortfolioName": "Copy of Software Developer Portfolio"
}
```

### Modified Data APIs (add portfolioId parameter)

#### Personal Info
```
POST /personalinfo/addinfo?portfolioId=1
PUT /personalinfo/update?portfolioId=1
GET /personalinfo/get?portfolioId=1
```

#### Projects
```
POST /Projects/add?portfolioId=1
PUT /Projects/update?projectId=123
DELETE /Projects/delete?projectId=123
GET /Projects/list?portfolioId=1
```

#### Work Experience
```
POST /WorkExperince/add?portfolioId=1
PUT /WorkExperince/update?experienceId=456
DELETE /WorkExperince/delete?experienceId=456
GET /WorkExperince/list?portfolioId=1
```

#### Skills
```
POST /skills/add?portfolioId=1
PUT /skills/update?skillId=789
DELETE /skills/delete?skillId=789
GET /skills/list?portfolioId=1
```

---

## Frontend Implementation Plan

### New Pages/Routes

#### 1. Dashboard (`/dashboard/page.tsx`)
**Purpose:** Main hub showing all user's portfolios

**Features:**
- Grid view of all portfolios (cards with preview thumbnail)
- "Create New Portfolio" button
- Each portfolio card shows:
  - Portfolio name
  - Template type
  - Last updated date
  - Preview button
  - Edit button
  - Duplicate button
  - Delete button (with confirmation)
  - Share/Download buttons

**UI Design:**
```
┌─────────────────────────────────────────┐
│  My Portfolios                    [+ New]│
├─────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌────────┐│
│  │ [Image]  │  │ [Image]  │  │ [+New] ││
│  │ Portfolio│  │ Portfolio│  │ Create ││
│  │ Name 1   │  │ Name 2   │  │Portfolio││
│  │ Modern   │  │ Creative │  │        ││
│  │ Updated  │  │ Updated  │  │        ││
│  │ 2 days ago│  │ 5 days ago│  │        ││
│  │[Edit][Del]│  │[Edit][Del]│  │        ││
│  └──────────┘  └──────────┘  └────────┘│
└─────────────────────────────────────────┘
```

#### 2. Portfolio Builder - Edit Mode (`/builder?mode=edit&portfolioId=1`)

**Flow:**
1. Load existing portfolio data using `portfolioId`
2. Pre-populate all 7 steps with existing data
3. Allow user to modify any section
4. Save button updates existing data instead of creating new

**State Management:**
```typescript
const [editMode, setEditMode] = useState(false);
const [currentPortfolioId, setCurrentPortfolioId] = useState<number | null>(null);
const [loadingPortfolio, setLoadingPortfolio] = useState(false);
```

#### 3. Portfolio List Component (`components/portfolio-list.tsx`)

**Features:**
- Fetch all portfolios on mount
- Display in responsive grid
- Filter/search portfolios by name
- Sort by date created/updated
- Handle loading states
- Handle empty state (no portfolios yet)

---

## User Flows

### Flow 1: Create New Portfolio
```
Dashboard → Click "Create New" → Builder (step 1-7) → Save → Back to Dashboard
```

### Flow 2: Edit Existing Portfolio
```
Dashboard → Click "Edit" on Portfolio Card → Builder (pre-filled, edit mode) 
→ Modify data → Click "Update" → Back to Dashboard
```

### Flow 3: View Portfolio
```
Dashboard → Click "Preview" → Full portfolio view (read-only) 
→ Option to "Edit" or "Share"
```

### Flow 4: Duplicate Portfolio
```
Dashboard → Click "Duplicate" → Confirm → New portfolio created 
→ Dashboard refreshes with new copy
```

### Flow 5: Delete Portfolio
```
Dashboard → Click "Delete" → Confirmation dialog → Confirm 
→ Portfolio deleted → Dashboard refreshes
```

---

## Modified State Structure

### Portfolio Builder State
```typescript
interface PortfolioBuilderState {
  mode: 'create' | 'edit';
  portfolioId: number | null;
  portfolioName: string;
  selectedTemplate: string;
  personalInfo: PersonalInfo;
  projects: Project[];
  workExperience: Experience[];
  skills: Skill[];
  currentStep: number;
  isLoading: boolean;
  isSaving: boolean;
}
```

---

## Database Schema Updates

### Current Schema Issues:
- Tables use `email` as primary link
- No way to distinguish between multiple portfolios for same user
- No portfolio metadata (name, template, timestamps)

### Proposed Schema:
```
customer (existing)
├── email (PK)
├── password
└── fullname

portfolio (NEW)
├── id (PK, AUTO_INCREMENT)
├── user_email (FK → customer.email)
├── portfolio_name
├── template_type
├── is_active
├── created_at
└── updated_at

personalinfo
├── id (PK)
├── portfolio_id (FK → portfolio.id) [NEW]
├── email (keep for backward compatibility)
└── ... other fields

projects
├── id (PK)
├── portfolio_id (FK → portfolio.id) [NEW]
├── email (keep for backward compatibility)
└── ... other fields

workexperince
├── id (PK)
├── portfolio_id (FK → portfolio.id) [NEW]
├── email (keep for backward compatibility)
└── ... other fields

techincalskills
├── id (PK)
├── portfolio_id (FK → portfolio.id) [NEW]
├── email (keep for backward compatibility)
└── ... other fields
```

---

## Implementation Priority

### Phase 1 (Critical - Edit Functionality)
1. ✅ Database migration (add portfolio table + portfolio_id columns)
2. Create Portfolio entity and repository (Backend)
3. Create GET endpoints to retrieve existing portfolio data
4. Modify Builder to support `mode=edit` URL parameter
5. Pre-populate form fields when loading in edit mode
6. Change "Complete & Save" to "Update Portfolio" in edit mode

### Phase 2 (High - Multi-Portfolio)
1. Create Portfolio Management APIs (CRUD)
2. Create Dashboard page (`/dashboard`)
3. Create Portfolio List component
4. Add "Create New Portfolio" workflow
5. Test create multiple portfolios per user

### Phase 3 (Medium - UX Enhancements)
1. Add portfolio preview functionality
2. Implement duplicate portfolio feature
3. Add confirmation dialogs for delete
4. Add search/filter in dashboard
5. Add portfolio thumbnails/previews

### Phase 4 (Low - Advanced Features)
1. Export portfolio to PDF
2. Share portfolio via unique URL
3. Portfolio analytics (views, clicks)
4. Portfolio templates marketplace
5. Version history for portfolios

---

## Code Examples

### Backend - Portfolio Controller (NEW)
```java
@RestController
@RequestMapping("/portfolio")
@CrossOrigin(origins = "http://localhost:3000")
public class PortfolioController {
    
    @Autowired
    private PortfolioService portfolioService;
    
    @PostMapping("/create")
    public ResponseEntity<String> createPortfolio(@RequestBody PortfolioRequest request) {
        Portfolio portfolio = portfolioService.create(request);
        return ResponseEntity.ok("200::Portfolio created::portfolioId=" + portfolio.getId());
    }
    
    @GetMapping("/list")
    public ResponseEntity<List<Portfolio>> listPortfolios(@RequestParam String email) {
        List<Portfolio> portfolios = portfolioService.findByUserEmail(email);
        return ResponseEntity.ok(portfolios);
    }
    
    @GetMapping("/get")
    public ResponseEntity<PortfolioDetailDTO> getPortfolio(@RequestParam Long portfolioId) {
        PortfolioDetailDTO portfolio = portfolioService.getFullPortfolio(portfolioId);
        return ResponseEntity.ok(portfolio);
    }
    
    @PutMapping("/update")
    public ResponseEntity<String> updatePortfolio(@RequestBody PortfolioUpdateRequest request) {
        portfolioService.update(request);
        return ResponseEntity.ok("200::Portfolio updated");
    }
    
    @DeleteMapping("/delete")
    public ResponseEntity<String> deletePortfolio(@RequestParam Long portfolioId) {
        portfolioService.delete(portfolioId);
        return ResponseEntity.ok("200::Portfolio deleted");
    }
}
```

### Frontend - Portfolio API Service
```typescript
// lib/api.ts - Add portfolio management functions

export const portfolioApi = {
  // Create new portfolio
  create: async (portfolioName: string, templateType: string) => {
    return apiRequest<{ portfolioId: number }>('/portfolio/create', {
      method: 'POST',
      body: JSON.stringify({
        email: getCurrentUserEmail(),
        portfolioName,
        templateType
      })
    });
  },

  // Get all user portfolios
  list: async () => {
    const email = getCurrentUserEmail();
    return apiRequest<Portfolio[]>(`/portfolio/list?email=${email}`);
  },

  // Get single portfolio with all data
  get: async (portfolioId: number) => {
    return apiRequest<PortfolioDetail>(`/portfolio/get?portfolioId=${portfolioId}`);
  },

  // Update portfolio
  update: async (portfolioId: number, data: Partial<Portfolio>) => {
    return apiRequest('/portfolio/update', {
      method: 'PUT',
      body: JSON.stringify({ portfolioId, ...data })
    });
  },

  // Delete portfolio
  delete: async (portfolioId: number) => {
    return apiRequest(`/portfolio/delete?portfolioId=${portfolioId}`, {
      method: 'DELETE'
    });
  },

  // Duplicate portfolio
  duplicate: async (portfolioId: number, newName: string) => {
    return apiRequest('/portfolio/duplicate', {
      method: 'POST',
      body: JSON.stringify({ portfolioId, newPortfolioName: newName })
    });
  }
};
```

### Frontend - Dashboard Component (NEW)
```typescript
// app/dashboard/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/auth-context';
import { portfolioApi } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Portfolio {
  id: number;
  portfolioName: string;
  templateType: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

export default function Dashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    loadPortfolios();
  }, [user]);

  const loadPortfolios = async () => {
    setLoading(true);
    const response = await portfolioApi.list();
    if (response.success && response.data) {
      setPortfolios(response.data);
    }
    setLoading(false);
  };

  const handleEdit = (portfolioId: number) => {
    router.push(`/builder?mode=edit&portfolioId=${portfolioId}`);
  };

  const handleDelete = async (portfolioId: number) => {
    if (confirm('Are you sure you want to delete this portfolio?')) {
      const response = await portfolioApi.delete(portfolioId);
      if (response.success) {
        loadPortfolios(); // Refresh list
      }
    }
  };

  const handleCreateNew = () => {
    router.push('/builder?mode=create');
  };

  if (loading) return <div>Loading portfolios...</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Portfolios</h1>
        <Button onClick={handleCreateNew}>+ Create New Portfolio</Button>
      </div>

      {portfolios.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">
            You haven't created any portfolios yet.
          </p>
          <Button onClick={handleCreateNew}>Create Your First Portfolio</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolios.map((portfolio) => (
            <Card key={portfolio.id} className="p-4">
              <h3 className="font-bold text-lg mb-2">{portfolio.portfolioName}</h3>
              <p className="text-sm text-muted-foreground mb-1">
                Template: {portfolio.templateType}
              </p>
              <p className="text-xs text-muted-foreground mb-4">
                Updated: {new Date(portfolio.updatedAt).toLocaleDateString()}
              </p>
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  onClick={() => handleEdit(portfolio.id)}
                >
                  Edit
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => router.push(`/showcase?portfolioId=${portfolio.id}`)}
                >
                  Preview
                </Button>
                <Button 
                  size="sm" 
                  variant="destructive"
                  onClick={() => handleDelete(portfolio.id)}
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
```

---

## Summary

**Key Changes Required:**

1. **Database:** Add `portfolio` table + `portfolio_id` foreign keys
2. **Backend:** Create Portfolio Controller + modify existing controllers to accept `portfolioId`
3. **Frontend:** Create Dashboard page + modify Builder for edit mode
4. **API Layer:** Add portfolio management functions to api.ts

**User Experience:**
- User logs in → Lands on Dashboard
- Dashboard shows all their portfolios
- Can create unlimited portfolios
- Can edit any portfolio by clicking Edit
- Each portfolio is independent with its own data
- Can duplicate portfolios to create variations
- Can delete portfolios they no longer need

Would you like me to start implementing any specific phase?
