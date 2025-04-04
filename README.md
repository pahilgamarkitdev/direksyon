# Direksyon

## Scripts

  install npm package
  ```
    npm install
  ```

  run app
  ```
    npm run dev
  ```

### tech stack:
  - NextJs - Full Stack Framework
  - Supabase - Backend as a Service/Database
  - Shadcn - UI Library
  - Tailwind- CSS Library
  - Google Maps Api

### Folder Structure
  - app - pages folder (module)
    - module
      - _component (ui components)
      - _service (actions and queries)
      - page.tsx
  - assets
  - components ( global ui components)
  - hooks (custom hooks)
  - lib
  - model ( types, schemas)
  - service ( global services)
  - utils 

### Env Example
```
  NEXT_PUBLIC_SUPABASE_URL
  NEXT_PUBLIC_SUPABASE_ANON_KEY
  NEXT_PUBLIC_MAPS_API_KEY
  VERCEL_URL
```