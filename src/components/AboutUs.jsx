import React from "react";
import { Card, CardBody, Button } from "@material-tailwind/react";
import { Users, Target, Award, Clock, MapPin, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-dark-bg dark:via-gray-900 dark:to-dark-surface">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-32 px-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=2070')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-green-900/40 to-black/70 dark:from-black/70 dark:via-gray-900/50 dark:to-black/80"></div>
        <div className="relative z-10 container mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl tracking-tight">
            About Us
          </h1>
          <p className="text-2xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-xl font-semibold">
            Egypt's Premier Football Court Reservation Service
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to KickZone
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Your one-stop destination for booking your next game and
              purchasing top-quality football equipment. We proudly offer
              multiple state-of-the-art football courts, designed for both
              casual players and competitive teams.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We aim to provide our customers with a convenient and reliable
              service, easy online booking, and secure payment options. Whether
              you're organizing a friendly match or a professional tournament,
              our platform has everything you need to enjoy the beautiful game
              to the fullest.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-green-50 dark:bg-dark-surface rounded-xl">
                <div className="text-4xl font-bold text-green-600 dark:text-brand-green mb-2">
                  10+
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">
                  Premium Football Courts
                </div>
              </div>
              <div className="text-center p-4 bg-emerald-50 dark:bg-dark-surface rounded-xl">
                <div className="text-4xl font-bold text-emerald-600 dark:text-brand-green mb-2">
                  24/7
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">
                  Online Booking
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image/Card */}
          <div className="relative">
            <Card className="shadow-2xl overflow-hidden dark:bg-dark-surface">
              <div className="h-64 bg-gradient-to-br from-green-400 to-emerald-600 dark:from-brand-green dark:to-brand-blue flex items-center justify-center">
                <Trophy className="w-32 h-32 text-white opacity-80" />
              </div>
              <CardBody>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  To provide world-class football facilities and create
                  unforgettable experiences for players of all skill levels.
                  We're committed to growing the football community in Egypt and
                  bringing players together.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experience the passion of football with ease. Reserve your
              football court today!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="hover:shadow-xl transition-shadow duration-300 dark:bg-dark-surface">
              <CardBody className="text-center p-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600 dark:text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Team & Family Friendly
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Courts designed for teams, friends, and families to enjoy
                  quality time together and create lasting memories on the
                  pitch.
                </p>
              </CardBody>
            </Card>

            {/* Feature 2 */}
            <Card className="hover:shadow-xl transition-shadow duration-300 dark:bg-dark-surface">
              <CardBody className="text-center p-8">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-emerald-600 dark:text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Easy Booking
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Choose your court size (5-a-side, 7-a-side, or full-size),
                  select a convenient time and date, and book instantly with our
                  simple online system.
                </p>
              </CardBody>
            </Card>

            {/* Feature 3 */}
            <Card className="hover:shadow-xl transition-shadow duration-300 dark:bg-dark-surface">
              <CardBody className="text-center p-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600 dark:text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Quality Equipment
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Top-quality footballs, boots, and gear available for purchase
                  or rental to take your game to the next level.
                </p>
              </CardBody>
            </Card>

            {/* Feature 4 */}
            <Card className="hover:shadow-xl transition-shadow duration-300 dark:bg-dark-surface">
              <CardBody className="text-center p-8">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-emerald-600 dark:text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Flexible Hours
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Open everyday from early morning to late night, giving you the
                  flexibility to play when it suits you best.
                </p>
              </CardBody>
            </Card>

            {/* Feature 5 */}
            <Card className="hover:shadow-xl transition-shadow duration-300 dark:bg-dark-surface">
              <CardBody className="text-center p-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-600 dark:text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Prime Locations
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Conveniently located across Egypt, making it easy to access
                  our world-class football facilities near you.
                </p>
              </CardBody>
            </Card>

            {/* Feature 6 */}
            <Card className="hover:shadow-xl transition-shadow duration-300 dark:bg-dark-surface">
              <CardBody className="text-center p-8">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-emerald-600 dark:text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  For All Skill Levels
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Whether you're a beginner learning the basics or a seasoned
                  player, we have the perfect court for you.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Football Information Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-dark-surface py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Information You Need
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get To Know The Game in a Simple Way
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="dark:bg-dark-surface">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  What is Football?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Football (soccer) is the world's most popular sport, played by
                  over 250 million players in more than 200 countries. It's a
                  team sport played between two teams of eleven players with a
                  spherical ball. The objective is to score goals by getting the
                  ball into the opposing team's goal.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our courts come in various sizes: standard 5-a-side (40m x
                  20m), 7-a-side (60m x 40m), and full-size 11-a-side (105m x
                  68m). All courts feature high-quality artificial turf or
                  natural grass, proper lighting for night games, and
                  professional goal nets.
                </p>
              </CardBody>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="dark:bg-dark-surface">
                <CardBody className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Equipment Needed
                  </h4>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 dark:bg-brand-green rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="dark:text-gray-200">
                          Football boots:
                        </strong>{" "}
                        Specialized shoes with studs or cleats for traction on
                        grass or turf surfaces.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 dark:bg-brand-green rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="dark:text-gray-200">
                          Football:
                        </strong>{" "}
                        Standard size 5 ball (circumference: 68-70cm) for
                        official matches, or smaller sizes for training.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 dark:bg-brand-green rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="dark:text-gray-200">
                          Shin guards:
                        </strong>{" "}
                        Protective equipment worn under socks to protect the
                        shins during play.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 dark:bg-brand-green rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="dark:text-gray-200">
                          Jersey & shorts:
                        </strong>{" "}
                        Comfortable athletic wear, preferably moisture-wicking
                        fabric.
                      </div>
                    </li>
                  </ul>
                </CardBody>
              </Card>

              <Card className="dark:bg-dark-surface">
                <CardBody className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    How to Play
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                    Football is played in two halves, with each team trying to
                    score by getting the ball into the opponent's goal. Players
                    can use any part of their body except their hands and arms
                    (only the goalkeeper can use hands within the penalty area).
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The game emphasizes teamwork, strategy, passing, dribbling,
                    and shooting. Whether you're playing casual 5-a-side or
                    competitive 11-a-side, the joy of the beautiful game remains
                    the same!
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 via-green-700 to-emerald-800 dark:from-brand-blue dark:via-brand-blue/90 dark:to-dark-surface py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Hit the Pitch?
          </h2>
          <p className="text-xl text-green-100 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of football enthusiasts who trust us for their weekly
            games. Whether it's a casual kickabout with friends or a competitive
            league match, we've got the perfect court for you. Book now and
            experience the passion of football!
          </p>
          <Button
            size="lg"
            className="bg-white dark:bg-dark-surface text-green-700 dark:text-brand-green hover:bg-gray-100 dark:hover:bg-gray-800 shadow-xl font-bold px-8 py-4 text-lg"
            onClick={() => navigate("/stadiums")}
          >
            Reserve Your Court Today
          </Button>
        </div>
      </section>
    </main>
  );
}
