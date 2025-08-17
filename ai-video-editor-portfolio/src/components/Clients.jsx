export default function Clients() {
  const channels = [
    { 
      name: "Davekot", 
      logo: "https://res.cloudinary.com/ddhhoprps/image/upload/v1755362285/channels4_profile_oypxag.jpg", 
      subscribers: "5.75k",
      videos: "16",
      views: "243,256"
    },
    
  ];

  return (
    <section id="clients
" className="section relative">
    <div className="absolute z-[-1] w-60 h-60 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-20 blur-2xl animate-pulse" />

      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12"data-aos="flip-up">
          Working With These YouTube Channels
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"data-aos="fade-right">
          {channels.map((channel, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={channel.logo}
                alt={channel.name}
                className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-gray-700 hover:border-blue-500 transition duration-300"
              />
              <p className="text-lg font-semibold mb-2">{channel.name}</p>
              
              <div className="text-sm text-gray-300 space-y-1">
                <p> Subscribers: {channel.subscribers}</p>
                <p> Videos: {channel.videos}</p>
                <p> Views: {channel.views}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
