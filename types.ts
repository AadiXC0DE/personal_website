import React from 'react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  status: 'Featured' | 'In Production' | 'AI-Powered' | 'Acquired' | 'Archived' | 'Coming Soon' | 'In Development';
  year: string;
  imageUrl?: string;
}

export interface SubRole {
  title: string;
  role: string;
  description: string;
  stack?: string[];
  logoUrl?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  description?: React.ReactNode; // Changed to ReactNode to allow bolding
  subRoles?: SubRole[];
  techStack?: string[];
  highlights?: string[];
  logoUrl?: string;
}

export interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  description: string;
  link: string;
  tags: string[];
}

export interface SpeakingItem {
  title: string;
  role: string;
  description: string;
  date: string;
  image?: string;
  stats?: string;
}

export interface TweetMoment {
  id: string;
  tweetUrl: string; // Just for reference/linking
  tweetContent: string;
  tweetDate: string;
  likes: string;
  retweets: string;
  views: string;
  hasMedia?: boolean;
  mediaUrl?: string;
  storyTitle: string;
  storyContent: React.ReactNode;
  orientation: 'left' | 'right'; // Tweet on left or right
}

export interface NavItem {
  label: string;
  id: string;
  icon: React.ReactNode;
}