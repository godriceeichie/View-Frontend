import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UseScroll from "@/hooks/useScroll";

const LoginModal = () => {
    const { scrollPosition } = UseScroll()
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={`bg-[#E7E8FF] ${
            scrollPosition >= 400
              ? "text-primary-color"
              : "text-white bg-opacity-15"
          }  px-6 py-3 rounded-md text-sm`}
        >
          Login
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default LoginModal
