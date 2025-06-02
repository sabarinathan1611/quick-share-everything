
# AnonShare Project Overview

## 🎯 Mission Statement

AnonShare is a privacy-first platform that enables users to share text, notes, and files anonymously without requiring registration or personal information. Our mission is to provide a secure, simple, and accessible way for people to share content while maintaining complete anonymity and privacy.

## 🏗️ Project Architecture

### Frontend Technology Stack
- **React 18** - Modern functional components with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components
- **React Router DOM** - Client-side routing
- **TanStack Query** - Data fetching and caching
- **Lucide React** - Beautiful icon library

### Backend & Infrastructure
- **Supabase** - Backend-as-a-Service platform
  - PostgreSQL database for data storage
  - Authentication system (though not used for anonymous sharing)
  - File storage for uploaded files
  - Edge functions for serverless operations
- **Resend** - Email service for recovery notifications
- **Lovable Platform** - AI-powered development and hosting

## 🔧 Core Features

### 1. Anonymous Clipboard
- Share text snippets instantly with 4-digit codes
- Optional password protection
- Optional email recovery
- Automatic expiration for security

### 2. Rich Text Notepad
- WYSIWYG editor with formatting options
- Support for headers, lists, links, and styling
- Code sharing with generated access codes
- Collaborative note sharing

### 3. Secure File Sharing
- Upload files up to 50MB
- Download limits and expiration dates
- Anonymous file drop functionality
- Secure temporary storage

### 4. Code-Based Retrieval System
- Simple 4-digit numeric codes (e.g., 3453)
- Instant access without accounts
- Collision-resistant code generation
- Temporary code validity

## 📊 Database Schema

### Core Tables

#### `shares` Table
- `id` (UUID) - Primary key
- `code` (TEXT) - 4-digit access code
- `type` (TEXT) - Type: 'text', 'note', or 'file'
- `content` (TEXT) - Stored content for text/notes
- `file_path` (TEXT) - Storage path for files
- `file_name` (TEXT) - Original filename
- `file_size` (BIGINT) - File size in bytes
- `password_hash` (TEXT) - Optional password protection
- `recovery_email` (TEXT) - Optional recovery email
- `download_limit` (INTEGER) - Max downloads allowed
- `download_count` (INTEGER) - Current download count
- `expires_at` (TIMESTAMP) - Expiration date
- `created_at` (TIMESTAMP) - Creation timestamp

#### `cleanup_logs` Table
- `id` (UUID) - Primary key
- `share_id` (TEXT) - Reference to cleaned share
- `share_type` (TEXT) - Type of cleaned content
- `cleanup_reason` (TEXT) - Reason for cleanup
- `file_size` (BIGINT) - Size of cleaned file
- `created_at` (TIMESTAMP) - Cleanup timestamp

## 🔐 Security Features

### Privacy Protection
- No user accounts or personal data collection
- Anonymous sharing without tracking
- Automatic content expiration
- Optional password protection
- End-to-end encryption for sensitive content

### Data Retention
- Automatic cleanup of expired content
- Configurable retention periods
- Secure deletion of files from storage
- Audit logging for compliance

### Access Control
- Code-based access only
- Download limits for files
- Password protection options
- Recovery email system (optional)

## 🌐 SEO & Discoverability

### Target Keywords
- Anonymous clipboard
- Paste without login
- Secure file share
- Online notepad
- Anonymous sharing
- Instant file sharing
- Privacy tools
- Temporary file sharing

### Content Strategy
- Educational content about privacy
- Use case examples and tutorials
- Technical documentation
- Community-driven content

## 📱 User Experience

### Design Principles
- **Simplicity First** - Minimal UI with clear actions
- **Privacy by Design** - No unnecessary data collection
- **Accessibility** - WCAG compliant components
- **Responsive Design** - Works on all devices
- **Performance** - Fast loading and interaction

### User Flow
1. **Create** - User uploads content using any tool
2. **Share** - System generates 4-digit code
3. **Access** - Recipients enter code to retrieve content
4. **Expire** - Content automatically expires for security

## 🚀 Development Workflow

### Code Organization
```
src/
├── components/     # Reusable UI components
├── pages/         # Route-based page components
├── utils/         # Utility functions and services
├── integrations/  # External service integrations
└── lib/          # Shared libraries and configurations
```

### Quality Assurance
- TypeScript for compile-time error checking
- Component-based architecture for maintainability
- Responsive design testing across devices
- Performance monitoring and optimization

## 📈 Analytics & Monitoring

### Privacy-Compliant Analytics
- Ketch consent management for GDPR compliance
- Conditional loading of tracking scripts
- User-controlled data collection
- Anonymous usage statistics only

### Performance Monitoring
- Core Web Vitals tracking
- Error logging and reporting
- API response time monitoring
- User experience metrics

## 🔮 Future Roadmap

### Planned Features
- Advanced encryption options
- Team collaboration tools
- API for developers
- Mobile application
- Browser extensions

### Technical Improvements
- Enhanced security features
- Performance optimizations
- Accessibility enhancements
- Internationalization (i18n)

## 🤝 Contributing

### Development Setup
1. Clone the repository
2. Install dependencies with `npm install`
3. Configure environment variables
4. Run development server with `npm run dev`

### Contribution Guidelines
- Follow TypeScript best practices
- Maintain component modularity
- Include comprehensive documentation
- Test across multiple devices and browsers
- Ensure accessibility compliance

## 📞 Support & Community

### Getting Help
- Documentation at `/about`
- FAQ section at `/faq`
- Community discussions
- Issue tracking and bug reports

### Contact
- Technical support through platform
- Feature requests via community channels
- Security issues through responsible disclosure

---

**Built with ❤️ using [Lovable](https://lovable.dev) - AI-powered web development platform.**

*Last updated: June 2025*
