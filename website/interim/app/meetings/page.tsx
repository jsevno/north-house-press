import Link from "next/link";
import { FileText, Calendar, Users, MessageSquare } from "lucide-react";

export default function MeetingsPage() {
  const meetings = [
    {
      date: "2025-10-23",
      title: "Initial Project Briefing",
      participants: ["David Warwick Graham", "Jonny Scott"],
      type: "Full Transcript",
      summary: "Initial briefing call covering company mission, book list, website requirements, and technical approach.",
      keyTopics: [
        "Company mission and launch timeline",
        "Initial book list (Neil Gunn revival, Beth McDonough)",
        "Website architecture (6 pages)",
        "E-commerce requirements (UK/Ireland only)",
        "Glassbox ebook integration",
        "IPG connection and opportunities"
      ],
      transcript: "/knowledge-base/transcripts/meeting-2025-10-23-initial-briefing.md"
    }
  ];

  const notes = [
    {
      date: "2025-11-18",
      title: "Project Setup & Planning",
      summary: "Project structure created, interim website built, documentation framework established.",
      type: "Meeting Notes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-900 mb-4">Meeting Notes & Transcripts</h1>
          <p className="text-lg text-green-700">
            Project discussions, meeting notes, and full transcripts
          </p>
        </div>

        {/* Full Transcripts Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-green-700" />
            Full Transcripts
          </h2>
          <div className="space-y-6">
            {meetings.map((meeting, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-green-600" />
                      <h3 className="text-2xl font-semibold text-gray-900">{meeting.title}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {meeting.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {meeting.participants.join(", ")}
                      </span>
                      <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs">
                        {meeting.type}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{meeting.summary}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Topics Discussed:</h4>
                  <ul className="space-y-1">
                    {meeting.keyTopics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <Link
                    href={meeting.transcript}
                    className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-medium"
                  >
                    <FileText className="w-4 h-4" />
                    View Full Transcript
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Meeting Notes Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-green-700" />
            Meeting Notes
          </h2>
          <div className="space-y-4">
            {notes.map((note, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-4 h-4 text-green-600" />
                      <h3 className="text-xl font-semibold text-gray-900">{note.title}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <span>{note.date}</span>
                      <span className="px-2 py-1 rounded bg-gray-100 text-gray-700 text-xs">
                        {note.type}
                      </span>
                    </div>
                    <p className="text-gray-700">{note.summary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Information Box */}
        <div className="mt-8 bg-green-100 rounded-lg p-6">
          <h3 className="font-semibold text-green-900 mb-2">About This Section</h3>
          <p className="text-sm text-green-800 mb-2">
            This section contains meeting notes and full transcripts from project discussions. 
            Transcripts have been redacted to remove personal information and off-topic conversations 
            while preserving all relevant project context and decisions.
          </p>
          <p className="text-sm text-green-800">
            <strong>Note:</strong> Personal details, private conversations, and unrelated topics 
            have been removed to maintain professionalism while ensuring transparency of project 
            discussions.
          </p>
        </div>
      </div>
    </div>
  );
}

