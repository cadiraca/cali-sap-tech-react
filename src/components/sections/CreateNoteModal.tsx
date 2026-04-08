"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";
import Badge from "@/components/ui/Badge";

interface CreateNoteModalProps {
  open: boolean;
  onClose: () => void;
  selectedDate?: string;
}

export default function CreateNoteModal({ open, onClose, selectedDate }: CreateNoteModalProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState(selectedDate || new Date().toISOString().split("T")[0]);
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateCode = () => {
    const tagsArray = tags
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const tagsString = tagsArray.length > 0
      ? `  tags: [${tagsArray.map((t) => `"${t}"`).join(", ")}],`
      : "";

    return `{
  id: "NEW_ID", // Replace with next available ID
  date: "${date}",
  title: "${title}",
  author: "${author}",
  content: \`
${content}
  \`,${tagsString ? '\n' + tagsString : ''}
},`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generateCode());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleClose = () => {
    setTitle("");
    setAuthor("");
    setContent("");
    setTags("");
    setShowPreview(false);
    setCopied(false);
    onClose();
  };

  const tagsArray = tags
    .split(",")
    .map((t) => t.trim())
    .filter((t) => t.length > 0);

  return (
    <Modal open={open} onClose={handleClose} title="Propose Learning Topic">
      <div className="space-y-6">
        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2 font-inter">
              Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Getting Started with SAP CAP"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pacifico-blue focus:border-transparent font-inter"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2 font-inter">
              Author *
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pacifico-blue focus:border-transparent font-inter"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2 font-inter">
              Date *
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pacifico-blue focus:border-transparent font-inter"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2 font-inter">
              Content (HTML) *
            </label>
            <div className="flex gap-2 mb-2">
              <button
                type="button"
                onClick={() => setShowPreview(false)}
                className={`px-3 py-1 rounded-lg text-sm font-inter transition-colors ${
                  !showPreview
                    ? "bg-pacifico-blue text-white"
                    : "bg-gray-100 text-charcoal hover:bg-gray-200"
                }`}
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => setShowPreview(true)}
                className={`px-3 py-1 rounded-lg text-sm font-inter transition-colors ${
                  showPreview
                    ? "bg-pacifico-blue text-white"
                    : "bg-gray-100 text-charcoal hover:bg-gray-200"
                }`}
              >
                Preview
              </button>
            </div>
            {!showPreview ? (
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={`    <div class="space-y-4">
      <h3 class="text-xl font-bold text-pacifico-blue">Section Title</h3>
      <p class="text-gray-700">Your content here...</p>
    </div>`}
                rows={12}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pacifico-blue focus:border-transparent font-mono text-sm"
              />
            ) : (
              <div
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 min-h-[300px] prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
            <p className="text-xs text-gray-500 mt-1 font-inter">
              Use Tailwind CSS classes. See{" "}
              <a
                href="https://github.com/cadiraca/cali-sap-tech-react/blob/main/COMMUNITY_TOPICS_GUIDE.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pacifico-blue hover:underline"
              >
                guide
              </a>{" "}
              for examples.
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2 font-inter">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="e.g., SAP, CAP, Development"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pacifico-blue focus:border-transparent font-inter"
            />
            {tagsArray.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {tagsArray.map((tag, idx) => (
                  <Badge key={idx} variant="gold">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Generated Code */}
        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-semibold text-charcoal font-inter">
              Generated Code
            </label>
            <button
              onClick={handleCopy}
              disabled={!title || !author || !content}
              className={`px-3 py-1 rounded-lg text-sm font-inter flex items-center gap-2 transition-colors ${
                copied
                  ? "bg-green-500 text-white"
                  : "bg-chontaduro-gold text-charcoal hover:bg-opacity-90"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {copied ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                  </svg>
                  Copy
                </>
              )}
            </button>
          </div>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs font-mono">
            {generateCode()}
          </pre>
          <div className="mt-4 bg-blue-50 border-l-4 border-pacifico-blue p-4">
            <p className="font-semibold text-sm text-charcoal font-inter mb-2">Next Steps:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700 font-inter">
              <li>Copy the generated code above</li>
              <li>
                Open <code className="bg-gray-200 px-2 py-0.5 rounded text-xs">src/data/communityTopics.ts</code>
              </li>
              <li>Find the next available ID number</li>
              <li>Replace <code className="bg-gray-200 px-2 py-0.5 rounded text-xs">NEW_ID</code> with that number</li>
              <li>Add your topic to the <code className="bg-gray-200 px-2 py-0.5 rounded text-xs">communityTopics</code> array</li>
              <li>Save the file and your topic will appear on the calendar!</li>
            </ol>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4 border-t">
          <button
            onClick={handleClose}
            className="px-4 py-2 rounded-lg bg-gray-200 text-charcoal hover:bg-gray-300 transition-colors font-inter"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}
