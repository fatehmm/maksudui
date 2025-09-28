# Maksud UI

A modern, accessible, and customizable UI component library built with React, TypeScript, and Tailwind CSS. Maksud UI provides copy-paste ready components that are fully customizable and follow modern design patterns.

## ✨ Features

- 🎨 **Beautiful Design** - Modern, clean, and accessible components
- 🚀 **Copy & Paste** - No complex setup, just copy and paste components
- 🎯 **TypeScript** - Built with TypeScript for better developer experience
- 🎨 **Tailwind CSS** - Styled with Tailwind CSS for easy customization
- ♿ **Accessible** - Built with accessibility in mind using Radix UI primitives
- 📱 **Responsive** - Mobile-first responsive design
- 🌙 **Dark Mode** - Built-in dark mode support
- 🧩 **Modular** - Use only the components you need

## 📦 Packages

Maksud UI is organized into focused packages:

- **[@diceui/checkbox-group](./packages/checkbox-group)** - Checkbox group component for multiple selections
- **[@diceui/combobox](./packages/combobox)** - Advanced combobox with search and filtering
- **[@diceui/listbox](./packages/listbox)** - Accessible listbox component
- **[@diceui/mention](./packages/mention)** - Mention component for @mentions and hashtags
- **[@diceui/tags-input](./packages/tags-input)** - Tags input component for managing tags
- **[@diceui/shared](./packages/shared)** - Shared utilities and hooks

## 🚀 Quick Start

### Installation

Install the packages you need:

```bash
# Using bun (recommended)
bun add @diceui/checkbox-group @diceui/combobox

# Using npm
npm install @diceui/checkbox-group @diceui/combobox

# Using pnpm
pnpm add @diceui/checkbox-group @diceui/combobox

# Using yarn
yarn add @diceui/checkbox-group @diceui/combobox
```

### Usage

```tsx
import { CheckboxGroupRoot, CheckboxGroupItem } from '@diceui/checkbox-group';

function MyComponent() {
  return (
    <CheckboxGroupRoot>
      <CheckboxGroupItem value="option1">
        Option 1
      </CheckboxGroupItem>
      <CheckboxGroupItem value="option2">
        Option 2
      </CheckboxGroupItem>
    </CheckboxGroupRoot>
  );
}
```

## 📚 Documentation

Visit our [documentation site](https://maksud.dev/docs) for:

- Complete component documentation
- Interactive examples
- Installation guides
- Customization options
- API references

## 🛠️ Development

This project uses a monorepo structure with the following tools:

- **Turbo** - Monorepo build system
- **pnpm** - Package manager
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vitest** - Testing
- **Biome** - Linting and formatting

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/sadmann7/diceui.git
cd diceui
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the documentation.

### Available Scripts

- `bun dev` - Start development server
- `bun build` - Build all packages
- `bun lint` - Run linter
- `bun test` - Run tests
- `bun typecheck` - Run TypeScript checks

## 🤝 Contributing

We welcome contributions! Please read our [contributing guide](CONTRIBUTING.md) to get started.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Run the test suite
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [shadcn/ui](https://ui.shadcn.com/) for inspiration
- [Fumadocs](https://fumadocs.vercel.app/) for documentation

## 🔗 Links

- [Documentation](https://maksud.dev/docs)
- [GitHub](https://github.com/sadmann7/diceui)
- [Twitter](https://x.com/sadmann17)

---

Built with ❤️ by [Sadman](https://github.com/sadmann7)
