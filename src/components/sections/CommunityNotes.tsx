"use client";

import { useState, useMemo } from "react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import CreateNoteModal from "./CreateNoteModal";
import TopicDetailModal from "./TopicDetailModal";
import { communityTopics } from "@/data/communityTopics";
import { CommunityTopic } from "@/types";

type CalendarDay = {
  date: Date;
  isCurrentMonth: boolean;
  hasTopics: boolean;
};

// Helper function to format date to ISO string
const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export default function CommunityNotes() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<CommunityTopic | null>(null);

  // Get topics for selected date
  const topicsForSelectedDate = useMemo(() => {
    if (!selectedDate) return [];
    return communityTopics.filter((topic) => topic.date === selectedDate);
  }, [selectedDate]);

  // Get dates that have topics
  const datesWithTopics = useMemo(() => {
    return new Set(communityTopics.map((topic) => topic.date));
  }, []);

  // Generate calendar days
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    // First day of the month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    // Days from previous month to fill the grid
    const startingDayOfWeek = firstDay.getDay();
    const days: CalendarDay[] = [];

    // Add days from previous month
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const date = new Date(year, month, -i);
      days.push({
        date,
        isCurrentMonth: false,
        hasTopics: datesWithTopics.has(formatDate(date)),
      });
    }

    // Add days from current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(year, month, i);
      days.push({
        date,
        isCurrentMonth: true,
        hasTopics: datesWithTopics.has(formatDate(date)),
      });
    }

    // Add days from next month to complete the grid
    const remainingDays = 42 - days.length; // 6 rows x 7 days
    for (let i = 1; i <= remainingDays; i++) {
      const date = new Date(year, month + 1, i);
      days.push({
        date,
        isCurrentMonth: false,
        hasTopics: datesWithTopics.has(formatDate(date)),
      });
    }

    return days;
  }, [currentMonth, datesWithTopics]);

  const monthName = currentMonth.toLocaleString("en-US", { month: "long", year: "numeric" });

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDayClick = (day: CalendarDay) => {
    const dateStr = formatDate(day.date);
    setSelectedDate(dateStr);
  };

  return (
    <section id="community-notes" className="py-20 bg-gradient-to-br from-warm-white to-gray-50">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
          <div className="text-center md:text-left flex-1">
            <h2 className="text-4xl md:text-5xl font-bebas text-charcoal">
              Learning Topics
            </h2>
            <p className="text-lg text-charcoal mt-2 font-inter">
              AI-focused learning initiatives for the community
            </p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="mt-4 md:mt-0 bg-pacifico-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 font-inter flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Propose Topic
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          {/* Calendar */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={previousMonth}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Previous month"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h3 className="text-2xl font-bebas text-charcoal">{monthName}</h3>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Next month"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day, idx) => {
                const dateStr = formatDate(day.date);
                const isSelected = selectedDate === dateStr;
                const isToday = dateStr === formatDate(new Date());

                return (
                  <button
                    key={idx}
                    onClick={() => handleDayClick(day)}
                    className={`
                      relative aspect-square p-2 rounded-lg text-sm font-inter
                      transition-all duration-200
                      ${!day.isCurrentMonth ? "text-gray-400" : "text-charcoal"}
                      ${isSelected ? "bg-pacifico-blue text-white font-bold scale-105" : "hover:bg-gray-100"}
                      ${isToday && !isSelected ? "ring-2 ring-chontaduro-gold" : ""}
                      ${day.hasNotes ? "font-semibold" : ""}
                    `}
                  >
                    {day.date.getDate()}
                    {day.hasTopics && !isSelected && (
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-salsa-red rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </Card>

          {/* Topics Display */}
          <div className="space-y-4">
            {selectedDate ? (
              topicsForSelectedDate.length > 0 ? (
                <>
                  <h3 className="text-2xl font-bebas text-charcoal mb-4">
                    Topics for {new Date(selectedDate + "T00:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </h3>
                  <div className="space-y-3">
                    {topicsForSelectedDate.map((topic) => (
                      <button
                        key={topic.id}
                        onClick={() => setSelectedTopic(topic)}
                        className="w-full text-left transform transition-all duration-200 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-pacifico-blue rounded-lg"
                      >
                        <Card className="p-5 hover:shadow-lg">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="text-lg font-bebas text-pacifico-blue mb-1">{topic.title}</h4>
                              <p className="text-sm text-gray-600 font-inter">Initiative by {topic.author}</p>
                              {topic.tags && topic.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-3">
                                  {topic.tags.slice(0, 3).map((tag) => (
                                    <Badge key={tag} variant="gold">
                                      {tag}
                                    </Badge>
                                  ))}
                                  {topic.tags.length > 3 && (
                                    <Badge variant="outline">+{topic.tags.length - 3}</Badge>
                                  )}
                                </div>
                              )}
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-pacifico-blue flex-shrink-0 ml-3"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </Card>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <Card className="p-12 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 mx-auto text-gray-300 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p className="text-gray-500 font-inter">No topics for this day yet.</p>
                  <p className="text-sm text-gray-400 mt-2">Propose a new learning initiative!</p>
                </Card>
              )
            ) : (
              <Card className="p-12 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto text-pacifico-blue mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-charcoal font-bebas text-xl">Select a date to view topics</p>
                <p className="text-sm text-gray-600 font-inter mt-2">
                  Days with topics are marked with a red dot
                </p>
              </Card>
            )}
          </div>
        </div>

        {/* Create Topic Modal */}
        <CreateNoteModal
          open={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          selectedDate={selectedDate || undefined}
        />

        {/* Topic Detail Modal */}
        <TopicDetailModal
          open={!!selectedTopic}
          onClose={() => setSelectedTopic(null)}
          topic={selectedTopic}
        />
      </Container>
    </section>
  );
}
