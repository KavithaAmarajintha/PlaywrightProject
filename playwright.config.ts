import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";
import * as path from "path";

const today = new Date();

const resultDir = path.join(
  "Automation_Reports_" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "_" +
    String(today.getDate()).padStart(2, "0") +
    "_" +
    today.getHours() +
    "_" +
    today.getMinutes() +
    "_" +
    today.getSeconds()
);

const config: PlaywrightTestConfig = {
  workers: 1,
  testDir: "./e2e/",
  timeout: 1000 * 1000,
  expect: {
    timeout: 5000,
  },
  use: {
    // viewport : { width: 1920, height: 1080 },
    viewport: null,
    headless: !true,
    baseURL: "",
    screenshot: "on",
    video: "on",
    channel: "chrome",
    launchOptions: { args: ["--start-maximized"],slowMo:1000},
    actionTimeout: 10000,
    //trace: 'on-first-retry',
  },
  globalSetup: "utilities/globalSetup.ts",
  testMatch: ["login.spec.ts"],
  reporter:[
    ["html", {outputFolder: `./reports/${resultDir}`, open: "never" }],
    ["line"],["allure-playwright"],
    ['playwright-zephyr/lib/src/cloud', {
      projectKey:'HRVMS',
      authorizationToken:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb250ZXh0Ijp7ImJhc2VVcmwiOiJodHRwczovL2NsaWVudHNlcnZlcnRlY2guYXRsYXNzaWFuLm5ldCIsInVzZXIiOnsiYWNjb3VudElkIjoiNzEyMDIwOmQ3NDkwYWY0LTU0NDMtNGVjOC1iNzk1LWVmMjkwNWFkODBmNCIsInRva2VuSWQiOiJiYTUwNzhiMS0xNWFhLTRhNTUtOGU2Ny0xMjA5ZGQ5NmZkNWUifX0sImlzcyI6ImNvbS5rYW5vYWgudGVzdC1tYW5hZ2VyIiwic3ViIjoiY2VlMmFmN2MtZWMxNC0zNWFlLWE5MDMtYTdjYTQxZDliZWRjIiwiZXhwIjoxNzY2NTgwMzY5LCJpYXQiOjE3MzUwNDQzNjl9.CU69ihczCyBDqcTnKvt5TdCjRGoUeXqTJow1SCM90jg'

}]],
  retries: 0,
  // reporter: [
  //   ["html", { outputFolder: `./reports/${resultDir}`, open: "never" }],
  // ],
};

export default config;