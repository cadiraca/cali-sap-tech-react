"use client";

import Modal from "@/components/ui/Modal";
import Badge from "@/components/ui/Badge";
import { CommunityTopic } from "@/types";

interface TopicDetailModalProps {
  open: boolean;
  onClose: () => void;
  topic: CommunityTopic | null;
}

export default function TopicDetailModal({ open, onClose, topic }: TopicDetailModalProps) {
  if (!topic) return null;

  return (
    <Modal open={open} onClose={onClose} title={topic.title}>
      <div className="space-y-6">
        {/* Topic Header */}
        <div className="flex items-center justify-between pb-4 border-b">
          <div>
            <p className="text-sm text-gray-600 font-inter">
              Proposed by: <span className="font-semibold text-charcoal">{topic.author}</span>
            </p>
            <p className="text-sm text-gray-600 font-inter mt-1">
              Date: <span className="font-semibold text-charcoal">
                {new Date(topic.date + "T00:00:00").toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                })}
              </span>
            </p>
          </div>
        </div>

        {/* Topic Content */}
        <div
          className="prose prose-sm max-w-none font-inter"
          dangerouslySetInnerHTML={{ __html: topic.content }}
        />

        {/* Tags */}
        {topic.tags && topic.tags.length > 0 && (
          <div className="pt-4 border-t">
            <p className="text-sm font-semibold text-charcoal mb-3 font-inter">Related Topics:</p>
            <div className="flex flex-wrap gap-2">
              {topic.tags.map((tag) => (
                <Badge key={tag} variant="gold">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-pacifico-blue/10 to-chontaduro-gold/10 p-6 rounded-lg border-l-4 border-pacifico-blue">
          <h3 className="font-bebas text-xl text-charcoal mb-2">Want to contribute?</h3>
          <p className="text-sm text-gray-700 font-inter mb-4">
            Take this topic and create educational content for the community! Share your learnings, build demos,
            or write tutorials about this subject.
          </p>
          <div className="flex gap-3">
            <a
              href="https://github.com/cadiraca/cali-sap-tech-react/blob/main/COMMUNITY_TOPICS_GUIDE.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pacifico-blue text-white font-semibold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors text-sm font-inter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              Read Guide
            </a>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 bg-gray-200 text-charcoal font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors text-sm font-inter"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
