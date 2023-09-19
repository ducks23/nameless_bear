export default function Info() {
  const services = [
    {
      title: "Landscape Design and Installation",
      color: "bg-blue-200",
      description_1:
        "Customized landscape designs tailored to your preferences and property.",
      description_2:
        "Expert installation of plants, trees, hardscapes, and outdoor features to bring your vision to life.",
    },
    {
      title: "Irrigation System Installation and Maintenance",
      color: "bg-green-200",

      description_1:
        "Precision installation of efficient irrigation systems for optimal water distribution.",
      description_2:
        "Routine maintenance and repairs to ensure your landscape remains lush and healthy while conserving water.",
    },
    {
      title: "Lawn Care and Maintenance",
      color: "bg-yellow-200",

      description_1:
        "Regular lawn mowing, trimming, and edging to keep your grass looking pristine.",
      description_2:
        "Soil testing, fertilization, and weed control for a vibrant, weed-free lawn.",
    },
    {
      title: "Hardscaping and Outdoor Living Spaces",
      color: "bg-red-200",

      description_1:
        "Design and construction of stunning hardscape elements like patios, walkways, and retaining walls.",
      description_2:
        "Creation of inviting outdoor living spaces with features such as fire pits, seating areas, and pergolas.",
    },
    {
      title: "Tree and Shrub Care",
      color: "bg-pink-200",

      description_1:
        "Pruning and trimming of trees and shrubs to promote healthy growth and enhance aesthetics.",
      description_2:
        "Diagnosis and treatment of tree and shrub diseases, as well as pest control measures.",
    },
    {
      title: "Seasonal Planting / Flowerbed Maintenance",
      color: "bg-purple-200",

      description_1:
        "Seasonal plantings of flowers, shrubs, and bulbs to ensure year-round color and beauty.",
      description_2:
        "Mulching, weeding, and regular maintenance of flowerbeds and garden areas.",
    },
  ];

  return (
    <div className="flex flex-col max-w-4xl p-4 pb-16">
      <div className="font-bold text-3xl p-3">We're Here To Grow</div>
      <div className=" p-3">
        Our Promise At Edibly Landscaped, we don't just create landscapes; we
        create lasting impressions. Whether you're seeking a picturesque garden,
        a dynamic commercial landscape, or an efficient irrigation system, we're
        here to make your vision a reality. Our commitment to excellence,
        sustainability, and customer satisfaction is what sets us apart. Join us
        in the journey to transform your outdoor space into an oasis of beauty
        and sustainability. Contact Edibly Landscaped today to discuss your
        landscaping and irrigation needs. Together, we'll make your outdoor
        dreams flourish while conserving the environment. Let's grow together!
      </div>
      <div className="font-bold text-3xl p-5">Services</div>
      <div className="md:grid md:grid-cols-3  gap-6 flex flex-col">
        {services.map((item) => (
          <div className={`p-4 ${item.color} rounded-lg`}>
            <div className="p-1 font-bold text-xl">{item.title}</div>
            <ul>
              <li className="p-1">- {item.description_1}</li>
              <li className="p-1">- {item.description_2}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
