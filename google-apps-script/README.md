# Google Apps Script contact backend

This backend receives landing-page submissions, sends a formatted notification to `celerisys@outlook.com`, and sends an automatic confirmation to the visitor.

## One-time setup

1. Open [Google Apps Script](https://script.google.com/) with the Google account that will send the messages and create a new project.
2. Replace the contents of `Code.gs` with the repository's `google-apps-script/Code.gs` file.
3. In **Project settings**, set the time zone to **(GMT-05:00) Peru time**.
4. Select **Deploy → New deployment → Web app**.
5. Configure **Execute as: Me** and **Who has access: Anyone**.
6. Authorize the mail permission and copy the deployment URL ending in `/exec`.
7. Create `.env` in the landing repository using `.env.example` and paste the URL:

   ```env
   PUBLIC_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/DEPLOYMENT_ID/exec
   ```

8. Restart the Astro development server or rebuild the site.

For GitHub Pages, create the repository variable `PUBLIC_GOOGLE_APPS_SCRIPT_URL` under **Settings → Secrets and variables → Actions → Variables**. The deployment workflow injects it during the Astro build.

After changing `Code.gs`, create a new deployment version so the public endpoint uses the new code.

## Important sender detail

Google sends the confirmation on behalf of the account that owns the Apps Script deployment. Replies are directed to `celerisys@outlook.com`. Sending with `celerisys@outlook.com` as the literal **From** address would require an authenticated Outlook/SMTP integration instead.
