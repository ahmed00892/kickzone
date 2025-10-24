import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function Card1() {
  return (
    <Card
      className="w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px] xl:w-[380px]
                 rounded-2xl shadow-[0_6px_25px_rgba(128,128,128,0.6)] 
                 hover:shadow-[0_8px_35px_rgba(128,128,128,0.7)]
                 transition-all duration-500 transform hover:-translate-y-2 bg-white"
    >
      <CardHeader
        floated={false}
        className="relative h-52 sm:h-56 md:h-60 lg:h-64 overflow-hidden rounded-t-2xl"
      >
        <div className="bg-stade bg-cover h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
      </CardHeader>

      <CardBody className="p-3 sm:p-4 md:p-5">
        <div className="mb-2 flex items-center justify-between">
          <Typography
            variant="h6"
            color="blue-gray"
            className="font-semibold text-sm sm:text-base md:text-lg"
          >
            Green Turf Stadium, Cairo
          </Typography>
          <Typography
            color="blue-gray"
            className="text-xs sm:text-sm md:text-base"
          >
            ⭐ 5.0
          </Typography>
        </div>

        <Typography
          color="gray"
          className="mb-3 text-xs sm:text-sm md:text-base leading-relaxed"
        >
          Enjoy a professional-grade football field with night lighting and
          clean facilities.
        </Typography>

        <div className="flex items-baseline gap-1">
          <Typography
            variant="h6"
            className="font-bold text-brand-blue text-base sm:text-lg md:text-xl"
          >
            $56.00
          </Typography>
          <Typography className="text-xs sm:text-sm md:text-base text-gray-600">
            / hour
          </Typography>
        </div>
      </CardBody>

      <CardFooter className="pt-1">
        <Button
          fullWidth
          className="text-white/90 bg-brand-green hover:bg-green-400 
                     text-xs sm:text-sm md:text-base transition-all duration-300
                     hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Card1;
