# 🚀 Modern Portfolio Website

A beautiful, modern portfolio website built with vanilla HTML, CSS, and JavaScript.

## Features

✨ **Modern & Responsive Design**
- Sleek gradient backgrounds
- Smooth animations and transitions
- Fully responsive for all devices
- Mobile-friendly navigation

📱 **Sections Included**
- Hero section with CTA buttons
- About & Skills showcase
- Featured projects gallery
- Blog/Articles section with detailed view modal
- Achievements & Awards display
- Contact section with social links

📝 **Blog System**
- JSON-based blog storage (no database needed)
- Separate blog data file for easy management
- Read more modal with full article display
- Categories and read time estimates
- Easy to add new blog posts

🎨 **Design Features**
- Gradient color scheme (Purple & Blue)
- Shadow effects and hover animations
- Smooth scroll behavior
- Dynamic content loading from JSON files

## Project Structure

```
portfolio/
├── index.html                 # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css         # All styling
│   ├── js/
│   │   └── app.js            # JavaScript functionality
│   └── data/
│       ├── portfolio.json     # Portfolio content (about, projects, achievements)
│       └── blogs.json         # Blog posts storage
└── README.md                  # This file
```

## How to Use

### 1. **Setup**
- Simply open `index.html` in a web browser
- All data loads from JSON files automatically

### 2. **Customize Portfolio Data**

Edit `assets/data/portfolio.json` to customize:

```json
{
  "personalInfo": {
    "name": "Your Name",
    "title": "Your Title",
    "bio": "Your bio...",
    "email": "your.email@example.com",
    "social": {
      "github": "https://github.com/...",
      "linkedin": "https://linkedin.com/...",
      "email": "mailto:..."
    }
  },
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description",
      "technologies": ["Tech1", "Tech2"],
      "link": "https://github.com/..."
    }
  ],
  "achievements": [
    {
      "title": "Achievement Title",
      "description": "Achievement description",
      "icon": "🥇"
    }
  ]
}
```

### 3. **Add Blog Posts**

Edit `assets/data/blogs.json` and add a new blog object:

```json
{
  "blogs": [
    {
      "id": 3,
      "title": "Your Blog Title",
      "slug": "your-blog-slug",
      "excerpt": "Short excerpt of your blog post",
      "content": "Full blog content here. Use markdown-like formatting:\n\n## Heading\n- List items\n\nRegular paragraphs",
      "author": "Your Name",
      "date": "2024-11-14",
      "category": "Category Name",
      "tags": ["tag1", "tag2"],
      "readTime": 5
    }
  ]
}
```

**Important:** Always increment the `id` for new blog posts!

### 4. **Content Markdown Format**

In blog content, use simple formatting:
- `## Heading` for subheadings
- `- Item` for bullet points
- Regular text for paragraphs

Example:
```
This is a paragraph about the topic.

## Important Section
- Point 1
- Point 2

Another paragraph with more details.
```

## Features Breakdown

### Navigation
- Sticky header with smooth scroll
- Mobile hamburger menu
- Active link highlighting

### Hero Section
- Eye-catching gradient background
- Call-to-action buttons
- Animated entrance

### Projects
- Grid layout with hover effects
- Technology tags
- Links to repositories

### Blog
- Card-based layout
- Category badges
- Read time estimates
- Modal view for full article content
- Smooth open/close animations

### Achievements
- Icon-based cards
- Honors and awards display
- Responsive grid

## Customization Tips

### Colors
Edit `:root` variables in `assets/css/style.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
  /* ... */
}
```

### Fonts
Modify the `font-family` in the `body` selector

### Spacing
Adjust padding/margins in sections as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lightweight (no heavy libraries)
- Fast loading times
- Optimized CSS animations
- Vanilla JavaScript (no dependencies)

## Tips for Best Results

1. **Profile Image:** Replace placeholder image URLs in portfolio.json with your actual images
2. **Blog SEO:** Use descriptive titles and excerpts
3. **Project Links:** Ensure all GitHub links are correct
4. **Social Links:** Update with your actual social media profiles
5. **Read Time:** Estimate 200 words per minute for accuracy

## Deployment

### GitHub Pages
1. Create a repository named `yourusername.github.io`
2. Push portfolio folder contents to the repo
3. Access at `https://yourusername.github.io/portfolio/`

### Netlify
1. Connect your GitHub repo
2. Set build folder to `portfolio`
3. Deploy!

### Traditional Hosting
1. Upload portfolio folder to your hosting server
2. Access via your domain

## Future Enhancements

- Add search functionality for blogs
- Implement filtering by categories/tags
- Add comment system (using external service)
- Dark mode toggle
- Animation prefers-reduced-motion support

## License

Free to use and modify for personal use.

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**
