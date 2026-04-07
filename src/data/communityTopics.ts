import { CommunityTopic } from "@/types";

/**
 * Community Topics Data
 * - Learning initiatives for the community
 * - Each topic is an invitation for members to create content
 * - Content supports HTML for creative vibe coding presentations
 */
export const communityTopics: CommunityTopic[] = [
  // Week 1: April 1, 2026 - AI Fundamentals
  {
    id: "1",
    date: "2026-04-01",
    title: "Introduction to Claude API",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Take this topic and create a tutorial for the community!</p>
        </div>
        <h3 class="text-xl font-bold text-pacifico-blue">What to Cover</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          <li>Getting started with Claude API authentication</li>
          <li>Understanding the Messages API structure</li>
          <li>Basic prompt engineering techniques</li>
          <li>Handling streaming responses</li>
          <li>Best practices for token management</li>
        </ul>
        <div class="bg-gray-100 p-4 rounded-lg">
          <p class="text-sm text-gray-600">💡 Include code examples and real use cases from SAP development</p>
        </div>
      </div>
    `,
    tags: ["Claude", "API", "AI", "Initiative"],
  },
  {
    id: "2",
    date: "2026-04-01",
    title: "Prompt Engineering Fundamentals",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Create a comprehensive guide on prompt engineering!</p>
        </div>
        <h3 class="text-xl font-bold text-salsa-red">Topics to Explore</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          <li>Chain of thought prompting</li>
          <li>Few-shot vs zero-shot learning</li>
          <li>System prompts and role assignment</li>
          <li>Context window optimization</li>
          <li>Testing and iterating prompts</li>
        </ul>
        <div class="bg-chontaduro-gold/20 p-4 rounded-lg mt-4">
          <p class="text-sm font-semibold">🎯 Goal: Help the team write better prompts for AI tools</p>
        </div>
      </div>
    `,
    tags: ["Prompt Engineering", "AI", "Best Practices", "Initiative"],
  },
  {
    id: "3",
    date: "2026-04-01",
    title: "Building AI-Powered SAP Extensions",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Show how to integrate AI into SAP applications!</p>
        </div>
        <h3 class="text-xl font-bold text-chontaduro-gold">Project Ideas</h3>
        <div class="grid grid-cols-1 gap-3 mt-3">
          <div class="bg-white border-2 border-gray-200 p-3 rounded-lg">
            <p class="font-semibold text-charcoal">AI Document Processor</p>
            <p class="text-sm text-gray-600">Extract data from invoices using Claude Vision API</p>
          </div>
          <div class="bg-white border-2 border-gray-200 p-3 rounded-lg">
            <p class="font-semibold text-charcoal">Smart Search Assistant</p>
            <p class="text-sm text-gray-600">Natural language queries for SAP data</p>
          </div>
          <div class="bg-white border-2 border-gray-200 p-3 rounded-lg">
            <p class="font-semibold text-charcoal">Code Review Bot</p>
            <p class="text-sm text-gray-600">Automated ABAP/CAP code analysis</p>
          </div>
        </div>
      </div>
    `,
    tags: ["SAP", "AI Integration", "Claude", "Initiative"],
  },
  {
    id: "4",
    date: "2026-04-01",
    title: "LangChain for Enterprise Applications",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Create a tutorial on using LangChain with enterprise systems!</p>
        </div>
        <h3 class="text-xl font-bold text-pacifico-blue">Key Concepts</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          <li>Setting up LangChain with Claude</li>
          <li>Building chains and agents</li>
          <li>Connecting to SAP OData services</li>
          <li>Memory management for conversations</li>
          <li>Error handling and fallbacks</li>
        </ul>
        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mt-4">
          <pre>npm install langchain @anthropic-ai/sdk</pre>
        </div>
      </div>
    `,
    tags: ["LangChain", "Claude", "Enterprise", "Initiative"],
  },
  {
    id: "5",
    date: "2026-04-01",
    title: "Vector Databases & RAG Systems",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Teach the community about Retrieval-Augmented Generation!</p>
        </div>
        <h3 class="text-xl font-bold text-salsa-red">What is RAG?</h3>
        <p class="text-gray-700">Retrieval-Augmented Generation enhances AI responses by fetching relevant context from your own data.</p>
        <h3 class="text-xl font-bold text-chontaduro-gold mt-4">Topics to Cover</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          <li>Vector embeddings explained</li>
          <li>Choosing a vector database (Pinecone, Weaviate, ChromaDB)</li>
          <li>Building a knowledge base from SAP documentation</li>
          <li>Semantic search implementation</li>
          <li>Combining RAG with Claude API</li>
        </ul>
      </div>
    `,
    tags: ["RAG", "Vector DB", "AI", "Claude", "Initiative"],
  },

  // Week 2: April 8, 2026 - AI Tools & Frameworks
  {
    id: "6",
    date: "2026-04-08",
    title: "Claude Computer Use API",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Explore Claude's ability to interact with computers!</p>
        </div>
        <h3 class="text-xl font-bold text-pacifico-blue">Capabilities</h3>
        <p class="text-gray-700">Claude can now control computers, browse the web, and interact with applications.</p>
        <div class="bg-gradient-to-r from-pacifico-blue/10 to-salsa-red/10 p-4 rounded-lg mt-4">
          <p class="font-semibold text-charcoal">🚀 Demo Ideas:</p>
          <ul class="list-disc pl-5 space-y-1 text-gray-700 mt-2">
            <li>Automated SAP GUI testing</li>
            <li>Web scraping SAP support portal</li>
            <li>Automated deployment workflows</li>
          </ul>
        </div>
        <p class="text-sm text-gray-600 mt-4">⚠️ Requires careful security considerations</p>
      </div>
    `,
    tags: ["Claude", "Computer Use", "Automation", "Initiative"],
  },
  {
    id: "7",
    date: "2026-04-08",
    title: "OpenAI GPT-4 vs Claude Sonnet",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Create a comparison guide for choosing the right AI model!</p>
        </div>
        <h3 class="text-xl font-bold text-chontaduro-gold">Comparison Criteria</h3>
        <div class="grid grid-cols-2 gap-4 mt-4">
          <div class="bg-white border-2 border-pacifico-blue p-4 rounded-lg">
            <p class="font-semibold text-pacifico-blue mb-2">Claude Sonnet</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>✓ Longer context window</li>
              <li>✓ Better instruction following</li>
              <li>✓ Extended thinking mode</li>
            </ul>
          </div>
          <div class="bg-white border-2 border-salsa-red p-4 rounded-lg">
            <p class="font-semibold text-salsa-red mb-2">GPT-4</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>✓ Strong general knowledge</li>
              <li>✓ DALL-E integration</li>
              <li>✓ Plugin ecosystem</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    tags: ["Claude", "GPT-4", "Comparison", "AI", "Initiative"],
  },
  {
    id: "8",
    date: "2026-04-08",
    title: "Building AI Agents with Anthropic SDK",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Teach how to build autonomous AI agents!</p>
        </div>
        <h3 class="text-xl font-bold text-salsa-red">Agent Architecture</h3>
        <p class="text-gray-700">Learn to create agents that can plan, execute tasks, and make decisions.</p>
        <div class="bg-gray-100 p-4 rounded-lg mt-4">
          <p class="font-semibold text-charcoal mb-2">Components to Cover:</p>
          <ul class="list-disc pl-5 space-y-1 text-gray-700 text-sm">
            <li>Tool calling and function execution</li>
            <li>Multi-step reasoning loops</li>
            <li>Error recovery strategies</li>
            <li>Agent memory and context management</li>
          </ul>
        </div>
        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-xs mt-4">
          <pre>const agent = new Agent({
  model: "claude-sonnet-4",
  tools: [searchTool, sapTool]
});</pre>
        </div>
      </div>
    `,
    tags: ["AI Agents", "Claude", "Anthropic SDK", "Initiative"],
  },
  {
    id: "9",
    date: "2026-04-08",
    title: "AI-Assisted Code Generation",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Show how to use AI for generating ABAP, CAP, and UI5 code!</p>
        </div>
        <h3 class="text-xl font-bold text-pacifico-blue">Practical Applications</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          <li>Generate CDS views from requirements</li>
          <li>Create ABAP unit tests automatically</li>
          <li>Build Fiori UI5 screens from mockups</li>
          <li>Generate CAP service definitions</li>
        </ul>
        <div class="bg-chontaduro-gold/20 p-4 rounded-lg mt-4">
          <p class="text-sm font-semibold">💡 Include prompt templates and best practices</p>
        </div>
      </div>
    `,
    tags: ["Code Generation", "SAP", "AI", "Claude", "Initiative"],
  },
  {
    id: "10",
    date: "2026-04-08",
    title: "Fine-tuning vs Prompt Engineering",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Explain when to fine-tune vs when to use better prompts!</p>
        </div>
        <h3 class="text-xl font-bold text-chontaduro-gold">Decision Framework</h3>
        <p class="text-gray-700">Help the team understand which approach fits their use case.</p>
        <div class="grid grid-cols-1 gap-3 mt-3">
          <div class="bg-green-50 border-l-4 border-green-500 p-3">
            <p class="font-semibold text-green-700">Use Prompt Engineering When:</p>
            <p class="text-sm text-gray-600">Task is general, you need flexibility, or quick iteration</p>
          </div>
          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-3">
            <p class="font-semibold text-yellow-700">Use Fine-tuning When:</p>
            <p class="text-sm text-gray-600">Highly specialized domain, consistent format, or large scale</p>
          </div>
        </div>
      </div>
    `,
    tags: ["Fine-tuning", "Prompt Engineering", "AI", "Initiative"],
  },

  // Week 3: April 15, 2026 - Advanced AI Concepts
  {
    id: "11",
    date: "2026-04-15",
    title: "Multi-Modal AI with Claude",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Explore Claude's vision capabilities!</p>
        </div>
        <h3 class="text-xl font-bold text-pacifico-blue">Vision API Use Cases</h3>
        <div class="space-y-3">
          <div class="bg-white border-2 border-gray-200 p-4 rounded-lg">
            <p class="font-semibold text-charcoal">📄 Document Analysis</p>
            <p class="text-sm text-gray-600">Extract data from scanned invoices, receipts, forms</p>
          </div>
          <div class="bg-white border-2 border-gray-200 p-4 rounded-lg">
            <p class="font-semibold text-charcoal">🎨 UI/UX Analysis</p>
            <p class="text-sm text-gray-600">Analyze mockups and generate component code</p>
          </div>
          <div class="bg-white border-2 border-gray-200 p-4 rounded-lg">
            <p class="font-semibold text-charcoal">📊 Chart Understanding</p>
            <p class="text-sm text-gray-600">Convert dashboard screenshots to insights</p>
          </div>
        </div>
      </div>
    `,
    tags: ["Claude", "Vision API", "Multi-Modal", "AI", "Initiative"],
  },
  {
    id: "12",
    date: "2026-04-15",
    title: "AI Safety & Responsible AI Development",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Create guidelines for responsible AI implementation!</p>
        </div>
        <h3 class="text-xl font-bold text-salsa-red">Critical Topics</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          <li>Data privacy and GDPR compliance</li>
          <li>Bias detection and mitigation</li>
          <li>Transparency and explainability</li>
          <li>Security considerations for AI systems</li>
          <li>Monitoring AI system behavior</li>
        </ul>
        <div class="bg-red-50 border-l-4 border-salsa-red p-4 mt-4">
          <p class="font-semibold text-salsa-red">⚠️ Important</p>
          <p class="text-sm text-gray-700">Include real examples from enterprise AI deployments</p>
        </div>
      </div>
    `,
    tags: ["AI Safety", "Ethics", "Compliance", "Best Practices", "Initiative"],
  },
  {
    id: "13",
    date: "2026-04-15",
    title: "Building AI-Powered Chatbots",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Build an enterprise chatbot with Claude!</p>
        </div>
        <h3 class="text-xl font-bold text-chontaduro-gold">Architecture Components</h3>
        <div class="bg-gray-100 p-4 rounded-lg">
          <ul class="space-y-2 text-sm text-gray-700">
            <li>🔹 Frontend: React + WebSockets</li>
            <li>🔹 Backend: Node.js + Claude API</li>
            <li>🔹 Memory: Redis for conversation history</li>
            <li>🔹 Knowledge: Vector DB for company data</li>
          </ul>
        </div>
        <h3 class="text-xl font-bold text-pacifico-blue mt-4">Features to Implement</h3>
        <ul class="list-disc pl-5 space-y-1 text-gray-700">
          <li>Context-aware responses</li>
          <li>Intent classification</li>
          <li>Escalation to human agents</li>
          <li>Analytics dashboard</li>
        </ul>
      </div>
    `,
    tags: ["Chatbot", "Claude", "RAG", "Full-Stack", "Initiative"],
  },
  {
    id: "14",
    date: "2026-04-15",
    title: "AI Model Evaluation & Testing",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Learn how to evaluate AI model performance!</p>
        </div>
        <h3 class="text-xl font-bold text-pacifico-blue">Evaluation Metrics</h3>
        <div class="grid grid-cols-2 gap-4 mt-4">
          <div class="bg-white border-2 border-pacifico-blue p-4 rounded-lg">
            <p class="font-semibold mb-2">Accuracy Metrics</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Precision & Recall</li>
              <li>• F1 Score</li>
              <li>• Confusion Matrix</li>
            </ul>
          </div>
          <div class="bg-white border-2 border-chontaduro-gold p-4 rounded-lg">
            <p class="font-semibold mb-2">Quality Metrics</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Response relevance</li>
              <li>• Factual accuracy</li>
              <li>• Tone consistency</li>
            </ul>
          </div>
        </div>
        <p class="text-sm text-gray-600 mt-4">💡 Include A/B testing strategies</p>
      </div>
    `,
    tags: ["Testing", "Evaluation", "AI", "Quality Assurance", "Initiative"],
  },
  {
    id: "15",
    date: "2026-04-15",
    title: "Cost Optimization for AI APIs",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Teach strategies to reduce AI API costs!</p>
        </div>
        <h3 class="text-xl font-bold text-salsa-red">Cost Reduction Techniques</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          <li>Smart caching strategies</li>
          <li>Prompt compression methods</li>
          <li>Using smaller models when appropriate</li>
          <li>Batch processing for non-realtime tasks</li>
          <li>Response streaming for better UX</li>
        </ul>
        <div class="bg-chontaduro-gold/20 p-4 rounded-lg mt-4">
          <p class="font-semibold">💰 ROI Calculator</p>
          <p class="text-sm text-gray-700">Build a tool to estimate costs vs traditional solutions</p>
        </div>
      </div>
    `,
    tags: ["Cost Optimization", "AI", "Claude", "Best Practices", "Initiative"],
  },

  // Week 4: April 22, 2026 - AI in Production
  {
    id: "16",
    date: "2026-04-22",
    title: "Deploying AI Apps to Production",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Guide for deploying AI applications to production!</p>
        </div>
        <h3 class="text-xl font-bold text-pacifico-blue">Deployment Checklist</h3>
        <div class="space-y-2">
          <div class="flex items-start gap-3">
            <span class="text-chontaduro-gold font-bold">☐</span>
            <p class="text-gray-700">Rate limiting and throttling</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-chontaduro-gold font-bold">☐</span>
            <p class="text-gray-700">Error handling and retries</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-chontaduro-gold font-bold">☐</span>
            <p class="text-gray-700">Monitoring and alerting</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-chontaduro-gold font-bold">☐</span>
            <p class="text-gray-700">API key rotation strategy</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-chontaduro-gold font-bold">☐</span>
            <p class="text-gray-700">Load balancing and scaling</p>
          </div>
        </div>
      </div>
    `,
    tags: ["Production", "DevOps", "AI", "Deployment", "Initiative"],
  },
  {
    id: "17",
    date: "2026-04-22",
    title: "AI Observability & Monitoring",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Build monitoring dashboards for AI systems!</p>
        </div>
        <h3 class="text-xl font-bold text-chontaduro-gold">Key Metrics to Track</h3>
        <div class="grid grid-cols-1 gap-3 mt-3">
          <div class="bg-white border-l-4 border-pacifico-blue p-3">
            <p class="font-semibold text-charcoal">Performance Metrics</p>
            <p class="text-sm text-gray-600">Latency, throughput, token usage, cost per request</p>
          </div>
          <div class="bg-white border-l-4 border-salsa-red p-3">
            <p class="font-semibold text-charcoal">Quality Metrics</p>
            <p class="text-sm text-gray-600">User satisfaction, task completion rate, error rate</p>
          </div>
          <div class="bg-white border-l-4 border-chontaduro-gold p-3">
            <p class="font-semibold text-charcoal">Business Metrics</p>
            <p class="text-sm text-gray-600">Time saved, cost reduction, user adoption</p>
          </div>
        </div>
      </div>
    `,
    tags: ["Monitoring", "Observability", "AI", "Production", "Initiative"],
  },
  {
    id: "18",
    date: "2026-04-22",
    title: "Building AI Workflows with n8n",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Create no-code AI workflows!</p>
        </div>
        <h3 class="text-xl font-bold text-salsa-red">Workflow Examples</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          <li>Auto-respond to support tickets using Claude</li>
          <li>Process documents and update SAP</li>
          <li>Social media monitoring and alerts</li>
          <li>Automated report generation</li>
          <li>Email classification and routing</li>
        </ul>
        <div class="bg-gray-100 p-4 rounded-lg mt-4">
          <p class="text-sm font-semibold text-charcoal mb-2">🔧 Integration Points:</p>
          <p class="text-sm text-gray-600">Claude API + SAP OData + Slack + Email + Webhooks</p>
        </div>
      </div>
    `,
    tags: ["n8n", "Automation", "Workflows", "Claude", "Initiative"],
  },
  {
    id: "19",
    date: "2026-04-22",
    title: "AI-Powered Data Analysis",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Use AI to analyze and visualize SAP data!</p>
        </div>
        <h3 class="text-xl font-bold text-pacifico-blue">Capabilities</h3>
        <p class="text-gray-700">Connect Claude to your SAP data and ask natural language questions.</p>
        <div class="bg-gradient-to-r from-pacifico-blue/10 to-chontaduro-gold/10 p-4 rounded-lg mt-4">
          <p class="font-semibold text-charcoal mb-2">Example Queries:</p>
          <ul class="text-sm text-gray-700 space-y-1">
            <li>• "Show me sales trends for Q1 by region"</li>
            <li>• "Which products have declining performance?"</li>
            <li>• "Generate a summary of customer complaints"</li>
          </ul>
        </div>
        <p class="text-sm text-gray-600 mt-4">💡 Include code for connecting to SAP OData</p>
      </div>
    `,
    tags: ["Data Analysis", "Claude", "SAP", "Analytics", "Initiative"],
  },
  {
    id: "20",
    date: "2026-04-22",
    title: "AI for Code Documentation",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Automate documentation generation with AI!</p>
        </div>
        <h3 class="text-xl font-bold text-chontaduro-gold">What to Document</h3>
        <div class="grid grid-cols-2 gap-4 mt-4">
          <div class="bg-white border-2 border-gray-200 p-4 rounded-lg">
            <p class="font-semibold text-charcoal mb-2">Code Level</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Function descriptions</li>
              <li>• Parameter explanations</li>
              <li>• Usage examples</li>
            </ul>
          </div>
          <div class="bg-white border-2 border-gray-200 p-4 rounded-lg">
            <p class="font-semibold text-charcoal mb-2">Project Level</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Architecture diagrams</li>
              <li>• API documentation</li>
              <li>• Setup guides</li>
            </ul>
          </div>
        </div>
        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-xs mt-4">
          <pre>claude analyze codebase --output docs/</pre>
        </div>
      </div>
    `,
    tags: ["Documentation", "Claude", "Automation", "Best Practices", "Initiative"],
  },

  // Week 5: April 29, 2026 - Advanced Topics
  {
    id: "21",
    date: "2026-04-29",
    title: "Building Custom MCP Servers",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Create Model Context Protocol servers for Claude!</p>
        </div>
        <h3 class="text-xl font-bold text-pacifico-blue">What is MCP?</h3>
        <p class="text-gray-700">MCP allows Claude to connect to your tools, data sources, and APIs.</p>
        <h3 class="text-xl font-bold text-salsa-red mt-4">Server Examples</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          <li>SAP system connector</li>
          <li>Company knowledge base</li>
          <li>Development tools integration</li>
          <li>Database query interface</li>
        </ul>
        <div class="bg-gray-100 p-4 rounded-lg mt-4">
          <p class="text-sm text-gray-600">📖 Include step-by-step setup guide</p>
        </div>
      </div>
    `,
    tags: ["MCP", "Claude", "Integration", "Advanced", "Initiative"],
  },
  {
    id: "22",
    date: "2026-04-29",
    title: "AI-Assisted Testing & QA",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Use AI to generate and execute tests!</p>
        </div>
        <h3 class="text-xl font-bold text-chontaduro-gold">Testing Scenarios</h3>
        <div class="space-y-3">
          <div class="bg-white border-2 border-gray-200 p-3 rounded-lg">
            <p class="font-semibold text-charcoal">Unit Tests</p>
            <p class="text-sm text-gray-600">Generate test cases from function signatures</p>
          </div>
          <div class="bg-white border-2 border-gray-200 p-3 rounded-lg">
            <p class="font-semibold text-charcoal">Integration Tests</p>
            <p class="text-sm text-gray-600">Create API test scenarios</p>
          </div>
          <div class="bg-white border-2 border-gray-200 p-3 rounded-lg">
            <p class="font-semibold text-charcoal">E2E Tests</p>
            <p class="text-sm text-gray-600">Generate Playwright/Cypress tests from user stories</p>
          </div>
        </div>
      </div>
    `,
    tags: ["Testing", "QA", "AI", "Automation", "Initiative"],
  },
  {
    id: "23",
    date: "2026-04-29",
    title: "Semantic Search Implementation",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Build semantic search for SAP documentation!</p>
        </div>
        <h3 class="text-xl font-bold text-pacifico-blue">Architecture</h3>
        <div class="bg-gray-100 p-4 rounded-lg">
          <p class="font-semibold text-charcoal mb-3">Pipeline Steps:</p>
          <div class="space-y-2 text-sm text-gray-700">
            <div class="flex items-center gap-3">
              <span class="bg-pacifico-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">1</span>
              <span>Extract text from PDFs/docs</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="bg-pacifico-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">2</span>
              <span>Chunk into smaller segments</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="bg-pacifico-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">3</span>
              <span>Generate embeddings</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="bg-pacifico-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">4</span>
              <span>Store in vector database</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="bg-pacifico-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">5</span>
              <span>Query with natural language</span>
            </div>
          </div>
        </div>
      </div>
    `,
    tags: ["Semantic Search", "Embeddings", "RAG", "Claude", "Initiative"],
  },
  {
    id: "24",
    date: "2026-04-29",
    title: "AI-Powered Code Review",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Build automated code review with Claude!</p>
        </div>
        <h3 class="text-xl font-bold text-salsa-red">Review Checklist</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          <li>Code quality and best practices</li>
          <li>Security vulnerabilities</li>
          <li>Performance bottlenecks</li>
          <li>SAP-specific patterns</li>
          <li>Documentation completeness</li>
        </ul>
        <div class="bg-chontaduro-gold/20 p-4 rounded-lg mt-4">
          <p class="font-semibold">🎯 Integration</p>
          <p class="text-sm text-gray-700">Connect to GitHub PRs or GitLab merge requests</p>
        </div>
        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-xs mt-4">
          <pre>gh pr review 123 --with-ai</pre>
        </div>
      </div>
    `,
    tags: ["Code Review", "Claude", "GitHub", "Quality", "Initiative"],
  },
  {
    id: "25",
    date: "2026-04-29",
    title: "Future of AI in Enterprise SAP",
    author: "Initiative",
    content: `
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-pacifico-blue p-4">
          <p class="font-semibold text-pacifico-blue">📚 Learning Initiative</p>
          <p class="text-gray-700">Explore emerging AI trends in SAP ecosystem!</p>
        </div>
        <h3 class="text-xl font-bold text-chontaduro-gold">Emerging Trends</h3>
        <div class="space-y-3 mt-3">
          <div class="bg-gradient-to-r from-pacifico-blue/10 to-white p-4 rounded-lg">
            <p class="font-semibold text-charcoal">🤖 SAP Joule</p>
            <p class="text-sm text-gray-600">SAP's native AI assistant across all products</p>
          </div>
          <div class="bg-gradient-to-r from-salsa-red/10 to-white p-4 rounded-lg">
            <p class="font-semibold text-charcoal">🔮 Predictive Analytics</p>
            <p class="text-sm text-gray-600">AI-driven business insights and forecasting</p>
          </div>
          <div class="bg-gradient-to-r from-chontaduro-gold/10 to-white p-4 rounded-lg">
            <p class="font-semibold text-charcoal">⚡ Autonomous Processes</p>
            <p class="text-sm text-gray-600">Self-optimizing business workflows</p>
          </div>
        </div>
        <p class="text-sm text-gray-600 mt-4">💡 Include hands-on demos and predictions</p>
      </div>
    `,
    tags: ["Future", "SAP", "AI", "Trends", "Innovation", "Initiative"],
  },
];
