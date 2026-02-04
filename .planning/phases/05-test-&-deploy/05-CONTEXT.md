# Phase 5: Test & Deploy - Context

**Gathered:** 2026-02-04
**Status:** Ready for planning

<domain>
## Phase Boundary

Deploy the static Next.js build to PHP hosting (cPanel/Plesk) and verify all functionality works in production: mobile responsiveness, form submission to n8n, cross-browser compatibility.

</domain>

<decisions>
## Implementation Decisions

### Deploy method
- Manual upload via cPanel File Manager, FTP, or SFTP
- Full replacement of the out/ folder (not incremental)
- Document deployment steps in CONTEXT.md for future reference
- .env.example file will be provided as template

### Production config
- Create .env.production.example file with all required variables
- Document n8n webhook workflow activation steps
- Document production webhook URL configuration
- Include pre-deploy checklist to verify build output

### Claude's Discretion
- Backup strategy before deployment (decide based on risk level)
- Testing scope (devices and browsers to verify)
- Rollback strategy (how to handle issues if deploy fails)

</decisions>

<specifics>
## Specific Ideas

- Deployment should be repeatable and documented for future updates
- n8n webhook setup must be clear — user activates workflow in UI, then updates env var with production URL
- Pre-deploy verification ensures static export still works before uploading

</specifics>

<deferred>
## Deferred Ideas

- None — discussion stayed within phase scope

</deferred>

---

*Phase: 05-test-&-deploy*
*Context gathered: 2026-02-04*
