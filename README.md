<a href="https://chat.vercel.ai/">
  <img alt="Next.js 14 and App Router-ready AI chatbot." src="app/(chat)/opengraph-image.png">
  <h1 align="center">Next.js AI Chatbot</h1>
</a>

<p align="center">
  An Open-Source AI Chatbot Template Built With Next.js and the AI SDK by Vercel.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#model-providers"><strong>Model Providers</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a>
</p>
<br/>

## Features

- [Next.js](https://nextjs.org) App Router
  - Advanced routing for seamless navigation and performance
  - React Server Components (RSCs) and Server Actions for server-side rendering and increased performance
  - Built-in optimizations for images, fonts, and static assets
- [AI SDK](https://sdk.vercel.ai/docs)
  - Unified API for generating text, structured objects, and tool calls with LLMs
  - Hooks for building dynamic chat and generative user interfaces
  - Supports OpenAI (default), Anthropic, Cohere, and other model providers
  - Built-in streaming support for real-time AI responses
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - Component primitives from [Radix UI](https://radix-ui.com) for accessibility and flexibility
  - Customizable themes and dark mode support
- [Supabase](https://supabase.com) Integration
  - [Supabase Postgres DB](https://supabase.com/docs/guides/database) for robust chat history and user data storage
  - [Supabase File Storage](https://supabase.com/docs/guides/storage) for efficient file management and uploads
  - [Supabase Auth](https://supabase.com/docs/guides/auth) with multiple authentication providers and row-level security
  - Real-time subscriptions for live updates

## Model Providers

This template ships with OpenAI `gpt-4o` as the default. However, with the [AI SDK](https://sdk.vercel.ai/docs), you can switch LLM providers to [OpenAI](https://openai.com), [Anthropic](https://anthropic.com), [Cohere](https://cohere.com/), and [many more](https://sdk.vercel.ai/providers/ai-sdk-providers) with just a few lines of code.

## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example) to run Next.js AI Chatbot. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables) for this, but a `.env` file is all that is necessary.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control access to your various OpenAI and authentication provider accounts.

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`

## Getting Started

### Quick Start Video Guide

Watch our comprehensive onboarding video to quickly set up your development environment and understand the project structure: [Watch Tutorial](#)

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18+
- pnpm (`npm install -g pnpm`)
- Git
- A code editor (we recommend VS Code)

### Supabase Setup

1. **Install the Supabase CLI**
   Choose the installation method for your operating system:

   - Mac:
     ```bash
     brew install supabase/tap/supabase
     ```
   - Windows (PowerShell):
     ```powershell
     scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
     scoop install supabase
     ```
   - Linux:
     ```bash
     brew install supabase/tap/supabase
     ```
   - NPM/Bun:
     ```bash
     npx supabase <command>
     ```

2. **Create a Supabase Project**

   ```bash
   # Create a new project
   npx supabase projects create -i "ai-chatbot-supabase"

   # Note: Save the project ID and database password shown after creation
   ```

   > Your Organization ID can be found in the Supabase Dashboard URL after selecting an organization

3. **Link Your Project**

   ```bash
   # Initialize Supabase configuration
   npx supabase init

   # Link to your remote project
   npx supabase link --project-ref your-project-id
   ```

   You'll need your project ID and database password from step 2.

4. **Configure Environment Variables**
   Create a `.env.local` file with the following variables:

   ```bash
   NEXT_PUBLIC_SUPABASE_URL=<api-url>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-key>
   ```

   > Find these values in your Supabase project dashboard under Project Settings > API

5. **Initialize Database Schema**

   ```bash
   # Apply all migrations
   supabase db push

   # Verify the schema
   supabase db reset --dry-run
   ```

### Local Development

1. **Clone and Install**

   ```bash
   git clone https://github.com/your-username/ai-chatbot.git
   cd ai-chatbot
   pnpm install
   ```

2. **Start Development Server**

   ```bash
   pnpm dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000)

3. **Development Commands**
   ```bash
   pnpm build          # Build for production
   pnpm start          # Start production server
   pnpm lint          # Run ESLint
   pnpm type-check    # Run TypeScript checks
   ```

### Troubleshooting

Common issues and solutions:

- **Supabase Connection Issues**

  - Verify your environment variables are correctly set
  - Ensure your IP address is allowed in Supabase dashboard
  - Check if the database is active in Supabase dashboard

- **Build Errors**
  - Clear `.next` folder: `rm -rf .next`
  - Clean install dependencies: `pnpm clean-install`

For more help, check our [Troubleshooting Guide](docs/troubleshooting.md) or open an issue.

## Deploy with Vercel

### Prerequisites

- A [Vercel account](https://vercel.com/signup)
- A [Supabase account](https://supabase.com/dashboard/sign-in)
- An [OpenAI API key](https://platform.openai.com/api-keys)

### Deployment Steps

1. **Fork the Repository**

   ```bash
   https://github.com/your-username/ai-chatbot
   ```

2. **Configure Vercel Project**

   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your forked repository
   - Select "Next.js" as the framework

3. **Set Environment Variables**
   In your Vercel project settings, add the following environment variables:

   ```bash
   # Required
   NEXT_PUBLIC_SUPABASE_URL=           # From Supabase project settings
   NEXT_PUBLIC_SUPABASE_ANON_KEY=      # From Supabase project settings
   OPENAI_API_KEY=                     # Your OpenAI API key
   AUTH_SECRET=                        # Run: openssl rand -base64 32

   # Optional
   NEXT_PUBLIC_APP_URL=                # Your deployed app URL
   SUPABASE_SERVICE_ROLE_KEY=          # From Supabase project settings
   ```

4. **Configure Build Settings**
   In your Vercel project settings:

   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`

5. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your application

### One-Click Deploy

Alternatively, you can use our one-click deploy button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fai-chatbot&env=AUTH_SECRET,OPENAI_API_KEY,NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY&envDescription=How%20to%20get%20these%20env%20variables&envLink=https%3A%2F%2Fgithub.com%2Fvercel%2Fai-chatbot%2Fblob%2Fmain%2F.env.example)

### Post-Deployment Configuration

1. **Update Supabase Configuration**

   - Go to your Supabase project settings
   - Add your deployed URL to the allowed domains:
     ```
     https://your-app.vercel.app
     ```

2. **Verify Environment Variables**
   In Vercel dashboard:

   - Go to Project Settings > Environment Variables
   - Verify all required variables are set
   - If needed, redeploy after updating variables

3. **Setup Database**

   ```bash
   # Install Supabase CLI if you haven't
   npm install -g supabase

   # Link to your Supabase project
   supabase link --project-ref your-project-ref

   # Push the database schema
   supabase db push
   ```

### Troubleshooting Deployment

Common deployment issues and solutions:

- **Build Failures**

  - Check build logs in Vercel dashboard
  - Verify all dependencies are installed
  - Ensure environment variables are set correctly

- **Runtime Errors**

  - Check Function Logs in Vercel dashboard
  - Verify Supabase connection settings
  - Check API routes are functioning

- **Database Connection Issues**
  - Verify Supabase URL and keys
  - Check if IP is allowed in Supabase dashboard
  - Ensure database migrations are applied

For more deployment help, see our [Deployment Guide](docs/deployment.md) or open an issue.
