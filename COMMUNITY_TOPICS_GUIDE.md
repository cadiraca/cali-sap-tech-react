# Community Topics Guide

This guide explains how to propose and add new learning topics to the Cali SAP Tech website. Community Topics are AI-focused learning initiatives where cell members can create educational content, tutorials, and creative presentations using HTML vibe coding.

## 📍 Where to Add Topics

All community topics are stored in a single file:

```
src/data/communityTopics.ts
```

## 📝 How to Add a New Topic

### Step 1: Generate a Unique ID

Use the next available sequential number. Check the existing topics and increment from the highest ID.

### Step 2: Set the Date

Use ISO format: `YYYY-MM-DD` (e.g., `2026-04-15`)

This date will determine which calendar day displays your topic. Consider grouping related topics on Wednesdays for weekly learning sessions.

### Step 3: Create Your Topic Entry

Add your topic to the `communityTopics` array in `src/data/communityTopics.ts`:

```typescript
{
  id: "26",
  date: "2026-05-06",
  title: "Your Topic Title",
  author: "Your Name or 'Initiative'",
  content: `
    <div class="space-y-4">
      <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
        <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
        <p class="text-gray-700">Description of what this learning initiative covers!</p>
      </div>
      <h3 class="text-xl font-bold text-pacifico-blue">What to Cover</h3>
      <ul class="list-disc pl-5 space-y-2 text-gray-700">
        <li>Key concept 1</li>
        <li>Key concept 2</li>
        <li>Key concept 3</li>
      </ul>
    </div>
  `,
  tags: ["AI", "Claude", "Tutorial"],
}
```

## 🎨 HTML Vibe Coding

The `content` field accepts HTML, allowing for creative presentations. Use Tailwind CSS classes for styling.

### Available Theme Colors

Use these color classes to maintain brand consistency:

- `text-pacifico-blue` / `bg-pacifico-blue` - Pacific Blue (#0ea5e9)
- `text-salsa-red` / `bg-salsa-red` - Salsa Red (#ef4444)
- `text-chontaduro-gold` / `bg-chontaduro-gold` - Chontaduro Gold (#f59e0b)
- `text-charcoal` / `bg-charcoal` - Charcoal (dark gray)
- `text-warm-white` / `bg-warm-white` - Warm White (off-white)

### Common Patterns

#### Basic Text Content
```html
<div class="space-y-4">
  <p class="text-gray-700">Your paragraph text here.</p>
  <ul class="list-disc pl-5 space-y-2">
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>
</div>
```

#### Highlighted Box
```html
<div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
  <p class="font-semibold">Important Note:</p>
  <p>Your important message here</p>
</div>
```

#### Code Block
```html
<div class="bg-gray-100 p-4 rounded-lg">
  <code class="text-sm">your code here</code>
</div>
```

#### Code Block (Dark Theme)
```html
<div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
  <pre>your multi-line
code here</pre>
</div>
```

#### Colored Headers
```html
<h3 class="text-xl font-bold text-pacifico-blue">Blue Header</h3>
<h3 class="text-xl font-bold text-salsa-red">Red Header</h3>
<h3 class="text-xl font-bold text-chontaduro-gold">Gold Header</h3>
```

#### Grid Layout
```html
<div class="grid grid-cols-2 gap-4">
  <div class="bg-pacifico-blue text-white p-4 rounded-lg">
    Column 1
  </div>
  <div class="bg-salsa-red text-white p-4 rounded-lg">
    Column 2
  </div>
</div>
```

## 🏷️ Tags

Tags are optional but recommended. Use clear, concise labels:

```typescript
tags: ["SAP", "Development", "Tutorial"]
```

Tags will display as gold badges in the topic card and detail modal. For AI-focused topics, consider using tags like: "Claude", "AI", "RAG", "Prompt Engineering", "GPT-4", "LangChain", etc.

## ✅ Complete Example

```typescript
{
  id: "26",
  date: "2026-05-06",
  title: "Building AI Chatbots with Claude",
  author: "Initiative",
  content: `
    <div class="space-y-4">
      <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
        <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
        <p class="text-gray-700">Create an enterprise chatbot using Claude API!</p>
      </div>

      <h3 class="text-xl font-bold text-pacifico-blue">What You'll Learn</h3>
      <ul class="list-disc pl-5 space-y-2 text-gray-700">
        <li>Setting up Claude API with conversation memory</li>
        <li>Building a React frontend with streaming responses</li>
        <li>Implementing RAG for company knowledge</li>
        <li>Adding intent classification and routing</li>
      </ul>

      <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mt-4">
        <pre>npm install @anthropic-ai/sdk</pre>
      </div>

      <div class="bg-chontaduro-gold/20 p-4 rounded-lg mt-4">
        <p class="text-sm font-semibold">🎯 Goal: Deploy a working chatbot to production</p>
      </div>
    </div>
  `,
  tags: ["Claude", "Chatbot", "AI", "Full-Stack"],
}
```

## 🤖 Using AI to Add Topics

### Prompt Template for Claude/AI Assistants

```
Following the conventions in COMMUNITY_TOPICS_GUIDE.md, add a new learning topic to src/data/communityTopics.ts with the following details:

- Date: [YYYY-MM-DD]
- Title: [Your topic title]
- Author: Initiative
- Content: [Describe the learning initiative - what should be covered, key concepts, learning objectives]
- Tags: [List relevant AI/tech tags]

Make the HTML content creative with the learning initiative box, use Tailwind CSS classes with our theme colors.
```

### Example AI Prompt

```
Following the conventions in COMMUNITY_TOPICS_GUIDE.md, add a new learning topic to src/data/communityTopics.ts with the following details:

- Date: 2026-05-13
- Title: Implementing Semantic Search with Vector Databases
- Author: Initiative
- Content: Create a tutorial covering vector embeddings, choosing a vector database (Pinecone vs ChromaDB), building a search system for SAP documentation, and integrating with Claude API for enhanced responses
- Tags: Vector DB, RAG, Semantic Search, Claude, AI

Make the HTML content creative with the learning initiative box, use Tailwind CSS classes with our theme colors.
```

## 📋 Checklist Before Adding

- [ ] Unique ID assigned (check existing IDs)
- [ ] Date in ISO format (YYYY-MM-DD)
- [ ] Title is clear and descriptive
- [ ] Author set to "Initiative" or your name
- [ ] Includes "Learning Initiative" highlighted box
- [ ] HTML content uses theme colors
- [ ] Content is wrapped in `<div class="space-y-4">`
- [ ] No syntax errors (check commas, quotes, backticks)
- [ ] Tags are relevant and AI-focused
- [ ] Added comma after your entry (unless it's the last one)

## 🚀 Testing Your Topic

After adding your topic:

1. Save the file
2. The dev server will auto-reload
3. Navigate to the Learning Topics section
4. Click on the date you specified
5. Click on your topic card to open the detail modal
6. Verify your topic displays correctly with all content and tags

## 🎨 Design Best Practices

1. **Keep it readable**: Use adequate spacing with `space-y-4` classes
2. **Use hierarchy**: Larger headers for main topics, smaller for subsections
3. **Add visual interest**: Mix text, lists, code blocks, and colored sections
4. **Be concise**: Focus on key learnings and actionable insights
5. **Test responsiveness**: Your HTML should work on mobile and desktop

## 💡 Topic Ideas by Category

### AI Fundamentals
- Introduction to Large Language Models
- Understanding Tokens and Context Windows
- Prompt Engineering Best Practices

### Claude-Specific
- Claude API Deep Dive
- Computer Use API Applications
- Building MCP Servers for Claude

### Enterprise AI
- AI Security and Compliance
- Cost Optimization Strategies
- AI Observability and Monitoring

### RAG & Vector Databases
- Building Knowledge Bases
- Semantic Search Implementation
- Choosing the Right Vector Database

### Development
- AI-Assisted Code Generation
- Automated Testing with AI
- Building AI Agents

## 📖 Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [WORKFLOW.md](./WORKFLOW.md) - Project development guidelines
- [Anthropic API Documentation](https://docs.anthropic.com/)
- See existing topics in `src/data/communityTopics.ts` for inspiration

---

**Need Help?** Ask in the #cali-sap-tech-dev Slack channel or reach out to the development team.
