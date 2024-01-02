export default {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    // JavaScript/ESLint 推荐的规则
    // 不允许使用 console.log 等
    'no-console': 'warn',
    // 不允许存在未使用的变量
    'no-unused-vars': 'warn',
    // 不允许使用未定义的变量
    'no-undef': 'error',

    // Vue / ESLint 推荐的规则
    // HTML 缩进为 2 个空格
    'vue/html-indent': ['error', 2],
    // 属性名使用连字符形式
    'vue/attribute-hyphenation': 'error',
    // 关闭自闭合标签要求，根据个人或团队喜好配置
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        // 单行最多 3 个属性
        singleline: 3,
        multiline: {
          // 每行最多一个属性
          max: 1,
          // 不允许属性出现在第一行
          allowFirstLine: false
        }
      }
    ],
    // 允许使用 v-html 指令
    'vue/no-v-html': 'off',
    // 不允许存在未使用的组件
    'vue/no-unused-components': 'warn',

    // TypeScript/ESLint 推荐的规则
    // 不允许存在未使用的 TypeScript 变量
    '@typescript-eslint/no-unused-vars': 'warn',
    // 允许不显式指定导出函数的返回类型
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 允许使用 any 类型
    '@typescript-eslint/no-explicit-any': 'off'
  }
};
