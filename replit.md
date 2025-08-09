# SafetySync.ai - OSHA Compliance Automation Platform

## Overview

SafetySync.ai is a modern web application designed to automate OSHA compliance through AI-powered training record management. The platform aims to eliminate manual paperwork, reduce compliance risks, and save time by automatically capturing, verifying, and storing OSHA training records. It features automated recordkeeping, smart certificate generation, and an audit-ready dashboard for tracking expirations and compliance status.

The landing page features a sophisticated dark theme with tech-forward design elements including animated gradients, glassmorphism effects, floating background orbs, and modern interactive animations. The design uses a blue-to-purple gradient color scheme throughout for a cohesive, professional appearance.

The custom SafetySync.AI logo has been integrated as a clickable home button in both navigation and footer, featuring a shield design with AI circuitry patterns and compliance checkmark that perfectly represents the brand's focus on AI-powered OSHA compliance automation.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Tech-forward, modern design with sophisticated animations and glassmorphism effects.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component development
- **Routing**: Wouter for lightweight client-side routing with a simple API
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Framework**: Radix UI primitives with shadcn/ui components for accessible, customizable interface elements
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for consistent theming
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for API development
- **Language**: TypeScript throughout the stack for consistency and type safety
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Database**: PostgreSQL (configured via Neon serverless) for reliable data persistence
- **Session Management**: Express sessions with PostgreSQL store for user authentication
- **Development**: Hot module replacement and development middleware integration

### Project Structure
- **Monorepo Layout**: Unified codebase with shared types and utilities
- **Client Directory**: Contains React frontend application with component-based architecture
- **Server Directory**: Houses Express backend with API routes and business logic
- **Shared Directory**: Common TypeScript schemas and types used across frontend and backend

### Database Design
- **Schema Management**: Drizzle Kit for database migrations and schema evolution
- **Type Generation**: Automated TypeScript types from database schema using Drizzle Zod
- **User Management**: Basic user table with username/password authentication structure

### Privacy & Compliance System
- **Cookie Consent Management**: Comprehensive `useConsent` hook with granular category controls (essential, analytics, marketing, preferences)
- **Interactive Consent Banner**: Sophisticated dark-themed modal matching SafetySync.ai's glassmorphism design with proper spacing, positioning, and user-friendly controls
- **Theme Integration**: Cookie banner styled with gray-900/95 background, backdrop-blur-xl, blue gradient buttons, and consistent typography matching the site's design language
- **Modal Positioning**: Optimized modal placement at 80% from top with proper centering and responsive sizing (max-w-2xl for banner, max-w-xl for modal)
- **Legal Pages**: GDPR/CCPA compliant Privacy Policy and Terms of Service with proper legal frameworks
- **Event-Driven Architecture**: Custom event system for reopening cookie settings from footer
- **Security Headers**: Configured `_headers` file with DENY frame options, HSTS, and content type protection

### Development Workflow
- **Development Server**: Integrated Express server with Vite middleware for unified development
- **Code Quality**: TypeScript strict mode enabled across all modules
- **Asset Management**: Centralized asset handling with proper path resolution
- **Error Handling**: Structured error responses and development error overlays

## External Dependencies

### Database & Storage
- **Neon Database**: Serverless PostgreSQL hosting for scalable data storage
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL adapter

### UI & Styling
- **Radix UI**: Comprehensive primitive component library for accessibility
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Modern icon library for consistent iconography
- **Inter Font**: Professional typography via Google Fonts

### Development Tools
- **Vite**: Modern build tool with development server and HMR
- **TypeScript**: Static type checking across the entire codebase
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

### State Management & API
- **TanStack Query**: Server state management with caching and synchronization
- **Wouter**: Lightweight routing solution for React applications

### Form & Validation
- **React Hook Form**: Performant form library with validation support
- **Zod**: TypeScript-first schema validation for runtime type safety

### Replit Integration
- **Replit Plugins**: Development environment integration with error modals and cartographer support