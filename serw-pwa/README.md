## PWA

<strong>ABOUT THIS PROJECT:</strong><Br/>
This is my second try at creating a progressive web application, or a PWA as they are often referred to. 
In this code you'll find a simple PWA that has all the basics. I used a module from Serwist to integrate PWA support into my this next.js project. In my first try, my api didn't work properly and my service workers weren't showing up. I was using next-pwa module in that project and that has become redundant. I found serwist and it all came toghether after that. <Br/>Now it fully works. It installs, is caches the whole lot and gets full marks with fireworks(!) in the lighthouse test for PWA's.

<strong>What is a PWA?</strong><Br/> 
PWA's are not a website, not a desktop application and not an app. They are something in between. They can behave like an app, or a website, whichever you prefer. :)<br/>
PWAs are built with all the powers of web technologies but can at the same time give users an experience that feels like using a native app on systems like iOS or Android. You use the same code base for all devices. Fully cross-platform and no app store needed. <br/>
They bring together the best of both world - the wide accessibility of traditional websites and the perks of platform-specific apps, such as being able to work offline.
PWA's improve user engagement. They are responsive and fast, even on slow networks.

Here are some cool key factors:
- Cross-Platform Compatibility:
PWAs run on multiple operating systems from a single codebase.
No need for separate development for iOS, Android, etc.
- Direct Web Access:
Users access PWAs directly from the web—no app store downloads.
Simplified distribution via URLs.
- Native-Like Experience:
PWAs adapt to users’ devices, feeling native. Users can add PWAs to home screens like regular apps.
- Advanced Capabilities:
Offline functionality, stay fast even on slow networks, offer push notifications and anything else you can dream of.
- Search Engine Indexing and Sharing:
Indexed by search engines for organic discovery.
Easy sharing via URLs.
- Cost-Effective Development:
Single codebase serves all devices.
<br/>
<br/>
---

A PWA needs to have:
- Web App Manifest. (public/manifest.json)
This is a simple JSON file that tells the browser about your web application and how it should behave when installed on the user’s mobile device or desktop.
- Service workers. (sw.ts, sw.js)
Service workers are scripts that your browser runs in the background, separate from a web page, opening the door to features that don’t need a web page or user interaction. They are responsible for features like offline support, background syncs, and push notifications.
- HTTPS
PWAs must be served over a secure network. All network requests must be made using HTTPS.
- Responsive Design. 
PWAs should fit any form factor, desktop, mobile, tablet, or whatever is next.
- Cross-Browser Compatibility.
PWAs should work with any browser of choice. 


For a code base to be a PWA it needs a web app manifest so users can install it through their browser, and a service worker for functions like offline access and running in the background or sending push notifications. 
Service workers can be tailored to fit what your PWA needs. 


Tech Stack I'm using:
- Next.js 14, with Typescript and Yarn. 
- Serwist - a collection of JS libraries for PWA's (https://serwist.pages.dev/)
- Weather API (weatherapi.com)

There is no emphasis on Design in this project, only the code part. I'm mostly using the next.js template and just tweaking it so it fits better for what I need. 

===


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
