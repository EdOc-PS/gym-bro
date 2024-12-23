import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WorkoutRoutineFindAllController } from "src/controllers/workoutroutine.findall.controller";
import { WorkoutRoutine } from "src/models/workoutroutine.model";
import { PersonModule } from "./person.module";
import { WorkoutRoutineCreateService } from "src/services/workoutroutine.create.service";
import { WorkoutRoutineFindAllService } from "src/services/workoutroutine.findall.service";
import { WorkoutRoutineFindByPersonIdService } from "src/services/workoutroutine.findbypersonid.service";
import { WorkoutRoutineFindByPersonIdController } from "src/controllers/workoutroutine.findbypersonid.controller";
import { WorkoutRoutineAddDailyRoutineService } from "src/services/workoutroutine.adddailyroutine.service";
import { WorkoutRoutineUpdateService } from "src/services/workoutroutine.update.service";
import { WorkoutRoutineFindService } from "src/services/workoutroutine.find.service";

@Module({
    imports: [TypeOrmModule.forFeature([WorkoutRoutine]), forwardRef(() => PersonModule)],
    controllers: [WorkoutRoutineFindAllController, WorkoutRoutineFindByPersonIdController],
    providers: [WorkoutRoutineCreateService, WorkoutRoutineFindAllService, WorkoutRoutineFindByPersonIdService,
        WorkoutRoutineAddDailyRoutineService, WorkoutRoutineUpdateService, WorkoutRoutineFindService],
    exports: [WorkoutRoutineCreateService, WorkoutRoutineFindByPersonIdService, WorkoutRoutineAddDailyRoutineService, WorkoutRoutineUpdateService, WorkoutRoutineFindService]
})
export class WorkoutRoutineModule { }