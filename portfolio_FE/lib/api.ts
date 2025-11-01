// API Configuration and Service Layer
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8058';

// API Response type
interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message: string;
  statusCode: number;
}

// Parse backend response format: "statusCode::message"
const parseBackendResponse = (response: string): { statusCode: number; message: string } => {
  const [statusCode, ...messageParts] = response.split('::');
  return {
    statusCode: parseInt(statusCode),
    message: messageParts.join('::')
  };
};

// Get auth token from localStorage
const getAuthToken = (): string | null => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Remove status code prefix if present (e.g., "200::token")
      const parsed = parseBackendResponse(token);
      return parsed.message || token;
    }
  }
  return null;
};

// Set auth token in localStorage
const setAuthToken = (token: string): void => {
  if (typeof window !== 'undefined') {
    // Remove status code prefix if present
    const parsed = parseBackendResponse(token);
    localStorage.setItem('authToken', parsed.message || token);
  }
};

// Remove auth token from localStorage
const removeAuthToken = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('authToken');
  }
};

// Generic API request handler
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const token = getAuthToken();
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    // Add authorization header if token exists and not login/signup endpoint
    if (token && !endpoint.includes('/signin') && !endpoint.includes('/signup')) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const textResponse = await response.text();
    
    // Check if response is JSON (GET endpoints return JSON objects/arrays)
    // or statusCode::message format (POST/PUT/DELETE return this)
    if (textResponse.startsWith('{') || textResponse.startsWith('[')) {
      // JSON response (GET endpoints)
      const isSuccess = response.ok;
      return {
        success: isSuccess,
        data: textResponse as T,
        message: isSuccess ? 'Success' : 'Error',
        statusCode: response.status,
      };
    } else {
      // statusCode::message format (POST/PUT/DELETE endpoints)
      const parsed = parseBackendResponse(textResponse);
      const isSuccess = parsed.statusCode === 200;

      return {
        success: isSuccess,
        data: textResponse as T,
        message: parsed.message,
        statusCode: parsed.statusCode,
      };
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message || 'Network error occurred',
      statusCode: 500,
    };
  }
}

// ============== Authentication APIs ==============

export interface SignupData {
  fullname: string;
  email: string;
  password: string;
}

export interface SigninData {
  email: string;
  password: string;
}

export const authApi = {
  signup: async (data: SignupData): Promise<ApiResponse> => {
    return apiRequest('/customer/signup', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  signin: async (data: SigninData): Promise<ApiResponse<string>> => {
    const response = await apiRequest<string>('/customer/signin', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (response.success && response.data) {
      setAuthToken(response.data);
    }

    return response;
  },

  logout: async (): Promise<ApiResponse> => {
    const response = await apiRequest('/customer/logout', {
      method: 'POST',
    });

    if (response.success) {
      removeAuthToken();
    }

    return response;
  },

  isAuthenticated: (): boolean => {
    return !!getAuthToken();
  },
};

// ============== Personal Info APIs ==============

export interface PersonalInfoData {
  email: string;
  fullname: string;
  professionalTitle: string;
  phoneNumber: string;
  location: string;
  personalWebsite?: string;
  professionalBio: string;
  githubProfile?: string;
  linkedinProfile?: string;
}

export const personalInfoApi = {
  add: async (data: PersonalInfoData): Promise<ApiResponse> => {
    return apiRequest('/personalinfo/addinfo', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  
  get: async (email: string): Promise<ApiResponse<PersonalInfoData>> => {
    const response = await apiRequest<string>(`/personalinfo/get?email=${email}`, {
      method: 'GET',
    });
    
    if (response.success && response.data) {
      try {
        // Parse JSON string to object
        const jsonData = typeof response.data === 'string' 
          ? JSON.parse(response.data) 
          : response.data;
        return {
          success: true,
          data: jsonData,
          message: response.message,
          statusCode: response.statusCode
        };
      } catch (error) {
        console.error('Error parsing personal info:', error);
        return {
          success: false,
          message: 'Failed to parse response',
          statusCode: 500
        };
      }
    }
    
    return {
      success: false,
      message: response.message || 'No data found',
      statusCode: response.statusCode || 404
    };
  },
};

// ============== Projects APIs ==============

export interface ProjectData {
  personalInfo: {
    email: string;
  };
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string;
}

export const projectsApi = {
  add: async (data: ProjectData): Promise<ApiResponse> => {
    return apiRequest('/Projects/add', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  delete: async (id: number): Promise<ApiResponse> => {
    return apiRequest(`/Projects/delete/${id}`, {
      method: 'DELETE',
    });
  },
  
  list: async (email: string): Promise<ApiResponse<ProjectData[]>> => {
    const response = await apiRequest<string>(`/Projects/list?email=${email}`, {
      method: 'GET',
    });
    
    if (response.success && response.data) {
      try {
        const jsonData = typeof response.data === 'string' 
          ? JSON.parse(response.data) 
          : response.data;
        return {
          success: true,
          data: jsonData,
          message: response.message,
          statusCode: response.statusCode
        };
      } catch (error) {
        console.error('Error parsing projects:', error);
        return {
          success: false,
          data: [],
          message: 'Failed to parse response',
          statusCode: 500
        };
      }
    }
    
    return {
      success: true,
      data: [],
      message: 'No projects found',
      statusCode: 200
    };
  },
};

// ============== Work Experience APIs ==============

export interface WorkExperienceData {
  personalInfo: {
    email: string;
  };
  company: string;
  position: string;
  duration: string; // Format: "Jan 2020 - Dec 2023" or "Jan 2020 - Present"
  description: string;
}

export const workExperienceApi = {
  add: async (data: WorkExperienceData): Promise<ApiResponse> => {
    return apiRequest('/WorkExperince/add', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  delete: async (id: number): Promise<ApiResponse> => {
    return apiRequest(`/WorkExperince/delete/${id}`, {
      method: 'DELETE',
    });
  },
  
  list: async (email: string): Promise<ApiResponse<WorkExperienceData[]>> => {
    const response = await apiRequest<string>(`/WorkExperince/list?email=${email}`, {
      method: 'GET',
    });
    
    if (response.success && response.data) {
      try {
        const jsonData = typeof response.data === 'string' 
          ? JSON.parse(response.data) 
          : response.data;
        return {
          success: true,
          data: jsonData,
          message: response.message,
          statusCode: response.statusCode
        };
      } catch (error) {
        console.error('Error parsing work experiences:', error);
        return {
          success: false,
          data: [],
          message: 'Failed to parse response',
          statusCode: 500
        };
      }
    }
    
    return {
      success: true,
      data: [],
      message: 'No work experiences found',
      statusCode: 200
    };
  },
};

// ============== Technical Skills APIs ==============

export interface TechnicalSkillData {
  personalInfo: {
    email: string;
  };
  skillName: string;
  proficiencyLevel: string; // e.g., "Beginner", "Intermediate", "Advanced", "Expert"
}

export const skillsApi = {
  add: async (data: TechnicalSkillData): Promise<ApiResponse> => {
    return apiRequest('/skills/add', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  delete: async (id: number): Promise<ApiResponse> => {
    return apiRequest(`/skills/delete/${id}`, {
      method: 'DELETE',
    });
  },
  
  list: async (email: string): Promise<ApiResponse<TechnicalSkillData[]>> => {
    const response = await apiRequest<string>(`/skills/list?email=${email}`, {
      method: 'GET',
    });
    
    if (response.success && response.data) {
      try {
        const jsonData = typeof response.data === 'string' 
          ? JSON.parse(response.data) 
          : response.data;
        return {
          success: true,
          data: jsonData,
          message: response.message,
          statusCode: response.statusCode
        };
      } catch (error) {
        console.error('Error parsing skills:', error);
        return {
          success: false,
          data: [],
          message: 'Failed to parse response',
          statusCode: 500
        };
      }
    }
    
    return {
      success: true,
      data: [],
      message: 'No skills found',
      statusCode: 200
    };
  },
};

// Export token management utilities
export { getAuthToken, setAuthToken, removeAuthToken };
