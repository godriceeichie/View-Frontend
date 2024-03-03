import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
import { useState } from "react";
import { IoMailUnreadOutline } from "react-icons/io5";
import useAuthContext from "../../hooks/useAuthContext";
import { PinInput } from "@mantine/core";
import { SubmitHandler, useForm } from "react-hook-form";
import { api } from "../../api/axios";
import { useNavigate } from "react-router-dom";

type OTPProps = {
  otp: string;
};
const OTPModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>();

  const handleOpen = () => setOpen(!open);
  const { user } = useAuthContext();
  const { handleSubmit, setValue } = useForm<OTPProps>();
  const navigate = useNavigate();

  const submitOTP: SubmitHandler<OTPProps> = (data, e) => {
    e?.preventDefault();
    api
      .post("/auth/verifyEmail", data)
      .then((response) => {
        console.log(response.data);
        if (response.status == 200) {
          navigate("/dashboard/admin");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button
        onClick={handleOpen}
        className="bg-primary-color text-white py-3 px-10 rounded-lg"
      >
        Next
      </button>
      <Dialog
        placeholder={""}
        open={open}
        handler={handleOpen}
        className="lg:min-w-fit lg:w-1/3 font-sans pb-3 px-3 flex flex-col items-center"
      >
        <DialogHeader placeholder={""} className="">
          <IoMailUnreadOutline className="text-primary-color" size={40} />
        </DialogHeader>
        <DialogBody
          placeholder={""}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-black font-medium">
            Please enter the code sent to{" "}
            <span className="font-semibold">{user && user.workEmail}</span>
          </p>
          <form
            action=""
            onSubmit={handleSubmit(submitOTP)}
            className="flex flex-col items-center gap-3"
          >
            <PinInput
              oneTimeCode
              length={6}
              value={otp}
              onChange={(otp) => {
                setOtp(otp);
                setValue("otp", otp);
              }}
            />
            <button
              type="submit"
              className="mx-auto bg-primary-color text-white py-2 px-10 rounded-lg mt-6 font-medium"
            >
              Verify Email
            </button>
          </form>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default OTPModal;
