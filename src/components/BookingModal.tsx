import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">Book Your Appointment</DialogTitle>
          <DialogDescription>
            Choose a convenient time and we'll confirm your visit.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full h-[600px]">
          <iframe
            src="https://cal.com/dentalaivault/service-booking"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Book Service Appointment"
            className="rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
