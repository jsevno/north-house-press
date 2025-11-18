# Hosting & Technology Requirements

**Version:** 1.0  
**Date:** 2025-01-23  
**Status:** Research & Recommendations  
**Next Review:** Before WordPress site development begins

---

## Executive Summary

This document outlines hosting options, WordPress requirements, and technology stack recommendations for North House Press website. Based on project requirements: 6-page site, WooCommerce e-commerce, UK/Ireland shipping, Glassbox ebook integration, and non-technical users.

---

## WordPress Hosting Options

### Recommended: UK-Based Hosting Providers

#### Option 1: Krystal Hosting (Recommended for UK)
- **Location:** UK-based, excellent for UK businesses
- **WordPress Plans:** From £4.99/month
- **Features:**
  - One-click WordPress installation
  - Free SSL certificates
  - Daily backups
  - UK-based support
  - WooCommerce optimized
  - 99.9% uptime guarantee
- **Pros:** UK-based, excellent support, WooCommerce-friendly
- **Cons:** Slightly higher cost than international hosts
- **Best For:** UK businesses wanting local support

#### Option 2: 34SP.com
- **Location:** UK-based
- **WordPress Plans:** From £5/month
- **Features:**
  - Managed WordPress hosting
  - Free SSL
  - Daily backups
  - UK support team
  - WooCommerce ready
- **Pros:** UK-based, good reputation, reasonable pricing
- **Cons:** Smaller provider, fewer features than premium hosts
- **Best For:** Small UK businesses

#### Option 3: SiteGround
- **Location:** UK data centers available
- **WordPress Plans:** From £2.99/month (first year)
- **Features:**
  - Managed WordPress hosting
  - Free SSL and CDN
  - Daily backups
  - Excellent support
  - WooCommerce optimized
  - UK data center option
- **Pros:** Excellent performance, great support, WooCommerce-friendly
- **Cons:** Price increases after first year
- **Best For:** Performance-focused sites

### Alternative: International Providers

#### Bluehost
- **Location:** US-based (UK data centers available)
- **WordPress Plans:** From $2.95/month
- **Features:**
  - WordPress.org recommended
  - One-click installation
  - Free domain (first year)
  - Free SSL
  - 24/7 support
- **Pros:** WordPress recommended, affordable, reliable
- **Cons:** US-based (may affect UK performance slightly)
- **Best For:** Budget-conscious, international reach

#### WP Engine (Premium)
- **Location:** Global (UK data centers)
- **WordPress Plans:** From $20/month
- **Features:**
  - Managed WordPress hosting
  - Excellent performance
  - Daily backups
  - Staging environment
  - WooCommerce optimized
- **Pros:** Premium performance, excellent support, staging
- **Cons:** Higher cost, may be overkill for small site
- **Best For:** High-traffic sites, premium requirements

---

## WordPress Technical Requirements

### Minimum Server Requirements

**WordPress Core Requirements:**
- **PHP:** Version 8.3 or greater (recommended)
- **MySQL:** Version 8.0 or greater OR MariaDB 10.6 or greater
- **Web Server:** Apache or Nginx with HTTPS support
- **HTTPS:** SSL certificate (free with most hosts)
- **Memory:** Minimum 128MB PHP memory (256MB recommended)

**WooCommerce Additional Requirements:**
- **PHP:** 7.4 or greater (8.0+ recommended)
- **MySQL:** 5.6 or greater
- **Memory:** 256MB PHP memory minimum
- **HTTPS:** Required for payment processing

### Recommended Hosting Specifications

**For Small E-commerce Site (North House Press):**
- **Storage:** 10-20GB (sufficient for books, images, content)
- **Bandwidth:** 50-100GB/month (adequate for small traffic)
- **Email Accounts:** 5-10 (for different functions)
- **Databases:** 1-2 (WordPress + optional)
- **SSL Certificate:** Free (Let's Encrypt or host-provided)
- **Backups:** Daily automated backups
- **Support:** 24/7 UK-based preferred

---

## Technology Stack

### Core Platform

#### WordPress
- **Version:** Latest (6.4+)
- **Type:** Self-hosted WordPress.org (not WordPress.com)
- **Rationale:** 
  - Most common in publishing industry
  - Full control and customization
  - WooCommerce compatibility
  - Extensive plugin ecosystem
  - User-friendly for non-technical users

### E-commerce

#### WooCommerce
- **Purpose:** Shopping cart and e-commerce functionality
- **Features Needed:**
  - Product catalog (books)
  - Shopping cart
  - Checkout process
  - Payment processing (Stripe, PayPal)
  - UK/Ireland shipping restrictions
  - Order management
  - Print labels integration
- **Cost:** Free (open source)
- **Extensions Needed:**
  - Shipping zones (UK/Ireland only)
  - Payment gateways
  - Order management
  - Label printing (optional)

### Ebook Platform

#### Glassbox
- **Purpose:** Ebook sales and delivery
- **Commission:** 20% of sales
- **Integration:** WordPress plugin/widget
- **Features:**
  - Ebook file hosting
  - Secure download delivery
  - Sales tracking
  - Customer management
- **David's Experience:** Used successfully in previous publishing role
- **Status:** Recommended by David, needs integration research

### Payment Processing

#### Stripe (Recommended)
- **Purpose:** Credit/debit card payments
- **Features:**
  - UK-based payments
  - Secure processing
  - WooCommerce integration
  - Low transaction fees (~1.4% + 20p)
- **Setup:** Requires business bank account
- **Alternative:** PayPal (also supported by WooCommerce)

### Shipping & Fulfillment

#### Royal Mail Integration
- **Purpose:** UK shipping labels and rates
- **Options:**
  - Manual label printing (simple, low volume)
  - WooCommerce Royal Mail extension (automated)
  - Third-party fulfillment service (if volume grows)
- **Current Plan:** Direct fulfillment from Scotland
- **Shipping Zones:** UK and Ireland only

### Essential Plugins

#### Security
- **Wordfence Security** - Firewall and malware protection
- **UpdraftPlus** - Automated backups
- **SSL Certificate** - HTTPS encryption (free with hosting)

#### Performance
- **WP Super Cache** or **W3 Total Cache** - Page caching
- **Smush** or **ShortPixel** - Image optimization
- **Lazy Loading** - Faster page loads

#### SEO
- **Yoast SEO** or **Rank Math** - SEO optimization
- **Google Analytics** - Traffic tracking
- **XML Sitemap** - Search engine indexing

#### User Experience
- **Contact Form 7** or **WPForms** - Contact forms
- **Cookie Notice** - GDPR compliance
- **Accessibility** - WCAG compliance tools

---

## Technology Requirements from Briefing

### Specifically Requested

1. **WordPress Platform**
   - ✅ Requested: "WordPress is the most commonly used website builder in publishing"
   - ✅ Status: Recommended, agnostic but WordPress preferred

2. **Shopping Cart**
   - ✅ Requested: "Shopping cart on there for both print and ebooks"
   - ✅ Solution: WooCommerce

3. **Ebook Integration**
   - ✅ Requested: Glassbox (20% commission)
   - ✅ Status: David's previous experience, needs integration

4. **UK/Ireland Only Shipping**
   - ✅ Requested: "UK and Ireland fulfillment only"
   - ✅ Solution: WooCommerce shipping zones

5. **Direct Fulfillment**
   - ✅ Requested: "We would do it ourselves from here"
   - ✅ Solution: Manual or semi-automated order processing

6. **Simple Architecture**
   - ✅ Requested: 6 pages (Home, Books, Authors, News/Events, Contacts, Submissions)
   - ✅ Solution: Standard WordPress pages

### Implied Requirements

1. **User-Friendly CMS**
   - Non-technical users (David & Kirsty)
   - Easy content updates
   - Simple book entry system

2. **Moss Green Branding**
   - Color scheme from logo
   - Custom theme or child theme
   - Brand consistency

3. **Older Target Audience**
   - Large, readable fonts
   - High contrast
   - Simple navigation
   - Mobile responsive

4. **Book Cover Display**
   - High-res image support
   - Professional presentation
   - Gallery/catalog view

---

## Hosting Comparison Table

| Provider | Location | Price/Month | WordPress | WooCommerce | UK Support | Best For |
|----------|----------|-------------|-----------|-------------|------------|----------|
| **Krystal** | UK | £4.99+ | ✅ Optimized | ✅ Ready | ✅ Yes | UK businesses |
| **34SP** | UK | £5+ | ✅ Managed | ✅ Ready | ✅ Yes | Small UK sites |
| **SiteGround** | UK/US | £2.99+ | ✅ Managed | ✅ Ready | ✅ Yes | Performance |
| **Bluehost** | US/UK | $2.95+ | ✅ Recommended | ✅ Ready | ⚠️ Limited | Budget |
| **WP Engine** | Global | $20+ | ✅ Premium | ✅ Optimized | ✅ Yes | Premium needs |

---

## Recommended Hosting Plan

### For North House Press (Initial Launch)

**Recommended:** Krystal Hosting - WordPress Business Plan
- **Cost:** ~£7-10/month
- **Includes:**
  - Managed WordPress hosting
  - Free SSL certificate
  - Daily backups
  - UK-based support
  - WooCommerce optimized
  - 10GB storage (sufficient for launch)
  - Unlimited bandwidth
  - Email accounts included

**Why Krystal:**
- UK-based (important for UK business)
- Excellent support (critical for non-technical users)
- WooCommerce-friendly
- Reasonable pricing
- Good reputation in UK market

### Alternative: SiteGround StartUp Plan
- **Cost:** £2.99/month (first year), then £9.99/month
- **Includes:** Similar features, excellent performance
- **Consideration:** Price increase after first year

---

## Domain Name

### Recommendations
- **Primary:** `northhousepress.co.uk` (UK domain)
- **Alternative:** `northhousepress.com` (international)
- **Also Consider:** `northhousepress.scot` (Scottish domain)

### Domain Registration
- Can register through hosting provider (often free first year)
- Or separately through:
  - Namecheap
  - GoDaddy
  - 123-reg (UK-based)

---

## Email Hosting

### Options

#### Option 1: Hosting Provider Email
- **Included:** Most hosting plans include email
- **Cost:** Free with hosting
- **Features:** Basic email accounts
- **Best For:** Simple needs, cost-effective

#### Option 2: Google Workspace
- **Cost:** £5/user/month
- **Features:** Professional email, Google Drive, collaboration
- **Best For:** Professional email, multiple users

#### Option 3: Microsoft 365
- **Cost:** £4.50/user/month
- **Features:** Professional email, Office apps
- **Best For:** Microsoft ecosystem users

**Recommendation:** Start with hosting provider email, upgrade if needed.

---

## Backup & Security

### Backup Strategy

**Automated Backups:**
- **Hosting Provider:** Daily automated backups (included)
- **WordPress Plugin:** UpdraftPlus (free) - additional backup layer
- **Frequency:** Daily backups, weekly off-site storage
- **Retention:** 30 days minimum

**Manual Backups:**
- Before major updates
- Before plugin installations
- Monthly full site export

### Security Measures

**Essential:**
- SSL certificate (HTTPS) - free with hosting
- WordPress security plugin (Wordfence)
- Regular WordPress updates
- Strong passwords
- Two-factor authentication (optional but recommended)

**Recommended:**
- Malware scanning
- Firewall protection
- Login attempt limiting
- File integrity monitoring

---

## Performance Optimization

### Critical for Older Audience

**Page Speed:**
- Image optimization (compress book covers)
- Caching plugin (WP Super Cache)
- CDN (Content Delivery Network) - optional
- Minimize plugins (only essential)

**Mobile Optimization:**
- Responsive theme (mobile-first)
- Touch-friendly buttons (44px minimum)
- Readable fonts (18px+ body text)
- Fast loading on mobile networks

**Accessibility:**
- High contrast (moss green on white)
- Large, readable fonts
- Clear navigation
- Keyboard navigation support
- Screen reader compatibility

---

## Development & Staging

### Recommended Setup

**Development Environment:**
- Local development (Local by Flywheel or MAMP)
- Or staging site on hosting provider
- Test before going live

**Staging Site:**
- Some hosts include staging (WP Engine, SiteGround)
- Or use plugin (WP Staging)
- Test updates before production

---

## Cost Estimate

### Initial Setup Costs

| Item | Cost | Frequency |
|------|------|-----------|
| Domain Name | £10-15 | Annual |
| WordPress Hosting | £5-10 | Monthly |
| SSL Certificate | Free | Included |
| WordPress | Free | - |
| WooCommerce | Free | - |
| Essential Plugins | £0-50 | One-time |
| **Total First Year** | **£70-185** | - |

### Ongoing Costs

| Item | Cost | Frequency |
|------|------|-----------|
| Hosting | £5-10 | Monthly |
| Domain Renewal | £10-15 | Annual |
| Plugin Updates | £0-100 | Annual |
| **Total Annual** | **£70-235** | - |

### Transaction Costs

| Item | Cost | Notes |
|------|------|-------|
| Stripe Fees | 1.4% + 20p | Per transaction |
| PayPal Fees | 2.9% + 30p | Per transaction |
| Glassbox Commission | 20% | Ebook sales only |
| Shipping | Variable | Royal Mail rates |

---

## Implementation Timeline

### Phase 1: Setup (Week 1-2)
- [ ] Choose hosting provider
- [ ] Register domain name
- [ ] Set up hosting account
- [ ] Install WordPress
- [ ] Configure basic settings

### Phase 2: Development (Week 3-6)
- [ ] Install WooCommerce
- [ ] Set up product catalog
- [ ] Configure shipping (UK/Ireland)
- [ ] Set up payment processing
- [ ] Integrate Glassbox
- [ ] Design theme (moss green)
- [ ] Create 6 pages

### Phase 3: Testing (Week 7-8)
- [ ] Test checkout process
- [ ] Test shipping calculations
- [ ] Test ebook delivery
- [ ] Test on mobile devices
- [ ] User acceptance testing

### Phase 4: Launch (Week 9)
- [ ] Final content review
- [ ] SEO optimization
- [ ] Analytics setup
- [ ] Go live
- [ ] Monitor and fix issues

---

## Support & Maintenance

### Ongoing Maintenance Needs

**Weekly:**
- Monitor site performance
- Check for security updates
- Review orders and fulfillment

**Monthly:**
- WordPress core updates
- Plugin updates
- Backup verification
- Performance review

**Quarterly:**
- Security audit
- Content review
- SEO check
- User feedback review

### Support Options

**Hosting Provider Support:**
- 24/7 technical support
- WordPress assistance
- Server issues

**WordPress Community:**
- WordPress.org forums
- WooCommerce support
- Plugin documentation

**Professional Support:**
- Developer for complex issues
- Maintenance service (optional)
- Training for David & Kirsty

---

## Risk Assessment

### Potential Issues

1. **Technical Complexity**
   - **Risk:** Non-technical users may struggle
   - **Mitigation:** Simple interface, training, documentation

2. **Hosting Downtime**
   - **Risk:** Site unavailable, lost sales
   - **Mitigation:** Choose reliable host, monitoring

3. **Security Breaches**
   - **Risk:** Hacked site, data loss
   - **Mitigation:** Security plugins, regular updates, backups

4. **Payment Processing Issues**
   - **Risk:** Failed transactions, lost sales
   - **Mitigation:** Test thoroughly, multiple payment options

5. **Shipping Complexity**
   - **Risk:** Wrong addresses, fulfillment errors
   - **Mitigation:** Clear process, label printing, verification

---

## Recommendations Summary

### Hosting
✅ **Primary Recommendation:** Krystal Hosting (UK-based, excellent support)  
✅ **Alternative:** SiteGround (performance-focused, UK data center)

### Platform
✅ **WordPress.org** (self-hosted)  
✅ **WooCommerce** (e-commerce)

### Key Technologies
✅ **Glassbox** (ebook sales - 20% commission)  
✅ **Stripe** (payment processing)  
✅ **Royal Mail** (UK shipping)

### Budget
✅ **Initial Setup:** £70-185  
✅ **Ongoing:** £70-235/year + transaction fees

---

## Next Steps

1. **Review hosting options** with David & Kirsty
2. **Choose hosting provider** and register domain
3. **Set up WordPress** and basic configuration
4. **Install WooCommerce** and configure
5. **Research Glassbox integration** in detail
6. **Begin theme development** (moss green design)
7. **Create 6-page structure**

---

**Last Updated:** 2025-01-23  
**Next Review:** Before WordPress development begins  
**Status:** Research complete - Ready for decision

