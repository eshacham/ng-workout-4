
import { GripType, GripWidth, RepetitionSpeed, WeightType, WeightUnit, Muscles } from '../models/enums';
import { DefaultWorkouts } from '../models/DefaultWorkouts';
import { Workout } from '../models/Workout';
import { WorkoutDay } from '../models/WorkoutDay';
import { ExerciseSet } from '../models/ExerciseSet';
import { Exercise } from '../models/Exercise';
import { Grip } from '../models/Grip';
import { Rep } from '../models/Rep';
import { getMedia } from './defaultExerciseMedia';

export const defaultWorkouts = new DefaultWorkouts(
    new DefaultWorkouts({
        workouts: [
            new Workout({
                id: 1,
                name: 'Workout Set No. 1',
                description: '4 days including upper, lower and core muscles',
                days: [
                    new WorkoutDay({
                        id: 1,
                        name: 'Full Body',
                        exerciseSets: [
                            new ExerciseSet({
                                id: 1,
                                exercises: [
                                    new Exercise({
                                        name: 'Bench Press, Wide Grip',
                                        media: getMedia('BenchPressWideGrip.jpeg'),
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                            GripWidth.Wide,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Barbell,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 2,
                                exercises: [
                                    new Exercise({
                                        name: 'Seated Rope Cable Row',
                                        media: getMedia('SeatedRopeCableRow.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 3,
                                exercises: [
                                    new Exercise({
                                        name: 'Dumbbell Wrist Curl',
                                        media: getMedia('DumbbellWristCurl.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                            GripWidth.Normal,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 15
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 15
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 15
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 4,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Triceps Pushdown, Overhand Grip',
                                        media: getMedia('CableTricepsPushdownOverheadGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 5,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Biceps Curl, Underhand Grip',
                                        media: getMedia('CableBicepsCurlUnderhandGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Underhand
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                'weight': 50,
                                                'weightUnit': WeightUnit.Lbs,
                                                'times': 12
                                            }),
                                            new Rep({
                                                'weight': 50,
                                                'weightUnit': WeightUnit.Lbs,
                                                'times': 12
                                            }),
                                            new Rep({
                                                'weight': 50,
                                                'weightUnit': WeightUnit.Lbs,
                                                'times': 12
                                            }),
                                            new Rep({
                                                'weight': 50,
                                                'weightUnit': WeightUnit.Lbs,
                                                'times': 12
                                            })
                                        ],
                                        'restBetweenReps': 20,
                                        'restAfterExercise': 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 6,
                                exercises: [
                                    new Exercise({
                                        name: 'Leg Raise Machine',
                                        media: getMedia('LegRaiseMachine.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 80,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 80,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 80,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 80,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 7,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Leg Curl',
                                        media: getMedia('CableLegCurl.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                                new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 8,
                                exercises: [
                                    new Exercise({
                                        name: 'Crossfit Situps',
                                        media: getMedia('CrossfitSitup.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 9,
                                exercises: [
                                    new Exercise({
                                        name: 'Cross Body Crunch',
                                        media: getMedia('CrossBodyCrunch.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.NoWeight,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            })
                        ],
                    }),
                    new WorkoutDay({
                        id: 2,
                        name: 'Upper Body 1',
                        exerciseSets: [
                            new ExerciseSet({
                                id: 1,
                                exercises: [
                                    new Exercise({
                                        name: 'Bench Press, Narrow Grip',
                                        media: getMedia('BenchPressNarrowGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                            GripWidth.Narrow
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Barbell,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    }),
                                    new Exercise({
                                        name: 'Dumbbell Bench Press, Rotating Grip',
                                        media: getMedia('DumbbellBenshPressRotatingGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                            GripWidth.Normal
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    }),
                                    new Exercise({
                                        name: 'Dumbbell Bench Press, Rotating Grip',
                                        media: getMedia('DumbbellBenshPressRotatingGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                            GripWidth.Normal,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 3,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Fly',
                                        media: getMedia('CableFly.png'),
                                        theGrip: new Grip(
                                            GripType.Underhand,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 4,
                                exercises: [
                                    new Exercise({
                                        name: 'Dumbbell Fly',
                                        media: getMedia('DumbbellFly.png'),
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 5,
                                exercises: [
                                    new Exercise({
                                        name: 'Dumbbell Horizontal Row, Inclined Prone',
                                        media: getMedia('DumbbellHorizontalRowInclineProne.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 6,
                                exercises: [
                                    new Exercise({
                                        name: 'Dumbbell Tricpes Extensions, Seated',
                                        media: getMedia('DumbbellTricepsExtensionSeated.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 7,
                                exercises: [
                                    new Exercise({
                                        name: 'Inclined Pushup, Narrow Grip',
                                        media: getMedia('InclinePushupNarrowGrip.jpg'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                            GripWidth.Narrow,
                                        ),
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 10
                                            }),
                                            new Rep({
                                                times: 10
                                            }),
                                            new Rep({
                                                times: 10
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 8,
                                exercises: [
                                    new Exercise({
                                        name: 'Reverse Cable Fly, On Flat Bench',
                                        media: getMedia('ReverseCableFlyOnFlatBench.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 55,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 55,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 55,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 9,
                                exercises: [
                                    new Exercise({
                                        name: 'Situps',
                                        media: getMedia('Situps.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 10,
                                exercises: [
                                    new Exercise({
                                        name: 'Situps with Weight Above Head',
                                        media: getMedia('SitupsWithWeightAboveHead.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 11,
                                exercises: [
                                    new Exercise({
                                        name: 'Russian Twist',
                                        media: getMedia('RussianTwist.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            })
                        ],
                    }),
                    new WorkoutDay({
                        id: 3,
                        name: 'Upper Body 2',
                        exerciseSets: [
                            new ExerciseSet({
                                id: 1,
                                exercises: [
                                    new Exercise({
                                        name: 'Cabel Lat Pulldown, Behind Neck Wide Grip',
                                        media: getMedia('CabelLatPulldownBehindNeckWideGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                            GripWidth.Wide,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    }),
                                    new Exercise({
                                        name: 'Decline Dumbbell Pullover',
                                        media: getMedia('DeclineDumbbellPullover.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                            GripWidth.Wide,
                                        ),
                                        typeOfWeight: WeightType.Dumbbell,
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 3,
                                exercises: [
                                    new Exercise({
                                        name: 'Dumbbell Arm Circles',
                                        media: getMedia('DumbbellArmCircles.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                        ),
                                        typeOfWeight: WeightType.Dumbbell,
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 4,
                                exercises: [
                                    new Exercise({
                                        name: 'Machine Row Medium Grip',
                                        media: getMedia('MachineRowMediumGrip.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 5,
                                exercises: [
                                    new Exercise({
                                        name: 'Dummbell Biceps Curl Standing Underhand Grip',
                                        media: getMedia('DummbellBicepsCurlStandingUnderhandGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Underhand,
                                        ),
                                        typeOfWeight: WeightType.Dumbbell,
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 6,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Shrug',
                                        media: getMedia('CableShrug.png'),
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                            GripWidth.Normal,
                                        ),
                                        typeOfWeight: WeightType.Dumbbell,
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 7,
                                exercises: [
                                    new Exercise({
                                        name: 'Dragon Flags',
                                        media: getMedia('DragonFlags.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 8,
                                exercises: [
                                    new Exercise({
                                        name: 'Decline Situps',
                                        media: getMedia('DeclineSitups.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.NoWeight,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 9,
                                exercises: [
                                    new Exercise({
                                        name: 'Cross Body Crunch',
                                        media: getMedia('CrossBodyCrunch.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.NoWeight,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 10,
                                exercises: [
                                    new Exercise({
                                        name: 'Lying Scissors Kicks',
                                        media: getMedia('LyingScissorsKicks.png'),
                                        theGrip: new Grip(),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.NoWeight,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ],
                            })
                        ]
                    }),
                    new WorkoutDay({
                        id: 4,
                        name: 'Lower Body',
                        exerciseSets: [
                            new ExerciseSet({
                                id: 1,
                                exercises: [
                                    new Exercise({
                                        name: 'Walking Lunge with Side Weights',
                                        media: getMedia('WalkingLungeWithSideWeights.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 2,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Abduction',
                                        media: getMedia('CableAbduction.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    }),
                                    new Exercise({
                                        name: 'Cable Adduction',
                                        media: getMedia('CableAdduction.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 4,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Leg Curl',
                                        media: getMedia('CableLegCurl.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 5,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Calf Raise',
                                        media: getMedia('CableCalfRaise.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 6,
                                exercises: [
                                    new Exercise({
                                        name: 'Bodyweight Flutter Kicks',
                                        media: getMedia('BodyweightFlutterKicks.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 7,
                                exercises: [
                                    new Exercise({
                                        name: 'Weighted Situps',
                                        media: getMedia('WeightedSitups.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 8,
                                exercises: [
                                    new Exercise({
                                        name: 'Plank',
                                        media: getMedia('Plank.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                seconds: 10
                                            }),
                                            new Rep({
                                                seconds: 10
                                            }),
                                            new Rep({
                                                seconds: 10
                                            }),
                                        ],
                                        restBetweenReps: 5,
                                        restAfterExercise: 10
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 9,
                                exercises: [
                                    new Exercise({
                                        name: 'Twist',
                                        media: getMedia('Twist.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            })
                        ],
                    })
                ]
            }),
            new Workout({
                id: 2,
                name: 'Workout Set No. 2',
                description: '4 days including upper, lower and core muscles',
                days: [
                    new WorkoutDay({
                        id: 1,
                        name: 'Full Body',
                        exerciseSets: [
                            new ExerciseSet({
                                id: 1,
                                exercises: [
                                    new Exercise({
                                        name: 'Bench Press, Wide Grip',
                                        media: getMedia('BenchPressWideGrip.jpeg'),
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                            GripWidth.Wide,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Barbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 2,
                                exercises: [
                                    new Exercise({
                                        name: 'Seated Rope Cable Row',
                                        media: getMedia('SeatedRopeCableRow.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 3,
                                exercises: [
                                    new Exercise({
                                        name: 'Dumbbell Wrist Curl',
                                        media: getMedia('DumbbellWristCurl.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                            GripWidth.Normal,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 15
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 15
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 15
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 4,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Triceps Pushdown, Overhand Grip',
                                        media: getMedia('CableTricepsPushdownOverheadGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 5,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Biceps Curl, Underhand Grip',
                                        media: getMedia('CableBicepsCurlUnderhandGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Underhand
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                'weight': 50,
                                                'weightUnit': WeightUnit.Lbs,
                                                'times': 12
                                            }),
                                            new Rep({
                                                'weight': 50,
                                                'weightUnit': WeightUnit.Lbs,
                                                'times': 12
                                            }),
                                            new Rep({
                                                'weight': 50,
                                                'weightUnit': WeightUnit.Lbs,
                                                'times': 12
                                            }),
                                            new Rep({
                                                'weight': 50,
                                                'weightUnit': WeightUnit.Lbs,
                                                'times': 12
                                            })
                                        ],
                                        'restBetweenReps': 20,
                                        'restAfterExercise': 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 6,
                                exercises: [
                                    new Exercise({
                                        name: 'Leg Raise Machine',
                                        media: getMedia('LegRaiseMachine.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 80,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 80,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 80,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 80,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 7,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Leg Curl',
                                        media: getMedia('CableLegCurl.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 8,
                                exercises: [
                                    new Exercise({
                                        name: 'Crossfit Situps',
                                        media: getMedia('CrossfitSitup.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 9,
                                exercises: [
                                    new Exercise({
                                        name: 'Cross Body Crunch',
                                        media: getMedia('CrossBodyCrunch.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.NoWeight,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            })
                        ],
                    }),
                    new WorkoutDay({
                        id: 2,
                        name: 'Upper Body 1',
                        exerciseSets: [
                            new ExerciseSet({
                                id: 1,
                                exercises: [
                                    new Exercise({
                                        name: 'Bench Press, Narrow Grip',
                                        media: getMedia('BenchPressNarrowGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                            GripWidth.Narrow
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Barbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    }),
                                    new Exercise({
                                        name: 'Dumbbell Bench Press, Rotating Grip',
                                        media: getMedia('DumbbellBenshPressRotatingGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                            GripWidth.Normal
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    }),
                                    new Exercise({
                                        name: 'Dumbbell Bench Press, Rotating Grip',
                                        media: getMedia('DumbbellBenshPressRotatingGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                            GripWidth.Normal,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 3,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Fly',
                                        media: getMedia('CableFly.png'),
                                        theGrip: new Grip(
                                            GripType.Underhand,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 4,
                                exercises: [
                                    new Exercise({
                                        name: 'Dumbbell Fly',
                                        media: getMedia('DumbbellFly.png'),
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 5,
                                exercises: [
                                    new Exercise({
                                        name: 'Dumbbell Horizontal Row, Inclined Prone',
                                        media: getMedia('DumbbellHorizontalRowInclineProne.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 6,
                                exercises: [
                                    new Exercise({
                                        name: 'Dumbbell Tricpes Extensions, Seated',
                                        media: getMedia('DumbbellTricepsExtensionSeated.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 7,
                                exercises: [
                                    new Exercise({
                                        name: 'Inclined Pushup, Narrow Grip',
                                        media: getMedia('InclinePushupNarrowGrip.jpg'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                            GripWidth.Narrow,
                                        ),
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 10
                                            }),
                                            new Rep({
                                                times: 10
                                            }),
                                            new Rep({
                                                times: 10
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 8,
                                exercises: [
                                    new Exercise({
                                        name: 'Reverse Cable Fly, On Flat Bench',
                                        media: getMedia('ReverseCableFlyOnFlatBench.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 55,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 55,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 55,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 9,
                                exercises: [
                                    new Exercise({
                                        name: 'Situps',
                                        media: getMedia('Situps.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 10,
                                exercises: [
                                    new Exercise({
                                        name: 'Situps with Weight Above Head',
                                        media: getMedia('SitupsWithWeightAboveHead.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 11,
                                exercises: [
                                    new Exercise({
                                        name: 'Russian Twist',
                                        media: getMedia('RussianTwist.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            })
                        ],
                    }),
                    new WorkoutDay({
                        id: 3,
                        name: 'Upper Body 2',
                        exerciseSets: [
                            new ExerciseSet({
                                id: 1,
                                exercises: [
                                    new Exercise({
                                        name: 'Cabel Lat Pulldown, Behind Neck Wide Grip',
                                        media: getMedia('CabelLatPulldownBehindNeckWideGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                            GripWidth.Wide,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    }),
                                    new Exercise({
                                        name: 'Decline Dumbbell Pullover',
                                        media: getMedia('DeclineDumbbellPullover.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                            GripWidth.Wide,
                                        ),
                                        typeOfWeight: WeightType.Dumbbell,
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 3,
                                exercises: [
                                    new Exercise({
                                        name: 'Dumbbell Arm Circles',
                                        media: getMedia('DumbbellArmCircles.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                        ),
                                        typeOfWeight: WeightType.Dumbbell,
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 4,
                                exercises: [
                                    new Exercise({
                                        name: 'Machine Row Medium Grip',
                                        media: getMedia('MachineRowMediumGrip.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 5,
                                exercises: [
                                    new Exercise({
                                        name: 'Dummbell Biceps Curl Standing Underhand Grip',
                                        media: getMedia('DummbellBicepsCurlStandingUnderhandGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Underhand,
                                        ),
                                        typeOfWeight: WeightType.Dumbbell,
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 6,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Shrug',
                                        media: getMedia('CableShrug.png'),
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                            GripWidth.Normal,
                                        ),
                                        typeOfWeight: WeightType.Dumbbell,
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 7,
                                exercises: [
                                    new Exercise({
                                        name: 'Dragon Flags',
                                        media: getMedia('DragonFlags.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 8,
                                exercises: [
                                    new Exercise({
                                        name: 'Decline Situps',
                                        media: getMedia('DeclineSitups.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.NoWeight,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 9,
                                exercises: [
                                    new Exercise({
                                        name: 'Cross Body Crunch',
                                        media: getMedia('CrossBodyCrunch.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.NoWeight,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 10,
                                exercises: [
                                    new Exercise({
                                        name: 'Lying Scissors Kicks',
                                        media: getMedia('LyingScissorsKicks.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.NoWeight,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ],
                            })
                        ]
                    }),
                    new WorkoutDay({
                        id: 4,
                        name: 'Lower Body',
                        exerciseSets: [
                            new ExerciseSet({
                                id: 1,
                                exercises: [
                                    new Exercise({
                                        name: 'Walking Lunge with Side Weights',
                                        media: getMedia('WalkingLungeWithSideWeights.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 2,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Abduction',
                                        media: getMedia('CableAbduction.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    }),
                                    new Exercise({
                                        name: 'Cable Adduction',
                                        media: getMedia('CableAdduction.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 4,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Leg Curl',
                                        media: getMedia('CableLegCurl.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 5,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Calf Raise',
                                        media: getMedia('CableCalfRaise.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 6,
                                exercises: [
                                    new Exercise({
                                        name: 'Bodyweight Flutter Kicks',
                                        media: getMedia('BodyweightFlutterKicks.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 7,
                                exercises: [
                                    new Exercise({
                                        name: 'Weighted Situps',
                                        media: getMedia('WeightedSitups.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 8,
                                exercises: [
                                    new Exercise({
                                        name: 'Plank',
                                        media: getMedia('Plank.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                seconds: 10
                                            }),
                                            new Rep({
                                                seconds: 10
                                            }),
                                            new Rep({
                                                seconds: 10
                                            }),
                                        ],
                                        restBetweenReps: 5,
                                        restAfterExercise: 10
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 9,
                                exercises: [
                                    new Exercise({
                                        name: 'Twist',
                                        media: getMedia('Twist.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            })
                        ],
                    })
                ]
            }),
            new Workout({
                id: 3,
                name: 'Workout Set No. 3',
                description: '4 days including upper, lower and core muscles',
                days: [
                    new WorkoutDay({
                        id: 1,
                        name: 'Full Body',
                        exerciseSets: [
                            new ExerciseSet({
                                id: 1,
                                exercises: [
                                    new Exercise({
                                        name: 'Bench Press, Wide Grip',
                                        media: getMedia('BenchPressWideGrip.jpeg'),
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                            GripWidth.Wide,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Barbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 2,
                                exercises: [
                                    new Exercise({
                                        name: 'Seated Rope Cable Row',
                                        media: getMedia('SeatedRopeCableRow.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 3,
                                exercises: [
                                    new Exercise({
                                        name: 'Dumbbell Wrist Curl',
                                        media: getMedia('DumbbellWristCurl.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                            GripWidth.Normal,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 15
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 15
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 15
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 4,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Triceps Pushdown, Overhand Grip',
                                        media: getMedia('CableTricepsPushdownOverheadGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 5,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Biceps Curl, Underhand Grip',
                                        media: getMedia('CableBicepsCurlUnderhandGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Underhand
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                'weight': 50,
                                                'weightUnit': WeightUnit.Lbs,
                                                'times': 12
                                            }),
                                            new Rep({
                                                'weight': 50,
                                                'weightUnit': WeightUnit.Lbs,
                                                'times': 12
                                            }),
                                            new Rep({
                                                'weight': 50,
                                                'weightUnit': WeightUnit.Lbs,
                                                'times': 12
                                            }),
                                            new Rep({
                                                'weight': 50,
                                                'weightUnit': WeightUnit.Lbs,
                                                'times': 12
                                            })
                                        ],
                                        'restBetweenReps': 20,
                                        'restAfterExercise': 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 6,
                                exercises: [
                                    new Exercise({
                                        name: 'Leg Raise Machine',
                                        media: getMedia('LegRaiseMachine.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 80,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 80,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 80,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 80,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 7,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Leg Curl',
                                        media: getMedia('CableLegCurl.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 8,
                                exercises: [
                                    new Exercise({
                                        name: 'Crossfit Situps',
                                        media: getMedia('CrossfitSitup.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 9,
                                exercises: [
                                    new Exercise({
                                        name: 'Cross Body Crunch',
                                        media: getMedia('CrossBodyCrunch.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.NoWeight,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            })
                        ],
                    }),
                    new WorkoutDay({
                        id: 2,
                        name: 'Upper Body 1',
                        exerciseSets: [
                            new ExerciseSet({
                                id: 1,
                                exercises: [
                                    new Exercise({
                                        name: 'Bench Press, Narrow Grip',
                                        media: getMedia('BenchPressNarrowGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                            GripWidth.Narrow
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Barbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    }),
                                    new Exercise({
                                        name: 'Dumbbell Bench Press, Rotating Grip',
                                        media: getMedia('DumbbellBenshPressRotatingGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                            GripWidth.Normal
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    }),
                                    new Exercise({
                                        name: 'Dumbbell Bench Press, Rotating Grip',
                                        media: getMedia('DumbbellBenshPressRotatingGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                            GripWidth.Normal,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 3,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Fly',
                                        media: getMedia('CableFly.png'),
                                        theGrip: new Grip(
                                            GripType.Underhand,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 4,
                                exercises: [
                                    new Exercise({
                                        name: 'Dumbbell Fly',
                                        media: getMedia('DumbbellFly.png'),
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 5,
                                exercises: [
                                    new Exercise({
                                        name: 'Dumbbell Horizontal Row, Inclined Prone',
                                        media: getMedia('DumbbellHorizontalRowInclineProne.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 6,
                                exercises: [
                                    new Exercise({
                                        name: 'Dumbbell Tricpes Extensions, Seated',
                                        media: getMedia('DumbbellTricepsExtensionSeated.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 7,
                                exercises: [
                                    new Exercise({
                                        name: 'Inclined Pushup, Narrow Grip',
                                        media: getMedia('InclinePushupNarrowGrip.jpg'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                            GripWidth.Narrow,
                                        ),
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 10
                                            }),
                                            new Rep({
                                                times: 10
                                            }),
                                            new Rep({
                                                times: 10
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 8,
                                exercises: [
                                    new Exercise({
                                        name: 'Reverse Cable Fly, On Flat Bench',
                                        media: getMedia('ReverseCableFlyOnFlatBench.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 55,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 55,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 55,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 9,
                                exercises: [
                                    new Exercise({
                                        name: 'Situps',
                                        media: getMedia('Situps.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 10,
                                exercises: [
                                    new Exercise({
                                        name: 'Situps with Weight Above Head',
                                        media: getMedia('SitupsWithWeightAboveHead.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 11,
                                exercises: [
                                    new Exercise({
                                        name: 'Russian Twist',
                                        media: getMedia('RussianTwist.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            })
                        ],
                    }),
                    new WorkoutDay({
                        id: 3,
                        name: 'Upper Body 2',
                        exerciseSets: [
                            new ExerciseSet({
                                id: 1,
                                exercises: [
                                    new Exercise({
                                        name: 'Cabel Lat Pulldown, Behind Neck Wide Grip',
                                        media: getMedia('CabelLatPulldownBehindNeckWideGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                            GripWidth.Wide,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    }),
                                    new Exercise({
                                        name: 'Decline Dumbbell Pullover',
                                        media: getMedia('DeclineDumbbellPullover.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                            GripWidth.Wide,
                                        ),
                                        typeOfWeight: WeightType.Dumbbell,
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 3,
                                exercises: [
                                    new Exercise({
                                        name: 'Dumbbell Arm Circles',
                                        media: getMedia('DumbbellArmCircles.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                        ),
                                        typeOfWeight: WeightType.Dumbbell,
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 4,
                                exercises: [
                                    new Exercise({
                                        name: 'Machine Row Medium Grip',
                                        media: getMedia('MachineRowMediumGrip.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 5,
                                exercises: [
                                    new Exercise({
                                        name: 'Dummbell Biceps Curl Standing Underhand Grip',
                                        media: getMedia('DummbellBicepsCurlStandingUnderhandGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Underhand,
                                        ),
                                        typeOfWeight: WeightType.Dumbbell,
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 6,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Shrug',
                                        media: getMedia('CableShrug.png'),
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                            GripWidth.Normal,
                                        ),
                                        typeOfWeight: WeightType.Dumbbell,
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 7,
                                exercises: [
                                    new Exercise({
                                        name: 'Dragon Flags',
                                        media: getMedia('DragonFlags.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 8,
                                exercises: [
                                    new Exercise({
                                        name: 'Decline Situps',
                                        media: getMedia('DeclineSitups.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.NoWeight,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 9,
                                exercises: [
                                    new Exercise({
                                        name: 'Cross Body Crunch',
                                        media: getMedia('CrossBodyCrunch.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.NoWeight,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 10,
                                exercises: [
                                    new Exercise({
                                        name: 'Lying Scissors Kicks',
                                        media: getMedia('LyingScissorsKicks.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.NoWeight,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ],
                            })
                        ]
                    }),
                    new WorkoutDay({
                        id: 4,
                        name: 'Lower Body',
                        exerciseSets: [
                            new ExerciseSet({
                                id: 1,
                                exercises: [
                                    new Exercise({
                                        name: 'Walking Lunge with Side Weights',
                                        media: getMedia('WalkingLungeWithSideWeights.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 2,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Abduction',
                                        media: getMedia('CableAbduction.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    }),
                                    new Exercise({
                                        name: 'Cable Adduction',
                                        media: getMedia('CableAdduction.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 4,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Leg Curl',
                                        media: getMedia('CableLegCurl.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 5,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Calf Raise',
                                        media: getMedia('CableCalfRaise.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 6,
                                exercises: [
                                    new Exercise({
                                        name: 'Bodyweight Flutter Kicks',
                                        media: getMedia('BodyweightFlutterKicks.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 7,
                                exercises: [
                                    new Exercise({
                                        name: 'Weighted Situps',
                                        media: getMedia('WeightedSitups.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 8,
                                exercises: [
                                    new Exercise({
                                        name: 'Plank',
                                        media: getMedia('Plank.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                seconds: 10
                                            }),
                                            new Rep({
                                                seconds: 10
                                            }),
                                            new Rep({
                                                seconds: 10
                                            }),
                                        ],
                                        restBetweenReps: 5,
                                        restAfterExercise: 10
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 9,
                                exercises: [
                                    new Exercise({
                                        name: 'Twist',
                                        media: getMedia('Twist.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            })
                        ],
                    })
                ]
            }),
            new Workout({
                id: 4,
                name: 'Workout Set No. 4',
                description: '4 days including upper, lower and core muscles',
                days: [
                    new WorkoutDay({
                        id: 4,
                        name: 'Full Body',
                        exerciseSets: [
                            new ExerciseSet({
                                id: 1,
                                exercises: [
                                    new Exercise({
                                        name: 'Bench Press, Wide Grip',
                                        media: getMedia('BenchPressWideGrip.jpeg'),
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                            GripWidth.Wide,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Barbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 2,
                                exercises: [
                                    new Exercise({
                                        name: 'Seated Rope Cable Row',
                                        media: getMedia('SeatedRopeCableRow.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 3,
                                exercises: [
                                    new Exercise({
                                        name: 'Dumbbell Wrist Curl',
                                        media: getMedia('DumbbellWristCurl.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                            GripWidth.Normal,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 15
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 15
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 15
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 4,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Triceps Pushdown, Overhand Grip',
                                        media: getMedia('CableTricepsPushdownOverheadGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 5,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Biceps Curl, Underhand Grip',
                                        media: getMedia('CableBicepsCurlUnderhandGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Underhand
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                'weight': 50,
                                                'weightUnit': WeightUnit.Lbs,
                                                'times': 12
                                            }),
                                            new Rep({
                                                'weight': 50,
                                                'weightUnit': WeightUnit.Lbs,
                                                'times': 12
                                            }),
                                            new Rep({
                                                'weight': 50,
                                                'weightUnit': WeightUnit.Lbs,
                                                'times': 12
                                            }),
                                            new Rep({
                                                'weight': 50,
                                                'weightUnit': WeightUnit.Lbs,
                                                'times': 12
                                            })
                                        ],
                                        'restBetweenReps': 20,
                                        'restAfterExercise': 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 6,
                                exercises: [
                                    new Exercise({
                                        name: 'Leg Raise Machine',
                                        media: getMedia('LegRaiseMachine.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 80,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 80,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 80,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 80,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 7,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Leg Curl',
                                        media: getMedia('CableLegCurl.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 8,
                                exercises: [
                                    new Exercise({
                                        name: 'Crossfit Situps',
                                        media: getMedia('CrossfitSitup.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 9,
                                exercises: [
                                    new Exercise({
                                        name: 'Cross Body Crunch',
                                        media: getMedia('CrossBodyCrunch.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.NoWeight,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            })
                        ],
                    }),
                    new WorkoutDay({
                        id: 2,
                        name: 'Upper Body 1',
                        exerciseSets: [
                            new ExerciseSet({
                                id: 1,
                                exercises: [
                                    new Exercise({
                                        name: 'Bench Press, Narrow Grip',
                                        media: getMedia('BenchPressNarrowGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                            GripWidth.Narrow
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Barbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    }),
                                    new Exercise({
                                        name: 'Dumbbell Bench Press, Rotating Grip',
                                        media: getMedia('DumbbellBenshPressRotatingGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                            GripWidth.Normal
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    }),
                                    new Exercise({
                                        name: 'Dumbbell Bench Press, Rotating Grip',
                                        media: getMedia('DumbbellBenshPressRotatingGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                            GripWidth.Normal,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 10
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 3,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Fly',
                                        media: getMedia('CableFly.png'),
                                        theGrip: new Grip(
                                            GripType.Underhand,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 60,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 4,
                                exercises: [
                                    new Exercise({
                                        name: 'Dumbbell Fly',
                                        media: getMedia('DumbbellFly.png'),
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 5,
                                exercises: [
                                    new Exercise({
                                        name: 'Dumbbell Horizontal Row, Inclined Prone',
                                        media: getMedia('DumbbellHorizontalRowInclineProne.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 6,
                                exercises: [
                                    new Exercise({
                                        name: 'Dumbbell Tricpes Extensions, Seated',
                                        media: getMedia('DumbbellTricepsExtensionSeated.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 7,
                                exercises: [
                                    new Exercise({
                                        name: 'Inclined Pushup, Narrow Grip',
                                        media: getMedia('InclinePushupNarrowGrip.jpg'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                            GripWidth.Narrow,
                                        ),
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 10
                                            }),
                                            new Rep({
                                                times: 10
                                            }),
                                            new Rep({
                                                times: 10
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 8,
                                exercises: [
                                    new Exercise({
                                        name: 'Reverse Cable Fly, On Flat Bench',
                                        media: getMedia('ReverseCableFlyOnFlatBench.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 55,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 55,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 55,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 9,
                                exercises: [
                                    new Exercise({
                                        name: 'Situps',
                                        media: getMedia('Situps.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 10,
                                exercises: [
                                    new Exercise({
                                        name: 'Situps with Weight Above Head',
                                        media: getMedia('SitupsWithWeightAboveHead.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 11,
                                exercises: [
                                    new Exercise({
                                        name: 'Russian Twist',
                                        media: getMedia('RussianTwist.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            })
                        ],
                    }),
                    new WorkoutDay({
                        id: 3,
                        name: 'Upper Body 2',
                        exerciseSets: [
                            new ExerciseSet({
                                id: 1,
                                exercises: [
                                    new Exercise({
                                        name: 'Cabel Lat Pulldown, Behind Neck Wide Grip',
                                        media: getMedia('CabelLatPulldownBehindNeckWideGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                            GripWidth.Wide,
                                        ),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 90,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    }),
                                    new Exercise({
                                        name: 'Decline Dumbbell Pullover',
                                        media: getMedia('DeclineDumbbellPullover.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                            GripWidth.Wide,
                                        ),
                                        typeOfWeight: WeightType.Dumbbell,
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 3,
                                exercises: [
                                    new Exercise({
                                        name: 'Dumbbell Arm Circles',
                                        media: getMedia('DumbbellArmCircles.png'),
                                        theGrip: new Grip(
                                            GripType.Overhand,
                                        ),
                                        typeOfWeight: WeightType.Dumbbell,
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 10,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 4,
                                exercises: [
                                    new Exercise({
                                        name: 'Machine Row Medium Grip',
                                        media: getMedia('MachineRowMediumGrip.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 85,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 5,
                                exercises: [
                                    new Exercise({
                                        name: 'Dummbell Biceps Curl Standing Underhand Grip',
                                        media: getMedia('DummbellBicepsCurlStandingUnderhandGrip.png'),
                                        theGrip: new Grip(
                                            GripType.Underhand,
                                        ),
                                        typeOfWeight: WeightType.Dumbbell,
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 15,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 6,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Shrug',
                                        media: getMedia('CableShrug.png'),
                                        theGrip: new Grip(
                                            GripType.Neutral,
                                            GripWidth.Normal,
                                        ),
                                        typeOfWeight: WeightType.Dumbbell,
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 95,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 7,
                                exercises: [
                                    new Exercise({
                                        name: 'Dragon Flags',
                                        media: getMedia('DragonFlags.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 8,
                                exercises: [
                                    new Exercise({
                                        name: 'Decline Situps',
                                        media: getMedia('DeclineSitups.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.NoWeight,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 9,
                                exercises: [
                                    new Exercise({
                                        name: 'Cross Body Crunch',
                                        media: getMedia('CrossBodyCrunch.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.NoWeight,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 10,
                                exercises: [
                                    new Exercise({
                                        name: 'Lying Scissors Kicks',
                                        media: getMedia('LyingScissorsKicks.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.NoWeight,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            }),
                                            new Rep({
                                                times: 15
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ],
                            })
                        ]
                    }),
                    new WorkoutDay({
                        id: 1,
                        name: 'Lower Body',
                        exerciseSets: [
                            new ExerciseSet({
                                id: 1,
                                exercises: [
                                    new Exercise({
                                        name: 'Walking Lunge with Side Weights',
                                        media: getMedia('WalkingLungeWithSideWeights.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        typeOfWeight: WeightType.Dumbbell,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 2,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Abduction',
                                        media: getMedia('CableAbduction.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    }),
                                    new Exercise({
                                        name: 'Cable Adduction',
                                        media: getMedia('CableAdduction.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 4,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Leg Curl',
                                        media: getMedia('CableLegCurl.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 50,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 5,
                                exercises: [
                                    new Exercise({
                                        name: 'Cable Calf Raise',
                                        media: getMedia('CableCalfRaise.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 70,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 6,
                                exercises: [
                                    new Exercise({
                                        name: 'Bodyweight Flutter Kicks',
                                        media: getMedia('BodyweightFlutterKicks.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 7,
                                exercises: [
                                    new Exercise({
                                        name: 'Weighted Situps',
                                        media: getMedia('WeightedSitups.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            }),
                                            new Rep({
                                                weight: 25,
                                                weightUnit: WeightUnit.Lbs,
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 8,
                                exercises: [
                                    new Exercise({
                                        name: 'Plank',
                                        media: getMedia('Plank.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,

                                        reps: [
                                            new Rep({
                                                seconds: 10
                                            }),
                                            new Rep({
                                                seconds: 10
                                            }),
                                            new Rep({
                                                seconds: 10
                                            }),
                                        ],
                                        restBetweenReps: 5,
                                        restAfterExercise: 10
                                    })
                                ]
                            }),
                            new ExerciseSet({
                                id: 9,
                                exercises: [
                                    new Exercise({
                                        name: 'Twist',
                                        media: getMedia('Twist.png'),
                                        repSpeed: RepetitionSpeed.OneOne,
                                        isFavorite: false,
                                        reps: [
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            }),
                                            new Rep({
                                                times: 12
                                            })
                                        ],
                                        restBetweenReps: 20,
                                        restAfterExercise: 20
                                    })
                                ]
                            })
                        ],
                    })
                ]
            })
        ]
    })
);
