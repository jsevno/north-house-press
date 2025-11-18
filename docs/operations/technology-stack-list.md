# Technology Stack - Complete List

**Version:** 1.0  
**Date:** 2025-01-23  
**Status:** Comprehensive Technology Requirements

---

## Core Platform

### WordPress
- **Type:** WordPress.org (self-hosted)
- **Version:** Latest (6.4+)
- **Purpose:** Content management system
- **Rationale:** Most common in publishing, user-friendly, WooCommerce compatible
- **Status:** ✅ Confirmed (David: "WordPress is most commonly used in publishing")

---

## E-commerce Platform

### WooCommerce
- **Type:** WordPress plugin
- **Cost:** Free (open source)
- **Purpose:** Shopping cart, product catalog, order management
- **Features Required:**
  - Product catalog (books)
  - Shopping cart functionality
  - Checkout process
  - Payment gateway integration
  - Shipping zone configuration (UK/Ireland only)
  - Order management system
  - Customer accounts (optional)
- **Status:** ✅ Required (shopping cart for print + ebooks)

### WooCommerce Extensions Needed
- **Shipping Zones:** UK and Ireland only
- **Payment Gateways:** Stripe, PayPal
- **Order Management:** Basic order tracking
- **Label Printing:** Optional (Royal Mail integration)

---

## Ebook Platform

### Glassbox
- **Type:** Third-party service
- **Cost:** 20% commission on ebook sales
- **Purpose:** Ebook sales and secure delivery
- **Features:**
  - Ebook file hosting
  - Secure download delivery
  - Sales tracking
  - Customer management
  - WordPress integration widget
- **David's Experience:** Used successfully in previous publishing role during lockdown
- **Integration:** WordPress plugin/widget
- **Status:** ✅ Specifically requested by David

---

## Payment Processing

### Stripe (Primary Recommendation)
- **Type:** Payment gateway
- **Cost:** 1.4% + 20p per transaction (UK)
- **Purpose:** Credit/debit card payments
- **Features:**
  - Secure payment processing
  - WooCommerce integration
  - UK-based
  - PCI compliant
- **Setup Requirements:**
  - Business bank account
  - Business registration (SC838774)
  - Business verification
- **Status:** ✅ Recommended for UK businesses

### PayPal (Alternative)
- **Type:** Payment gateway
- **Cost:** 2.9% + 30p per transaction
- **Purpose:** Alternative payment method
- **Features:**
  - PayPal account payments
  - Credit card processing
  - WooCommerce integration
  - Widely recognized
- **Status:** ✅ Alternative option

---

## Shipping & Fulfillment

### Royal Mail
- **Type:** UK postal service
- **Purpose:** Shipping labels and rates
- **Integration Options:**
  - Manual label printing (simple, low volume)
  - WooCommerce Royal Mail extension (automated rates)
  - Royal Mail Click & Drop (online shipping)
- **Shipping Zones:** UK and Ireland only
- **Status:** ✅ Required (UK/Ireland fulfillment)

### Shipping Restrictions
- **Geographic:** UK and Ireland only
- **Rationale:** 
  - Post-Brexit EU regulations complex
  - US/Australia better via Amazon/Gardners
  - 80-90% of demand from UK/Ireland
- **Implementation:** WooCommerce shipping zones
- **Status:** ✅ Specifically requested

---

## Hosting & Infrastructure

### Web Hosting
- **Type:** Managed WordPress hosting
- **Requirements:**
  - PHP 8.3+
  - MySQL 8.0+ or MariaDB 10.6+
  - HTTPS/SSL support
  - 10-20GB storage
  - 50-100GB bandwidth/month
  - Daily backups
  - UK-based support (preferred)
- **Recommended Providers:**
  - Krystal Hosting (UK-based)
  - 34SP.com (UK-based)
  - SiteGround (UK data center)
- **Status:** ⏳ To be decided

### Domain Name
- **Type:** .co.uk or .com
- **Options:**
  - northhousepress.co.uk (UK domain)
  - northhousepress.com (international)
  - northhousepress.scot (Scottish domain)
- **Status:** ⏳ To be registered

### SSL Certificate
- **Type:** HTTPS encryption
- **Cost:** Free (Let's Encrypt or host-provided)
- **Purpose:** Secure transactions, SEO benefit
- **Status:** ✅ Required (included with hosting)

---

## Essential WordPress Plugins

### Security
- **Wordfence Security**
  - Firewall protection
  - Malware scanning
  - Login security
  - Cost: Free (premium available)

- **UpdraftPlus**
  - Automated backups
  - Cloud storage options
  - Restore functionality
  - Cost: Free (premium available)

### Performance
- **WP Super Cache** or **W3 Total Cache**
  - Page caching
  - Faster load times
  - Cost: Free

- **Smush** or **ShortPixel**
  - Image optimization
  - Compress book covers
  - Cost: Free (premium available)

### SEO
- **Yoast SEO** or **Rank Math**
  - SEO optimization
  - Meta tags
  - Sitemap generation
  - Cost: Free (premium available)

- **Google Analytics**
  - Traffic tracking
  - User behavior
  - Cost: Free

### User Experience
- **Contact Form 7** or **WPForms**
  - Contact forms
  - Submission forms
  - Cost: Free (WPForms premium available)

- **Cookie Notice**
  - GDPR compliance
  - Cookie consent
  - Cost: Free

---

## Design & Branding

### Theme
- **Type:** Custom theme or child theme
- **Base:** WordPress theme (Twenty Twenty-Four or similar)
- **Customization:**
  - Moss green color scheme
  - Custom typography
  - Book-focused layout
  - Responsive design
- **Status:** ⏳ To be developed

### Color Scheme
- **Primary:** Moss green (from logo)
- **Implementation:** CSS variables, theme customization
- **Status:** ✅ Confirmed (from briefing)

### Typography
- **Headlines:** Playfair Display (serif, literary)
- **Body:** Lora or Merriweather (serif, readable)
- **UI:** Inter or Source Sans Pro (sans-serif, modern)
- **Status:** ⏳ To be confirmed with brand guidelines

---

## Content Management

### Page Structure
1. **Home** - Landing page, featured books
2. **Books** - Catalog of all titles
3. **Authors** - Author profiles and bios
4. **News/Events** - Updates and announcements
5. **Contacts** - Contact form and information
6. **Submissions** - Guidelines for authors

### Custom Post Types
- **Books** - Custom post type for book entries
- **Authors** - Custom post type for author profiles
- **Events** - Custom post type for news/events

### Media Management
- **Book Covers** - High-res images (300dpi)
- **Author Photos** - Professional headshots
- **Logo** - Multiple formats (PNG, SVG, EPS)
- **Optimization** - Compress for web, maintain quality

---

## Email & Communication

### Email Hosting
- **Option 1:** Hosting provider email (included)
- **Option 2:** Google Workspace (£5/user/month)
- **Option 3:** Microsoft 365 (£4.50/user/month)
- **Recommended:** Start with hosting provider, upgrade if needed
- **Status:** ⏳ To be decided

### Email Addresses Needed
- info@northhousepress.co.uk
- submissions@northhousepress.co.uk
- orders@northhousepress.co.uk (optional)
- david@northhousepress.co.uk
- kirsty@northhousepress.co.uk

---

## Analytics & Tracking

### Google Analytics
- **Purpose:** Website traffic and user behavior
- **Cost:** Free
- **Setup:** WordPress plugin or manual code
- **Status:** ✅ Recommended

### WooCommerce Analytics
- **Purpose:** Sales tracking, product performance
- **Cost:** Included with WooCommerce
- **Features:** Sales reports, customer insights
- **Status:** ✅ Included

### Conversion Tracking
- **Purpose:** Track sales, form submissions
- **Tools:** Google Analytics goals, WooCommerce reports
- **Status:** ✅ Recommended

---

## Security & Compliance

### Security Measures
- **SSL Certificate** - HTTPS encryption
- **WordPress Security Plugin** - Firewall, malware protection
- **Regular Updates** - WordPress core, plugins, themes
- **Strong Passwords** - For all accounts
- **Two-Factor Authentication** - Optional but recommended
- **Backup Strategy** - Daily automated backups

### GDPR Compliance
- **Cookie Notice** - Required for EU/UK
- **Privacy Policy** - Required for data collection
- **Terms & Conditions** - E-commerce requirements
- **Data Protection** - Secure customer data storage

---

## Integration Requirements

### Glassbox Integration
- **Method:** WordPress plugin/widget
- **Requirements:**
  - Ebook file upload
  - Sales tracking
  - Download delivery
  - Customer management
- **Status:** ⏳ Needs research and setup

### Payment Gateway Integration
- **Stripe:** WooCommerce Stripe plugin
- **PayPal:** WooCommerce PayPal plugin
- **Setup:** Business accounts required
- **Status:** ⏳ To be configured

### Shipping Integration
- **Royal Mail:** WooCommerce shipping zones
- **Rates:** Manual or automated calculation
- **Labels:** Manual printing or automated
- **Status:** ⏳ To be configured

---

## Mobile & Accessibility

### Mobile Optimization
- **Responsive Design** - Mobile-first approach
- **Touch Targets** - 44px minimum (older users)
- **Readable Fonts** - 18px+ body text
- **Fast Loading** - Optimized for mobile networks
- **Status:** ✅ Critical for older target audience

### Accessibility
- **WCAG Compliance** - AA standard minimum
- **High Contrast** - Moss green on white
- **Keyboard Navigation** - Full site accessibility
- **Screen Readers** - Proper markup and alt text
- **Status:** ✅ Important for inclusive design

---

## Development Tools

### Local Development
- **Local by Flywheel** - Free WordPress local development
- **MAMP** - Alternative local development
- **Purpose:** Test before going live
- **Status:** ✅ Recommended

### Version Control
- **Git** - Code versioning
- **GitHub** - Repository hosting
- **Purpose:** Track changes, backup code
- **Status:** ✅ Already in use

### Staging Environment
- **Hosting Provider** - Some include staging
- **WP Staging Plugin** - Create staging site
- **Purpose:** Test updates before production
- **Status:** ✅ Recommended

---

## Content Delivery

### CDN (Content Delivery Network)
- **Purpose:** Faster global page loads
- **Options:**
  - Cloudflare (free tier available)
  - Jetpack CDN (WordPress)
  - Hosting provider CDN
- **Status:** ⚠️ Optional (may not be needed initially)

### Image Optimization
- **Purpose:** Faster page loads
- **Tools:**
  - Smush plugin
  - ShortPixel plugin
  - Manual optimization
- **Status:** ✅ Recommended

---

## Third-Party Services

### Book Distribution (Future)
- **Amazon** - For international sales
- **Gardners** - UK wholesaler
- **Status:** ⚠️ Future consideration (not direct sales)

### Social Media Integration
- **Facebook** - Social sharing, book promotion
- **Twitter/X** - Literary community engagement
- **Instagram** - Visual book promotion
- **Status:** ⚠️ Optional, for marketing

### Newsletter
- **Mailchimp** - Email marketing (free tier)
- **ConvertKit** - Creator-focused (paid)
- **Purpose:** Reader updates, book announcements
- **Status:** ⚠️ Future consideration

---

## Technology Summary Table

| Category | Technology | Status | Cost | Priority |
|----------|------------|--------|------|----------|
| **CMS** | WordPress.org | ✅ Required | Free | Critical |
| **E-commerce** | WooCommerce | ✅ Required | Free | Critical |
| **Ebooks** | Glassbox | ✅ Requested | 20% commission | Critical |
| **Payments** | Stripe | ✅ Recommended | 1.4% + 20p | Critical |
| **Payments** | PayPal | ✅ Alternative | 2.9% + 30p | Important |
| **Shipping** | Royal Mail | ✅ Required | Variable | Critical |
| **Hosting** | TBD (Krystal/SiteGround) | ⏳ To decide | £5-10/mo | Critical |
| **Domain** | .co.uk or .com | ⏳ To register | £10-15/yr | Critical |
| **SSL** | Let's Encrypt | ✅ Required | Free | Critical |
| **Security** | Wordfence | ✅ Recommended | Free | Critical |
| **Backups** | UpdraftPlus | ✅ Recommended | Free | Critical |
| **SEO** | Yoast SEO | ✅ Recommended | Free | Important |
| **Analytics** | Google Analytics | ✅ Recommended | Free | Important |
| **Forms** | Contact Form 7 | ✅ Recommended | Free | Important |
| **Performance** | WP Super Cache | ✅ Recommended | Free | Important |
| **Images** | Smush | ✅ Recommended | Free | Important |

---

## Implementation Priority

### Phase 1: Essential (Launch)
- WordPress installation
- WooCommerce setup
- Basic theme (moss green)
- 6 pages created
- Payment processing (Stripe)
- Shipping zones (UK/Ireland)
- Glassbox integration
- Security plugins
- Backup system

### Phase 2: Important (Post-Launch)
- SEO optimization
- Analytics setup
- Performance optimization
- Email system
- Newsletter integration
- Social media integration

### Phase 3: Enhancement (Future)
- Advanced analytics
- Marketing automation
- Customer accounts
- Review system
- Advanced shipping options

---

## Cost Breakdown

### One-Time Costs
- Domain registration: £10-15
- Theme development: £0-500 (if custom)
- Initial setup: £0 (pro bono MVP)

### Monthly Costs
- Hosting: £5-10
- **Total Monthly:** £5-10

### Annual Costs
- Domain renewal: £10-15
- Hosting: £60-120
- **Total Annual:** £70-135

### Transaction Costs (Per Sale)
- Stripe: 1.4% + 20p
- Glassbox (ebooks only): 20%
- Shipping: Variable (Royal Mail rates)

---

## Next Steps

1. **Review hosting options** - Choose provider
2. **Register domain** - Secure northhousepress.co.uk
3. **Set up hosting** - Install WordPress
4. **Install WooCommerce** - Configure e-commerce
5. **Research Glassbox** - Integration details
6. **Set up payments** - Stripe/PayPal accounts
7. **Configure shipping** - UK/Ireland zones
8. **Develop theme** - Moss green design
9. **Create content** - 6 pages, book entries
10. **Test thoroughly** - Before launch

---

**Last Updated:** 2025-01-23  
**Next Review:** Before WordPress development begins  
**Status:** Complete technology requirements list

