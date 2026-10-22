import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  
  // Create Page 1
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 dimensions in points
  const { width, height } = page.getSize();

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Palette
  const primaryColor = rgb(0.176, 0.831, 0.749); // #2dd4bf Teal
  const darkColor = rgb(0.08, 0.10, 0.13); // Deep dark
  const textDark = rgb(0.15, 0.18, 0.22);
  const textMuted = rgb(0.42, 0.46, 0.52);
  const lineColor = rgb(0.85, 0.88, 0.92);

  let y = height - 40;
  const margin = 40;
  const contentWidth = width - margin * 2;

  // Header Banner Background
  page.drawRectangle({
    x: 0,
    y: height - 105,
    width: width,
    height: 105,
    color: rgb(0.04, 0.06, 0.08),
  });

  // Top accent bar
  page.drawRectangle({
    x: 0,
    y: height - 5,
    width: width,
    height: 5,
    color: primaryColor,
  });

  // Name
  page.drawText("ONYEDIKACHI EMMANUEL", {
    x: margin,
    y: height - 42,
    size: 20,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  // Title
  page.drawText("SENIOR FULL STACK ENGINEER | SYSTEM ARCHITECT", {
    x: margin,
    y: height - 60,
    size: 10.5,
    font: fontBold,
    color: primaryColor,
  });

  // Contact line
  const contactText = "emmanuelnnadi097@gmail.com   |   +234 906 684 6864   |   Awka, Nigeria   |   github.com/iamdikachi   |   iamdikachi.com";
  page.drawText(contactText, {
    x: margin,
    y: height - 82,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.8, 0.84, 0.88),
  });

  y = height - 125;

  function drawSectionHeader(title) {
    page.drawText(title.toUpperCase(), {
      x: margin,
      y: y,
      size: 11,
      font: fontBold,
      color: darkColor,
    });
    
    // Draw accent underline
    page.drawLine({
      start: { x: margin, y: y - 4 },
      end: { x: margin + 40, y: y - 4 },
      thickness: 2,
      color: primaryColor,
    });

    page.drawLine({
      start: { x: margin + 40, y: y - 4 },
      end: { x: margin + contentWidth, y: y - 4 },
      thickness: 0.5,
      color: lineColor,
    });

    y -= 18;
  }

  // 1. PROFESSIONAL SUMMARY
  drawSectionHeader("Professional Summary");
  const summary =
    "Results-driven Senior Full Stack Engineer with 8+ years of expertise architecting resilient microservices, high-performance web applications, and enterprise cloud solutions. Proven leadership across full software development lifecycles, reducing latency, scaling distributed systems to 100k+ daily users, and championing code quality and modern CI/CD automation.";
  
  // Multi-line text wrapper
  function wrapText(text, maxChars) {
    const words = text.split(" ");
    const lines = [];
    let currentLine = "";
    for (const w of words) {
      if ((currentLine + " " + w).length <= maxChars) {
        currentLine = currentLine ? currentLine + " " + w : w;
      } else {
        lines.push(currentLine);
        currentLine = w;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  wrapText(summary, 98).forEach((line) => {
    page.drawText(line, {
      x: margin,
      y: y,
      size: 9,
      font: fontRegular,
      color: textDark,
      lineHeight: 13,
    });
    y -= 13;
  });

  y -= 8;

  // 2. EXPERIENCE
  drawSectionHeader("Professional Experience");

  const experiences = [
    {
      role: "Senior Full Stack Engineer",
      company: "TechCorp",
      period: "2022 - Present",
      location: "Remote",
      bullets: [
        "Architected migration of legacy monolithic core to Node.js and TypeScript microservices, cutting response latency by 42%.",
        "Engineered real-time analytics streaming engine with React, WebSockets, and Redis, reliably supporting 100k+ daily active users.",
        "Spearheaded automated CI/CD pipeline modernization and enforced TDD practices, elevating engineering test coverage above 95%."
      ],
    },
    {
      role: "Full Stack Developer",
      company: "InnovateSoft",
      period: "2020 - 2022",
      location: "Lagos, Nigeria",
      bullets: [
        "Built enterprise Next.js and Tailwind CSS client portal, achieving a 28% boost in user retention and conversion.",
        "Implemented containerized deployment pipelines using Docker, AWS, and GitHub Actions, slashing deployment cycle to under 15 minutes.",
        "Engineered PCI-compliant payment gateway integration with Stripe handling $500k+ in monthly recurring subscription volume."
      ],
    },
    {
      role: "Frontend Developer",
      company: "StartupHub",
      period: "2019 - 2020",
      location: "Remote",
      bullets: [
        "Developed comprehensive modular design system with React, TypeScript, and Storybook, unifying 4 core platform applications.",
        "Collaborated with UX/UI leadership to optimize core web vitals, enhancing mobile interaction speed and accessibility (WCAG 2.1 AA)."
      ],
    },
  ];

  for (const exp of experiences) {
    page.drawText(exp.role, {
      x: margin,
      y: y,
      size: 10,
      font: fontBold,
      color: textDark,
    });

    const rightMeta = `${exp.company}  |  ${exp.period}  |  ${exp.location}`;
    const metaWidth = fontBold.widthOfTextAtSize(rightMeta, 8.5);
    page.drawText(rightMeta, {
      x: margin + contentWidth - metaWidth,
      y: y,
      size: 8.5,
      font: fontBold,
      color: rgb(0.2, 0.45, 0.55),
    });

    y -= 12;

    for (const b of exp.bullets) {
      page.drawCircle({
        x: margin + 8,
        y: y + 2.5,
        size: 1.8,
        color: primaryColor,
      });

      const bulletLines = wrapText(b, 94);
      for (let i = 0; i < bulletLines.length; i++) {
        page.drawText(bulletLines[i], {
          x: margin + 18,
          y: y,
          size: 8.5,
          font: fontRegular,
          color: textDark,
        });
        y -= 11.5;
      }
    }
    y -= 4;
  }

  y -= 4;

  // 3. CORE TECHNICAL SKILLS
  drawSectionHeader("Core Technical Competencies");

  const skillGroups = [
    { label: "Frontend & Web:", items: "Next.js, React.js, TypeScript, JavaScript, Tailwind CSS, Framer Motion, HTML5/CSS3" },
    { label: "Backend & Systems:", items: "Node.js, Express.js, Nest.js, PHP, Laravel, RESTful APIs, GraphQL, Microservices" },
    { label: "Databases & Storage:", items: "PostgreSQL, MySQL, MongoDB, Redis, Schema Design, Performance Indexing" },
    { label: "DevOps & Cloud:", items: "Docker, AWS (EC2, S3, CloudFront), GitHub Actions, CI/CD Pipelines, Linux" },
    { label: "Testing & Quality:", items: "Jest, Pytest, Playwright, Cypress, Test-Driven Development (TDD), Sentry" },
  ];

  for (const sg of skillGroups) {
    page.drawText(sg.label, {
      x: margin,
      y: y,
      size: 8.5,
      font: fontBold,
      color: darkColor,
    });

    page.drawText(sg.items, {
      x: margin + 115,
      y: y,
      size: 8.5,
      font: fontRegular,
      color: textDark,
    });
    y -= 12.5;
  }

  y -= 6;

  // 4. EDUCATION & CERTIFICATIONS (2 Columns)
  drawSectionHeader("Education & Credentials");

  const colWidth = (contentWidth - 20) / 2;

  // Left Column: Education
  page.drawText("Bachelor of Science in Computer Science", {
    x: margin,
    y: y,
    size: 9,
    font: fontBold,
    color: textDark,
  });
  page.drawText("Graduated with First Class Honors  |  2014 - 2018", {
    x: margin,
    y: y - 11,
    size: 8,
    font: fontRegular,
    color: textMuted,
  });

  // Right Column: Certifications
  const rightColX = margin + colWidth + 20;
  const certs = [
    "AWS Certified Solutions Architect (Associate)",
    "Professional Scrum Master I (PSM I) - Scrum.org",
    "Meta React Developer Professional Certification",
  ];

  let certY = y;
  for (const cert of certs) {
    page.drawCircle({
      x: rightColX + 3,
      y: certY + 2.5,
      size: 1.8,
      color: primaryColor,
    });
    page.drawText(cert, {
      x: rightColX + 12,
      y: certY,
      size: 8,
      font: fontRegular,
      color: textDark,
    });
    certY -= 11;
  }

  // Footer bar
  page.drawRectangle({
    x: 0,
    y: 0,
    width: width,
    height: 18,
    color: rgb(0.04, 0.06, 0.08),
  });

  page.drawText("Verified Professional Resume  |  Onyedikachi Emmanuel  |  Available for Senior & Lead Roles", {
    x: margin,
    y: 5.5,
    size: 7.5,
    font: fontRegular,
    color: rgb(0.65, 0.70, 0.75),
  });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve("public", "resume.pdf");
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Resume successfully generated at: ${outputPath} (${pdfBytes.length} bytes)`);
}

generateResume().catch((err) => {
  console.error("Error generating resume PDF:", err);
  process.exit(1);
});
