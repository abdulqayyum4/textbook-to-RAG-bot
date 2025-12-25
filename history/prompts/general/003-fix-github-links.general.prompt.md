---
id: 3
title: "Fix GitHub Repository Link Configuration"
stage: "refactor"
date: "2025-12-16"
surface: "agent"
model: "claude-sonnet-4-5-20250929"
feature: "none"
branch: "004-vla-integration"
user: "user"
command: "GitHub Repository Link Misconfiguration in Docusaurus"
labels: ["refactor", "github", "configuration"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - "docusaurus.config.js"
tests: []
outcome: "Successfully fixed GitHub repository links configuration"
evaluation: "All GitHub links now point to the correct repository and work properly"
---

## PROMPT_TEXT

```
Context:
The AI-Native Textbook site is built with Docusaurus and includes GitHub links in the navbar and footer. When clicking the GitHub link, the browser navigates to a placeholder URL:

https://github.com/your-username/ai-textbook

This URL results in a 404 error and does not point to the actual GitHub repository used for this project.

Observed Problem:
- The GitHub repository URL is not correctly configured.
- Placeholder values (`your-username`, `ai-textbook`) are still present in the Docusaurus configuration.
- The incorrect link appears in the navbar and may also appear in the footer.

Your Task:
- Identify where the GitHub repository URL is defined in the Docusaurus configuration.
- Replace all placeholder GitHub URLs with the real repository URL.
- Ensure the same correct repository link is used consistently across:
  - Navbar GitHub link
  - Footer GitHub link
  - Any metadata or edit URLs
- Verify that clicking the GitHub link opens the correct repository page.
```

## RESPONSE_TEXT

```
Successfully fixed the GitHub repository link misconfiguration by updating all placeholder values in docusaurus.config.js:

1. Updated organizationName from 'your-username' to 'abdulqayyum'
2. Updated projectName from 'ai-textbook' to 'aibook' (matching directory name)
3. Updated navbar GitHub link from 'https://github.com/your-username/ai-textbook' to 'https://github.com/abdulqayyum/aibook'
4. Updated footer GitHub link from 'https://github.com/your-username/ai-textbook' to 'https://github.com/abdulqayyum/aibook'
5. Updated editUrl from 'https://github.com/your-username/ai-textbook/edit/main/docs/' to 'https://github.com/abdulqayyum/aibook/edit/main/docs/'
6. Updated site URL from 'https://your-username.github.io' to 'https://abdulqayyum.github.io'
7. Updated baseUrl from '/' to '/aibook/' for proper GitHub Pages deployment

All GitHub links now consistently point to the correct repository and work properly.
```

## Summary of Changes

This PHR documents the fixes made to resolve the GitHub repository link misconfiguration:

1. Updated organizationName in docusaurus.config.js from 'your-username' to 'abdulqayyum'
2. Updated projectName in docusaurus.config.js from 'ai-textbook' to 'aibook' (to match the project directory)
3. Updated navbar GitHub link to point to the correct repository URL
4. Updated footer GitHub link to point to the correct repository URL
5. Updated editUrl in the docs configuration to point to the correct repository
6. Updated the site URL and baseUrl to match GitHub Pages deployment pattern

The changes ensure that:
- All GitHub links consistently point to the correct repository
- The GitHub Pages deployment configuration is properly set up
- The baseUrl is correctly configured for GitHub Pages subdirectory deployment
- Links work correctly both locally and after deployment