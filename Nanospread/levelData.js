var levelData = [
    {
        level:0,
        grid:[
            [  1,  3,  4,  0, 14, 15, 16, 17, 17, 17],
            [  1,  3,  4,  0, 13, 14, 15, 16,  0, 17],
            [  1,  3,  4,  0, 12, 13, 14, 15,  0, 17],
            [  5,  5,  5,  0, 11, 12, 13, 14,  0, 17],
            [  6,  6,  6,  0, 10, 11, 12, 13,  0, 18],
            [  7,  7,  7,  0,  9, 10, 11, 12,  0, 18],
            [  7,  7,  7,  0,  9,  9, 10, 11,  0, 18],
            [  8,  8,  8,  9,  9,  0,  0,  0,  0, 18],
            [ 30,  0,  0,  0,  0, 24, 23, 22,  0, 18],
            [ 28,  0,  0,  0,  0, 23, 22, 21,  0, 18],
            [ 26, 25, 25, 24, 23, 22, 21, 20, 19, 18]]
    },
    {
        level:1,
        grid: [
            [  1,  3,  4,  6,  6,  7,  7,  0,  0,  0],
            [  1,  3,  4,  0,  7,  7,  8,  0,  0,  0],
            [  1,  3,  4,  0,  7,  8,  9, 18, 18, 18],
            [ 10,  0,  0,  0, 13,  0,  0, 18, 18, 18],
            [ 10, 11, 11,  0, 13, 14, 14, 18, 18, 18],
            [ 11, 11, 12,  0, 14, 14, 15,  0,  0, 30],
            [ 11, 12, 12,  0, 14, 15, 16,  0, 25, 25],
            [  0,  0, 17,  0,  0,  0, 21,  0, 24, 25],
            [  0,  0, 17, 18, 18, 21, 21, 22, 23,  0],
            [  0,  0, 18, 18, 19,  0, 22, 23,  0,  0],
            [  0,  0, 18, 19, 20,  0,  0,  0,  0,  0]]
    }


];

// grid: [ Empty Grid
//     [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]]