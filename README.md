# Wang Family Tree

An interactive web application for visualizing and exploring the Wang family genealogy.

## Project Overview

The Wang Family Tree is a modern, interactive family tree visualization application built with React and TypeScript. It allows users to explore family relationships through an intuitive, zoomable interface with support for multiple languages (English and Chinese).

### Purpose

This application serves as a digital record and interactive visualization of the Wang family genealogy, enabling:
- Easy exploration of family relationships across generations
- Bilingual support for family member names (English and Chinese)
- Detailed biographical information for family members
- An intuitive, visual way to understand family connections

### Design and Architecture

**Frontend Stack:**
- **React 18** with **TypeScript** for type-safe component development
- **Vite** as the build tool for fast development and optimized production builds
- **ReactFlow** for the interactive family tree visualization with pan and zoom capabilities
- **Chakra UI** for the component library and styling
- **Redux Toolkit** for state management
- **Tailwind CSS** for utility-first styling
- **Firebase Hosting** for serving the application

**Project Structure:**
```
frontend/wang-family-tree/
├── src/
│   ├── components/     # Reusable UI components (WangNode, Legend, Navbar)
│   ├── pages/          # Page components (Home, MemberBio)
│   ├── store/          # Redux state management
│   ├── hooks/          # Custom React hooks
│   ├── assets/data/    # Family tree data (familyTree.json, translations)
│   └── routes/         # Application routing
├── public/             # Static assets
└── firebase.json       # Firebase hosting configuration
```

**Key Features:**
- Interactive node-based family tree visualization
- Multi-language support (English/Chinese)
- Zoom and pan controls for easy navigation
- Biographical pages for family members
- Responsive design that works on various screen sizes

## Deployment Workflows

This project uses GitHub Actions for continuous deployment with two distinct workflows:

### Preview Environments (Pull Requests)

**Every pull request automatically creates a preview environment** that lets you test changes before merging:

1. When you open a pull request targeting the `main` branch, the `.github/workflows/firebase-preview.yml` workflow triggers automatically
2. The workflow:
   - Checks out your code
   - Installs Node.js 20 and dependencies
   - Builds the project with `npm run build`
   - Deploys a preview version to Firebase Hosting
3. A preview URL is automatically posted as a comment on your pull request
4. The preview environment updates automatically with each new commit to the PR
5. Preview environments are temporary and allow you to test changes without affecting production

### Production Deployment (Main Branch)

**Merges to the `main` branch automatically update the production site:**

1. When a pull request is merged to `main`, the `.github/workflows/firebase-deploy.yml` workflow triggers automatically
2. The workflow:
   - Checks out the latest code from `main`
   - Installs Node.js 20 and dependencies
   - Builds the project with `npm run build`
   - Deploys to the **live production channel** on Firebase Hosting
3. Changes are immediately visible on the production site at your Firebase Hosting URL
4. The deployment is tied to the Firebase project ID: `wang-family-tree`

## Using GitHub Copilot to Create PRs

GitHub Copilot can help you make changes to this project efficiently. Here's how to use Copilot to create pull requests:

### Prerequisites
- Ensure you have GitHub Copilot enabled for your account
- Have appropriate repository permissions

### Steps to Create a PR with Copilot

1. **Describe Your Change:**
   - Use natural language to describe what you want to change
   - Example: "Update the home page to show generation labels" or "Add a new family member to the tree"

2. **Let Copilot Make Changes:**
   - Copilot will analyze the codebase and propose changes
   - Review the suggested changes carefully
   - Copilot can modify multiple files if needed

3. **Test Locally (Optional):**
   ```bash
   cd frontend/wang-family-tree
   npm install
   npm run dev
   ```
   - Visit `http://localhost:5173` to see your changes

4. **Create the Pull Request:**
   - Copilot will create a new branch and commit your changes
   - A pull request will be automatically opened
   - The PR will include a description of the changes made

5. **Review Preview Environment:**
   - Wait for the GitHub Actions workflow to complete
   - Check the preview URL posted in the PR comments
   - Verify your changes work correctly in the preview environment

6. **Merge When Ready:**
   - Once approved and tests pass, merge the PR
   - The production site will automatically update within a few minutes

### Example Copilot Commands

Here are some example requests you can make to Copilot:

- "Add a new family member to the family tree data"
- "Update the styling of family member nodes"
- "Fix the zoom controls on mobile devices"
- "Add a new language translation"
- "Update the README with installation instructions"

### Tips for Working with Copilot

- Be specific in your requests for better results
- Review all generated code before committing
- Test changes locally when possible
- Keep changes small and focused for easier review
- Check the preview environment before merging to production

## Development Setup

To run this project locally:

```bash
# Navigate to the frontend directory
cd frontend/wang-family-tree

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## Legacy Information

### Heroku Backend Deployment (Deprecated)

Note: The project previously used a Heroku backend. This may no longer be active:

```bash
git subtree push --prefix backend heroku master
```

## Contributing

1. Create a new branch or use GitHub Copilot to create one for you
2. Make your changes
3. Open a pull request
4. Review the preview environment
5. Wait for approval and merge

## License

See the [LICENSE](LICENSE) file for details.
