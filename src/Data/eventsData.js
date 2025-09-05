// Import all event images
import { 
  terminull1, terminull2, terminull3, terminull4, terminull5,
  mc1, mc2, mc3, mc4, mc5, mc6 
} from '../Images';


export const eventsData = [
  {
    id: 'terminull-brigade-2025',
    title: 'Terminull Brigade Event 2025',
    description: 'Highlights: Project Play hosted the Terminull Brigade Event 2025. This event included time run for Terminull Brigade where players from Sunway University and Monash University compete with other players to beat the best time.',
    images: [terminull1, terminull2, terminull3, terminull4, terminull5],
    showTitle: true, // Show "PAST EVENTS" header for first event
    className: 'row-bar5'
  },
  {
    id: 'monash-cup-2024',
    title: 'Monash Cup 2024',
    description: 'Highlights: Monash University hosted their Monash Cup 2024 at Project Play. Monash Cup was held for 3 days and had teams competing in different games including:',
    additionalInfo: [
      'Counter Strike 2',
      'Valorant', 
      'League of Legends'
    ],
    images: [mc1, mc2, mc3, mc4, mc5, mc6],
    showTitle: false, // Don't show "PAST EVENTS" header for subsequent events
    className: 'row-bar5'
  }
  // Add new events here! Just copy the structure above and modify the data
  // Example:
  // {
  //   id: 'new-event-2025',
  //   title: 'New Gaming Tournament 2025',
  //   description: 'Description of your new event...',
  //   images: [image1, image2, image3], // Import your images in the Images/index.js file first
  //   showTitle: false,
  //   className: 'row-bar5'
  // }
];

// Helper function to get events in order (most recent first)
export const getEventsInOrder = () => {
  return eventsData.sort((a, b) => {
    // You can add date sorting logic here if needed
    // For now, it maintains the order in the array
    return 0;
  });
};
