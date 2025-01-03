import { CardioExerciseEnum } from "../enum/cardioexercise.enum"
import { MuscleGroupEnum } from "../enum/musclegroup.enum"

export abstract class Exercise {
    protected id: string
    protected name: string
    protected description: string
    protected muscleGroup: MuscleGroupEnum
    protected cardioExercise: CardioExerciseEnum
    protected equipment: string
    protected sets: number
    protected reps: number
    protected rest: string
    protected time: string
    protected videoUrl: string
}