# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **mokadijital-website-project**, a web development project currently in initial setup phase. The repository is newly initialized and ready for development.

## Development Environment

### API Endpoints
- Custom Anthropic API endpoint: `https://api.z.ai/api/anthropic`
- n8n instance: `https://ai.mokadijital.com`

### MCP Integration
This project has n8n workflow automation configured via MCP. The n8n instance provides workflow automation capabilities that can be leveraged for various tasks.

### Model Configuration
- Primary models use GLM family (glm-4.7, glm-4.5-air)
- Extended timeout configured: 3,000,000ms

## Security Notes

- API keys and sensitive credentials are stored in `.claude/settings.local.json` (gitignored)
- Never commit API keys or other secrets to the repository
- When adding new services, ensure credentials use environment variables or local config files

## Current State

The repository is in initial setup. Build system, testing framework, and project structure will be established as development progresses.
