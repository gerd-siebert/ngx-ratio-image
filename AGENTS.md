# AGENTS.md - Project Overview

- **Framework:** Angular 20+ (Standalone Components & Signals)
- **Language:** TypeScript (strict mode)
- **State:** Signals for UI state, RxJS for Async/HTTP streams
- **Styling:** SCSS / Tailwind
- 
## Critical Rules for Code Generation
1. **Always use Standalone Components:** Set `standalone: true` on components, directives, and pipes.
2. **Modern Control Flow:** Use `@if`, `@for`, and `@switch` instead of `*ngIf`, `*ngFor`.
3. **Dependency Injection:** Use the `inject()` function instead of constructor injection.
4. **Signals First:** Prefer `signal()`, `computed()`, `input()`, and `output()` over legacy `@Input()`/`@Output()`.
5. **No `any`:** Strict typing is strictly enforced across all files.

## Directory Structure
- `main/projects/ngx-ratio-image' -> Main part of this project is the lib
- `main/projects/ratio-image-app' -> test app in the smae angular version like the lib
- `testing-app' -> Demo app for testing the lib in new angular version