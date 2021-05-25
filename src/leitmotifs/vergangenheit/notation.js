(function () {
    const { measure, notes, beam, curve, render } = new VF.Sheet({
        id: 'vergangenheit',
        measureWidths: [130, 260, 240]
    });

    // Measure 1
    measure('1/8')
        .addNotes([
            notes('F#4/8')
        ])
        .addClef('treble')
        .addTimeSignature('4/4');

    // Measure 2
    measure('4/4')
        .addNotes([
            notes('G#4/h/#1', 'G4/q/#2', 'G4/8/#3'),
            beam(notes('B4/16', 'F#4/16', { stem: 'up' }))
        ]);

    curve(1, 2);
    curve(2, 3);

    // Measure 3
    measure()
        .addNotes([
            notes('E4/q.'),
            beam(notes('F#4/16', 'C#4/16')),
            notes('G#4/h')
        ]);

    render();
})();
