import { ReservationDto } from "./reservation.dto";
import { UserDto } from "./user.dto";

export type EmptyDto = {
  id: number;
};

export type AppointmentDto = {
  id: number;

  instructor: UserDto | EmptyDto;

  reservation: ReservationDto | EmptyDto | null;

  appointmentDate: Date;
};
