// Portfolio Data Manager
class PortfolioManager {
  constructor() {
    this.portfolioData = null;
    this.blogsData = null;
    this.init();
  }

  async init() {
    await this.loadData();
    this.render();
  }

  async loadData() {
    try {
      const [portfolio, blogs] = await Promise.all([
        fetch('assets/data/portfolio.json').then(r => r.json()),
        fetch('assets/data/blogs.json').then(r => r.json())
      ]);
      this.portfolioData = portfolio;
      this.blogsData = blogs;
      console.log('Data loaded successfully:', { portfolio, blogs });
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

  render() {
    if (this.portfolioData && this.blogsData) {
      this.renderAbout();
      this.renderProjects();
      this.renderBlogs();
      this.renderAchievements();
    }
  }

  renderAbout() {
    const info = this.portfolioData.personalInfo;
    const experience = this.portfolioData.experience;
    const education = this.portfolioData.education;
    const skills = this.portfolioData.skills;
    const competitive = this.portfolioData.competitiveProgramming;

    const aboutText = document.querySelector('.about-text');
    const skillsGrid = document.querySelector('.skills-grid');

    if (aboutText) {
      let experienceHTML = '<h3 style="margin-top: 2rem; margin-bottom: 1rem; color: var(--primary-color);">Experience</h3>';
      experience.forEach(exp => {
        experienceHTML += `
          <div style="margin-bottom: 1.5rem; padding: 1rem; background: var(--bg-light); border-radius: 8px; border-left: 3px solid var(--primary-color);">
            <h4 style="color: var(--text-dark); margin-bottom: 0.3rem;">${exp.title} @ ${exp.company}</h4>
            <p style="color: var(--text-light); font-size: 0.9rem; margin-bottom: 0.5rem;">${exp.duration} • ${exp.location}</p>
            <p style="color: var(--text-light); font-size: 0.9rem;">${exp.description}</p>
          </div>
        `;
      });

      let educationHTML = `
        <h3 style="margin-top: 2rem; margin-bottom: 1rem; color: var(--primary-color);">Education</h3>
        <div style="padding: 1rem; background: var(--bg-light); border-radius: 8px; border-left: 3px solid var(--secondary-color);">
          <h4 style="color: var(--text-dark); margin-bottom: 0.3rem;">${education.degree}</h4>
          <p style="color: var(--text-light); font-size: 0.9rem; margin-bottom: 0.5rem;">${education.institution}</p>
          <p style="color: var(--text-light); font-size: 0.9rem; margin-bottom: 0.5rem;">${education.duration}</p>
          <p style="color: var(--primary-color); font-weight: 600;">GPA: ${education.gpa}</p>
        </div>
      `;

      let competitiveHTML = '<h3 style="margin-top: 2rem; margin-bottom: 1rem; color: var(--primary-color);">Competitive Programming</h3>';
      competitive.forEach(comp => {
        competitiveHTML += `
          <div style="margin-bottom: 0.8rem; display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: var(--bg-light); border-radius: 6px;">
            <span style="color: var(--text-dark); font-weight: 500;">${comp.platform}</span>
            <a href="${comp.link}" target="_blank" style="color: var(--primary-color); text-decoration: underline; font-size: 0.9rem;">${comp.achievement}</a>
          </div>
        `;
      });

      aboutText.innerHTML = `
        <h2 style="margin-bottom: 1rem; color: var(--text-dark);">About Me</h2>
        <p style="color: var(--text-light); margin-bottom: 1rem; line-height: 1.8;">${info.bio}</p>
        <p style="color: var(--text-light); margin-bottom: 1.5rem; line-height: 1.8;">Currently working as a <strong style="color: var(--primary-color);">${info.title}</strong> at ${experience[0].company}, solving complex problems and building high-performance systems.</p>
        ${experienceHTML}
        ${educationHTML}
        ${competitiveHTML}
      `;
    }

    if (skillsGrid) {
      const skillsHTML = `
        <div class="skill-category">
          <h4>Languages</h4>
          <p>${skills.languages.join(', ')}</p>
        </div>
        <div class="skill-category">
          <h4>Databases</h4>
          <p>${skills.databases.join(', ')}</p>
        </div>
        <div class="skill-category">
          <h4>Cloud & Tools</h4>
          <p>${skills.cloud.concat(skills.tools).join(', ')}</p>
        </div>
        <div class="skill-category">
          <h4>Specializations</h4>
          <p>${skills.specializations.join(', ')}</p>
        </div>
        <div class="skill-category">
          <h4>AI/ML</h4>
          <p>${skills.aiml.join(', ')}</p>
        </div>
        <div class="skill-category">
          <h4>Development</h4>
          <p>REST APIs, OOP, System Design, Git, Linux CLI, SSH</p>
        </div>
      `;
      skillsGrid.innerHTML = skillsHTML;
    }
  }

  renderProjects() {
    const projects = this.portfolioData.projects;
    const projectsGrid = document.querySelector('.projects-grid');

    if (projectsGrid) {
      const projectsHTML = projects.map(project => `
        <div class="project-card">
          <div class="project-image">
            <div style="font-size: 3rem;">💻</div>
          </div>
          <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-tags">
              ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="project-link" target="_blank">
              View Project <span>→</span>
            </a>
          </div>
        </div>
      `).join('');

      projectsGrid.innerHTML = projectsHTML;
    }
  }

  renderBlogs() {
    const blogs = this.blogsData.blogs;
    const blogGrid = document.querySelector('.blog-grid');

    if (blogGrid) {
      const blogsHTML = blogs.map(blog => `
        <div class="blog-card">
          <div class="blog-header">
            <span class="blog-category">${blog.category}</span>
            <h3>${blog.title}</h3>
          </div>
          <div class="blog-body">
            <p class="blog-excerpt">${blog.excerpt}</p>
            <div class="blog-meta">
              <span>📅 ${new Date(blog.date).toLocaleDateString()}</span>
              <span>⏱️ ${blog.readTime} min read</span>
            </div>
            <a href="blog.html?id=${blog.id}" class="read-more">
              Read More <span>→</span>
            </a>
          </div>
        </div>
      `).join('');

      blogGrid.innerHTML = blogsHTML;
    }
  }

  renderAchievements() {
    const achievements = this.portfolioData.achievements;
    const achievementsGrid = document.querySelector('.achievements-grid');

    if (achievementsGrid) {
      const achievementsHTML = achievements.map(achievement => `
        <div class="achievement-card">
          <div class="achievement-icon">${achievement.icon}</div>
          <h3>${achievement.title}</h3>
          <p>${achievement.description}</p>
        </div>
      `).join('');

      achievementsGrid.innerHTML = achievementsHTML;
    }
  }

  getBlogById(id) {
    return this.blogsData.blogs.find(blog => blog.id === id);
  }
}

// Initialize Portfolio Manager
let portfolio;

document.addEventListener('DOMContentLoaded', () => {
  portfolio = new PortfolioManager();
  setupEventListeners();
});

// Setup all event listeners
function setupEventListeners() {
  setupNavigation();
  setupModalListeners();
  setupSmoothScroll();
  setupScrollAnimations();
}

// Navigation Toggle for Mobile
function setupNavigation() {
  const nav = document.querySelector('nav');
  const navToggle = document.querySelector('.nav-toggle');
  const body = document.body;
  
  if (!navToggle) return;
  
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('active');
    body.classList.toggle('mobile-nav-open');
  });

  // Close menu when link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      body.classList.remove('mobile-nav-open');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
      nav.classList.remove('active');
      body.classList.remove('mobile-nav-open');
    }
  });
}

// Blog Modal
function openBlogDetail(id) {
  if (!portfolio || !portfolio.blogsData) {
    console.warn('Portfolio data not loaded yet');
    return;
  }
  
  const blog = portfolio.getBlogById(id);
  if (!blog) return;

  const modal = document.getElementById('blogModal');
  const modalBody = document.querySelector('.modal-body');

  const content = blog.content.split('\n').map(line => {
    if (line.startsWith('##')) {
      return `<h2>${line.replace('##', '').trim()}</h2>`;
    }
    if (line.startsWith('-')) {
      return `<li>${line.replace('-', '').trim()}</li>`;
    }
    return line.trim() ? `<p>${line}</p>` : '';
  }).join('');

  modal.querySelector('.modal-header').innerHTML = `
    <button class="modal-close" onclick="closeBlogModal()">&times;</button>
    <span class="blog-category">${blog.category}</span>
    <h2>${blog.title}</h2>
    <div style="margin-top: 1rem; opacity: 0.9;">
      <span style="margin-right: 2rem;">📅 ${new Date(blog.date).toLocaleDateString()}</span>
      <span>✍️ ${blog.author}</span>
    </div>
  `;

  modalBody.innerHTML = content;
  modal.classList.add('active');
}

function closeBlogModal() {
  const modal = document.getElementById('blogModal');
  modal.classList.remove('active');
}

function setupModalListeners() {
  const modal = document.getElementById('blogModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeBlogModal();
      }
    });
  }
}

// Smooth scroll and active nav link
function setupSmoothScroll() {
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = link.getAttribute('href');
      if (target.startsWith('#')) {
        e.preventDefault();
        const section = document.querySelector(target);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          updateActiveNav(target);
        }
      }
    });
  });
}

function updateActiveNav(target) {
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.style.color = link.getAttribute('href') === target ? 'var(--primary-color)' : 'var(--text-dark)';
  });
}

// Scroll animations
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s ease-out';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.project-card, .blog-card, .achievement-card').forEach(el => {
    observer.observe(el);
  });
}



