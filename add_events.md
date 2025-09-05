# How to Add New Events

## Quick Guide

Adding new events is now super easy! Just follow these steps:

### 1. Add Your Images
First, add your event images to the `src/Images/index.js` file:

```javascript
// Add your new images
import newEvent1 from './optimized/new_event_1_optimized.png';
import newEvent2 from './optimized/new_event_2_optimized.png';
import newEvent3 from './optimized/new_event_3_optimized.png';

// Add to exports
export {
  // ... existing exports
  newEvent1,
  newEvent2,
  newEvent3
};
```

### 2. Add Event Data
Open `src/Data/eventsData.js` and add your new event to the `eventsData` array:

```javascript
export const eventsData = [
  // ... existing events
  
  // Add your new event here (copy and modify this structure)
  {
    id: 'your-new-event-2025',                    // Unique identifier
    title: 'Your New Event 2025',                 // Event title
    description: 'Description of your event...',  // Main description
    additionalInfo: [                             // Optional: list of games/features
      'Game 1',
      'Game 2', 
      'Game 3'
    ],
    images: [newEvent1, newEvent2, newEvent3],    // Your imported images
    showTitle: false,                             // false for events after the first one
    className: 'row-bar5'                         // CSS class for styling
  }
];
```

### 3. That's It!
Your new event will automatically appear on the Events page!

## Example: Adding a New Tournament

```javascript
// In eventsData.js
{
  id: 'summer-tournament-2025',
  title: 'Summer Gaming Tournament 2025',
  description: 'Highlights: Project Play hosted the Summer Gaming Tournament 2025. This exciting tournament featured competitive gaming across multiple titles.',
  additionalInfo: [
    'Valorant',
    'Counter Strike 2',
    'League of Legends',
    'Rocket League'
  ],
  images: [summer1, summer2, summer3, summer4],
  showTitle: false,
  className: 'row-bar5'
}
```

## Tips

- **Order**: Events appear in the order they're listed in the `eventsData` array
- **Images**: Make sure to optimize your images first using `npm run optimize-images`
- **showTitle**: Only the first event should have `showTitle: true` to show the "PAST EVENTS" header
- **additionalInfo**: Use this for lists of games, features, or other details
- **className**: Use `'row-bar5'` for consistent styling

## File Structure

```
src/
├── Components/
│   └── EventTemplate.jsx     # Reusable event template
├── Data/
│   └── eventsData.js         # All event data (edit this!)
├── Images/
│   ├── index.js              # Image imports (edit this!)
│   └── optimized/            # Your optimized images go here
└── Pages/
    └── Events.jsx            # Events page (no changes needed!)
```

That's it! The template system makes adding new events super simple and consistent.
