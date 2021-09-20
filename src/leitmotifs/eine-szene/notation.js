(function () {
    const { measure, notes, beam, render, articulate } = new VF.Sheet({
        id: 'eine-szene',
        measureWidths: [340],
        offsetY: 15
    });

    // Measure 1
    measure('4/4')
        .addNotes([
            beam(
                notes(
                    '(C5 E#5 G5 C6)/16/#1',
                    'B5/16/#2',
                    '(C5 E5 G5)/8/#3'
                )
            ),
            beam(
                notes(
                    '(C5 E#5 G5 C6)/16/#4',
                    'B5/16/#5',
                    '(C5 E5 G5)/8/#6'
                )
            ),
            beam(
                notes(
                    '(C5 E#5 G5 C6)/8/#7',
                    '(B4 D#5 F5 B5)/8/#8'
                )
            ),
            notes(
                '(C5 E5 G5)/q'
            )
        ])
        .addClef('bass')
        .addTimeSignature('4/4');

    articulate([1, 2, 3, 4, 5, 6, 7, 8], 'a.');
    articulate([1, 2, 4, 5, 7, 8], 'a>');

    render();
})();
