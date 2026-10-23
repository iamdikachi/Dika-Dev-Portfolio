import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

async function generateResume() {
  const pdfDoc = await PDFDocument.create();

  // A4 dimensions
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const margin = 42;
  const contentWidth = pageWidth - margin * 2;

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Color palette
  const headerBg = rgb(0.08, 0.14, 0.22); // Deep dark navy
  const accentTeal = rgb(0.18, 0.78, 0.72); // Teal
  const textDark = rgb(0.12, 0.14, 0.18);
  const textMuted = rgb(0.42, 0.46, 0.52);
  const lineGrey = rgb(0.82, 0.85, 0.89);
  const linkColor = rgb(0.10, 0.42, 0.70);

  // Text wrap utility
  function wrapTextToLines(text, font, fontSize, maxWidth) {
    const words = text.split(" ");
    const lines = [];
    let currentLine = "";

    for (const w of words) {
      const candidate = currentLine ? `${currentLine} ${w}` : w;
      const width = font.widthOfTextAtSize(candidate, fontSize);
      if (width <= maxWidth) {
        currentLine = candidate;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = w;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  // Draw Top Banner (Page 1)
  function drawHeaderBanner(page) {
    const bannerHeight = 92;
    page.drawRectangle({
      x: 0,
      y: pageHeight - bannerHeight,
      width: pageWidth,
      height: bannerHeight,
      color: headerBg,
    });

    // Top Teal line
    page.drawRectangle({
      x: 0,
      y: pageHeight - 4,
      width: pageWidth,
      height: 4,
      color: accentTeal,
    });

    // Name
    page.drawText("ONYEDIKACHI EMMANUEL", {
      x: margin,
      y: pageHeight - 36,
      size: 21,
      font: fontBold,
      color: rgb(1, 1, 1),
    });

    // Subtitle
    page.drawText("Full-Stack Engineer  ·  Node.js  ·  NestJS  ·  Laravel  ·  React  ·  AI Integration", {
      x: margin,
      y: pageHeight - 54,
      size: 9.5,
      font: fontRegular,
      color: rgb(0.75, 0.88, 0.95),
    });

    // Contact line
    const contactLine = "emmanuelnnadi097@gmail.com   |   09066846864   |   Remote   |   GitHub: github.com/iamdikachi   |   Portfolio: iamdikachi.com";
    page.drawText(contactLine, {
      x: margin,
      y: pageHeight - 74,
      size: 8.5,
      font: fontRegular,
      color: rgb(0.86, 0.90, 0.94),
    });
  }

  // Section Title
  function drawSectionTitle(page, title, curY) {
    page.drawText(title.toUpperCase(), {
      x: margin,
      y: curY,
      size: 10,
      font: fontBold,
      color: textDark,
    });

    page.drawLine({
      start: { x: margin, y: curY - 3 },
      end: { x: margin + contentWidth, y: curY - 3 },
      thickness: 0.75,
      color: lineGrey,
    });

    return curY - 14;
  }

  // Draw Bullet point with optional bold prefix (e.g. "Auth system: ")
  function drawBullet(page, bulletText, curY, maxWidth = contentWidth - 14, bulletOffset = 14) {
    const colonIndex = bulletText.indexOf(":");
    let prefix = "";
    let body = bulletText;

    if (colonIndex !== -1 && colonIndex < 35) {
      prefix = bulletText.substring(0, colonIndex + 1);
      body = bulletText.substring(colonIndex + 1).trimStart();
    }

    // Bullet circle
    page.drawCircle({
      x: margin + 4,
      y: curY + 2.5,
      size: 1.5,
      color: textDark,
    });

    if (prefix) {
      const fullText = `${prefix} ${body}`;
      const wrapped = wrapTextToLines(fullText, fontRegular, 8.5, maxWidth);
      const prefixWidth = fontBold.widthOfTextAtSize(prefix, 8.5);

      wrapped.forEach((line, lineIdx) => {
        if (lineIdx === 0) {
          page.drawText(prefix, {
            x: margin + bulletOffset,
            y: curY,
            size: 8.5,
            font: fontBold,
            color: textDark,
          });

          const rest = line.substring(prefix.length).trimStart();
          page.drawText(rest, {
            x: margin + bulletOffset + prefixWidth + 3,
            y: curY,
            size: 8.5,
            font: fontRegular,
            color: textDark,
          });
        } else {
          page.drawText(line, {
            x: margin + bulletOffset,
            y: curY,
            size: 8.5,
            font: fontRegular,
            color: textDark,
          });
        }
        curY -= 11.5;
      });
    } else {
      const wrapped = wrapTextToLines(body, fontRegular, 8.5, maxWidth);
      wrapped.forEach((line) => {
        page.drawText(line, {
          x: margin + bulletOffset,
          y: curY,
          size: 8.5,
          font: fontRegular,
          color: textDark,
        });
        curY -= 11.5;
      });
    }

    return curY - 1.5;
  }

  function drawRoleHeader(page, role, company, period, loc, curY) {
    const leftText = `${role}  ·  ${company}`;
    page.drawText(leftText, {
      x: margin,
      y: curY,
      size: 9.5,
      font: fontBold,
      color: textDark,
    });

    const rightText = `${period}  ·  ${loc}`;
    const rightW = fontRegular.widthOfTextAtSize(rightText, 8.5);
    page.drawText(rightText, {
      x: margin + contentWidth - rightW,
      y: curY,
      size: 8.5,
      font: fontRegular,
      color: textMuted,
    });

    return curY - 13;
  }

  // ==========================================
  // PAGE 1
  // ==========================================
  const page1 = pdfDoc.addPage([pageWidth, pageHeight]);
  drawHeaderBanner(page1);

  let y1 = pageHeight - 110;

  // 1. PROFILE
  y1 = drawSectionTitle(page1, "Profile", y1);
  const profileSummary =
    "Full-Stack Engineer with 5 years of hands-on experience building and shipping web applications across Fintech, Edutech, and AI. Strong on backend (NestJS, Node.js, Laravel, PostgreSQL) and frontend (React, Next.js, TypeScript, Livewire). Track record of building payment and wallet systems, multi-tenant architectures, AI-driven automation, and real-time features, often owning both layers of a product.";

  wrapTextToLines(profileSummary, fontRegular, 8.8, contentWidth).forEach((line) => {
    page1.drawText(line, {
      x: margin,
      y: y1,
      size: 8.8,
      font: fontRegular,
      color: textDark,
    });
    y1 -= 12;
  });

  y1 -= 8;

  // 2. TECHNICAL SKILLS (Two Columns with proper wrapping)
  y1 = drawSectionTitle(page1, "Technical Skills", y1);

  const colWidth = 240;
  const col1X = margin;
  const col2X = margin + colWidth + 25; // 42 + 240 + 25 = 307

  function drawSkillGroup(page, x, curY, label, valueText, maxW) {
    const fullText = `${label} ${valueText}`;
    const wrapped = wrapTextToLines(fullText, fontRegular, 8.5, maxW);
    const labelW = fontBold.widthOfTextAtSize(label, 8.5);

    wrapped.forEach((line, idx) => {
      if (idx === 0) {
        page.drawText(label, {
          x,
          y: curY,
          size: 8.5,
          font: fontBold,
          color: textDark,
        });
        const rest = line.substring(label.length).trimStart();
        page.drawText(rest, {
          x: x + labelW + 3,
          y: curY,
          size: 8.5,
          font: fontRegular,
          color: textDark,
        });
      } else {
        page.drawText(line, {
          x,
          y: curY,
          size: 8.5,
          font: fontRegular,
          color: textDark,
        });
      }
      curY -= 11.5;
    });

    return curY - 3;
  }

  let skillsCol1Y = y1;
  skillsCol1Y = drawSkillGroup(page1, col1X, skillsCol1Y, "Backend:", "NestJS, Express.js, Laravel (Passport, queues), Node.js, PHP", colWidth);
  skillsCol1Y = drawSkillGroup(page1, col1X, skillsCol1Y, "Frontend:", "React, Next.js, TypeScript, Tailwind CSS, Livewire, Alpine.js, TanStack Query, Zustand", colWidth);
  skillsCol1Y = drawSkillGroup(page1, col1X, skillsCol1Y, "Databases:", "PostgreSQL, MySQL, MongoDB, Redis, Prisma, Mongoose", colWidth);

  let skillsCol2Y = y1;
  skillsCol2Y = drawSkillGroup(page1, col2X, skillsCol2Y, "DevOps:", "GitHub Actions, GitLab CI/CD, Docker, AWS (S3/EC2)", colWidth);
  skillsCol2Y = drawSkillGroup(page1, col2X, skillsCol2Y, "Payments, Real-Time & AI:", "Paystack, Flutterwave, WebSockets, Pusher, OpenAI API, Puppeteer", colWidth);
  skillsCol2Y = drawSkillGroup(page1, col2X, skillsCol2Y, "Testing & Docs:", "PHPUnit, Swagger/OpenAPI, Cypress, Playwright, Storybook", colWidth);

  y1 = Math.min(skillsCol1Y, skillsCol2Y) - 5;

  // 3. PROFESSIONAL EXPERIENCE
  y1 = drawSectionTitle(page1, "Professional Experience", y1);

  // KodeHauz
  y1 = drawRoleHeader(page1, "Senior Backend Engineer", "KodeHauz", "Feb 2026 – Present", "Remote", y1);
  const kodehauzBullets = [
    "Auth system: Architected multi-role JWT authentication with NestJS, covering Admin flows and environment-level secret key verification.",
    "Database: Engineered PostgreSQL/Prisma schemas with full type safety; resolved complex migration conflicts across environments.",
    "CI/CD: Stabilized GitHub Actions pipelines, cutting build failures by 40% through environment configuration fixes.",
    "API: Standardized API documentation with Swagger/OpenAPI for frontend teams across all endpoints.",
  ];
  for (const b of kodehauzBullets) {
    y1 = drawBullet(page1, b, y1);
  }
  y1 -= 5;

  // Callik
  y1 = drawRoleHeader(page1, "Senior Frontend Developer", "Callik (formerly Alphalli)", "Feb 2026 – Present", "Remote", y1);
  const callikBullets = [
    "Customer platform: Owned the customer-facing side of a multi-sided e-commerce platform (customer, merchant, admin) built with Next.js, React, TypeScript, and Tailwind CSS.",
    "Data layer: Replaced a custom fetch client with Axios and TanStack Query, adding caching, request deduplication, and explicit loading, error, and empty states.",
    "State management: Built a persistent global cart with Zustand and fixed SSR hydration mismatches using a hydration-guard pattern.",
    "Design system: Moved styling to semantic CSS-variable tokens and corrected toast contrast for accessibility across light and dark modes.",
  ];
  for (const b of callikBullets) {
    y1 = drawBullet(page1, b, y1);
  }
  y1 -= 5;

  // Trarrk (3 bullets on Page 1)
  y1 = drawRoleHeader(page1, "Lead Backend Developer", "Trarrk (Special Education Platform)", "Jan 2024 – Jan 2026", "Remote", y1);
  const trarrkBulletsP1 = [
    "AI integration: Built an OpenAI GPT-4o-mini powered IEP generation engine, automating educational goal creation for teachers.",
    "Architecture: Designed a scalable multi-tenant MongoDB system with strict data isolation across organizations, therapists, and parents.",
    "Real-time events: Built a high-frequency behavioral tracking system with automatic student progress updates via custom API.",
  ];
  for (const b of trarrkBulletsP1) {
    y1 = drawBullet(page1, b, y1);
  }

  // Page 1 footer
  page1.drawText("Page 1 of 2  ·  Onyedikachi Emmanuel  ·  Full-Stack Engineer", {
    x: margin,
    y: 18,
    size: 7.5,
    font: fontRegular,
    color: textMuted,
  });

  // ==========================================
  // PAGE 2
  // ==========================================
  const page2 = pdfDoc.addPage([pageWidth, pageHeight]);
  let y2 = pageHeight - 45;

  // Trarrk remaining bullet
  y2 = drawBullet(page2, "Reporting: Automated PDF/CSV report generation using Puppeteer and Handlebars for behavioral and assessment data.", y2);
  y2 -= 8;

  // Cogrea
  y2 = drawRoleHeader(page2, "Frontend Developer", "Cogrea", "Apr 2023 – Present", "Remote", y2);
  const cogreaBullets = [
    "Payment UI: Built React/TypeScript frontend for a secure payment gateway with Auth0 OAuth2, connecting to a Node.js/FastAPI backend.",
    "CI/CD & Cloud: Managed GitLab CI/CD pipelines and AWS deployments, coordinating frontend releases with infrastructure teams.",
  ];
  for (const b of cogreaBullets) {
    y2 = drawBullet(page2, b, y2);
  }
  y2 -= 6;

  // Eduzone
  y2 = drawRoleHeader(page2, "Full-Stack Developer", "Eduzone", "Mar 2022 – Present", "Awka, Nigeria", y2);
  const eduzoneBullets = [
    "Full-stack build: Built and maintain a tutoring marketplace (300+ teachers, 100+ students, 50 partners) with PHP, Laravel, Livewire, Tailwind CSS, Alpine.js, and MySQL, deployed with Docker.",
    "Payments & wallets: Integrated Paystack, later migrated to Flutterwave; fixed critical wallet transaction bugs with idempotency, ensuring 100% user balance accuracy.",
    "Backend: Laravel Passport authentication, queued jobs, scheduled tasks, form-request validation, and PHPUnit tests.",
    "Real-time chat: Developed a Wirechat messaging system with Web Push notifications, boosting re-engagement by 25%.",
  ];
  for (const b of eduzoneBullets) {
    y2 = drawBullet(page2, b, y2);
  }
  y2 -= 14;

  // 4. NOTABLE PROJECTS
  y2 = drawSectionTitle(page2, "Notable Projects", y2);

  const projects = [
    {
      name: "Callik — E-commerce Platform",
      link: "callik.com",
      desc: "Customer-side storefront: Next.js, React, TypeScript, Tailwind CSS, TanStack Query, Zustand.",
    },
    {
      name: "Eduzone — Tutoring Marketplace",
      link: "eduzoneng.com",
      desc: "Full-stack: PHP, Laravel, Livewire, Tailwind CSS, Alpine.js, MySQL, Paystack/Flutterwave, Docker.",
    },
    {
      name: "Trarrk — Special Education Platform",
      link: "trarrk.com",
      desc: "NestJS backend with multi-tenant MongoDB, AI IEP engine, real-time tracking. Tech: NestJS, MongoDB, OpenAI API, Puppeteer.",
    },
    {
      name: "Cogrea — Career GPS Platform",
      link: "cogrea.com",
      desc: "Tech: React, TypeScript, Node.js, FastAPI, Auth0, Docker, AWS.",
    },
    {
      name: "Scuib.AI — AI Job Platform",
      link: "scuib.com",
      desc: "AI job matching with a recommendation engine. Tech: Node.js, React, TypeScript, OpenAI API.",
    },
  ];

  for (const p of projects) {
    page2.drawText(p.name, {
      x: margin,
      y: y2,
      size: 9.2,
      font: fontBold,
      color: textDark,
    });

    const linkW = fontRegular.widthOfTextAtSize(p.link, 8.5);
    page2.drawText(p.link, {
      x: margin + contentWidth - linkW,
      y: y2,
      size: 8.5,
      font: fontRegular,
      color: linkColor,
    });

    y2 -= 12;
    y2 = drawBullet(page2, p.desc, y2);
    y2 -= 2.5;
  }

  y2 -= 10;

  // 5. EDUCATION
  y2 = drawSectionTitle(page2, "Education", y2);

  const education = [
    {
      degree: "Higher National Diploma — Computer Science",
      school: "Federal Polytechnic, Oko",
      period: "Nov 2023 – Aug 2025",
    },
    {
      degree: "National Diploma — Computer Science",
      school: "Federal Polytechnic, Oko",
      period: "Jul 2021 – Apr 2023",
    },
  ];

  for (const edu of education) {
    page2.drawText(edu.degree, {
      x: margin,
      y: y2,
      size: 9.2,
      font: fontBold,
      color: textDark,
    });

    const periodW = fontRegular.widthOfTextAtSize(edu.period, 8.5);
    page2.drawText(edu.period, {
      x: margin + contentWidth - periodW,
      y: y2,
      size: 8.5,
      font: fontRegular,
      color: textMuted,
    });

    y2 -= 11.5;

    page2.drawText(edu.school, {
      x: margin,
      y: y2,
      size: 8.5,
      font: fontRegular,
      color: textMuted,
    });

    y2 -= 16;
  }

  // Page 2 footer
  page2.drawText("Page 2 of 2  ·  Onyedikachi Emmanuel  ·  emmanuelnnadi097@gmail.com  ·  09066846864", {
    x: margin,
    y: 18,
    size: 7.5,
    font: fontRegular,
    color: textMuted,
  });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve("public", "resume.pdf");
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Resume successfully generated at: ${outputPath} (${pdfBytes.length} bytes, 2 pages)`);
}

generateResume().catch((err) => {
  console.error("Error generating resume PDF:", err);
  process.exit(1);
});
