document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = parseInt(urlParams.get('id'));

  // Ensure PortfolioManager is available
  if (!window.PortfolioManager) {
    console.error('PortfolioManager is not defined. Make sure app.js is included before this script.');
    document.getElementById('blog-title').textContent = 'Error loading blog';
    return;
  }

  if (!window.portfolio) {
    window.portfolio = new PortfolioManager();
    await portfolio.loadData();
  } else if (!portfolio.blogsData) {
    await portfolio.loadData();
  }

  const blog = portfolio.getBlogById(blogId);

  if (!blog) {
    document.getElementById('blog-title').textContent = 'Blog not found';
    return;
  }

  // Ensure a cover element exists
  let coverEl = document.querySelector('.blog-cover');
  if (!coverEl) {
    coverEl = document.createElement('div');
    coverEl.className = 'blog-cover';
    const article = document.querySelector('.blog-post');
    if (article) article.insertBefore(coverEl, article.firstChild);
  }

  coverEl.style.backgroundImage = `url('${blog.cover || 'assets/images/default-cover.jpg'}')`;
  document.getElementById('blog-title').textContent = blog.title;
  document.getElementById('blog-meta').textContent = `By ${blog.author} on ${new Date(blog.date).toLocaleDateString()}`;

  const contentHtml = blog.content.split('\n').map(line => {
    const trimmed = line.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('##')) {
      return `<h2>${trimmed.replace('##', '').trim()}</h2>`;
    }
    if (trimmed.startsWith('-')) {
      return `<li>${trimmed.replace('-', '').trim()}</li>`;
    }
    // Markdown image syntax: ![alt](url)
    if (trimmed.startsWith('![')) {
      const altMatch = trimmed.match(/!\[(.*?)\]/);
      const urlMatch = trimmed.match(/\((.*?)\)/);
      const altText = altMatch ? altMatch[1] : '';
      const imageUrl = urlMatch ? urlMatch[1] : '';
      if (imageUrl) return `<img src="${imageUrl}" alt="${altText}" class="blog-image">`;
      return '';
    }
    return `<p>${trimmed}</p>`;
  }).join('');

  document.getElementById('blog-content').innerHTML = contentHtml;
});