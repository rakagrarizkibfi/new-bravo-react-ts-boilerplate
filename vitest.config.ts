import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default defineConfig((configEnv) =>
  mergeConfig(
    viteConfig(configEnv),
    defineConfig({
      test: {
        globals: true,
        coverage: {
          all: true,
          reporter: ['text', 'text-summary', 'html'],
          provider: 'v8',
          reportOnFailure: true,
          skipFull: false,
          exclude: [
            'coverage/**',
            'dist/**',
            '**/[.]**',
            'packages/*/test?(s)/**',
            '**/*.d.ts',
            '**/virtual:*',
            '**/__x00__*',
            '**/\x00*',
            'cypress/**',
            'test?(s)/**',
            'test?(-*).?(c|m)[jt]s?(x)',
            '**/*{.,-}{test,spec}.?(c|m)[jt]s?(x)',
            '**/__tests__/**',
            '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
            '**/vitest.{workspace,projects}.[jt]s?(on)',
            '**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}',

            'src/assets/**',
            'src/config/**',
            'src/styles/**',
          ],
        },
        environment: 'happy-dom',
        setupFiles: 'scripts/setupTests.ts',
        clearMocks: true,
        restoreMocks: true,
      },
    }),
  ),
);
