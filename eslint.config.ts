import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import pluginReactHooks from 'eslint-plugin-react-hooks';

export default defineConfig([
    { files : [ '**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}' ], languageOptions : { globals : globals.browser } },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        plugins : {
            'react-hooks' : pluginReactHooks
        },
        rules : {
            'indent' : [ 'warn', 4 ],
            'quotes' : [ 'warn', 'single' ],
            'jsx-quotes' : [ 'error', 'prefer-single' ],
            'react/jsx-indent-props' : [ 2, 'first' ],
            'react/react-in-jsx-scope' : 'off',
            'object-curly-spacing' : [ 'error', 'always' ],
            'array-bracket-spacing' : [ 'error', 'always' ],
            'key-spacing' : [ 'error', { beforeColon : true, afterColon : true } ],
            'space-infix-ops' : [ 'error' ],
            'react/jsx-curly-spacing' : [ 'error', { when : 'always', children : true } ],
            'react-hooks/rules-of-hooks' : 'error', // Checks rules of Hooks
            'react-hooks/exhaustive-deps' : 'warn', // Checks effect dependencies
        // 'type-annotation-spacing': ['error', {
        //     before: false,
        //     after: true,
        //     overrides: {
        //         colon: {
        //             before: false,
        //             after: true
        //         }
        //     }
        // }]
        }
    }
]);