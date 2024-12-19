"use client";
import { useState } from "react";
import SLot from "./slot";

const CompareContainer = () => {
  // State to manage the list of slots, initialized with two default slots
  const [slots, setSlots] = useState([{ slotId: 1 }, { slotId: 2 }]);

  // Function to create a new slot and add it to the list
  const createSLots = () => {
    setSlots((prev) => [...prev, { slotId: prev.length + 1 }]);
  };

  // Function to remove a slot based on its slotId
  const removeSlot = (slotId) => {
    setSlots((prev) => prev.filter((item) => item.slotId !== slotId));
  };

  // Function to populate a slot with movie data based on its slotId
  const fillSlotWithMovie = (slotId, movie) => {
    setSlots((prev) =>
      prev.map((item) => {
        if (item.slotId !== slotId) {
          return item;
        } else {
          return {
            ...item,
            data: movie,
          };
        }
      })
    );
  };
  return (
    <main class="container mx-auto px-4 pt-24 pb-8">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold">Compare Movies</h1>
        <button
          class="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
          onClick={createSLots}
        >
          Add Movie +
        </button>
      </div>

      {/* <!-- Movie Comparison Container --> */}
      <div class="grid gap-6 md:grid-cols-2">
        {slots.map((slot) => (
          <SLot
            key={slot.slotId}
            slot={slot}
            onRemove={removeSlot}
            onMovieAdd={fillSlotWithMovie}
          />
        ))}
      </div>
    </main>
  );
};

export default CompareContainer;
