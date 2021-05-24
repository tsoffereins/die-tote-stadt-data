(function () {
    const { measure, notes, beam, curve, render } = new VF.Sheet({
        id: 'pauls-liebe',
        measureWidths: [320, 180, 180]
    });

    // Measure 1
    measure('2/2')
        .addNotes([
                beam(notes('G4/8', 'Ab4/16', 'Bb4/16', { stem: 'up' })),
                notes('A4/q.', 'G4/8', 'B4/q/#1')
            ])
        .addClef('treble')
        .addTimeSignature('2/2');

    // Measure 2
    measure()
        .addNotes([
            notes('B4/q/#2', 'C5/h', 'D5/q')
        ]);

    curve(1, 2);

    // Measure 3
    measure()
        .addNotes([
            notes('G5/h/#3', 'G5/q/#4', 'B4/q/r')
        ]);

    curve(3, 4);

    // Render the score
    render();
})();
