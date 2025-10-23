import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

function Information() {
  const data = [
    {
      label: "About the Game",
      value: "About the Game",
      desc: `- Football is the world’s most popular sport, played and loved by millions everywhere.
- It’s a team game where two sides compete to score goals by getting the ball into the opponent’s net.
- At KickZone, we bring you the excitement of football through our professional, high-quality pitches designed 
for both casual players and competitive matches.`,
    },
    {
      label: "Equipment Used",
      value: "Equipment Used",
      desc: `To play football, you just need:
- A football (size varies by age group)
- Comfortable sportswear and shoes suitable for turf
- Goalposts and nets 
At KickZone, all our pitches are equipped with top-quality turf, proper lighting, and well-maintained goalposts for the best play experience.`,
    },
    {
      label: "Game Rules",
      value: "Game Rules",
      desc: `- Each football match is played between two teams of 11 players each, including a goalkeeper.
- The aim is simple — score more goals than your opponent within the match duration.
- Fair play, teamwork, and respect are the heart of the game — values we proudly promote at KickZone.`,
    },
  ];

  return (
    <div className="flex-1 text-left space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-brand-blue mb-2">
          Information You Need
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Get to Know Football in a Simple Way
        </h2>
        <div className="flex gap-2 mb-8">
          <span className="w-2 h-2 bg-brand-green rounded-full"></span>
          <span className="w-2 h-2 bg-brand-green rounded-full"></span>
          <span className="w-2 h-2 bg-brand-green rounded-full"></span>
          <span className="w-2 h-2 bg-brand-green rounded-full"></span>
          <span className="w-2 h-2 bg-brand-green rounded-full"></span>
        </div>
      </div>

      <Tabs id="custom-animation" value="About the Game" className="w-[500px]">
        <TabsHeader
          className="bg-transparent border-b border-gray-300 mb-4 flex flex-row gap-4"
          indicatorProps={{
            className: "bg-brand-green rounded-md",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              className="text-black font-bold text-lg px-4 py-2 hover:text-brand-gray transition-colors whitespace-nowrap"
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>

        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              <p className="text-black text-lg leading-relaxed whitespace-pre-line">
                {desc}
              </p>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}

export default Information;
