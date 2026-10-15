declare namespace NodeJS {
  interface ProcessEnv {
    NEXTAUTH_URL?: string
    NEXTAUTH_SECRET?: string
    AUTH_SECRET?: string
    GITHUB_CLIENT_ID?: string
    GITHUB_CLIENT_SECRET?: string
    GITHUB_ID?: string
    GITHUB_SECRET?: string
    GITHUB_OWNER?: string
    GITHUB_REPO?: string
    GITHUB_BRANCH?: string
  }
}