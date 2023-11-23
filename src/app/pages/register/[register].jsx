// pages/register/[register].js
import { useRouter } from "next/router";

const RegisterDetails = () => {
  const router = useRouter();
  const { register } = router.query;

  return (
    <div>
      <h1>Register Details</h1>
      <p>Register ID: {register}</p>
    </div>
  );
};

export default RegisterDetails;
