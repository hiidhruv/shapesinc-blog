export interface BlogPost {
  title: string
  slug: string
  date: string
  author: string
  authorPfp: string
  role: string
  thumbnail: string
  category: string
  content: string
}

// Define our blog posts directly in this file
const blogPosts: BlogPost[] = [
  {
    title: "Ensuring Safety at Shapes.inc",
    slug: "ensuring-safety-at-shapes-inc",
    date: "March 7th, 2025",
    author: "Dhruv",
    authorPfp: "https://i.imgur.com/c19AS0w.jpg",
    role: "Community Manager",
    thumbnail: "https://i.imgur.com/2C9MF0l.png",
    category: "safety",
    content:
      "# Ensuring Safety at Shapes.inc\n\nAt Shapes.inc, safety is at the core of everything we do. We understand that AI-powered interactions come with great responsibility, and we are committed to creating a secure, positive space for everyone in our community. As we continue to build the future of AI companions, friends, and teachers, we want to ensure that safety remains a shared priority.\n\n## How We Keep Shapes Safe\n\nWe take a multi-layered approach to safety, integrating advanced technology and user empowerment to maintain a secure environment. Here's how we do it:\n\n### Proactive Content Moderation\n\nFrom the moment a Shape is created, our platform scans and evaluates content to ensure compliance with our community guidelines. Moderation happens at multiple stages:\n\n- **During Creation:** Every Shape undergoes an initial automated safety check.\n- **Ongoing Scans:** We run daily platform-wide scans to detect and prevent harmful content.\n- **Real-Time Updates:** Whenever content is modified, it's re-evaluated to ensure continued compliance.\n\n### Age-Appropriate Interactions\n\nWe know that our users span different age groups, and we take special care to provide appropriate content for all:\n\n- **Mature Theme Detection:** Our system automatically flags sensitive or mature content.\n- **Clear Content Labeling:** Users can easily identify material that may not be suitable for all audiences.\n- **Age-Based Restrictions:** We implement safeguards to prevent access to content that isn't age-appropriate.\n\n![Safety First](https://i.imgur.com/2C9MF0l.png)\n\n### Preventing Harmful Content\n\nOur AI moderation tools work around the clock to identify and remove harmful material. If a Shape violates our guidelines, it is automatically disabled until reviewed. We act swiftly on high-risk content, ensuring that our platform remains safe for all users.\n\n## Empowering Users to Keep Our Community Safe\n\nWe believe in giving our community the tools to contribute to platform safety:\n\n- **Simple Reporting:** If you come across concerning content, reporting it is quick and easy.\n- **Fair Review Process:** All reports are reviewed promptly, and users can appeal content decisions.\n- **Community Engagement:** We actively listen to user feedback to improve our safety measures.\n\n## The Technology Behind Our Safety System\n\nWe continuously refine our safety systems to stay ahead of potential risks. Our approach includes:\n\n1. **AI-Powered Moderation:** Cutting-edge AI tools analyze and filter user-generated content.\n2. **Multiple Layers of Protection:** Our moderation system operates at different levels to catch anything that might slip through.\n3. **Regular Platform Audits:** Our entire platform undergoes routine safety checks.\n4. **Swift Action Mechanisms:** High-risk content is flagged and addressed immediately.\n5. **Human Oversight:** While AI helps us scale moderation, our team carefully reviews edge cases.\n\n## Staying Compliant with Industry Standards\n\nAs a responsible AI company, we ensure that Shapes.inc aligns with the policies of major platforms, including:\n\n- **Discord's Community Guidelines and Developer Policy**\n- **App Store and Google Play's Safety Regulations**\n- **Legal Frameworks for Online Safety and AI Ethics**\n\nWe regularly update our platform to remain compliant with these standards.\n\n## Let's Build a Safer Future Together\n\nSafety isn't just our responsibility—it's a collective effort. Here's how you can help:\n\n- Stay informed about our **community guidelines**.\n- Use reporting tools to flag inappropriate content.\n- Share your feedback on how we can enhance safety.\n- Foster a positive and inclusive space for all users.\n\n## Get in Touch\n\nIf you have any safety concerns or suggestions, don't hesitate to reach out:\n\n- **Safety Team:** safety@shapes.inc\n- **General Inquiries:** hi@shapes.inc\n\nAt Shapes.inc, our mission is to create AI-powered interactions that are not just engaging but also safe and trustworthy. We appreciate your support in making this vision a reality!\n\n—\n\n*Shapes.inc Safety Team*",
  },
]

const categories: string[] = ["safety"]

export function getAllCategories(): string[] {
  return categories
}

export function getBlogsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}

export function getBlogPost(category: string, slug: string): BlogPost | null {
  return blogPosts.find((post) => (category ? post.category === category : true) && post.slug === slug) || null
}

