# Advanced Angular Micro Frontends with Dynamic Module Federation

✨ **This workspace has been generated by [Nx, Smart Monorepos · Fast CI.](https://nx.dev/recipes/angular/dynamic-module-federation-with-angular)** ✨

## Create an Nx Workspace

```shell
npx create-nx-workspace ng-mf
```

You'll be prompted a few questions. Pick the `Angular` stack, `Integrated` Monorepo layout and the `webpack` bundler. You can refer the follwoing image.

![Commit email](images/img.png)

> NOTE: As you can not skip `Application name`, use a random application name like `dummy`. Once the NX workspace is successfully created, delete the `dummy` application from the `apps/` directory.

## Creating our applications

- ### Creating `host/shell` application:

```shell
npx g @nx/angular:host apps/dashboard --prefix=ng-mfe
```

You'll be prompted a few questions. Pick the `scss` stylesheet format, and `cypress` E2E runner. You can refer the follwoing image.

![Commit email](images/img-1.png)

If you encounter the error message

```diff
- "NX Failed to process project graph. Run 'nx reset' to fix this. Please report the issue if you keep seeing it.",
```

follow these steps to resolve it:

```shell
 1. remove the `node_modules`
 2. npm cache clean --force
 3. npm cache verify
 4. npm install
```

- ### Creating `remote` application:

```shell
npx g @nx/angular:remote apps/login --prefix=ng-mfe --host=dashboard
```

You'll be prompted a few questions. Pick the `scss` stylesheet format, and `cypress` E2E runner. You can refer the follwoing image.

![Commit email](images/img-2.png)
