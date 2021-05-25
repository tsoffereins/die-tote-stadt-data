(function () {
    const { measure, notes, tuplet, beam, articulate, render } = new VF.Sheet({
        id: 'marietta',
        measureWidths: [400, 200],
        height: 140,
        offsetY: 15
    });

    // Measure 1
    measure('4/4')
        .addNotes([
            tuplet(
                notes(
                    'B4/q/r',
                    '(G#4 A#4 C#5 E5 G#5)/q/#1',
                    '(F#4 A4 C5 E5 F#5)/q/#2'
                ),
                { num_notes: 3, y_offset: -10 }
            ),
            tuplet(
                notes(
                    '(G4 A4 C5 E5 G5)/q/#3',
                    '(C#4 F4 A4 C#5)/q/#4',
                    '(D#4 F4 A4 D#5)/q/#5'
                ),
                { num_notes: 3, y_offset: -10 }
            )
        ])
        .addClef('treble')
        .addTimeSignature('4/4');

    articulate([1, 2, 3, 4, 5], 'a>');

    // Measure 2
    measure('2/4')
        .addNotes([
            tuplet(
                beam(notes('F#4/8/#6', 'C#5/8/#7', { stem: 'down' })),
                notes('(F4 A4 C5 F#5)/h/#8'),
                { num_notes: 3, y_offset: -10 }
            )
        ]);

    articulate([6, 7, 8], 'a>');

    render();
})();
