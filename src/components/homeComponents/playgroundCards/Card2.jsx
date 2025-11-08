import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function Card2() {
  const navigate = useNavigate();
  return (
    <Card
      className="w-[300px] sm:w-[340px] md:w-[360px] lg:w-[380px] 
                 rounded-2xl shadow-[0_6px_25px_rgba(128,128,128,0.6)] 
                 hover:shadow-[0_8px_35px_rgba(128,128,128,0.7)]
                 transition-all duration-500 transform hover:-translate-y-2 bg-white"
    >
      <CardHeader
        floated={false}
        className="relative h-60 overflow-hidden rounded-t-2xl"
      >
        <div className="bg-stade2 bg-cover h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
      </CardHeader>

      <CardBody className="p-4 md:p-5">
        <div className="mb-2 flex items-center justify-between">
          <Typography
            variant="h6"
            color="blue-gray"
            className="font-semibold text-base md:text-lg"
          >
            Sunny Field, Giza
          </Typography>
          <Typography color="blue-gray" className="text-sm md:text-base">
            ⭐ 4.8
          </Typography>
        </div>

        <Typography
          color="gray"
          className="mb-3 text-sm md:text-base leading-relaxed"
        >
          Perfect for 5-a-side games with synthetic grass, modern lighting, and
          seating area for fans
        </Typography>

        <div className="flex items-baseline gap-1">
          <Typography
            variant="h6"
            className="font-bold text-brand-blue text-base md:text-lg"
          >
            $45.00
          </Typography>
          <Typography className="text-sm text-gray-600">/ hour</Typography>
        </div>
      </CardBody>

      <CardFooter className="pt-2">
        <Button
          fullWidth
          className="text-white/90 bg-brand-green hover:bg-green-400 text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          onClick={() => navigate("/stadiums/2")}
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Card2;
