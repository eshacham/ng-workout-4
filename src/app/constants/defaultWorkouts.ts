
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
                                'guid': '9130a0bf-2578-4280-ab91-a78b1304135c',
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
                                'guid': 'e09c12f1-c411-4ace-9825-7bbe829325af',
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
                                'guid': '76c3f68a-2963-451b-8456-1ace7dba8fb3',
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
                                'guid': '2c81279e-1eaa-46e2-8f7a-734da40019c9',
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
                                'guid': 'b87a8983-e81f-4fee-8a44-c672a926364b',
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
                                'guid': '81eb45a2-6013-4297-8625-f9e89662afdb',
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
                                'guid': '27a12171-004c-4407-955b-47eb895a5827',
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
                                'guid': '8c17580b-ea6c-4fd8-9fdc-0fb3b125db0d',
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
                                'guid': '737183b5-9b41-4042-a208-5afd9d220096',
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
                                'guid': '819ba290-01fd-4b0f-9434-1e9127ce708e',
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
                                'guid': 'fff7c20c-1e2c-4468-ba28-cd036767a057',
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
                                'guid': '78a6207c-e8e5-469d-8f71-6e10bf5e8dc0',
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
                                'guid': '11c1303f-d9a8-4aaf-8922-43ed70bc1695',
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
                                'guid': '',  'imageUrl': 'assets/images/DumbbellFly.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DumbbellHorizontalRowInclineProne.png',
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
                                'guid': 'c2990835-439b-4b56-bd74-3906d54e5338',
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
                                'guid': '',  'imageUrl': 'assets/images/InclinePushupNarrowGrip.jpg',
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
                                'guid': '0c92a436-9778-4520-81f0-fecb8c8e1d2d',
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
                                'guid': '3824a1f7-8254-4479-818f-50475a5aea46',
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
                                'guid': '80b9a081-c5e3-46a8-83d4-63e2f870c150',
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
                                'guid': 'e1ba0fa4-0083-4db6-8dc8-d9b482c66550',
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
                                'guid': 'a344396b-fe06-4d0d-9bed-d8940ff24c50',
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
                                'guid': '0f26482e-8cc1-4311-b70e-cb4dc2a72ed7',
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
                                'guid': '',  'imageUrl': 'assets/images/DumbbellArmCircles.png',
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
                                'guid': '',  'imageUrl': 'assets/images/MachineRowMediumGrip.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DummbellBicepsCurlStandingUnderhandGrip.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CableShrug.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DragonFlags.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DeclineSitups.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CrossBodyCrunch.png',
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
                                'guid': '',  'imageUrl': 'assets/images/LyingScissorsKicks.png',
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
                                'guid': '',  'imageUrl': 'assets/images/WalkingLungeWithSideWeights.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CableAbduction.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CableAdduction.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CableLegCurl.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CableCalfRaise.png',
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
                                'guid': '',  'imageUrl': 'assets/images/BodyweightFlutterKicks.png',
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
                                'guid': '',  'imageUrl': 'assets/images/WeightedSitups.png',
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
                                'guid': '',  'imageUrl': 'assets/images/Plank.png',
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
                                'guid': '',  'imageUrl': 'assets/images/Twist.png',
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
                            'guid': '',  'imageUrl': 'assets/images/BenchPressWideGrip.jpeg',
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
                            'guid': '',  'imageUrl': 'assets/images/SeatedRopeCableRow.png',
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
                            'guid': '',  'imageUrl': 'assets/images/DumbbellWristCurl.png',
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
                            'guid': '',  'imageUrl': 'assets/images/CableTricepsPushdownOverheadGrip.png',
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
                            'guid': '',  'imageUrl': 'assets/images/CableBicepsCurlUnderhandGrip.png',
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
                            'guid': '',  'imageUrl': 'assets/images/LegRaiseMachine.png',
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
                            'guid': '',  'imageUrl': 'assets/images/CableLegCurl.png',
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
                            'guid': '',  'imageUrl': 'assets/images/CrossfitSitup.png',
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
                            'guid': '',  'imageUrl': 'assets/images/CrossBodyCrunch.png',
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
                            'guid': '',  'imageUrl': 'assets/images/BenchPressNarrowGrip.png',
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
                            'guid': '',  'imageUrl': 'assets/images/DumbbellBenshPressRotatingGrip.png',
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
                            'guid': '',  'imageUrl': 'assets/images/DumbbellBenshPressRotatingGrip.png',
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
                            'guid': '',  'imageUrl': 'assets/images/CableFly.png',
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
                            'guid': '',  'imageUrl': 'assets/images/DumbbellFly.png',
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
                            'guid': '',  'imageUrl': 'assets/images/DumbbellHorizontalRowInclineProne.png',
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
                            'guid': '',  'imageUrl': 'assets/images/DumbbellTricepsExtensionSeated.png',
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
                            'guid': '',  'imageUrl': 'assets/images/InclinePushupNarrowGrip.jpg',
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
                            'guid': '',  'imageUrl': 'assets/images/ReverseCableFlyOnFlatBench.png',
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
                            'guid': '',  'imageUrl': 'assets/images/Situps.png',
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
                            'guid': '',  'imageUrl': 'assets/images/SitupsWithWeightAboveHead.png',
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
                            'guid': '',  'imageUrl': 'assets/images/RussianTwist.png',
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
                            'guid': '',  'imageUrl': 'assets/images/CabelLatPulldownBehindNeckWideGrip.png',
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
                            'guid': '',  'imageUrl': 'assets/images/DeclineDumbbellPullover.png',
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
                            'guid': '',  'imageUrl': 'assets/images/DumbbellArmCircles.png',
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
                            'guid': '',  'imageUrl': 'assets/images/MachineRowMediumGrip.png',
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
                            'guid': '',  'imageUrl': 'assets/images/DummbellBicepsCurlStandingUnderhandGrip.png',
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
                            'guid': '',  'imageUrl': 'assets/images/CableShrug.png',
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
                            'guid': '',  'imageUrl': 'assets/images/DragonFlags.png',
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
                            'guid': '',  'imageUrl': 'assets/images/DeclineSitups.png',
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
                            'guid': '',  'imageUrl': 'assets/images/CrossBodyCrunch.png',
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
                            'guid': '',  'imageUrl': 'assets/images/LyingScissorsKicks.png',
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
                            'guid': '',  'imageUrl': 'assets/images/WalkingLungeWithSideWeights.png',
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
                            'guid': '',  'imageUrl': 'assets/images/CableAbduction.png',
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
                            'guid': '',  'imageUrl': 'assets/images/CableAdduction.png',
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
                            'guid': '',  'imageUrl': 'assets/images/CableLegCurl.png',
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
                            'guid': '',  'imageUrl': 'assets/images/CableCalfRaise.png',
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
                            'guid': '',  'imageUrl': 'assets/images/BodyweightFlutterKicks.png',
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
                            'guid': '',  'imageUrl': 'assets/images/WeightedSitups.png',
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
                            'guid': '',  'imageUrl': 'assets/images/Plank.png',
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
                            'guid': '',  'imageUrl': 'assets/images/Twist.png',
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
                                'guid': '',  'imageUrl': 'assets/images/BenchPressWideGrip.jpeg',
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
                                'guid': '',  'imageUrl': 'assets/images/SeatedRopeCableRow.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DumbbellWristCurl.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CableTricepsPushdownOverheadGrip.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CableBicepsCurlUnderhandGrip.png',
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
                                'guid': '',  'imageUrl': 'assets/images/LegRaiseMachine.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CableLegCurl.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CrossfitSitup.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CrossBodyCrunch.png',
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
                                'guid': '',  'imageUrl': 'assets/images/BenchPressNarrowGrip.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DumbbellBenshPressRotatingGrip.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DumbbellBenshPressRotatingGrip.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CableFly.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DumbbellFly.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DumbbellHorizontalRowInclineProne.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DumbbellTricepsExtensionSeated.png',
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
                                'guid': '',  'imageUrl': 'assets/images/InclinePushupNarrowGrip.jpg',
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
                                'guid': '',  'imageUrl': 'assets/images/ReverseCableFlyOnFlatBench.png',
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
                                'guid': '',  'imageUrl': 'assets/images/Situps.png',
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
                                'guid': '',  'imageUrl': 'assets/images/SitupsWithWeightAboveHead.png',
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
                                'guid': '',  'imageUrl': 'assets/images/RussianTwist.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CabelLatPulldownBehindNeckWideGrip.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DeclineDumbbellPullover.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DumbbellArmCircles.png',
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
                                'guid': '',  'imageUrl': 'assets/images/MachineRowMediumGrip.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DummbellBicepsCurlStandingUnderhandGrip.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CableShrug.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DragonFlags.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DeclineSitups.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CrossBodyCrunch.png',
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
                                'guid': '',  'imageUrl': 'assets/images/LyingScissorsKicks.png',
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
                                'guid': '',  'imageUrl': 'assets/images/WalkingLungeWithSideWeights.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CableAbduction.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CableAdduction.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CableLegCurl.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CableCalfRaise.png',
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
                                'guid': '',  'imageUrl': 'assets/images/BodyweightFlutterKicks.png',
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
                                'guid': '',  'imageUrl': 'assets/images/WeightedSitups.png',
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
                                'guid': '',  'imageUrl': 'assets/images/Plank.png',
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
                                'guid': '',  'imageUrl': 'assets/images/Twist.png',
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
                                'guid': '',  'imageUrl': 'assets/images/BenchPressWideGrip.jpeg',
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
                                'guid': '',  'imageUrl': 'assets/images/SeatedRopeCableRow.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DumbbellWristCurl.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CableTricepsPushdownOverheadGrip.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CableBicepsCurlUnderhandGrip.png',
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
                                'guid': '',  'imageUrl': 'assets/images/LegRaiseMachine.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CableLegCurl.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CrossfitSitup.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CrossBodyCrunch.png',
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
                                'guid': '',  'imageUrl': 'assets/images/BenchPressNarrowGrip.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DumbbellBenshPressRotatingGrip.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DumbbellBenshPressRotatingGrip.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CableFly.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DumbbellFly.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DumbbellHorizontalRowInclineProne.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DumbbellTricepsExtensionSeated.png',
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
                                'guid': '',  'imageUrl': 'assets/images/InclinePushupNarrowGrip.jpg',
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
                                'guid': '',  'imageUrl': 'assets/images/ReverseCableFlyOnFlatBench.png',
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
                                'guid': '',  'imageUrl': 'assets/images/Situps.png',
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
                                'guid': '',  'imageUrl': 'assets/images/SitupsWithWeightAboveHead.png',
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
                                'guid': '',  'imageUrl': 'assets/images/RussianTwist.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CabelLatPulldownBehindNeckWideGrip.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DeclineDumbbellPullover.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DumbbellArmCircles.png',
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
                                'guid': '',  'imageUrl': 'assets/images/MachineRowMediumGrip.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DummbellBicepsCurlStandingUnderhandGrip.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CableShrug.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DragonFlags.png',
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
                                'guid': '',  'imageUrl': 'assets/images/DeclineSitups.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CrossBodyCrunch.png',
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
                                'guid': '',  'imageUrl': 'assets/images/LyingScissorsKicks.png',
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
                                'guid': '',  'imageUrl': 'assets/images/WalkingLungeWithSideWeights.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CableAbduction.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CableAdduction.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CableLegCurl.png',
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
                                'guid': '',  'imageUrl': 'assets/images/CableCalfRaise.png',
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
                                'guid': '',  'imageUrl': 'assets/images/BodyweightFlutterKicks.png',
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
                                'guid': '',  'imageUrl': 'assets/images/WeightedSitups.png',
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
                                'guid': '',  'imageUrl': 'assets/images/Plank.png',
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
                                'guid': '',  'imageUrl': 'assets/images/Twist.png',
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
