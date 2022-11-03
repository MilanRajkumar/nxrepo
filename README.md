# Monorepo with vite library component
  Run following to start lib-consumer and lib component, 
  generally server starts at localhost:4200.
  make changes in common-ui.tsx file and you will see the updated in ui.

  npx nx start

  Or if you want to common-ui for development mode, just run
  yarn run dev
  from common-ui package
  which will start vite app at localhost:5173

  If you want a library to be build, run
  yarn run build
  from root location, this will generate dist file.
