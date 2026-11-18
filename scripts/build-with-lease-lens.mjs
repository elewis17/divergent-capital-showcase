import { execFileSync } from "node:child_process";
import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

const leaseLensBuild = process.argv[2];
if (!leaseLensBuild) {
  throw new Error("Pass the Lease Lens dist folder from npm run build:company.");
}

const leaseLensSource = resolve(leaseLensBuild);
const companyBuild = resolve("dist");
const leaseLensIndex = await readFile(join(leaseLensSource, "index.html"), "utf8");

if (!leaseLensIndex.includes('src="/lease-lens/assets/')) {
  throw new Error("Lease Lens must be built with the /lease-lens/ asset base.");
}

execFileSync(process.execPath, ["node_modules/vite/bin/vite.js", "build"], {
  env: { ...process.env, VITE_LEASE_LENS_URL: "/lease-lens" },
  stdio: "inherit",
});
const companyIndex = await readFile(join(companyBuild, "index.html"), "utf8");

await cp(leaseLensSource, join(companyBuild, "lease-lens"), { recursive: true });
for (const route of ["auth/login", "auth/callback"]) {
  const directory = join(companyBuild, "lease-lens", route);
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, "index.html"), leaseLensIndex);
}

for (const route of ["privacy-policy", "terms"]) {
  const directory = join(companyBuild, route);
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, "index.html"), companyIndex);
}

await writeFile(join(companyBuild, "404.html"), companyIndex);
await writeFile(join(companyBuild, "CNAME"), "divergentcapitalllc.com\n");
