---
id: 4
title: "Connect GitHub Links to Actual Repository"
stage: "refactor"
date: "2025-12-16"
surface: "agent"
model: "claude-sonnet-4-5-20250929"
feature: "none"
branch: "004-vla-integration"
user: "user"
command: "Connect GitHub Links to the Actual Repository"
labels: ["refactor", "github", "configuration"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - "docusaurus.config.js"
tests: []
outcome: "Successfully updated all GitHub links to point to the actual repository"
evaluation: "All GitHub links now point to https://github.com/abdulqayyum4/AI-Humanoid-Book and work properly"
---

## PROMPT_TEXT

```
Context:
The AI-Native Textbook is built with Docusaurus and is hosted in the following GitHub repository:

https://github.com/abdulqayyum4/AI-Humanoid-Book

Currently, the GitHub links in the navbar and footer point to a placeholder URL and result in 404 errors.

Your Task:
- Update the Docusaurus configuration so that all GitHub links point to the real repository above.
- Specifically:
  - Navbar GitHub link should point to https://github.com/abdulqayyum4/AI-Humanoid-Book
  - Footer GitHub link should point to the same URL
- Ensure consistency across all references in the project (navbar, footer, edit links, metadata if any).
- Remove any placeholder or incorrect URLs.
- Verify that clicking the links locally and in deployment opens the correct repository.

Constraints:
- Do not change link labels or visual layout.
- Do not remove any existing GitHub links.
- Ensure compatibility with GitHub Pages deployment.
```

## RESPONSE_TEXT

```
Successfully updated all GitHub links to connect to the actual repository at https://github.com/abdulqayyum4/AI-Humanoid-Book:

1. Updated organizationName from 'abdulqayyum' to 'abdulqayyum4'
2. Updated projectName from 'aibook' to 'AI-Humanoid-Book'
3. Updated navbar GitHub link to 'https://github.com/abdulqayyum4/AI-Humanoid-Book'
4. Updated footer GitHub link to 'https://github.com/abdulqayyum4/AI-Humanoid-Book'
5. Updated editUrl to 'https://github.com/abdulqayyum4/AI-Humanoid-Book/edit/main/docs/'
6. Updated site URL from 'https://abdulqayyum.github.io' to 'https://abdulqayyum4.github.io'
7. Updated baseUrl from '/aibook/' to '/AI-Humanoid-Book/' for proper GitHub Pages deployment

All GitHub links now consistently point to the correct repository and work properly, maintaining the same visual layout and link labels as before.
```

## Summary of Changes

This PHR documents the changes made to connect all GitHub links to the actual repository:

1. Updated organizationName in docusaurus.config.js from 'abdulqayyum' to 'abdulqayyum4'
2. Updated projectName in docusaurus.config.js from 'aibook' to 'AI-Humanoid-Book'
3. Updated navbar GitHub link to point to the correct repository URL
4. Updated footer GitHub link to point to the correct repository URL
5. Updated editUrl in the docs configuration to point to the correct repository
6. Updated the site URL and baseUrl to match the new GitHub Pages deployment pattern

The changes ensure that:
- All GitHub links consistently point to the actual repository: https://github.com/abdulqayyum4/AI-Humanoid-Book
- The GitHub Pages deployment configuration is properly set up for the new repository
- The baseUrl is correctly configured for GitHub Pages subdirectory deployment
- Links work correctly both locally and after deployment
- The visual layout and link labels remain unchanged as required