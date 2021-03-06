import Schedule from '../infra/typeorm/entities/Schedule';
import ICreateScheduleDTO from '../dtos/ICreateScheduleDTO';

export default interface ISchedulesRepository {
    create(data: ICreateScheduleDTO): Promise<Schedule>;
    // findByDate(date: Date): Promise<Schedule | undefined>;
}
