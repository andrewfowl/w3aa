import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { events } from '../data/events';

const Events: React.FC = () => {
  return (
    <div className="py-16 px-6" id="events">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">Upcoming Events</h2>
        <div className="grid gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="border-2 border-black rounded-lg p-6 hover:border-black/70 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-black/80 mb-4">{event.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <button className="border-2 border-black px-6 py-2 rounded-lg hover:bg-black hover:text-[#f5f5dc] transition-colors whitespace-nowrap">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
