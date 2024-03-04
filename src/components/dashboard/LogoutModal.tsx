import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IoLogOutOutline } from "react-icons/io5";
import { IoWarningOutline } from "react-icons/io5";
import useAuthContext from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const LogoutModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { user, dispatch } = useAuthContext();
  const navigate = useNavigate()
  const logout = () => {
    dispatch({type: 'LOGOUT', payload: user!})
    localStorage.clear()
    navigate("/")
  }
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <div className="flex flex-col items-center">
          <IoWarningOutline className="text-error-color" size={30} />
          <h4 className="font-medium text-lg">
            Are you sure you want to logout?
          </h4>
        </div>
        <div className="flex flex-col mt-6 gap-3">
          <button onClick={logout} className="bg-error-color rounded-md text-white py-2">
            Logout
          </button>
          <button
            onClick={close}
            className="border border-error-color rounded-md text-error-color py-2"
          >
            Cancel
          </button>
        </div>
      </Modal>
      <button onClick={open}>
        <IoLogOutOutline fontSize={23} className="text-grey-500" />
      </button>
    </>
  );
};

export default LogoutModal;
