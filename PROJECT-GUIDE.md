# 30 Apps in 30 Days - Project Guide

## Project Overview
This is my journey to build 30 web apps in 30 days to learn modern web development with Claude Code, GitHub, and Vercel.

## Key Goals & Constraints
- **Target**: 30 apps in 30 days (~1.2 apps per day accounting for no Sundays)
- **No coding/publishing on Sundays** (religious observance)
- **All apps must be mobile-responsive** (viewable on mobile devices)
- **Start date**: January 31, 2025

## Project Structure

### This Repository (Portfolio Hub)
- **Purpose**: Central hub/home page linking to all 30 apps
- **URL**: [To be deployed on Vercel]
- **App #1 of 30**

### Other Apps (2-30)
- **Each app gets its own separate folder/repository**
- **Each app gets its own Vercel deployment**
- **Each app is independent** (can experiment with different technologies)

## Workflow: Creating Each New App

When starting a new app (apps 2-30), Claude should:

1. **Prompt for app details first:**
   - App name
   - Brief description (1-2 sentences about what it does)
   - Any specific features or requirements

2. **Set up the new app:**
   - Create it in a separate folder/repository (NOT in this portfolio hub)
   - Initialize with appropriate starter template
   - Ensure mobile-responsive design

3. **After building and deploying:**
   - Get the Vercel deployment URL
   - Return to this portfolio hub repo
   - Update the `apps` array in `src/App.jsx` with:
     ```javascript
     {
       date: 'YYYY-MM-DD',
       name: 'App Name',
       description: 'Brief description of what the app does',
       url: 'https://your-app-url.vercel.app'
     }
     ```
   - Commit and push changes to update the portfolio

## Technology Stack
- **Framework**: React
- **Build Tool**: Vite
- **Styling**: CSS (responsive design with media queries)
- **Version Control**: Git + GitHub
- **Deployment**: Vercel
- **Development Assistant**: Claude Code

## Background
- Returning to web development after ~20 years
- Previous experience: HTML, CSS, basic JavaScript
- Learning modern tools: React, Git workflows, automated deployment

## Notes
- This guide helps maintain context and consistency throughout the challenge
- Update this file as you learn new patterns or establish new preferences
