document.addEventListener('DOMContentLoaded', async () => {
  const blogGrid = document.querySelector('.blog-grid');
  if (!blogGrid) return;

  // Ensure portfolio manager and data are loaded
  if (!window.portfolio) {
    window.portfolio = new PortfolioManager();
    await portfolio.loadData();
  } else if (!portfolio.blogsData) {
    await portfolio.loadData();
  }

  const blogs = (portfolio.blogsData && portfolio.blogsData.blogs) || [];

  if (blogs.length === 0) {
    blogGrid.innerHTML = '<p>No blog posts found.</p>';
    return;
  }

  const blogsHTML = blogs.map(blog => `
    <div class="blog-card">
      <div class="blog-cover" style="background-image: url('${blog.cover || 'assets/images/default-cover.jpg'}');"></div>
      <div class="blog-content">
        <h2>${blog.title}</h2>
        <p>${blog.excerpt}</p>
        <div class="blog-meta-small">📅 ${new Date(blog.date).toLocaleDateString()} • ⏱ ${blog.readTime} min</div>
        <a href="blog.html?id=${blog.id}" class="read-more">Read More</a>
      </div>
    </div>
  `).join('');

  blogGrid.innerHTML = blogsHTML;
});