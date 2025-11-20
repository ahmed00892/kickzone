import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function Card3() {
  const navigate = useNavigate();
  return (
    <Card
      className="w-[300px] sm:w-[340px] md:w-[360px] lg:w-[380px] 
                 rounded-2xl shadow-[0_6px_25px_rgba(128,128,128,0.6)] 
                 hover:shadow-[0_8px_35px_rgba(128,128,128,0.7)]
                 transition-all duration-500 transform hover:-translate-y-2
                 bg-light-surface dark:bg-dark-surface"
    >
      <CardHeader
        floated={false}
        className="relative h-60 overflow-hidden rounded-t-2xl"
      >
        <div className="bg-stade3 bg-cover h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
      </CardHeader>

      <CardBody className="p-4 md:p-5">
        <div className="mb-2 flex items-center justify-between">
          <Typography className="font-semibold text-base md:text-lg dark:text-dark-text">
            Victory Field, Alexandria
          </Typography>
          <Typography className="text-sm md:text-base dark:text-dark-text/70">
            ⭐ 4.9
          </Typography>
        </div>

        <Typography className="mb-3 text-sm md:text-base leading-relaxed dark:text-dark-text/80">
          Open football field with fresh grass, perfect for casual matches and
          training sessions
        </Typography>

        <div className="flex items-baseline gap-1">
          <Typography className="font-bold text-brand-blue dark:text-dark-accent text-base md:text-lg">
            $30.00
          </Typography>
          <Typography className="text-sm text-gray-600 dark:text-dark-text/70">
            / hour
          </Typography>
        </div>
      </CardBody>

      <CardFooter className="pt-2">
        <Button
          fullWidth
          className="text-white/90 bg-brand-green dark:bg-dark-accent hover:bg-green-400 dark:hover:bg-dark-accent/90
                     text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          onClick={() => navigate("/stadiums/3")}
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Card3;
