// import file from '../Assets/file.png';
// import file1 from '../Assets/file_2.png';
// import file2 from '../Assets/file_3.png';
import p1 from '../Assets/p1.jpg';
import p2 from '../Assets/p2.jpg';
import p3 from '../Assets/p3.jpg';
import p4 from '../Assets/p4.jpg';
import p5 from '../Assets/p5.jpg';
import p6 from '../Assets/p6.jpg';
import p7 from '../Assets/p7.jpg';
import p8 from '../Assets/p8.jpg';

const VillasData = [
  {
    id: 1,
    images: [p1, p2, p3, p4, p4, p5, p6, p7, p8], // Add multiple images for each villa
    title: 'Villa 1',
    description: (
      <>
        <strong>About this space</strong><br /><br />
        Relax with the whole family at this peaceful place to stay.<br /><br />
        <strong>The space</strong><br />
        Large, modern and comfy villa, with view of the Prishtina skyline.<br />
        Quiet but central with 24-hour shopping nearby and access to public transport within 3 minutes walking distance.<br />
        Villa also includes a baby bed for the little ones and a Smart TV for quiet nights in!
      </>
    ),
  },
  {
    id: 2,
    images: [p1, p2, p3, p4, p4, p5, p6, p7, p8],
    title: 'Villa 2',
    description: 'Description for Villa 2',
  },
  {
    id: 3,
    images: [p1, p2, p3, p4, p4, p5, p6, p7, p8],
    title: 'Villa 3',
    description: 'Description for Villa 3',
  },
  {
    id: 4,
    images: [p1, p2, p3, p4, p4, p5, p6, p7, p8], // Add multiple images for each villa
    title: 'Villa 4',
    description: 'Description for Villa 4',
  },
  {
    id: 5,
    images: [p1, p2, p3, p4, p4, p5, p6, p7, p8], // Add multiple images for each villa
    title: 'Villa 5',
    description: 'Description for Villa 5',
  },
  {
    id: 6,
    images: [p1, p2, p3, p4, p4, p5, p6, p7, p8], // Add multiple images for each villa
    title: 'Villa 6',
    description: 'Description for Villa 6',
  },
  // Add more villas as needed
];

export default VillasData;