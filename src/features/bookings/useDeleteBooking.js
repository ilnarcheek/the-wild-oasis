import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBoocking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: (bookingId) => deleteBookingApi(bookingId),

    onSuccess: () => {
      toast.success(`Booking succefully deleted`);
      queryClient.invalidateQueries({ querykey: "bookings" });
    },

    onError: () => toast.error("There was an error while deleting booking"),
  });

  return { deleteBooking, isDeleting };
}
