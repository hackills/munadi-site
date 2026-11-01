export interface ReleaseInfo {
  version: string;
  size: string;
  sha256: string;
  apkUrl: string;
  releaseUrl: string;
  published: string;
}

// Used when the GitHub API is unavailable during a build. Keep this in sync
// with the newest public release so the page never ships without a download.
const fallback: ReleaseInfo = {
  version: '0.13.47',
  size: '8.4 MB',
  sha256: '3fa1aa7f1f3611833a76ee2a6d08e4d4cee44035d68783086b7dffffa78f3cc1',
  apkUrl:
    'https://github.com/hackills/munadi-apks/releases/download/v0.13.47/munadi-0.13.47.apk',
  releaseUrl: 'https://github.com/hackills/munadi-apks/releases/tag/v0.13.47',
  published: '1 November 2026',
};

interface GithubAsset {
  name: string;
  size: number;
  digest?: string | null;
  browser_download_url: string;
}

interface GithubRelease {
  tag_name: string;
  html_url: string;
  published_at: string;
  assets: GithubAsset[];
}

let pending: Promise<ReleaseInfo> | null = null;

async function fetchRelease(): Promise<ReleaseInfo> {
  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'munadi-site',
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      'https://api.github.com/repos/hackills/munadi-apks/releases/latest',
      { headers, signal: AbortSignal.timeout(5000) },
    );
    if (!response.ok) return fallback;

    const data = (await response.json()) as GithubRelease;
    const apk = data.assets.find((asset) => asset.name.endsWith('.apk'));
    if (!apk) return fallback;

    const version = data.tag_name.replace(/^v/, '');
    return {
      version,
      size: `${(apk.size / 1024 / 1024).toFixed(1)} MB`,
      sha256: apk.digest?.replace(/^sha256:/, '') ?? fallback.sha256,
      apkUrl: apk.browser_download_url,
      releaseUrl: data.html_url,
      published: new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(new Date(data.published_at)),
    };
  } catch {
    return fallback;
  }
}

export function getLatestRelease(): Promise<ReleaseInfo> {
  if (!pending) pending = fetchRelease();
  return pending;
}
