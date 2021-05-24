(function () {
    const { score, measure, notes, beam, articulate, find, render } = new VF.Sheet({
        id: 'tanzerin',
        measureWidths: [320, 220, 220, 220]
    });

    score.set({ time: '6/8' });

    // Measure 1
    measure()
        .addNotes([
            beam(notes('B#4/8/#1', 'D5/8')),
            notes(
                '(B4 D5 E5 G5)/8/#2',
                'B4/8/r',
                '(C5 E5 F#5 A5)/8/#3',
                'B4/8/r'
            )
        ])
        .addClef('bass')
        .addKeySignature('A')
        .addTimeSignature('6/8');

    articulate([1], 'a>');
    articulate([2, 3], 'a.');

    // Measure 2
    measure()
        .addNotes([
            beam(notes('B#4/8/#4', 'D5/8')),
            notes(
                '(B4 D5 E5 G5)/8/#5',
                'B4/8/r',
                '(C5 E5 F#5 A5)/8/#6',
                'B4/8/r'
            )
        ]);

    articulate([4], 'a>');
    articulate([5, 6], 'a.');

    // Measure 3
    measure()
        .addNotes([
            beam(
                notes(
                    '(B#4 D5 E5 G5)/8/#7',
                    'A5/8/#8',
                    'B5/8/#9',
                    'A5/8/#10',
                    'G5/8/#11',
                    'B5/8/#12'
                )
            ),
        ]);

    articulate([7], 'a>');
    articulate([8, 9, 10, 11, 12], 'a.');

    // Measure 4
    measure()
        .addNotes([
            beam(
                notes(
                    '(C#5 E5 G5 A5)/8/#13',
                    'B5/8/#14',
                    'A5/8/#15',
                    'G5/8/#16',
                    'F5/8/#17',
                    'E5/8/#18'
                )
            ),
        ]);

    articulate([13], 'a>');
    articulate([14, 15, 16, 17, 18], 'a.');

    find(18).addAccidental(0, new VF.Accidental('n'));

    render();
})();
