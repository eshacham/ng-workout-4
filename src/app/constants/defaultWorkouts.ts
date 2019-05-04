
import {
    GripType,
    GripWidth,
    RepetitionSpeed,
    WeightType,
    WeightUnit } from '../models/enums';

export const json = { workouts: [{
        'id': 1,
        'name': 'Workout Set Mo 1',
        'description': '4 days including upper, lower and core muscles',
        'days': [
            {
                'id': 4,
                'name': 'Full Body',
                'exerciseSets': [
                    {
                        'id': 1,
                        'exercises': [
                            {
                                'name': 'Bench Press, Wide Grip',
                                'imageUrl': 'assets/images/BenchPressWideGrip.jpeg',
                                'grip': {
                                    'type': 'N/A',
                                    'width': GripWidth.Wide,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'weightType': WeightType.Barbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 2,
                        'exercises': [
                            {
                                'name': 'Seated Rope Cable Row',
                                'imageUrl': 'assets/images/SeatedRopeCableRow.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 3,
                        'exercises': [
                            {
                                'name': 'Dumbbell Wrist Curl',
                                'imageUrl': 'assets/images/DumbbellWristCurl.png',
                                grip: {
                                    type: GripType.Overhand,
                                    width: GripWidth.Normal,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 15
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 15
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 15
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 4,
                        'exercises': [
                            {
                                'name': 'Cable Triceps Pushdown, Overhand Grip',
                                'imageUrl': 'assets/images/CableTricepsPushdownOverheadGrip.png',
                                grip: {
                                    type: GripType.Overhand,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 5,
                        'exercises': [
                            {
                                'name': 'Cable Biceps Curl, Underhand Grip',
                                'imageUrl': 'assets/images/CableBicepsCurlUnderhandGrip.png',
                                grip: {
                                    type: GripType.Underhand,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 6,
                        'exercises': [
                            {
                                'name': 'Leg Raise Machine',
                                'imageUrl': 'assets/images/LegRaiseMachine.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 80,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 80,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 80,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 80,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 7,
                        'exercises': [
                            {
                                'name': 'Cable Leg Curl',
                                'imageUrl': 'assets/images/CableLegCurl.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 8,
                        'exercises': [
                            {
                                'name': 'Crossfit Situps',
                                'imageUrl': 'assets/images/CrossfitSitup.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 9,
                        'exercises': [
                            {
                                'name': 'Cross Body Crunch',
                                'imageUrl': 'assets/images/CrossBodyCrunch.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.NoWeight,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    }
                ],
            },
            {
                'id': 2,
                'name': 'Upper Body 1',
                'exerciseSets': [
                    {
                        'id': 1,
                        'exercises': [
                            {
                                'name': 'Bench Press, Narrow Grip',
                                'imageUrl': 'assets/images/BenchPressNarrowGrip.png',
                                grip: {
                                    type: GripType.Overhand,
                                    width: GripWidth.Narrow,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Barbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            },
                            {
                                'id': 2,
                                'name': 'Dumbbell Bench Press, Rotating Grip',
                                'imageUrl': 'assets/images/DumbbellBenshPressRotatingGrip.png',
                                grip: {
                                    type: GripType.Neutral,
                                    width: GripWidth.Normal,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            },
                            {
                                'id': 3,
                                'name': 'Dumbbell Bench Press, Rotating Grip',
                                'imageUrl': 'assets/images/DumbbellBenshPressRotatingGrip.png',
                                grip: {
                                    type: GripType.Neutral,
                                    width: GripWidth.Normal,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 3,
                        'exercises': [
                            {
                                'name': 'Cable Fly',
                                'imageUrl': 'assets/images/CableFly.png',
                                grip: {
                                    type: GripType.Underhand,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 4,
                        'exercises': [
                            {
                                'name': 'Dumbbell Fly',
                                'imageUrl': 'assets/images/DumbbellFly.png',
                                grip: {
                                    type: GripType.Neutral,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 5,
                        'exercises': [
                            {
                                'name': 'Dumbbell Horizontal Row, Inclined Prone',
                                'imageUrl': 'assets/images/DumbbellHorizontalRowInclineProne.png',
                                grip: {
                                    type: GripType.Overhand,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 6,
                        'exercises': [
                            {
                                'name': 'Dumbbell Tricpes Extensions, Seated',
                                'imageUrl': 'assets/images/DumbbellTricepsExtensionSeated.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 7,
                        'exercises': [
                            {
                                'name': 'Inclined Pushup, Narrow Grip',
                                'imageUrl': 'assets/images/InclinePushupNarrowGrip.jpg',
                                'repetition': RepetitionSpeed.OneOne,
                                grip: {
                                    width: GripWidth.Narrow,
                                },
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 10
                                    },
                                    {
                                        'times': 10
                                    },
                                    {
                                        'times': 10
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 8,
                        'exercises': [
                            {
                                'name': 'Reverse Cable Fly, On Flat Bench',
                                'imageUrl': 'assets/images/ReverseCableFlyOnFlatBench.png',
                                grip: {
                                    type: GripType.Overhand,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 55,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 55,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 55,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 9,
                        'exercises': [
                            {
                                'name': 'Situps',
                                'imageUrl': 'assets/images/Situps.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 10,
                        'exercises': [
                            {
                                'name': 'Situps with Weight Above Head',
                                'imageUrl': 'assets/images/SitupsWithWeightAboveHead.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 11,
                        'exercises': [
                            {
                                'name': 'Russian Twist',
                                'imageUrl': 'assets/images/RussianTwist.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    }
                ],
            },
            {
                'id': 3,
                'name': 'Upper Body 2',
                'exerciseSets': [
                    {
                        'id': 1,
                        'exercises': [
                            {
                                'name': 'Cabel Lat Pulldown, Behind Neck Wide Grip',
                                'imageUrl': 'assets/images/CabelLatPulldownBehindNeckWideGrip.png',
                                grip: {
                                    type: GripType.Overhand,
                                    width: GripWidth.Wide,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            },
                            {
                                'id': 2,
                                'name': 'Decline Dumbbell Pullover',
                                'imageUrl': 'assets/images/DeclineDumbbellPullover.png',
                                grip: {
                                    type: GripType.Overhand,
                                    width: GripWidth.Wide,
                                },
                                weightType: WeightType.Dumbbell,
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 3,
                        'exercises': [
                            {
                                'name': 'Dumbbell Arm Circles',
                                'imageUrl': 'assets/images/DumbbellArmCircles.png',
                                grip: {
                                    type: GripType.Overhand,
                                },
                                weightType: WeightType.Dumbbell,
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 4,
                        'exercises': [
                            {
                                'name': 'Machine Row Medium Grip',
                                'imageUrl': 'assets/images/MachineRowMediumGrip.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 5,
                        'exercises': [
                            {
                                'name': 'Dummbell Biceps Curl Standing Underhand Grip',
                                'imageUrl': 'assets/images/DummbellBicepsCurlStandingUnderhandGrip.png',
                                grip: {
                                    type: GripType.Underhand,
                                },
                                weightType: WeightType.Dumbbell,
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 6,
                        'exercises': [
                            {
                                'name': 'Cable Shrug',
                                'imageUrl': 'assets/images/CableShrug.png',
                                grip: {
                                    width: GripWidth.Normal,
                                },
                                weightType: WeightType.Dumbbell,
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 7,
                        'exercises': [
                            {
                                'name': 'Dragon Flags',
                                'imageUrl': 'assets/images/DragonFlags.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 8,
                        'exercises': [
                            {
                                'name': 'Decline Situps',
                                'imageUrl': 'assets/images/DeclineSitups.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.NoWeight,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 9,
                        'exercises': [
                            {
                                'name': 'Cross Body Crunch',
                                'imageUrl': 'assets/images/CrossBodyCrunch.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.NoWeight,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 10,
                        'exercises': [
                            {
                                'name': 'Lying Scissors Kicks',
                                'imageUrl': 'assets/images/LyingScissorsKicks.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.NoWeight,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ],
                    }
                ]
            },
            {
                'id': 1,
                'name': 'Lower Body',
                'exerciseSets': [
                    {
                        'id': 1,
                        'exercises': [
                            {
                                'name': 'Walking Lunge with Side Weights',
                                'imageUrl': 'assets/images/WalkingLungeWithSideWeights.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 2,
                        'exercises': [
                            {
                                'name': 'Cable Abduction',
                                'imageUrl': 'assets/images/CableAbduction.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            },
                            {
                                'id': 3,
                                'name': 'Cable Adduction',
                                'imageUrl': 'assets/images/CableAdduction.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 4,
                        'exercises': [
                            {
                                'name': 'Cable Leg Curl',
                                'imageUrl': 'assets/images/CableLegCurl.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 5,
                        'exercises': [
                            {
                                'name': 'Cable Calf Raise',
                                'imageUrl': 'assets/images/CableCalfRaise.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 6,
                        'exercises': [
                            {
                                'name': 'Bodyweight Flutter Kicks',
                                'imageUrl': 'assets/images/BodyweightFlutterKicks.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 7,
                        'exercises': [
                            {
                                'name': 'Weighted Situps',
                                'imageUrl': 'assets/images/WeightedSitups.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 8,
                        'exercises': [
                            {
                                'name': 'Plank',
                                'imageUrl': 'assets/images/Plank.png',
                                'isFavorite': false,
                                'reps': [
                                    {
                                        seconds: 10
                                    },
                                    {
                                        seconds: 10
                                    },
                                    {
                                        seconds: 10
                                    },
                                ],
                                'restBetweenReps': 5,
                                'restAfterExercise': 10
                            }
                        ]
                    },
                    {
                        'id': 9,
                        'exercises': [
                            {
                                'name': 'Twist',
                                'imageUrl': 'assets/images/Twist.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    }
                ],
            }
        ]
    }, {
       'id': 2,
       'name': 'Workout Set Mo 2' ,
       'description': 'this is the description of the workout and should not be too long...',
       'days': [
        {
            'id': 4,
            'name': 'Full Body',
            'exerciseSets': [
                {
                    'id': 1,
                    'exercises': [
                        {
                            'name': 'Bench Press, Wide Grip',
                            'imageUrl': 'assets/images/BenchPressWideGrip.jpeg',
                            'grip': {
                                'type': 'N/A',
                                'width': GripWidth.Wide,
                            },
                            'repetition': RepetitionSpeed.OneOne,
                            'weightType': WeightType.Barbell,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 95,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 95,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 95,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 95,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 2,
                    'exercises': [
                        {
                            'name': 'Seated Rope Cable Row',
                            'imageUrl': 'assets/images/SeatedRopeCableRow.png',
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 95,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 95,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 95,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 3,
                    'exercises': [
                        {
                            'name': 'Dumbbell Wrist Curl',
                            'imageUrl': 'assets/images/DumbbellWristCurl.png',
                            grip: {
                                type: GripType.Overhand,
                                width: GripWidth.Normal,
                            },
                            'repetition': RepetitionSpeed.OneOne,
                            weightType: WeightType.Dumbbell,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 15,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 15
                                },
                                {
                                    'weight': 15,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 15
                                },
                                {
                                    'weight': 15,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 15
                                },
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 4,
                    'exercises': [
                        {
                            'name': 'Cable Triceps Pushdown, Overhand Grip',
                            'imageUrl': 'assets/images/CableTricepsPushdownOverheadGrip.png',
                            grip: {
                                type: GripType.Overhand,
                            },
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 70,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 70,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 70,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 70,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 5,
                    'exercises': [
                        {
                            'name': 'Cable Biceps Curl, Underhand Grip',
                            'imageUrl': 'assets/images/CableBicepsCurlUnderhandGrip.png',
                            grip: {
                                type: GripType.Underhand,
                            },
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 50,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 50,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 50,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 50,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 6,
                    'exercises': [
                        {
                            'name': 'Leg Raise Machine',
                            'imageUrl': 'assets/images/LegRaiseMachine.png',
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 80,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 80,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 80,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 80,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 7,
                    'exercises': [
                        {
                            'name': 'Cable Leg Curl',
                            'imageUrl': 'assets/images/CableLegCurl.png',
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 60,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 60,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 60,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 60,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 8,
                    'exercises': [
                        {
                            'name': 'Crossfit Situps',
                            'imageUrl': 'assets/images/CrossfitSitup.png',
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'times': 12
                                },
                                {
                                    'times': 12
                                },
                                {
                                    'times': 12
                                },
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 9,
                    'exercises': [
                        {
                            'name': 'Cross Body Crunch',
                            'imageUrl': 'assets/images/CrossBodyCrunch.png',
                            'repetition': RepetitionSpeed.OneOne,
                            weightType: WeightType.NoWeight,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'times': 15
                                },
                                {
                                    'times': 15
                                },
                                {
                                    'times': 15
                                },
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                }
            ],
        },
        {
            'id': 2,
            'name': 'Upper Body 1',
            'exerciseSets': [
                {
                    'id': 1,
                    'exercises': [
                        {
                            'name': 'Bench Press, Narrow Grip',
                            'imageUrl': 'assets/images/BenchPressNarrowGrip.png',
                            grip: {
                                type: GripType.Overhand,
                                width: GripWidth.Narrow,
                            },
                            'repetition': RepetitionSpeed.OneOne,
                            weightType: WeightType.Barbell,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 85,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 85,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 85,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        },
                        {
                            'id': 2,
                            'name': 'Dumbbell Bench Press, Rotating Grip',
                            'imageUrl': 'assets/images/DumbbellBenshPressRotatingGrip.png',
                            grip: {
                                type: GripType.Neutral,
                                width: GripWidth.Normal,
                            },
                            'repetition': RepetitionSpeed.OneOne,
                            weightType: WeightType.Dumbbell,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 90,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 10
                                },
                                {
                                    'weight': 90,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 10
                                },
                                {
                                    'weight': 90,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 10
                                },
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        },
                        {
                            'id': 3,
                            'name': 'Dumbbell Bench Press, Rotating Grip',
                            'imageUrl': 'assets/images/DumbbellBenshPressRotatingGrip.png',
                            grip: {
                                type: GripType.Neutral,
                                width: GripWidth.Normal,
                            },
                            'repetition': RepetitionSpeed.OneOne,
                            weightType: WeightType.Dumbbell,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 90,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 10
                                },
                                {
                                    'weight': 90,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 10
                                },
                                {
                                    'weight': 90,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 10
                                },
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 3,
                    'exercises': [
                        {
                            'name': 'Cable Fly',
                            'imageUrl': 'assets/images/CableFly.png',
                            grip: {
                                type: GripType.Underhand,
                            },
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 60,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 60,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 60,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 60,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 4,
                    'exercises': [
                        {
                            'name': 'Dumbbell Fly',
                            'imageUrl': 'assets/images/DumbbellFly.png',
                            grip: {
                                type: GripType.Neutral,
                            },
                            'repetition': RepetitionSpeed.OneOne,
                            weightType: WeightType.Dumbbell,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 15,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 15,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 15,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 5,
                    'exercises': [
                        {
                            'name': 'Dumbbell Horizontal Row, Inclined Prone',
                            'imageUrl': 'assets/images/DumbbellHorizontalRowInclineProne.png',
                            grip: {
                                type: GripType.Overhand,
                            },
                            'repetition': RepetitionSpeed.OneOne,
                            weightType: WeightType.Dumbbell,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 10,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 10,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 10,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 6,
                    'exercises': [
                        {
                            'name': 'Dumbbell Tricpes Extensions, Seated',
                            'imageUrl': 'assets/images/DumbbellTricepsExtensionSeated.png',
                            'repetition': RepetitionSpeed.OneOne,
                            weightType: WeightType.Dumbbell,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 25,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 25,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 25,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 7,
                    'exercises': [
                        {
                            'name': 'Inclined Pushup, Narrow Grip',
                            'imageUrl': 'assets/images/InclinePushupNarrowGrip.jpg',
                            'repetition': RepetitionSpeed.OneOne,
                            grip: {
                                width: GripWidth.Narrow,
                            },
                            'isFavorite': false,
                            'reps': [
                                {
                                    'times': 10
                                },
                                {
                                    'times': 10
                                },
                                {
                                    'times': 10
                                },
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 8,
                    'exercises': [
                        {
                            'name': 'Reverse Cable Fly, On Flat Bench',
                            'imageUrl': 'assets/images/ReverseCableFlyOnFlatBench.png',
                            grip: {
                                type: GripType.Overhand,
                            },
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 55,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 55,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 55,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 9,
                    'exercises': [
                        {
                            'name': 'Situps',
                            'imageUrl': 'assets/images/Situps.png',
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'times': 12
                                },
                                {
                                    'times': 12
                                },
                                {
                                    'times': 12
                                },
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 10,
                    'exercises': [
                        {
                            'name': 'Situps with Weight Above Head',
                            'imageUrl': 'assets/images/SitupsWithWeightAboveHead.png',
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 15,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 15,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 15,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 11,
                    'exercises': [
                        {
                            'name': 'Russian Twist',
                            'imageUrl': 'assets/images/RussianTwist.png',
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'times': 12
                                },
                                {
                                    'times': 12
                                },
                                {
                                    'times': 12
                                },
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                }
            ],
        },
        {
            'id': 3,
            'name': 'Upper Body 2',
            'exerciseSets': [
                {
                    'id': 1,
                    'exercises': [
                        {
                            'name': 'Cabel Lat Pulldown, Behind Neck Wide Grip',
                            'imageUrl': 'assets/images/CabelLatPulldownBehindNeckWideGrip.png',
                            grip: {
                                type: GripType.Overhand,
                                width: GripWidth.Wide,
                            },
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 90,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 90,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 90,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 90,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        },
                        {
                            'id': 2,
                            'name': 'Decline Dumbbell Pullover',
                            'imageUrl': 'assets/images/DeclineDumbbellPullover.png',
                            grip: {
                                type: GripType.Overhand,
                                width: GripWidth.Wide,
                            },
                            weightType: WeightType.Dumbbell,
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 25,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 25,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 25,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 25,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 3,
                    'exercises': [
                        {
                            'name': 'Dumbbell Arm Circles',
                            'imageUrl': 'assets/images/DumbbellArmCircles.png',
                            grip: {
                                type: GripType.Overhand,
                            },
                            weightType: WeightType.Dumbbell,
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 10,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 10,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 10,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 4,
                    'exercises': [
                        {
                            'name': 'Machine Row Medium Grip',
                            'imageUrl': 'assets/images/MachineRowMediumGrip.png',
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 85,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 85,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 85,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 5,
                    'exercises': [
                        {
                            'name': 'Dummbell Biceps Curl Standing Underhand Grip',
                            'imageUrl': 'assets/images/DummbellBicepsCurlStandingUnderhandGrip.png',
                            grip: {
                                type: GripType.Underhand,
                            },
                            weightType: WeightType.Dumbbell,
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 15,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 15,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 15,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 6,
                    'exercises': [
                        {
                            'name': 'Cable Shrug',
                            'imageUrl': 'assets/images/CableShrug.png',
                            grip: {
                                width: GripWidth.Normal,
                            },
                            weightType: WeightType.Dumbbell,
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 95,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 95,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 95,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 7,
                    'exercises': [
                        {
                            'name': 'Dragon Flags',
                            'imageUrl': 'assets/images/DragonFlags.png',
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'times': 12
                                },
                                {
                                    'times': 12
                                },
                                {
                                    'times': 12
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 8,
                    'exercises': [
                        {
                            'name': 'Decline Situps',
                            'imageUrl': 'assets/images/DeclineSitups.png',
                            'repetition': RepetitionSpeed.OneOne,
                            weightType: WeightType.NoWeight,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'times': 12
                                },
                                {
                                    'times': 12
                                },
                                {
                                    'times': 12
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 9,
                    'exercises': [
                        {
                            'name': 'Cross Body Crunch',
                            'imageUrl': 'assets/images/CrossBodyCrunch.png',
                            'repetition': RepetitionSpeed.OneOne,
                            weightType: WeightType.NoWeight,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'times': 15
                                },
                                {
                                    'times': 15
                                },
                                {
                                    'times': 15
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 10,
                    'exercises': [
                        {
                            'name': 'Lying Scissors Kicks',
                            'imageUrl': 'assets/images/LyingScissorsKicks.png',
                            'repetition': RepetitionSpeed.OneOne,
                            weightType: WeightType.NoWeight,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'times': 15
                                },
                                {
                                    'times': 15
                                },
                                {
                                    'times': 15
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ],
                }
            ]
        },
        {
            'id': 1,
            'name': 'Lower Body',
            'exerciseSets': [
                {
                    'id': 1,
                    'exercises': [
                        {
                            'name': 'Walking Lunge with Side Weights',
                            'imageUrl': 'assets/images/WalkingLungeWithSideWeights.png',
                            'repetition': RepetitionSpeed.OneOne,
                            weightType: WeightType.Dumbbell,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 25,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 25,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 25,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 2,
                    'exercises': [
                        {
                            'name': 'Cable Abduction',
                            'imageUrl': 'assets/images/CableAbduction.png',
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 50,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 50,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 50,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        },
                        {
                            'id': 3,
                            'name': 'Cable Adduction',
                            'imageUrl': 'assets/images/CableAdduction.png',
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 50,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 50,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 50,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 4,
                    'exercises': [
                        {
                            'name': 'Cable Leg Curl',
                            'imageUrl': 'assets/images/CableLegCurl.png',
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 50,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 50,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 50,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 5,
                    'exercises': [
                        {
                            'name': 'Cable Calf Raise',
                            'imageUrl': 'assets/images/CableCalfRaise.png',
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 70,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 70,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 70,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 6,
                    'exercises': [
                        {
                            'name': 'Bodyweight Flutter Kicks',
                            'imageUrl': 'assets/images/BodyweightFlutterKicks.png',
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'times': 12
                                },
                                {
                                    'times': 12
                                },
                                {
                                    'times': 12
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 7,
                    'exercises': [
                        {
                            'name': 'Weighted Situps',
                            'imageUrl': 'assets/images/WeightedSitups.png',
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'weight': 25,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 25,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                },
                                {
                                    'weight': 25,
                                    'weightUnit': WeightUnit.Lbs,
                                    'times': 12
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                },
                {
                    'id': 8,
                    'exercises': [
                        {
                            'name': 'Plank',
                            'imageUrl': 'assets/images/Plank.png',
                            'isFavorite': false,
                            'reps': [
                                {
                                    seconds: 10
                                },
                                {
                                    seconds: 10
                                },
                                {
                                    seconds: 10
                                },
                            ],
                            'restBetweenReps': 5,
                            'restAfterExercise': 10
                        }
                    ]
                },
                {
                    'id': 9,
                    'exercises': [
                        {
                            'name': 'Twist',
                            'imageUrl': 'assets/images/Twist.png',
                            'repetition': RepetitionSpeed.OneOne,
                            'isFavorite': false,
                            'reps': [
                                {
                                    'times': 12
                                },
                                {
                                    'times': 12
                                },
                                {
                                    'times': 12
                                }
                            ],
                            'restBetweenReps': 20,
                            'restAfterExercise': 20
                        }
                    ]
                }
            ],
        }
    ]
    }, {
        'id': 3,
        'name': 'Workout Set Mo 3' ,
        'description': 'this is the description # 2 of the workout and it\'s shorter.',
        'days': [
            {
                'id': 4,
                'name': 'Full Body',
                'exerciseSets': [
                    {
                        'id': 1,
                        'exercises': [
                            {
                                'name': 'Bench Press, Wide Grip',
                                'imageUrl': 'assets/images/BenchPressWideGrip.jpeg',
                                'grip': {
                                    'type': 'N/A',
                                    'width': GripWidth.Wide,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'weightType': WeightType.Barbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 2,
                        'exercises': [
                            {
                                'name': 'Seated Rope Cable Row',
                                'imageUrl': 'assets/images/SeatedRopeCableRow.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 3,
                        'exercises': [
                            {
                                'name': 'Dumbbell Wrist Curl',
                                'imageUrl': 'assets/images/DumbbellWristCurl.png',
                                grip: {
                                    type: GripType.Overhand,
                                    width: GripWidth.Normal,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 15
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 15
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 15
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 4,
                        'exercises': [
                            {
                                'name': 'Cable Triceps Pushdown, Overhand Grip',
                                'imageUrl': 'assets/images/CableTricepsPushdownOverheadGrip.png',
                                grip: {
                                    type: GripType.Overhand,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 5,
                        'exercises': [
                            {
                                'name': 'Cable Biceps Curl, Underhand Grip',
                                'imageUrl': 'assets/images/CableBicepsCurlUnderhandGrip.png',
                                grip: {
                                    type: GripType.Underhand,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 6,
                        'exercises': [
                            {
                                'name': 'Leg Raise Machine',
                                'imageUrl': 'assets/images/LegRaiseMachine.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 80,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 80,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 80,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 80,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 7,
                        'exercises': [
                            {
                                'name': 'Cable Leg Curl',
                                'imageUrl': 'assets/images/CableLegCurl.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 8,
                        'exercises': [
                            {
                                'name': 'Crossfit Situps',
                                'imageUrl': 'assets/images/CrossfitSitup.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 9,
                        'exercises': [
                            {
                                'name': 'Cross Body Crunch',
                                'imageUrl': 'assets/images/CrossBodyCrunch.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.NoWeight,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    }
                ],
            },
            {
                'id': 2,
                'name': 'Upper Body 1',
                'exerciseSets': [
                    {
                        'id': 1,
                        'exercises': [
                            {
                                'name': 'Bench Press, Narrow Grip',
                                'imageUrl': 'assets/images/BenchPressNarrowGrip.png',
                                grip: {
                                    type: GripType.Overhand,
                                    width: GripWidth.Narrow,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Barbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            },
                            {
                                'id': 2,
                                'name': 'Dumbbell Bench Press, Rotating Grip',
                                'imageUrl': 'assets/images/DumbbellBenshPressRotatingGrip.png',
                                grip: {
                                    type: GripType.Neutral,
                                    width: GripWidth.Normal,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            },
                            {
                                'id': 3,
                                'name': 'Dumbbell Bench Press, Rotating Grip',
                                'imageUrl': 'assets/images/DumbbellBenshPressRotatingGrip.png',
                                grip: {
                                    type: GripType.Neutral,
                                    width: GripWidth.Normal,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 3,
                        'exercises': [
                            {
                                'name': 'Cable Fly',
                                'imageUrl': 'assets/images/CableFly.png',
                                grip: {
                                    type: GripType.Underhand,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 4,
                        'exercises': [
                            {
                                'name': 'Dumbbell Fly',
                                'imageUrl': 'assets/images/DumbbellFly.png',
                                grip: {
                                    type: GripType.Neutral,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 5,
                        'exercises': [
                            {
                                'name': 'Dumbbell Horizontal Row, Inclined Prone',
                                'imageUrl': 'assets/images/DumbbellHorizontalRowInclineProne.png',
                                grip: {
                                    type: GripType.Overhand,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 6,
                        'exercises': [
                            {
                                'name': 'Dumbbell Tricpes Extensions, Seated',
                                'imageUrl': 'assets/images/DumbbellTricepsExtensionSeated.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 7,
                        'exercises': [
                            {
                                'name': 'Inclined Pushup, Narrow Grip',
                                'imageUrl': 'assets/images/InclinePushupNarrowGrip.jpg',
                                'repetition': RepetitionSpeed.OneOne,
                                grip: {
                                    width: GripWidth.Narrow,
                                },
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 10
                                    },
                                    {
                                        'times': 10
                                    },
                                    {
                                        'times': 10
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 8,
                        'exercises': [
                            {
                                'name': 'Reverse Cable Fly, On Flat Bench',
                                'imageUrl': 'assets/images/ReverseCableFlyOnFlatBench.png',
                                grip: {
                                    type: GripType.Overhand,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 55,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 55,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 55,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 9,
                        'exercises': [
                            {
                                'name': 'Situps',
                                'imageUrl': 'assets/images/Situps.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 10,
                        'exercises': [
                            {
                                'name': 'Situps with Weight Above Head',
                                'imageUrl': 'assets/images/SitupsWithWeightAboveHead.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 11,
                        'exercises': [
                            {
                                'name': 'Russian Twist',
                                'imageUrl': 'assets/images/RussianTwist.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    }
                ],
            },
            {
                'id': 3,
                'name': 'Upper Body 2',
                'exerciseSets': [
                    {
                        'id': 1,
                        'exercises': [
                            {
                                'name': 'Cabel Lat Pulldown, Behind Neck Wide Grip',
                                'imageUrl': 'assets/images/CabelLatPulldownBehindNeckWideGrip.png',
                                grip: {
                                    type: GripType.Overhand,
                                    width: GripWidth.Wide,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            },
                            {
                                'id': 2,
                                'name': 'Decline Dumbbell Pullover',
                                'imageUrl': 'assets/images/DeclineDumbbellPullover.png',
                                grip: {
                                    type: GripType.Overhand,
                                    width: GripWidth.Wide,
                                },
                                weightType: WeightType.Dumbbell,
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 3,
                        'exercises': [
                            {
                                'name': 'Dumbbell Arm Circles',
                                'imageUrl': 'assets/images/DumbbellArmCircles.png',
                                grip: {
                                    type: GripType.Overhand,
                                },
                                weightType: WeightType.Dumbbell,
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 4,
                        'exercises': [
                            {
                                'name': 'Machine Row Medium Grip',
                                'imageUrl': 'assets/images/MachineRowMediumGrip.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 5,
                        'exercises': [
                            {
                                'name': 'Dummbell Biceps Curl Standing Underhand Grip',
                                'imageUrl': 'assets/images/DummbellBicepsCurlStandingUnderhandGrip.png',
                                grip: {
                                    type: GripType.Underhand,
                                },
                                weightType: WeightType.Dumbbell,
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 6,
                        'exercises': [
                            {
                                'name': 'Cable Shrug',
                                'imageUrl': 'assets/images/CableShrug.png',
                                grip: {
                                    width: GripWidth.Normal,
                                },
                                weightType: WeightType.Dumbbell,
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 7,
                        'exercises': [
                            {
                                'name': 'Dragon Flags',
                                'imageUrl': 'assets/images/DragonFlags.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 8,
                        'exercises': [
                            {
                                'name': 'Decline Situps',
                                'imageUrl': 'assets/images/DeclineSitups.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.NoWeight,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 9,
                        'exercises': [
                            {
                                'name': 'Cross Body Crunch',
                                'imageUrl': 'assets/images/CrossBodyCrunch.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.NoWeight,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 10,
                        'exercises': [
                            {
                                'name': 'Lying Scissors Kicks',
                                'imageUrl': 'assets/images/LyingScissorsKicks.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.NoWeight,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ],
                    }
                ]
            },
            {
                'id': 1,
                'name': 'Lower Body',
                'exerciseSets': [
                    {
                        'id': 1,
                        'exercises': [
                            {
                                'name': 'Walking Lunge with Side Weights',
                                'imageUrl': 'assets/images/WalkingLungeWithSideWeights.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 2,
                        'exercises': [
                            {
                                'name': 'Cable Abduction',
                                'imageUrl': 'assets/images/CableAbduction.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            },
                            {
                                'id': 3,
                                'name': 'Cable Adduction',
                                'imageUrl': 'assets/images/CableAdduction.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 4,
                        'exercises': [
                            {
                                'name': 'Cable Leg Curl',
                                'imageUrl': 'assets/images/CableLegCurl.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 5,
                        'exercises': [
                            {
                                'name': 'Cable Calf Raise',
                                'imageUrl': 'assets/images/CableCalfRaise.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 6,
                        'exercises': [
                            {
                                'name': 'Bodyweight Flutter Kicks',
                                'imageUrl': 'assets/images/BodyweightFlutterKicks.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 7,
                        'exercises': [
                            {
                                'name': 'Weighted Situps',
                                'imageUrl': 'assets/images/WeightedSitups.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 8,
                        'exercises': [
                            {
                                'name': 'Plank',
                                'imageUrl': 'assets/images/Plank.png',
                                'isFavorite': false,
                                'reps': [
                                    {
                                        seconds: 10
                                    },
                                    {
                                        seconds: 10
                                    },
                                    {
                                        seconds: 10
                                    },
                                ],
                                'restBetweenReps': 5,
                                'restAfterExercise': 10
                            }
                        ]
                    },
                    {
                        'id': 9,
                        'exercises': [
                            {
                                'name': 'Twist',
                                'imageUrl': 'assets/images/Twist.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    }
                ],
            }
        ]
     }, {
        'id': 4,
        'name': 'Workout Set Mo 4' ,
        'description': 'this is the description # 2 of the workout and it\'s shorter.',
        'days': [
            {
                'id': 4,
                'name': 'Full Body',
                'exerciseSets': [
                    {
                        'id': 1,
                        'exercises': [
                            {
                                'name': 'Bench Press, Wide Grip',
                                'imageUrl': 'assets/images/BenchPressWideGrip.jpeg',
                                'grip': {
                                    'type': 'N/A',
                                    'width': GripWidth.Wide,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'weightType': WeightType.Barbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 2,
                        'exercises': [
                            {
                                'name': 'Seated Rope Cable Row',
                                'imageUrl': 'assets/images/SeatedRopeCableRow.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 3,
                        'exercises': [
                            {
                                'name': 'Dumbbell Wrist Curl',
                                'imageUrl': 'assets/images/DumbbellWristCurl.png',
                                grip: {
                                    type: GripType.Overhand,
                                    width: GripWidth.Normal,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 15
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 15
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 15
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 4,
                        'exercises': [
                            {
                                'name': 'Cable Triceps Pushdown, Overhand Grip',
                                'imageUrl': 'assets/images/CableTricepsPushdownOverheadGrip.png',
                                grip: {
                                    type: GripType.Overhand,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 5,
                        'exercises': [
                            {
                                'name': 'Cable Biceps Curl, Underhand Grip',
                                'imageUrl': 'assets/images/CableBicepsCurlUnderhandGrip.png',
                                grip: {
                                    type: GripType.Underhand,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 6,
                        'exercises': [
                            {
                                'name': 'Leg Raise Machine',
                                'imageUrl': 'assets/images/LegRaiseMachine.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 80,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 80,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 80,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 80,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 7,
                        'exercises': [
                            {
                                'name': 'Cable Leg Curl',
                                'imageUrl': 'assets/images/CableLegCurl.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 8,
                        'exercises': [
                            {
                                'name': 'Crossfit Situps',
                                'imageUrl': 'assets/images/CrossfitSitup.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 9,
                        'exercises': [
                            {
                                'name': 'Cross Body Crunch',
                                'imageUrl': 'assets/images/CrossBodyCrunch.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.NoWeight,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    }
                ],
            },
            {
                'id': 2,
                'name': 'Upper Body 1',
                'exerciseSets': [
                    {
                        'id': 1,
                        'exercises': [
                            {
                                'name': 'Bench Press, Narrow Grip',
                                'imageUrl': 'assets/images/BenchPressNarrowGrip.png',
                                grip: {
                                    type: GripType.Overhand,
                                    width: GripWidth.Narrow,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Barbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            },
                            {
                                'id': 2,
                                'name': 'Dumbbell Bench Press, Rotating Grip',
                                'imageUrl': 'assets/images/DumbbellBenshPressRotatingGrip.png',
                                grip: {
                                    type: GripType.Neutral,
                                    width: GripWidth.Normal,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            },
                            {
                                'id': 3,
                                'name': 'Dumbbell Bench Press, Rotating Grip',
                                'imageUrl': 'assets/images/DumbbellBenshPressRotatingGrip.png',
                                grip: {
                                    type: GripType.Neutral,
                                    width: GripWidth.Normal,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 10
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 3,
                        'exercises': [
                            {
                                'name': 'Cable Fly',
                                'imageUrl': 'assets/images/CableFly.png',
                                grip: {
                                    type: GripType.Underhand,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 60,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 4,
                        'exercises': [
                            {
                                'name': 'Dumbbell Fly',
                                'imageUrl': 'assets/images/DumbbellFly.png',
                                grip: {
                                    type: GripType.Neutral,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 5,
                        'exercises': [
                            {
                                'name': 'Dumbbell Horizontal Row, Inclined Prone',
                                'imageUrl': 'assets/images/DumbbellHorizontalRowInclineProne.png',
                                grip: {
                                    type: GripType.Overhand,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 6,
                        'exercises': [
                            {
                                'name': 'Dumbbell Tricpes Extensions, Seated',
                                'imageUrl': 'assets/images/DumbbellTricepsExtensionSeated.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 7,
                        'exercises': [
                            {
                                'name': 'Inclined Pushup, Narrow Grip',
                                'imageUrl': 'assets/images/InclinePushupNarrowGrip.jpg',
                                'repetition': RepetitionSpeed.OneOne,
                                grip: {
                                    width: GripWidth.Narrow,
                                },
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 10
                                    },
                                    {
                                        'times': 10
                                    },
                                    {
                                        'times': 10
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 8,
                        'exercises': [
                            {
                                'name': 'Reverse Cable Fly, On Flat Bench',
                                'imageUrl': 'assets/images/ReverseCableFlyOnFlatBench.png',
                                grip: {
                                    type: GripType.Overhand,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 55,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 55,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 55,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 9,
                        'exercises': [
                            {
                                'name': 'Situps',
                                'imageUrl': 'assets/images/Situps.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 10,
                        'exercises': [
                            {
                                'name': 'Situps with Weight Above Head',
                                'imageUrl': 'assets/images/SitupsWithWeightAboveHead.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 11,
                        'exercises': [
                            {
                                'name': 'Russian Twist',
                                'imageUrl': 'assets/images/RussianTwist.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    }
                ],
            },
            {
                'id': 3,
                'name': 'Upper Body 2',
                'exerciseSets': [
                    {
                        'id': 1,
                        'exercises': [
                            {
                                'name': 'Cabel Lat Pulldown, Behind Neck Wide Grip',
                                'imageUrl': 'assets/images/CabelLatPulldownBehindNeckWideGrip.png',
                                grip: {
                                    type: GripType.Overhand,
                                    width: GripWidth.Wide,
                                },
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 90,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            },
                            {
                                'id': 2,
                                'name': 'Decline Dumbbell Pullover',
                                'imageUrl': 'assets/images/DeclineDumbbellPullover.png',
                                grip: {
                                    type: GripType.Overhand,
                                    width: GripWidth.Wide,
                                },
                                weightType: WeightType.Dumbbell,
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 3,
                        'exercises': [
                            {
                                'name': 'Dumbbell Arm Circles',
                                'imageUrl': 'assets/images/DumbbellArmCircles.png',
                                grip: {
                                    type: GripType.Overhand,
                                },
                                weightType: WeightType.Dumbbell,
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 10,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 4,
                        'exercises': [
                            {
                                'name': 'Machine Row Medium Grip',
                                'imageUrl': 'assets/images/MachineRowMediumGrip.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 85,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 5,
                        'exercises': [
                            {
                                'name': 'Dummbell Biceps Curl Standing Underhand Grip',
                                'imageUrl': 'assets/images/DummbellBicepsCurlStandingUnderhandGrip.png',
                                grip: {
                                    type: GripType.Underhand,
                                },
                                weightType: WeightType.Dumbbell,
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 15,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 6,
                        'exercises': [
                            {
                                'name': 'Cable Shrug',
                                'imageUrl': 'assets/images/CableShrug.png',
                                grip: {
                                    width: GripWidth.Normal,
                                },
                                weightType: WeightType.Dumbbell,
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 95,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 7,
                        'exercises': [
                            {
                                'name': 'Dragon Flags',
                                'imageUrl': 'assets/images/DragonFlags.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 8,
                        'exercises': [
                            {
                                'name': 'Decline Situps',
                                'imageUrl': 'assets/images/DeclineSitups.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.NoWeight,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 9,
                        'exercises': [
                            {
                                'name': 'Cross Body Crunch',
                                'imageUrl': 'assets/images/CrossBodyCrunch.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.NoWeight,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 10,
                        'exercises': [
                            {
                                'name': 'Lying Scissors Kicks',
                                'imageUrl': 'assets/images/LyingScissorsKicks.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.NoWeight,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    },
                                    {
                                        'times': 15
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ],
                    }
                ]
            },
            {
                'id': 1,
                'name': 'Lower Body',
                'exerciseSets': [
                    {
                        'id': 1,
                        'exercises': [
                            {
                                'name': 'Walking Lunge with Side Weights',
                                'imageUrl': 'assets/images/WalkingLungeWithSideWeights.png',
                                'repetition': RepetitionSpeed.OneOne,
                                weightType: WeightType.Dumbbell,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 2,
                        'exercises': [
                            {
                                'name': 'Cable Abduction',
                                'imageUrl': 'assets/images/CableAbduction.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            },
                            {
                                'id': 3,
                                'name': 'Cable Adduction',
                                'imageUrl': 'assets/images/CableAdduction.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 4,
                        'exercises': [
                            {
                                'name': 'Cable Leg Curl',
                                'imageUrl': 'assets/images/CableLegCurl.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 50,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 5,
                        'exercises': [
                            {
                                'name': 'Cable Calf Raise',
                                'imageUrl': 'assets/images/CableCalfRaise.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 70,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 6,
                        'exercises': [
                            {
                                'name': 'Bodyweight Flutter Kicks',
                                'imageUrl': 'assets/images/BodyweightFlutterKicks.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 7,
                        'exercises': [
                            {
                                'name': 'Weighted Situps',
                                'imageUrl': 'assets/images/WeightedSitups.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    },
                                    {
                                        'weight': 25,
                                        'weightUnit': WeightUnit.Lbs,
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    },
                    {
                        'id': 8,
                        'exercises': [
                            {
                                'name': 'Plank',
                                'imageUrl': 'assets/images/Plank.png',
                                'isFavorite': false,
                                'reps': [
                                    {
                                        seconds: 10
                                    },
                                    {
                                        seconds: 10
                                    },
                                    {
                                        seconds: 10
                                    },
                                ],
                                'restBetweenReps': 5,
                                'restAfterExercise': 10
                            }
                        ]
                    },
                    {
                        'id': 9,
                        'exercises': [
                            {
                                'name': 'Twist',
                                'imageUrl': 'assets/images/Twist.png',
                                'repetition': RepetitionSpeed.OneOne,
                                'isFavorite': false,
                                'reps': [
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    },
                                    {
                                        'times': 12
                                    }
                                ],
                                'restBetweenReps': 20,
                                'restAfterExercise': 20
                            }
                        ]
                    }
                ],
            }
        ]
     }]
};
