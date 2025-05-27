<template>
  <div class="portfolio-container">
    <!-- Header Section with Animated Gradient Background -->
    <header class="header">
      <div class="nav-container">
        <div class="logo">MADEE<span class="highlight">HOUSE</span></div>
        <nav class="main-nav">
          <UButton to="#about" variant="ghost" class="nav-link"
            >About Me</UButton
          >
          <UButton to="#skills" variant="ghost" class="nav-link"
            >Skills</UButton
          >
          <UButton to="#projects" variant="ghost" class="nav-link"
            >Projects</UButton
          >
          <UButton to="#contact" variant="ghost" class="nav-link"
            >Contact</UButton
          >
        </nav>
      </div>

      <div class="hero-content">
        <div class="animated-text">
          <h1 class="title">
            Hello, I'm <span class="highlight">Nattapon Chanponsaen</span>
          </h1>
          <p class="subtitle">
            Transforming ideas into exceptional digital experiences — Full Stack
            Developer crafting innovative solutions with cutting-edge
            technologies that drive real business results
          </p>
          <div class="cta-buttons">
            <UButton color="white" class="primary-btn">View Projects</UButton>
            <UButton variant="outline" class="secondary-btn"
              >Contact Me</UButton
            >
          </div>
        </div>
        <div class="hero-image">
          <div class="code-block">
            <pre><code>
<span class="code-comment">// Welcome to my Portfolio</span>
<span class="code-keyword">const</span> <span class="code-variable">developer</span> = {
  <span class="code-property">name</span>: <span class="code-string">"Nattapon Chanponsaen"</span>,
  <span class="code-property">skills</span>: [<span class="code-string">"Frontend</span>, <span class="code-string">"Backend</span>, <span class="code-string">"Database</span>, <span class="code-string">"DevOps</span>],
  <span class="code-property">passion</span>: <span class="code-string">"Building modern web applications"</span>
};
            </code></pre>
          </div>
        </div>
      </div>

      <div class="scroll-indicator">
        <span>Scroll Down</span>
        <div class="scroll-arrow"></div>
      </div>
    </header>

    <!-- About Section -->
    <section id="about" class="section about-section">
      <div class="section-container">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
          <div class="about-image">
            <div class="image-container">
              <img
                src="/profile.png"
                alt="Profile Image"
                class="profile-image"
              />
            </div>
          </div>
          <div class="about-text">
            <p>
              I am a Full Stack Developer with experience in developing web
              applications and various systems using both Frontend and Backend
              technologies including PHP, Node.js, Nuxt 3, NestJS, Fastify,
              Bootstrap 5, and DevOps skills such as Docker, Docker Compose,
              GitLab CI/CD, Jenkins, NGINX, and AWS Cloud.
            </p>
            <p>
              I have experience in analyzing and designing new systems based on
              user requirements and can improve and extend existing systems in
              both Monolithic and Microservice architectures.
            </p>
            <div class="stats">
              <div class="stat-item">
                <div class="stat-number">6+</div>
                <div class="stat-label">Years Experience</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">10+</div>
                <div class="stat-label">Projects</div>
              </div>
              <div class="stat-item">
                <!-- <div class="stat-number">2.48</div>
                <div class="stat-label">GPA</div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section with Animated Progress Bars -->
    <section id="skills" class="section skills-section">
      <div class="section-container">
        <h2 class="section-title">My Skills</h2>
        <div class="skills-content">
          <div class="skill-category">
            <h3>Frontend</h3>
            <div class="skills-grid">
              <div
                class="skill-item"
                v-for="(skill, index) in frontendSkills"
                :key="'fe-' + index"
              >
                <div class="skill-icon">
                  <UIcon :name="skill.icon" class="tech-icon" />
                </div>
                <div class="skill-info">
                  <div class="skill-name">{{ skill.name }}</div>
                  <div class="skill-bar">
                    <div
                      class="skill-progress"
                      :style="{ width: skill.level + '%' }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="skill-category">
            <h3>Backend</h3>
            <div class="skills-grid">
              <div
                class="skill-item"
                v-for="(skill, index) in backendSkills"
                :key="'be-' + index"
              >
                <div class="skill-icon">
                  <UIcon :name="skill.icon" class="tech-icon" />
                </div>
                <div class="skill-info">
                  <div class="skill-name">{{ skill.name }}</div>
                  <div class="skill-bar">
                    <div
                      class="skill-progress"
                      :style="{ width: skill.level + '%' }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="skill-category">
            <h3>Database</h3>
            <div class="skills-grid">
              <div
                class="skill-item"
                v-for="(skill, index) in databaseSkills"
                :key="'db-' + index"
              >
                <div class="skill-icon">
                  <UIcon :name="skill.icon" class="tech-icon" />
                </div>
                <div class="skill-info">
                  <div class="skill-name">{{ skill.name }}</div>
                  <div class="skill-bar">
                    <div
                      class="skill-progress"
                      :style="{ width: skill.level + '%' }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="skill-category">
            <h3>DevOps & Tools</h3>
            <div class="skills-grid">
              <div
                class="skill-item"
                v-for="(skill, index) in devopsSkills"
                :key="'devops-' + index"
              >
                <div class="skill-icon">
                  <UIcon :name="skill.icon" class="tech-icon" />
                </div>
                <div class="skill-info">
                  <div class="skill-name">{{ skill.name }}</div>
                  <div class="skill-bar">
                    <div
                      class="skill-progress"
                      :style="{ width: skill.level + '%' }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section with Card Hover Effects -->
    <section id="projects" class="section projects-section">
      <div class="section-container">
        <h2 class="section-title">My Projects</h2>
        <div class="projects-filter">
          <UButton variant="ghost" class="filter-btn active">All</UButton>
          <UButton variant="ghost" class="filter-btn">Websites</UButton>
          <UButton variant="ghost" class="filter-btn">Applications</UButton>
          <UButton variant="ghost" class="filter-btn">Others</UButton>
        </div>
        <div class="projects-grid">
          <div
            class="project-card"
            v-for="(project, index) in projects"
            :key="index"
          >
            <div class="project-image">
              <div class="project-placeholder"></div>
              <div class="project-overlay">
                <UButton class="view-project-btn">ดูรายละเอียด</UButton>
              </div>
            </div>
            <div class="project-info">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tags">
                <span
                  class="tag"
                  v-for="(tag, tagIndex) in project.tags"
                  :key="tagIndex"
                  >{{ tag }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section with Animated Elements -->
    <section id="contact" class="section contact-section">
      <div class="section-container">
        <h2 class="section-title">Contact Me</h2>
        <div class="contact-content">
          <div class="contact-info">
            <h3 class="glow-text">Contact Information</h3>
            <div class="contact-card">
              <div class="contact-item">
                <div class="contact-icon pulse">
                  <UIcon name="i-heroicons-envelope" />
                </div>
                <div class="contact-text">mawinnattapon@gmail.com</div>
              </div>
              <div class="contact-item">
                <div class="contact-icon pulse">
                  <UIcon name="i-heroicons-phone" />
                </div>
                <div class="contact-text">+6697 094 9815</div>
              </div>
              <div class="contact-item">
                <div class="contact-icon pulse">
                  <UIcon name="i-heroicons-map-pin" />
                </div>
                <div class="contact-text">Bangkok, Thailand</div>
              </div>
            </div>

            <h3 class="social-title glow-text">Social Media</h3>
            <div class="social-links">
              <a href="#" class="social-link shine-effect">
                <UIcon name="i-simple-icons-github" />
                <span class="social-name">GitHub</span>
              </a>
              <a href="#" class="social-link shine-effect">
                <UIcon name="i-simple-icons-gitlab" />
                <span class="social-name">GitLab</span>
              </a>
              <a
                href="https://line.me/ti/p/WeER8tclZF"
                class="social-link shine-effect"
              >
                <UIcon name="i-simple-icons-line" />
                <span class="social-name">Line</span>
              </a>
            </div>
          </div>

          <div class="contact-visual">
            <div class="contact-blob"></div>
            <div class="floating-icons">
              <div class="floating-icon" v-for="i in 5" :key="i">
                <UIcon
                  :name="
                    [
                      'i-simple-icons-javascript',
                      'i-simple-icons-vuejs',
                      'i-simple-icons-react',
                      'i-simple-icons-nodejs',
                      'i-simple-icons-mongodb',
                    ][i - 1]
                  "
                />
              </div>
            </div>
            <div class="cta-container">
              <h3 class="cta-title">Personal Information</h3>
              <div class="personal-info">
                <div class="personal-item">
                  <div class="personal-icon">
                    <UIcon name="i-heroicons-cake" />
                  </div>
                  <div class="personal-text">
                    Born: September 29, 1996 (28 years old)
                  </div>
                </div>
                <div class="personal-item">
                  <div class="personal-icon">
                    <UIcon name="i-heroicons-map" />
                  </div>
                  <div class="personal-text">Location: Bangkok, Thailand</div>
                </div>
                <div class="personal-item">
                  <div class="personal-icon">
                    <UIcon name="i-heroicons-user" />
                  </div>
                  <div class="personal-text">Height/Weight: 186 cm / 92 kg</div>
                </div>
                <div class="personal-item">
                  <div class="personal-icon">
                    <UIcon name="i-heroicons-heart" />
                  </div>
                  <div class="personal-text">Status: Married</div>
                </div>
              </div>
              <UButton class="contact-btn neon-btn">View Full Resume</UButton>
            </div>
          </div>
        </div>
      </div>
      <div class="particles-container">
        <div class="particle" v-for="i in 20" :key="'p-' + i"></div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="copyright">
          2025 Full Stack Developer Portfolio. All rights reserved.
        </div>
        <div class="footer-nav">
          <a href="#about" class="footer-link">About Me</a>
          <a href="#skills" class="footer-link">Skills</a>
          <a href="#projects" class="footer-link">Projects</a>
          <a href="#contact" class="footer-link">Contact</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const frontendSkills = [
  { name: "Vue.js", level: 95, icon: "i-simple-icons-vuedotjs" },
  { name: "Nuxt.js 3", level: 95, icon: "i-simple-icons-nuxtdotjs" },
  { name: "React", level: 40, icon: "i-simple-icons-react" },
  { name: "React Native Expo", level: 40, icon: "i-simple-icons-expo" },
  { name: "TypeScript", level: 75, icon: "i-simple-icons-typescript" },
  { name: "HTML/CSS", level: 90, icon: "i-simple-icons-html5" },
  { name: "JavaScript", level: 90, icon: "i-simple-icons-javascript" },
  { name: "Bootstrap 5", level: 90, icon: "i-simple-icons-bootstrap" },
  { name: "Tailwind CSS", level: 60, icon: "i-simple-icons-tailwindcss" },
];

const backendSkills = [
  { name: "Node.js", level: 88, icon: "i-simple-icons-nodedotjs" },
  { name: "NestJS", level: 90, icon: "i-simple-icons-nestjs" },
  { name: "Fastify", level: 80, icon: "i-simple-icons-fastify" },
  { name: "Express.js", level: 70, icon: "i-simple-icons-express" },
  { name: "PHP", level: 90, icon: "i-simple-icons-php" },
];

const databaseSkills = [
  {
    name: "Microsoft SQL Server",
    level: 90,
    icon: "i-simple-icons-microsoftsqlserver",
  },
  { name: "Oracle Database", level: 85, icon: "i-simple-icons-oracle" },
  { name: "MySQL", level: 85, icon: "i-simple-icons-mysql" },
];

const devopsSkills = [
  { name: "Docker", level: 90, icon: "i-simple-icons-docker" },
  { name: "Docker Compose", level: 85, icon: "i-simple-icons-docker" },
  { name: "AWS", level: 85, icon: "i-simple-icons-amazonaws" },
  { name: "NGINX", level: 90, icon: "i-simple-icons-nginx" },
  { name: "Git", level: 90, icon: "i-simple-icons-git" },
  { name: "GitLab CI/CD", level: 85, icon: "i-simple-icons-gitlab" },
  { name: "GitHub Actions", level: 50, icon: "i-simple-icons-github" },
  { name: "Jenkins", level: 60, icon: "i-simple-icons-jenkins" },
  { name: "Cloudflare", level: 50, icon: "i-simple-icons-cloudflare" },
  { name: "Kubernetes", level: 30, icon: "i-simple-icons-kubernetes" },
];

const projects = [
  {
    title: "DBD HR",
    description: "ระบบบริหารบุคลากรของกรมพัฒนาธุรกิจการค้า กระทรวงพาณิชย์",
    tags: ["การลง ลงเวลา", "ทะเบียนบุคลากร", "ประเมินผลการปฎิบัติงาน"],
  },
  {
    title: "DFT INSPACE",
    description:
      "ระบบออกใบอนุญาตรับรองถิ่นกำเนิน กรมการค้าต่างประเทศ กระทรวงพาณิชย์",
    tags: [
      "ออกใบอนุญาต",
      "ส่งข้อมูลเพื่อแจ้งนำเข้า - ส่งออก",
      "กำหนดเงื่อนไขการตรวจสินค้า",
    ],
  },
  {
    title: "DOA NSW",
    description:
      "ระบบแจ้งใบอนุญาตเพื่อขอนำเข้า - ส่งออกสินค้าเกษตร กระทรวงเกษตรและสหกรณ์",
    tags: [
      "ใบอนุญาต",
      "ส่งข้อมูลเพื่อแจ้งนำเข้า - ส่งออก",
      "รับ - ส่งข้อมูลกับกรมศุลกากร",
    ],
  },
  {
    title: "TRD_ASSET",
    description: "ระบบจัดการทรัพย์สิน กรมธนารักษ์ กระทรวงการคลัง",
    tags: ["ข้อมูลทรัพย์สิน", "การอนุรักษ์ทรัพย์สิน", "ประเมินทรัพย์สิน"],
  },
  {
    title: "SWU HR",
    description: "ระบบบริหารบุคลากร มหาวิทยาลัยศรีนครินทรวิโรฒ",
    tags: ["ข้อมูลบุคลากร", "โครงสร้างองค์กร", "การสรรหาบุคลากร"],
  },
  {
    title: "Soft Skills",
    description:
      "Communication skills, Personnel management, Time management, Responsibility, Problem solving",
    tags: ["Communication", "Management", "Problem Solving"],
  },
];
</script>

<style>
/* Global Styles */
:root {
  --primary-color: #0a192f;
  --secondary-color: #112240;
  --accent-color: #64ffda;
  --text-primary: #e6f1ff;
  --text-secondary: #8892b0;
  --gradient-start: #0a192f;
  --gradient-end: #112240;
  --neon-glow: 0 0 10px rgba(100, 255, 218, 0.5),
    0 0 20px rgba(100, 255, 218, 0.3), 0 0 30px rgba(100, 255, 218, 0.1);
  --shadow-color: rgba(0, 0, 0, 0.5);
  --glow-color: rgba(100, 255, 218, 0.8);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: var(--primary-color);
  color: var(--text-primary);
  line-height: 1.6;
}

.portfolio-container {
  overflow-x: hidden;
}

/* Header Styles */
.header {
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    var(--gradient-start),
    var(--gradient-end)
  );
  position: relative;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at 20% 30%,
    rgba(100, 255, 218, 0.05) 0%,
    transparent 50%
  );
  z-index: 1;
}

.header::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at 80% 70%,
    rgba(100, 255, 218, 0.05) 0%,
    transparent 50%
  );
  z-index: 1;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
  position: relative;
  z-index: 10;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  text-shadow: var(--neon-glow);
  position: relative;
}

.highlight {
  color: var(--accent-color);
}

.main-nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: var(--text-primary) !important;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--accent-color) !important;
}

.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 4rem 0;
  gap: 2rem;
  position: relative;
  z-index: 10;
}

.animated-text {
  flex: 1;
  max-width: 600px;
}

.title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  animation: fadeInUp 1s ease-out;
  text-shadow: 0 0 10px rgba(230, 241, 255, 0.3);
  position: relative;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  animation: fadeInUp 1s ease-out 0.2s;
  animation-fill-mode: both;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  animation: fadeInUp 1s ease-out 0.4s;
  animation-fill-mode: both;
}

.primary-btn {
  background-color: var(--accent-color) !important;
  color: var(--primary-color) !important;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(100, 255, 218, 0.2);
}

.secondary-btn {
  border-color: var(--accent-color) !important;
  color: var(--accent-color) !important;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.secondary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(100, 255, 218, 0.1);
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 1s ease-out 0.6s;
  animation-fill-mode: both;
}

.code-block {
  background-color: rgba(17, 34, 64, 0.8);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(100, 255, 218, 0.1);
  width: 100%;
  max-width: 500px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(5px);
}

.code-block::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px 8px 0 0;
}

.code-block pre {
  margin: 0;
  overflow-x: auto;
  font-family: "Fira Code", monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

.code-comment {
  color: #637777;
}

.code-keyword {
  color: #ff79c6;
}

.code-variable {
  color: #f8f8f2;
}

.code-property {
  color: #8be9fd;
}

.code-string {
  color: #f1fa8c;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
  opacity: 0.8;
  animation: fadeInUp 1s ease-out 1s, bounce 2s ease-in-out infinite 2s;
  animation-fill-mode: both;
}

.scroll-arrow {
  width: 20px;
  height: 20px;
  border-right: 2px solid var(--text-secondary);
  border-bottom: 2px solid var(--text-secondary);
  transform: rotate(45deg);
  margin-top: 0.5rem;
}

/* Section Styles */
.section {
  padding: 6rem 5%;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  color: var(--text-primary);
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background-color: var(--accent-color);
  border-radius: 2px;
}

/* About Section */
.about-section {
  background-color: var(--secondary-color);
}

.about-content {
  display: flex;
  gap: 4rem;
  align-items: center;
}

.about-image {
  flex: 1;
}

.image-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.5s ease;
}

.image-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(100, 255, 218, 0.2), transparent);
  z-index: 1;
  opacity: 0.6;
  transition: opacity 0.5s ease;
}

.image-container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 20px rgba(100, 255, 218, 0.3);
  border-radius: 12px;
  z-index: 2;
}

.profile-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(100, 255, 218, 0.2);
  transition: all 0.5s ease;
  border: 2px solid rgba(100, 255, 218, 0.3);
  filter: brightness(0.95) contrast(1.1);
}

.about-image:hover .image-container {
  transform: scale(1.03);
}

.about-image:hover .image-container::before {
  opacity: 0.8;
  animation: shimmer 2s infinite;
}

.about-text {
  flex: 1;
}

.about-text p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.stats {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Skills Section */
.skills-section {
  background-color: var(--primary-color);
  position: relative;
  overflow: hidden;
}

.skills-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at 70% 20%,
    rgba(100, 255, 218, 0.05) 0%,
    transparent 50%
  );
  z-index: 1;
}

.skills-content {
  position: relative;
  z-index: 2;
}

.skills-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.skill-category h3 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--text-primary);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 1rem;
  border-radius: 8px;
}

.skill-item:hover {
  transform: translateY(-5px);
  background: rgba(17, 34, 64, 0.5);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 0 10px rgba(100, 255, 218, 0.1);
}

.skill-icon {
  width: 50px;
  height: 50px;
  background-color: rgba(100, 255, 218, 0.1);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2), 0 0 10px rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.skill-item:hover .skill-icon {
  transform: scale(1.1);
  background-color: rgba(100, 255, 218, 0.15);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(100, 255, 218, 0.2);
}

.tech-icon {
  width: 30px;
  height: 30px;
  color: var(--accent-color);
  filter: drop-shadow(0 0 5px rgba(100, 255, 218, 0.5));
  transition: all 0.3s ease;
}

.skill-item:hover .tech-icon {
  transform: scale(1.1);
  filter: drop-shadow(0 0 8px rgba(100, 255, 218, 0.7));
}

.skill-info {
  flex: 1;
}

.skill-name {
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
}

.skill-bar {
  height: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(
    90deg,
    var(--accent-color),
    rgba(100, 255, 218, 0.5)
  );
  border-radius: 4px;
  transition: width 1.5s ease-in-out;
  box-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
  position: relative;
  overflow: hidden;
}

.skill-progress::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  animation: skillShine 3s infinite linear;
}

@keyframes skillShine {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(500%);
  }
}

/* Projects Section */
.projects-section {
  background-color: var(--secondary-color);
  position: relative;
  overflow: hidden;
}

.projects-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at 30% 70%,
    rgba(100, 255, 218, 0.05) 0%,
    transparent 50%
  );
  z-index: 1;
}

.projects-grid {
  position: relative;
  z-index: 2;
}

.projects-filter {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.filter-btn {
  color: var(--text-secondary) !important;
  font-weight: 500;
  transition: color 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
  color: var(--accent-color) !important;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: rgba(17, 34, 64, 0.8);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  border: 1px solid transparent;
  backdrop-filter: blur(5px);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(100, 255, 218, 0.2);
  border: 1px solid rgba(100, 255, 218, 0.2);
}

.project-image {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  overflow: hidden;
}

.project-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(100, 255, 218, 0.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 25, 47, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.view-project-btn {
  background-color: var(--accent-color) !important;
  color: var(--primary-color) !important;
  font-weight: 600;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.project-card:hover .view-project-btn {
  transform: translateY(0);
}

.project-info {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.project-description {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: rgba(100, 255, 218, 0.1);
  color: var(--accent-color);
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.8rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1), 0 0 5px rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
}

.tag:hover {
  background-color: rgba(100, 255, 218, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2), 0 0 10px rgba(100, 255, 218, 0.2);
}

/* Contact Section */
.contact-section {
  background-color: var(--primary-color);
  position: relative;
  overflow: hidden;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  position: relative;
  z-index: 2;
}

.contact-info h3 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--text-primary);
}

.glow-text {
  text-shadow: var(--neon-glow);
  position: relative;
}

.glow-text::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: var(--accent-color);
  box-shadow: var(--neon-glow);
}

.contact-card {
  background: rgba(17, 34, 64, 0.6);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
  position: relative;
  overflow: hidden;
}

.contact-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(100, 255, 218, 0.05),
    transparent
  );
  transform: translateX(-100%);
  animation: shine 3s infinite;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.contact-icon {
  width: 50px;
  height: 50px;
  background-color: rgba(100, 255, 218, 0.1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--accent-color);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.pulse {
  position: relative;
}

.pulse::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(100, 255, 218, 0.5);
  animation: pulse 2s infinite;
}

.contact-text {
  color: var(--text-secondary);
  font-weight: 500;
  transition: color 0.3s ease;
}

.contact-item:hover .contact-text {
  color: var(--accent-color);
}

.social-title {
  margin-top: 3rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: rgba(100, 255, 218, 0.05);
  border-radius: 50px;
  color: var(--accent-color);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.social-name {
  font-weight: 500;
}

.social-link:hover {
  transform: translateY(-5px);
  background-color: rgba(100, 255, 218, 0.1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 10px rgba(100, 255, 218, 0.2);
}

.shine-effect {
  position: relative;
  overflow: hidden;
}

.shine-effect::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transform: rotate(45deg);
  transition: all 0.3s ease;
  opacity: 0;
}

.shine-effect:hover::before {
  animation: shine 1s forwards;
}

.contact-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-blob {
  position: absolute;
  width: 350px;
  height: 350px;
  background: radial-gradient(
    circle,
    rgba(100, 255, 218, 0.1) 0%,
    rgba(10, 25, 47, 0) 70%
  );
  border-radius: 50%;
  filter: blur(30px);
  animation: pulse-slow 8s infinite alternate;
}

.floating-icons {
  position: absolute;
  width: 100%;
  height: 100%;
}

.floating-icon {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: rgba(17, 34, 64, 0.8);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--accent-color);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2), 0 0 10px rgba(100, 255, 218, 0.2);
  animation: float 6s infinite alternate;
}

.floating-icon:nth-child(1) {
  top: 10%;
  left: 20%;
  animation-delay: 0s;
}

.floating-icon:nth-child(2) {
  top: 60%;
  left: 10%;
  animation-delay: 1s;
}

.floating-icon:nth-child(3) {
  top: 30%;
  right: 15%;
  animation-delay: 2s;
}

.floating-icon:nth-child(4) {
  top: 70%;
  right: 20%;
  animation-delay: 3s;
}

.floating-icon:nth-child(5) {
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 4s;
}

.cta-container {
  background: rgba(17, 34, 64, 0.8);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
  max-width: 400px;
  z-index: 1;
}

.cta-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  text-shadow: 0 0 5px rgba(100, 255, 218, 0.3);
  position: relative;
}

.cta-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 2px;
  background-color: var(--accent-color);
  box-shadow: var(--neon-glow);
}

.personal-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
  text-align: left;
}

.personal-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background-color: rgba(17, 34, 64, 0.6);
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(100, 255, 218, 0.05);
  transition: all 0.3s ease;
}

.personal-item:hover {
  transform: translateX(10px);
  background-color: rgba(17, 34, 64, 0.8);
  border-color: rgba(100, 255, 218, 0.2);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3), 0 0 10px rgba(100, 255, 218, 0.2);
}

.personal-icon {
  width: 40px;
  height: 40px;
  background-color: rgba(100, 255, 218, 0.1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--accent-color);
  box-shadow: 0 0 10px rgba(100, 255, 218, 0.2);
}

.personal-text {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.neon-btn {
  background-color: transparent !important;
  color: var(--accent-color) !important;
  border: 2px solid var(--accent-color) !important;
  font-weight: 600;
  padding: 0.75rem 2rem !important;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
}

.neon-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: var(--accent-color);
  transition: all 0.3s ease;
  z-index: -1;
}

.neon-btn:hover {
  color: var(--primary-color) !important;
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.5);
}

.neon-btn:hover::before {
  width: 100%;
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background-color: var(--accent-color);
  border-radius: 50%;
  opacity: 0.3;
  animation: particles 15s infinite linear;
}

.particle:nth-child(even) {
  width: 5px;
  height: 5px;
  opacity: 0.2;
}

@keyframes particles {
  0% {
    transform: translateY(100vh) translateX(0);
  }
  100% {
    transform: translateY(-100vh) translateX(100px);
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(100, 255, 218, 0.5);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(100, 255, 218, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(100, 255, 218, 0);
  }
}

@keyframes pulse-slow {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.2);
    opacity: 0.2;
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}

@keyframes shine {
  0% {
    opacity: 0;
    transform: translateX(-100%) rotate(45deg);
  }
  20% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: translateX(100%) rotate(45deg);
  }
}

/* Footer */
.footer {
  background-color: var(--secondary-color);
  padding: 2rem 5%;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.footer-nav {
  display: flex;
  gap: 1.5rem;
}

.footer-link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--accent-color);
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }

  .cta-buttons {
    justify-content: center;
  }

  .about-content {
    flex-direction: column;
  }

  .contact-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }

  .title {
    font-size: 2.5rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .footer-nav {
    justify-content: center;
  }
}
</style>
