import { Calendar, Users, CreditCard, MessageSquare } from "lucide-react";

export default function InfoSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Intro */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What is <span className="text-primary">Ingroove?</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Ingroove helps you create, manage, and grow your events – all in one place. 
          Whether you’re an organizer, a hub, or an attendee, everything just works together.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
          <Calendar className="w-10 h-10 text-primary mb-4" />
          <h3 className="font-semibold text-lg">Event Management</h3>
          <p className="text-gray-600 mt-2">Easily create, schedule, and manage events.</p>
        </div>

        <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
          <Users className="w-10 h-10 text-primary mb-4" />
          <h3 className="font-semibold text-lg">Attendee Engagement</h3>
          <p className="text-gray-600 mt-2">Stay connected with your community in real time.</p>
        </div>

        <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
          <CreditCard className="w-10 h-10 text-primary mb-4" />
          <h3 className="font-semibold text-lg">Secure Payments</h3>
          <p className="text-gray-600 mt-2">Sell tickets and get paid fast and securely.</p>
        </div>

        <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
          <MessageSquare className="w-10 h-10 text-primary mb-4" />
          <h3 className="font-semibold text-lg">Community Chat</h3>
          <p className="text-gray-600 mt-2">Build stronger connections with in-app conversations.</p>
        </div>
      </div>
    </section>
  );
}
