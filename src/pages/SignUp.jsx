import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card color="white" shadow={true} className="p-8 w-full max-w-lg">
        <div className="text-center">
          <Typography variant="h3" className="font-bbh-sans-bartle font-bold text-brand-blue">
            Create Your Player Profile
          </Typography>
          <Typography color="gray" className="mt-1 font-open-sans font-normal text-brand-gray">
            Join Kickzone and get on the pitch.
          </Typography>
        </div>
        <form className="mt-8 mb-2">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Full Name" color="blue" />
            <Input type="email" size="lg" label="Email" color="blue" />
            <Input type="password" size="lg" label="Password" color="blue" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="date" size="lg" label="Birthdate" color="blue" />
              <Select label="Favored Position" color="blue">
                <Option>Goalkeeper</Option>
                <Option>Defender</Option>
                <Option>Midfielder</Option>
                <Option>Forward</Option>
                <Option>Any</Option>
              </Select>
            </div>

          </div>
          <Checkbox
            label={
              <Typography variant="small" className="font-open-sans flex items-center font-normal text-brand-gray">
                I agree to the&nbsp;
                <a href="#" className="font-medium transition-colors hover:text-brand-green">
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6 bg-brand-green" fullWidth>
            Sign Up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-open-sans font-normal text-brand-gray">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-brand-green hover:underline">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </section>
  );
}

export default SignUp;

