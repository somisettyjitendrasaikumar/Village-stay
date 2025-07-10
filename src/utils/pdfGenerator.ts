export const generateDestinationPDF = (destination: any) => {
  const pdfContent = `
VillageStay - Destination Guide
===============================

${destination.name}
${destination.location}

OVERVIEW
--------
${destination.description}

RATING & REVIEWS
----------------
Rating: ${destination.rating}/5 (${destination.reviews} reviews)

ACTIVITIES
----------
${destination.activities.map((activity: string, index: number) => `${index + 1}. ${activity}`).join('\n')}

ACCOMMODATION
-------------
${destination.accommodation.map((acc: string, index: number) => `${index + 1}. ${acc}`).join('\n')}

HOST INFORMATION
----------------
Name: ${destination.hostInfo.name}
Experience: ${destination.hostInfo.experience}
Languages: ${destination.hostInfo.languages.join(', ')}

SUSTAINABILITY IMPACT
---------------------
Environmental: ${destination.sustainability.carbonFootprint}
Community: ${destination.sustainability.communityImpact}
Cultural: ${destination.sustainability.culturalPreservation}

PRICING
-------
Base Price: ₹${destination.price} per night
Service Fee: ₹${Math.round(destination.price * 0.1)}
Community Contribution: ₹${Math.round(destination.price * 0.05)}

CULTURAL HIGHLIGHTS
-------------------
• Traditional village architecture
• Local handicraft workshops
• Organic farming experiences
• Cultural performances
• Traditional cuisine
• Festival celebrations

WHAT TO PACK
------------
• Comfortable walking shoes
• Light cotton clothing
• Sun hat and sunscreen
• Camera for memories
• Respect for local customs
• Open mind for new experiences

TRAVEL TIPS
-----------
• Learn basic local greetings
• Respect photography restrictions
• Participate in community activities
• Support local artisans
• Follow sustainable practices
• Engage with local guides

CONTACT INFORMATION
-------------------
For bookings and inquiries:
Website: VillageStay.com
Email: bookings@villagestay.com
Phone: +91-XXXX-XXXX-XX

EMERGENCY CONTACTS
------------------
Local Police: 100
Medical Emergency: 108
Tourist Helpline: 1363

Generated on: ${new Date().toLocaleDateString()}
  `;

  const blob = new Blob([pdfContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${destination.name.replace(/\s+/g, '-').toLowerCase()}-guide.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};