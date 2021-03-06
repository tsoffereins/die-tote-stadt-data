(function () {
    const { measure, notes, tuplet, curve, render } = new VF.Sheet({
        id: 'gluck-das-mir-verblieb',
        measureWidths: [340, 300, 220, 280]
    });

    // Measure 1
    measure('4/4')
        .addNotes([
            notes('B4/q', 'C5/h', 'A4/8.', 'B4/16')
        ])
        .addClef('treble')
        .addTimeSignature('4/4');

    // Measure 2
    measure('3/4')
        .addNotes([
            notes('G4/h', 'A4/8.', 'B4/16')
        ])
        .addTimeSignature('3/4');

    // Measure 3
    measure()
        .addNotes([
            notes('C5/q', 'D5/h')
        ]);

    // Measure 4
    measure()
        .addNotes([
            tuplet(notes('B4/8', 'A4/8', 'B4/8/#1')),
            notes('B4/h/#2')
        ]);

    curve(1, 2);

    render()
})();
