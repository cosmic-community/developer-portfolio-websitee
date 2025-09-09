// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Project interface
export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    project_name?: string;
    description?: string;
    technologies?: string[];
    project_image?: {
      url: string;
      imgix_url: string;
    };
    live_url?: string;
    github_url?: string;
    status?: {
      key: string;
      value: string;
    };
  };
}

// Skill interface
export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    skill_name?: string;
    proficiency?: {
      key: string;
      value: string;
    };
    category?: {
      key: string;
      value: string;
    };
    years_experience?: number;
  };
}

// Work Experience interface
export interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
    job_title?: string;
    company_name?: string;
    company_logo?: {
      url: string;
      imgix_url: string;
    };
    start_date?: string;
    end_date?: string | null;
    current_position?: boolean;
    description?: string;
    achievements?: string;
    technologies?: string[];
  };
}

// Testimonial interface
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name?: string;
    client_photo?: {
      url: string;
      imgix_url: string;
    };
    company_title?: string;
    testimonial_text?: string;
    rating?: {
      key: string;
      value: string;
    };
    related_project?: Project;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
export function isProject(obj: CosmicObject): obj is Project {
  return obj.type === 'projects';
}

export function isSkill(obj: CosmicObject): obj is Skill {
  return obj.type === 'skills';
}

export function isWorkExperience(obj: CosmicObject): obj is WorkExperience {
  return obj.type === 'work-experience';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}

// Type literals for select-dropdown values
export type ProjectStatus = 'completed' | 'in-progress' | 'archived';
export type SkillProficiency = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools' | 'mobile';
export type TestimonialRating = '1' | '2' | '3' | '4' | '5';